// Shared loader for the Hindi tools (tools/hi_extract.js, tools/hi_check.js).
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
// Content files in the order index.html loads them (stories, kāṇḍas, parvas, sages, kings, vedas)
function contentFiles() {
  const idx = read('index.html');
  return [...idx.matchAll(/<script src="((?:stories|ramayana\/|mahabharata\/|sages\/|kings\/|vedas\/)[^"]*\.js)"><\/script>/g)].map(m => m[1]);
}
// A fresh window with hi/hi.js loaded; returns it (global.window / global.HI point at it)
function fresh() {
  global.window = {}; global.localStorage = {};
  eval(read('hi/hi.js'));
  global.HI = window.HI;
  return window;
}
function loadContent(files) { for (const f of files || contentFiles()) eval.call(null, read(f)); }
function hiFiles() { const w = {}; new Function('window', read('hi/files.js'))(w); return w.HI_FILES || []; }
function loadOverlays(errs) {
  for (const f of hiFiles()) {
    try { eval.call(null, read(f)); } catch (e) { (errs || []).push(`${f}: does not load — ${e.message}`); }
  }
  try { eval.call(null, read('hi/ui.js')); } catch (e) { (errs || []).push(`hi/ui.js: does not load — ${e.message}`); }
}
// Which globals hold the entries of each kind
const BOOK_OF = f => f.startsWith('sages/') ? 'SAGE_CHAPTERS' : f.startsWith('kings/') ? 'KING_CHAPTERS' : f.startsWith('ramayana/') ? 'RMY_CHAPTERS'
  : f.startsWith('mahabharata/') ? 'MBH_CHAPTERS' : f.startsWith('vedas/') ? 'VEDA_CHAPTERS' : 'KIDS_STORIES';
const WHO_OF = f => f.startsWith('mahabharata/') ? 'MBH_WHO' : 'RMY_WHO';
// Overlay path for a content file (and story id)
const overlayFor = (f, id) => f === 'stories.js' ? `hi/stories/${id}.js` : 'hi/' + f;
module.exports = { root, read, contentFiles, fresh, loadContent, hiFiles, loadOverlays, BOOK_OF, WHO_OF, overlayFor };
