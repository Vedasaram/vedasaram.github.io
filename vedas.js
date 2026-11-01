// ─────────────── THE VEDAS · వేదాలు ───────────────
// Index of books (view-vedas) → one book's chapters (view-vedas, state.kids = 'b:<key>')
// → chapter reader (view-vedaread, state.kids = chapter id).
// Each book's text lives in vedas/<key>.js and adds to window.VEDA_CHAPTERS and window.VEDA_PLAN[<key>]
// (and to window.RMY_WHO for any new tappable names). Written for readers who are new to the Vedas:
// plain language, no verse blocks. Block types: see the top of ramayana.js; 'sloka' is NOT used here.
// Extra blocks: ['h', en, te] sub-heading · ['src', en, te] "where this comes from" ·
// ['link', en, te, rmyChapterId] · ['sglink', en, te, sageChapterId] · ['vdlink', en, te, vedaChapterId]
// Styles come from ramayana.js and sages.js, which must load first.
// Reading progress stays on this phone (localStorage 'vedic_vedas').
(function () {
  // [key, name, Telugu, subtitle, Telugu subtitle, icon, gradient]
  const SAGES = [
    ['intro', 'What Are the Vedas?', 'వేదాలు అంటే ఏమిటి?', 'Start here', 'ఇక్కడ మొదలుపెట్టండి', '🕉️', 'linear-gradient(160deg,#3a1406,#c0601c)'],
    ['rig', 'Ṛgveda', 'ఋగ్వేదం', 'The Veda of praise', 'స్తుతుల వేదం', '🔥', 'linear-gradient(160deg,#4a1206,#e07a2a)'],
    ['yajur', 'Yajurveda', 'యజుర్వేదం', 'The Veda of the yajña', 'యజ్ఞ వేదం', '🪔', 'linear-gradient(160deg,#3a2a06,#c8962a)'],
    ['sama', 'Sāmaveda', 'సామవేదం', 'The Veda of song', 'గాన వేదం', '🎶', 'linear-gradient(160deg,#0a2a4a,#3a8ac0)'],
    ['atharva', 'Atharvaveda', 'అథర్వ వేదం', 'The Veda of daily life', 'నిత్య జీవిత వేదం', '🌿', 'linear-gradient(160deg,#0a3a1a,#3a9a5a)'],
    ['life', 'The Vedas in Our Life', 'మన జీవితంలో వేదాలు', 'Why they still matter', 'ఈ రోజుకీ ఎందుకు ముఖ్యం', '🏡', 'linear-gradient(160deg,#3a0a2a,#b04a7a)'],
    ['vedanta', 'Vedānta', 'వేదాంతం', 'The heart of the Vedas', 'వేదాల సారం', '🪔', 'linear-gradient(160deg,#2a1240,#a05ac0)'],
    ['upanishads', 'The Ten Great Upaniṣads', 'దశోపనిషత్తులు', 'One by one, with their stories', 'ఒక్కొక్కటిగా, వాటి కథలతో', '📜', 'linear-gradient(160deg,#102a40,#3a8ab0)'],
    ['acharyas', 'The Great Ācāryas', 'మహా ఆచార్యులు', 'Śaṅkara · Rāmānuja · Madhva', 'శంకర · రామానుజ · మధ్వ', '🙏', 'linear-gradient(160deg,#3a2006,#c0861c)'],
  ];
  const SMETA = k => SAGES.find(x => x[0] === k) || SAGES[0];
  window.VEDA_META = SMETA;   // used by bookmarks.js
  const NEW_DAYS = 21;
  const FS = ['1.08rem', '1.22rem', '1.38rem', '1.6rem'];

  const chapters = () => (window.VEDA_CHAPTERS || []).slice().sort((a, b) => a.order - b.order);
  const chap = id => chapters().find(c => c.id === id);
  const plan = k => (window.VEDA_PLAN || {})[k] || [];
  const WHO = () => window.RMY_WHO || {};

  let S = { done: {}, pos: {}, opened: {}, last: '', fs: 1 };
  try { Object.assign(S, JSON.parse(localStorage.getItem('vedic_vedas') || '{}')); } catch (e) {}
  const MODE = () => { const l = (typeof settings !== 'undefined' && settings.language) || 'both'; return ['en', 'te', 'both'].includes(l) ? l : 'both'; };
  const save = () => { try { localStorage.setItem('vedic_vedas', JSON.stringify(S)); } catch (e) {} };

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const fmt = s => String(s)
    .replace(/\{(\w+)\|([^}]+)\}/g, (m, k, t) => `<span class="nm" onclick="rmyWho('${k}')">${t}</span>`)
    .replace(/\*([^*]+)\*/g, '<i>$1</i>');

  // A book's picture: dawn sky in its colours, hills, a sacred fire and a seated ṛṣi
  let SCN = 0;
  function scene(k, uid) {
    const g = `sg${uid}${++SCN}`;
    const cols = (SMETA(k)[6].match(/#[0-9a-f]{6}/gi) || ['#3a1a06', '#c06a2a']);
    return `<svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="${g}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${cols[0]}"/><stop offset=".7" stop-color="${cols[1]}"/><stop offset="1" stop-color="#f6c97a"/></linearGradient>
      <radialGradient id="${g}u" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff6d0"/><stop offset=".6" stop-color="#ffd27a" stop-opacity=".9"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient></defs>
      <rect width="320" height="220" fill="url(#${g}s)"/>
      <circle cx="160" cy="118" r="70" fill="url(#${g}u)"/>
      <path d="M0 150 L60 104 L110 138 L170 92 L230 136 L280 110 L320 132 V220 H0Z" fill="#000" opacity=".22"/>
      <path d="M0 172 C60 156 120 166 160 160 C210 152 270 164 320 156 V220 H0Z" fill="#2a1406" opacity=".75"/>
      <g fill="#1a0a02"><circle cx="160" cy="128" r="11"/><path d="M160 124 C170 108 166 100 160 96 C154 100 150 108 160 124Z"/>
      <path d="M140 172 C140 150 148 140 160 140 C172 140 180 150 180 172Z"/><path d="M128 174 C140 164 180 164 192 174 C180 180 140 180 128 174Z"/></g>
      <g transform="translate(232 170)"><path d="M-14 6 L14 6 L10 -2 L-10 -2Z" fill="#5a2a0a"/><path d="M0 -26 C-6 -14 -10 -10 -6 -2 C-2 4 4 4 6 -2 C10 -10 4 -14 0 -26Z" fill="#ffb02e"/><path d="M0 -14 C-3 -8 -4 -4 -2 -1 C0 1 2 1 3 -1 C4 -4 2 -8 0 -14Z" fill="#fff3b0"/></g>
      <g fill="#fff" opacity=".7"><circle cx="40" cy="30" r="1.2"/><circle cx="90" cy="18" r="1"/><circle cx="250" cy="26" r="1.3"/><circle cx="290" cy="50" r="1"/></g>
    </svg>`;
  }

  // ── blocks → HTML (same block types as the Rāmāyaṇa) ──
  function blocks(list, firstPara) {
    let first = firstPara;
    return list.map(b => {
      const t = b[0];
      if (t === 'p') { const h = `<p class="para${first ? ' first' : ''}">${fmt(b[1])}</p><p class="para-te">${fmt(b[2])}</p>`; first = false; return h; }
      if (t === 'h') return `<div class="chno" style="margin:26px 0 12px"><span class="en">${esc(b[1])}</span><span class="te" style="letter-spacing:0;text-transform:none">${esc(b[2])}</span></div>`;
      if (t === 'sloka') return `<div class="sloka"><div class="sk-te">${b[1].map(esc).join('<br>')}</div><div class="sk-en">${b[2].map(esc).join('<br>')}</div>
        ${b[3] ? `<div class="sk-m"><span class="en">${fmt(b[3])}</span><span class="te">${fmt(b[4] || '')}</span></div>` : ''}</div>`;
      if (t === 'dyk') return `<div class="dyk"><div class="ic">${b[1]}</div><div><b>Did you know?</b><p><span class="en">${fmt(b[2])}</span><span class="te">${fmt(b[3])}</span></p></div></div>`;
      if (t === 'src') return `<div class="dyk sg-src"><div class="ic">📜</div><div><b>Where this comes from</b><p><span class="en">${fmt(b[1])}</span><span class="te">${fmt(b[2])}</span></p></div></div>`;
      if (t === 'link') return `<button class="box next sg-link" onclick="openRmyChapter('${b[3]}')"><div><small>Śrī Rāmāyaṇa</small><b><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></b></div><span class="go">›</span></button>`;
      if (t === 'sglink') return `<button class="box next sg-link" onclick="openSageChapter('${b[3]}')"><div><small>Great Sages</small><b><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></b></div><span class="go">›</span></button>`;
      if (t === 'vdlink') return `<button class="box next sg-link" onclick="openVedaChapter('${b[3]}')"><div><small>The Vedas</small><b><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></b></div><span class="go">›</span></button>`;
      if (t === 'more') return `<details class="sank"><summary><span class="en">${esc(b[1])}<small>${esc(b[3])}</small></span><span class="te">${esc(b[2])}<small>${esc(b[4])}</small></span></summary><div class="sank-body">${blocks(b[5], false)}</div></details>`;
      return '';
    }).join('');
  }
  const words = c => JSON.stringify(c.pages).replace(/<[^>]+>/g, '').split(/[^A-Za-zĀ-ž]+/).length;
  const minutes = c => Math.max(3, Math.round(words(c) / 180));
  const isNew = c => !S.opened[c.id] && c.date && (Date.now() - new Date(c.date + 'T00:00:00').getTime()) < NEW_DAYS * 864e5;

  window.openVedas = () => { state.kids = ''; showView('vedas'); };
  window.openVeda = k => { state.kids = 'b:' + k; showView('vedas'); };
  window.openVedaChapter = id => { state.kids = id; showView('vedaread'); };
  
  const cover = () => `<div class="cover" style="background:radial-gradient(120% 90% at 80% 0%,#d0601c 0%,#7a2a0a 45%,#2a0a02 100%)">
      <h1>The Vedas</h1><div class="h1te">వేదాలు</div>
      <p>What the Vedas are, what is in each one, and why they still matter — explained simply, for everyone.</p>
      <div class="byline">Written by <b>Hari Pokkuluri</b><span class="te">రచన: హరి పొక్కులూరి</span></div>
    </div>`;
  function continueCard() {
    const cont = chap(S.last);
    if (!cont) return '';
    const pct = Math.round(((S.pos[cont.id] || 0) / (cont.pages.length + 1)) * 100);
    return `<div class="continue" onclick="openVedaChapter('${cont.id}')">
      <div class="thumb">${scene(cont.book, 't')}</div>
      <div class="ci"><small>Continue reading</small><b>${esc(cont.title)}</b>
      <span>${SMETA(cont.book)[1]} · Chapter ${cont.n}</span><div class="bar"><i style="width:${pct}%"></i></div></div>
      <span class="go">▶</span></div>`;
  }

  window.renderVedas = function () {
    const el = document.getElementById('view-vedas');
    const sel = (state.kids || '').startsWith('b:') ? state.kids.slice(2) : '';
    if (sel) { renderBook(el, sel); return; }
    const tiles = SAGES.map(([k, n, nt, sub, subTe, icon, grad]) => {
      const list = chapters().filter(c => c.book === k), total = plan(k).length;
      const read = list.filter(c => S.done[c.id]).length, fresh = list.some(isNew);
      const meta = list.length ? `${list.length}${total ? ' of ' + total : ''} chapters${read ? ' · ' + read + ' read' : ''}` : 'Coming soon';
      return `<button class="ktile${list.length ? '' : ' soon'}" onclick="openVeda('${k}')">
        <span class="kbg" style="background:${grad}"></span>
        ${fresh ? '<span class="knew">NEW</span>' : ''}
        <span class="kic">${icon}</span>
        <span class="kname">${n}</span><span class="kte">${nt}</span>
        <span class="kmeta">${esc(sub)}</span>
        <span class="kmeta">${meta}</span>
      </button>`;
    }).join('');
    el.innerHTML = `<div class="rmy">${cover()}${continueCard()}
      <div class="sec-t">The Books · గ్రంథాలు</div>
      <div class="kgrid">${tiles}</div></div>`;
  };

  function renderBook(el, k) {
    const [key, n, nt, sub, subTe, icon, grad] = SMETA(k);
    const list = chapters().filter(c => c.book === key), pl = plan(key);
    const read = list.filter(c => S.done[c.id]).length;
    const rows = pl.length ? pl.map((p, i) => {
      const c = list.find(x => x.n === i + 1);
      if (!c) return `<div class="ch soon"><span class="n">${i + 1}</span><span class="t"><b>${esc(p[0])}</b><span>${esc(p[1])} · coming soon</span></span></div>`;
      const d = S.done[c.id];
      return `<button class="ch${d ? ' done' : ''}" onclick="openVedaChapter('${c.id}')"><span class="n">${d ? '✓' : c.n}</span>
        <span class="t"><b>${esc(c.title)}</b><span class="tt">${esc(c.titleTe)}</span><span>${esc(c.src)} · ${c.pages.length + 2} pages · ~${minutes(c)} min</span></span>
        ${isNew(c) ? '<span class="new">NEW</span>' : ''}</button>`;
    }).join('') : `<div class="kempty">${icon}<p>This book is being written.<br><span class="te">ఈ భాగం త్వరలో వస్తుంది.</span></p></div>`;
    el.innerHTML = `<div class="rmy">
      <div class="khead" style="background:${grad}">
        <button class="kback" onclick="openVedas()" aria-label="All books">‹</button>
        <div class="kht"><span class="kic">${icon}</span><h1>${n}</h1><div class="h1te">${nt}</div>
        <p>${esc(sub)} · <span class="te">${esc(subTe)}</span></p>
        ${pl.length ? `<div class="kprog"><div class="bar"><i style="width:${Math.round(read / pl.length * 100)}%"></i></div><span>${read} of ${pl.length} chapters read</span></div>` : ''}</div>
      </div>
      <div class="chlist" style="padding-top:16px">${rows}</div>
    </div>`;
  }

  // ── reader ──
  let page = 0;
  window.renderVedaRead = function () {
    const el = document.getElementById('view-vedaread');
    const c = chap(state.kids);
    if (!c) { showView('vedas'); return; }
    S.last = c.id; S.opened[c.id] = true; save();
    const total = c.pages.length + 2;
    page = Math.min(S.pos[c.id] || 0, total - 1);
    const who = (c.who || []).filter(k => WHO()[k]);
    const opener = `<div class="scene">${scene(c.book, 'o')}</div>
      <div class="chno">${SMETA(c.book)[1]} · Chapter ${c.n}</div>
      <div class="optitle">${esc(c.title)}</div><div class="optitle-te">${esc(c.titleTe)}</div>
      <div class="meta"><span>📜 ${esc(c.src)}</span><span>⏱ ~${minutes(c)} min</span><span>📄 ${total} pages</span></div>
      ${c.n === 1 ? `<div class="opby">Written by <b>Hari Pokkuluri</b> · <span class="te">రచన: హరి పొక్కులూరి</span></div>` : ''}
      ${who.length ? `<div class="who-t">In this chapter</div><div class="whos">${who.map(k => `<button class="who" onclick="rmyWho('${k}')"><span class="av">${WHO()[k].av}</span><span class="wn">${esc(WHO()[k].en)}</span></button>`).join('')}</div>` : ''}
      <div class="hint">Swipe to begin →</div>`;
    const nextPlan = plan(c.book)[c.n];
    const nextC = chapters().find(x => x.book === c.book && x.n === c.n + 1);
    const end = `<div class="end-h"><div class="lotus">🪷</div><h2>Chapter complete</h2><p class="te">అధ్యాయం పూర్తయింది</p></div>
      ${c.remember ? `<div class="box"><h3>Remember</h3><ul>${c.remember.map(r => `<li><span><span class="en">${fmt(r[0])}</span><span class="te">${fmt(r[1])}</span></span></li>`).join('')}</ul></div>` : ''}
      ${c.think ? `<div class="box think"><h3>Think about it</h3><p><span class="en">${fmt(c.think[0])}</span><span class="te">${fmt(c.think[1])}</span></p></div>` : ''}
      ${nextPlan ? `<div class="box next"${nextC ? ` onclick="openVedaChapter('${nextC.id}')"` : ''}><div><small>Up next · Chapter ${c.n + 1}${nextC ? '' : ' · coming soon'}</small><b>${esc(nextPlan[0])}</b><span>${esc(nextPlan[1])}</span></div>${nextC ? '<span class="go">›</span>' : ''}</div>` : ''}
      <button class="markbtn${S.done[c.id] ? ' did' : ''}" onclick="vdDone('${c.id}', this)">${S.done[c.id] ? '✓ Read' : 'Mark chapter as read'}</button>`;
    const pages = [opener, ...c.pages.map((b, i) => blocks(b, i === 0)), end];
    el.innerHTML = `<div class="rmy rmy-read mode-${MODE()}" id="vd-read" style="--fs:${FS[S.fs] || FS[1]}" data-noswipe>
      <div class="rbar"><button class="x" onclick="openVeda('${c.book}')" aria-label="Chapters">☰</button>
        <div class="where"><b>${SMETA(c.book)[1]}</b> · Ch ${c.n}</div>
        <div class="lang">${[['en', 'English'], ['te', 'తెలుగు'], ['both', 'Both']].map(([m, t]) => `<button data-m="${m}" class="${MODE() === m ? 'on' : ''}${m === 'te' ? ' te' : ''}" onclick="vdMode('${m}')">${t}</button>`).join('')}</div>
        <button class="aa" onclick="vdFont()" aria-label="Text size">Aa</button></div>
      <div class="prog"><i id="vd-prog"></i></div>
      <div class="pages" id="vd-pages"><div class="track" id="vd-track">${pages.map(h => `<div class="page">${h}</div>`).join('')}</div></div>
      <div class="rnav"><button class="pb" id="vd-prev" onclick="vdGo(-1)" aria-label="Previous page">‹</button>
        <div class="dots">${pages.map(() => '<i></i>').join('')}</div>
        <button class="pb" id="vd-next" onclick="vdGo(1)" aria-label="Next page">›</button></div>
    </div>`;
    swipe(document.getElementById('vd-pages'));
    vdGo(0, true);
  };
  window.vdGo = function (d, quiet) {
    const c = chap(state.kids); if (!c) return;
    const n = c.pages.length + 2;
    page = Math.max(0, Math.min(n - 1, page + d));
    const tr = document.getElementById('vd-track'); if (!tr) return;
    tr.style.transform = `translateX(${-page * 100}%)`;
    [...tr.children].forEach((pg, i) => pg.classList.toggle('cur', i === page));
    fitHeight();
    document.querySelectorAll('#vd-read .dots i').forEach((x, i) => x.classList.toggle('on', i === page));
    document.getElementById('vd-prev').disabled = page === 0;
    document.getElementById('vd-next').disabled = page === n - 1;
    document.getElementById('vd-prog').style.width = Math.round(page / (n - 1) * 100) + '%';
    S.pos[c.id] = page; save();
    if (!quiet) { const m = document.getElementById('main'); if (m) m.scrollTo({ top: 0, behavior: 'smooth' }); }
  };
  let ro = null;
  function fitHeight() {
    const cur = document.querySelector('#vd-track .page.cur'), box = document.getElementById('vd-pages');
    if (!cur || !box) return;
    box.style.height = cur.offsetHeight + 'px';
    if (window.ResizeObserver) { if (ro) ro.disconnect(); ro = new ResizeObserver(() => { box.style.height = cur.offsetHeight + 'px'; }); ro.observe(cur); }
  }
  function swipe(el) {
    let x0 = null, y0 = 0;
    el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) vdGo(dx < 0 ? 1 : -1);
      x0 = null;
    }, { passive: true });
  }
  window.vdMode = m => {
    if (typeof settings !== 'undefined') { settings.language = m; if (typeof saveSettings === 'function') saveSettings(); }
    const r = document.getElementById('vd-read');
    r.classList.remove('mode-en', 'mode-te', 'mode-both'); r.classList.add('mode-' + m);
    r.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.m === m));
  };
  window.vdFont = () => { S.fs = (S.fs + 1) % FS.length; save(); document.getElementById('vd-read').style.setProperty('--fs', FS[S.fs]); };
  window.vdDone = (id, btn) => { S.done[id] = !S.done[id]; save(); btn.classList.toggle('did', !!S.done[id]); btn.textContent = S.done[id] ? '✓ Read' : 'Mark chapter as read'; };


  if (typeof state !== 'undefined' && (state.view === 'vedas' || state.view === 'vedaread')) renderCurrentView();
})();
