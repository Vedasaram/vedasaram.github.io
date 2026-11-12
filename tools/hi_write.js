// Writes (or extends) a Hindi overlay file from a JSON map {hash: "हिन्दी"} and registers it:
//   node tools/hi_write.js hi/stories/<id>.js done.json     (or hi/sages/<key>.js, hi/ramayana/<file>.js …)
// Merges with the overlay's existing entries, adds the file to hi/files.js and to SHELL in sw.js.
const fs = require('fs'), path = require('path');
const L = require('./hi_lib.js');
const [ov, json] = process.argv.slice(2);
if (!ov || !json || !/^hi\/(stories|sages|kings|ramayana|mahabharata|vedas)\/[\w-]+\.js$/.test(ov)) {
  console.error('usage: node tools/hi_write.js hi/<book>/<file>.js <map.json>'); process.exit(2);
}
const add = JSON.parse(fs.readFileSync(json, 'utf8'));
const abs = path.join(L.root, ov);
const map = {};
if (fs.existsSync(abs)) { const HI = { add: m => Object.assign(map, m) }; new Function('HI', fs.readFileSync(abs, 'utf8'))(HI); }
for (const [h, v] of Object.entries(add)) {
  const s = typeof v === 'string' ? v : v && v.hi;
  if (!/^[0-9a-f]{8}$/.test(h) || typeof s !== 'string' || !s.trim()) { console.error(`bad entry ${h}`); process.exit(1); }
  map[h] = s;
}
fs.mkdirSync(path.dirname(abs), { recursive: true });
fs.writeFileSync(abs, `// Hindi for ${ov.replace(/^hi\//, '').replace(/^stories\/(.*)\.js$/, 'kids story $1')} — keys are HI.hash(<Telugu string>). Written by tools/hi_write.js.\nHI.add({\n${Object.entries(map).map(([h, s]) => ` "${h}": ${JSON.stringify(s)},`).join('\n')}\n});\n`);
// register in hi/files.js
const fp = path.join(L.root, 'hi/files.js');
let files = fs.readFileSync(fp, 'utf8');
if (!files.includes(`'${ov}'`)) files = files.replace(/\n\];\s*$/, `\n  '${ov}',\n];\n`);
fs.writeFileSync(fp, files);
// register in sw.js SHELL
const swp = path.join(L.root, 'sw.js');
let sw = fs.readFileSync(swp, 'utf8');
if (!sw.includes(`'./${ov}'`)) sw = sw.replace("'./hi/ui.js'", `'./hi/ui.js', './${ov}'`);
if (!sw.includes(`'./${ov}'`)) { console.error('could not add to sw.js SHELL'); process.exit(1); }
fs.writeFileSync(swp, sw);
console.log(`${ov}: ${Object.keys(map).length} strings`);
