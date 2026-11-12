// Prints the Telugu strings of one content file that still need Hindi, as JSON {hash: {en, te}}.
//   node tools/hi_extract.js sages/mudgala.js            whole file (its chapters + the name cards it uses)
//   node tools/hi_extract.js sages/mudgala.js mdg-3      one chapter only (to split a very long file)
//   node tools/hi_extract.js stories.js <story-id>       one kids story
// Sloka lines are skipped (they are Sanskrit, shown in Devanagari automatically).
// Write the Hindi into hi/<file>.js (hi/stories/<id>.js) as HI.add({ "<hash>": "हिन्दी", ... }).
const L = require('./hi_lib.js');
const [file, id] = process.argv.slice(2);
if (!file) { console.error('usage: node tools/hi_extract.js <content file> [chapter or story id]'); process.exit(2); }
if (file === 'stories.js' && !id) { console.error('give the story id for stories.js'); process.exit(2); }
// 1) the file on its own: which entries and name cards it defines
const own = L.fresh(); L.loadContent([file]);
const G = L.BOOK_OF(file), WG = L.WHO_OF(file);
const entries = (own[G] || []).filter(e => !id || e.id === id);
if (!entries.length) { console.error(`no entries${id ? ' with id ' + id : ''} in ${file}`); process.exit(1); }
const ownWho = Object.keys(own[WG] || {});
// 2) everything, with the Hindi already written
const all = L.fresh(); L.loadContent(); L.loadOverlays();
const need = {};
let words = 0;
const take = sl => sl.filter(x => !x.sloka).forEach(x => {
  const h = HI.hash(x.s);
  if (HI.T[h] !== undefined || need[h]) return;
  need[h] = { en: x.en === undefined ? null : x.en, te: x.s };
  words += x.s.split(/\s+/).length;
});
const refs = new Set(id ? [] : ownWho);
for (const e of entries) {
  take(HI.slots(e));
  for (const k of e.who || []) refs.add(k);
  for (const m of JSON.stringify(e).matchAll(/\{(\w+)\|/g)) refs.add(m[1]);
}
for (const k of refs) { const w = (all[WG] || {})[k]; if (w && !HI.complete(w)) take(HI.slots(w)); }
console.log(JSON.stringify(need, null, 1));
console.error(`${Object.keys(need).length} strings, ~${words} Telugu words → ${L.overlayFor(file, id)}`);
