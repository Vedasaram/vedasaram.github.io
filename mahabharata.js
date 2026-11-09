// ─────────────── ŚRĪ MAHĀBHĀRATAM READER ───────────────
// Book cover (view-mahabharata-cover) + parva list (view-mahabharata) + chapter reader (view-mbhread).
// Chapter text lives in mahabharata/*.js as window.MBH_CHAPTERS entries — same block format as the Rāmāyaṇa:
// Each chapter names its upa-parva in .adh (e.g. 'Āstīka Parva').
//   ['p', en, te]                         paragraph (names: {key|Text})
//   ['sloka', teLines[], enLines[], meaningEn, meaningTe]
//   ['dyk', icon, en, te]                 "Did you know?" box
//   ['vsnlink', en, te]                    button into the Viṣṇu Sahasranāmam section
//   ['more', titleEn, titleTe, noteEn, noteTe, blocks[]]   tap-to-open box
//   ['gitalink', en, te, gitaChapterNo]   button that opens that chapter in the app's Gītā section
// Styling reuses the .rmy styles injected by ramayana.js; scene art comes from window.RMY_SCENE plus a few of our own.
// Reading progress stays on this phone (localStorage 'vedic_mbh').
(function () {
  // [key, name, Telugu, subtitle, Telugu subtitle, icon, gradient]
  const PARVAS = [
    ['adi', 'Ādi Parva', 'ఆది పర్వం', 'The Beginning', 'ఆరంభం — వంశాలు, జన్మలు', '🌅', 'linear-gradient(160deg,#5a2a06,#d8902c)'],
    ['sabha', 'Sabhā Parva', 'సభా పర్వం', 'The Assembly Hall', 'మయసభ, జూదం', '🎲', 'linear-gradient(160deg,#3a0a2a,#b0306a)'],
    ['vana', 'Āraṇyaka Parva', 'అరణ్య పర్వం', 'The Forest Years', 'పన్నెండేళ్ళ వనవాసం', '🌲', 'linear-gradient(160deg,#0f3a22,#3f9a5a)'],
    ['virata', 'Virāṭa Parva', 'విరాట పర్వం', 'The Year in Disguise', 'అజ్ఞాతవాసం', '🎭', 'linear-gradient(160deg,#2a1a4a,#7a5ab0)'],
    ['udyoga', 'Udyoga Parva', 'ఉద్యోగ పర్వం', 'The Effort for Peace', 'రాయబారం', '🕊️', 'linear-gradient(160deg,#0a2a4a,#2a7ab0)'],
    ['bhishma', 'Bhīṣma Parva', 'భీష్మ పర్వం', 'Bhīṣma Commands · the Gītā', 'భగవద్గీత, భీష్ముని యుద్ధం', '🐚', 'linear-gradient(160deg,#4a1a06,#c0602a)'],
    ['drona', 'Droṇa Parva', 'ద్రోణ పర్వం', 'Droṇa Commands', 'అభిమన్యుడు, పద్మవ్యూహం', '🏹', 'linear-gradient(160deg,#3a0a0a,#b03a2a)'],
    ['karna', 'Karṇa Parva', 'కర్ణ పర్వం', 'Karṇa Commands', 'కర్ణుని యుద్ధం', '☀️', 'linear-gradient(160deg,#5a3a06,#e0a02a)'],
    ['shalya', 'Śalya Parva', 'శల్య పర్వం', 'The Last Day', 'గదాయుద్ధం', '⚔️', 'linear-gradient(160deg,#2a2a2a,#7a6a5a)'],
    ['sauptika', 'Sauptika Parva', 'సౌప్తిక పర్వం', 'The Night Raid', 'అశ్వత్థామ', '🌑', 'linear-gradient(160deg,#0a0a1a,#3a3a6a)'],
    ['stri', 'Strī Parva', 'స్త్రీ పర్వం', 'The Women’s Lament', 'గాంధారి శోకం', '🕯️', 'linear-gradient(160deg,#2a1a1a,#8a5a4a)'],
    ['shanti', 'Śānti Parva', 'శాంతి పర్వం', 'Peace · Bhīṣma Teaches', 'రాజధర్మం, మోక్షధర్మం', '🪷', 'linear-gradient(160deg,#0a3a3a,#2a9a8a)'],
    ['anushasana', 'Anuśāsana Parva', 'అనుశాసనిక పర్వం', 'The Instructions', 'విష్ణు సహస్రనామం', '📜', 'linear-gradient(160deg,#3a2a0a,#b0902a)'],
    ['ashvamedhika', 'Āśvamedhika Parva', 'అశ్వమేధ పర్వం', 'The Horse Sacrifice', 'అశ్వమేధ యాగం', '🐎', 'linear-gradient(160deg,#4a1a0a,#c0702a)'],
    ['ashramavasika', 'Āśramavāsika Parva', 'ఆశ్రమవాస పర్వం', 'To the Forest', 'వృద్ధుల వనవాసం', '🌿', 'linear-gradient(160deg,#1a3a1a,#5a8a4a)'],
    ['mausala', 'Mausala Parva', 'మౌసల పర్వం', 'The End of the Yādavas', 'ద్వారక మునక', '🌊', 'linear-gradient(160deg,#0a1a3a,#2a5a9a)'],
    ['mahaprasthanika', 'Mahāprasthānika Parva', 'మహాప్రస్థానిక పర్వం', 'The Great Journey', 'హిమాలయ యాత్ర', '🏔️', 'linear-gradient(160deg,#2a3a4a,#8aa0b8)'],
    ['svargarohana', 'Svargārohaṇa Parva', 'స్వర్గారోహణ పర్వం', 'The Ascent to Heaven', 'స్వర్గారోహణం', '✨', 'linear-gradient(160deg,#1a1a4a,#8a7ad0)'],
    ['harivamsha', 'Harivaṃśa', 'హరివంశం', 'The Life of Kṛṣṇa', 'శ్రీకృష్ణుని కథ', '🪈', 'linear-gradient(160deg,#0a1a4a,#2a6ad0)'],
  ];
  const PMETA = k => PARVAS.find(x => x[0] === k) || PARVAS[0];
  window.MBH_PMETA = PMETA;   // used by bookmarks.js
  const NEW_DAYS = 21;
  const FS = ['1.08rem', '1.22rem', '1.38rem', '1.6rem'];

  const chapters = () => (window.MBH_CHAPTERS || []).slice().sort((a, b) => a.order - b.order);
  const chap = id => chapters().find(c => c.id === id);
  const plan = k => (window.MBH_PLAN || {})[k] || [];
  const WHO = () => window.MBH_WHO || {};

  let S = { done: {}, pos: {}, opened: {}, last: '', fs: 1 };
  try { Object.assign(S, JSON.parse(localStorage.getItem('vedic_mbh') || '{}')); } catch (e) {}
  const MODE = () => { const l = (typeof settings !== 'undefined' && settings.language) || 'both'; return l === 'hi' ? 'en' : ['en', 'te', 'both'].includes(l) ? l : 'both'; };   // Hindi: English until the Hindi text is ready
  const save = () => { try { localStorage.setItem('vedic_mbh', JSON.stringify(S)); } catch (e) {} };

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const fmt = s => String(s)
    .replace(/\{(\w+)\|([^}]+)\}/g, (m, k, t) => `<span class="nm" onclick="mbhWho('${k}')">${t}</span>`)
    .replace(/\*([^*]+)\*/g, '<i>$1</i>');

  // ── scene art: our own scenes first, then the Rāmāyaṇa's ──
  let SCN = 0;
  function scene(name, uid) {
    const g = `mbh${uid}${++SCN}`;
    const W = b => `<svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">${b}</svg>`;
    const SC = {
      // a storyteller among sages in the Naimiṣa forest, sacred fire in the middle
      naimisha: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3c27a"/><stop offset="1" stop-color="#fbe9cc"/></linearGradient><radialGradient id="${g}f" cx=".5" cy=".7" r=".6"><stop offset="0" stop-color="#fff3b0"/><stop offset=".6" stop-color="#ffa62e"/><stop offset="1" stop-color="#e2461a"/></radialGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <g fill="#3f7a46"><ellipse cx="40" cy="80" rx="60" ry="46"/><ellipse cx="290" cy="76" rx="58" ry="44"/><ellipse cx="160" cy="58" rx="70" ry="34" fill="#4c8c51"/></g>
        <g fill="#5a3a1e"><rect x="34" y="100" width="10" height="70"/><rect x="284" y="96" width="10" height="74"/></g>
        <rect y="160" width="320" height="60" fill="#c99a5a"/>
        <path d="M144 176 C138 160 150 150 160 134 C170 150 182 160 176 176Z" fill="url(#${g}f)"/>
        <g fill="#7a3a12"><circle cx="160" cy="112" r="10"/><path d="M144 160 Q160 118 176 160Z"/></g>
        <g fill="#5a2a0e"><circle cx="86" cy="150" r="8"/><path d="M74 182 Q86 152 98 182Z"/><circle cx="234" cy="150" r="8"/><path d="M222 182 Q234 152 246 182Z"/><circle cx="118" cy="160" r="7"/><path d="M108 188 Q118 162 128 188Z"/><circle cx="202" cy="160" r="7"/><path d="M192 188 Q202 162 212 188Z"/></g>`,
      // serpents rising from a sacrificial fire
      serpent: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1030"/><stop offset="1" stop-color="#a0401a"/></linearGradient><radialGradient id="${g}f" cx=".5" cy=".8" r=".6"><stop offset="0" stop-color="#fff0a0"/><stop offset=".5" stop-color="#ff9a2a"/><stop offset="1" stop-color="#d0301a"/></radialGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <rect y="170" width="320" height="50" fill="#4a2010"/>
        <path d="M110 190 L210 190 L198 168 L122 168Z" fill="#b07a2a"/>
        <path d="M160 70 C140 110 118 130 130 160 C140 176 180 176 190 160 C202 130 180 110 160 70Z" fill="url(#${g}f)"/>
        <g fill="none" stroke="#3a6a3a" stroke-width="7" stroke-linecap="round"><path d="M70 30 C90 60 60 80 90 110 C110 130 100 150 130 150"/><path d="M250 24 C230 56 262 78 232 108 C212 128 222 150 192 150"/></g>
        <g fill="#3a6a3a"><ellipse cx="70" cy="28" rx="9" ry="6"/><ellipse cx="250" cy="22" rx="9" ry="6"/></g>`,
      // Garuḍa flying across the sun with the pot of amṛta
      garuda: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a3a"/><stop offset="1" stop-color="#ffe2a0"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <circle cx="230" cy="70" r="46" fill="#fff4c0" opacity=".85"/>
        <g fill="#b0400e"><path d="M160 100 C120 70 70 60 20 80 C70 84 110 98 140 118Z"/><path d="M160 100 C200 70 250 60 300 80 C250 84 210 98 180 118Z"/></g>
        <g fill="#d8a020"><ellipse cx="160" cy="112" rx="18" ry="24"/><circle cx="160" cy="84" r="11"/></g>
        <path d="M166 84 L180 88 L166 92Z" fill="#7a3a0a"/>
        <g transform="translate(150 132)"><path d="M0 0 Q10 -8 20 0 L18 16 Q10 22 2 16Z" fill="#e8c050" stroke="#7a5a10" stroke-width="2"/></g>
        <path d="M0 190 Q80 170 160 186 Q240 200 320 180 L320 220 L0 220Z" fill="#7a5a3a"/>`,
      // the sun reflected on a river, a little basket floating
      sun: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb04a"/><stop offset=".55" stop-color="#ffe0a0"/><stop offset=".56" stop-color="#5a9ac0"/><stop offset="1" stop-color="#2a5a8a"/></linearGradient><radialGradient id="${g}s" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff8d0"/><stop offset=".6" stop-color="#ffd040"/><stop offset="1" stop-color="#ffa020" stop-opacity="0"/></radialGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <circle cx="160" cy="70" r="60" fill="url(#${g}s)"/><circle cx="160" cy="70" r="26" fill="#fff6c8"/>
        <g stroke="#fff3b0" stroke-width="3" opacity=".7"><path d="M120 140 L200 140"/><path d="M130 152 L190 152"/><path d="M142 164 L178 164"/></g>
        <g transform="translate(130 168)"><path d="M0 0 L60 0 L52 18 L8 18Z" fill="#a0702a"/><path d="M4 4 L56 4" stroke="#6a4a1a" stroke-width="2"/><ellipse cx="30" cy="0" rx="18" ry="6" fill="#f8e6c0"/><circle cx="30" cy="-4" r="5" fill="#ffd060"/></g>
        <g fill="#2a5a2a"><path d="M0 120 Q30 100 60 120Z"/><path d="M260 120 Q290 98 320 118Z"/></g>`,
      // a great hall with a dice board on the floor
      dice: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a1a3a"/><stop offset="1" stop-color="#c06a3a"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <g fill="#e8c070" opacity=".85"><rect x="30" y="20" width="14" height="150"/><rect x="276" y="20" width="14" height="150"/><rect x="110" y="20" width="12" height="150"/><rect x="198" y="20" width="12" height="150"/></g>
        <path d="M20 20 L300 20 L300 10 L20 10Z" fill="#e8c070"/>
        <rect y="170" width="320" height="50" fill="#3a1010"/>
        <g transform="translate(110 176)"><rect width="100" height="30" fill="#c08a3a"/><g fill="#5a2a0a"><rect x="10" y="6" width="8" height="8"/><rect x="30" y="6" width="8" height="8"/><rect x="62" y="16" width="8" height="8"/><rect x="82" y="16" width="8" height="8"/></g></g>
        <g fill="#f8f0e0"><rect x="140" y="150" width="12" height="12" rx="2" transform="rotate(20 146 156)"/><rect x="166" y="148" width="12" height="12" rx="2" transform="rotate(-15 172 154)"/></g>`,
      // a war chariot under a banner, with the conch
      chariot: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e88a3a"/><stop offset="1" stop-color="#fbd9a0"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <rect y="168" width="320" height="52" fill="#b08a5a"/>
        <g transform="translate(150 96)"><rect x="0" y="40" width="80" height="34" fill="#c0902a"/><path d="M0 40 L20 20 L60 20 L80 40Z" fill="#e0b040"/><circle cx="20" cy="80" r="16" fill="none" stroke="#5a3a10" stroke-width="5"/><circle cx="62" cy="80" r="16" fill="none" stroke="#5a3a10" stroke-width="5"/><path d="M40 20 L40 -40" stroke="#5a3a10" stroke-width="3"/><path d="M40 -40 L74 -30 L40 -20Z" fill="#d03a1a"/></g>
        <g fill="#f4ead8"><path d="M60 120 Q80 100 110 108 L140 130 L130 150 Q100 144 70 150Z"/><path d="M78 150 L74 176 M96 150 L94 176 M114 148 L114 176" stroke="#f4ead8" stroke-width="5"/></g>`,
    };
    if (SC[name]) return W(SC[name]);
    if (window.RMY_SCENE) return window.RMY_SCENE(name, uid);
    return W(`<rect width="320" height="220" fill="#d8902c"/>`);
  }

  // ── blocks → HTML ──
  function blocks(list, firstPara) {
    let first = firstPara;
    return list.map(b => {
      const t = b[0];
      if (t === 'p') { const h = `<p class="para${first ? ' first' : ''}">${fmt(b[1])}</p><p class="para-te">${fmt(b[2])}</p>`; first = false; return h; }
      if (t === 'sloka') return `<div class="sloka"><div class="sk-te">${b[1].map(esc).join('<br>')}</div><div class="sk-en">${b[2].map(esc).join('<br>')}</div>
        <div class="sk-m"><span class="en">“${esc(b[3])}”</span><span class="te">“${esc(b[4])}”</span></div></div>`;
      if (t === 'dyk') return `<div class="dyk"><div class="ic">${b[1]}</div><div><b>Did you know?</b><p><span class="en">${fmt(b[2])}</span><span class="te">${fmt(b[3])}</span></p></div></div>`;
      if (t === 'gitalink') return `<button class="dyk mbh-gl" style="width:100%;text-align:left;cursor:pointer;font:inherit;color:inherit" onclick="mbhOpenGita('${b[3]}')"><div class="ic">📖</div><div><b><span class="en">Read it in the Gītā section ›</span><span class="te">గీతా విభాగంలో చదవండి ›</span></b><p><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></p></div></button>`;
      if (t === 'vsnlink') return `<button class="dyk mbh-gl" style="width:100%;text-align:left;cursor:pointer;font:inherit;color:inherit" onclick="mbhOpenVSN()"><div class="ic">📿</div><div><b><span class="en">Recite it in the Viṣṇu Sahasranāmam section ›</span><span class="te">విష్ణు సహస్రనామ విభాగంలో పఠించండి ›</span></b><p><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></p></div></button>`;
      if (t === 'more') return `<details class="sank"><summary><span class="en">${esc(b[1])}<small>${esc(b[3])}</small></span><span class="te">${esc(b[2])}<small>${esc(b[4])}</small></span></summary><div class="sank-body">${blocks(b[5], false)}</div></details>`;
      return '';
    }).join('');
  }
  const words = c => JSON.stringify(c.pages).replace(/<[^>]+>/g, '').split(/[^A-Za-zĀ-ž]+/).length;
  const minutes = c => Math.max(3, Math.round(words(c) / 180));
  const isNew = c => !S.opened[c.id] && c.date && (Date.now() - new Date(c.date + 'T00:00:00').getTime()) < NEW_DAYS * 864e5;
  const adh = s => esc(s);   // the upa-parva (section of the parva) this chapter retells

  // ── poster cover ──
  window.renderMahabharataCover = function () {
    const el = document.getElementById('view-mahabharata-cover');
    el.innerHTML = `<div class="rmy-poster mbh-poster">
      <div class="rmy-poster-bg mbh-poster-bg"></div>
      <div class="rmy-poster-overlay"></div>
      <div class="rmy-poster-content">
        <div class="rmy-poster-bow mbh-conch">
          <svg viewBox="0 0 120 120" fill="none" stroke="rgba(255,220,120,0.85)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 64 C34 34 78 24 100 42 C114 54 110 78 92 86 C68 96 38 84 14 64 Z"/>
            <path d="M100 42 C112 34 118 50 106 56"/><path d="M86 33 C95 48 95 72 86 88"/><path d="M70 30 C78 48 78 74 70 91"/>
            <path d="M14 64 L4 62 M14 64 L5 70"/><path d="M40 72 C56 80 76 80 90 72"/>
          </svg>
        </div>
        <div class="rmy-poster-title">
          <div class="rmy-poster-sri">Śrī</div>
          <div class="rmy-poster-h1 mbh-h1">Mahābhāratam</div>
          <div class="rmy-poster-te">శ్రీ మహాభారతం</div>
        </div>
        <div class="rmy-poster-sub">Vyāsa's story of the Kurus and the Pāṇḍavas,<br>retold for the whole family</div>
        <div class="rmy-poster-byline">
          <div class="rmy-poster-byname">Hari Pokkuluri</div>
          <div class="rmy-poster-byte">హరి పొక్కులూరి</div>
        </div>
        <button class="rmy-poster-enter" onclick="enterMahabharata()">Enter &nbsp; ›</button>
      </div>
    </div>`;
  };

  window.openMahabharata = () => { state.kids = ''; showView('mahabharata-cover'); };
  window.enterMahabharata = () => { state.kids = ''; showView('mahabharata'); };
  window.openMbhParva = k => { state.kids = 'k:' + k; showView('mahabharata'); };
  window.openMbhChapter = id => { state.kids = id; showView('mbhread'); };
  // open a chapter of the app's own Bhagavad Gītā practice section
  window.mbhOpenVSN = () => switchSection('vsn');
  window.mbhOpenGita = ch => { switchSection('gita'); state.chapter = String(ch); state.expandedVerse = null; saveState(); showView('practice'); };

  const cover = () => `<div class="cover mbh-cover">
      <svg class="bow" viewBox="0 0 120 120" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 64 C34 34 78 24 100 42 C114 54 110 78 92 86 C68 96 38 84 14 64 Z"/><path d="M86 33 C95 48 95 72 86 88"/><path d="M70 30 C78 48 78 74 70 91"/></svg>
      <h1>Śrī Mahābhāratam</h1><div class="h1te">శ్రీ మహాభారతం</div>
      <p>Vyāsa's story of the Kurus and the Pāṇḍavas, retold for the whole family.</p>
      <div class="byline">Retold by <b>Hari Pokkuluri</b><span class="te">కథనం: హరి పొక్కులూరి</span></div>
    </div>`;
  function continueCard() {
    const cont = chap(S.last) || chapters()[0];
    if (!cont) return '';
    const pct = Math.round(((S.pos[cont.id] || 0) / (cont.pages.length + 1)) * 100);
    return `<div class="continue" onclick="openMbhChapter('${cont.id}')">
      <div class="thumb">${scene(cont.scene, 't')}</div>
      <div class="ci"><small>${S.pos[cont.id] ? 'Continue reading' : 'Start reading'}</small><b>${esc(cont.title)}</b>
      <span>${PMETA(cont.parva)[1]} · Chapter ${cont.n}</span><div class="bar"><i style="width:${pct}%"></i></div></div>
      <span class="go">▶</span></div>`;
  }
  window.renderMahabharata = function () {
    const el = document.getElementById('view-mahabharata');
    const sel = (state.kids || '').startsWith('k:') ? state.kids.slice(2) : '';
    if (sel) { renderParva(el, sel); return; }
    const tiles = PARVAS.map(([k, n, nt, sub, subTe, icon, grad], i) => {
      const list = chapters().filter(c => c.parva === k), total = plan(k).length;
      const read = list.filter(c => S.done[c.id]).length, fresh = list.some(isNew);
      const meta = list.length ? `${list.length}${total ? ' of ' + total : ''} chapters${read ? ' · ' + read + ' read' : ''}` : 'Coming soon';
      return `<button class="ktile${list.length ? '' : ' soon'}" onclick="openMbhParva('${k}')">
        <span class="kbg" style="background:${grad}"></span>
        ${fresh ? '<span class="knew">NEW</span>' : ''}
        <span class="kno">${k === 'harivamsha' ? '✦' : i + 1}</span>
        <span class="kic">${icon}</span>
        <span class="kname">${n}</span><span class="kte">${nt}</span>
        <span class="kmeta">${meta}</span>
      </button>`;
    }).join('');
    el.innerHTML = `<div class="rmy">${cover()}${continueCard()}
      <div class="sec-t">The Eighteen Parvas · పద్దెనిమిది పర్వాలు</div>
      <div class="kgrid">${tiles}</div></div>`;
  };
  function renderParva(el, k) {
    const [key, n, nt, sub, subTe, icon, grad] = PMETA(k);
    const list = chapters().filter(c => c.parva === key), pl = plan(key);
    const read = list.filter(c => S.done[c.id]).length;
    const rows = pl.length ? pl.map((p, i) => {
      const c = list.find(x => x.n === i + 1);
      if (!c) return `<div class="ch soon"><span class="n">${i + 1}</span><span class="t"><b>${esc(p[0])}</b><span>${esc(p[1])} · coming soon</span></span></div>`;
      const d = S.done[c.id];
      return `<button class="ch${d ? ' done' : ''}" onclick="openMbhChapter('${c.id}')"><span class="n">${d ? '✓' : c.n}</span>
        <span class="t"><b>${esc(c.title)}</b><span class="tt">${esc(c.titleTe)}</span><span>${adh(c.adh)} · ${c.pages.length + 2} pages · ~${minutes(c)} min</span></span>
        ${isNew(c) ? '<span class="new">NEW</span>' : ''}</button>`;
    }).join('') : `<div class="kempty">${icon}<p>The chapters of ${n} are being written.<br><span class="te">ఈ పర్వం అధ్యాయాలు త్వరలో వస్తాయి.</span></p></div>`;
    el.innerHTML = `<div class="rmy">
      <div class="khead" style="background:${grad}">
        <button class="kback" onclick="enterMahabharata()" aria-label="All parvas">‹</button>
        <div class="kht"><span class="kic">${icon}</span><h1>${n}</h1><div class="h1te">${nt}</div>
        <p>${sub} · <span class="te">${subTe}</span></p>
        ${pl.length ? `<div class="kprog"><div class="bar"><i style="width:${Math.round(read / pl.length * 100)}%"></i></div><span>${read} of ${pl.length} chapters read</span></div>` : ''}</div>
      </div>
      <div class="chlist" style="padding-top:16px">${rows}</div>
    </div>`;
  }

  // ── reader ──
  let page = 0;
  window.renderMbhRead = function () {
    const el = document.getElementById('view-mbhread');
    const c = chap(state.kids);
    if (!c) { showView('mahabharata'); return; }
    S.last = c.id; S.opened[c.id] = true; save();
    const total = c.pages.length + 2;
    page = Math.min(S.pos[c.id] || 0, total - 1);
    const who = (c.who || []).filter(k => WHO()[k]);
    const opener = `<div class="scene">${scene(c.scene, 'o')}</div>
      <div class="chno">${PMETA(c.parva)[1]} · Chapter ${c.n}</div>
      <div class="optitle">${esc(c.title)}</div><div class="optitle-te">${esc(c.titleTe)}</div>
      <div class="meta"><span>📖 ${adh(c.adh)}</span><span>⏱ ~${minutes(c)} min</span><span>📄 ${total} pages</span></div>
      ${c.n === 1 ? `<div class="opby">Retold by <b>Hari Pokkuluri</b> · <span class="te">కథనం: హరి పొక్కులూరి</span></div>` : ''}
      ${who.length ? `<div class="who-t">In this chapter</div><div class="whos">${who.map(k => `<button class="who" onclick="mbhWho('${k}')"><span class="av">${WHO()[k].av}</span><span class="wn">${esc(WHO()[k].en)}</span></button>`).join('')}</div>` : ''}
      <div class="hint">Swipe to begin →</div>`;
    let nk = c.parva, nn = c.n + 1, nextPlan = plan(c.parva)[c.n];
    if (!nextPlan) { const ki = PARVAS.findIndex(x => x[0] === c.parva) + 1; if (PARVAS[ki] && plan(PARVAS[ki][0]).length) { nk = PARVAS[ki][0]; nn = 1; nextPlan = plan(nk)[0]; } }
    const nextC = chapters().find(x => x.parva === nk && x.n === nn);
    const end = `<div class="end-h"><div class="lotus">🪷</div><h2>Chapter complete</h2><p class="te">అధ్యాయం పూర్తయింది</p></div>
      ${c.remember ? `<div class="box"><h3>Remember</h3><ul>${c.remember.map(r => `<li><span><span class="en">${fmt(r[0])}</span><span class="te">${fmt(r[1])}</span></span></li>`).join('')}</ul></div>` : ''}
      ${c.think ? `<div class="box think"><h3>Think about it</h3><p><span class="en">${fmt(c.think[0])}</span><span class="te">${fmt(c.think[1])}</span></p></div>` : ''}
      ${nextPlan ? `<div class="box next"${nextC ? ` onclick="openMbhChapter('${nextC.id}')"` : ''}><div><small>Up next · ${nk !== c.parva ? PMETA(nk)[1] + ' · ' : ''}Chapter ${nn}${nextC ? '' : ' · coming soon'}</small><b>${esc(nextPlan[0])}</b><span>${esc(nextPlan[1])}</span></div>${nextC ? '<span class="go">›</span>' : ''}</div>` : ''}
      <button class="markbtn${S.done[c.id] ? ' did' : ''}" onclick="mbhDone('${c.id}', this)">${S.done[c.id] ? '✓ Read' : 'Mark chapter as read'}</button>`;
    const pages = [opener, ...c.pages.map((b, i) => blocks(b, i === 0)), end];
    el.innerHTML = `<div class="rmy rmy-read mode-${MODE()}" id="mbh-read" style="--fs:${FS[S.fs] || FS[1]}" data-noswipe>
      <div class="rbar"><button class="x" onclick="openMbhParva('${c.parva}')" aria-label="Chapters">☰</button>
        <div class="where"><b>Ch ${c.n}</b></div>
        <div class="lang">${[['en', 'English'], ['te', 'తెలుగు'], ['both', 'Both']].map(([m, t]) => `<button data-m="${m}" class="${MODE() === m ? 'on' : ''}${m === 'te' ? ' te' : ''}" onclick="mbhMode('${m}')">${t}</button>`).join('')}</div>
        <button class="aa" onclick="mbhFont()" aria-label="Text size">Aa</button></div>
      <div class="prog"><i id="mbh-prog"></i></div>
      <div class="pages" id="mbh-pages"><div class="track" id="mbh-track">${pages.map(h => `<div class="page">${h}</div>`).join('')}</div></div>
      <div class="rnav"><button class="pb" id="mbh-prev" onclick="mbhGo(-1)" aria-label="Previous page">‹</button>
        <div class="dots">${pages.map(() => '<i></i>').join('')}</div>
        <button class="pb" id="mbh-next" onclick="mbhGo(1)" aria-label="Next page">›</button></div>
    </div>`;
    swipe(document.getElementById('mbh-pages'));
    mbhGo(0, true);
  };
  window.mbhGo = function (d, quiet) {
    const c = chap(state.kids); if (!c) return;
    const n = c.pages.length + 2;
    page = Math.max(0, Math.min(n - 1, page + d));
    const tr = document.getElementById('mbh-track'); if (!tr) return;
    tr.style.transform = `translateX(${-page * 100}%)`;
    [...tr.children].forEach((pg, i) => pg.classList.toggle('cur', i === page));
    fitHeight();
    document.querySelectorAll('#mbh-read .dots i').forEach((x, i) => x.classList.toggle('on', i === page));
    document.getElementById('mbh-prev').disabled = page === 0;
    document.getElementById('mbh-next').disabled = page === n - 1;
    document.getElementById('mbh-prog').style.width = Math.round(page / (n - 1) * 100) + '%';
    S.pos[c.id] = page; save();
    if (!quiet) { const m = document.getElementById('main'); if (m) m.scrollTo({ top: 0, behavior: 'smooth' }); }
  };
  let ro = null;
  function fitHeight() {
    const cur = document.querySelector('#mbh-track .page.cur'), box = document.getElementById('mbh-pages');
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
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) mbhGo(dx < 0 ? 1 : -1);
      x0 = null;
    }, { passive: true });
  }
  window.mbhMode = m => {
    if (typeof settings !== 'undefined') { settings.language = m; if (typeof saveSettings === 'function') saveSettings(); }
    const r = document.getElementById('mbh-read');
    r.classList.remove('mode-en', 'mode-te', 'mode-both'); r.classList.add('mode-' + m);
    r.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.m === m));
  };
  window.mbhFont = () => { S.fs = (S.fs + 1) % FS.length; save(); document.getElementById('mbh-read').style.setProperty('--fs', FS[S.fs]); };
  window.mbhDone = (id, btn) => { S.done[id] = !S.done[id]; save(); btn.classList.toggle('did', !!S.done[id]); btn.textContent = S.done[id] ? '✓ Read' : 'Mark chapter as read'; };

  // ── who's-who sheet ──
  window.mbhWho = function (k) {
    const w = WHO()[k]; if (!w) return;
    let bg = document.getElementById('mbh-sheetbg');
    if (!bg) {
      document.body.insertAdjacentHTML('beforeend', `<div class="rmy-sheetbg" id="mbh-sheetbg" onclick="mbhWhoClose()"></div><div class="rmy rmy-sheet" id="mbh-sheet" data-noswipe><div class="grab"></div><div id="mbh-sheetc"></div></div>`);
      bg = document.getElementById('mbh-sheetbg');
    }
    const sh = document.getElementById('mbh-sheet');
    sh.className = `rmy rmy-sheet mode-${MODE()}`;
    document.getElementById('mbh-sheetc').innerHTML = `<div class="row"><span class="av">${w.av}</span><h4>${esc(w.en)}<span class="te">${esc(w.te)}</span></h4></div>
      <p><span class="en">${esc(w.d)}</span><span class="te">${esc(w.dt)}</span></p>
      ${window.sageHasStory && sageHasStory(k) ? `<button class="sg-life" onclick="mbhWhoClose();openSage('${k}')"><span class="en">Read ${esc(w.en)}'s full life ›</span><span class="te">పూర్తి జీవిత కథ చదవండి ›</span></button>` : ''}`;
    requestAnimationFrame(() => { sh.classList.add('on'); bg.classList.add('on'); });
  };
  window.mbhWhoClose = () => { document.getElementById('mbh-sheet').classList.remove('on'); document.getElementById('mbh-sheetbg').classList.remove('on'); };

  // ── a few styles of our own (the rest come from ramayana.js) ──
  const css = `
.mbh-poster .mbh-conch{display:none}
.mbh-poster-bg{background-image:url('icons/cover-mahabharata.jpg')!important;background-position:32% top!important;filter:none!important}
.mbh-conch{width:96px!important}
.rmy-poster-h1.mbh-h1{font-size:3.1rem}
.rmy .mbh-cover{background:radial-gradient(120% 90% at 80% 0%,#e8a04a 0%,#a8461a 40%,#3a1206 100%)}
.rmy .mbh-cover .bow{width:150px;top:10px;right:-14px}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  if (typeof state !== 'undefined' && (state.view === 'mahabharata-cover' || state.view === 'mahabharata' || state.view === 'mbhread')) renderCurrentView();
})();
