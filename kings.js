// ─────────────── GREAT KINGS · మహారాజులు ───────────────
// A sister of the Great Sages tile (sages.js), using the same reader and styles.
// Index of kings (view-kings) → one king's chapters (view-kings, state.kids = 'k:<key>')
// → chapter reader (view-kingread, state.kids = chapter id).
// Each king's text lives in kings/<key>.js and adds to window.KING_CHAPTERS,
// window.KING_PLAN[<key>] and window.RMY_WHO (shared name sheet).
// Chapter blocks use the same format as the Rāmāyaṇa (see the top of ramayana.js), plus
// 'kglink' (opens another king's chapter). 'sglink' and 'link' still open sage / Rāmāyaṇa chapters.
// Styles come from ramayana.js and sages.js, which must load first.
// Reading progress stays on this phone (localStorage 'vedic_kings').
(function () {
  // [key, name, Telugu, known for, Telugu known for, icon, gradient]
  const KINGS = [
    ['chandragupta', 'Candragupta', 'చంద్రగుప్తుడు', 'Maurya · founder of the first empire', 'మౌర్య · తొలి సామ్రాజ్య స్థాపకుడు', '🏰', 'linear-gradient(160deg,#2a1a06,#b0802a)'],
    ['ashoka', 'Aśoka', 'అశోకుడు', 'The emperor who gave up war', 'యుద్ధాన్ని విడిచిన చక్రవర్తి', '☸️', 'linear-gradient(160deg,#0a1a3a,#3a6ab0)'],
    ['shatakarni', 'Śātakarṇi', 'శాతకర్ణి', 'Gautamīputra · greatest Sātavāhana', 'గౌతమీపుత్ర · శాతవాహన శ్రేష్ఠుడు', '🐎', 'linear-gradient(160deg,#3a0a0a,#b03a2a)'],
    ['kharavela', 'Khāravela', 'ఖారవేలుడు', 'Kaliṅga · the Elephant Cave king', 'కళింగ · హాథీగుంఫా రాజు', '🐘', 'linear-gradient(160deg,#0a2a1a,#2a8a6a)'],
    ['samudragupta', 'Samudragupta', 'సముద్రగుప్తుడు', 'Gupta · the poet-king who conquered', 'గుప్త · దిగ్విజయుడైన కవిరాజు', '🪕', 'linear-gradient(160deg,#2a0a3a,#b0702a)'],
    ['vikramaditya', 'Vikramāditya', 'విక్రమాదిత్యుడు', 'Candragupta II · Gupta · the iron pillar', 'రెండవ చంద్రగుప్తుడు · గుప్త · ఇనుప స్తంభం', '🌙', 'linear-gradient(160deg,#0a1a2a,#c09a3a)'],
    ['skandagupta', 'Skandagupta', 'స్కందగుప్తుడు', 'Gupta · the king who held back the Hūṇas', 'గుప్త · హూణులను నిలువరించిన రాజు', '🛡️', 'linear-gradient(160deg,#1a0a0a,#a04a2a)'],
    ['harsha', 'Harṣa', 'హర్షుడు', 'Harṣavardhana · Kanauj · poet-king of the North', 'హర్షవర్ధనుడు · కనౌజ్ · ఉత్తరాపథ కవిరాజు', '🪷', 'linear-gradient(160deg,#2a0a1a,#c06a4a)'],
    ['pulakeshin', 'Pulakeśin II', 'రెండవ పులకేశి', 'Cālukya of Vātāpi · Lord of the South', 'వాతాపి చాళుక్య · దక్షిణాపథ ప్రభువు', '🐗', 'linear-gradient(160deg,#1a1a0a,#8a6a1a)'],
    ['narasimhavarman', 'Narasiṃhavarman', 'నరసింహవర్మ', 'Mahāmalla · Pallava · taker of Vātāpi', 'మహామల్లుడు · పల్లవ · వాతాపికొండ', '🦁', 'linear-gradient(160deg,#0a1a2a,#2a8a8a)'],
    ['lalitaditya', 'Lalitāditya', 'లలితాదిత్యుడు', 'Muktāpīḍa · Kashmir · the Sun temple of Mārtaṇḍa', 'ముక్తాపీడుడు · కాశ్మీరం · మార్తాండ సూర్యాలయం', '☀️', 'linear-gradient(160deg,#0a1a2a,#8a9ab0)'],
    ['rajaraja', 'Rājarāja', 'రాజరాజ చోళుడు', 'Cōḷa · the Great Temple of Thanjavur', 'చోళ · తంజావూరు బృహదీశ్వరాలయం', '🐅', 'linear-gradient(160deg,#2a0a0a,#c0601a)'],
    ['rajendra', 'Rājendra Cōḷa', 'రాజేంద్ర చోళుడు', 'Cōḷa · the march to the Gaṅgā and the sea', 'చోళ · గంగ వరకు, సముద్రం దాటి', '🌊', 'linear-gradient(160deg,#0a1a3a,#c07a1a)'],
    ['bhoja', 'Bhoja', 'భోజరాజు', 'Paramāra · Dhārā · the scholar-king', 'పరమార · ధారా · పండిత రాజు', '📚', 'linear-gradient(160deg,#1a0a2a,#b07a3a)'],
    ['kakatiya', 'Rudramadevī', 'రుద్రమదేవి', 'Gaṇapatideva & Rudramadevī · Kākatīyas of Orugallu', 'గణపతిదేవుడు, రుద్రమదేవి · ఓరుగల్లు కాకతీయులు', '🏯', 'linear-gradient(160deg,#2a0a1a,#c0902a)'],
  ];
  const SMETA = k => KINGS.find(x => x[0] === k) || KINGS[0];
  window.KING_META = SMETA;   // used by bookmarks.js
  const NEW_DAYS = 21;
  const FS = ['1.08rem', '1.22rem', '1.38rem', '1.6rem'];

  const chapters = () => (window.KING_CHAPTERS || []).slice().sort((a, b) => a.order - b.order);
  const chap = id => chapters().find(c => c.id === id);
  const plan = k => (window.KING_PLAN || {})[k] || [];
  const WHO = () => window.RMY_WHO || {};

  let S = { done: {}, pos: {}, opened: {}, last: '', fs: 1 };
  try { Object.assign(S, JSON.parse(localStorage.getItem('vedic_kings') || '{}')); } catch (e) {}
  const MODE = () => { const l = (typeof settings !== 'undefined' && settings.language) || 'both'; return ['en', 'te', 'both'].includes(l) ? l : 'both'; };
  const save = () => { try { localStorage.setItem('vedic_kings', JSON.stringify(S)); } catch (e) {} };

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const fmt = s => String(s)
    .replace(/\{(\w+)\|([^}]+)\}/g, (m, k, t) => `<span class="nm" onclick="rmyWho('${k}')">${t}</span>`)
    .replace(/\*([^*]+)\*/g, '<i>$1</i>');

  // A king's own picture: sky in his colours, hills, a hill-fort with a banner, and a rising sun
  let SCN = 0;
  function scene(k, uid) {
    const g = `kg${uid}${++SCN}`;
    const cols = (SMETA(k)[6].match(/#[0-9a-f]{6}/gi) || ['#3a1a06', '#c06a2a']);
    return `<svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="${g}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${cols[0]}"/><stop offset=".7" stop-color="${cols[1]}"/><stop offset="1" stop-color="#f6c97a"/></linearGradient>
      <radialGradient id="${g}u" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff6d0"/><stop offset=".6" stop-color="#ffd27a" stop-opacity=".9"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient></defs>
      <rect width="320" height="220" fill="url(#${g}s)"/>
      <circle cx="232" cy="96" r="58" fill="url(#${g}u)"/>
      <path d="M0 150 L50 112 L96 140 L150 100 L214 138 L270 108 L320 130 V220 H0Z" fill="#000" opacity=".22"/>
      <path d="M0 178 C60 160 120 170 170 162 C220 156 270 166 320 158 V220 H0Z" fill="#2a1406" opacity=".75"/>
      <g fill="#1a0a02">
        <path d="M78 166 V124 h8 v-8 h8 v8 h8 v-8 h8 v8 h8 v-8 h8 v8 h8 V166Z"/>
        <path d="M96 124 V96 h4 v-6 h4 v6 h4 v-6 h4 v6 h4 V124Z"/>
        <rect x="112" y="60" width="2" height="30"/><path d="M114 60 L136 66 L114 72Z" fill="#ffb02e"/>
        <path d="M140 166 V134 h40 V166Z"/><path d="M136 134 L160 112 L184 134Z"/>
        <path d="M152 166 V150 a8 8 0 0 1 16 0 V166Z" fill="#f6c97a" opacity=".55"/>
      </g>
      <g fill="#fff" opacity=".7"><circle cx="40" cy="30" r="1.2"/><circle cx="90" cy="18" r="1"/><circle cx="170" cy="26" r="1.3"/><circle cx="290" cy="40" r="1"/></g>
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
      if (t === 'src') return `<div class="dyk sg-src"><div class="ic">📜</div><div><b>Where this is told</b><p><span class="en">${fmt(b[1])}</span><span class="te">${fmt(b[2])}</span></p></div></div>`;
      if (t === 'link') return `<button class="box next sg-link" onclick="openRmyChapter('${b[3]}')"><div><small>Śrī Rāmāyaṇa</small><b><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></b></div><span class="go">›</span></button>`;
      if (t === 'kglink') return `<button class="box next sg-link" onclick="openKingChapter('${b[3]}')"><div><small>Great Kings</small><b><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></b></div><span class="go">›</span></button>`;
      if (t === 'sglink') return `<button class="box next sg-link" onclick="openSageChapter('${b[3]}')"><div><small>Great Sages</small><b><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></b></div><span class="go">›</span></button>`;
      if (t === 'more') return `<details class="sank"><summary><span class="en">${esc(b[1])}<small>${esc(b[3])}</small></span><span class="te">${esc(b[2])}<small>${esc(b[4])}</small></span></summary><div class="sank-body">${blocks(b[5], false)}</div></details>`;
      return '';
    }).join('');
  }
  const words = c => JSON.stringify(c.pages).replace(/<[^>]+>/g, '').split(/[^A-Za-zĀ-ž]+/).length;
  const minutes = c => Math.max(3, Math.round(words(c) / 180));
  const isNew = c => !S.opened[c.id] && c.date && (Date.now() - new Date(c.date + 'T00:00:00').getTime()) < NEW_DAYS * 864e5;

  window.openKings = () => { state.kids = ''; showView('kings'); };
  window.openKing = k => { state.kids = 'k:' + k; showView('kings'); };
  window.openKingChapter = id => { state.kids = id; showView('kingread'); };
  window.kingHasStory = k => chapters().some(c => c.king === k);

  const cover = () => `<div class="cover" style="background:radial-gradient(120% 90% at 80% 0%,#d0601c 0%,#7a2a0a 45%,#2a0a02 100%)">
      <h1>Great Kings</h1><div class="h1te">మహారాజులు</div>
      <p>The lives of the great Hindu kings of India — from their inscriptions, coins, chronicles and the old poets.</p>
      <div class="byline">Retold by <b>Hari Pokkuluri</b><span class="te">కథనం: హరి పొక్కులూరి</span></div>
    </div>`;
  function continueCard() {
    const cont = chap(S.last);
    if (!cont) return '';
    const pct = Math.round(((S.pos[cont.id] || 0) / (cont.pages.length + 1)) * 100);
    return `<div class="continue" onclick="openKingChapter('${cont.id}')">
      <div class="thumb">${scene(cont.king, 't')}</div>
      <div class="ci"><small>Continue reading</small><b>${esc(cont.title)}</b>
      <span>${SMETA(cont.king)[1]} · Chapter ${cont.n}</span><div class="bar"><i style="width:${pct}%"></i></div></div>
      <span class="go">▶</span></div>`;
  }

  window.renderKings = function () {
    const el = document.getElementById('view-kings');
    const sel = (state.kids || '').startsWith('k:') ? state.kids.slice(2) : '';
    if (sel) { renderKing(el, sel); return; }
    const tiles = KINGS.map(([k, n, nt, sub, subTe, icon, grad]) => {
      const list = chapters().filter(c => c.king === k), total = plan(k).length;
      const read = list.filter(c => S.done[c.id]).length, fresh = list.some(isNew);
      const meta = list.length ? `${list.length}${total ? ' of ' + total : ''} chapters${read ? ' · ' + read + ' read' : ''}` : 'Coming soon';
      return `<button class="ktile${list.length ? '' : ' soon'}" onclick="openKing('${k}')">
        <span class="kbg" style="background:${grad}"></span>
        ${fresh ? '<span class="knew">NEW</span>' : ''}
        <span class="kic">${icon}</span>
        <span class="kname">${n}</span><span class="kte">${nt}</span>
        <span class="kmeta">${esc(sub)}</span>
        <span class="kmeta">${meta}</span>
      </button>`;
    }).join('');
    el.innerHTML = `<div class="rmy">${cover()}${continueCard()}
      <div class="sec-t">The Kings · మహారాజులు</div>
      <div class="kgrid">${tiles}</div></div>`;
  };

  function renderKing(el, k) {
    const [key, n, nt, sub, subTe, icon, grad] = SMETA(k);
    const list = chapters().filter(c => c.king === key), pl = plan(key);
    const read = list.filter(c => S.done[c.id]).length;
    const rows = pl.length ? pl.map((p, i) => {
      const c = list.find(x => x.n === i + 1);
      if (!c) return `<div class="ch soon"><span class="n">${i + 1}</span><span class="t"><b>${esc(p[0])}</b><span>${esc(p[1])} · coming soon</span></span></div>`;
      const d = S.done[c.id];
      return `<button class="ch${d ? ' done' : ''}" onclick="openKingChapter('${c.id}')"><span class="n">${d ? '✓' : c.n}</span>
        <span class="t"><b>${esc(c.title)}</b><span class="tt">${esc(c.titleTe)}</span><span>${esc(c.src)} · ${c.pages.length + 2} pages · ~${minutes(c)} min</span></span>
        ${isNew(c) ? '<span class="new">NEW</span>' : ''}</button>`;
    }).join('') : `<div class="kempty">${icon}<p>${n}'s life story is being written.<br><span class="te">ఈ రాజు కథ త్వరలో వస్తుంది.</span></p></div>`;
    el.innerHTML = `<div class="rmy">
      <div class="khead" style="background:${grad}">
        <button class="kback" onclick="openKings()" aria-label="All kings">‹</button>
        <div class="kht"><span class="kic">${icon}</span><h1>${n}</h1><div class="h1te">${nt}</div>
        <p>${esc(sub)} · <span class="te">${esc(subTe)}</span></p>
        ${pl.length ? `<div class="kprog"><div class="bar"><i style="width:${Math.round(read / pl.length * 100)}%"></i></div><span>${read} of ${pl.length} chapters read</span></div>` : ''}</div>
      </div>
      <div class="chlist" style="padding-top:16px">${rows}</div>
    </div>`;
  }

  // ── reader ──
  let page = 0;
  window.renderKingRead = function () {
    const el = document.getElementById('view-kingread');
    const c = chap(state.kids);
    if (!c) { showView('kings'); return; }
    S.last = c.id; S.opened[c.id] = true; save();
    const total = c.pages.length + 2;
    page = Math.min(S.pos[c.id] || 0, total - 1);
    const who = (c.who || []).filter(k => WHO()[k]);
    const opener = `<div class="scene">${scene(c.king, 'o')}</div>
      <div class="chno">${SMETA(c.king)[1]} · Chapter ${c.n}</div>
      <div class="optitle">${esc(c.title)}</div><div class="optitle-te">${esc(c.titleTe)}</div>
      <div class="meta"><span>📜 ${esc(c.src)}</span><span>⏱ ~${minutes(c)} min</span><span>📄 ${total} pages</span></div>
      ${c.n === 1 ? `<div class="opby">Retold by <b>Hari Pokkuluri</b> · <span class="te">కథనం: హరి పొక్కులూరి</span></div>` : ''}
      ${who.length ? `<div class="who-t">In this chapter</div><div class="whos">${who.map(k => `<button class="who" onclick="rmyWho('${k}')"><span class="av">${WHO()[k].av}</span><span class="wn">${esc(WHO()[k].en)}</span></button>`).join('')}</div>` : ''}
      <div class="hint">Swipe to begin →</div>`;
    const nextPlan = plan(c.king)[c.n];
    const nextC = chapters().find(x => x.king === c.king && x.n === c.n + 1);
    const end = `<div class="end-h"><div class="lotus">🪷</div><h2>Chapter complete</h2><p class="te">అధ్యాయం పూర్తయింది</p></div>
      ${c.remember ? `<div class="box"><h3>Remember</h3><ul>${c.remember.map(r => `<li><span><span class="en">${fmt(r[0])}</span><span class="te">${fmt(r[1])}</span></span></li>`).join('')}</ul></div>` : ''}
      ${c.think ? `<div class="box think"><h3>Think about it</h3><p><span class="en">${fmt(c.think[0])}</span><span class="te">${fmt(c.think[1])}</span></p></div>` : ''}
      ${nextPlan ? `<div class="box next"${nextC ? ` onclick="openKingChapter('${nextC.id}')"` : ''}><div><small>Up next · Chapter ${c.n + 1}${nextC ? '' : ' · coming soon'}</small><b>${esc(nextPlan[0])}</b><span>${esc(nextPlan[1])}</span></div>${nextC ? '<span class="go">›</span>' : ''}</div>` : ''}
      <button class="markbtn${S.done[c.id] ? ' did' : ''}" onclick="kgDone('${c.id}', this)">${S.done[c.id] ? '✓ Read' : 'Mark chapter as read'}</button>`;
    const pages = [opener, ...c.pages.map((b, i) => blocks(b, i === 0)), end];
    el.innerHTML = `<div class="rmy rmy-read mode-${MODE()}" id="kg-read" style="--fs:${FS[S.fs] || FS[1]}" data-noswipe>
      <div class="rbar"><button class="x" onclick="openKing('${c.king}')" aria-label="Chapters">☰</button>
        <div class="where"><b>${SMETA(c.king)[1]}</b> · Ch ${c.n}</div>
        <div class="lang">${[['en', 'English'], ['te', 'తెలుగు'], ['both', 'Both']].map(([m, t]) => `<button data-m="${m}" class="${MODE() === m ? 'on' : ''}${m === 'te' ? ' te' : ''}" onclick="kgMode('${m}')">${t}</button>`).join('')}</div>
        <button class="aa" onclick="kgFont()" aria-label="Text size">Aa</button></div>
      <div class="prog"><i id="kg-prog"></i></div>
      <div class="pages" id="kg-pages"><div class="track" id="kg-track">${pages.map(h => `<div class="page">${h}</div>`).join('')}</div></div>
      <div class="rnav"><button class="pb" id="kg-prev" onclick="kgGo(-1)" aria-label="Previous page">‹</button>
        <div class="dots">${pages.map(() => '<i></i>').join('')}</div>
        <button class="pb" id="kg-next" onclick="kgGo(1)" aria-label="Next page">›</button></div>
    </div>`;
    swipe(document.getElementById('kg-pages'));
    kgGo(0, true);
  };
  window.kgGo = function (d, quiet) {
    const c = chap(state.kids); if (!c) return;
    const n = c.pages.length + 2;
    page = Math.max(0, Math.min(n - 1, page + d));
    const tr = document.getElementById('kg-track'); if (!tr) return;
    tr.style.transform = `translateX(${-page * 100}%)`;
    [...tr.children].forEach((pg, i) => pg.classList.toggle('cur', i === page));
    fitHeight();
    document.querySelectorAll('#kg-read .dots i').forEach((x, i) => x.classList.toggle('on', i === page));
    document.getElementById('kg-prev').disabled = page === 0;
    document.getElementById('kg-next').disabled = page === n - 1;
    document.getElementById('kg-prog').style.width = Math.round(page / (n - 1) * 100) + '%';
    S.pos[c.id] = page; save();
    if (!quiet) { const m = document.getElementById('main'); if (m) m.scrollTo({ top: 0, behavior: 'smooth' }); }
  };
  let ro = null;
  function fitHeight() {
    const cur = document.querySelector('#kg-track .page.cur'), box = document.getElementById('kg-pages');
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
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) kgGo(dx < 0 ? 1 : -1);
      x0 = null;
    }, { passive: true });
  }
  window.kgMode = m => {
    if (typeof settings !== 'undefined') { settings.language = m; if (typeof saveSettings === 'function') saveSettings(); }
    const r = document.getElementById('kg-read');
    r.classList.remove('mode-en', 'mode-te', 'mode-both'); r.classList.add('mode-' + m);
    r.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.m === m));
  };
  window.kgFont = () => { S.fs = (S.fs + 1) % FS.length; save(); document.getElementById('kg-read').style.setProperty('--fs', FS[S.fs]); };
  window.kgDone = (id, btn) => { S.done[id] = !S.done[id]; save(); btn.classList.toggle('did', !!S.done[id]); btn.textContent = S.done[id] ? '✓ Read' : 'Mark chapter as read'; };

  // (styles shared with sages.js)

  if (typeof state !== 'undefined' && (state.view === 'kings' || state.view === 'kingread')) renderCurrentView();
})();
