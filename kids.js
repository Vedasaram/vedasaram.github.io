// ─────────────── KIDS CORNER ───────────────
// Learn Telugu (7 levels: Learn / Trace / Play) and Stories (see stories.js).
// Progress is saved on this device only (localStorage key "vedic_kids").
(function () {
  // ── Storage ──
  const KEY = 'vedic_kids';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  const prog = Object.assign({ stars: {}, traced: {}, read: {} }, load());
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sample = (a, n, not) => shuffle(a.filter(x => x !== not)).slice(0, n);

  // ═════════════ VOICE RECORDINGS ═════════════
  // A parent records each letter/word on their phone (kept in IndexedDB on that phone), then
  // "Send recordings" shares the files. Published recordings live in audio/ and are listed in
  // audio/index.js (window.KIDS_AUDIO). File names are the Telugu text as Unicode code points.
  const audioKey = t => 'u' + [...t].map(c => c.codePointAt(0).toString(16).padStart(4, '0')).join('-');
  const localAudio = {};        // key -> { url, blob, type }
  let dbp = null;
  function db() {
    if (!dbp) dbp = new Promise((res, rej) => {
      if (!window.indexedDB) return rej(new Error('no indexedDB'));
      const r = indexedDB.open('vedic_kids_audio', 1);
      r.onupgradeneeded = () => r.result.createObjectStore('rec');
      r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error);
    });
    return dbp;
  }
  async function idb(mode, fn) {
    const d = await db();
    return new Promise((res, rej) => {
      const tx = d.transaction('rec', mode), q = fn(tx.objectStore('rec'));
      tx.oncomplete = () => res(q && q.result); tx.onerror = () => rej(tx.error);
    });
  }
  (async () => {     // load this phone's recordings
    try {
      const keys = await idb('readonly', st => st.getAllKeys());
      const vals = await idb('readonly', st => st.getAll());
      keys.forEach((k, i) => { localAudio[k] = { blob: vals[i].blob, type: vals[i].type, url: URL.createObjectURL(vals[i].blob) }; });
      if (keys.length && typeof state !== 'undefined' && state.view === 'telugu') renderTelugu();
    } catch (e) {}
  })();
  const audioUrl = key => (localAudio[key] && localAudio[key].url) || (window.KIDS_AUDIO || {})[key] || null;
  const player = new Audio();
  window.kzPlay = key => { const u = audioUrl(key); if (!u) return; try { player.pause(); player.src = u; player.currentTime = 0; player.play().catch(() => {}); } catch (e) {} };
  let rec = null, recTimer = null;
  window.kzRec = async (btn, key, maxSec) => {
    if (rec) { rec.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { alert('This browser cannot record audio. Try Safari on iPhone or Chrome.'); return; }
    let stream;
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch (e) { alert('Microphone permission is needed to record. Allow the microphone for this site and try again.'); return; }
    const type = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm'].find(t => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) || '';
    const r = new MediaRecorder(stream, type ? { mimeType: type } : undefined), chunks = [];
    r.ondataavailable = e => { if (e.data && e.data.size) chunks.push(e.data); };
    r.onstop = async () => {
      stream.getTracks().forEach(t => t.stop()); rec = null; clearTimeout(recTimer);
      const mime = (r.mimeType || type || 'audio/mp4').split(';')[0];
      const blob = new Blob(chunks, { type: mime });
      if (blob.size < 800) { renderTelugu(); return; }          // too short — ignore an accidental tap
      if (localAudio[key]) URL.revokeObjectURL(localAudio[key].url);
      localAudio[key] = { blob, type: mime, url: URL.createObjectURL(blob) };
      try { await idb('readwrite', st => st.put({ blob, type: mime, at: Date.now() }, key)); } catch (e) {}
      renderTelugu(); kzPlay(key);
    };
    r.start(); rec = r;
    btn.classList.add('on'); btn.textContent = '■ Stop';
    recTimer = setTimeout(() => { if (r.state !== 'inactive') r.stop(); }, maxSec * 1000);
  };
  const extFor = t => /mp4|m4a|aac/.test(t) ? '.m4a' : /webm/.test(t) ? '.webm' : /ogg/.test(t) ? '.ogg' : '.m4a';
  window.kzExport = async () => {
    const keys = Object.keys(localAudio);
    if (!keys.length) { alert('No recordings on this phone yet.'); return; }
    const files = keys.map(k => new File([localAudio[k].blob], k + extFor(localAudio[k].type), { type: localAudio[k].type }));
    try {
      if (navigator.canShare && navigator.canShare({ files })) {
        await navigator.share({ files, title: 'Vedasaram recordings', text: `${files.length} Telugu recordings for Vedasaram` });
        return;
      }
    } catch (e) { if (e.name === 'AbortError') return; }
    for (const f of files) {           // fallback: download each file
      const a = document.createElement('a'); a.href = URL.createObjectURL(f); a.download = f.name;
      document.body.appendChild(a); a.click(); a.remove();
      await new Promise(r => setTimeout(r, 300));
    }
  };
  window.kzParent = on => { prog.parent = !!on; save(prog); renderTelugu(); };
  window.kzDel = async key => {
    if (!localAudio[key] || !confirm('Delete this recording?')) return;
    URL.revokeObjectURL(localAudio[key].url);
    delete localAudio[key];
    try { await idb('readwrite', st => st.delete(key)); } catch (e) {}
    renderTelugu();
  };
  // 🔊 when a recording exists; 🎤 when recording mode is on
  function voice(text, maxSec = 6) {
    const k = audioKey(text);
    const has = audioUrl(k), mine = !!localAudio[k];
    return `<span class="kz-voice">${has ? `<button class="kz-snd" title="Listen" onclick="event.stopPropagation();kzPlay('${k}')">🔊</button>` : ''}`
      + (prog.parent ? `<button class="kz-rec${mine ? ' done' : ''}" title="Record" onclick="event.stopPropagation();kzRec(this,'${k}',${maxSec})">🎤${mine ? ' Re-record' : ' Record'}</button>` : '')
      + (prog.parent && mine ? `<button class="kz-del" title="Delete recording" aria-label="Delete recording" onclick="event.stopPropagation();kzDel('${k}')">🗑</button>` : '') + '</span>';
  }

  // ═════════════ TELUGU DATA ═════════════
  // Roman spelling for children: aa = long a, ee = long i, oo = long u, ae = long e, oh = long o.
  // Capital T D N L Sh = tongue curled back (retroflex).
  const VOWELS = [
    ['అ','a','అమ్మ','amma','mother','👩'], ['ఆ','aa','ఆవు','aavu','cow','🐄'], ['ఇ','i','ఇల్లు','illu','house','🏠'],
    ['ఈ','ee','ఈగ','eega','fly','🪰'], ['ఉ','u','ఉడుత','uDuta','squirrel','🐿️'], ['ఊ','oo','ఊరు','ooru','village','🏘️'],
    ['ఋ','ru','ఋషి','rushi','sage','🧘'], ['ౠ','roo','','','(rarely used)',''], ['ఎ','e','ఎలుక','eluka','mouse','🐭'],
    ['ఏ','ae','ఏనుగు','aenugu','elephant','🐘'], ['ఐ','ai','ఐదు','aidu','five','5️⃣'], ['ఒ','o','ఒంటె','onTe','camel','🐪'],
    ['ఓ','oh','ఓడ','ohDa','ship','🚢'], ['ఔ','au','ఔషధం','aushadham','medicine','💊'], ['అం','am','అంగడి','angaDi','shop','🏪'],
    ['అః','aha','','','(rarely used)',''],
  ];
  const CONSONANTS = [
    ['క','ka','కప్ప','kappa','frog','🐸'], ['ఖ','kha','ఖడ్గం','khaDgam','sword','🗡️'], ['గ','ga','గడియారం','gaDiyaaram','clock','⏰'],
    ['ఘ','gha','ఘంట','ghanTa','bell','🔔'], ['ఙ','nga','','','(rarely used)',''], ['చ','cha','చేప','chaepa','fish','🐟'],
    ['ఛ','chha','ఛత్రి','chhatri','umbrella','☂️'], ['జ','ja','జెండా','jenDaa','flag','🚩'], ['ఝ','jha','ఝరి','jhari','waterfall','🏞️'],
    ['ఞ','nya','','','(rarely used)',''], ['ట','Ta','టమాట','TamaaTa','tomato','🍅'], ['ఠ','Tha','','','(rarely used)',''],
    ['డ','Da','డబ్బు','Dabbu','money','💰'], ['ఢ','Dha','ఢంకా','Dhankaa','big drum','🥁'], ['ణ','Na','','','(only inside words)',''],
    ['త','ta','తాబేలు','taabaelu','tortoise','🐢'], ['థ','tha','రథం','ratham','chariot',''], ['ద','da','దీపం','deepam','lamp','🪔'],
    ['ధ','dha','ధనుస్సు','dhanussu','bow','🏹'], ['న','na','నక్క','nakka','fox','🦊'], ['ప','pa','పాము','paamu','snake','🐍'],
    ['ఫ','pha','ఫలం','phalam','fruit','🍎'], ['బ','ba','బంతి','banti','ball','⚽'], ['భ','bha','భవనం','bhavanam','building','🏢'],
    ['మ','ma','మామిడి','maamiDi','mango','🥭'], ['య','ya','యంత్రం','yantram','machine','⚙️'], ['ర','ra','రైలు','railu','train','🚆'],
    ['ల','la','లేడి','laeDi','deer','🦌'], ['వ','va','వంకాయ','vankaaya','brinjal','🍆'], ['శ','sha','శంఖం','shankham','conch','🐚'],
    ['ష','Sha','షర్టు','SharTu','shirt','👕'], ['స','sa','సూర్యుడు','sooryuDu','sun','☀️'], ['హ','ha','హంస','hamsa','swan','🦢'],
    ['ళ','La','తాళం','taaLam','lock','🔒'], ['క్ష','ksha','క్షీరం','ksheeram','milk','🥛'], ['ఱ','Ra','','','(old letter, rarely used)',''],
  ];
  const SIGNS = ['', 'ా', 'ి', 'ీ', 'ు', 'ూ', 'ృ', 'ౄ', 'ె', 'ే', 'ై', 'ొ', 'ో', 'ౌ', 'ం', 'ః'];
  const SIGN_ROMAN = ['a', 'aa', 'i', 'ee', 'u', 'oo', 'ru', 'roo', 'e', 'ae', 'ai', 'o', 'oh', 'au', 'am', 'aha'];
  const GUNI_BASE = CONSONANTS.filter(c => !['ఙ', 'ఞ', 'ఱ'].includes(c[0]));
  const romanStem = r => r.slice(0, -1);                       // "ka" → "k"
  const forms = c => SIGNS.map((s, i) => [c[0] + s, romanStem(c[1]) + SIGN_ROMAN[i]]);

  const WORDS = [
    ['ఆవు','aavu','cow','🐄'], ['ఈగ','eega','fly','🪰'], ['చేప','chaepa','fish','🐟'], ['పాము','paamu','snake','🐍'],
    ['కోతి','kohti','monkey','🐒'], ['గుడి','guDi','temple','🛕'], ['బడి','baDi','school','🏫'], ['పులి','puli','tiger','🐅'],
    ['మేక','maeka','goat','🐐'], ['కాకి','kaaki','crow','🐦'], ['గాలి','gaali','wind','🌬️'], ['నీరు','neeru','water','💧'],
    ['పాలు','paalu','milk','🥛'], ['తేనె','taene','honey','🍯'], ['ఆకు','aaku','leaf','🍃'], ['చీమ','cheema','ant','🐜'],
    ['తాబేలు','taabaelu','tortoise','🐢'], ['ఏనుగు','aenugu','elephant','🐘'], ['ఎలుక','eluka','mouse','🐭'], ['ఉడుత','uDuta','squirrel','🐿️'],
    ['జింక','jinka','deer','🦌'], ['బంతి','banti','ball','⚽'], ['దీపం','deepam','lamp','🪔'], ['అరటి','araTi','banana','🍌'],
    ['మామిడి','maamiDi','mango','🥭'], ['టమాట','TamaaTa','tomato','🍅'], ['కారు','kaaru','car','🚗'], ['పడవ','paDava','boat','⛵'],
    ['కలం','kalam','pen','🖊️'], ['ఉంగరం','ungaram','ring','💍'],
  ];
  const OTTU_WORDS = [
    ['అమ్మ','amma','mother','👩'], ['నాన్న','naanna','father','👨'], ['అక్క','akka','elder sister','👧'], ['అన్న','anna','elder brother','👦'],
    ['చెల్లి','chelli','younger sister','👧'], ['తమ్ముడు','tammuDu','younger brother','👦'], ['కుక్క','kukka','dog','🐕'], ['పిల్లి','pilli','cat','🐈'],
    ['పువ్వు','puvvu','flower','🌸'], ['గుర్రం','gurram','horse','🐎'], ['చెట్టు','cheTTu','tree','🌳'], ['పక్షి','pakshi','bird','🐦'],
    ['కప్ప','kappa','frog','🐸'], ['బొమ్మ','bomma','toy','🧸'], ['పుస్తకం','pustakam','book','📖'], ['కళ్ళు','kaLLu','eyes','👀'],
    ['పళ్ళు','paLLu','teeth','🦷'], ['నక్క','nakka','fox','🦊'], ['ఎద్దు','eddu','ox','🐂'], ['మబ్బు','mabbu','cloud','☁️'],
    ['నక్షత్రం','nakshatram','star','⭐'], ['చంద్రుడు','chandruDu','moon','🌙'], ['సూర్యుడు','sooryuDu','sun','☀️'], ['ఇల్లు','illu','house','🏠'],
    ['బస్సు','bassu','bus','🚌'], ['రొట్టె','roTTe','bread','🍞'], ['గుడ్డు','guDDu','egg','🥚'], ['ఉప్పు','uppu','salt','🧂'],
  ];
  const SENTENCES = [
    ['నా పేరు రాము.', 'My name is Ramu.'],
    ['నేను బడికి వెళ్తాను.', 'I go to school.'],
    ['అమ్మ అన్నం వండుతుంది.', 'Mother cooks rice.'],
    ['ఆవు పాలు ఇస్తుంది.', 'The cow gives milk.'],
    ['ఆకాశం నీలంగా ఉంది.', 'The sky is blue.'],
    ['నాకు మామిడి పండు ఇష్టం.', 'I like mangoes.'],
    ['పిల్లి పాలు తాగుతుంది.', 'The cat drinks milk.'],
    ['మా ఇంట్లో ఒక కుక్క ఉంది.', 'There is a dog in our house.'],
    ['నాన్న ఆఫీసుకు వెళ్తారు.', 'Father goes to the office.'],
    ['రేపు మనం గుడికి వెళ్దాం.', 'Tomorrow, let us go to the temple.'],
    ['చెట్టు మీద పక్షి కూర్చుంది.', 'A bird is sitting on the tree.'],
    ['నేను రోజూ పుస్తకం చదువుతాను.', 'I read a book every day.'],
    ['ఈ రోజు వర్షం పడుతోంది.', 'It is raining today.'],
    ['మనం అందరం కలిసి ఆడుకుందాం.', 'Let us all play together.'],
  ];
  const PASSAGES = [
    { te: 'మా తోట', en: 'Our Garden',
      text: 'మా ఇంటి ముందు ఒక చిన్న తోట ఉంది. తోటలో ఎర్రని గులాబీలు, పసుపు బంతిపూలు ఉన్నాయి. ప్రతి ఉదయం నేను మొక్కలకు నీళ్ళు పోస్తాను. సీతాకోకచిలుకలు పువ్వుల చుట్టూ ఎగురుతాయి. నాకు మా తోట అంటే చాలా ఇష్టం.',
      meaning: 'There is a small garden in front of our house. In the garden there are red roses and yellow marigolds. Every morning I water the plants. Butterflies fly around the flowers. I love our garden very much.',
      qs: [['తోట ఎక్కడ ఉంది?', 'Where is the garden?', ['ఇంటి ముందు', 'ఇంటి వెనుక', 'బడిలో', 'గుడిలో']],
           ['గులాబీలు ఏ రంగులో ఉన్నాయి?', 'What colour are the roses?', ['ఎర్రని', 'పసుపు', 'నీలం', 'తెల్లని']],
           ['పువ్వుల చుట్టూ ఏవి ఎగురుతాయి?', 'What flies around the flowers?', ['సీతాకోకచిలుకలు', 'కాకులు', 'ఈగలు', 'చిలుకలు']]] },
    { te: 'దాహం వేసిన కాకి', en: 'The Thirsty Crow',
      text: 'ఒక రోజు ఒక కాకికి చాలా దాహం వేసింది. అది ఒక కుండను చూసింది. కుండలో కొంచెం నీళ్ళు మాత్రమే ఉన్నాయి. కాకి చిన్న చిన్న రాళ్ళను తెచ్చి కుండలో వేసింది. నీళ్ళు పైకి వచ్చాయి. కాకి నీళ్ళు తాగి సంతోషంగా ఎగిరిపోయింది.',
      meaning: 'One day a crow was very thirsty. It saw a pot. There was only a little water in the pot. The crow brought small pebbles and dropped them into the pot. The water came up. The crow drank the water and flew away happily.',
      qs: [['కాకికి ఏమైంది?', 'What happened to the crow?', ['దాహం వేసింది', 'ఆకలి వేసింది', 'నిద్ర వచ్చింది', 'జ్వరం వచ్చింది']],
           ['కాకి కుండలో ఏమి వేసింది?', 'What did the crow put in the pot?', ['రాళ్ళు', 'ఆకులు', 'పూలు', 'ఇసుక']],
           ['చివరకు కాకి ఏం చేసింది?', 'What did the crow do at the end?', ['నీళ్ళు తాగి ఎగిరిపోయింది', 'కుండను పగలగొట్టింది', 'నిద్రపోయింది', 'ఏడ్చింది']]] },
    { te: 'సంక్రాంతి పండుగ', en: 'The Sankranti Festival',
      text: 'సంక్రాంతి పండుగ వచ్చింది. అమ్మ ఇంటి ముందు అందమైన ముగ్గు వేసింది. నేను, అన్నయ్య గాలిపటాలు ఎగరేశాము. నానమ్మ రుచికరమైన అరిసెలు చేసింది. సాయంత్రం అందరం కలిసి సంతోషంగా భోజనం చేశాము.',
      meaning: 'The Sankranti festival came. Mother drew a beautiful muggu in front of the house. My elder brother and I flew kites. Grandmother made tasty ariselu. In the evening we all ate together happily.',
      qs: [['అమ్మ ఇంటి ముందు ఏమి వేసింది?', 'What did Mother draw in front of the house?', ['ముగ్గు', 'బొమ్మ', 'పాట', 'గోడ']],
           ['పిల్లలు ఏమి ఎగరేశారు?', 'What did the children fly?', ['గాలిపటాలు', 'పక్షులు', 'బంతులు', 'విమానాలు']],
           ['నానమ్మ ఏమి చేసింది?', 'What did Grandmother make?', ['అరిసెలు', 'లడ్డూలు', 'అన్నం', 'పాయసం']]] },
    { te: 'చిట్టి చీమ', en: 'The Little Ant',
      text: 'ఒక చిట్టి చీమ చాలా కష్టపడి పని చేసేది. వేసవిలో అది రోజూ గింజలను తన పుట్టకు మోసుకెళ్ళేది. ఒక మిడత మాత్రం ఆడుతూ పాడుతూ కాలం గడిపింది. చలికాలం వచ్చింది. చీమ దగ్గర చాలా ఆహారం ఉంది, మిడత దగ్గర ఏమీ లేదు. ముందుగా ఆలోచించి పని చేయాలని మిడత తెలుసుకుంది.',
      meaning: 'A little ant worked very hard. In summer it carried grains to its anthill every day. But a grasshopper spent its time playing and singing. Winter came. The ant had plenty of food; the grasshopper had nothing. The grasshopper learned that we should think ahead and work.',
      qs: [['చీమ వేసవిలో ఏం చేసింది?', 'What did the ant do in summer?', ['గింజలు మోసింది', 'ఆడుకుంది', 'నిద్రపోయింది', 'పాటలు పాడింది']],
           ['మిడత ఏం చేసింది?', 'What did the grasshopper do?', ['ఆడుతూ పాడుతూ గడిపింది', 'గింజలు దాచింది', 'ఇల్లు కట్టింది', 'చీమకు సహాయం చేసింది']],
           ['చలికాలంలో ఎవరి దగ్గర ఆహారం ఉంది?', 'Who had food in winter?', ['చీమ', 'మిడత', 'ఇద్దరి దగ్గర', 'ఎవరి దగ్గరా లేదు']]] },
  ];
  const LEVELS = [
    { id: 'L1', te: 'అచ్చులు', en: 'Vowels', sub: '16 letters', sample: 'అ ఆ ఇ', trace: true },
    { id: 'L2', te: 'హల్లులు', en: 'Consonants', sub: '36 letters', sample: 'క ఖ గ', trace: true },
    { id: 'L3', te: 'గుణింతాలు', en: 'Letters with vowel signs', sub: 'క కా కి కీ …', sample: 'కా కి', trace: true },
    { id: 'L4', te: 'పదాలు', en: 'First words', sub: `${WORDS.length} words`, sample: 'ఆవు' },
    { id: 'L5', te: 'ఒత్తులు', en: 'Joined letters', sub: `${OTTU_WORDS.length} words`, sample: 'అమ్మ' },
    { id: 'L6', te: 'వాక్యాలు', en: 'Sentences', sub: `${SENTENCES.length} sentences`, sample: 'నా పేరు' },
    { id: 'L7', te: 'చదువు', en: 'Reading', sub: `${PASSAGES.length} short passages`, sample: 'కథ' },
  ];

  // ═════════════ STYLES ═════════════
  const css = `
.kz{--kz-sun:#f2a33a;--kz-leaf:#4f9d69;--kz-sky:#4a90c2;--kz-rose:#d9577a;--kz-plum:#8a5cc2;
  font-family:-apple-system,system-ui,'Noto Sans Telugu',sans-serif}
:where(.kz) button{font:inherit;color:inherit;cursor:pointer}   /* low specificity so component styles win */
.kz .te{font-family:'Noto Sans Telugu',sans-serif}
.kz-hero{border-radius:22px;padding:20px 18px;margin-bottom:16px;background:var(--home-gradient);color:#fff3dc;position:relative;overflow:hidden}
.kz-hero h2{margin:0;font-family:'Crimson Text',Georgia,serif;font-size:1.6rem;line-height:1.15}
.kz-hero p{margin:4px 0 0;color:rgba(255,243,220,.75);font-size:.9rem}
.kz-hero .kz-float{position:absolute;right:12px;top:6px;font-size:3.4rem;opacity:.9;font-family:'Noto Sans Telugu',sans-serif;color:var(--home-gold,#f0c040)}
.kz-doors{display:grid;gap:14px}
.kz-door{display:flex;align-items:center;gap:14px;width:100%;text-align:left;border:none;border-radius:20px;padding:16px;color:#fff;min-height:118px;position:relative;overflow:hidden}
.kz-door .big{font-size:2.6rem;line-height:1;flex-shrink:0;width:72px;height:72px;border-radius:18px;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center}
.kz-door h3{margin:0;font-size:1.3rem}
.kz-door p{margin:3px 0 0;font-size:.88rem;opacity:.9}
.kz-door.tel{background:linear-gradient(135deg,#c9572c,#f2a33a)}
.kz-door.sto{background:linear-gradient(135deg,#3b4fa8,#8a5cc2)}
.kz-badge{display:inline-block;background:#ffe066;color:#5a3a00;font-size:.68rem;font-weight:800;border-radius:6px;padding:2px 6px;margin-left:6px;vertical-align:middle;letter-spacing:.02em}
.kz-back{border:none;background:none;color:var(--accent);font-weight:700;padding:4px 0;margin-bottom:6px}
/* Level trail */
.kz-trail{position:relative;padding:4px 0 10px}
.kz-trail:before{content:'';position:absolute;left:39px;top:30px;bottom:30px;border-left:3px dotted var(--border)}
.kz-step{position:relative;display:flex;align-items:center;gap:14px;width:100%;text-align:left;border:1px solid var(--border);background:var(--card-bg);border-radius:18px;padding:12px 14px;margin-bottom:12px}
.kz-step .stone{width:52px;height:52px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.25rem;font-weight:700;font-family:'Noto Sans Telugu',sans-serif;box-shadow:0 2px 0 rgba(0,0,0,.12)}
.kz-step h3{margin:0;font-size:1.1rem}
.kz-step h3 small{font-weight:400;color:var(--fg3);font-size:.8rem;margin-left:6px}
.kz-step p{margin:2px 0 0;font-size:.82rem;color:var(--fg3)}
.kz-stars{margin-left:auto;font-size:1rem;letter-spacing:1px;white-space:nowrap}
.kz-stars .off{opacity:.22}
/* Level page */
.kz-lvhead{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.kz-lvhead .stone{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.1rem}
.kz-lvhead h2{margin:0;font-size:1.3rem}
.kz-lvhead h2 small{display:block;font-size:.8rem;font-weight:400;color:var(--fg3)}
.kz-modes{display:flex;gap:6px;background:var(--card-bg);border:1px solid var(--border);border-radius:999px;padding:4px;margin-bottom:14px}
.kz-modes button{flex:1;border:none;background:none;border-radius:999px;padding:8px 6px;font-weight:600;color:var(--fg2)}
.kz-modes button.on{background:var(--accent);color:var(--bg)}
.kz-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(74px,1fr));gap:8px}
.kz-tile{border:1px solid var(--border);background:var(--card-bg);border-radius:14px;padding:10px 4px 8px;text-align:center}
.kz-tile .l{font-family:'Noto Sans Telugu',sans-serif;font-size:2rem;line-height:1.25;color:var(--fg)}
.kz-tile .r{font-size:.78rem;color:var(--fg3)}
.kz-tile.sel{border-color:var(--accent2);box-shadow:0 0 0 2px var(--accent2)}
.kz-card{border:1px solid var(--border);background:var(--card-bg);border-radius:18px;padding:16px;margin-bottom:12px;text-align:center}
.kz-card .bigl{font-family:'Noto Sans Telugu',sans-serif;font-size:5rem;line-height:1.2;color:var(--accent)}
.kz-card .rom{font-size:1.1rem;color:var(--fg2);margin-top:-4px}
.kz-card .ex{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:10px;font-size:1.1rem}
.kz-card .ex .emo{font-size:2.2rem}
.kz-card .ex .w{font-family:'Noto Sans Telugu',sans-serif;font-size:1.6rem}
.kz-card .ex small{display:block;color:var(--fg3);font-size:.8rem}
.kz-chips{display:flex;gap:6px;overflow-x:auto;padding:2px 0 10px;scrollbar-width:none}
.kz-chips::-webkit-scrollbar{display:none}
.kz-chips button{flex-shrink:0;border:1px solid var(--border);background:var(--card-bg);border-radius:12px;min-width:44px;padding:6px 10px;font-family:'Noto Sans Telugu',sans-serif;font-size:1.2rem}
.kz-chips button.on{background:var(--accent);color:var(--bg);border-color:var(--accent)}
.kz-words{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px}
.kz-word{border:1px solid var(--border);background:var(--card-bg);border-radius:16px;padding:12px;text-align:center}
.kz-word .emo{font-size:2.4rem;line-height:1.2}
.kz-word .w{font-family:'Noto Sans Telugu',sans-serif;font-size:1.5rem}
.kz-word .r{font-size:.8rem;color:var(--fg3)}
.kz-sent{border:1px solid var(--border);background:var(--card-bg);border-radius:16px;padding:12px 14px;margin-bottom:10px}
.kz-sent .t{font-family:'Noto Sans Telugu',sans-serif;font-size:1.35rem;line-height:1.6}
.kz-sent .e{font-size:.88rem;color:var(--fg3)}
.kz-passage .t{font-family:'Noto Sans Telugu',sans-serif;font-size:1.3rem;line-height:1.9;text-align:left}
.kz-passage .e{font-size:.95rem;color:var(--fg2);line-height:1.6;text-align:left;margin-top:10px;border-top:1px dashed var(--border);padding-top:10px}
.kz-btn{border:none;border-radius:14px;padding:12px 16px;font-weight:700;background:var(--accent);color:var(--bg)}
.kz-btn.soft{background:var(--card-bg);color:var(--fg);border:1px solid var(--border)}
.kz-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:12px}
/* Trace */
.kz-trace{position:relative;margin:0 auto;touch-action:none;border-radius:20px;background:var(--card-bg);border:1px solid var(--border)}
.kz-trace canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none}
.kz-fb{text-align:center;min-height:1.6em;font-weight:700;margin-top:10px}
.kz-fb.ok{color:var(--kz-leaf)} .kz-fb.no{color:var(--kz-rose)}
/* Play */
.kz-q{text-align:center;margin-bottom:14px}
.kz-q .prompt{font-size:1.05rem;color:var(--fg2)}
.kz-q .show{font-size:3rem;line-height:1.3}
.kz-q .show.te{font-size:2.6rem}
.kz-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.kz-opt{border:2px solid var(--border);background:var(--card-bg);border-radius:16px;padding:14px 8px;font-size:1.6rem;min-height:72px;font-family:'Noto Sans Telugu',sans-serif}
.kz-opt.small{font-size:1.05rem}
.kz-opt.right{border-color:var(--kz-leaf);background:rgba(79,157,105,.15)}
.kz-opt.wrong{border-color:var(--kz-rose);background:rgba(217,87,122,.12)}
.kz-progress{height:8px;border-radius:4px;background:var(--border);overflow:hidden;margin-bottom:14px}
.kz-progress span{display:block;height:100%;background:var(--kz-sun);transition:width .3s}
.kz-result{text-align:center;padding:20px 10px}
.kz-result .s{font-size:2.6rem;letter-spacing:4px}
.kz-build{min-height:60px;border:2px dashed var(--border);border-radius:14px;padding:8px;display:flex;flex-wrap:wrap;gap:6px;justify-content:center;align-items:center;margin-bottom:10px}
.kz-chip{border:1px solid var(--border);background:var(--card-bg);border-radius:12px;padding:8px 12px;font-family:'Noto Sans Telugu',sans-serif;font-size:1.25rem}
.kz-chip.used{opacity:.25;pointer-events:none}
/* Voice */
.kz-voice{display:inline-flex;gap:6px;align-items:center;justify-content:center;flex-wrap:wrap}
.kz-snd{border:none;background:rgba(242,163,58,.18);border-radius:999px;width:40px;height:40px;font-size:1.15rem}
.kz-rec{border:1px solid var(--kz-rose);color:var(--kz-rose);background:transparent;border-radius:999px;padding:6px 12px;font-size:.85rem;font-weight:700}
.kz-rec.done{border-color:var(--kz-leaf);color:var(--kz-leaf)}
.kz-del{border:1px solid var(--border);background:transparent;border-radius:999px;width:34px;height:34px;font-size:.95rem}
.kz-recsw{display:flex;align-items:center;gap:8px;justify-content:flex-end;font-size:.82rem;color:var(--fg2);margin:-6px 0 10px}
.kz-recsw input{width:18px;height:18px}
.kz-rec.on{background:var(--kz-rose);color:#fff;border-color:var(--kz-rose);animation:kzpulse 1s infinite}
@keyframes kzpulse{50%{opacity:.6}}
.kz-parent{border:1px dashed var(--border);border-radius:16px;padding:12px 14px;margin-top:6px;font-size:.88rem;color:var(--fg2)}
.kz-parent label{display:flex;align-items:center;gap:10px;font-weight:700;color:var(--fg)}
.kz-parent input{width:20px;height:20px}
.kz-parent p{margin:6px 0 0}
/* Stories */
.kz-filter{display:flex;gap:6px;margin-bottom:12px;overflow-x:auto;scrollbar-width:none}
.kz-filter button{flex-shrink:0;border:1px solid var(--border);background:var(--card-bg);border-radius:999px;padding:6px 14px;font-size:.88rem}
.kz-filter button.on{background:var(--accent);color:var(--bg);border-color:var(--accent)}
.kz-chars{margin-top:-4px}
.kz-chars button{font-size:.8rem;padding:5px 11px}
.kz-chars small{opacity:.6;margin-left:2px}
.kz-count{margin:0 0 10px;font-size:.8rem;color:var(--fg3)}
.kz-story .kz-who{font-size:.78rem;color:var(--fg2);margin-top:2px}
.kz-story{display:block;width:100%;text-align:left;border:1px solid var(--border);background:var(--card-bg);border-radius:18px;overflow:hidden;padding:0;margin-bottom:14px}
.kz-story svg{display:block;width:100%;height:auto}
.kz-story .meta{padding:10px 14px 12px}
.kz-story h3{margin:0;font-size:1.15rem;font-family:'Crimson Text',Georgia,'Noto Sans Telugu',serif}
.kz-story h3 .te{display:block;font-size:1rem;font-weight:600}
.kz-story p{margin:3px 0 0;font-size:.8rem;color:var(--fg3)}
.kz-reader .scene{border-radius:18px;overflow:hidden;border:1px solid var(--border)}
.kz-reader .scene svg{display:block;width:100%;height:auto}
.kz-reader .ttl{font-family:'Crimson Text',Georgia,'Noto Sans Telugu',serif;font-size:1.35rem;font-weight:700;margin:12px 0 2px;color:var(--accent)}
.kz-reader .pg{font-size:.8rem;color:var(--fg3)}
.kz-reader .txt{font-family:'Crimson Text',Georgia,serif;font-size:1.25rem;line-height:1.65;margin-top:10px}
.kz-reader .txt.te{font-family:'Noto Sans Telugu',sans-serif;font-size:1.12rem;line-height:1.95}
.kz-reader .txt + .txt{border-top:1px dashed var(--border);padding-top:10px}
.kz-reader .moral{margin-top:16px;border-radius:16px;padding:14px;background:rgba(242,163,58,.14);border:1px solid rgba(242,163,58,.4)}
.kz-reader .moral b{display:block;font-size:.8rem;color:var(--fg3);margin-bottom:2px}
.kz-reader .nav{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:18px}
.kz-reader .dots{display:flex;gap:6px}
.kz-reader .dots i{width:8px;height:8px;border-radius:50%;background:var(--border)}
.kz-reader .dots i.on{background:var(--accent)}
.kz-langs{display:flex;gap:4px;justify-content:flex-end;margin-bottom:8px}
.kz-langs button{border:1px solid var(--border);background:var(--card-bg);border-radius:999px;padding:4px 10px;font-size:.78rem}
.kz-langs button.on{background:var(--accent);color:var(--bg);border-color:var(--accent)}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  const LV_COLORS = ['#e0703a', '#d9577a', '#8a5cc2', '#4a90c2', '#3f9d8f', '#4f9d69', '#c9952a'];
  const starsHTML = n => `<span class="kz-stars">${[1, 2, 3].map(i => `<span class="${i <= n ? '' : 'off'}">⭐</span>`).join('')}</span>`;
  const newStories = () => (window.KIDS_STORIES || []).filter(isNewStory).length;

  // ═════════════ HUB ═════════════
  window.renderKids = function () {
    const el = document.getElementById('view-kids');
    const n = newStories();
    el.innerHTML = `<div class="kz">
      <div class="kz-hero"><span class="kz-float">అ</span><h2>Kids Corner</h2><p>పిల్లల కోసం · Learn Telugu and read stories</p></div>
      <div class="kz-doors">
        <button class="kz-door tel" onclick="openTelugu('')"><span class="big te">అఆ</span>
          <span><h3>Learn Telugu</h3><p class="te">తెలుగు నేర్చుకుందాం</p><p>From the first letters to reading, in 7 levels</p></span></button>
        <button class="kz-door sto" onclick="openStories('')"><span class="big">📖</span>
          <span><h3>Stories ${n ? `<span class="kz-badge">${n} NEW</span>` : ''}</h3><p class="te">కథలు</p><p>Tales from the Rāmāyaṇa and Mahābhārata</p></span></button>
      </div></div>`;
  };

  // ═════════════ LEARN TELUGU ═════════════
  let mode = 'learn', sel = 0, guniIdx = 0, quiz = null, curLevel = null;
  window.renderTelugu = function () {
    const el = document.getElementById('view-telugu');
    const lv = LEVELS.find(l => l.id === state.kids);
    if (!lv) {   // level trail
      el.innerHTML = `<div class="kz">
        <button class="kz-back" onclick="openKids()">‹ Kids Corner</button>
        <div class="kz-hero"><span class="kz-float">ఆ</span><h2>Learn Telugu</h2><p class="te">తెలుగు నేర్చుకుందాం · one step at a time</p></div>
        <div class="kz-trail">${LEVELS.map((l, i) => `
          <button class="kz-step" onclick="openTelugu('${l.id}')">
            <span class="stone te" style="background:${LV_COLORS[i]}">${l.sample.split(' ')[0]}</span>
            <span><h3>Level ${i + 1}: ${l.en}<small class="te">${l.te}</small></h3><p>${l.sub}</p></span>
            ${starsHTML(prog.stars[l.id] || 0)}
          </button>`).join('')}</div>
        <div class="kz-parent">
          <label><input type="checkbox" ${prog.parent ? 'checked' : ''} onchange="kzParent(this.checked)"> Parent: record voices</label>
          <p>Turn this on to show a 🎤 Record button on every letter, word and sentence. Record in a quiet room, about 1 second per letter.</p>
          ${prog.parent ? `<p><b>${Object.keys(localAudio).length}</b> recordings on this phone.</p>
          <div class="kz-row" style="justify-content:flex-start"><button class="kz-btn" onclick="kzExport()">Send recordings</button></div>
          <p>Send the files to Claude, and they'll be published so every family using the app hears your voice.</p>` : ''}
        </div></div>`;
      return;
    }
    if (curLevel !== lv.id) { curLevel = lv.id; mode = 'learn'; sel = 0; guniIdx = 0; quiz = null; }
    const i = LEVELS.indexOf(lv);
    const modes = ['learn', ...(lv.trace ? ['trace'] : []), 'play'];
    const label = { learn: 'Learn', trace: 'Trace', play: 'Play' };
    el.innerHTML = `<div class="kz">
      <button class="kz-back" onclick="openTelugu('')">‹ All levels</button>
      <div class="kz-lvhead"><span class="stone" style="background:${LV_COLORS[i]}">${i + 1}</span>
        <h2>${lv.en} <span class="te">· ${lv.te}</span><small>Level ${i + 1} of 7 · ${lv.sub}</small></h2>${starsHTML(prog.stars[lv.id] || 0)}</div>
      <div class="kz-modes">${modes.map(m => `<button class="${m === mode ? 'on' : ''}" onclick="kzMode('${m}')">${label[m]}</button>`).join('')}</div>
      ${mode === 'learn' ? `<label class="kz-recsw"><input type="checkbox" ${prog.parent ? 'checked' : ''} onchange="kzParent(this.checked)"> 🎤 Record voices (parent)</label>` : ''}
      <div id="kz-body"></div></div>`;
    const body = document.getElementById('kz-body');
    if (mode === 'learn') learn(lv, body);
    else if (mode === 'trace') trace(lv, body);
    else play(lv, body);
  };
  window.kzMode = m => { mode = m; sel = 0; quiz = null; renderTelugu(); };
  window.kzSel = i => { sel = i; renderTelugu(); };
  window.kzGuni = i => { guniIdx = i; sel = 0; renderTelugu(); };

  function letterSet(lv) {
    if (lv.id === 'L1') return VOWELS.map(v => ({ l: v[0], r: v[1], w: v[2], wr: v[3], en: v[4], emo: v[5] }));
    if (lv.id === 'L2') return CONSONANTS.map(v => ({ l: v[0], r: v[1], w: v[2], wr: v[3], en: v[4], emo: v[5] }));
    return forms(GUNI_BASE[guniIdx]).map(f => ({ l: f[0], r: f[1] }));
  }
  function guniChips() {
    return `<div class="kz-chips" data-noswipe>${GUNI_BASE.map((c, i) => `<button class="${i === guniIdx ? 'on' : ''}" onclick="kzGuni(${i})">${c[0]}</button>`).join('')}</div>`;
  }
  function letterCard(x) {
    return `<div class="kz-card"><div class="bigl">${x.l}</div><div class="rom">${x.r}</div>${voice(x.l, 4)}
      ${x.w ? `<div class="ex"><span class="emo">${x.emo || ''}</span><span><span class="w">${x.w}</span><small>${x.wr} · ${x.en}</small></span>${voice(x.w, 4)}</div>`
            : (x.en ? `<div class="rom" style="margin-top:8px;font-size:.85rem">${x.en}</div>` : '')}</div>`;
  }

  function learn(lv, body) {
    if (lv.id === 'L1' || lv.id === 'L2' || lv.id === 'L3') {
      const set = letterSet(lv);
      body.innerHTML = (lv.id === 'L3' ? `<p style="margin:0 0 6px;color:var(--fg3);font-size:.85rem">Pick a letter to see it with every vowel sign:</p>` + guniChips() : '')
        + letterCard(set[sel] || set[0])
        + `<div class="kz-grid">${set.map((x, i) => `<button class="kz-tile${i === sel ? ' sel' : ''}" onclick="kzSel(${i});kzPlay('${audioKey(x.l)}')"><div class="l">${x.l}</div><div class="r">${x.r}</div></button>`).join('')}</div>`;
      return;
    }
    if (lv.id === 'L4' || lv.id === 'L5') {
      const list = lv.id === 'L4' ? WORDS : OTTU_WORDS;
      body.innerHTML = `<div class="kz-words">${list.map(w => `<div class="kz-word" onclick="kzPlay('${audioKey(w[0])}')"><div class="emo">${w[3]}</div><div class="w">${w[0]}</div><div class="r">${w[1]} · ${w[2]}</div>${voice(w[0], 4)}</div>`).join('')}</div>`;
      return;
    }
    if (lv.id === 'L6') {
      body.innerHTML = SENTENCES.map(s => `<div class="kz-sent"><div class="t">${s[0]}</div><div class="e">${s[1]}</div>${voice(s[0], 10)}</div>`).join('');
      return;
    }
    const p = PASSAGES[sel] || PASSAGES[0];
    body.innerHTML = `<div class="kz-chips" data-noswipe style="font-size:.9rem">${PASSAGES.map((x, i) => `<button class="${i === sel ? 'on' : ''}" style="font-size:.95rem" onclick="kzSel(${i})">${x.te}</button>`).join('')}</div>
      <div class="kz-card kz-passage"><div style="font-weight:700;margin-bottom:8px" class="te">${p.te} <span style="font-weight:400;color:var(--fg3);font-size:.85rem">· ${p.en}</span></div>
      <div class="t">${p.text}</div><div style="margin-top:8px">${voice(p.text, 60)}</div><div class="e" id="kz-meaning" hidden>${p.meaning}</div>
      <div class="kz-row"><button class="kz-btn soft" onclick="var m=document.getElementById('kz-meaning');m.hidden=!m.hidden;this.textContent=m.hidden?'Show meaning':'Hide meaning'">Show meaning</button></div></div>`;
  }

  // ── Trace: draw over the faint letter; checked for coverage, every part, and staying on the lines ──
  function trace(lv, body) {
    const set = letterSet(lv);
    const x = set[sel] || set[0];
    const done = prog.traced[lv.id] || [];
    body.innerHTML = (lv.id === 'L3' ? guniChips() : '') + `
      <p style="text-align:center;margin:0 0 8px;color:var(--fg2)">Trace <span class="te" style="font-size:1.3rem">${x.l}</span> (${x.r}) with your finger</p>
      <div class="kz-trace" id="kz-tr" data-noswipe><canvas id="kz-guide"></canvas><canvas id="kz-ink"></canvas></div>
      <div class="kz-fb" id="kz-fb">${done.includes(x.l) ? '⭐ Traced before' : ''}</div>
      <div class="kz-row">
        <button class="kz-btn soft" onclick="kzSel(${(sel - 1 + set.length) % set.length})">‹ Prev</button>
        <button class="kz-btn soft" id="kz-clear">Clear</button>
        <button class="kz-btn" id="kz-check">Check</button>
        <button class="kz-btn soft" onclick="kzSel(${(sel + 1) % set.length})">Next ›</button>
      </div>
      <p style="text-align:center;font-size:.8rem;color:var(--fg3);margin-top:10px">${done.length} of ${set.length} traced in this set</p>`;
    const box = document.getElementById('kz-tr');
    // As big as the screen allows: full width (up to 520px), leaving room for the buttons below
    const availW = box.parentElement.clientWidth || 320;
    const availH = (window.innerHeight || 700) - box.getBoundingClientRect().top - 190;
    const size = Math.max(260, Math.min(520, availW, availH > 260 ? availH : availW));
    box.style.width = size + 'px'; box.style.height = size + 'px';
    const dpr = window.devicePixelRatio || 1;
    const guide = document.getElementById('kz-guide'), ink = document.getElementById('kz-ink');
    [guide, ink].forEach(c => { c.width = size * dpr; c.height = size * dpr; });
    const font = `${Math.round(size * (x.l.length > 2 ? 0.5 : 0.74) * dpr)}px 'Noto Sans Telugu', sans-serif`;
    const drawLetter = (ctx, fill, stroke, lw) => {
      ctx.font = font; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const cx = guide.width / 2, cy = guide.height * 0.54;      // same spot on every canvas (others are scaled to match)
      if (fill) { ctx.fillStyle = fill; ctx.fillText(x.l, cx, cy); }
      if (stroke) { ctx.lineWidth = lw; ctx.lineJoin = 'round'; ctx.strokeStyle = stroke; ctx.strokeText(x.l, cx, cy); }
    };
    const g = guide.getContext('2d');
    const paint = () => { g.clearRect(0, 0, guide.width, guide.height); drawLetter(g, 'rgba(184,114,10,.22)', 'rgba(184,114,10,.35)', 2 * dpr); };
    paint();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(paint);
    const c = ink.getContext('2d');
    c.lineCap = 'round'; c.lineJoin = 'round'; c.lineWidth = size * 0.065 * dpr;
    c.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#7b3a10';
    let drawing = false, last = null;
    const pos = e => { const r = ink.getBoundingClientRect(); return [(e.clientX - r.left) * dpr, (e.clientY - r.top) * dpr]; };
    ink.onpointerdown = e => { drawing = true; last = pos(e); ink.setPointerCapture(e.pointerId); c.beginPath(); c.arc(last[0], last[1], c.lineWidth / 2, 0, 7); c.fillStyle = c.strokeStyle; c.fill(); };
    ink.onpointermove = e => { if (!drawing) return; const p = pos(e); c.beginPath(); c.moveTo(last[0], last[1]); c.lineTo(p[0], p[1]); c.stroke(); last = p; };
    ink.onpointerup = ink.onpointercancel = () => { drawing = false; };
    document.getElementById('kz-clear').onclick = () => { c.clearRect(0, 0, ink.width, ink.height); document.getElementById('kz-fb').textContent = ''; };
    document.getElementById('kz-check').onclick = () => {
      const fb = document.getElementById('kz-fb');
      const r = window.kzScoreTrace(guide, ink, drawLetter, c.lineWidth);
      paint();
      if (r.pass) {
        fb.className = 'kz-fb ok'; fb.textContent = r.stars === 3 ? '⭐⭐⭐ Beautiful!' : '⭐⭐ Well done!';
        const t = prog.traced[lv.id] = prog.traced[lv.id] || [];
        if (!t.includes(x.l)) t.push(x.l);
        save(prog);
        return;
      }
      fb.className = 'kz-fb no';
      fb.textContent = r.why === 'empty' ? 'Trace the letter with your finger first'
        : r.why === 'missed' ? 'You missed part of the letter (circled in red) — trace it too'
        : r.why === 'outside' ? 'Too much outside the lines — follow the letter’s shape'
        : 'Cover more of the letter and try again';
      // circle the parts that were skipped, so the child knows where to trace
      const gx = guide.getContext('2d');
      gx.save(); gx.strokeStyle = 'rgba(220,60,40,.85)'; gx.lineWidth = 3 * (window.devicePixelRatio || 1); gx.setLineDash([6, 5]);
      for (const m of r.missed) { gx.beginPath(); gx.arc(m[0], m[1], m[2], 0, 7); gx.stroke(); }
      gx.restore();
    };
  }

  // Score a tracing. Three checks, at 96×96:
  //  1. coverage — how much of the letter the ink reaches, allowing half a brush-width beside the line (≥ 70%);
  //  2. every part — the letter is cut into a 6×6 grid over its own outline; a whole piece left out
  //     (a loop, hook or tail — at least 7% of the letter) fails and is circled; small nubs are forgiven;
  //  3. staying on the lines — ink well away from the letter (around it, or filling its holes)
  //     must be under 30% of all ink.
  window.kzScoreTrace = function (guide, ink, drawLetter, brush) {
    const N = 96, off = document.createElement('canvas'); off.width = off.height = N;
    const o = off.getContext('2d', { willReadFrequently: true });
    const maskOf = fn => { o.clearRect(0, 0, N, N); fn(); return o.getImageData(0, 0, N, N).data; };
    const scale = N / guide.width;
    const letter = maskOf(() => { o.save(); o.scale(scale, scale); drawLetter(o, '#000'); o.restore(); });
    const near = maskOf(() => { o.save(); o.scale(scale, scale); drawLetter(o, '#000', '#000', brush * 0.9); o.restore(); });
    const drawn = maskOf(() => o.drawImage(ink, 0, 0, N, N));
    // Ink "reaches" a letter pixel if it passes within about half a brush-width of it, so a
    // child's finger that runs a little beside the line still counts.
    const R = Math.max(2, Math.round(brush * scale * 0.6));
    const isInk = new Uint8Array(N * N);
    for (let i = 0; i < N * N; i++) isInk[i] = drawn[i * 4 + 3] > 60 ? 1 : 0;
    const reach = new Uint8Array(N * N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      if (!isInk[y * N + x]) continue;
      for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) {
        if (dx * dx + dy * dy > R * R) continue;
        const nx = x + dx, ny = y + dy;
        if (nx >= 0 && ny >= 0 && nx < N && ny < N) reach[ny * N + nx] = 1;
      }
    }
    let L = 0, cov = 0, D = 0, out = 0, x0 = N, y0 = N, x1 = 0, y1 = 0;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const j = y * N + x, i = j * 4 + 3, isL = letter[i] > 90, isD = isInk[j];
      if (isL) { L++; if (reach[j]) cov++; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      if (isD) { D++; if (near[i] < 40) out++; }
    }
    const res = { pass: false, stars: 0, why: '', missed: [], coverage: L ? cov / L : 0, stray: D ? out / D : 1 };
    if (!D) { res.why = 'empty'; return res; }
    const G = 6, cw = (x1 - x0 + 1) / G, ch = (y1 - y0 + 1) / G;
    const cl = new Array(G * G).fill(0), cc = new Array(G * G).fill(0);
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const i = (y * N + x) * 4 + 3; if (letter[i] <= 90) continue;
      const k = Math.min(G - 1, Math.floor((y - y0) / ch)) * G + Math.min(G - 1, Math.floor((x - x0) / cw));
      cl[k]++; if (reach[y * N + x]) cc[k]++;
    }
    const minCell = Math.max(4, L * 0.02), back = 1 / scale;
    const miss = new Set();
    for (let k = 0; k < G * G; k++) if (cl[k] >= minCell && cc[k] / cl[k] < 0.35) miss.add(k);
    // group touching missed cells and circle each group once
    const seen = new Set();
    for (const k0 of miss) {
      if (seen.has(k0)) continue;
      const stack = [k0], grp = []; seen.add(k0);
      while (stack.length) {
        const k = stack.pop(); grp.push(k);
        const gx = k % G, gy = Math.floor(k / G);
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
          const nx = gx + dx, ny = gy + dy, n = ny * G + nx;
          if (nx >= 0 && ny >= 0 && nx < G && ny < G && miss.has(n) && !seen.has(n)) { seen.add(n); stack.push(n); }
        }
      }
      const unc = grp.reduce((n, k) => n + (cl[k] - cc[k]), 0);
      if (unc < L * 0.07) continue;                       // a small nub left out is fine
      const xs = grp.map(k => k % G), ys = grp.map(k => Math.floor(k / G));
      const ax = Math.min(...xs), bx = Math.max(...xs) + 1, ay = Math.min(...ys), by = Math.max(...ys) + 1;
      res.missed.push([(x0 + (ax + bx) / 2 * cw) * back, (y0 + (ay + by) / 2 * ch) * back,
        Math.max((bx - ax) * cw, (by - ay) * ch) * 0.62 * back]);
    }
    if (res.coverage < 0.7) res.why = res.missed.length ? 'missed' : 'more';
    else if (res.missed.length) res.why = 'missed';
    else if (res.stray > 0.3) res.why = 'outside';
    else { res.pass = true; res.stars = (res.coverage > 0.92 && res.stray < 0.15) ? 3 : 2; }
    return res;
  };

  // ── Play: 10 quick questions per round; best score becomes the level's stars ──
  function makeQuiz(lv) {
    const qs = [];
    const optsFrom = (right, pool, key) => shuffle([right, ...sample(pool, 3, right)]).map(o => ({ html: key(o), ok: o === right }));
    if (lv.id === 'L1' || lv.id === 'L2') {
      const base = (lv.id === 'L1' ? VOWELS : CONSONANTS);
      const withWord = base.filter(x => x[2] && x[2].startsWith(x[0]) && x[5]);   // words that begin with the letter
      for (let k = 0; k < 10; k++) {
        if (k % 2) { const x = withWord[Math.floor(Math.random() * withWord.length)];
          qs.push({ prompt: `Which letter does <b>${x[4]}</b> start with?`, show: x[5] || '❓', opts: optsFrom(x, base, o => o[0]) });
        } else { const x = base[Math.floor(Math.random() * base.length)];
          qs.push({ prompt: 'Find the letter', show: `“${x[1]}”`, say: x[0], opts: optsFrom(x, base, o => o[0]) }); }
      }
    } else if (lv.id === 'L3') {
      for (let k = 0; k < 10; k++) {
        const c = GUNI_BASE[Math.floor(Math.random() * GUNI_BASE.length)], fs = forms(c);
        const x = fs[Math.floor(Math.random() * fs.length)];
        qs.push({ prompt: 'Find', show: `“${x[1]}”`, say: x[0], opts: optsFrom(x, fs, o => o[0]) });
      }
    } else if (lv.id === 'L4' || lv.id === 'L5') {
      const list = lv.id === 'L4' ? WORDS : OTTU_WORDS;
      shuffle(list).slice(0, 10).forEach((x, k) => {
        if (k % 2) qs.push({ prompt: 'Which picture is this word?', show: `<span class="te">${x[0]}</span>`, showTe: true, say: x[0], opts: optsFrom(x, list, o => o[3]) });
        else qs.push({ prompt: `Which word means <b>${x[2]}</b>?`, show: x[3], opts: optsFrom(x, list, o => o[0]) });
      });
    } else if (lv.id === 'L6') {
      shuffle(SENTENCES).slice(0, 6).forEach(s => qs.push({ build: true, words: s[0].replace(/\.$/, '').split(' '), en: s[1] }));
    } else {
      shuffle(PASSAGES.flatMap(p => p.qs.map(q => ({ p, q })))).slice(0, 8).forEach(({ p, q }) => {
        const right = q[2][0];
        qs.push({ prompt: `From “<span class="te">${p.te}</span>”: ${q[1]}`, show: `<span class="te" style="font-size:1.4rem">${q[0]}</span>`, showTe: true,
                  small: true, opts: shuffle(q[2]).map(o => ({ html: o, ok: o === right })) });
      });
    }
    return { qs, i: 0, score: 0, built: [], locked: false };
  }
  function play(lv, body) {
    if (!quiz) quiz = makeQuiz(lv);
    const Q = quiz, total = Q.qs.length;
    if (Q.i >= total) {
      const pct = Q.score / total, stars = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.5 ? 1 : 0;
      if (stars > (prog.stars[lv.id] || 0)) { prog.stars[lv.id] = stars; save(prog); }
      body.innerHTML = `<div class="kz-result"><div class="s">${[1, 2, 3].map(i => i <= stars ? '⭐' : '☆').join('')}</div>
        <h3>${Q.score} of ${total} right</h3><p style="color:var(--fg3)">${stars === 3 ? 'Excellent!' : stars ? 'Good work — play again to earn more stars.' : 'Keep practising in Learn, then try again.'}</p>
        <div class="kz-row"><button class="kz-btn" onclick="kzMode('play')">Play again</button><button class="kz-btn soft" onclick="kzMode('learn')">Back to Learn</button></div></div>`;
      return;
    }
    const q = Q.qs[Q.i];
    let html = `<div class="kz-progress"><span style="width:${Q.i / total * 100}%"></span></div>`;
    if (q.build) {
      if (!q.order) q.order = shuffle(q.words.map((w, i) => i));
      html += `<div class="kz-q"><div class="prompt">Put the words in order:</div><div style="font-size:1.1rem;margin-top:4px"><b>${esc(q.en)}</b></div></div>
        <div class="kz-build">${Q.built.map(i => `<span class="kz-chip">${q.words[i]}</span>`).join('') || '<span style="color:var(--fg3);font-size:.85rem">tap the words below</span>'}</div>
        <div class="kz-row">${q.order.map(i => `<button class="kz-chip${Q.built.includes(i) ? ' used' : ''}" onclick="kzBuild(${i})">${q.words[i]}</button>`).join('')}</div>
        <div class="kz-row"><button class="kz-btn soft" onclick="kzBuildReset()">Start over</button></div>`;
    } else {
      const sayKey = q.say && audioUrl(audioKey(q.say)) ? audioKey(q.say) : null;
      html += `<div class="kz-q"><div class="prompt">${q.prompt}</div><div class="show${q.showTe ? ' te' : ''}">${q.show}</div>${sayKey ? `<button class="kz-snd" onclick="kzPlay('${sayKey}')">🔊</button>` : ''}</div>
        <div class="kz-opts">${q.opts.map((o, k) => `<button class="kz-opt${q.small ? ' small' : ''}" data-k="${k}" onclick="kzAnswer(${k})">${o.html}</button>`).join('')}</div>`;
    }
    body.innerHTML = html;
    if (q.say && !q.spoken && audioUrl(audioKey(q.say))) { q.spoken = true; kzPlay(audioKey(q.say)); }
  }
  window.kzAnswer = k => {
    const q = quiz.qs[quiz.i]; if (quiz.locked) return; quiz.locked = true;
    const btns = document.querySelectorAll('.kz-opt');
    q.opts.forEach((o, j) => { if (o.ok) btns[j].classList.add('right'); });
    if (q.opts[k].ok) quiz.score++; else btns[k].classList.add('wrong');
    setTimeout(() => { quiz.i++; quiz.locked = false; renderTelugu(); }, q.opts[k].ok ? 650 : 1300);
  };
  window.kzBuild = i => {
    const q = quiz.qs[quiz.i]; if (quiz.built.includes(i) || quiz.locked) return;
    quiz.built.push(i);
    if (quiz.built.length === q.words.length) {
      const ok = quiz.built.map(j => q.words[j]).join(' ') === q.words.join(' ');
      if (ok) quiz.score++;
      quiz.locked = true; renderTelugu();
      const b = document.querySelector('.kz-build');
      b.style.borderColor = ok ? 'var(--kz-leaf)' : 'var(--kz-rose)';
      if (!ok) b.insertAdjacentHTML('afterend', `<p style="text-align:center;margin:0 0 6px" class="te">✔ ${q.words.join(' ')}</p>`);
      setTimeout(() => { quiz.i++; quiz.built = []; quiz.locked = false; renderTelugu(); }, ok ? 800 : 2200);
    } else renderTelugu();
  };
  window.kzBuildReset = () => { quiz.built = []; renderTelugu(); };

  // ═════════════ STORIES ═════════════
  const NEW_DAYS = 21;
  function isNewStory(s) {
    if (prog.read[s.id]) return false;
    const added = new Date(s.added + 'T00:00:00');
    return (Date.now() - added) / 86400e3 <= NEW_DAYS;
  }
  let filter = 'all', charFilter = '', page = 0, curStory = null;
  const lang = () => (typeof settings !== 'undefined' && settings.language) || 'both';
  window.renderStories = function () {
    const el = document.getElementById('view-stories');
    const src = window.KIDS_STORIES || [];
    const all = src.slice().sort((a, b) => b.added.localeCompare(a.added) || src.indexOf(b) - src.indexOf(a));   // newest first
    const s = all.find(x => x.id === state.kids);
    if (!s) {
      const inEpic = all.filter(x => filter === 'all' || x.epic === filter);
      const counts = {};
      inEpic.forEach(x => (x.chars || []).forEach(c => { counts[c] = (counts[c] || 0) + 1; }));
      const chars = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));
      if (charFilter && !counts[charFilter]) charFilter = '';
      const list = inEpic.filter(x => !charFilter || (x.chars || []).includes(charFilter));
      el.innerHTML = `<div class="kz">
        <button class="kz-back" onclick="openKids()">‹ Kids Corner</button>
        <div class="kz-hero"><span class="kz-float">📖</span><h2>Stories</h2><p class="te">కథలు · a new story every day</p></div>
        <div class="kz-filter" data-noswipe>${[['all', 'All'], ['Ramayana', 'Rāmāyaṇa'], ['Mahabharata', 'Mahābhārata']].map(([k, t]) =>
          `<button class="${filter === k ? 'on' : ''}" onclick="kzFilter('${k}')">${t}</button>`).join('')}</div>
        <div class="kz-filter kz-chars" data-noswipe><button class="${charFilter ? '' : 'on'}" onclick="kzChar('')">All characters</button>${chars.map(c =>
          `<button class="${charFilter === c ? 'on' : ''}" onclick="kzChar('${c.replace(/'/g, "\\'")}')">${c} <small>${counts[c]}</small></button>`).join('')}</div>
        <p class="kz-count">${list.length} ${list.length === 1 ? 'story' : 'stories'}${charFilter ? ` about ${charFilter}` : ''}</p>
        ${list.map(x => `<button class="kz-story" onclick="openStories('${x.id}')">${kidsScene(x.cover || x.pages[0].scene)}
          <div class="meta"><h3>${esc(x.title.en)}${isNewStory(x) ? '<span class="kz-badge">NEW</span>' : ''}<span class="te">${x.title.te}</span></h3>
          <p>${x.epic === 'Ramayana' ? 'Rāmāyaṇa' : 'Mahābhārata'} · ${x.pages.length} pages${prog.read[x.id] ? ' · read ✓' : ''}</p>${x.chars ? `<p class="kz-who">${x.chars.join(', ')}</p>` : ''}</div></button>`).join('') || '<p>No stories yet.</p>'}
      </div>`;
      const on = el.querySelector('.kz-chars .on');
      if (on) { const row = on.parentElement; row.scrollLeft = Math.max(0, on.offsetLeft - row.offsetLeft - (row.clientWidth - on.offsetWidth) / 2); }
      return;
    }
    if (curStory !== s.id) { curStory = s.id; page = 0; }
    page = Math.min(page, s.pages.length - 1);
    if (!prog.read[s.id]) { prog.read[s.id] = new Date().toISOString().slice(0, 10); save(prog); }
    const L = lang(), P = s.pages[page], last = page === s.pages.length - 1;
    const text = (en, te) => (L === 'en' ? `<div class="txt">${en}</div>` : L === 'te' ? `<div class="txt te">${te}</div>` : `<div class="txt te">${te}</div><div class="txt">${en}</div>`);
    const idx = all.indexOf(s), next = all[idx + 1];
    el.innerHTML = `<div class="kz kz-reader" id="kz-reader" data-noswipe>
      <div style="display:flex;justify-content:space-between;align-items:center"><button class="kz-back" onclick="openStories('')">‹ All stories</button>
      <div class="kz-langs">${[['en', 'EN'], ['both', 'Both'], ['te', 'తెలుగు']].map(([k, t]) => `<button class="${L === k ? 'on' : ''}" onclick="setLanguage('${k}');renderStories()">${t}</button>`).join('')}</div></div>
      <div class="scene">${kidsScene(P.scene)}</div>
      <div class="ttl">${L === 'en' ? esc(s.title.en) : s.title.te}${L === 'both' ? ` <span style="font-weight:400;font-size:1rem;color:var(--fg3)">${esc(s.title.en)}</span>` : ''}</div>
      <div class="pg">Page ${page + 1} of ${s.pages.length}</div>
      ${text(P.en, P.te)}
      ${last ? `<div class="moral"><b>${L === 'en' ? 'The lesson' : L === 'te' ? 'నీతి' : 'నీతి · The lesson'}</b>${L !== 'en' ? `<div class="te" style="font-size:1.05rem">${s.moral.te}</div>` : ''}${L !== 'te' ? `<div>${esc(s.moral.en)}</div>` : ''}</div>` : ''}
      <div class="nav">
        <button class="kz-btn soft" ${page === 0 ? 'disabled style="opacity:.4"' : ''} onclick="kzPage(-1)">‹ Back</button>
        <div class="dots">${s.pages.map((_, i) => `<i class="${i === page ? 'on' : ''}"></i>`).join('')}</div>
        ${last ? (next ? `<button class="kz-btn" onclick="openStories('${next.id}')">Next story ›</button>` : `<button class="kz-btn" onclick="openStories('')">All stories</button>`)
               : `<button class="kz-btn" onclick="kzPage(1)">Next ›</button>`}
      </div></div>`;
    // Swipe left = next page, swipe right = previous page (or back to the list on page 1)
    const r = document.getElementById('kz-reader');
    let x0 = null, y0 = 0;
    r.addEventListener('touchstart', e => { if (e.touches.length === 1) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; } }, { passive: true });
    r.addEventListener('touchend', e => {
      if (x0 === null) return; const t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0; x0 = null;
      if (Math.abs(dx) < 70 || Math.abs(dy) > Math.abs(dx) * 0.6) return;
      if (dx < 0 && !last) kzPage(1); else if (dx > 0) { if (page > 0) kzPage(-1); else goBack(); }
    }, { passive: true });
  };
  window.kzFilter = f => { filter = f; renderStories(); };
  window.kzChar = c => { charFilter = c; renderStories(); };
  window.kzPage = d => { page = Math.max(0, page + d); renderStories(); document.getElementById('main').scrollTop = 0; };

  // ═════════════ SCENE KIT (simple illustrations for stories) ═════════════
  // A scene is { bg: 'forest'|'sea'|'shore'|'palace'|'ashram'|'night'|'mountain'|'sky'|'court'|'river'|'village',
  //              props: [[name, x, y, scale, opts], ...] }  — x,y = where the prop stands (bottom centre) in a 400×220 picture.
  const SKY = { day: ['#bfe3f5', '#fdf3dc'], dusk: ['#f6b57a', '#fde3c1'], night: ['#0d1b3a', '#2c3e6b'] };
  function sky(k) { const [a, b] = SKY[k]; return `<defs><linearGradient id="kzsky-${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="400" height="220" fill="url(#kzsky-${k})"/>`; }
  const hills = (c1, c2) => `<path d="M0 160 Q60 125 130 150 T260 140 T400 150 V220 H0Z" fill="${c1}"/><path d="M0 185 Q90 160 200 178 T400 172 V220 H0Z" fill="${c2}"/>`;
  const BG = {
    forest: () => sky('day') + `<g fill="#6aa86b" opacity=".55">${[20, 70, 330, 380].map(x => `<circle cx="${x}" cy="120" r="34"/><rect x="${x - 4}" y="130" width="8" height="40" fill="#7a5a3a"/>`).join('')}</g>` + hills('#8cc47a', '#6fae5f'),
    ashram: () => BG.forest() + `<g transform="translate(330,178)"><path d="M-34 0 V-30 H34 V0Z" fill="#c9a26b"/><path d="M-44 -28 L0 -62 L44 -28Z" fill="#b0763a"/><rect x="-8" y="-20" width="16" height="20" fill="#5a3a1a"/></g>`,
    sea: () => sky('day') + `<rect y="120" width="400" height="100" fill="#3f8fc4"/><g stroke="#cfe9f7" stroke-width="2" fill="none" opacity=".7">${[135, 155, 178, 200].map((y, i) => `<path d="M${10 + i * 15} ${y} q15 -6 30 0 t30 0 M${200 + i * 10} ${y + 6} q15 -6 30 0 t30 0"/>`).join('')}</g>`,
    shore: () => sky('day') + `<rect y="112" width="400" height="60" fill="#3f8fc4"/><g stroke="#cfe9f7" stroke-width="2" fill="none" opacity=".7"><path d="M20 128 q15 -6 30 0 t30 0 M220 140 q15 -6 30 0 t30 0 M120 150 q15 -6 30 0 t30 0"/></g><path d="M0 160 Q200 140 400 165 V220 H0Z" fill="#ead39c"/>`,
    sky: () => sky('day') + `<rect y="170" width="400" height="50" fill="#3f8fc4"/>`,
    night: () => sky('night') + `<g fill="#fff">${[[40, 30], [120, 60], [210, 25], [300, 50], [360, 20], [80, 90], [260, 95]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6"/>`).join('')}</g>` + hills('#1d2f55', '#15233f'),
    mountain: () => sky('day') + `<path d="M-10 190 L90 70 L190 190Z" fill="#8a8fa8"/><path d="M90 70 L70 95 L85 92 L95 100 L110 93Z" fill="#fff"/><path d="M150 190 L270 50 L400 190Z" fill="#7a7f99"/><path d="M270 50 L248 78 L264 74 L276 84 L292 76Z" fill="#fff"/>` + hills('#8cc47a', '#6fae5f'),
    palace: () => sky('dusk') + `<g fill="#e8c27a"><rect x="110" y="90" width="180" height="90"/><rect x="90" y="120" width="30" height="60"/><rect x="280" y="120" width="30" height="60"/></g><g fill="#d89a3a"><path d="M150 90 Q200 30 250 90Z"/><path d="M88 120 Q105 92 122 120Z"/><path d="M278 120 Q295 92 312 120Z"/></g><rect x="185" y="140" width="30" height="40" rx="15" fill="#7a4a1a"/><rect y="180" width="400" height="40" fill="#c9a26b"/>`,
    court: () => `<rect width="400" height="220" fill="#7a2a1a"/><g fill="#c9952a">${[30, 110, 290, 370].map(x => `<rect x="${x - 8}" y="20" width="16" height="170"/>`).join('')}</g><path d="M0 20 H400 V34 H0Z" fill="#c9952a"/><rect y="185" width="400" height="35" fill="#5a1a10"/><path d="M150 190 V120 Q200 95 250 120 V190Z" fill="#a8392a"/>`,
    river: () => sky('day') + hills('#8cc47a', '#6fae5f') + `<path d="M0 200 Q120 170 200 185 T400 175 V205 Q280 200 200 210 T0 220Z" fill="#4a9bd0"/>`,
    village: () => BG.forest() + `<g transform="translate(90,178)"><path d="M-26 0 V-24 H26 V0Z" fill="#e2c49a"/><path d="M-34 -22 L0 -48 L34 -22Z" fill="#a8622a"/></g><g transform="translate(300,180)"><path d="M-22 0 V-20 H22 V0Z" fill="#e2c49a"/><path d="M-30 -18 L0 -40 L30 -18Z" fill="#a8622a"/></g>`,
  };
  const SKIN = { fair: '#e8b88a', wheat: '#c98a5a', dark: '#8a5a3a', blue: '#4a78b8' };
  const PROPS = {
    sun: () => `<circle cx="0" cy="-30" r="18" fill="#ffcf3f"/><g stroke="#ffcf3f" stroke-width="3">${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="${Math.cos(a * Math.PI / 180) * 24}" y1="${-30 + Math.sin(a * Math.PI / 180) * 24}" x2="${Math.cos(a * Math.PI / 180) * 31}" y2="${-30 + Math.sin(a * Math.PI / 180) * 31}"/>`).join('')}</g>`,
    moon: () => `<path d="M8 -50 A22 22 0 1 0 8 -6 A17 17 0 1 1 8 -50Z" fill="#fff4c2"/>`,
    cloud: () => `<g fill="#fff" opacity=".95"><circle cx="-16" cy="-14" r="12"/><circle cx="0" cy="-20" r="15"/><circle cx="17" cy="-13" r="11"/><rect x="-28" y="-14" width="56" height="12" rx="6"/></g>`,
    tree: () => `<rect x="-6" y="-46" width="12" height="46" fill="#7a5230"/><circle cx="0" cy="-62" r="26" fill="#4f9d4f"/><circle cx="-20" cy="-50" r="18" fill="#5aab58"/><circle cx="20" cy="-50" r="18" fill="#5aab58"/>`,
    palm: () => `<path d="M-3 0 Q4 -40 0 -80 L6 -80 Q10 -40 5 0Z" fill="#8a6a3a"/><g fill="#4f9d4f">${[-60, -20, 20, 60, 100, 140].map(a => `<ellipse cx="0" cy="-80" rx="34" ry="7" transform="rotate(${a} 0 -80) translate(26 0)"/>`).join('')}</g>`,
    stones: () => `<g><ellipse cx="-22" cy="-10" rx="22" ry="11" fill="#9a9a9a"/><ellipse cx="18" cy="-12" rx="24" ry="12" fill="#8a8a8a"/><ellipse cx="-2" cy="-26" rx="20" ry="10" fill="#a8a8a8"/></g><g fill="#7a2a1a" font-size="8" font-family="Noto Sans Telugu,sans-serif" text-anchor="middle"><text x="-22" y="-7">శ్రీరామ</text><text x="18" y="-9">శ్రీరామ</text><text x="-2" y="-23">శ్రీరామ</text></g>`,
    rock: () => `<path d="M-30 0 Q-28 -26 -6 -30 Q20 -34 30 -10 L32 0Z" fill="#8a8a8a"/><path d="M-10 -26 Q4 -30 14 -24" stroke="#b0b0b0" stroke-width="3" fill="none"/>`,
    squirrel: () => `<path d="M10 -6 Q40 -10 34 -40 Q30 -58 16 -50 Q28 -40 18 -24Z" fill="#a8723a"/><ellipse cx="-2" cy="-12" rx="16" ry="11" fill="#b8823f"/><circle cx="-16" cy="-22" r="8" fill="#b8823f"/><circle cx="-19" cy="-24" r="1.6" fill="#222"/><path d="M-14 -29 l2 -5 l3 5Z" fill="#a8723a"/><g stroke="#f4e2c0" stroke-width="1.6"><path d="M-8 -20 Q0 -23 8 -18"/><path d="M-8 -16 Q0 -19 9 -14"/><path d="M-8 -12 Q0 -15 9 -10"/></g>`,
    monkey: (o = {}) => `<g fill="${o.color || '#9a6a3a'}"><path d="M14 -18 Q34 -24 30 -48" stroke="${o.color || '#9a6a3a'}" stroke-width="4" fill="none"/><ellipse cx="0" cy="-20" rx="14" ry="18"/><circle cx="0" cy="-46" r="12"/><circle cx="-12" cy="-48" r="5"/><circle cx="12" cy="-48" r="5"/></g><ellipse cx="0" cy="-43" rx="8" ry="7" fill="#e8c49a"/><circle cx="-3" cy="-46" r="1.4" fill="#222"/><circle cx="3" cy="-46" r="1.4" fill="#222"/>${o.stone ? '<ellipse cx="0" cy="-66" rx="16" ry="8" fill="#9a9a9a"/>' : ''}`,
    hanuman: () => `<g transform="rotate(-18)"><path d="M-30 -30 Q-60 -40 -70 -20" stroke="#d9772a" stroke-width="5" fill="none"/><ellipse cx="0" cy="-30" rx="30" ry="13" fill="#d9772a"/><circle cx="34" cy="-36" r="12" fill="#d9772a"/><ellipse cx="38" cy="-34" rx="7" ry="6" fill="#f2c49a"/><circle cx="37" cy="-37" r="1.4" fill="#222"/><path d="M26 -48 L34 -58 L42 -48Z" fill="#ffcf3f"/><path d="M10 -40 L40 -62" stroke="#d9772a" stroke-width="6" stroke-linecap="round"/><circle cx="46" cy="-66" r="8" fill="#c9952a"/><path d="M-6 -20 L-30 -6" stroke="#d9772a" stroke-width="6" stroke-linecap="round"/></g><g stroke="#fff" stroke-width="2" opacity=".8"><line x1="-90" y1="-34" x2="-60" y2="-34"/><line x1="-96" y1="-22" x2="-62" y2="-22"/><line x1="-86" y1="-46" x2="-62" y2="-46"/></g>`,
    bear: () => `<g fill="#4a3a2a"><ellipse cx="0" cy="-24" rx="20" ry="24"/><circle cx="0" cy="-56" r="15"/><circle cx="-12" cy="-68" r="5"/><circle cx="12" cy="-68" r="5"/></g><ellipse cx="0" cy="-52" rx="8" ry="6" fill="#8a6a4a"/><circle cx="-5" cy="-59" r="1.5" fill="#fff"/><circle cx="5" cy="-59" r="1.5" fill="#fff"/><path d="M-8 -44 Q0 -34 8 -44" stroke="#ddd" stroke-width="2" fill="none"/>`,
    person: (o = {}) => {
      const skin = SKIN[o.skin] || SKIN.wheat, cloth = o.cloth || '#e8a23a';
      return `<path d="M-16 0 L-12 -40 Q0 -46 12 -40 L16 0Z" fill="${cloth}"/><path d="M-12 -40 Q0 -46 12 -40 L10 -26 Q0 -30 -10 -26Z" fill="${o.top || skin}"/>
        <path d="M-12 -38 L-20 -16" stroke="${skin}" stroke-width="5" stroke-linecap="round"/><path d="M12 -38 L${o.raise ? '24 -56' : '20 -16'}" stroke="${skin}" stroke-width="5" stroke-linecap="round"/>
        <circle cx="0" cy="-52" r="10" fill="${skin}"/><circle cx="-3.5" cy="-53" r="1.2" fill="#222"/><circle cx="3.5" cy="-53" r="1.2" fill="#222"/>
        ${o.female ? `<circle cx="0" cy="-54" r="11" fill="${o.hair || '#222'}"/><circle cx="0" cy="-52" r="9.5" fill="${skin}"/><circle cx="-3.5" cy="-53" r="1.2" fill="#222"/><circle cx="3.5" cy="-53" r="1.2" fill="#222"/><circle cx="9" cy="-60" r="5" fill="${o.hair || '#222'}"/><circle cx="12" cy="-63" r="2.4" fill="#f4f4f4"/><path d="M-12 -40 L12 -4" stroke="${o.pallu || '#c0392b'}" stroke-width="7" opacity=".85"/>` : ''}
        ${o.crown ? '<path d="M-9 -60 L-6 -72 L-2 -64 L0 -74 L2 -64 L6 -72 L9 -60Z" fill="#f0c040"/>' : (o.female ? '' : `<path d="M-10 -55 Q0 -68 10 -55 Q6 -62 0 -62 Q-6 -62 -10 -55Z" fill="${o.hair || '#222'}"/>`)}
        ${o.beard ? `<path d="M-8 -48 Q0 -30 8 -48Z" fill="#eee"/>` : ''}${o.tilak ? '<line x1="0" y1="-60" x2="0" y2="-56" stroke="#d33" stroke-width="1.6"/>' : ''}`;
    },
    archer: (o = {}) => PROPS.person(Object.assign({ cloth: '#3a6ab0' }, o)) + `<path d="M22 -78 Q46 -40 22 -6" stroke="#7a4a1a" stroke-width="3" fill="none"/><line x1="22" y1="-78" x2="22" y2="-6" stroke="#ccc" stroke-width="1"/><line x1="4" y1="-42" x2="60" y2="-42" stroke="#5a3a1a" stroke-width="2"/><path d="M60 -45 L68 -42 L60 -39Z" fill="#888"/>`,
    bow: () => `<path d="M0 -60 Q26 -30 0 0" stroke="#7a4a1a" stroke-width="4" fill="none"/><line x1="0" y1="-60" x2="0" y2="0" stroke="#ccc"/>`,
    arrow: () => `<line x1="-30" y1="-10" x2="26" y2="-10" stroke="#5a3a1a" stroke-width="2.5"/><path d="M26 -14 L36 -10 L26 -6Z" fill="#888"/><path d="M-30 -10 l-8 -6 M-30 -10 l-8 6" stroke="#c33" stroke-width="2"/>`,
    targetTree: () => PROPS.tree() + `<line x1="16" y1="-52" x2="16" y2="-40" stroke="#5a3a1a"/><g transform="translate(16,-34)"><ellipse cx="0" cy="0" rx="10" ry="6" fill="#c9952a"/><circle cx="8" cy="-4" r="4.5" fill="#c9952a"/><circle cx="9.5" cy="-5" r="1.6" fill="#c33"/><path d="M12 -4 L17 -3 L12 -1Z" fill="#a86a1a"/></g>`,
    bird: (o = {}) => `<ellipse cx="0" cy="-8" rx="11" ry="7" fill="${o.color || '#5a5a8a'}"/><circle cx="9" cy="-14" r="5" fill="${o.color || '#5a5a8a'}"/><circle cx="10.5" cy="-15" r="1.2" fill="#fff"/><path d="M14 -14 L20 -12 L14 -11Z" fill="#e0a020"/><path d="M-4 -12 Q-14 -26 -20 -14Z" fill="${o.wing || '#8a8ac0'}"/>`,
    eagle: () => `<path d="M-60 -40 Q-30 -60 0 -36 Q30 -60 60 -40 Q30 -44 10 -26 L-10 -26 Q-30 -44 -60 -40Z" fill="#7a5a3a"/><circle cx="0" cy="-34" r="8" fill="#e8e0d0"/><path d="M6 -34 L14 -31 L6 -29Z" fill="#e0a020"/>`,
    deer: () => `<ellipse cx="0" cy="-26" rx="20" ry="10" fill="#d9a050"/><g stroke="#c08a40" stroke-width="3"><line x1="-12" y1="-18" x2="-14" y2="0"/><line x1="-4" y1="-18" x2="-4" y2="0"/><line x1="8" y1="-18" x2="8" y2="0"/><line x1="14" y1="-18" x2="16" y2="0"/></g><path d="M16 -30 L24 -46" stroke="#d9a050" stroke-width="6"/><ellipse cx="27" cy="-48" rx="7" ry="5" fill="#d9a050"/><g fill="#fff" opacity=".8"><circle cx="-6" cy="-28" r="2"/><circle cx="4" cy="-30" r="2"/><circle cx="-12" cy="-24" r="2"/></g><path d="M24 -52 l-4 -10 M28 -52 l4 -10" stroke="#8a6a3a" stroke-width="2"/>`,
    lotus: () => `<g fill="#f08aa8"><ellipse cx="0" cy="-14" rx="6" ry="14"/><ellipse cx="-10" cy="-10" rx="6" ry="12" transform="rotate(-30 -10 -10)"/><ellipse cx="10" cy="-10" rx="6" ry="12" transform="rotate(30 10 -10)"/></g><ellipse cx="0" cy="0" rx="22" ry="5" fill="#4f9d4f"/>`,
    fire: () => `<path d="M-14 0 Q-18 -24 0 -40 Q4 -24 14 -30 Q20 -14 14 0Z" fill="#f2a33a"/><path d="M-6 0 Q-8 -14 2 -24 Q4 -12 8 -14 Q10 -6 6 0Z" fill="#ffd84a"/><rect x="-18" y="-2" width="36" height="5" fill="#7a4a1a"/>`,
    hut: () => `<path d="M-34 0 V-30 H34 V0Z" fill="#c9a26b"/><path d="M-44 -28 L0 -62 L44 -28Z" fill="#b0763a"/><rect x="-8" y="-20" width="16" height="20" fill="#5a3a1a"/>`,
    boat: () => `<path d="M-40 -10 H40 L28 4 H-28Z" fill="#8a5a2a"/><line x1="0" y1="-10" x2="0" y2="-60" stroke="#5a3a1a" stroke-width="3"/><path d="M2 -58 L32 -16 H2Z" fill="#f4ead2"/>`,
    lanka: () => `<path d="M-70 0 Q-60 -20 -30 -22 Q0 -40 30 -22 Q60 -20 70 0Z" fill="#6fae5f"/><g fill="#f0c040"><rect x="-30" y="-52" width="60" height="30"/><rect x="-42" y="-40" width="14" height="18"/><rect x="28" y="-40" width="14" height="18"/></g><g fill="#d89a3a"><path d="M-18 -52 Q0 -76 18 -52Z"/><path d="M-43 -40 Q-35 -52 -27 -40Z"/><path d="M27 -40 Q35 -52 43 -40Z"/></g>`,
    pot: () => `<path d="M-16 0 Q-22 -16 -12 -26 L-8 -32 H8 L12 -26 Q22 -16 16 0Z" fill="#b0603a"/><rect x="-10" y="-36" width="20" height="5" rx="2" fill="#8a4a2a"/>`,
    flowers: () => `<g>${[-20, 0, 20].map((x, i) => `<line x1="${x}" y1="0" x2="${x}" y2="-18" stroke="#4f9d4f" stroke-width="2"/><circle cx="${x}" cy="-20" r="6" fill="${['#f08aa8', '#ffcf3f', '#f2a33a'][i]}"/>`).join('')}</g>`,
    mace: () => `<line x1="0" y1="0" x2="0" y2="-40" stroke="#7a5a2a" stroke-width="4"/><circle cx="0" cy="-48" r="11" fill="#c9952a"/>`,
    crown: () => `<path d="M-16 0 L-12 -20 L-4 -10 L0 -24 L4 -10 L12 -20 L16 0Z" fill="#f0c040"/>`,
    basket: (o = {}) => `${o.glow !== false ? '<circle cx="0" cy="-22" r="26" fill="#ffd84a" opacity=".35"/>' : ''}<path d="M-34 -14 Q0 6 34 -14 L30 0 Q0 12 -30 0Z" fill="#b8823f"/><g stroke="#8a5a2a" stroke-width="1.5"><path d="M-26 -10 L-24 2 M-12 -6 L-11 6 M0 -5 L0 7 M12 -6 L11 6 M26 -10 L24 2"/></g><circle cx="0" cy="-20" r="9" fill="${SKIN.wheat}"/><circle cx="-3" cy="-21" r="1" fill="#222"/><circle cx="3" cy="-21" r="1" fill="#222"/><circle cx="-9" cy="-18" r="2.4" fill="#f0c040"/><circle cx="9" cy="-18" r="2.4" fill="#f0c040"/><path d="M-12 -12 Q0 -16 12 -12 L12 -8 Q0 -12 -12 -8Z" fill="#f0c040"/>`,
    elephant: () => `<ellipse cx="0" cy="-40" rx="42" ry="26" fill="#8f8f9a"/><g fill="#8f8f9a"><rect x="-32" y="-24" width="13" height="24" rx="4"/><rect x="-10" y="-24" width="13" height="24" rx="4"/><rect x="14" y="-24" width="13" height="24" rx="4"/></g><circle cx="40" cy="-54" r="20" fill="#9a9aa5"/><ellipse cx="30" cy="-52" rx="13" ry="17" fill="#80808c"/><path d="M54 -48 Q66 -30 58 -10" stroke="#9a9aa5" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="48" cy="-60" r="2" fill="#222"/><path d="M50 -44 L60 -40" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M-42 -44 L-50 -30" stroke="#8f8f9a" stroke-width="3"/>`,
    dog: (o = {}) => `<ellipse cx="0" cy="-20" rx="20" ry="10" fill="#c8a070"/><g stroke="#c8a070" stroke-width="4"><line x1="-14" y1="-14" x2="-14" y2="0"/><line x1="-4" y1="-14" x2="-4" y2="0"/><line x1="8" y1="-14" x2="8" y2="0"/><line x1="14" y1="-14" x2="15" y2="0"/></g><path d="M-20 -22 Q-30 -30 -28 -38" stroke="#c8a070" stroke-width="3" fill="none"/><circle cx="22" cy="-30" r="9" fill="#c8a070"/><path d="M18 -38 L14 -26 L20 -30Z" fill="#8a6a4a"/><ellipse cx="30" cy="-28" rx="5" ry="3.5" fill="#c8a070"/><circle cx="25" cy="-32" r="1.3" fill="#222"/>${o.arrows ? '<g stroke="#5a3a1a" stroke-width="1.5"><line x1="30" y1="-28" x2="46" y2="-34"/><line x1="30" y1="-27" x2="47" y2="-28"/><line x1="30" y1="-26" x2="45" y2="-21"/></g>' : ''}`,
    sandals: () => `<rect x="-40" y="-10" width="80" height="10" rx="4" fill="#a8392a"/><g fill="#8a5a2a"><rect x="-30" y="-20" width="24" height="10" rx="5"/><rect x="6" y="-20" width="24" height="10" rx="5"/></g><g fill="#f0c040"><circle cx="-18" cy="-24" r="3.5"/><circle cx="18" cy="-24" r="3.5"/></g>`,
    throne: () => `<path d="M-30 0 V-34 H30 V0Z" fill="#c9952a"/><path d="M-26 -34 V-74 Q0 -88 26 -74 V-34Z" fill="#e0b040"/><rect x="-34" y="-38" width="68" height="8" rx="3" fill="#a8392a"/><circle cx="0" cy="-66" r="6" fill="#a8392a"/>`,
    scroll: () => `<g fill="#e8d29a" stroke="#a8823a" stroke-width="1">${[0, 1, 2, 3].map(i => `<rect x="-36" y="${-10 - i * 7}" width="72" height="6" rx="3"/>`).join('')}</g><g stroke="#8a6a3a" stroke-width="1">${[0, 1, 2, 3].map(i => `<line x1="-26" y1="${-7 - i * 7}" x2="22" y2="${-7 - i * 7}" stroke-dasharray="4 2"/>`).join('')}</g>`,
    berries: () => `<path d="M-26 -14 Q0 6 26 -14 L22 0 Q0 8 -22 0Z" fill="#a8723a"/><g fill="#c0392b">${[[-14, -16], [-6, -19], [2, -17], [10, -19], [16, -15], [-10, -11], [6, -12]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6"/>`).join('')}</g>`,
    sleeper: () => `<ellipse cx="0" cy="-22" rx="70" ry="22" fill="#5a3a5a"/><ellipse cx="-6" cy="-38" rx="34" ry="20" fill="#7a5a7a"/><circle cx="76" cy="-30" r="20" fill="#8a6a4a"/><path d="M66 -32 q4 3 8 0 M80 -32 q4 3 8 0" stroke="#222" stroke-width="2" fill="none"/><path d="M60 -46 L64 -60 L70 -48 L76 -62 L82 -48 L88 -58 L90 -44Z" fill="#c9952a"/><g fill="#fff" font-size="16" font-weight="700" font-family="sans-serif"><text x="96" y="-56">Z</text><text x="110" y="-72" font-size="12">z</text><text x="120" y="-84" font-size="9">z</text></g>`,
    drum: () => `<ellipse cx="0" cy="-30" rx="18" ry="7" fill="#e8d2a0"/><path d="M-18 -30 V-4 Q0 4 18 -4 V-30" fill="#a8392a"/><path d="M-18 -26 L18 -8 M18 -26 L-18 -8" stroke="#f0c040" stroke-width="1.5"/><line x1="10" y1="-44" x2="22" y2="-60" stroke="#7a4a1a" stroke-width="3"/>`,
    tail: () => `<path d="M-90 0 Q-60 -26 -20 -8 T50 -10 T100 -4" stroke="#9a6a3a" stroke-width="8" fill="none" stroke-linecap="round"/>`,
    ganesha: () => `<ellipse cx="0" cy="-22" rx="22" ry="22" fill="#f0a830"/><ellipse cx="0" cy="-26" rx="16" ry="14" fill="#e88a6a"/><circle cx="0" cy="-58" r="15" fill="#e88a6a"/><ellipse cx="-17" cy="-58" rx="9" ry="12" fill="#d9786a"/><ellipse cx="17" cy="-58" rx="9" ry="12" fill="#d9786a"/><path d="M2 -52 Q8 -36 -2 -30 Q-8 -28 -6 -34" stroke="#e88a6a" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="-5" cy="-62" r="1.6" fill="#222"/><circle cx="5" cy="-62" r="1.6" fill="#222"/><path d="M-9 -70 L-6 -84 L0 -76 L6 -84 L9 -70Z" fill="#f0c040"/><path d="M8 -50 L16 -46" stroke="#fff" stroke-width="3" stroke-linecap="round"/><line x1="20" y1="-30" x2="34" y2="-44" stroke="#f4f4f4" stroke-width="3" stroke-linecap="round"/>`,
    chariot: () => `<rect x="-36" y="-34" width="56" height="22" rx="4" fill="#c9952a"/><circle cx="-14" cy="-10" r="12" fill="none" stroke="#7a4a1a" stroke-width="4"/><path d="M20 -30 L44 -20" stroke="#7a4a1a" stroke-width="3"/><path d="M-30 -34 L-30 -64" stroke="#7a4a1a" stroke-width="2"/><path d="M-30 -64 L-10 -58 L-30 -52Z" fill="#d33"/>`,
    bee: () => `<ellipse cx="-6" cy="-26" rx="7" ry="11" fill="#dfefff" opacity=".9" transform="rotate(-25 -6 -26)"/><ellipse cx="6" cy="-26" rx="7" ry="11" fill="#dfefff" opacity=".9" transform="rotate(25 6 -26)"/><ellipse cx="0" cy="-12" rx="13" ry="9" fill="#f2c230"/><path d="M-5 -20 V-4 M4 -20 V-4" stroke="#222" stroke-width="3"/><circle cx="13" cy="-13" r="5.5" fill="#222"/><path d="M-13 -12 L-19 -12" stroke="#222" stroke-width="2"/>`,
    well: () => `<line x1="-24" y1="-30" x2="-24" y2="-78" stroke="#7a5230" stroke-width="5"/><line x1="24" y1="-30" x2="24" y2="-78" stroke="#7a5230" stroke-width="5"/><line x1="-30" y1="-76" x2="30" y2="-76" stroke="#7a5230" stroke-width="5"/><line x1="0" y1="-76" x2="0" y2="-40" stroke="#c9a26b" stroke-width="1.5"/><path d="M-32 -30 V0 H32 V-30Z" fill="#9a8a7a"/><g stroke="#7a6a5a" stroke-width="1.5"><line x1="-32" y1="-15" x2="32" y2="-15"/><line x1="-12" y1="-30" x2="-12" y2="-15"/><line x1="14" y1="-30" x2="14" y2="-15"/><line x1="0" y1="-15" x2="0" y2="0"/><line x1="-22" y1="-15" x2="-22" y2="0"/><line x1="22" y1="-15" x2="22" y2="0"/></g><ellipse cx="0" cy="-30" rx="32" ry="8" fill="#b0a090"/><ellipse cx="0" cy="-30" rx="25" ry="5" fill="#2a3a4a"/>`,
    demon: (o = {}) => { const c = o.color || '#6a5a9a';
      return `<rect x="-16" y="-34" width="12" height="34" rx="4" fill="${c}"/><rect x="4" y="-34" width="12" height="34" rx="4" fill="${c}"/><ellipse cx="0" cy="-58" rx="24" ry="22" fill="${c}"/><path d="M-20 -42 H20 L16 -28 H-16Z" fill="${o.cloth || '#c9952a'}"/>
        <path d="M-21 -66 L${o.raise ? '-34 -94' : '-34 -40'}" stroke="${c}" stroke-width="9" stroke-linecap="round"/><path d="M21 -66 L34 -40" stroke="${c}" stroke-width="9" stroke-linecap="round"/><circle cx="0" cy="-90" r="14" fill="${c}"/>
        ${o.bald ? '<ellipse cx="-5" cy="-99" rx="5" ry="2.5" fill="#fff" opacity=".45"/>' : '<path d="M-14 -92 Q-17 -110 0 -106 Q17 -110 14 -92 Q8 -102 0 -100 Q-8 -102 -14 -92Z" fill="#2a1a1a"/>'}<path d="M-9 -101 L-15 -116 L-3 -103Z M9 -101 L15 -116 L3 -103Z" fill="#f4ead2"/>
        <circle cx="-5" cy="-91" r="2.8" fill="#fff"/><circle cx="5" cy="-91" r="2.8" fill="#fff"/><circle cx="-5" cy="-91" r="1.3" fill="#222"/><circle cx="5" cy="-91" r="1.3" fill="#222"/><path d="M-10 -97 L-2 -95 M10 -97 L2 -95" stroke="#222" stroke-width="1.6"/><path d="M-6 -83 Q0 -80 6 -83" stroke="#222" stroke-width="1.5" fill="none"/><path d="M-5 -83 L-4 -78 L-3 -82Z M5 -83 L4 -78 L3 -82Z" fill="#fff"/>`;
    },
    ravana: (o = {}) => { const c = o.color || '#4a4a7a';
      const head = x => `<g transform="translate(${x},-90)"><circle r="8.5" fill="${c}"/><circle cx="-3" cy="-1" r="1.8" fill="#fff"/><circle cx="3" cy="-1" r="1.8" fill="#fff"/><circle cx="-3" cy="-1" r=".9" fill="#222"/><circle cx="3" cy="-1" r=".9" fill="#222"/><path d="M-3 4 Q0 6 3 4" stroke="#222" stroke-width="1" fill="none"/><path d="M-6 -7 L-4 -14 L-1 -9 L0 -15 L1 -9 L4 -14 L6 -7Z" fill="#f0c040"/></g>`;
      return `<rect x="-64" y="-84" width="143" height="8" rx="4" fill="${c}"/>${[-60, -45, -30, -15, 15, 30, 45, 60, 75].map(head).join('')}` + PROPS.demon(Object.assign({ cloth: '#f0c040' }, o, { color: c })) + '<path d="M-8 -103 L-6 -115 L-2 -107 L0 -117 L2 -107 L6 -115 L8 -103Z" fill="#f0c040"/>';
    },
    cart: () => `<line x1="44" y1="-28" x2="80" y2="-20" stroke="#7a4a1a" stroke-width="4"/><path d="M-38 -34 Q-12 -72 16 -34Z" fill="#f4ead2"/><g fill="#f0b030">${[[-20, -46], [-10, -52], [0, -44], [-14, -38], [6, -38]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4"/>`).join('')}</g><path d="M20 -34 Q16 -46 24 -52 H36 Q44 -46 40 -34Z" fill="#b0603a"/><rect x="-46" y="-36" width="92" height="12" rx="3" fill="#8a5a2a"/>
      ${[-26, 26].map(x => `<circle cx="${x}" cy="-14" r="13" fill="none" stroke="#5a3a1a" stroke-width="4"/><path d="M${x - 13} -14 H${x + 13} M${x} -27 V-1" stroke="#5a3a1a" stroke-width="2"/>`).join('')}`,
    fishWheel: () => `<ellipse cx="0" cy="-3" rx="28" ry="6" fill="#4a9bd0"/><line x1="0" y1="-4" x2="0" y2="-80" stroke="#7a5230" stroke-width="4"/><circle cx="0" cy="-86" r="13" fill="none" stroke="#c9952a" stroke-width="3"/><path d="M-13 -86 H13 M0 -99 V-73" stroke="#c9952a" stroke-width="2"/><path d="M-15 -106 Q0 -116 12 -106 Q0 -98 -15 -106Z" fill="#e0703a"/><path d="M11 -106 L20 -112 L20 -100Z" fill="#e0703a"/><circle cx="-9" cy="-107" r="1.5" fill="#222"/>`,
    rekha: () => `<path d="M-70 0 Q0 -18 70 0" stroke="#ffd84a" stroke-width="8" fill="none" opacity=".35" stroke-linecap="round"/><path d="M-70 0 Q0 -18 70 0" stroke="#f2a33a" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    boar: () => `<ellipse cx="0" cy="-24" rx="30" ry="16" fill="#5a4a3a"/><g stroke="#5a4a3a" stroke-width="5"><line x1="-18" y1="-14" x2="-18" y2="0"/><line x1="-6" y1="-12" x2="-6" y2="0"/><line x1="10" y1="-12" x2="10" y2="0"/><line x1="20" y1="-14" x2="20" y2="0"/></g><path d="M-16 -38 l4 -8 l4 7 l4 -8 l4 8 l4 -7 l4 7Z" fill="#3a2a1a"/><path d="M22 -36 Q42 -34 48 -20 L46 -14 Q32 -10 22 -14Z" fill="#6a5a4a"/><ellipse cx="47" cy="-17" rx="3" ry="4" fill="#8a6a5a"/><circle cx="34" cy="-28" r="1.8" fill="#222"/><path d="M40 -13 Q44 -22 37 -24" stroke="#f4ead2" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M26 -36 L30 -46 L34 -35Z" fill="#4a3a2a"/><path d="M-30 -26 Q-38 -30 -36 -36" stroke="#5a4a3a" stroke-width="2" fill="none"/>`,
    linga: () => `<path d="M-26 0 L-22 -10 H22 L26 0Z" fill="#8a7a6a"/><path d="M-30 -10 H30 Q36 -14 28 -17 H-28 Q-36 -14 -30 -10Z" fill="#9a8a7a"/><path d="M-12 -15 V-40 Q0 -54 12 -40 V-15Z" fill="#6a5f58"/><g stroke="#fff" stroke-width="1.8"><line x1="-8" y1="-38" x2="8" y2="-38"/><line x1="-8" y1="-34" x2="8" y2="-34"/><line x1="-8" y1="-30" x2="8" y2="-30"/></g><circle cx="0" cy="-26" r="1.8" fill="#d33"/><path d="M-13 -24 Q0 -12 13 -24" stroke="#f08aa8" stroke-width="4" fill="none" stroke-dasharray="3 2"/>`,
    peak: () => `<circle cx="0" cy="-48" r="54" fill="#ffd84a" opacity=".28"/><path d="M-50 0 L-12 -92 L4 -70 L14 -86 L50 0 L36 6 L20 -2 L4 6 L-14 -2 L-32 6Z" fill="#7a7f99"/><path d="M-12 -92 L-22 -68 L-10 -72 L0 -64 L4 -70Z M14 -86 L8 -72 L18 -74Z" fill="#fff"/><g fill="#5aab58">${[[-28, -14], [-8, -24], [14, -18], [30, -10], [-18, -40], [6, -46], [-2, -10]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="6" ry="3.5"/>`).join('')}</g><g fill="#fff59a">${[[-26, -18], [-6, -28], [16, -22], [-16, -44], [8, -50], [28, -14]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6"/>`).join('')}</g>`,
    bananas: () => `<ellipse cx="0" cy="-3" rx="28" ry="5" fill="#c9952a"/><g fill="#f2d03a" stroke="#c9a020" stroke-width="1">${[-12, 0, 12].map(x => `<path d="M${x - 10} -6 Q${x - 6} -30 ${x + 10} -28 Q${x} -24 ${x - 3} -6Z"/>`).join('')}</g><path d="M14 -6 l10 -5 M14 -6 l12 1" stroke="#d9b030" stroke-width="3" stroke-linecap="round"/>`,
    vyuha: () => `<g fill="none" stroke-width="5" stroke-dasharray="7 4">${[[90, 34, '#a8392a'], [66, 25, '#c9952a'], [42, 16, '#a8392a'], [20, 8, '#c9952a']].map(([rx, ry, c]) => `<ellipse cx="0" cy="-36" rx="${rx}" ry="${ry}" stroke="${c}"/>`).join('')}</g><g stroke="#5a3a1a" stroke-width="1.6">${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => { const x = Math.cos(a * Math.PI / 180) * 90, y = -36 + Math.sin(a * Math.PI / 180) * 34; return `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${x.toFixed(1)}" y2="${(y - 14).toFixed(1)}"/>`; }).join('')}</g><circle cx="0" cy="-36" r="5" fill="#f0c040"/>`,
    necklace: () => `<path d="M-24 -44 Q0 4 24 -44" stroke="#c9a26b" stroke-width="1" fill="none"/><g fill="#fbf6ea" stroke="#d8cfc0" stroke-width=".8">${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => { const t = i / 10; return `<circle cx="${(48 * t - 24).toFixed(1)}" cy="${(-44 * (1 - t) * (1 - t) + 8 * (1 - t) * t - 44 * t * t).toFixed(1)}" r="3.2"/>`; }).join('')}</g><circle cx="0" cy="-15" r="4" fill="#c0392b"/>`,
    glow: () => `<circle cx="0" cy="-40" r="40" fill="#ffd84a" opacity=".4"/><circle cx="0" cy="-40" r="26" fill="#fff3b0" opacity=".6"/>`,
    arrowBed: () => `<g stroke="#5a3a1a" stroke-width="2">${[-62, -54, -46, -38, -30, -22, -14, -6, 2, 10, 18, 26, 34, 42, 50, 58, 66].map((x, i) => `<line x1="${x}" y1="0" x2="${x + (i % 3 - 1) * 3}" y2="-28"/>`).join('')}</g><g fill="#c33">${[-58, -34, -10, 14, 38, 62].map(x => `<path d="M${x - 3} -2 L${x} -8 L${x + 3} -2Z"/>`).join('')}</g><ellipse cx="-4" cy="-34" rx="58" ry="8" fill="#f4ead2"/><path d="M-60 -34 Q-64 -40 -58 -42" stroke="#c98a5a" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M20 -38 L36 -48" stroke="#c98a5a" stroke-width="5" stroke-linecap="round"/><circle cx="64" cy="-40" r="10" fill="#c98a5a"/><path d="M56 -46 Q64 -54 72 -46 Q68 -52 64 -52 Q60 -52 56 -46Z" fill="#ddd"/><path d="M58 -34 Q64 -22 70 -34Z" fill="#eee"/><circle cx="61" cy="-42" r="1.2" fill="#222"/><circle cx="67" cy="-42" r="1.2" fill="#222"/>`,
    mongoose: (o = {}) => { const b = '#9a8a70', g = o.gold ? '#f0c040' : b;
      return `<path d="M-26 -14 Q-50 -28 -68 -8 Q-50 -16 -28 -6Z" fill="${b}"/><g stroke-width="4"><line x1="-20" y1="-8" x2="-22" y2="0" stroke="${b}"/><line x1="-10" y1="-6" x2="-10" y2="0" stroke="${b}"/><line x1="12" y1="-6" x2="12" y2="0" stroke="${g}"/><line x1="22" y1="-8" x2="24" y2="0" stroke="${g}"/></g><path d="M-30 -10 Q-30 -30 0 -28 V-4 Q-20 -2 -30 -10Z" fill="${b}"/><path d="M0 -28 Q26 -28 30 -18 L28 -8 Q16 -2 0 -4Z" fill="${g}"/><ellipse cx="36" cy="-22" rx="12" ry="8" fill="${g}"/><path d="M44 -26 L56 -20 L44 -16Z" fill="${g}"/><circle cx="30" cy="-29" r="3.5" fill="${g}"/><circle cx="39" cy="-25" r="1.5" fill="#222"/><circle cx="56" cy="-20" r="1.6" fill="#222"/>${o.gold ? '<g fill="#fff8c0"><circle cx="10" cy="-20" r="1.5"/><circle cx="20" cy="-14" r="1.2"/><circle cx="34" cy="-18" r="1.2"/></g>' : ''}`;
    },
    kavadi: () => { const head = x => `<circle cx="${x}" cy="-34" r="7" fill="#c98a5a"/><path d="M${x - 7} -35 Q${x} -46 ${x + 7} -35 Q${x} -40 ${x - 7} -35Z" fill="#eee"/><path d="M${x - 4} -34 h3 M${x + 1} -34 h3" stroke="#222" stroke-width="1"/>`;
      return `<line x1="-62" y1="-44" x2="62" y2="-44" stroke="#7a5230" stroke-width="4" stroke-linecap="round"/><g stroke="#8a6a3a" stroke-width="1.5">${[-48, 48].map(x => `<line x1="${x}" y1="-44" x2="${x - 13}" y2="-24"/><line x1="${x}" y1="-44" x2="${x + 13}" y2="-24"/>`).join('')}</g>${head(-48)}${head(48)}${[-48, 48].map(x => `<path d="M${x - 16} -26 H${x + 16} Q${x + 14} -6 ${x} -6 Q${x - 14} -6 ${x - 16} -26Z" fill="#b8823f"/><path d="M${x - 12} -18 H${x + 12}" stroke="#8a5a2a" stroke-width="1.5"/>`).join('')}`;
    },
    horse: (o = {}) => { const c = o.color || '#a8682a';
      return `<path d="M-30 -42 Q-46 -36 -44 -14" stroke="#4a2a1a" stroke-width="5" fill="none" stroke-linecap="round"/><g stroke="${c}" stroke-width="6" stroke-linecap="round"><line x1="-22" y1="-34" x2="-24" y2="0"/><line x1="-12" y1="-34" x2="-10" y2="0"/><line x1="14" y1="-34" x2="16" y2="0"/><line x1="24" y1="-34" x2="26" y2="0"/></g><ellipse cx="0" cy="-42" rx="32" ry="15" fill="${c}"/><path d="M18 -50 L34 -80 L46 -76 L30 -44Z" fill="${c}"/><path d="M34 -82 L56 -70 Q58 -64 52 -62 L36 -68Z" fill="${c}"/><path d="M20 -50 L33 -80 L28 -82 L16 -54Z" fill="#4a2a1a"/><circle cx="44" cy="-74" r="1.6" fill="#222"/><path d="M36 -82 L38 -90 L41 -81Z" fill="${c}"/>`;
    },
    sariPile: () => `${['#c0392b', '#3a6ab0', '#f0c040', '#4f9d4f', '#c9952a', '#7a5ab0'].map((c, i) => `<ellipse cx="0" cy="${-6 - i * 9}" rx="${46 - i * 5}" ry="7" fill="${c}"/>`).join('')}<g fill="#f4f4f4">${[[-20, -42], [-4, -46], [12, -42]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4"/>`).join('')}</g><path d="M-6 -56 Q-30 -84 -60 -62" stroke="#e84a8a" stroke-width="6" fill="none" stroke-linecap="round"/>`,
    dice: () => `<path d="M-46 0 L-34 -22 H34 L46 0Z" fill="#a8392a"/><path d="M-28 -11 H28 M0 -21 V-1" stroke="#f0c040" stroke-width="5"/><g fill="#f4ead2" stroke="#8a7a5a" stroke-width="1"><rect x="-22" y="-30" width="16" height="8" rx="2" transform="rotate(-12 -14 -26)"/><rect x="8" y="-32" width="16" height="8" rx="2" transform="rotate(10 16 -28)"/></g><g fill="#222"><circle cx="-17" cy="-25" r="1.2"/><circle cx="-11" cy="-27" r="1.2"/><circle cx="14" cy="-28" r="1.2"/><circle cx="19" cy="-27" r="1.2"/></g>`,
    blindfold: () => `<path d="M-11.5 -56 Q0 -59 11.5 -56 L11.5 -50 Q0 -53 -11.5 -50Z" fill="#4a2a6a"/><path d="M11 -54 Q17 -52 19 -44 M11 -52 Q15 -48 15 -42" stroke="#4a2a6a" stroke-width="2" fill="none"/>`, // draw at the same x, y, scale as a person to cover their eyes
    plough: (o = {}) => { const c = o.gold ? '#e0b040' : '#8a5a2a';
      return `<path d="M-46 -2 L-20 -10 L-16 -2Z" fill="#9a9a9a"/><path d="M-50 4 Q-10 -2 40 4" stroke="#7a5230" stroke-width="3" fill="none" opacity=".6"/><line x1="-22" y1="-6" x2="-40" y2="-56" stroke="${c}" stroke-width="5" stroke-linecap="round"/><line x1="-48" y1="-56" x2="-32" y2="-58" stroke="${c}" stroke-width="5" stroke-linecap="round"/><line x1="-24" y1="-10" x2="54" y2="-34" stroke="${c}" stroke-width="5" stroke-linecap="round"/><line x1="50" y1="-42" x2="58" y2="-26" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`;
    },
  };
  function kidsScene(scene) {
    scene = scene || { bg: 'forest', props: [] };
    const bg = (BG[scene.bg] || BG.forest)();
    const props = (scene.props || []).map(([name, x, y, s = 1, o]) => {
      const fn = PROPS[name]; if (!fn) return '';
      const flip = o && o.flip ? ' scale(-1,1)' : '';
      return `<g transform="translate(${x},${y}) scale(${s})${flip}">${fn(o || {})}</g>`;
    }).join('');
    return `<svg viewBox="0 0 400 220" role="img" aria-hidden="true">${bg}${props}</svg>`;
  }
  window.kidsScene = kidsScene;
  window.KIDS_SCENE_KIT = { backgrounds: Object.keys(BG), props: Object.keys(PROPS) };

  // ═════════════ NAVIGATION ═════════════
  window.openKids = () => { state.kids = ''; showView('kids'); };
  window.openTelugu = lv => { state.kids = lv || ''; showView('telugu'); };
  window.openStories = id => { state.kids = id || ''; showView('stories'); };
})();
