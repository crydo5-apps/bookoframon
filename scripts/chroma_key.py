#!/usr/bin/env python3
"""Magenta chroma-key JPEGs to transparent PNGs for slot symbols."""
from __future__ import annotations

import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


def is_magenta(r: np.ndarray, g: np.ndarray, b: np.ndarray) -> np.ndarray:
    mag_excess = np.minimum(r, b) - g
    # JPEG-safe: magenta compresses into pinks/purples
    return (
        ((r > 150) & (b > 150) & (g < 160) & (mag_excess > 28))
        | ((r > 200) & (b > 180) & (g < 120))
        | ((r > 180) & (b > 200) & (g < 120))
        | ((np.abs(r.astype(np.int16) - b.astype(np.int16)) < 50) & (g < 90) & (r > 140))
    )


def flood_from_border(mask: np.ndarray) -> np.ndarray:
    """Keep only magenta connected to the image border (the true background)."""
    h, w = mask.shape
    keep = np.zeros_like(mask, dtype=bool)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        if mask[0, x]:
            q.append((0, x))
            keep[0, x] = True
        if mask[h - 1, x]:
            q.append((h - 1, x))
            keep[h - 1, x] = True
    for y in range(h):
        if mask[y, 0] and not keep[y, 0]:
            q.append((y, 0))
            keep[y, 0] = True
        if mask[y, w - 1] and not keep[y, w - 1]:
            q.append((y, w - 1))
            keep[y, w - 1] = True
    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not keep[ny, nx]:
                keep[ny, nx] = True
                q.append((ny, nx))
    return keep


def chroma_key(src: Path, dst: Path) -> None:
    im = Image.open(src).convert("RGBA")
    arr = np.array(im).astype(np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    mag = is_magenta(r, g, b)
    bg = flood_from_border(mag)

    alpha = np.where(bg, 0.0, 255.0)

    # Dilate background by 1px to eat JPEG fringe
    from numpy.lib.stride_tricks import sliding_window_view

    pad = np.pad(bg, 1, constant_values=False)
    # simple 3x3 dilate
    dil = (
        pad[:-2, :-2] | pad[:-2, 1:-1] | pad[:-2, 2:]
        | pad[1:-1, :-2] | pad[1:-1, 1:-1] | pad[1:-1, 2:]
        | pad[2:, :-2] | pad[2:, 1:-1] | pad[2:, 2:]
    )
    fringe = dil & ~bg
    alpha = np.where(fringe, 0.0, alpha)

    mag_excess = np.clip(np.minimum(r, b) - g, 0, 255)
    remain = alpha > 0
    arr[:, :, 0] = np.where(remain, np.clip(r - mag_excess * 0.7, 0, 255), r)
    arr[:, :, 2] = np.where(remain, np.clip(b - mag_excess * 0.7, 0, 255), b)
    # boost green slightly to kill leftover pink
    arr[:, :, 1] = np.where(remain, np.clip(g + mag_excess * 0.15, 0, 255), g)

    arr[:, :, 3] = alpha
    out = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGBA")

    rgb = out.convert("RGB")
    a = out.getchannel("A").filter(ImageFilter.GaussianBlur(radius=0.6))
    # harden alpha after tiny blur
    a = a.point(lambda p: 0 if p < 40 else (255 if p > 180 else int((p - 40) * 255 / 140)))
    out = rgb.copy()
    out.putalpha(a)

    bbox = out.getchannel("A").point(lambda p: 255 if p > 12 else 0).getbbox()
    if bbox:
        pad_px = 18
        l, t_, r_, b_ = bbox
        l = max(0, l - pad_px)
        t_ = max(0, t_ - pad_px)
        r_ = min(out.width, r_ + pad_px)
        b_ = min(out.height, b_ + pad_px)
        out = out.crop((l, t_, r_, b_))

    side = max(out.width, out.height)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(out, ((side - out.width) // 2, (side - out.height) // 2), out)
    canvas = canvas.resize((512, 512), Image.Resampling.LANCZOS)
    canvas.save(dst, "PNG")
    print(f"wrote {dst} ({canvas.size})")


def main() -> None:
    pairs = list(zip(sys.argv[1::2], sys.argv[2::2]))
    if not pairs:
        raise SystemExit("usage: chroma_key.py src dst [src dst ...]")
    for src, dst in pairs:
        chroma_key(Path(src), Path(dst))


if __name__ == "__main__":
    main()
