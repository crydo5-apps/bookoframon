import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Minus, i as Volume2, l as BookOpen, n as X, o as ShoppingBag, r as VolumeX, s as Plus, t as Zap } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0ab12vQk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINE_STEPS = [
	1,
	5,
	10,
	15,
	20,
	25
];
/**
* 25 paylines on a 6×4 grid. Each entry is the row (0 = top) per reel.
*/
var PAYLINES = [
	[
		1,
		1,
		1,
		1,
		1,
		1
	],
	[
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		2,
		2,
		2,
		2,
		2,
		2
	],
	[
		3,
		3,
		3,
		3,
		3,
		3
	],
	[
		0,
		1,
		2,
		3,
		2,
		1
	],
	[
		3,
		2,
		1,
		0,
		1,
		2
	],
	[
		1,
		0,
		0,
		0,
		0,
		1
	],
	[
		2,
		3,
		3,
		3,
		3,
		2
	],
	[
		0,
		0,
		1,
		2,
		3,
		3
	],
	[
		3,
		3,
		2,
		1,
		0,
		0
	],
	[
		1,
		2,
		3,
		3,
		2,
		1
	],
	[
		2,
		1,
		0,
		0,
		1,
		2
	],
	[
		0,
		1,
		0,
		1,
		0,
		1
	],
	[
		3,
		2,
		3,
		2,
		3,
		2
	],
	[
		1,
		1,
		2,
		2,
		1,
		1
	],
	[
		2,
		2,
		1,
		1,
		2,
		2
	],
	[
		0,
		1,
		1,
		1,
		1,
		0
	],
	[
		3,
		2,
		2,
		2,
		2,
		3
	],
	[
		1,
		0,
		1,
		2,
		3,
		2
	],
	[
		2,
		3,
		2,
		1,
		0,
		1
	],
	[
		0,
		0,
		0,
		1,
		2,
		3
	],
	[
		3,
		3,
		3,
		2,
		1,
		0
	],
	[
		1,
		2,
		1,
		2,
		1,
		2
	],
	[
		2,
		1,
		2,
		1,
		2,
		1
	],
	[
		0,
		1,
		2,
		2,
		1,
		0
	]
];
/** Multipliers of bet-per-line. */
var LINE_PAYS = {
	explorer: {
		2: 10,
		3: 100,
		4: 500,
		5: 2500,
		6: 1e4
	},
	priestess: {
		2: 8,
		3: 80,
		4: 400,
		5: 2e3,
		6: 8e3
	},
	pharaoh: {
		2: 5,
		3: 40,
		4: 200,
		5: 1e3,
		6: 4e3
	},
	anubis: {
		3: 30,
		4: 150,
		5: 750,
		6: 2500
	},
	statue: {
		3: 25,
		4: 100,
		5: 500,
		6: 1500
	},
	scarab: {
		3: 25,
		4: 100,
		5: 500,
		6: 1500
	},
	ace: {
		3: 8,
		4: 40,
		5: 150,
		6: 500
	},
	king: {
		3: 8,
		4: 40,
		5: 150,
		6: 500
	},
	queen: {
		3: 5,
		4: 25,
		5: 100,
		6: 300
	},
	jack: {
		3: 5,
		4: 25,
		5: 100,
		6: 300
	},
	ten: {
		3: 5,
		4: 25,
		5: 100,
		6: 300
	},
	book: {}
};
/** Scatter pays × total bet. */
var SCATTER_PAYS = {
	2: 2,
	3: 20,
	4: 100,
	5: 500,
	6: 2500
};
var EXPANDABLE = [
	"explorer",
	"priestess",
	"pharaoh",
	"anubis",
	"statue",
	"scarab",
	"ace",
	"king",
	"queen",
	"jack",
	"ten"
];
var BET_STEPS = [
	1,
	2,
	5,
	10,
	20,
	50
];
var PICTURE_SYMBOLS = [
	"book",
	"explorer",
	"priestess",
	"pharaoh",
	"anubis",
	"statue",
	"scarab"
];
var ROYAL_SYMBOLS = [
	"ace",
	"king",
	"queen",
	"jack",
	"ten"
];
var ROYAL_GLYPH = {
	ace: {
		letter: "A",
		fill: "#c45a3a"
	},
	king: {
		letter: "K",
		fill: "#3a6ec4"
	},
	queen: {
		letter: "Q",
		fill: "#2e8a55"
	},
	jack: {
		letter: "J",
		fill: "#7a4ab8"
	},
	ten: {
		letter: "10",
		fill: "#2a8a8a"
	}
};
/**
* 40-stop strips, 1 book each. 4 visible rows → ~10% of reels show a book.
*/
var STRIPS = [
	[
		"ten",
		"jack",
		"queen",
		"king",
		"explorer",
		"ace",
		"scarab",
		"ten",
		"jack",
		"priestess",
		"book",
		"statue",
		"king",
		"ace",
		"pharaoh",
		"anubis",
		"ten",
		"jack",
		"scarab",
		"queen",
		"king",
		"ace",
		"statue",
		"explorer",
		"jack",
		"queen",
		"scarab",
		"priestess",
		"ace",
		"pharaoh",
		"ten",
		"statue",
		"anubis",
		"queen",
		"king",
		"ten",
		"jack",
		"scarab",
		"ace",
		"statue"
	],
	[
		"jack",
		"ten",
		"ace",
		"king",
		"statue",
		"queen",
		"ten",
		"pharaoh",
		"jack",
		"ace",
		"book",
		"scarab",
		"king",
		"ten",
		"explorer",
		"queen",
		"anubis",
		"ace",
		"statue",
		"ten",
		"king",
		"scarab",
		"queen",
		"pharaoh",
		"ten",
		"jack",
		"ace",
		"explorer",
		"king",
		"statue",
		"queen",
		"priestess",
		"jack",
		"anubis",
		"queen",
		"scarab",
		"ten",
		"priestess",
		"king",
		"scarab"
	],
	[
		"queen",
		"king",
		"ten",
		"jack",
		"scarab",
		"ace",
		"statue",
		"queen",
		"explorer",
		"ten",
		"book",
		"king",
		"jack",
		"pharaoh",
		"ace",
		"ten",
		"statue",
		"queen",
		"anubis",
		"scarab",
		"jack",
		"ten",
		"ace",
		"explorer",
		"queen",
		"king",
		"statue",
		"ten",
		"jack",
		"pharaoh",
		"ace",
		"scarab",
		"priestess",
		"queen",
		"anubis",
		"king",
		"priestess",
		"ten",
		"jack",
		"statue"
	],
	[
		"ace",
		"ten",
		"jack",
		"statue",
		"king",
		"queen",
		"scarab",
		"ten",
		"pharaoh",
		"ace",
		"jack",
		"book",
		"queen",
		"king",
		"explorer",
		"ten",
		"statue",
		"ace",
		"jack",
		"scarab",
		"queen",
		"ten",
		"king",
		"pharaoh",
		"anubis",
		"statue",
		"jack",
		"ten",
		"explorer",
		"queen",
		"king",
		"scarab",
		"priestess",
		"ace",
		"anubis",
		"queen",
		"priestess",
		"jack",
		"statue",
		"scarab"
	],
	[
		"king",
		"queen",
		"ace",
		"ten",
		"jack",
		"explorer",
		"statue",
		"king",
		"scarab",
		"queen",
		"ten",
		"book",
		"ace",
		"jack",
		"pharaoh",
		"king",
		"statue",
		"ten",
		"queen",
		"scarab",
		"ace",
		"jack",
		"explorer",
		"king",
		"ten",
		"statue",
		"queen",
		"pharaoh",
		"ace",
		"jack",
		"anubis",
		"ten",
		"priestess",
		"scarab",
		"anubis",
		"queen",
		"priestess",
		"statue",
		"jack",
		"scarab"
	],
	[
		"scarab",
		"ace",
		"queen",
		"ten",
		"king",
		"anubis",
		"jack",
		"statue",
		"queen",
		"pharaoh",
		"ten",
		"book",
		"jack",
		"ace",
		"explorer",
		"king",
		"scarab",
		"queen",
		"statue",
		"ten",
		"priestess",
		"jack",
		"ace",
		"pharaoh",
		"king",
		"ten",
		"anubis",
		"queen",
		"statue",
		"jack",
		"explorer",
		"ace",
		"scarab",
		"priestess",
		"king",
		"ten",
		"statue",
		"queen",
		"jack",
		"scarab"
	]
];
function randInt(n) {
	return Math.floor(Math.random() * n);
}
function isPayCount(n) {
	return n === 2 || n === 3 || n === 4 || n === 5 || n === 6;
}
function visibleFromStop(reel, stop) {
	const strip = STRIPS[reel];
	const len = strip.length;
	return Array.from({ length: 4 }, (_, row) => strip[(stop + row) % len]);
}
function gridFromStops(stops) {
	return Array.from({ length: 6 }, (_, reel) => stops[reel] ?? 0).map((stop, reel) => visibleFromStop(reel, stop));
}
function spinStops() {
	return STRIPS.map((strip) => randInt(strip.length));
}
function pickExpandingSymbol() {
	return EXPANDABLE[randInt(EXPANDABLE.length)];
}
function countScatter(grid) {
	let n = 0;
	for (const reel of grid) for (const s of reel) if (s === "book") n += 1;
	return n;
}
function evaluateLine(grid, lineIndex, betPerLine, wildOk) {
	const rows = PAYLINES[lineIndex];
	const first = grid[0][rows[0]];
	let symbol = first === "book" ? "book" : first;
	let count = 1;
	for (let reel = 1; reel < 6; reel++) {
		const s = grid[reel][rows[reel]];
		if (symbol === "book") {
			if (s === "book") {
				count += 1;
				continue;
			}
			symbol = s;
			count += 1;
			continue;
		}
		if (s === symbol || s === "book" && wildOk(symbol)) {
			count += 1;
			continue;
		}
		break;
	}
	if (symbol === "book") return null;
	const pay = isPayCount(count) ? LINE_PAYS[symbol][count] : void 0;
	if (!pay) return null;
	const positions = [];
	for (let reel = 0; reel < count; reel++) positions.push({
		reel,
		row: rows[reel]
	});
	return {
		line: lineIndex,
		symbol,
		count,
		amount: pay * betPerLine,
		positions
	};
}
function expandGrid(grid, special, minReels = 1) {
	const hits = [];
	for (let r = 0; r < 6; r++) if (grid[r].includes(special)) hits.push(r);
	if (hits.length < minReels) return {
		grid,
		reels: []
	};
	const next = grid.map((col) => col.slice());
	for (const r of hits) next[r] = Array.from({ length: 4 }, () => special);
	return {
		grid: next,
		reels: hits
	};
}
function evaluateSpin(stops, betPerLine, lines, expandSymbol, minExpandReels = 1) {
	let grid = gridFromStops(stops);
	let expandReels = [];
	let expandWin = 0;
	if (expandSymbol) {
		const expanded = expandGrid(grid, expandSymbol, minExpandReels);
		grid = expanded.grid;
		expandReels = expanded.reels;
		const n = expandReels.length;
		const pay = isPayCount(n) ? LINE_PAYS[expandSymbol][n] : void 0;
		if (pay) expandWin = pay * betPerLine * lines;
	}
	const lineWins = [];
	const active = Math.max(1, Math.min(25, lines));
	for (let i = 0; i < active; i++) {
		const win = evaluateLine(grid, i, betPerLine, (sym) => {
			if (!expandSymbol) return true;
			return sym !== expandSymbol;
		});
		if (!win) continue;
		if (expandSymbol && win.symbol === expandSymbol) continue;
		lineWins.push(win);
	}
	const scatterCount = countScatter(gridFromStops(stops));
	const scatterWin = (isPayCount(scatterCount) ? SCATTER_PAYS[scatterCount] ?? 0 : 0) * (betPerLine * active);
	const bonusTrigger = scatterCount >= 3;
	const totalWin = lineWins.reduce((s, w) => s + w.amount, 0) + scatterWin + expandWin;
	return {
		grid: gridFromStops(stops),
		stops,
		lineWins,
		scatterCount,
		scatterWin,
		expandReels,
		expandSymbol,
		expandWin,
		totalWin,
		bonusTrigger
	};
}
function totalBet(lines, betPerLine) {
	return lines * betPerLine;
}
function formatCredits(n, lang) {
	return Math.round(n).toLocaleString(lang === "de" ? "de-DE" : "en-US");
}
function nextLineStep(current, dir) {
	const idx = LINE_STEPS.indexOf(current);
	const from = idx === -1 ? LINE_STEPS.indexOf(25) : idx;
	return LINE_STEPS[Math.max(0, Math.min(LINE_STEPS.length - 1, from + dir))];
}
function easeOutCubic(t) {
	return 1 - (1 - t) ** 3;
}
function isRoyal(id) {
	return id in ROYAL_GLYPH;
}
function wrapIndex(i, len) {
	return (i % len + len) % len;
}
function ReelsCanvas({ assets, grid, spinning, stops, fromStops, reducedMotion, turbo, forceLand, wins, scatterRows, expandReels, expandSymbol, highlightLine, onLanded, onReelStop }) {
	const canvasRef = (0, import_react.useRef)(null);
	const frameRef = (0, import_react.useRef)(null);
	const reelsRef = (0, import_react.useRef)([]);
	const idleOffset = (0, import_react.useRef)(Array.from({ length: 6 }, (_, i) => fromStops[i] ?? 0));
	const spinGen = (0, import_react.useRef)(0);
	const landedRef = (0, import_react.useRef)(onLanded);
	const stopRef = (0, import_react.useRef)(onReelStop);
	const expandT = (0, import_react.useRef)(1);
	const inited = (0, import_react.useRef)(false);
	const finishRef = (0, import_react.useRef)(() => {});
	const turboNow = (0, import_react.useRef)(turbo);
	turboNow.current = turbo;
	landedRef.current = onLanded;
	stopRef.current = onReelStop;
	if (!inited.current && fromStops.length === 6) {
		idleOffset.current = fromStops.slice();
		inited.current = true;
	}
	(0, import_react.useEffect)(() => {
		if (expandReels.length) expandT.current = 0;
	}, [expandReels]);
	(0, import_react.useEffect)(() => {
		if (!spinning || !stops || stops.length !== 6) return;
		const gen = ++spinGen.current;
		const isTurbo = turboNow.current;
		const base = isTurbo ? 340 : reducedMotion ? 320 : 1500;
		const stagger = isTurbo ? 38 : reducedMotion ? 70 : 220;
		const now = performance.now();
		reelsRef.current = stops.map((stop, i) => {
			const stripLen = STRIPS[i].length;
			const from = idleOffset.current[i] ?? 0;
			const loops = isTurbo ? 1 : reducedMotion ? 1 : 4 + i;
			const delta = wrapIndex(stop - wrapIndex(Math.round(from), stripLen), stripLen);
			return {
				from,
				to: from + loops * stripLen + delta,
				offset: from,
				start: now,
				duration: base + i * stagger,
				done: false,
				announced: false
			};
		});
		let raf = 0;
		let landed = false;
		const settle = (r, i) => {
			const stripLen = STRIPS[i].length;
			r.offset = r.to;
			r.done = true;
			idleOffset.current[i] = wrapIndex(Math.round(r.to), stripLen);
		};
		const finish = () => {
			if (landed || gen !== spinGen.current) return;
			landed = true;
			for (let i = 0; i < 6; i++) {
				const r = reelsRef.current[i];
				if (!r) continue;
				settle(r, i);
				if (!r.announced) {
					r.announced = true;
					stopRef.current(i);
				}
			}
			landedRef.current();
		};
		const tick = (tNow) => {
			if (gen !== spinGen.current) return;
			let allDone = true;
			for (let i = 0; i < 6; i++) {
				const r = reelsRef.current[i];
				if (!r) continue;
				if (r.done) continue;
				const u = Math.min(1, Math.max(0, (tNow - r.start) / r.duration));
				r.offset = r.from + (r.to - r.from) * easeOutCubic(u);
				if (u >= 1) {
					settle(r, i);
					if (!r.announced) {
						r.announced = true;
						stopRef.current(i);
					}
				} else allDone = false;
			}
			if (allDone) {
				finish();
				return;
			}
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		finishRef.current = finish;
		const failsafe = window.setTimeout(finish, base + stagger * 5 + 400);
		return () => {
			cancelAnimationFrame(raf);
			window.clearTimeout(failsafe);
			finishRef.current = () => {};
		};
	}, [
		spinning,
		stops,
		reducedMotion
	]);
	(0, import_react.useEffect)(() => {
		if (forceLand <= 0) return;
		finishRef.current();
	}, [forceLand]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const frame = frameRef.current;
		if (!canvas || !frame) return;
		let raf = 0;
		const draw = (now) => {
			if (expandReels.length && expandT.current < 1) expandT.current = Math.min(1, expandT.current + (turbo ? .14 : .04));
			const dpr = Math.min(2, window.devicePixelRatio || 1);
			const cssW = frame.clientWidth;
			const cssH = frame.clientHeight;
			const pw = Math.max(1, Math.floor(cssW * dpr));
			const ph = Math.max(1, Math.floor(cssH * dpr));
			if (canvas.width !== pw || canvas.height !== ph) {
				canvas.width = pw;
				canvas.height = ph;
			}
			const ctx = canvas.getContext("2d");
			if (!ctx) return;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const gap = Math.max(2, Math.min(cssW, cssH) * .008);
			const padX = Math.max(4, cssW * .012);
			const padY = Math.max(4, cssH * .012);
			const innerW = Math.max(1, cssW - padX * 2);
			const innerH = Math.max(1, cssH - padY * 2);
			const cellW = (innerW - gap * 5) / 6;
			const cellH = innerH / 4;
			const gridW = cellW * 6 + gap * 5;
			const gridH = cellH * 4;
			const ox = (cssW - gridW) / 2;
			const oy = (cssH - gridH) / 2;
			ctx.clearRect(0, 0, cssW, cssH);
			const stone = ctx.createLinearGradient(0, oy, 0, oy + gridH);
			stone.addColorStop(0, "#4a3418");
			stone.addColorStop(.45, "#26180c");
			stone.addColorStop(1, "#140e08");
			roundRect(ctx, ox - 5, oy - 5, gridW + 10, gridH + 10, 10);
			ctx.fillStyle = stone;
			ctx.fill();
			const pulse = .5 + .5 * Math.sin(now / 220);
			const winCells = /* @__PURE__ */ new Set();
			for (const win of wins) for (const p of win.positions) winCells.add(`${p.reel}:${p.row}`);
			for (const s of scatterRows) winCells.add(`${s.reel}:${s.row}`);
			for (let reel = 0; reel < 6; reel++) {
				const x = ox + reel * (cellW + gap);
				ctx.save();
				ctx.beginPath();
				ctx.rect(x, oy, cellW, gridH);
				ctx.clip();
				const strip = STRIPS[reel];
				const len = strip.length;
				const rs = reelsRef.current[reel];
				const offset = rs ? rs.offset : idleOffset.current[reel] ?? 0;
				const special = !spinning && expandReels.includes(reel) && expandSymbol ? expandSymbol : null;
				const tExp = expandT.current;
				const first = Math.floor(offset) - 1;
				const last = first + 4 + 2;
				for (let i = first; i <= last; i++) {
					const row = i - Math.round(offset);
					const symbol = strip[wrapIndex(i, len)];
					const y = oy + (i - offset) * cellH;
					const inWindow = row >= 0 && row < 4;
					const hot = inWindow && winCells.has(`${reel}:${row}`);
					if (special) {
						if (!inWindow) continue;
						if (tExp < 1) {
							const fromY = oy + Math.max(0, grid[reel]?.indexOf(special) ?? 0) * cellH;
							drawSymbol(ctx, assets, special, x, fromY + (oy + row * cellH - fromY) * easeOutCubic(tExp), cellW, cellH, 1 + .05 * pulse, now, true);
						} else drawSymbol(ctx, assets, special, x, oy + row * cellH, cellW, cellH, 1 + .05 * pulse, now, true);
					} else drawSymbol(ctx, assets, symbol, x, y, cellW, cellH, hot ? 1 + .055 * pulse : 1, now, hot);
				}
				ctx.restore();
			}
			ctx.strokeStyle = "rgba(232, 197, 92, 0.75)";
			ctx.lineWidth = 2;
			roundRect(ctx, ox - 4, oy - 4, gridW + 8, gridH + 8, 10);
			ctx.stroke();
			ctx.strokeStyle = "rgba(201, 162, 39, 0.22)";
			ctx.lineWidth = 1;
			for (let reel = 0; reel < 5; reel++) {
				const x = ox + (reel + 1) * cellW + reel * gap + gap / 2;
				ctx.beginPath();
				ctx.moveTo(x, oy + 4);
				ctx.lineTo(x, oy + gridH - 4);
				ctx.stroke();
			}
			for (let row = 1; row < 4; row++) {
				const y = oy + row * cellH;
				ctx.beginPath();
				ctx.moveTo(ox + 4, y);
				ctx.lineTo(ox + gridW - 4, y);
				ctx.stroke();
			}
			if (!spinning) {
				const traces = /* @__PURE__ */ new Set();
				for (const w of wins) traces.add(w.line);
				if (highlightLine !== null) traces.add(highlightLine);
				for (const li of traces) {
					const rows = PAYLINES[li];
					if (!rows) continue;
					const isHi = li === highlightLine;
					ctx.save();
					ctx.strokeStyle = isHi ? `rgba(255, 214, 90, ${.55 + .4 * pulse})` : "rgba(232, 197, 92, 0.28)";
					ctx.lineWidth = isHi ? 3.2 : 1.6;
					ctx.shadowColor = isHi ? "rgba(255, 190, 40, 0.85)" : "transparent";
					ctx.shadowBlur = isHi ? 10 : 0;
					ctx.beginPath();
					for (let reel = 0; reel < 6; reel++) {
						const x = ox + reel * (cellW + gap) + cellW / 2;
						const y = oy + rows[reel] * cellH + cellH / 2;
						if (reel === 0) ctx.moveTo(x, y);
						else ctx.lineTo(x, y);
					}
					ctx.stroke();
					ctx.restore();
				}
			}
			raf = requestAnimationFrame(draw);
		};
		raf = requestAnimationFrame(draw);
		return () => cancelAnimationFrame(raf);
	}, [
		assets,
		grid,
		spinning,
		wins,
		scatterRows,
		expandReels,
		expandSymbol,
		highlightLine,
		turbo
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: frameRef,
		className: "relative h-full w-full min-h-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 h-full w-full touch-none",
			role: "img",
			"aria-label": "Walzen"
		})
	});
}
function roundRect(ctx, x, y, w, h, r) {
	const rr = Math.min(r, w / 2, h / 2);
	ctx.beginPath();
	ctx.moveTo(x + rr, y);
	ctx.arcTo(x + w, y, x + w, y + h, rr);
	ctx.arcTo(x, y + h, x, y + h, rr);
	ctx.arcTo(x, y + h, x, y, rr);
	ctx.arcTo(x, y, x + w, y, rr);
	ctx.closePath();
}
function drawSymbol(ctx, assets, id, x, y, cellW, cellH, scale, now, hot) {
	const cx = x + cellW / 2;
	const cy = y + cellH / 2;
	const size = Math.min(cellW, cellH) * .92 * scale;
	const dx = cx - size / 2;
	const dy = cy - size / 2;
	ctx.save();
	if (hot || id === "book") {
		ctx.shadowColor = id === "book" ? "rgba(255, 196, 64, 0.75)" : "rgba(255, 214, 110, 0.4)";
		ctx.shadowBlur = 14 + 6 * Math.sin(now / 180);
	}
	if (isRoyal(id)) {
		ctx.drawImage(assets.cartouche, dx, dy, size, size);
		const g = ROYAL_GLYPH[id];
		ctx.font = `700 ${Math.floor(size * (id === "ten" ? .36 : .44))}px Cinzel, serif`;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.lineWidth = Math.max(2, size * .034);
		ctx.strokeStyle = "#1a1208";
		ctx.fillStyle = g.fill;
		ctx.strokeText(g.letter, cx, cy + size * .02);
		ctx.fillText(g.letter, cx, cy + size * .02);
		ctx.lineWidth = 1.2;
		ctx.strokeStyle = "rgba(232,197,92,0.9)";
		ctx.strokeText(g.letter, cx, cy + size * .02);
	} else {
		const img = assets.pictures[id];
		if (img?.complete) ctx.drawImage(img, dx, dy, size, size);
	}
	ctx.restore();
}
var SlotAudio = class {
	ctx = null;
	buses = null;
	drone = null;
	muted = false;
	unlock() {
		if (!this.ctx) {
			const ctx = new AudioContext({ latencyHint: "interactive" });
			const master = ctx.createGain();
			const sfx = ctx.createGain();
			const music = ctx.createGain();
			sfx.gain.value = .85;
			music.gain.value = .45;
			master.gain.value = this.muted ? 0 : .7;
			sfx.connect(master);
			music.connect(master);
			master.connect(ctx.destination);
			this.ctx = ctx;
			this.buses = {
				master,
				sfx,
				music
			};
		}
		if (this.ctx.state === "suspended") this.ctx.resume();
	}
	setMuted(muted) {
		this.muted = muted;
		const master = this.buses?.master;
		const ctx = this.ctx;
		if (!master || !ctx) return;
		master.gain.setTargetAtTime(muted ? 0 : .7, ctx.currentTime, .03);
	}
	resume() {
		if (this.ctx?.state === "suspended") this.ctx.resume();
	}
	dest(bus = "sfx") {
		return this.buses?.[bus] ?? null;
	}
	env(dest, type, freq, duration, peak = .18, startFreq) {
		const ctx = this.ctx;
		if (!ctx || this.muted) return;
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = type;
		osc.frequency.setValueAtTime(startFreq ?? freq, ctx.currentTime);
		if (startFreq !== void 0) osc.frequency.exponentialRampToValueAtTime(Math.max(freq, 1), ctx.currentTime + duration);
		gain.gain.setValueAtTime(1e-4, ctx.currentTime);
		gain.gain.exponentialRampToValueAtTime(peak, ctx.currentTime + .012);
		gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + duration);
		osc.connect(gain);
		gain.connect(dest);
		osc.start();
		osc.stop(ctx.currentTime + duration + .02);
		osc.onended = () => {
			osc.disconnect();
			gain.disconnect();
		};
	}
	click() {
		const dest = this.dest();
		if (!dest) return;
		this.env(dest, "square", 920, .05, .07);
	}
	startDrone() {
		const ctx = this.ctx;
		const dest = this.dest("music");
		if (!ctx || !dest || this.muted) return;
		this.stopDrone();
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		const filter = ctx.createBiquadFilter();
		osc.type = "sawtooth";
		osc.frequency.value = 62;
		filter.type = "lowpass";
		filter.frequency.value = 420;
		filter.Q.value = 2.4;
		gain.gain.setValueAtTime(1e-4, ctx.currentTime);
		gain.gain.exponentialRampToValueAtTime(.12, ctx.currentTime + .08);
		osc.connect(filter);
		filter.connect(gain);
		gain.connect(dest);
		osc.start();
		this.drone = {
			osc,
			gain,
			filter
		};
	}
	stopDrone() {
		const ctx = this.ctx;
		if (!ctx || !this.drone) return;
		const { osc, gain, filter } = this.drone;
		try {
			gain.gain.setTargetAtTime(1e-4, ctx.currentTime, .04);
			osc.stop(ctx.currentTime + .12);
		} catch {}
		osc.onended = () => {
			osc.disconnect();
			gain.disconnect();
			filter.disconnect();
		};
		this.drone = null;
	}
	reelStop(index) {
		const dest = this.dest();
		if (!dest) return;
		this.env(dest, "triangle", 220 + index * 55, .09, .16);
		this.env(dest, "square", 90, .07, .08);
	}
	book() {
		const dest = this.dest();
		if (!dest) return;
		this.env(dest, "sine", 660, .35, .16, 420);
		this.env(dest, "triangle", 990, .45, .1, 660);
	}
	win(tier) {
		const dest = this.dest();
		if (!dest || !this.ctx) return;
		(tier === "epic" ? [
			392,
			494,
			587,
			784,
			988
		] : tier === "mega" ? [
			349,
			440,
			523,
			698
		] : tier === "great" ? [
			330,
			392,
			494
		] : [392, 494]).forEach((n, i) => {
			window.setTimeout(() => this.env(dest, "triangle", n, .28, .14), i * 90);
		});
	}
	bonus() {
		const dest = this.dest();
		if (!dest) return;
		[
			392,
			494,
			587,
			784
		].forEach((n, i) => {
			window.setTimeout(() => this.env(dest, "sine", n, .4, .18), i * 140);
		});
	}
	gambleWin() {
		const dest = this.dest();
		if (!dest) return;
		this.env(dest, "triangle", 523, .2, .16);
		this.env(dest, "triangle", 784, .28, .14);
	}
	gambleLose() {
		const dest = this.dest();
		if (!dest) return;
		this.env(dest, "sawtooth", 140, .35, .12, 90);
	}
	expand() {
		const dest = this.dest();
		if (!dest) return;
		this.env(dest, "sine", 240, .45, .14, 720);
	}
};
var audio = new SlotAudio();
var COPY = {
	de: {
		title: "Book of Ra",
		subtitle: "6 Rollen · 25 Linien",
		tapToEnter: "Berühren, um das Grab zu betreten",
		loading: "Das Grab öffnet sich …",
		credits: "Guthaben",
		bet: "Einsatz",
		win: "Gewinn",
		line: "Linie",
		lines: "Linien",
		betPerLine: "Einsatz / Linie",
		start: "Start",
		stop: "Stop",
		auto: "Auto",
		turbo: "Turbo",
		buy: "Kaufen",
		buyTitle: "Feature kaufen",
		buyFsTitle: "Freispiele kaufen",
		buyFsBody: "10 Freispiele mit expandierendem Symbol",
		buyFsCost: "100× Einsatz",
		buyExpandTitle: "Expand-Symbol",
		buyExpandBody: "Wähle ein Symbol. Liegt es auf mindestens 2 Walzen, füllt es diese senkrecht — wie in den Freispielen.",
		buyExpandCost: "10× Einsatz",
		buyPick: "Symbol wählen",
		buyArmed: "Expand",
		paytable: "Gewinnplan",
		settings: "Einstellungen",
		language: "Sprache",
		sound: "Ton",
		on: "An",
		off: "Aus",
		reload: "Nachladen",
		gamble: "Risiko",
		collect: "Nehmen",
		red: "Rot",
		black: "Schwarz",
		gambleHint: "Rot oder Schwarz — Gewinn verdoppeln",
		freeSpins: "Freispiele",
		specialSymbol: "Sondersymbol",
		bonusTitle: "Freispiele",
		bonusBody: "10 Freispiele mit expandierendem Symbol",
		retrigger: "Freispiele verlängert",
		greatWin: "Großer Gewinn",
		megaWin: "Mega-Gewinn",
		epicWin: "Legendärer Gewinn",
		scatter: "Scatter",
		wild: "Wild + Scatter",
		ofAKind: "gleicher Symbole",
		close: "Schließen",
		autoTitle: "Automatik",
		autoSpins: "Runden",
		stopBonus: "Stopp bei Freispielen",
		spaceHint: "Leertaste = Start",
		broke: "Guthaben reicht nicht — Nachladen oder Einsatz senken",
		biggest: "Bester Gewinn",
		picturePays: "Bildsymbole",
		royalPays: "Kartensymbole",
		linesTitle: "Gewinnlinien",
		rulesTitle: "Regeln",
		rule1: "6 Walzen, 4 Reihen, bis zu 25 Gewinnlinien. Auszahlung von links nach rechts.",
		rule2: "Das Buch ersetzt alle Symbole und zahlt als Scatter überall.",
		rule3: "3+ Bücher lösen 10 Freispiele mit einem expandierenden Symbol aus.",
		rule4: "Das Sondersymbol dehnt sich über die ganze Walze und zahlt auf allen aktiven Linien.",
		rule5: "Nach einem Gewinn: Risiko auf Rot oder Schwarz, bis zu 5 Mal.",
		rule6: "Freispiele für das 100-fache des Einsatzes kaufen. Expand-Symbol für das 10-fache: expandiert ab 2 Walzen.",
		symbols: {
			book: "Buch",
			explorer: "Entdecker",
			priestess: "Priesterin",
			pharaoh: "Pharao",
			anubis: "Anubis",
			statue: "Statue",
			scarab: "Skarabäus",
			ace: "Ass",
			king: "König",
			queen: "Dame",
			jack: "Bube",
			ten: "Zehn"
		}
	},
	en: {
		title: "Book of Ra",
		subtitle: "6 Reels · 25 Lines",
		tapToEnter: "Touch to enter the tomb",
		loading: "The tomb is opening …",
		credits: "Credits",
		bet: "Bet",
		win: "Win",
		line: "Line",
		lines: "Lines",
		betPerLine: "Bet / line",
		start: "Start",
		stop: "Stop",
		auto: "Auto",
		turbo: "Turbo",
		buy: "Buy",
		buyTitle: "Buy a feature",
		buyFsTitle: "Buy free spins",
		buyFsBody: "10 free spins with an expanding symbol",
		buyFsCost: "100× bet",
		buyExpandTitle: "Expanding symbol",
		buyExpandBody: "Pick a symbol. If it lands on at least 2 reels, it fills those reels vertically — like in free spins.",
		buyExpandCost: "10× bet",
		buyPick: "Choose a symbol",
		buyArmed: "Expand",
		paytable: "Paytable",
		settings: "Settings",
		language: "Language",
		sound: "Sound",
		on: "On",
		off: "Off",
		reload: "Reload",
		gamble: "Gamble",
		collect: "Collect",
		red: "Red",
		black: "Black",
		gambleHint: "Red or black — double the win",
		freeSpins: "Free spins",
		specialSymbol: "Special symbol",
		bonusTitle: "Free spins",
		bonusBody: "10 free spins with an expanding symbol",
		retrigger: "Free spins extended",
		greatWin: "Great win",
		megaWin: "Mega win",
		epicWin: "Legendary win",
		scatter: "Scatter",
		wild: "Wild + Scatter",
		ofAKind: "of a kind",
		close: "Close",
		autoTitle: "Autoplay",
		autoSpins: "Rounds",
		stopBonus: "Stop on free spins",
		spaceHint: "Space = Start",
		broke: "Not enough credits — reload or lower the bet",
		biggest: "Best win",
		picturePays: "Picture symbols",
		royalPays: "Card symbols",
		linesTitle: "Paylines",
		rulesTitle: "Rules",
		rule1: "6 reels, 4 rows, up to 25 paylines. Wins count left to right.",
		rule2: "The book substitutes for every symbol and pays as scatter anywhere.",
		rule3: "3+ books award 10 free spins with one expanding symbol.",
		rule4: "The special symbol expands to fill its reel and pays on every active line.",
		rule5: "After a win: gamble red or black, up to 5 times.",
		rule6: "Buy free spins for 100× the bet. Expanding symbol for 10×: expands from 2 reels.",
		symbols: {
			book: "Book",
			explorer: "Explorer",
			priestess: "Priestess",
			pharaoh: "Pharaoh",
			anubis: "Anubis",
			statue: "Statue",
			scarab: "Scarab",
			ace: "Ace",
			king: "King",
			queen: "Queen",
			jack: "Jack",
			ten: "Ten"
		}
	}
};
function t(lang) {
	return COPY[lang];
}
var KEY = "book-of-ra-save";
var VERSION = 2;
var DEFAULTS = {
	version: VERSION,
	credits: 4e3,
	lines: 25,
	betPerLine: 1,
	lang: "de",
	muted: false,
	biggestWin: 0,
	turbo: false
};
function migrate(raw) {
	const save = {
		...DEFAULTS,
		...raw,
		version: VERSION
	};
	if ((raw.version ?? 0) < 2) save.lines = 25;
	return save;
}
function loadSave() {
	if (typeof window === "undefined") return { ...DEFAULTS };
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return { ...DEFAULTS };
		const save = migrate(JSON.parse(raw));
		if (!Number.isFinite(save.credits) || save.credits < 0) save.credits = DEFAULTS.credits;
		if (!LINE_STEPS.includes(save.lines)) save.lines = 25;
		if (![
			1,
			2,
			5,
			10,
			20,
			50
		].includes(save.betPerLine)) save.betPerLine = 1;
		if (save.lang !== "de" && save.lang !== "en") save.lang = "de";
		save.turbo = Boolean(save.turbo);
		return save;
	} catch {
		return { ...DEFAULTS };
	}
}
function writeSave(data) {
	try {
		localStorage.setItem(KEY, JSON.stringify({
			...data,
			version: VERSION
		}));
	} catch {}
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var PICTURE_FILES = {
	book: "/symbols/book.png",
	explorer: "/symbols/explorer.png",
	priestess: "/symbols/priestess.png",
	pharaoh: "/symbols/pharaoh.png",
	anubis: "/symbols/anubis.png",
	statue: "/symbols/statue.png",
	scarab: "/symbols/scarab.png"
};
function loadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "anonymous";
		img.onload = () => resolve(img);
		img.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to load ${src}`));
		img.src = src;
	});
}
async function loadAssets() {
	if (typeof document !== "undefined" && document.fonts?.load) await document.fonts.load("700 48px Cinzel").catch(() => void 0);
	const [cartouche, ...pics] = await Promise.all([loadImage("/symbols/cartouche.png"), ...Object.values(PICTURE_FILES).map(loadImage)]);
	const keys = Object.keys(PICTURE_FILES);
	const pictures = {};
	keys.forEach((k, i) => {
		pictures[k] = pics[i];
	});
	return {
		pictures,
		cartouche
	};
}
function scatterPositions(grid) {
	const out = [];
	grid.forEach((col, reel) => col.forEach((s, row) => {
		if (s === "book") out.push({
			reel,
			row
		});
	}));
	return out;
}
function winTier(win, bet) {
	if (win <= 0) return null;
	const x = win / bet;
	if (x >= 50) return "epic";
	if (x >= 20) return "mega";
	if (x >= 8) return "great";
	return "small";
}
function SlotApp() {
	const [phase, setPhase] = (0, import_react.useState)("start");
	const [assets, setAssets] = (0, import_react.useState)(null);
	const [loadError, setLoadError] = (0, import_react.useState)(false);
	const [lang, setLang] = (0, import_react.useState)("de");
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [credits, setCredits] = (0, import_react.useState)(4e3);
	const [lines, setLines] = (0, import_react.useState)(25);
	const [betPerLine, setBetPerLine] = (0, import_react.useState)(1);
	const [biggestWin, setBiggestWin] = (0, import_react.useState)(0);
	const [stops, setStops] = (0, import_react.useState)(() => [
		4,
		10,
		7,
		14,
		5,
		18
	]);
	const [spinning, setSpinning] = (0, import_react.useState)(false);
	const [pendingStops, setPendingStops] = (0, import_react.useState)(null);
	const [result, setResult] = (0, import_react.useState)(null);
	const [displayWin, setDisplayWin] = (0, import_react.useState)(0);
	const [highlightLine, setHighlightLine] = (0, import_react.useState)(null);
	const [expanding, setExpanding] = (0, import_react.useState)(false);
	const [freeSpins, setFreeSpins] = (0, import_react.useState)(0);
	const [expandSymbol, setExpandSymbol] = (0, import_react.useState)(null);
	const [bonusPick, setBonusPick] = (0, import_react.useState)(null);
	const [showPaytable, setShowPaytable] = (0, import_react.useState)(false);
	const [showAuto, setShowAuto] = (0, import_react.useState)(false);
	const [autoLeft, setAutoLeft] = (0, import_react.useState)(0);
	const [stopOnBonus, setStopOnBonus] = (0, import_react.useState)(true);
	const [gambleStake, setGambleStake] = (0, import_react.useState)(0);
	const [gambleRound, setGambleRound] = (0, import_react.useState)(0);
	const [cardFlip, setCardFlip] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("");
	const [reducedMotion, setReducedMotion] = (0, import_react.useState)(false);
	const [booted, setBooted] = (0, import_react.useState)(false);
	const [turbo, setTurbo] = (0, import_react.useState)(false);
	const [forceLand, setForceLand] = (0, import_react.useState)(0);
	const [showBuy, setShowBuy] = (0, import_react.useState)(false);
	const [buyKind, setBuyKind] = (0, import_react.useState)(null);
	const [paidExpand, setPaidExpand] = (0, import_react.useState)(null);
	const lineHintRef = (0, import_react.useRef)(0);
	const busy = (0, import_react.useRef)(false);
	const creditsRef = (0, import_react.useRef)(credits);
	const countRaf = (0, import_react.useRef)(0);
	const fsRef = (0, import_react.useRef)({
		left: 0,
		symbol: null
	});
	const autoRef = (0, import_react.useRef)({
		left: 0,
		stopBonus: true
	});
	const phaseRef = (0, import_react.useRef)(phase);
	const turboRef = (0, import_react.useRef)(false);
	const paidExpandRef = (0, import_react.useRef)(null);
	creditsRef.current = credits;
	phaseRef.current = phase;
	autoRef.current = {
		left: autoLeft,
		stopBonus: stopOnBonus
	};
	fsRef.current = {
		left: freeSpins,
		symbol: expandSymbol
	};
	turboRef.current = turbo;
	const copy = t(lang);
	const bet = totalBet(lines, betPerLine);
	const grid = (0, import_react.useMemo)(() => gridFromStops(stops), [stops]);
	(0, import_react.useEffect)(() => {
		const s = loadSave();
		setLang(s.lang);
		setMuted(s.muted);
		setCredits(s.credits);
		setLines(s.lines);
		setBetPerLine(s.betPerLine);
		setBiggestWin(s.biggestWin);
		setTurbo(s.turbo);
		setBooted(true);
	}, []);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReducedMotion(mq.matches);
		const fn = () => setReducedMotion(mq.matches);
		mq.addEventListener("change", fn);
		return () => mq.removeEventListener("change", fn);
	}, []);
	(0, import_react.useEffect)(() => {
		loadAssets().then(setAssets).catch(() => setLoadError(true));
	}, []);
	(0, import_react.useEffect)(() => {
		audio.setMuted(muted);
	}, [muted]);
	(0, import_react.useEffect)(() => {
		if (!booted) return;
		const persist = () => writeSave({
			version: 1,
			credits: creditsRef.current,
			lines,
			betPerLine,
			lang,
			muted,
			biggestWin,
			turbo
		});
		persist();
		const onHide = () => {
			if (document.visibilityState === "hidden") persist();
			else audio.resume();
		};
		document.addEventListener("visibilitychange", onHide);
		window.addEventListener("pagehide", persist);
		return () => {
			document.removeEventListener("visibilitychange", onHide);
			window.removeEventListener("pagehide", persist);
		};
	}, [
		booted,
		credits,
		lines,
		betPerLine,
		lang,
		muted,
		biggestWin,
		turbo
	]);
	const countUp = (0, import_react.useCallback)((from, to, ms) => {
		cancelAnimationFrame(countRaf.current);
		if (to <= from || ms < 80) {
			setDisplayWin(to);
			return;
		}
		const start = performance.now();
		const tick = (now) => {
			const u = Math.min(1, (now - start) / ms);
			setDisplayWin(Math.round(from + (to - from) * (1 - (1 - u) ** 3)));
			if (u < 1) countRaf.current = requestAnimationFrame(tick);
		};
		countRaf.current = requestAnimationFrame(tick);
	}, []);
	const finishPay = (0, import_react.useCallback)((res, awarded) => {
		setExpanding(false);
		setHighlightLine(null);
		const fs = fsRef.current;
		if (res.bonusTrigger) {
			if (fs.left > 0) {
				setFreeSpins((n) => n - 1 + 10);
				setAutoLeft(0);
				setStatus(copy.retrigger);
				audio.bonus();
				window.setTimeout(() => {
					busy.current = false;
					setPhase("idle");
				}, turboRef.current ? 220 : 900);
				return;
			}
			setPhase("bonusSelect");
			setBonusPick(null);
			audio.bonus();
			busy.current = false;
			return;
		}
		if (fs.left > 1) {
			setFreeSpins((n) => n - 1);
			busy.current = false;
			setPhase("idle");
			return;
		}
		if (fs.left === 1) {
			setFreeSpins(0);
			setExpandSymbol(null);
		}
		if (awarded && res.totalWin > 0 && fs.left === 0 && autoRef.current.left === 0 && !turboRef.current) {
			setGambleStake(res.totalWin);
			setGambleRound(0);
			setCardFlip(null);
			setPhase("gamble");
			busy.current = false;
			return;
		}
		busy.current = false;
		setPhase("idle");
	}, [copy.retrigger]);
	const payOut = (0, import_react.useCallback)((res) => {
		setPhase("paying");
		const betNow = totalBet(lines, betPerLine);
		const tier = winTier(res.totalWin, betNow);
		if (tier) audio.win(tier);
		if (res.totalWin > 0) {
			setCredits((c) => c + res.totalWin);
			setBiggestWin((b) => Math.max(b, res.totalWin));
			const countMs = turboRef.current ? Math.min(280, 80 + res.totalWin) : Math.min(1600, 280 + res.totalWin * 2);
			countUp(0, res.totalWin, countMs);
		}
		const linesToShow = res.lineWins;
		let i = 0;
		if (linesToShow.length) {
			setHighlightLine(linesToShow[0].line);
			const cycle = turboRef.current ? 220 : 850;
			const iv = window.setInterval(() => {
				i = (i + 1) % linesToShow.length;
				setHighlightLine(linesToShow[i].line);
			}, cycle);
			const hold = turboRef.current ? Math.max(280, Math.min(720, 160 + linesToShow.length * 90)) : Math.max(1100, Math.min(2800, 700 + linesToShow.length * 400));
			window.setTimeout(() => {
				window.clearInterval(iv);
				finishPay(res, true);
			}, hold);
		} else {
			const wait = res.totalWin > 0 ? turboRef.current ? 220 : 900 : turboRef.current ? 80 : 420;
			window.setTimeout(() => finishPay(res, res.totalWin > 0), wait);
		}
	}, [
		betPerLine,
		countUp,
		finishPay,
		lines
	]);
	const onLanded = (0, import_react.useCallback)(() => {
		audio.stopDrone();
		const res = result;
		if (!res) {
			busy.current = false;
			setSpinning(false);
			setPhase("idle");
			return;
		}
		setSpinning(false);
		setStops(res.stops);
		setPendingStops(null);
		setPaidExpand(null);
		if (res.expandReels.length && res.expandSymbol) {
			setExpanding(true);
			audio.expand();
			setPhase("expanding");
			window.setTimeout(() => payOut(res), turboRef.current || reducedMotion ? 180 : 720);
		} else payOut(res);
	}, [
		payOut,
		reducedMotion,
		result
	]);
	const onReelStop = (0, import_react.useCallback)((index) => {
		audio.reelStop(index);
	}, []);
	const doSpin = (0, import_react.useCallback)(() => {
		if (busy.current || spinning) return;
		if (phase !== "idle") return;
		const fs = fsRef.current;
		const paid = paidExpandRef.current;
		const usingFree = fs.left > 0 && fs.symbol;
		const cost = usingFree ? 0 : paid ? totalBet(lines, betPerLine) * 10 : totalBet(lines, betPerLine);
		if (!usingFree && creditsRef.current < cost) {
			setStatus(copy.broke);
			paidExpandRef.current = null;
			setPaidExpand(null);
			return;
		}
		busy.current = true;
		setDisplayWin(0);
		setHighlightLine(null);
		setResult(null);
		setExpanding(false);
		setStatus("");
		if (!usingFree) setCredits((c) => c - cost);
		const nextStops = spinStops();
		const expandSym = usingFree ? fs.symbol : paid?.symbol ?? null;
		const minReels = usingFree ? 1 : paid?.minReels ?? 1;
		const res = evaluateSpin(nextStops, betPerLine, lines, expandSym, minReels);
		if (paid) {
			setPaidExpand(paid.symbol);
			paidExpandRef.current = null;
		}
		setResult(res);
		setPendingStops(nextStops);
		setSpinning(true);
		setPhase("spinning");
		audio.startDrone();
		if (res.scatterCount >= 3) audio.book();
	}, [
		betPerLine,
		copy.broke,
		lines,
		phase,
		spinning
	]);
	(0, import_react.useEffect)(() => {
		if (phase !== "idle") return;
		if (fsRef.current.left > 0 && fsRef.current.symbol) {
			const tmr = window.setTimeout(() => doSpin(), turboRef.current || reducedMotion ? 140 : 650);
			return () => window.clearTimeout(tmr);
		}
		if (autoRef.current.left > 0) {
			const tmr = window.setTimeout(() => {
				setAutoLeft((n) => Math.max(0, n - 1));
				doSpin();
			}, turboRef.current ? 70 : 380);
			return () => window.clearTimeout(tmr);
		}
	}, [
		phase,
		doSpin,
		reducedMotion,
		freeSpins,
		autoLeft
	]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.code !== "Space") return;
			if (e.repeat) return;
			e.preventDefault();
			if (phase === "start") return;
			if (showPaytable || showAuto || showBuy || buyKind) return;
			if (phase === "gamble") return;
			if (phase === "bonusSelect") return;
			if (autoLeft > 0) {
				setAutoLeft(0);
				return;
			}
			if (phase === "spinning") {
				setForceLand((n) => n + 1);
				return;
			}
			doSpin();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		autoLeft,
		buyKind,
		doSpin,
		phase,
		showAuto,
		showBuy,
		showPaytable
	]);
	const enter = () => {
		audio.unlock();
		audio.setMuted(muted);
		setPhase("idle");
	};
	const changeBet = (dir) => {
		if (busy.current || freeSpins > 0) return;
		audio.click();
		const idx = BET_STEPS.indexOf(betPerLine);
		const next = BET_STEPS[Math.max(0, Math.min(BET_STEPS.length - 1, idx + dir))];
		setBetPerLine(next);
	};
	const changeLines = (dir) => {
		if (busy.current || freeSpins > 0) return;
		audio.click();
		setLines((n) => {
			const next = nextLineStep(n, dir);
			window.clearTimeout(lineHintRef.current);
			setHighlightLine(next - 1);
			lineHintRef.current = window.setTimeout(() => {
				if (phaseRef.current === "idle") setHighlightLine(null);
			}, 1100);
			return next;
		});
	};
	const startBonus = (symbol) => {
		audio.click();
		setExpandSymbol(symbol);
		setBonusPick(symbol);
		setFreeSpins(10);
		if (autoRef.current.stopBonus) setAutoLeft(0);
		window.setTimeout(() => {
			setPhase("idle");
		}, turboRef.current ? 280 : 700);
	};
	const confirmBuy = (kind) => {
		const stake = totalBet(lines, betPerLine);
		const cost = kind === "freeSpins" ? stake * 100 : stake * 10;
		if (creditsRef.current < cost) {
			setStatus(copy.broke);
			return;
		}
		audio.click();
		setBuyKind(kind);
		setShowBuy(false);
	};
	const pickBoughtSymbol = (symbol) => {
		const kind = buyKind;
		if (!kind) return;
		const stake = totalBet(lines, betPerLine);
		if (kind === "freeSpins") {
			const cost = stake * 100;
			if (creditsRef.current < cost) {
				setStatus(copy.broke);
				setBuyKind(null);
				return;
			}
			audio.bonus();
			setCredits((c) => c - cost);
			setBuyKind(null);
			setAutoLeft(0);
			setExpandSymbol(symbol);
			setBonusPick(symbol);
			setFreeSpins(10);
			window.setTimeout(() => setPhase("idle"), turboRef.current ? 280 : 700);
			return;
		}
		const cost = stake * 10;
		if (creditsRef.current < cost) {
			setStatus(copy.broke);
			setBuyKind(null);
			return;
		}
		audio.click();
		paidExpandRef.current = {
			symbol,
			minReels: 2
		};
		setPaidExpand(symbol);
		setBuyKind(null);
		doSpin();
	};
	const collectGamble = () => {
		audio.click();
		setGambleStake(0);
		setPhase("idle");
	};
	const pickColor = (color) => {
		if (cardFlip) return;
		const outcome = Math.random() < .5 ? "red" : "black";
		setCardFlip(outcome);
		const win = outcome === color;
		window.setTimeout(() => {
			if (win) {
				audio.gambleWin();
				const next = gambleStake * 2;
				setCredits((c) => c - gambleStake + next);
				setGambleStake(next);
				setBiggestWin((b) => Math.max(b, next));
				setDisplayWin(next);
				const round = gambleRound + 1;
				setGambleRound(round);
				setCardFlip(null);
				if (round >= 5) {
					setGambleStake(0);
					setPhase("idle");
				}
			} else {
				audio.gambleLose();
				setCredits((c) => c - gambleStake);
				setGambleStake(0);
				setDisplayWin(0);
				window.setTimeout(() => setPhase("idle"), 700);
			}
		}, 650);
	};
	const banner = result && displayWin > 0 ? winTier(result.totalWin, bet) === "epic" ? copy.epicWin : winTier(result.totalWin, bet) === "mega" ? copy.megaWin : winTier(result.totalWin, bet) === "great" ? copy.greatWin : null : null;
	if (phase === "start") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartScreen, {
		copy,
		ready: Boolean(assets),
		error: loadError,
		lang,
		muted,
		onLang: setLang,
		onMute: () => setMuted((m) => !m),
		onEnter: enter
	});
	if (!assets) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-bg text-muted",
		children: loadError ? copy.broke : "…"
	});
	const canSpin = phase === "idle" && !spinning && freeSpins === 0 && autoLeft === 0 && credits >= bet;
	const controlsLocked = busy.current || spinning || freeSpins > 0 || phase === "bonusSelect" || phase === "gamble";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-dvh max-h-dvh flex-col overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 bg-cover bg-center opacity-55",
				style: { backgroundImage: "url(/bg/tomb.jpg)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#120c07_0%,transparent_18%,transparent_72%,#120c07_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative z-10 flex shrink-0 items-center justify-between gap-2 px-3 pb-0.5 pt-[max(0.4rem,env(safe-area-inset-top))] sm:px-4 sm:pt-[max(0.6rem,env(safe-area-inset-top))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-lg font-semibold tracking-[0.18em] text-gold-2 text-balance sm:text-2xl",
						children: copy.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden font-display text-[10px] uppercase tracking-[0.32em] text-muted min-[420px]:block sm:text-[11px]",
						children: copy.subtitle
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
							label: lang.toUpperCase(),
							onClick: () => setLang((l) => l === "de" ? "en" : "de"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-[10px] tracking-widest sm:text-xs",
								children: lang.toUpperCase()
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
							label: copy.paytable,
							onClick: () => setShowPaytable(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4 sm:size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
							label: muted ? copy.off : copy.on,
							onClick: () => {
								audio.unlock();
								setMuted((m) => !m);
							},
							children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4 sm:size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4 sm:size-5" })
						})
					]
				})]
			}),
			freeSpins > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto mt-1 shrink-0 rounded-full border border-border bg-surface px-4 py-0.5 font-display text-[11px] tracking-[0.18em] text-gold-2",
				children: [
					copy.freeSpins,
					": ",
					freeSpins,
					expandSymbol ? ` · ${copy.symbols[expandSymbol]}` : ""
				]
			}),
			freeSpins === 0 && paidExpand && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto mt-1 shrink-0 rounded-full border border-border bg-surface px-4 py-0.5 font-display text-[11px] tracking-[0.18em] text-gold-2",
				children: [
					copy.buyArmed,
					": ",
					copy.symbols[paidExpand]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-0 w-full max-w-[1180px] flex-1 flex-col gap-2 px-2 pt-1 sm:px-3 landscape:flex-row landscape:items-stretch landscape:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto min-h-0 min-w-0 w-full flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-stretch justify-stretch",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-full w-full rounded-[22px] border border-border bg-surface p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:rounded-[28px] sm:p-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-[7px] rounded-[16px] ring-1 ring-gold/25 sm:inset-[10px] sm:rounded-[18px]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReelsCanvas, {
									assets,
									grid,
									spinning,
									stops: pendingStops,
									fromStops: stops,
									reducedMotion,
									turbo,
									forceLand,
									wins: phase === "paying" || phase === "gamble" ? result?.lineWins ?? [] : [],
									scatterRows: result && result.scatterCount >= 2 ? scatterPositions(grid) : [],
									expandReels: expanding || phase === "paying" ? result?.expandReels ?? [] : [],
									expandSymbol: expanding || phase === "paying" ? result?.expandSymbol ?? null : null,
									highlightLine,
									onLanded,
									onReelStop
								}),
								turbo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute right-4 top-3 rounded-full border border-gold bg-ink/70 px-2.5 py-0.5 font-display text-[10px] tracking-[0.22em] text-gold-2",
									children: copy.turbo
								}),
								banner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-x-4 top-3 rounded-md bg-ink/70 py-1 text-center font-display text-sm tracking-[0.2em] text-gold-2",
									children: banner
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full shrink-0 flex-col gap-2 pb-[max(0.55rem,env(safe-area-inset-bottom))] landscape:w-[min(17.5rem,36vw)] landscape:justify-center landscape:pb-[max(0.4rem,env(safe-area-inset-bottom))]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-1.5 sm:gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
									label: copy.credits,
									value: formatCredits(credits, lang)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
									label: copy.bet,
									value: formatCredits(bet, lang)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
									label: copy.win,
									value: formatCredits(displayWin, lang),
									gold: true
								})
							]
						}),
						status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs text-muted text-pretty sm:text-sm",
							children: status
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[1fr_auto_1fr] items-end gap-2 sm:gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5 sm:gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
										label: copy.lines,
										value: String(lines),
										disabled: controlsLocked,
										onMinus: () => changeLines(-1),
										onPlus: () => changeLines(1)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
										label: copy.betPerLine,
										value: String(betPerLine),
										disabled: controlsLocked,
										onMinus: () => changeBet(-1),
										onPlus: () => changeBet(1)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										audio.unlock();
										if (spinning) {
											setForceLand((n) => n + 1);
											return;
										}
										if (autoLeft > 0) {
											setAutoLeft(0);
											return;
										}
										doSpin();
									},
									disabled: !canSpin && autoLeft === 0 && !spinning,
									className: cn("size-[72px] shrink-0 rounded-full border-2 font-display text-base font-semibold tracking-[0.18em] uppercase transition-transform duration-150 ease-out sm:size-[92px] sm:text-lg landscape:size-[68px]", "border-gold bg-[radial-gradient(circle_at_30%_25%,var(--color-gold-2),var(--color-gold)_42%,var(--color-bronze))] text-ink shadow-[0_8px_24px_rgba(0,0,0,0.45)]", "hover:brightness-110 active:scale-[0.97] disabled:opacity-40"),
									children: spinning ? copy.stop : autoLeft > 0 ? `${autoLeft}` : copy.start
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col items-stretch gap-1.5 sm:gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-1.5 sm:gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												"aria-pressed": turbo,
												onClick: () => {
													audio.click();
													setTurbo((v) => !v);
												},
												className: cn("flex h-10 items-center justify-center gap-1 rounded-md border font-display text-[10px] uppercase tracking-[0.12em] sm:h-11 sm:text-xs sm:tracking-[0.16em]", turbo ? "border-gold bg-gold text-ink" : "border-border bg-surface-2 text-gold-2"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5" }), copy.turbo]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													audio.click();
													setShowAuto(true);
												},
												disabled: controlsLocked,
												className: "h-10 rounded-md border border-border bg-surface-2 px-1 font-display text-[10px] uppercase tracking-[0.12em] text-gold-2 disabled:opacity-40 sm:h-11 sm:text-xs sm:tracking-[0.16em]",
												children: copy.auto
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => {
													audio.click();
													setShowBuy(true);
												},
												disabled: controlsLocked,
												className: "flex h-10 items-center justify-center gap-1 rounded-md border border-gold/60 bg-surface-2 px-1 font-display text-[10px] uppercase tracking-[0.12em] text-gold-2 disabled:opacity-40 sm:h-11 sm:text-xs sm:tracking-[0.16em]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-3.5" }), copy.buy]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													audio.click();
													setCredits((c) => c + 4e3);
												},
												className: "h-10 rounded-md border border-border bg-surface px-1 font-display text-[10px] uppercase tracking-[0.12em] text-muted sm:h-11 sm:text-xs sm:tracking-[0.16em]",
												children: copy.reload
											})
										]
									})
								})
							]
						})
					]
				})]
			}),
			phase === "bonusSelect" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BonusSelect, {
				copy,
				assets,
				pick: bonusPick,
				turbo,
				onPick: startBonus
			}),
			phase === "gamble" && gambleStake > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GamblePanel, {
				copy,
				lang,
				stake: gambleStake,
				flip: cardFlip,
				onCollect: collectGamble,
				onPick: pickColor
			}),
			showPaytable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paytable, {
				copy,
				lang,
				assets,
				betPerLine,
				bet,
				lines,
				onClose: () => setShowPaytable(false)
			}),
			showAuto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoPanel, {
				copy,
				stopOnBonus,
				onStopOnBonus: setStopOnBonus,
				onClose: () => setShowAuto(false),
				onPick: (n) => {
					setAutoLeft(n);
					setShowAuto(false);
					setPhase("idle");
				}
			}),
			showBuy && !buyKind && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyPanel, {
				copy,
				lang,
				bet,
				credits,
				onClose: () => setShowBuy(false),
				onChoose: confirmBuy
			}),
			buyKind && assets && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuySymbolPick, {
				copy,
				assets,
				kind: buyKind,
				onBack: () => {
					setBuyKind(null);
					setShowBuy(true);
				},
				onPick: pickBoughtSymbol
			})
		]
	});
}
function StartScreen({ copy, ready, error, lang, muted, onLang, onMute, onEnter }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick: () => onEnter(),
		className: "relative flex min-h-dvh w-full flex-col items-center justify-end overflow-hidden bg-bg text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/bg/tomb.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgb(18_12_7/0.35)_0%,rgb(18_12_7/0.2)_40%,rgb(18_12_7/0.88)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (e) => {
						e.stopPropagation();
						onLang(lang === "de" ? "en" : "de");
					},
					className: "rounded-md border border-border bg-ink/60 px-3 py-2 font-display text-xs tracking-[0.16em] text-gold-2",
					children: lang.toUpperCase()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (e) => {
						e.stopPropagation();
						onMute();
					},
					className: "rounded-md border border-border bg-ink/60 p-2 text-gold-2",
					"aria-label": copy.sound,
					children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 w-full max-w-lg px-6 pb-[max(3rem,env(safe-area-inset-bottom))] text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm uppercase tracking-[0.42em] text-gold",
						children: copy.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl font-semibold tracking-[0.14em] text-gold-2 text-balance sm:text-6xl",
						children: copy.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-display text-sm uppercase tracking-[0.28em] text-fg",
						children: error ? copy.loading : copy.tapToEnter
					})
				]
			})
		]
	});
}
function Meter({ label, value, gold }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-surface px-2 py-1.5 sm:px-3 sm:py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-[9px] uppercase tracking-[0.2em] text-muted sm:text-[10px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mt-0.5 font-display text-base tabular-nums tracking-wide sm:text-lg", gold ? "text-gold-2" : "text-fg"),
			children: value
		})]
	});
}
function Stepper({ label, value, disabled, onMinus, onPlus }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-surface px-1.5 py-1 sm:px-2 sm:py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-[9px] uppercase tracking-[0.16em] text-muted sm:text-[10px]",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-0.5 flex items-center justify-between gap-1 sm:mt-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "-",
					disabled,
					onClick: onMinus,
					className: "grid size-8 place-items-center rounded-md bg-surface-2 text-gold-2 disabled:opacity-40 sm:size-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-7 text-center font-display text-sm tabular-nums sm:min-w-8 sm:text-base",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "+",
					disabled,
					onClick: onPlus,
					className: "grid size-8 place-items-center rounded-md bg-surface-2 text-gold-2 disabled:opacity-40 sm:size-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
				})
			]
		})]
	});
}
function IconBtn({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "grid size-9 place-items-center rounded-md border border-border bg-surface text-gold-2 sm:size-11",
		children
	});
}
function BonusSelect({ copy, assets, pick, turbo, onPick }) {
	const onPickRef = (0, import_react.useRef)(onPick);
	onPickRef.current = onPick;
	const [cycle, setCycle] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (pick) return;
		const chosen = pickExpandingSymbol();
		const iv = window.setInterval(() => setCycle((n) => n + 1), turbo ? 50 : 90);
		const tmr = window.setTimeout(() => {
			window.clearInterval(iv);
			onPickRef.current(chosen);
		}, turbo ? 520 : 1600);
		return () => {
			window.clearInterval(iv);
			window.clearTimeout(tmr);
		};
	}, [pick, turbo]);
	const shown = pick ?? EXPANDABLE[cycle % EXPANDABLE.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-30 flex items-center justify-center bg-ink/75 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-2xl border border-border bg-surface p-6 text-center shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs uppercase tracking-[0.28em] text-gold",
					children: copy.bonusTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-2xl text-gold-2 text-balance",
					children: copy.bonusBody
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: copy.specialSymbol
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-3 grid size-28 place-items-center rounded-xl border border-border bg-surface-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymbolThumb, {
						assets,
						id: shown
					})
				})
			]
		})
	});
}
function GamblePanel({ copy, lang, stake, flip, onCollect, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-30 flex items-end justify-center bg-ink/70 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-border bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs uppercase tracking-[0.24em] text-gold",
					children: copy.gamble
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: copy.gambleHint
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-40 w-[6.5rem] overflow-hidden rounded-lg border border-border shadow-lg",
						children: flip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("flex h-full w-full items-center justify-center font-display text-4xl", flip === "red" ? "bg-danger text-fg" : "bg-ink text-fg"),
							children: flip === "red" ? copy.red : copy.black
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/bg/card-back.jpg",
							alt: "",
							className: "h-full w-full object-cover"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center font-display text-xl tabular-nums text-gold-2",
					children: formatCredits(stake, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: Boolean(flip),
						onClick: () => onPick("red"),
						className: "h-12 rounded-md bg-danger font-display text-sm tracking-[0.12em] text-fg disabled:opacity-50",
						children: copy.red
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: Boolean(flip),
						onClick: () => onPick("black"),
						className: "h-12 rounded-md bg-ink font-display text-sm tracking-[0.12em] text-fg ring-1 ring-border disabled:opacity-50",
						children: copy.black
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onCollect,
					className: "mt-3 h-12 w-full rounded-md border border-gold bg-gold font-display text-sm tracking-[0.16em] text-ink",
					children: [
						copy.collect,
						" · ",
						formatCredits(stake, lang)
					]
				})
			]
		})
	});
}
function Paytable({ copy, lang, assets, betPerLine, bet, lines, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 flex items-end justify-center bg-ink/75 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-h-[88dvh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-border bg-surface p-5 sm:rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg tracking-[0.12em] text-gold-2",
						children: copy.paytable
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": copy.close,
						onClick: onClose,
						className: "grid size-10 place-items-center text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-xs uppercase tracking-[0.18em] text-muted",
					children: copy.picturePays
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 space-y-2",
					children: PICTURE_SYMBOLS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayRow, {
						assets,
						id,
						betPerLine,
						bet,
						lang,
						copy
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-display text-xs uppercase tracking-[0.18em] text-muted",
					children: copy.royalPays
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 space-y-2",
					children: ROYAL_SYMBOLS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayRow, {
						assets,
						id,
						betPerLine,
						bet,
						lang,
						copy
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 font-display text-xs uppercase tracking-[0.18em] text-gold",
					children: copy.linesTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: [
						6,
						"×",
						4,
						" · ",
						lines,
						"/",
						PAYLINES.length,
						" ",
						copy.lines
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LineMap, { active: lines }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-2 text-sm leading-snug text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs uppercase tracking-[0.18em] text-gold",
							children: copy.rulesTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.rule1 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.rule2 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.rule3 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.rule4 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.rule5 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.rule6 })
					]
				})
			]
		})
	});
}
function PayRow({ assets, id, betPerLine, bet, lang, copy }) {
	const pays = id === "book" ? SCATTER_PAYS : LINE_PAYS[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-lg border border-border bg-surface-2 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid size-12 shrink-0 place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymbolThumb, {
				assets,
				id
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-xs uppercase tracking-[0.14em] text-gold-2",
				children: id === "book" ? copy.wild : copy.symbols[id]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 flex flex-wrap gap-x-3 gap-y-0.5 font-display text-xs tabular-nums text-fg",
				children: [
					6,
					5,
					4,
					3,
					2
				].map((n) => {
					const m = pays[n];
					if (!m) return null;
					const amount = id === "book" ? m * bet : m * betPerLine;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						n,
						"× ",
						formatCredits(amount, lang)
					] }, n);
				})
			})]
		})]
	});
}
function AutoPanel({ copy, stopOnBonus, onStopOnBonus, onClose, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 flex items-end justify-center bg-ink/70 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-t-2xl border border-border bg-surface p-5 sm:rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg text-gold-2",
						children: copy.autoTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": copy.close,
						onClick: onClose,
						className: "grid size-10 place-items-center text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-4 gap-2",
					children: [
						10,
						25,
						50,
						100
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onPick(n),
						className: "h-12 rounded-md border border-border bg-surface-2 font-display tabular-nums text-fg",
						children: n
					}, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 flex items-center gap-3 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: stopOnBonus,
						onChange: (e) => onStopOnBonus(e.target.checked),
						className: "size-4 accent-[var(--color-gold)]"
					}), copy.stopBonus]
				})
			]
		})
	});
}
function BuyPanel({ copy, lang, bet, credits, onClose, onChoose }) {
	const fsCost = bet * 100;
	const exCost = bet * 10;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 flex items-end justify-center bg-ink/70 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-h-[88dvh] w-full max-w-md overflow-y-auto rounded-t-2xl border border-border bg-surface p-5 sm:rounded-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg text-gold-2",
						children: copy.buyTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": copy.close,
						onClick: onClose,
						className: "grid size-10 place-items-center text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: credits < fsCost,
					onClick: () => onChoose("freeSpins"),
					className: "mt-4 w-full rounded-xl border border-gold/50 bg-surface-2 p-4 text-left disabled:opacity-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs uppercase tracking-[0.2em] text-gold",
							children: copy.buyFsCost
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-lg text-gold-2",
							children: copy.buyFsTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: copy.buyFsBody
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-xl tabular-nums text-fg",
							children: formatCredits(fsCost, lang)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: credits < exCost,
					onClick: () => onChoose("expand"),
					className: "mt-3 w-full rounded-xl border border-border bg-surface-2 p-4 text-left disabled:opacity-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs uppercase tracking-[0.2em] text-gold",
							children: copy.buyExpandCost
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-lg text-gold-2",
							children: copy.buyExpandTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: copy.buyExpandBody
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-xl tabular-nums text-fg",
							children: formatCredits(exCost, lang)
						})
					]
				})
			]
		})
	});
}
function BuySymbolPick({ copy, assets, kind, onBack, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 flex items-end justify-center bg-ink/75 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-h-[88dvh] w-full max-w-md overflow-y-auto rounded-t-2xl border border-border bg-surface p-5 sm:rounded-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[11px] uppercase tracking-[0.2em] text-gold",
					children: kind === "freeSpins" ? copy.buyFsTitle : copy.buyExpandTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg text-gold-2",
					children: copy.buyPick
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": copy.close,
					onClick: onBack,
					className: "grid size-10 place-items-center text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-4 gap-2",
				children: EXPANDABLE.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(id),
					className: "flex flex-col items-center gap-1 rounded-xl border border-border bg-surface-2 px-1 py-2 hover:border-gold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SymbolThumb, {
						assets,
						id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[9px] uppercase tracking-[0.08em] text-muted",
						children: copy.symbols[id]
					})]
				}, id))
			})]
		})
	});
}
function LineMap({ active }) {
	const cw = 7;
	const ch = 6;
	const pad = 3;
	const w = 58;
	const h = 36;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 grid grid-cols-5 gap-1.5",
		children: PAYLINES.map((rows, i) => {
			const on = i < active;
			const pts = rows.map((row, reel) => {
				return `${pad + reel * 9 + cw / 2},${pad + row * 8 + ch / 2}`;
			}).join(" ");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("rounded-md border px-1 py-1", on ? "border-gold/50 bg-surface-2" : "border-border bg-ink/40 opacity-45"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-0.5 text-center font-display text-[9px] tabular-nums text-gold-2",
					children: i + 1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: `0 0 ${w} ${h}`,
					className: "h-auto w-full",
					"aria-hidden": true,
					children: [Array.from({ length: 4 }).map((_, row) => Array.from({ length: 6 }).map((__, reel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: pad + reel * 9,
						y: pad + row * 8,
						width: cw,
						height: ch,
						rx: .8,
						fill: rows[reel] === row ? "var(--color-gold)" : "rgba(232,197,92,0.16)"
					}, `${reel}-${row}`))), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
						points: pts,
						fill: "none",
						stroke: "var(--color-gold-2)",
						strokeWidth: .9,
						strokeLinejoin: "round",
						strokeLinecap: "round"
					})]
				})]
			}, i);
		})
	});
}
function isPictureId(id) {
	return !ROYAL_SYMBOLS.includes(id);
}
function SymbolThumb({ assets, id }) {
	if (isPictureId(id)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: assets.pictures[id].src,
		alt: "",
		className: "size-12 object-contain"
	});
	const g = ROYAL_GLYPH[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid size-12 place-items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: assets.cartouche.src,
			alt: "",
			className: "absolute inset-0 size-12 object-contain"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative font-display text-lg font-semibold",
			style: { color: g.fill },
			children: g.letter
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotApp, {});
}
//#endregion
export { Home as component };
