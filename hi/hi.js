// ─────────────── HINDI CONTENT LAYER ───────────────
// The book chapters and kids stories are written in English + Telugu. Their Hindi lives in overlay files
// (hi/<book>/<file>.js, hi/stories/<id>.js) that only call HI.add({ hash: 'हिन्दी' }), where hash is
// HI.hash(<the exact Telugu string>). In Hindi mode HI.apply() swaps each Telugu string for its Hindi.
// A chapter/story is used in Hindi only when EVERY Telugu string in it has a translation; otherwise it is
// shown fully in English (each Telugu string → its English sibling) — languages never mix inside a chapter.
// Lines of a 'sloka' block are Sanskrit: they are always written in Devanagari letter for letter (te2dev).
// Hard-coded Telugu in the book modules (names, headings) is put into Hindi from hi/ui.js by a
// MutationObserver, inside the book views only (never in the Learn Telugu screens or the scripture texts).
// See HINDI_BACKLOG.md. Tools: tools/hi_extract.js, tools/hi_check.js.
(function () {
  const W = typeof window !== 'undefined' ? window : globalThis;
  const TE = /[ఀ-౿]/g, LAT = /[A-Za-zÀ-ɏḀ-ỿ]/g;
  const HI = {
    T: {}, UI: {}, applied: false, loaded: false, swaps: [],
    // FNV-1a 32-bit over the UTF-16 code units of the exact string → 8 lowercase hex chars
    hash(s) {
      let h = 0x811c9dc5;
      for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
      return ('0000000' + h.toString(16)).slice(-8);
    },
    add(map) { Object.assign(HI.T, map); },
    addUI(map) { Object.assign(HI.UI, map); },
    on() { try { return JSON.parse(localStorage.vedic_settings || '{}').language === 'hi'; } catch (e) { return false; } },
    // A string counts as Telugu when it has more Telugu letters than Latin ones
    // (English text may quote a Telugu word; Telugu text may hold a Latin name).
    isTe(s) { return typeof s === 'string' && (s.match(TE) || []).length > (s.match(LAT) || []).length; },
    te2dev(s) {
      if (typeof W.te2dev === 'function') return W.te2dev(s);
      return String(s).replace(/[ఀ-౿]/g, ch => {
        const c = ch.charCodeAt(0);
        if (c === 0x0C0E) return 'ए'; if (c === 0x0C12) return 'ओ';
        if (c === 0x0C46) return 'े'; if (c === 0x0C4A) return 'ो';
        if (c === 0x0C55 || c === 0x0C56) return '';
        return String.fromCharCode(c - 0x300);
      });
    },
  };
  const EN_KEY = k => k === 'te' ? 'en' : k === 'dt' ? 'd' : /.Te$/.test(k) ? k.slice(0, -2) : null;

  // Every Telugu string in an entry: { o: container, k: key, s: Telugu, en: English sibling, sloka: bool }
  HI.slots = function (entry) {
    const out = [];
    const walk = (v, sloka) => {
      if (Array.isArray(v)) {
        const isSloka = v[0] === 'sloka';
        v.forEach((x, i) => {
          if (typeof x === 'string') {
            if (!HI.isTe(x)) return;
            if (sloka) { out.push({ o: v, k: i, s: x, sloka: true }); return; }
            let en; for (let j = i - 1; j >= 0; j--) if (typeof v[j] === 'string' && !HI.isTe(v[j])) { en = v[j]; break; }
            out.push({ o: v, k: i, s: x, en });
          } else walk(x, isSloka && i === 1);
        });
      } else if (v && typeof v === 'object') {
        for (const k of Object.keys(v)) {
          const x = v[k];
          if (typeof x === 'string') {
            if (!HI.isTe(x)) continue;
            const ek = EN_KEY(k);
            out.push({ o: v, k, s: x, en: ek && typeof v[ek] === 'string' ? v[ek] : undefined });
          } else walk(x, false);
        }
      }
    };
    walk(entry, false);
    return out;
  };
  // Does this entry have Hindi for every (non-sloka) Telugu string?
  HI.complete = function (entry) {
    const sl = HI.slots(entry).filter(x => !x.sloka);
    return sl.length > 0 && sl.every(x => HI.T[HI.hash(x.s)] !== undefined);
  };
  function swap(o, k, v) { if (o[k] !== v) { HI.swaps.push([o, k, o[k]]); o[k] = v; } }
  // Put one entry into Hindi (if complete) or English (if not). Returns true when Hindi.
  HI.applyEntry = function (entry) {
    const sl = HI.slots(entry), ok = HI.complete(entry);
    for (const x of sl) {
      if (x.sloka) swap(x.o, x.k, HI.te2dev(x.s));
      else swap(x.o, x.k, ok ? HI.T[HI.hash(x.s)] : (x.en !== undefined ? x.en : x.s));
    }
    return ok;
  };
  HI.BOOKS = ['SAGE_CHAPTERS', 'KING_CHAPTERS', 'RMY_CHAPTERS', 'MBH_CHAPTERS', 'VEDA_CHAPTERS'];
  HI.apply = function () {
    if (HI.applied) return;
    HI.applied = true;
    for (const g of HI.BOOKS) for (const c of W[g] || []) HI.applyEntry(c);
    for (const s of W.KIDS_STORIES || []) if (HI.applyEntry(s)) { s._hi = true; HI.swaps.push([s, '_hi', undefined]); }
    for (const g of ['RMY_WHO', 'MBH_WHO']) for (const e of Object.values(W[g] || {})) HI.applyEntry(e);
    for (const g of ['RMY_PLAN', 'MBH_PLAN', 'SAGE_PLAN', 'KING_PLAN', 'VEDA_PLAN']) for (const e of Object.values(W[g] || {})) HI.applyEntry(e);
    HI.observe();
  };
  // Undo apply() (when the reader leaves Hindi without reloading)
  HI.restore = function () {
    if (!HI.applied) return;
    for (let i = HI.swaps.length - 1; i >= 0; i--) { const [o, k, v] = HI.swaps[i]; if (v === undefined) delete o[k]; else o[k] = v; }
    HI.swaps = []; HI.applied = false;
    if (HI.mo) { HI.mo.disconnect(); HI.mo = null; }
  };

  // ── Hard-coded Telugu in the book modules → Hindi (hi/ui.js) ──
  const inScope = el => el && el.closest && el.closest('.rmy') && !el.closest('#view-telugu');
  function fixNode(n) {
    const t = n.nodeValue, k = t && t.trim();
    if (k && HI.UI[k] !== undefined && inScope(n.parentElement)) n.nodeValue = t.replace(k, HI.UI[k]);
  }
  // A chapter without Hindi shows its English title in the Telugu-title line too — hide that repeat
  const dupTitles = root => root.querySelectorAll && root.querySelectorAll('.rmy .tt, .rmy .optitle-te').forEach(e => {
    const p = e.previousElementSibling;
    if (p && p.textContent.trim() === e.textContent.trim()) e.style.display = 'none';
  });
  function fixTree(root) {
    if (root.nodeType === 3) return fixNode(root);
    if (root.nodeType === 1) dupTitles(root.parentNode || root);
    if (root.nodeType !== 1 || !/[ఀ-౿]/.test(root.textContent)) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) fixNode(n);
  }
  HI.observe = function () {
    if (typeof document === 'undefined' || typeof MutationObserver === 'undefined' || HI.mo) return;
    HI.mo = new MutationObserver(ms => {
      for (const m of ms) {
        if (m.type === 'characterData') fixNode(m.target);
        else m.addedNodes.forEach(fixTree);
      }
    });
    const start = () => { HI.mo.observe(document.body, { childList: true, subtree: true, characterData: true }); fixTree(document.body); };
    if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
  };

  // ── Loading the overlays when the reader switches to Hindi later ──
  HI.load = function () {
    if (HI.loaded) return Promise.resolve();
    return Promise.all((W.HI_FILES || []).map(f => new Promise(res => {
      const s = document.createElement('script'); s.src = f; s.onload = s.onerror = res; document.head.appendChild(s);
    }))).then(() => { HI.loaded = true; });
  };
  // Follow language changes made in the app (Home, Settings, the reader buttons all call saveSettings)
  HI.watch = function () {
    const orig = W.saveSettings;
    if (typeof orig !== 'function' || orig._hi) return;
    const wrapped = function () {
      const r = orig.apply(this, arguments);
      const want = typeof settings !== 'undefined' && settings.language === 'hi';
      if (!want && HI.applied) HI.restore();
      else if (want && !HI.applied) HI.load().then(() => { if (settings.language === 'hi' && !HI.applied) HI.apply(); });
      return r;
    };
    wrapped._hi = true;
    W.saveSettings = wrapped;
  };
  W.HI = HI;
})();
