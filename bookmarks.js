// ─────────────── BOOKMARKS · బుక్‌మార్క్‌లు ───────────────
// One bookmark per book (Gītā, Rudram, VSN, Hanumān Chālīsā, each stotram collection,
// the Rāmāyaṇa, each sage, each Vedas book, Kids stories). The 🔖 button in the top bar
// places, moves, removes or opens it. The bookmark is drawn as a ribbon on the marked
// verse / page in the style chosen in Settings (classic, gods, vāhanas, vehicles or the
// reader's own photos). Everything stays on this phone (localStorage 'vedic_bm' and
// 'vedic_bm_photos').
(function () {
  const KEY = 'vedic_bm', PKEY = 'vedic_bm_photos';
  let BM = { style: 'srirama', marks: {} };
  try { Object.assign(BM, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
  if (!BM.marks || typeof BM.marks !== 'object') BM.marks = {};
  let PH = [];
  try { PH = JSON.parse(localStorage.getItem(PKEY) || '[]') || []; } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(BM)); } catch (e) {} };
  const savePh = () => { try { localStorage.setItem(PKEY, JSON.stringify(PH)); return true; } catch (e) { return false; } };
  const LANG = () => (typeof settings !== 'undefined' && settings.language) || 'en';
  const T = (en, te) => LANG() === 'te' ? te : en;
  const e = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  // ── Bookmark styles ──
  const SVG = {
    namam: '<svg viewBox="0 0 40 40"><path d="M11 5 V21 Q11 33 20 33 Q29 33 29 21 V5" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M20 7 V28" stroke="#e8262b" stroke-width="3.6" stroke-linecap="round"/></svg>',
    tripundra: '<svg viewBox="0 0 40 40"><g stroke="#f4efe6" stroke-width="3.4" stroke-linecap="round"><path d="M6 12H34"/><path d="M4 20H36"/><path d="M6 28H34"/></g><circle cx="20" cy="20" r="3.8" fill="#d61f26"/></svg>',
    chakra: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="13" fill="none" stroke="#ffd34d" stroke-width="3"/><circle cx="20" cy="20" r="4" fill="#ffd34d"/><g stroke="#ffd34d" stroke-width="2">' +
      Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return `<path d="M${(20 + 5 * Math.cos(a)).toFixed(1)} ${(20 + 5 * Math.sin(a)).toFixed(1)}L${(20 + 12 * Math.cos(a)).toFixed(1)} ${(20 + 12 * Math.sin(a)).toFixed(1)}"/>`; }).join('') +
      '</g><g fill="#ffd34d">' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<circle cx="${(20 + 16 * Math.cos(a)).toFixed(1)}" cy="${(20 + 16 * Math.sin(a)).toFixed(1)}" r="1.6"/>`; }).join('') + '</g></svg>',
  };
  const G = (a, b) => `linear-gradient(170deg,${a},${b})`;
  // [id, group, English name, Telugu name, background, emblem, emblem kind: e=emoji, t=text, s=svg, x=none]
  const STYLES = [
    ['srirama', 'classic', 'Śrī Rāma', 'శ్రీరామ', G('#fff6e0', '#f3d9a4'), 'శ్రీ<br>రామ', 't'],
    ['silk', 'classic', 'Red silk', 'ఎరుపు పట్టు', G('#d42a32', '#7a0f14'), '', 'x'],
    ['gold', 'classic', 'Gold', 'బంగారు', G('#f8dc7a', '#b8820f'), '', 'x'],
    ['tulasi', 'classic', 'Tulasī', 'తులసి', G('#3f9a4a', '#155a24'), '🌿', 'e'],
    ['om', 'god', 'Om', 'ఓం', G('#f08a1c', '#a8400a'), 'ॐ', 't'],
    ['ganesha', 'god', 'Gaṇeśa', 'గణపతి', G('#ef6b2a', '#9a2a0a'), '🐘', 'e'],
    ['venkatesa', 'god', 'Veṅkaṭeśvara', 'వేంకటేశ్వర', G('#1c3f8f', '#0a1c4a'), SVG.namam, 's'],
    ['shiva', 'god', 'Śiva', 'శివుడు', G('#5a7a9a', '#22374d'), SVG.tripundra, 's'],
    ['trishula', 'god', 'Triśūla', 'త్రిశూలం', G('#3a5a8a', '#14243e'), '🔱', 'e'],
    ['vishnu', 'god', 'Viṣṇu', 'విష్ణువు', G('#2a4fb0', '#0e2160'), SVG.chakra, 's'],
    ['shankha', 'god', 'Śaṅkha', 'శంఖం', G('#3a6ac8', '#14306e'), '🐚', 'e'],
    ['rama', 'god', 'Rāma', 'రాముడు', G('#3a9a5a', '#14502a'), '🏹', 'e'],
    ['krishna', 'god', 'Kṛṣṇa', 'కృష్ణుడు', G('#2a5ab0', '#101e5a'), '🪈', 'e'],
    ['hanuman', 'god', 'Hanumān', 'హనుమంతుడు', G('#f2711c', '#b02a0a'), '🚩', 'e'],
    ['lakshmi', 'god', 'Lakṣmī', 'లక్ష్మీ', G('#f07aa0', '#a02a5a'), '🪷', 'e'],
    ['deepam', 'god', 'Dīpam', 'దీపం', G('#5a2a0a', '#2a1004'), '🪔', 'e'],
    ['gopuram', 'god', 'Gopuram', 'గోపురం', G('#c8901a', '#7a4a06'), '🛕', 'e'],
    ['garuda', 'vahana', 'Garuḍa', 'గరుత్మంతుడు', G('#c8901a', '#6a3a06'), '🦅', 'e'],
    ['nandi', 'vahana', 'Nandi', 'నంది', G('#8aa0b8', '#3a4a5e'), '🐂', 'e'],
    ['mushika', 'vahana', 'Mūṣika', 'మూషికం', G('#e88a3a', '#8a3a0a'), '🐭', 'e'],
    ['mayura', 'vahana', 'Mayūra', 'నెమలి', G('#1a8a8a', '#0a3a4a'), '🦚', 'e'],
    ['hamsa', 'vahana', 'Haṃsa', 'హంస', G('#9ac0e8', '#3a6a9a'), '🦢', 'e'],
    ['simha', 'vahana', 'Siṃha', 'సింహం', G('#e0a020', '#8a4a06'), '🦁', 'e'],
    ['ashva', 'vahana', 'Aśva', 'గుర్రం', G('#c86a2a', '#5a2408'), '🐎', 'e'],
    ['car', 'vehicle', 'Car', 'కారు', G('#e0383a', '#7a0e10'), '🚗', 'e'],
    ['racecar', 'vehicle', 'Race car', 'రేస్ కారు', G('#2a2a2a', '#000000'), '🏎️', 'e'],
    ['suv', 'vehicle', 'SUV', 'ఎస్‌యూవీ', G('#2a6ac8', '#0e2a60'), '🚙', 'e'],
    ['bike', 'vehicle', 'Motorbike', 'బైక్', G('#4a4a4a', '#141414'), '🏍️', 'e'],
    ['cycle', 'vehicle', 'Bicycle', 'సైకిల్', G('#3ab07a', '#0e5a3a'), '🚲', 'e'],
    ['bus', 'vehicle', 'Bus', 'బస్సు', G('#f0b020', '#9a6006'), '🚌', 'e'],
    ['train', 'vehicle', 'Train', 'రైలు', G('#6a3a9a', '#2a0e4a'), '🚂', 'e'],
    ['plane', 'vehicle', 'Airplane', 'విమానం', G('#58a8e8', '#1a5a9a'), '✈️', 'e'],
    ['heli', 'vehicle', 'Helicopter', 'హెలికాప్టర్', G('#3a8ac0', '#0e3a60'), '🚁', 'e'],
    ['rocket', 'vehicle', 'Rocket', 'రాకెట్', G('#1a1a4a', '#000010'), '🚀', 'e'],
    ['boat', 'vehicle', 'Sailboat', 'పడవ', G('#2a9ac0', '#0a4a6a'), '⛵', 'e'],
    ['tractor', 'vehicle', 'Tractor', 'ట్రాక్టర్', G('#3a9a2a', '#145a0a'), '🚜', 'e'],
  ];
  const GROUPS = [
    ['classic', 'Classic', 'సాంప్రదాయం'],
    ['god', 'Gods', 'దేవతలు'],
    ['vahana', 'Vāhanas of the Gods', 'దేవతా వాహనాలు'],
    ['vehicle', 'Vehicles', 'వాహనాలు'],
    ['photo', 'My photos', 'నా ఫోటోలు'],
  ];
  const style = id => {
    if (String(id).startsWith('ph:')) { const p = PH.find(x => 'ph:' + x.id === id); if (p) return ['ph', 'photo', 'My photo', 'నా ఫోటో', `url(${p.src}) center/cover`, '', 'x']; }
    return STYLES.find(s => s[0] === id) || STYLES[0];
  };
  // The ribbon picture, w = width in px
  function ribbon(id, w) {
    const s = style(id || BM.style);
    const inner = s[6] === 'e' ? `<span class="bm-em" style="font-size:${(w * 0.56).toFixed(1)}px">${s[5]}</span>`
      : s[6] === 't' ? `<span class="bm-em bm-tx${s[0] === 'srirama' ? ' sr' : ''}" style="font-size:${(w * (s[0] === 'om' ? 0.62 : 0.3)).toFixed(1)}px">${s[5]}</span>`
      : s[6] === 's' ? `<span class="bm-em" style="width:${(w * 0.78).toFixed(1)}px;height:${(w * 0.78).toFixed(1)}px">${s[5]}</span>` : '';
    return `<span class="bm-rib${s[1] === 'classic' && s[6] === 'x' ? ' plain' : ''}" style="width:${w}px;height:${Math.round(w * 1.6)}px;background:${s[4]}">${inner}</span>`;
  }
  window.bmRibbon = ribbon;

  // ── Where am I? ──
  const mainEl = () => document.getElementById('main');
  function practiceAnchor() {
    const els = [...document.querySelectorAll('#view-practice .verse-block, #view-practice .rudram-anuvaka')];
    if (!els.length) return null;
    const top = mainEl().getBoundingClientRect().top + 8;
    const el = els.find(x => x.getBoundingClientRect().bottom > top + 24) || els[els.length - 1];
    return { key: el.dataset.key || '', idx: els.indexOf(el) };
  }
  const pageIdx = sel => { const t = document.querySelector(sel); return t ? Math.max(0, [...t.children].findIndex(p => p.classList.contains('cur'))) : 0; };
  const storyPage = () => { const d = [...document.querySelectorAll('#kz-reader .dots i')]; return Math.max(0, d.findIndex(i => i.classList.contains('on'))); };
  const VSN_TE = { preamble: 'ప్రారంభం', purva: 'పూర్వపీఠిక', dhyanam: 'ధ్యానం', phala: 'ఫలశ్రుతి' };
  const HC_TE = { doha1: 'దోహా · ప్రారంభం', dhyana: 'ధ్యానం', doha2: 'దోహా · ముగింపు' };

  // Returns {topic, title, titleTe, where, whereTe, loc} for the page on screen, or null
  function current() {
    const v = state.view;
    if (v === 'practice') {
      const sec = state.section, a = practiceAnchor();
      if (!a) return null;
      const loc = { view: 'practice', section: sec, chapter: state.chapter, rudramPart: state.rudramPart || null, key: a.key, idx: a.idx };
      if (sec === 'gita') {
        const m = a.key.match(/^gita_(?:ch(\d+)_v|dhyana_)(\d+)$/);
        if (!m) return null;
        return { topic: 'gita', title: 'Bhagavad Gītā', titleTe: 'భగవద్గీత', loc,
          where: m[1] ? `Ch.${m[1]} · ${GITA_META[m[1]].yoga} · verse ${m[2]}` : `Gītā Dhyānam · verse ${m[2]}`,
          whereTe: m[1] ? `${m[1]}వ అధ్యాయం · ${GITA_TE_CH[m[1]].name} · శ్లోకం ${m[2]}` : `గీతా ధ్యానం · శ్లోకం ${m[2]}` };
      }
      if (sec === 'rudram') {
        if (!state.rudramPart) return null;
        const nam = state.rudramPart === 'namakam', an = a.idx + 1;
        const isClose = !nam && an === 12;
        return { topic: 'rudram', title: 'Śrī Rudram', titleTe: 'శ్రీ రుద్రం', loc,
          where: (nam ? 'Namakam' : 'Chamakam') + ' · ' + (isClose ? 'Closing Prayer' : 'Anuvaka ' + an),
          whereTe: (nam ? 'నమకం' : 'చమకం') + ' · ' + (isClose ? 'ముగింపు ప్రార్థన' : 'అనువాకం ' + an) };
      }
      if (sec === 'vsn' || sec === 'hc') {
        const m = a.key.match(/^(?:vsn|hc)_([^_]+)_(\d+)$/); if (!m) return null;
        const num = !isNaN(parseInt(m[1]));
        const vsn = sec === 'vsn';
        return { topic: sec, title: vsn ? 'Viṣṇu Sahasranāmam' : 'Hanumān Chālīsā', titleTe: vsn ? 'విష్ణు సహస్రనామం' : 'హనుమాన్ చాలీసా', loc,
          where: num ? (vsn ? 'Śloka ' : 'Chaupāī ') + m[1] : (vsn ? VSN_META[m[1]] : HC_META[m[1]]) || m[1],
          whereTe: num ? (vsn ? 'శ్లోకం ' : 'చౌపాయీ ') + m[1] : (vsn ? VSN_TE[m[1]] : HC_TE[m[1]]) || m[1] };
      }
      if (typeof coll === 'function' && coll()) {
        const C = coll(), song = C.data[state.chapter]; if (!song) return null;
        const n = (a.key.match(/_(\d+)$/) || [])[1] || (a.idx + 1);
        return { topic: sec, title: C.name, titleTe: C.nameTe || C.name, loc,
          where: `${song.title} · verse ${n}`, whereTe: `${song.titleTe || song.title} · ${n}` };
      }
      return null;
    }
    if (v === 'sageread' || v === 'kingread' || v === 'vedaread' || v === 'rmyread' || v === 'mbhread') {
      const list = v === 'sageread' ? window.SAGE_CHAPTERS : v === 'kingread' ? window.KING_CHAPTERS : v === 'vedaread' ? window.VEDA_CHAPTERS : v === 'mbhread' ? window.MBH_CHAPTERS : window.RMY_CHAPTERS;
      const c = (list || []).find(x => x.id === state.kids); if (!c) return null;
      const page = pageIdx(v === 'sageread' ? '#sg-track' : v === 'kingread' ? '#kg-track' : v === 'vedaread' ? '#vd-track' : v === 'mbhread' ? '#mbh-track' : '#rmy-track');
      const loc = { view: v, id: c.id, page };
      const pg = page === 0 ? '' : ` · p.${page + 1}`, pgT = page === 0 ? '' : ` · పే.${page + 1}`;
      if (v === 'kingread') {
        const M = window.KING_META ? KING_META(c.king) : [c.king, c.king, c.king];
        return { topic: 'king:' + c.king, title: M[1], titleTe: M[2], loc, where: `Ch ${c.n} · ${c.title}${pg}`, whereTe: `${c.n}వ అధ్యాయం · ${c.titleTe}${pgT}` };
      }
      if (v === 'sageread') {
        const M = window.SAGE_META ? SAGE_META(c.sage) : [c.sage, c.sage, c.sage];
        return { topic: 'sage:' + c.sage, title: M[1], titleTe: M[2], loc, where: `Ch ${c.n} · ${c.title}${pg}`, whereTe: `${c.n}వ అధ్యాయం · ${c.titleTe}${pgT}` };
      }
      if (v === 'vedaread') {
        const M = window.VEDA_META ? VEDA_META(c.book) : [c.book, c.book, c.book];
        return { topic: 'veda:' + c.book, title: M[1], titleTe: M[2], loc, where: `Ch ${c.n} · ${c.title}${pg}`, whereTe: `${c.n}వ అధ్యాయం · ${c.titleTe}${pgT}` };
      }
      if (v === 'mbhread') {
        const P = window.MBH_PMETA ? MBH_PMETA(c.parva) : [c.parva, c.parva, c.parva];
        return { topic: 'mahabharata', title: 'Śrī Mahābhāratam', titleTe: 'శ్రీ మహాభారతం', loc, where: `${P[1]} · Ch ${c.n} · ${c.title}${pg}`, whereTe: `${P[2]} · ${c.n}వ అధ్యాయం · ${c.titleTe}${pgT}` };
      }
      const K = window.RMY_KMETA ? RMY_KMETA(c.kanda) : [c.kanda, c.kanda, c.kanda];
      return { topic: 'ramayana', title: 'Śrī Rāmāyaṇa', titleTe: 'శ్రీ రామాయణం', loc, where: `${K[1]} · Ch ${c.n} · ${c.title}${pg}`, whereTe: `${K[2]} · ${c.n}వ అధ్యాయం · ${c.titleTe}${pgT}` };
    }
    if (v === 'stories' && state.kids) {
      const s = (window.KIDS_STORIES || []).find(x => x.id === state.kids); if (!s) return null;
      const page = storyPage();
      return { topic: 'stories', title: 'Kids Stories', titleTe: 'పిల్లల కథలు', loc: { view: 'stories', id: s.id, page },
        where: `${s.title.en} · p.${page + 1}`, whereTe: `${s.title.te} · పే.${page + 1}` };
    }
    return null;
  }
  const sameLoc = (a, b) => a && b && JSON.stringify(a) === JSON.stringify(b);
  const samePlace = (a, b) => a && b && a.view === b.view && (a.view === 'practice'
    ? a.section === b.section && a.chapter === b.chapter && (a.rudramPart || null) === (b.rudramPart || null)
    : a.id === b.id);

  // ── Open a saved bookmark ──
  window.bmGo = function (topic) {
    const m = BM.marks[topic]; if (!m) return;
    const L = m.loc;
    bmClose();
    const hs = document.getElementById('home-settings-modal'); if (hs) { hs.classList.remove('open'); document.body.classList.remove('hs-lock'); }
    if (L.view === 'practice') {
      state.section = L.section; state.chapter = L.chapter; state.rudramPart = L.rudramPart || null; state.expandedVerse = null;
      if (typeof saveState === 'function') saveState();
      showView('practice');
      requestAnimationFrame(() => {
        const els = [...document.querySelectorAll('#view-practice .verse-block, #view-practice .rudram-anuvaka')];
        const el = (L.key && document.querySelector(`#view-practice [data-key="${L.key}"]`)) || els[L.idx];
        if (el) { el.scrollIntoView({ block: 'start' }); mainEl().scrollTop -= 14; }
      });
      return;
    }
    if (L.view === 'stories') {
      openStories(L.id);
      const d = L.page - storyPage(); if (d) kzPage(d);
      return;
    }
    const open = L.view === 'sageread' ? window.openSageChapter : L.view === 'kingread' ? window.openKingChapter : L.view === 'vedaread' ? window.openVedaChapter : L.view === 'mbhread' ? window.openMbhChapter : window.openRmyChapter;
    const go = L.view === 'sageread' ? 'sgGo' : L.view === 'kingread' ? 'kgGo' : L.view === 'vedaread' ? 'vdGo' : L.view === 'mbhread' ? 'mbhGo' : 'rmyGo';
    const tr = L.view === 'sageread' ? '#sg-track' : L.view === 'kingread' ? '#kg-track' : L.view === 'vedaread' ? '#vd-track' : L.view === 'mbhread' ? '#mbh-track' : '#rmy-track';
    if (!open) return;
    open(L.id);
    const d = L.page - pageIdx(tr); if (d && window[go]) window[go](d);
  };

  // ── Place / move / remove ──
  function place(cur) {
    BM.marks[cur.topic] = { title: cur.title, titleTe: cur.titleTe, where: cur.where, whereTe: cur.whereTe, loc: cur.loc, at: (d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`)(new Date()) };
    save(); refresh(); toast(T('Bookmark placed', 'బుక్‌మార్క్ పెట్టాం'), T(cur.where, cur.whereTe));
  }
  window.bmPlaceHere = () => { const c = current(); if (c) place(c); bmClose(); };
  window.bmRemove = topic => { delete BM.marks[topic]; save(); refresh(); bmClose(); if (window.bmRenderSettings) bmRenderSettings(); toast(T('Bookmark removed', 'బుక్‌మార్క్ తీసేశాం'), ''); };
  window.bmTap = function () {
    const c = current();
    if (!c) { bmOpenList(); return; }
    const m = BM.marks[c.topic];
    if (!m) { place(c); return; }
    const here = sameLoc(m.loc, c.loc);
    sheet(`<div class="bm-sh-t">${ribbon(BM.style, 22)}<div><b>${e(T(c.title, c.titleTe))}</b><small>${here ? T('Your bookmark is on this spot', 'బుక్‌మార్క్ ఇక్కడే ఉంది') : T('Your bookmark', 'మీ బుక్‌మార్క్') + ': ' + e(T(m.where, m.whereTe))}</small></div></div>
      ${here ? '' : `<button class="bm-act" onclick="bmGo('${c.topic}')">↪ ${T('Go to my bookmark', 'బుక్‌మార్క్ దగ్గరకు వెళ్ళండి')}</button>
      <button class="bm-act" onclick="bmPlaceHere()">🔖 ${T('Move bookmark here', 'బుక్‌మార్క్ ఇక్కడికి మార్చండి')}<small>${e(T(c.where, c.whereTe))}</small></button>`}
      <button class="bm-act" onclick="bmRemove('${c.topic}')">✕ ${T('Remove this bookmark', 'ఈ బుక్‌మార్క్ తీసేయండి')}</button>
      <button class="bm-act soft" onclick="bmOpenList()">☰ ${T('All bookmarks', 'అన్ని బుక్‌మార్క్‌లు')}</button>`);
  };

  // ── Lists (sheet and Settings) ──
  function listHtml() {
    const ks = Object.keys(BM.marks).sort((a, b) => (BM.marks[b].at || '').localeCompare(BM.marks[a].at || ''));
    if (!ks.length) return `<div class="bm-empty">${T('No bookmarks yet. Open any text and tap the 🔖 button at the top to place one.', 'ఇంకా బుక్‌మార్క్‌లు లేవు. ఏదైనా పాఠం తెరిచి పైన ఉన్న 🔖 బటన్ నొక్కండి.')}</div>`;
    const both = LANG() === 'both';
    return ks.map(k => { const m = BM.marks[k]; return `<div class="bm-row">
      <button class="bm-row-go" onclick="bmGo('${k}')">${ribbon(BM.style, 20)}<span class="bm-row-tx"><b>${e(T(m.title, m.titleTe))}${both ? ` <span class="te">${e(m.titleTe)}</span>` : ''}</b><small>${e(T(m.where, m.whereTe))}</small>${both ? `<small class="te">${e(m.whereTe)}</small>` : ''}</span></button>
      <button class="bm-row-x" onclick="bmRemove('${k}')" aria-label="Remove">✕</button></div>`; }).join('');
  }
  window.bmOpenList = () => sheet(`<div class="bm-sh-h">🔖 ${T('My bookmarks', 'నా బుక్‌మార్క్‌లు')}</div>${listHtml()}`);

  function stylesHtml() {
    return GROUPS.map(([g, en, te]) => {
      const items = g === 'photo'
        ? PH.map(p => ['ph:' + p.id]).concat([['add']])
        : STYLES.filter(s => s[1] === g);
      return `<div class="bm-grp">${e(T(en, te))}</div><div class="bm-grid">${items.map(s => {
        if (s[0] === 'add') return `<div class="bm-chip add"><span class="bm-plus">＋</span><span class="bm-nm">${T('Add photo', 'ఫోటో జోడించండి')}</span><input type="file" accept="image/*" class="bm-file" onclick="event.stopPropagation()" onchange="bmAddPhoto(this)" aria-label="Add photo"></div>`;
        const id = s[0], st = style(id), on = BM.style === id;
        return `<div class="bm-chip${on ? ' on' : ''}" onclick="bmSetStyle('${id}')">${ribbon(id, 30)}<span class="bm-nm">${e(T(st[2], st[3]))}</span>${g === 'photo' ? `<button class="bm-del" onclick="event.stopPropagation();bmDelPhoto('${id}')" aria-label="Delete photo">✕</button>` : ''}</div>`;
      }).join('')}</div>`;
    }).join('');
  }
  window.bmRenderSettings = function () {
    const box = document.getElementById('bm-settings'); if (!box) return;
    box.innerHTML = `<div class="home-settings-section"><div class="home-settings-label">🔖 ${T('Bookmarks', 'బుక్‌మార్క్‌లు')}</div><div class="bm-list">${listHtml()}</div></div>
      <div class="home-settings-section"><div class="home-settings-label">${T('Bookmark style', 'బుక్‌మార్క్ రూపం')}</div>
      <div class="bm-hint">${T('Pick the picture for your bookmark ribbon — or add your own photos (a god, your car…).', 'మీ బుక్‌మార్క్ బొమ్మను ఎంచుకోండి — లేదా మీ సొంత ఫోటోలు (దేవుడు, మీ కారు…) జోడించండి.')}</div>${stylesHtml()}</div>`;
  };
  window.bmSetStyle = id => { BM.style = id; save(); bmRenderSettings(); refresh(); };
  window.bmDelPhoto = id => {
    PH = PH.filter(p => 'ph:' + p.id !== id); savePh();
    if (BM.style === id) { BM.style = 'srirama'; save(); }
    bmRenderSettings(); refresh();
  };
  // Add the reader's own photo as a bookmark style. Works with big iPhone photos (HEIC/JPEG):
  // the picture is decoded straight from the file (no huge data: URL), cropped to the ribbon
  // shape and saved small (~15 KB), so it fits in the phone's storage.
  window.bmAddPhoto = async function (input) {
    const f = input.files && input.files[0];
    if (!f) return;
    toast(T('Adding photo…', 'ఫోటో జోడిస్తున్నాం…'), '');
    const W = 180, H = 288;
    const draw = src => {
      const iw = src.width || src.naturalWidth, ih = src.height || src.naturalHeight;
      if (!iw || !ih) throw new Error('empty image');
      const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
      const cx = cv.getContext('2d');
      cx.fillStyle = '#fff'; cx.fillRect(0, 0, W, H);
      const sc = Math.max(W / iw, H / ih), w = iw * sc, h = ih * sc;
      cx.drawImage(src, (W - w) / 2, (H - h) / 2, w, h);
      return cv.toDataURL('image/jpeg', 0.8);
    };
    const viaImg = url => new Promise((ok, bad) => {
      const img = new Image();
      img.onload = () => { try { ok(draw(img)); } catch (err) { bad(err); } };
      img.onerror = () => bad(new Error('decode failed'));
      img.src = url;
    });
    let src = null;
    try {
      if (window.createImageBitmap) {
        try { const bmp = await createImageBitmap(f); src = draw(bmp); if (bmp.close) bmp.close(); } catch (err) { src = null; }
      }
      if (!src) {
        const url = URL.createObjectURL(f);
        try { src = await viaImg(url); } finally { URL.revokeObjectURL(url); }
      }
    } catch (err) {
      try {
        const dataUrl = await new Promise((ok, bad) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = bad; r.readAsDataURL(f); });
        src = await viaImg(dataUrl);
      } catch (err2) { src = null; }
    }
    input.value = '';
    if (!src) { toast(T('Could not read this photo', 'ఈ ఫోటోను చదవలేకపోయాం'), T('Please try another photo', 'దయచేసి వేరే ఫోటో ప్రయత్నించండి')); return; }
    const p = { id: Date.now().toString(36), src };
    PH.push(p);
    if (!savePh()) { PH.pop(); toast(T('Phone storage is full', 'ఫోన్‌లో స్థలం లేదు'), T('Delete a photo and try again', 'ఒక ఫోటో తీసేసి మళ్ళీ ప్రయత్నించండి')); return; }
    BM.style = 'ph:' + p.id; save(); bmRenderSettings(); refresh();
    toast(T('Photo added', 'ఫోటో జోడించాం'), T('It is now your bookmark', 'ఇదే ఇప్పుడు మీ బుక్‌మార్క్'));
  };

  // ── Sheet + toast ──
  function sheet(html) {
    let m = document.getElementById('bm-modal');
    if (!m) {
      m = document.createElement('div'); m.id = 'bm-modal'; m.className = 'bm-modal';
      m.onclick = ev => { if (ev.target === m) bmClose(); };
      document.body.appendChild(m);
    }
    m.innerHTML = `<div class="bm-sheet"><div class="home-settings-handle"></div>${html}</div>`;
    m.classList.add('open');
  }
  window.bmClose = () => { const m = document.getElementById('bm-modal'); if (m) m.classList.remove('open'); };
  let tt = null;
  function toast(a, b) {
    let t = document.getElementById('bm-toast');
    if (!t) { t = document.createElement('div'); t.id = 'bm-toast'; document.body.appendChild(t); }
    t.innerHTML = `${ribbon(BM.style, 18)}<div><b>${e(a)}</b>${b ? `<small>${e(b)}</small>` : ''}</div>`;
    t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2200);
  }

  // ── Draw the ribbon on the page, and the top-bar button ──
  function decorate() {
    document.querySelectorAll('.bm-mark').forEach(x => x.remove());
    const c = current();
    const btn = document.getElementById('btn-bm');
    if (btn) {
      btn.style.display = c ? '' : 'none';
      const m = c && BM.marks[c.topic];
      const on = m && samePlace(m.loc, c.loc);
      btn.classList.toggle('on', !!on);
      btn.innerHTML = on ? ribbon(BM.style, 15) : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12v18l-6-4.5L6 21z"/></svg>';
    }
    if (!c) return;
    const m = BM.marks[c.topic]; if (!m || !samePlace(m.loc, c.loc)) return;
    const L = m.loc;
    let host = null;
    if (L.view === 'practice') {
      const els = [...document.querySelectorAll('#view-practice .verse-block, #view-practice .rudram-anuvaka')];
      host = (L.key && document.querySelector(`#view-practice [data-key="${L.key}"]`)) || els[L.idx];
    } else if (L.view === 'stories') {
      if (storyPage() === L.page) host = document.querySelector('#kz-reader .scene');
    } else {
      const tr = document.querySelector(L.view === 'sageread' ? '#sg-track' : L.view === 'kingread' ? '#kg-track' : L.view === 'vedaread' ? '#vd-track' : '#rmy-track');
      host = tr && tr.children[L.page];
    }
    if (!host) return;
    const r = document.createElement('span');
    r.className = 'bm-mark' + (L.view === 'practice' ? '' : ' pg');
    r.innerHTML = ribbon(BM.style, L.view === 'practice' ? 26 : 30);
    host.classList.add('bm-host');
    host.appendChild(r);
  }
  let rq = 0;
  function refresh() { cancelAnimationFrame(rq); rq = requestAnimationFrame(decorate); }
  window.bmRefresh = refresh;

  // Re-draw after every page render / page turn
  ['renderPractice', 'renderSageRead', 'renderVedaRead', 'renderRmyRead', 'renderStories', 'sgGo', 'vdGo', 'rmyGo', 'updateTopbar', 'showView'].forEach(fn => {
    const orig = window[fn]; if (typeof orig !== 'function') return;
    window[fn] = function () { const r = orig.apply(this, arguments); refresh(); return r; };
  });
  // Button state follows scrolling in the verse pages
  let st = null;
  const me = mainEl(); if (me) me.addEventListener('scroll', () => { clearTimeout(st); st = setTimeout(refresh, 150); }, { passive: true });

  // Top-bar button (before ▶ Recite)
  const rec = document.getElementById('btn-recite');
  if (rec && !document.getElementById('btn-bm')) {
    const b = document.createElement('button'); b.id = 'btn-bm'; b.title = 'Bookmark'; b.setAttribute('aria-label', 'Bookmark');
    b.onclick = () => bmTap();
    rec.parentNode.insertBefore(b, rec);
  }

  const css = `
#btn-bm{flex-shrink:0;width:34px;height:30px;border-radius:16px;border:1px solid var(--border);background:none;color:var(--accent);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}
#btn-bm.on{border-color:var(--accent2)}
.bm-rib{position:relative;display:inline-flex;flex-direction:column;align-items:center;justify-content:flex-start;flex-shrink:0;clip-path:polygon(0 0,100% 0,100% 100%,50% 80%,0 100%);padding-top:14%;box-sizing:border-box;overflow:hidden}
.bm-rib.plain::before{content:'';position:absolute;left:18%;right:18%;top:0;bottom:0;border-left:1.5px solid rgba(255,255,255,.45);border-right:1.5px solid rgba(255,255,255,.45)}
.bm-em{line-height:1;display:flex;align-items:center;justify-content:center}
.bm-em svg{width:100%;height:100%}
.bm-tx{font-family:'Noto Sans Telugu',serif;font-weight:700;color:#fff3c4;text-align:center;line-height:1.05;margin-top:6%}
.bm-tx.sr{color:#c0141c}
.verse-block.bm-host,.rudram-anuvaka.bm-host{padding-right:40px}
.bm-mark{position:absolute;top:-10px;right:0;z-index:3;pointer-events:none;filter:drop-shadow(0 2px 2px rgba(0,0,0,.35));line-height:0}
.bm-mark.pg{top:0;right:14px}
.bm-host{position:relative}
.verse-block.done .bm-mark{opacity:1}
.bm-modal{display:none;position:fixed;inset:0;z-index:260;background:rgba(0,0,0,.5);align-items:flex-end;justify-content:center}
.bm-modal.open{display:flex}
.bm-sheet{background:var(--bg);color:var(--fg);border-radius:20px 20px 0 0;width:100%;max-width:480px;max-height:80vh;overflow-y:auto;padding:16px 18px calc(24px + env(safe-area-inset-bottom,0px));box-shadow:0 -4px 32px rgba(0,0,0,.25);animation:sheetUp .22s ease}
.bm-sh-h{font-weight:700;text-align:center;margin-bottom:12px}
.bm-sh-t{display:flex;gap:12px;align-items:center;margin-bottom:14px}
.bm-sh-t b{display:block}.bm-sh-t small{display:block;color:var(--fg3);font-size:.8rem;margin-top:2px}
.bm-act{display:block;width:100%;text-align:left;padding:13px 14px;margin-bottom:8px;border-radius:12px;border:1px solid var(--border);background:var(--card-bg);color:var(--fg);font:inherit;font-size:.95rem;cursor:pointer}
.bm-act small{display:block;color:var(--fg3);font-size:.78rem;margin-top:2px}
.bm-act.soft{background:none}
.bm-row{display:flex;align-items:center;gap:6px;margin-bottom:6px}
.bm-row-go{flex:1;min-width:0;display:flex;align-items:center;gap:12px;text-align:left;padding:10px 12px;border-radius:12px;border:1px solid var(--border);background:var(--card-bg);color:var(--fg);font:inherit;cursor:pointer}
.bm-row-tx{min-width:0}.bm-row-tx b{display:block;font-size:.92rem}.bm-row-tx small{display:block;color:var(--fg3);font-size:.78rem;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.bm-row .te,.bm-act .te{font-family:'Noto Sans Telugu',serif;font-weight:400}
.bm-row-x{width:34px;height:34px;border-radius:10px;border:1px solid var(--border);background:none;color:var(--fg3);cursor:pointer;flex-shrink:0}
.bm-empty,.bm-hint{font-size:.85rem;color:var(--fg3);line-height:1.5;margin-bottom:8px}
.bm-grp{font-size:.78rem;font-weight:700;color:var(--fg2);margin:12px 0 6px}
.bm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));gap:8px}
.bm-chip{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 4px 6px;border-radius:10px;border:2px solid var(--border);cursor:pointer;background:var(--card-bg);min-width:0}
.bm-chip.on{border-color:var(--accent)}
.bm-chip.add{border-style:dashed;justify-content:center;min-height:84px}
.bm-file{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer;font-size:16px;z-index:2}
.bm-plus{font-size:1.4rem;color:var(--accent)}
.bm-nm{font-size:.66rem;font-weight:600;color:var(--fg);text-align:center;line-height:1.2;overflow:hidden;text-overflow:ellipsis;max-width:100%;white-space:nowrap}
.bm-del{position:absolute;top:2px;right:2px;width:20px;height:20px;border-radius:50%;border:none;background:rgba(0,0,0,.55);color:#fff;font-size:.65rem;cursor:pointer;line-height:20px;padding:0}

#bm-toast{position:fixed;left:50%;bottom:calc(84px + env(safe-area-inset-bottom,0px));transform:translate(-50%,20px);opacity:0;pointer-events:none;z-index:270;display:flex;gap:10px;align-items:center;background:var(--fg);color:var(--bg);padding:10px 16px;border-radius:14px;max-width:88vw;transition:all .2s;box-shadow:0 6px 24px rgba(0,0,0,.25)}
#bm-toast.on{opacity:1;transform:translate(-50%,0)}
#bm-toast b{display:block;font-size:.88rem}#bm-toast small{display:block;font-size:.76rem;opacity:.8;margin-top:1px}
`;
  const sEl = document.createElement('style'); sEl.textContent = css; document.head.appendChild(sEl);
  refresh();
})();
