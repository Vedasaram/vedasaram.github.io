// Checks the Hindi overlays before publishing:  node tools/hi_check.js
// Loads every content file and every hi/ overlay as the app does, runs the same completeness logic as
// HI.apply(), prints "translated/total" per book, and fails (exit 1) on any broken overlay.
const fs = require('fs'), path = require('path');
const L = require('./hi_lib.js');
const errs = [], warns = [];
const W = L.fresh(); L.loadContent();
// Map every Telugu string (non-sloka) to its hash, to find overlays that match nothing
const src = {};
const collect = e => HI.slots(e).filter(x => !x.sloka).forEach(x => { src[HI.hash(x.s)] = x.s; });
for (const g of [...HI.BOOKS, 'KIDS_STORIES']) (W[g] || []).forEach(collect);
for (const g of ['RMY_WHO', 'MBH_WHO']) Object.values(W[g] || {}).forEach(collect);
// Load the overlays one by one, so each file's own entries can be checked
const files = L.hiFiles();
const index = L.read('index.html'), sw = L.read('sw.js');
for (const f of files) {
  if (!fs.existsSync(path.join(L.root, f))) { errs.push(`hi/files.js lists ${f}, which does not exist`); continue; }
  const before = HI.T; HI.T = {};
  try { eval.call(null, L.read(f)); } catch (e) { errs.push(`${f}: does not parse — ${e.message}`); }
  const mine = HI.T; HI.T = Object.assign(before, mine);
  for (const [h, v] of Object.entries(mine)) {
    if (!/^[0-9a-f]{8}$/.test(h)) { errs.push(`${f}: bad hash "${h}"`); continue; }
    if (typeof v !== 'string' || !v.trim()) { errs.push(`${f} ${h}: empty translation`); continue; }
    if (/[ఀ-౿]/.test(v)) errs.push(`${f} ${h}: still has Telugu letters`);
    const s = src[h];
    if (s === undefined) { warns.push(`${f} ${h}: matches no Telugu string (the source text changed?)`); continue; }
    const keys = x => [...x.matchAll(/\{(\w+)\|/g)].map(m => m[1]).sort().join(',');
    if (keys(s) !== keys(v)) errs.push(`${f} ${h}: name markup differs — source {${keys(s)}} vs Hindi {${keys(v)}}`);
    const cnt = (x, re) => (x.match(re) || []).length;
    if (cnt(s, /\*\*/g) !== cnt(v, /\*\*/g)) errs.push(`${f} ${h}: **bold** markup differs`);
    if (cnt(s, /\*/g) % 2 === 0 && cnt(v, /\*/g) % 2) errs.push(`${f} ${h}: unbalanced *italic* markup`);
  }
}
const onDisk = [];
(function walk(d) { for (const n of fs.readdirSync(path.join(L.root, d))) { const p = d + '/' + n; if (fs.statSync(path.join(L.root, p)).isDirectory()) walk(p); else if (p.endsWith('.js')) onDisk.push(p); } })('hi');
for (const f of onDisk) {
  if (!['hi/hi.js', 'hi/files.js', 'hi/ui.js'].includes(f) && !files.includes(f)) errs.push(`${f} is not listed in hi/files.js`);
  if (!sw.includes(`'./${f}'`)) errs.push(`sw.js: SHELL is missing './${f}'`);
}
if (!index.includes('<script src="hi/hi.js"></script><script src="hi/files.js"></script><script src="hi/ui.js"></script>')) errs.push('index.html: hi/ scripts not loaded');
if (!index.includes('HI.apply()')) errs.push('index.html: HI.apply() is not called');
try { eval.call(null, L.read('hi/ui.js')); } catch (e) { errs.push(`hi/ui.js: does not parse — ${e.message}`); }
for (const [k, v] of Object.entries(HI.UI)) if (typeof v !== 'string' || /[ఀ-౿]/.test(v)) errs.push(`hi/ui.js: bad Hindi for "${k}"`);
// Per-book counts (same logic as HI.apply)
const NAMES = { SAGE_CHAPTERS: 'Great Sages', KING_CHAPTERS: 'Great Kings', RMY_CHAPTERS: 'Rāmāyaṇa', MBH_CHAPTERS: 'Mahābhārata', VEDA_CHAPTERS: 'Vedas', KIDS_STORIES: 'Kids stories' };
let noEn = 0;
for (const g of [...HI.BOOKS, 'KIDS_STORIES']) {
  const arr = W[g] || [];
  const done = arr.filter(e => HI.complete(e)).length;
  arr.forEach(e => HI.slots(e).forEach(x => { if (!x.sloka && x.en === undefined) noEn++; }));
  console.log(`${NAMES[g].padEnd(13)} ${done}/${arr.length} ${g === 'KIDS_STORIES' ? 'stories' : 'chapters'}`);
}
for (const g of ['RMY_WHO', 'MBH_WHO']) { const v = Object.values(W[g] || {}); console.log(`${g.padEnd(13)} ${v.filter(e => HI.complete(e)).length}/${v.length} name cards`); }
console.log(`Hindi strings: ${Object.keys(HI.T).length} · UI names: ${Object.keys(HI.UI).length}`);
if (noEn) warns.push(`${noEn} Telugu strings have no English sibling (they stay Telugu in an untranslated chapter)`);
warns.forEach(w => console.log('warning: ' + w));
if (errs.length) { errs.forEach(e => console.log('ERROR: ' + e)); process.exit(1); }
console.log('OK');
