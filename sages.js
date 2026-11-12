// ─────────────── GREAT SAGES · మహర్షులు ───────────────
// Index of sages (view-sages) → one sage's chapters (view-sages, state.kids = 's:<key>')
// → chapter reader (view-sageread, state.kids = chapter id).
// Each sage's text lives in sages/<key>.js and adds to window.SAGE_CHAPTERS,
// window.SAGE_PLAN[<key>] and window.RMY_WHO (shared with the Rāmāyaṇa name sheet).
// Chapter blocks use the same format as the Rāmāyaṇa (see the top of ramayana.js).
// Styles come from ramayana.js (.rmy …), which must load first.
// Reading progress stays on this phone (localStorage 'vedic_sages').
(function () {
  // [key, name, Telugu, known for, Telugu known for, icon, gradient]
  const SAGES = [
    ['vishvamitra', 'Viśvāmitra', 'విశ్వామిత్రుడు', 'The king who became a Brahmarṣi', 'రాజు నుండి బ్రహ్మర్షి', '🔥', 'linear-gradient(160deg,#4a1206,#d0601c)'],
    ['vasishtha', 'Vasiṣṭha', 'వసిష్ఠుడు', 'Guru of the Ikṣvākus', 'ఇక్ష్వాకుల కులగురువు', '🪷', 'linear-gradient(160deg,#0a2a4a,#2a7ab0)'],
    ['shukracharya', 'Śukrācārya', 'శుక్రాచార్యుడు', 'Guru of the Asuras', 'రాక్షస గురువు', '✨', 'linear-gradient(160deg,#1a0a3a,#7a4ac0)'],
    ['agastya', 'Agastya', 'అగస్త్యుడు', 'Who drank the ocean', 'సముద్రాన్ని తాగిన ముని', '🌊', 'linear-gradient(160deg,#06303a,#1a8a9a)'],
    ['bhrigu', 'Bhṛgu', 'భృగువు', 'Who tested the Trimūrtis', 'త్రిమూర్తులను పరీక్షించిన ముని', '👣', 'linear-gradient(160deg,#3a1a06,#b07a2a)'],
    ['brihaspati', 'Bṛhaspati', 'బృహస్పతి', 'Guru of the Devas', 'దేవ గురువు', '📜', 'linear-gradient(160deg,#4a3a06,#c8a02a)'],
    ['narada', 'Nārada', 'నారదుడు', 'The wandering devarṣi', 'త్రిలోక సంచారి దేవర్షి', '🪕', 'linear-gradient(160deg,#2a0a3a,#a04a9a)'],
    ['vyasa', 'Vyāsa', 'వ్యాసుడు', 'Who divided the Vedas', 'వేదాలను విభజించిన ముని', '📚', 'linear-gradient(160deg,#0a3a1a,#3a9a5a)'],
    ['valmiki', 'Vālmīki', 'వాల్మీకి', 'The first poet', 'ఆదికవి', '🪶', 'linear-gradient(160deg,#3a2a0a,#a08a3a)'],
    ['durvasa', 'Durvāsa', 'దుర్వాసుడు', 'The sage of fierce curses', 'కోపిష్ఠి ముని', '⚡', 'linear-gradient(160deg,#3a0a0a,#c03a2a)'],
    ['atri', 'Atri & Anasūyā', 'అత్రి, అనసూయ', 'Parents of Dattātreya', 'దత్తాత్రేయుని తల్లిదండ్రులు', '🌙', 'linear-gradient(160deg,#0a1a3a,#4a6ac0)'],
    ['gautama', 'Gautama', 'గౌతముడు', 'Who brought the Godāvarī', 'గోదావరిని తెచ్చిన ముని', '🏞️', 'linear-gradient(160deg,#0a3a2a,#2a9a7a)'],
    ['bharadvaja', 'Bharadvāja', 'భరద్వాజుడు', 'Teacher at Prayāga', 'ప్రయాగలో గురువు', '🌳', 'linear-gradient(160deg,#1a3a0a,#6a9a2a)'],
    ['markandeya', 'Mārkaṇḍeya', 'మార్కండేయుడు', 'Who defeated death', 'యముడిని గెలిచిన బాలుడు', '🔱', 'linear-gradient(160deg,#0a0a3a,#3a3ac0)'],
    ['dadhichi', 'Dadhīci', 'దధీచి', 'Who gave his bones', 'ఎముకలను దానమిచ్చిన ముని', '⚔️', 'linear-gradient(160deg,#2a2a2a,#8a8a8a)'],
    ['kapila', 'Kapila', 'కపిలుడు', 'Founder of Sāṅkhya', 'సాంఖ్య దర్శన కర్త', '🕉️', 'linear-gradient(160deg,#3a1a0a,#c06a2a)'],
    ['jamadagni', 'Jamadagni & Paraśurāma', 'జమదగ్ని, పరశురాముడు', 'Father and son of the axe', 'పరశువు పట్టిన తండ్రీ కొడుకులు', '🪓', 'linear-gradient(160deg,#3a0a1a,#b02a5a)'],
    ['yajnavalkya', 'Yājñavalkya', 'యాజ్ఞవల్క్యుడు', 'Seer of the Śukla Yajurveda', 'శుక్ల యజుర్వేద ద్రష్ట', '☀️', 'linear-gradient(160deg,#4a2a06,#e0a020)'],
    ['angiras', 'Aṅgirasa', 'ఆంగీరసుడు', 'With Aamyahavya and Orukshaya', 'ఆమ్యహవ్య, ఔరుక్షయలతో', '🔥', 'linear-gradient(160deg,#3a1a06,#e0802a)'],
    ['kashyapa', 'Kaśyapa', 'కశ్యపుడు', 'Father of all creatures', 'సకల జీవుల తండ్రి', '🐢', 'linear-gradient(160deg,#0a2a1a,#2a8a5a)'],
    ['ashtavakra', 'Aṣṭāvakra', 'అష్టావక్రుడు', 'The boy who won the debate', 'వాదంలో గెలిచిన బాలుడు', '🪷', 'linear-gradient(160deg,#2a1a3a,#8a5ac0)'],
    ['rishyashringa', 'Ṛṣyaśṛṅga', 'ఋష్యశృంగుడు', 'Who brought the rain', 'వర్షం తెచ్చిన ముని', '🦌', 'linear-gradient(160deg,#0a2a3a,#3a8ab0)'],
    ['cyavana', 'Cyavana', 'చ్యవనుడు', 'Made young by the Aśvins', 'అశ్వినులు యువకుణ్ణి చేసిన ముని', '🐎', 'linear-gradient(160deg,#2a1a0a,#b0702a)'],
    ['uttanka', 'Uttaṅka', 'ఉత్తంకుడు', 'Who won the earrings from the serpents', 'నాగుల నుండి కుండలాలు గెలిచిన శిష్యుడు', '🐍', 'linear-gradient(160deg,#1a2a0a,#7a9a2a)'],
    ['shuka', 'Śuka', 'శుకుడు', 'Who told the Bhāgavata', 'భాగవతం చెప్పిన ముని', '🦜', 'linear-gradient(160deg,#0a3a2a,#3ab07a)'],
    ['kanva', 'Kaṇva', 'కణ్వుడు', 'Who raised Śakuntalā', 'శకుంతలను పెంచిన ముని', '🐦', 'linear-gradient(160deg,#0a3a2a,#5aa06a)'],
    ['mandavya', 'Māṇḍavya', 'మాండవ్యుడు', 'The silent sage on the stake', 'శూలం మీద మౌనముని', '🪵', 'linear-gradient(160deg,#2a1a0a,#8a6a3a)'],
    ['pulastya', 'Pulastya', 'పులస్త్యుడు', 'Grandfather of Kubera and Rāvaṇa', 'కుబేర రావణుల తాత', '👂', 'linear-gradient(160deg,#1a0a2a,#6a3a8a)'],
    ['lomasha', 'Lomaśa', 'లోమశుడు', 'Guide of the Pāṇḍavas’ pilgrimage', 'పాండవుల తీర్థయాత్రకు మార్గదర్శి', '🧭', 'linear-gradient(160deg,#2a1a06,#a0702a)'],
    ['dhaumya', 'Dhaumya', 'ధౌమ్యుడు', 'Priest of the Pāṇḍavas', 'పాండవుల పురోహితుడు', '🪔', 'linear-gradient(160deg,#3a1406,#c0602a)'],
    ['upamanyu', 'Upamanyu', 'ఉపమన్యుడు', 'The boy who asked for milk', 'పాల కోసం తపస్సు చేసిన బాలుడు', '🥛', 'linear-gradient(160deg,#0a1a3a,#7a9ac0)'],
    ['sandipani', 'Sāndīpani', 'సాందీపని', 'Teacher of Kṛṣṇa and Balarāma', 'కృష్ణ బలరాముల గురువు', '📚', 'linear-gradient(160deg,#1a2a4a,#5a8ac0)'],
    ['kumaras', 'The Four Kumāras', 'సనకాది మహర్షులు', 'The sages who stay children forever', 'ఎప్పటికీ బాలురుగా ఉండే మహర్షులు', '👶', 'linear-gradient(160deg,#0a2a3a,#6ab0c8)'],
    ['aruni', 'Uddālaka Āruṇi', 'ఉద్దాలక ఆరుణి', 'Who taught “You are That”', '“తత్త్వమసి” బోధించిన గురువు', '🧂', 'linear-gradient(160deg,#2a1a0a,#c0a060)'],
    ['jaimini', 'Jaimini', 'జైమిని', 'Keeper of the Sāmaveda, founder of Mīmāṃsā', 'సామవేద సంరక్షకుడు, మీమాంసా సూత్రకర్త', '🎶', 'linear-gradient(160deg,#1a1a3a,#6a6ab0)'],
    ['garga', 'Garga', 'గర్గాచార్యుడు', 'Who named Kṛṣṇa and Balarāma', 'కృష్ణ బలరాములకు పేరు పెట్టిన ముని', '⭐', 'linear-gradient(160deg,#0a1a2a,#4a7aa0)'],
    ['shandilya', 'Śāṇḍilya', 'శాండిల్యుడు', 'Who said “All this is Brahman”', '“సర్వం ఖల్విదం బ్రహ్మ” అన్న మహర్షి', '🌾', 'linear-gradient(160deg,#2a2a0a,#a09a3a)'],
    ['valakhilyas', 'The Vālakhilyas', 'వాలఖిల్యులు', 'Thumb-sized sages before the Sun', 'సూర్యుని ముందు నడిచే బొటనవేలంత మునులు', '🍃', 'linear-gradient(160deg,#2a1a06,#e0b040)'],
    ['parashara', 'Parāśara', 'పరాశరుడు', 'Father of Vyāsa, teller of the Viṣṇu Purāṇa', 'వ్యాసుని తండ్రి, విష్ణు పురాణ కర్త', '🌫️', 'linear-gradient(160deg,#0a2a2a,#4a9a9a)'],
    ['mudgala', 'Mudgala', 'ముద్గలుడు', 'The gleaner who turned down heaven', 'స్వర్గాన్ని వద్దన్న పరిగె ముని', '🌾', 'linear-gradient(160deg,#3a2a0a,#c8a040)'],
  ];
  const SMETA = k => SAGES.find(x => x[0] === k) || SAGES[0];
  window.SAGE_META = SMETA;   // used by bookmarks.js
  const NEW_DAYS = 21;
  const FS = ['1.08rem', '1.22rem', '1.38rem', '1.6rem'];

  const chapters = () => (window.SAGE_CHAPTERS || []).slice().sort((a, b) => a.order - b.order);
  const chap = id => chapters().find(c => c.id === id);
  const plan = k => (window.SAGE_PLAN || {})[k] || [];
  const WHO = () => window.RMY_WHO || {};

  let S = { done: {}, pos: {}, opened: {}, last: '', fs: 1 };
  try { Object.assign(S, JSON.parse(localStorage.getItem('vedic_sages') || '{}')); } catch (e) {}
  const MODE = () => { const l = (typeof settings !== 'undefined' && settings.language) || 'both'; return l === 'hi' ? 'te' : ['en', 'te', 'both'].includes(l) ? l : 'both'; };   // Hindi: the Telugu column holds the Hindi (or English) text — see hi/hi.js
  const save = () => { try { localStorage.setItem('vedic_sages', JSON.stringify(S)); } catch (e) {} };

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const fmt = s => String(s)
    .replace(/\{(\w+)\|([^}]+)\}/g, (m, k, t) => `<span class="nm" onclick="rmyWho('${k}')">${t}</span>`)
    .replace(/\*([^*]+)\*/g, '<i>$1</i>');

  // A sage's own picture: dawn sky in his colours, hills, an āśrama fire and a seated sage
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
      if (t === 'src') return `<div class="dyk sg-src"><div class="ic">📜</div><div><b>Where this is told</b><p><span class="en">${fmt(b[1])}</span><span class="te">${fmt(b[2])}</span></p></div></div>`;
      if (t === 'link') return `<button class="box next sg-link" onclick="openRmyChapter('${b[3]}')"><div><small>Śrī Rāmāyaṇa</small><b><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></b></div><span class="go">›</span></button>`;
      if (t === 'sglink') return `<button class="box next sg-link" onclick="openSageChapter('${b[3]}')"><div><small>Great Sages</small><b><span class="en">${esc(b[1])}</span><span class="te">${esc(b[2])}</span></b></div><span class="go">›</span></button>`;
      if (t === 'more') return `<details class="sank"><summary><span class="en">${esc(b[1])}<small>${esc(b[3])}</small></span><span class="te">${esc(b[2])}<small>${esc(b[4])}</small></span></summary><div class="sank-body">${blocks(b[5], false)}</div></details>`;
      return '';
    }).join('');
  }
  const words = c => JSON.stringify(c.pages).replace(/<[^>]+>/g, '').split(/[^A-Za-zĀ-ž]+/).length;
  const minutes = c => Math.max(3, Math.round(words(c) / 180));
  const isNew = c => !S.opened[c.id] && c.date && (Date.now() - new Date(c.date + 'T00:00:00').getTime()) < NEW_DAYS * 864e5;

  window.openSages = () => { state.kids = ''; showView('sages'); };
  window.openSage = k => { state.kids = 's:' + k; showView('sages'); };
  window.openSageChapter = id => { state.kids = id; showView('sageread'); };
  // Is there a life story for this name-sheet key? (used by the Rāmāyaṇa name sheet)
  window.sageHasStory = k => chapters().some(c => c.sage === k);

  const cover = () => `<div class="cover" style="background:radial-gradient(120% 90% at 80% 0%,#d0601c 0%,#7a2a0a 45%,#2a0a02 100%)">
      <h1>Great Sages</h1><div class="h1te">మహర్షులు</div>
      <p>The full lives of the great ṛṣis — from the Vedas, the Rāmāyaṇa, the Mahābhārata and the Purāṇas.</p>
      <div class="byline">Retold by <b>Hari Pokkuluri</b><span class="te">కథనం: హరి పొక్కులూరి</span></div>
    </div>`;
  function continueCard() {
    const cont = chap(S.last);
    if (!cont) return '';
    const pct = Math.round(((S.pos[cont.id] || 0) / (cont.pages.length + 1)) * 100);
    return `<div class="continue" onclick="openSageChapter('${cont.id}')">
      <div class="thumb">${scene(cont.sage, 't')}</div>
      <div class="ci"><small>Continue reading</small><b>${esc(cont.title)}</b>
      <span>${SMETA(cont.sage)[1]} · Chapter ${cont.n}</span><div class="bar"><i style="width:${pct}%"></i></div></div>
      <span class="go">▶</span></div>`;
  }

  window.renderSages = function () {
    const el = document.getElementById('view-sages');
    const sel = (state.kids || '').startsWith('s:') ? state.kids.slice(2) : '';
    if (sel) { renderSage(el, sel); return; }
    const tiles = SAGES.map(([k, n, nt, sub, subTe, icon, grad]) => {
      const list = chapters().filter(c => c.sage === k), total = plan(k).length;
      const read = list.filter(c => S.done[c.id]).length, fresh = list.some(isNew);
      const meta = list.length ? `${list.length}${total ? ' of ' + total : ''} chapters${read ? ' · ' + read + ' read' : ''}` : 'Coming soon';
      return `<button class="ktile${list.length ? '' : ' soon'}" onclick="openSage('${k}')">
        <span class="kbg" style="background:${grad}"></span>
        ${fresh ? '<span class="knew">NEW</span>' : ''}
        <span class="kic">${icon}</span>
        <span class="kname">${n}</span><span class="kte">${nt}</span>
        <span class="kmeta">${esc(sub)}</span>
        <span class="kmeta">${meta}</span>
      </button>`;
    }).join('');
    el.innerHTML = `<div class="rmy">${cover()}${continueCard()}
      <div class="sec-t">The Ṛṣis · మహర్షులు</div>
      <div class="kgrid">${tiles}</div></div>`;
  };

  function renderSage(el, k) {
    const [key, n, nt, sub, subTe, icon, grad] = SMETA(k);
    const list = chapters().filter(c => c.sage === key), pl = plan(key);
    const read = list.filter(c => S.done[c.id]).length;
    const rows = pl.length ? pl.map((p, i) => {
      const c = list.find(x => x.n === i + 1);
      if (!c) return `<div class="ch soon"><span class="n">${i + 1}</span><span class="t"><b>${esc(p[0])}</b><span>${esc(p[1])} · coming soon</span></span></div>`;
      const d = S.done[c.id];
      return `<button class="ch${d ? ' done' : ''}" onclick="openSageChapter('${c.id}')"><span class="n">${d ? '✓' : c.n}</span>
        <span class="t"><b>${esc(c.title)}</b><span class="tt">${esc(c.titleTe)}</span><span>${esc(c.src)} · ${c.pages.length + 2} pages · ~${minutes(c)} min</span></span>
        ${isNew(c) ? '<span class="new">NEW</span>' : ''}</button>`;
    }).join('') : `<div class="kempty">${icon}<p>${n}'s life story is being written.<br><span class="te">ఈ మహర్షి కథ త్వరలో వస్తుంది.</span></p></div>`;
    el.innerHTML = `<div class="rmy">
      <div class="khead" style="background:${grad}">
        <button class="kback" onclick="openSages()" aria-label="All sages">‹</button>
        <div class="kht"><span class="kic">${icon}</span><h1>${n}</h1><div class="h1te">${nt}</div>
        <p>${esc(sub)} · <span class="te">${esc(subTe)}</span></p>
        ${pl.length ? `<div class="kprog"><div class="bar"><i style="width:${Math.round(read / pl.length * 100)}%"></i></div><span>${read} of ${pl.length} chapters read</span></div>` : ''}</div>
      </div>
      <div class="chlist" style="padding-top:16px">${rows}</div>
    </div>`;
  }

  // ── reader ──
  let page = 0;
  window.renderSageRead = function () {
    const el = document.getElementById('view-sageread');
    const c = chap(state.kids);
    if (!c) { showView('sages'); return; }
    S.last = c.id; S.opened[c.id] = true; save();
    const total = c.pages.length + 2;
    page = Math.min(S.pos[c.id] || 0, total - 1);
    const who = (c.who || []).filter(k => WHO()[k]);
    const opener = `<div class="scene">${scene(c.sage, 'o')}</div>
      <div class="chno">${SMETA(c.sage)[1]} · Chapter ${c.n}</div>
      <div class="optitle">${esc(c.title)}</div><div class="optitle-te">${esc(c.titleTe)}</div>
      <div class="meta"><span>📜 ${esc(c.src)}</span><span>⏱ ~${minutes(c)} min</span><span>📄 ${total} pages</span></div>
      ${c.n === 1 ? `<div class="opby">Retold by <b>Hari Pokkuluri</b> · <span class="te">కథనం: హరి పొక్కులూరి</span></div>` : ''}
      ${who.length ? `<div class="who-t">In this chapter</div><div class="whos">${who.map(k => `<button class="who" onclick="rmyWho('${k}')"><span class="av">${WHO()[k].av}</span><span class="wn">${esc(WHO()[k].en)}</span></button>`).join('')}</div>` : ''}
      <div class="hint">Swipe to begin →</div>`;
    const nextPlan = plan(c.sage)[c.n];
    const nextC = chapters().find(x => x.sage === c.sage && x.n === c.n + 1);
    const end = `<div class="end-h"><div class="lotus">🪷</div><h2>Chapter complete</h2><p class="te">అధ్యాయం పూర్తయింది</p></div>
      ${c.remember ? `<div class="box"><h3>Remember</h3><ul>${c.remember.map(r => `<li><span><span class="en">${fmt(r[0])}</span><span class="te">${fmt(r[1])}</span></span></li>`).join('')}</ul></div>` : ''}
      ${c.think ? `<div class="box think"><h3>Think about it</h3><p><span class="en">${fmt(c.think[0])}</span><span class="te">${fmt(c.think[1])}</span></p></div>` : ''}
      ${nextPlan ? `<div class="box next"${nextC ? ` onclick="openSageChapter('${nextC.id}')"` : ''}><div><small>Up next · Chapter ${c.n + 1}${nextC ? '' : ' · coming soon'}</small><b>${esc(nextPlan[0])}</b><span>${esc(nextPlan[1])}</span></div>${nextC ? '<span class="go">›</span>' : ''}</div>` : ''}
      <button class="markbtn${S.done[c.id] ? ' did' : ''}" onclick="sgDone('${c.id}', this)">${S.done[c.id] ? '✓ Read' : 'Mark chapter as read'}</button>`;
    const pages = [opener, ...c.pages.map((b, i) => blocks(b, i === 0)), end];
    el.innerHTML = `<div class="rmy rmy-read mode-${MODE()}" id="sg-read" style="--fs:${FS[S.fs] || FS[1]}" data-noswipe>
      <div class="rbar"><button class="x" onclick="openSage('${c.sage}')" aria-label="Chapters">☰</button>
        <div class="where"><b>${SMETA(c.sage)[1]}</b> · Ch ${c.n}</div>
        <div class="lang">${[['en', 'English'], ['te', 'తెలుగు'], ['both', 'Both']].map(([m, t]) => `<button data-m="${m}" class="${MODE() === m ? 'on' : ''}${m === 'te' ? ' te' : ''}" onclick="sgMode('${m}')">${t}</button>`).join('')}</div>
        <button class="aa" onclick="sgFont()" aria-label="Text size">Aa</button></div>
      <div class="prog"><i id="sg-prog"></i></div>
      <div class="pages" id="sg-pages"><div class="track" id="sg-track">${pages.map(h => `<div class="page">${h}</div>`).join('')}</div></div>
      <div class="rnav"><button class="pb" id="sg-prev" onclick="sgGo(-1)" aria-label="Previous page">‹</button>
        <div class="dots">${pages.map(() => '<i></i>').join('')}</div>
        <button class="pb" id="sg-next" onclick="sgGo(1)" aria-label="Next page">›</button></div>
    </div>`;
    swipe(document.getElementById('sg-pages'));
    sgGo(0, true);
  };
  window.sgGo = function (d, quiet) {
    const c = chap(state.kids); if (!c) return;
    const n = c.pages.length + 2;
    page = Math.max(0, Math.min(n - 1, page + d));
    const tr = document.getElementById('sg-track'); if (!tr) return;
    tr.style.transform = `translateX(${-page * 100}%)`;
    [...tr.children].forEach((pg, i) => pg.classList.toggle('cur', i === page));
    fitHeight();
    document.querySelectorAll('#sg-read .dots i').forEach((x, i) => x.classList.toggle('on', i === page));
    document.getElementById('sg-prev').disabled = page === 0;
    document.getElementById('sg-next').disabled = page === n - 1;
    document.getElementById('sg-prog').style.width = Math.round(page / (n - 1) * 100) + '%';
    S.pos[c.id] = page; save();
    if (!quiet) { const m = document.getElementById('main'); if (m) m.scrollTo({ top: 0, behavior: 'smooth' }); }
  };
  let ro = null;
  function fitHeight() {
    const cur = document.querySelector('#sg-track .page.cur'), box = document.getElementById('sg-pages');
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
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) sgGo(dx < 0 ? 1 : -1);
      x0 = null;
    }, { passive: true });
  }
  window.sgMode = m => {
    if (typeof settings !== 'undefined') { settings.language = m; if (typeof saveSettings === 'function') saveSettings(); }
    const r = document.getElementById('sg-read');
    r.classList.remove('mode-en', 'mode-te', 'mode-both'); r.classList.add('mode-' + m);
    r.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.m === m));
  };
  window.sgFont = () => { S.fs = (S.fs + 1) % FS.length; save(); document.getElementById('sg-read').style.setProperty('--fs', FS[S.fs]); };
  window.sgDone = (id, btn) => { S.done[id] = !S.done[id]; save(); btn.classList.toggle('did', !!S.done[id]); btn.textContent = S.done[id] ? '✓ Read' : 'Mark chapter as read'; };

  const css = `
.rmy .chno .te{display:none}.rmy.mode-te .chno .en{display:none}.rmy.mode-te .chno .te{display:inline}.rmy.mode-both .chno .te{display:inline;margin-left:8px}
.rmy .sg-link{width:100%;text-align:left;margin:16px 0}.rmy .sg-link b .te{display:block;font-family:'Noto Sans Telugu',sans-serif;font-size:.9rem;color:var(--te)}.rmy.mode-en .sg-link b .te,.rmy.mode-te .sg-link b .en{display:none}.rmy.mode-te .sg-link b .te{color:var(--fg)}
.rmy .sg-src b{color:var(--accent)!important}
.rmy .ktile .kmeta+.kmeta{margin-top:2px}
.rmy-sheet.mode-en .sg-life .te,.rmy-sheet.mode-te .sg-life .en{display:none}.rmy-sheet.mode-both .sg-life .te{display:block;font-weight:400;font-size:.85rem;margin-top:2px}
.rmy-sheet .sg-life{display:block;width:100%;margin-top:16px;padding:12px;border-radius:12px;background:var(--accent);color:#fff;font-weight:700;border:none;font-size:.95rem;cursor:pointer}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  if (typeof state !== 'undefined' && (state.view === 'sages' || state.view === 'sageread')) renderCurrentView();
})();
