# Hindi — backlog

Hindi (हिन्दी) for everything in the app **except the scripture texts Hari supplied himself** — Bhagavad Gītā,
Śrī Rudram / Śiva stotrams, Viṣṇu Sahasranāmam, Hanumān Chālīsā, Lalitā, Nṛsiṃha and Rāma stotrams and the
prayer songs. Never write Hindi for those and never change them.

Hari has since supplied the Devanagari text of Viṣṇu Sahasranāmam, Rudram (Namakam, Chamakam) and Hanumān
Chālīsā himself; with the Gītā (the app's own Gītā, letter for letter — his Gītā PDF uses the old Sanskrit 99
font) they are in `hi/scripture.js` (`window.SCR_HI`) and show in Hindi mode via `HX()/SX()/TX()` in index.html.
That file is his text: the daily run never edits it. The other stotrams and songs stay as they are until he
sends their Hindi.

Already in Hindi before this file: the app screens, library tiles, Panchāṅgam, festivals (`FEST_HI`) and the
Kids Corner screens (`K()/KHI()` in kids.js), via `TT(en, te, hi)` in index.html. This backlog is for the
**book chapters and kids stories**, which are written in English + Telugu.

## Design (keep it exactly like this)

- `hi/hi.js` defines `window.HI`:
  - `HI.hash(s)` — FNV-1a 32-bit over the UTF-16 code units of the **exact** Telugu string, 8 lowercase hex chars.
  - `HI.add(map)` merges `{hash: "हिन्दी"}` into `HI.T`; `HI.addUI(map)` merges `{exactTeluguText: "हिन्दी"}` into `HI.UI`.
  - `HI.on()` — `JSON.parse(localStorage.vedic_settings||'{}').language === 'hi'`.
  - `HI.apply()` — for every entry of `SAGE_CHAPTERS, KING_CHAPTERS, RMY_CHAPTERS, MBH_CHAPTERS, VEDA_CHAPTERS,
    KIDS_STORIES` it deep-walks all Telugu strings (a string is Telugu when it has more Telugu letters than Latin
    ones — English text sometimes quotes a Telugu word). An entry is **complete** when every Telugu string has a
    translation in `HI.T`, except the lines of a `sloka` block's Telugu-lines array (Sanskrit), which are always
    written in Devanagari letter for letter with `te2dev`. Complete → each Telugu string is replaced in place by
    its Hindi. Not complete → each Telugu string is replaced by its English sibling (the nearest preceding
    non-Telugu string in the same array; for object keys `te`→`en`, `dt`→`d`, `xxxTe`→`xxx`), so an
    untranslated chapter reads fully in English — **languages never mix inside a chapter**. The same is done per
    entry for `RMY_WHO` / `MBH_WHO` name cards (te + dt → Hindi only if both are translated) and the `*_PLAN`
    objects. Complete kids stories get `story._hi = true`.
  - Every swap is recorded, so `HI.restore()` puts the Telugu back when the reader leaves Hindi; `HI.watch()`
    wraps `saveSettings` so switching language in the app applies/restores without a reload (`HI.load()` loads
    the overlays on demand).
  - A MutationObserver (started by `HI.apply()`) replaces any text node whose trimmed text is a key of `HI.UI`,
    **only inside the book views (`.rmy`) and never inside `#view-telugu`** (Learn Telugu stays Telugu; scripture
    screens are never touched). It also hides a chapter's Telugu-title line when it only repeats the English title.
- One overlay file per content file, each only calling `HI.add({...})`:
  `hi/stories/<story-id>.js`, `hi/sages/<key>.js`, `hi/kings/<key>.js`, `hi/ramayana/<file>.js`,
  `hi/mahabharata/<file>.js`, `hi/vedas/<file>.js`. A file's overlay also carries the name cards (RMY_WHO /
  MBH_WHO) its chapters use. `hi/files.js` sets `window.HI_FILES` (the list of overlays).
- `hi/ui.js` — `HI.addUI({...})` for Telugu hard-coded in the module code (sage / king / kāṇḍa / parva / book
  names and subtitles in the SAGES / KINGS / KANDAS / PARVAS / BOOKS lists, headings, "కథనం: హరి పొక్కులూరి"…).
  **Add the Hindi for every new sage or king here.**
- index.html: `hi/hi.js`, `hi/files.js`, `hi/ui.js` load before `stories.js`; in Hindi mode a small inline script
  `document.write`s a script tag for each `HI_FILES` entry; after `bookmarks.js`: `if (HI.on()) HI.apply(); HI.watch();`.
  All `hi/` files are in `SHELL` in sw.js.
- In Hindi mode every book renders with MODE `'te'` (its Telugu column now holds Hindi or English) and the
  reader's own EN/తెలుగు/Both buttons are hidden; the kids story reader uses `L = 'te'` and shows the te title in
  the list (the "Hindi coming soon" line shows only for stories without Hindi).

## Tools

- `node tools/hi_extract.js <content file> [chapter-or-story id]` — JSON `{hash: {en, te}}` of the Telugu strings
  still needing Hindi (sloka lines skipped; each paired with its English sibling), plus the overlay path to write.
  Use the id to split a very long file by chapter. Kids stories: `node tools/hi_extract.js stories.js <story-id>`.
- `node tools/hi_write.js hi/<book>/<file>.js map.json` — writes/extends the overlay from `{hash: "हिन्दी"}`,
  adds it to `hi/files.js` and to `SHELL` in sw.js.
- `node tools/hi_check.js` — loads all content + overlays, prints translated/total per book, warns about overlay
  hashes that match nothing (the source text changed — re-extract that file), checks name markup, prints **OK**.

## Quality rules

- Natural, correct, simple Hindi in Devanagari — the way Hindi-speaking families talk to each other and to
  children. Not word-for-word from Telugu; not Sanskrit-heavy.
- Standard Hindi names: राम, सीता, लक्ष्मण, हनुमान, रावण, युधिष्ठिर, अर्जुन, भीम, द्रौपदी, श्रीकृष्ण, कर्ण,
  कुंती, द्रोणाचार्य, भीष्म, दुर्योधन, गांधारी… (not Telugu forms like ధర్మరాజు → use युधिष्ठिर). Sanskrit terms
  in their usual Hindi spelling (धर्म, तपस्या, यज्ञ, आश्रम, वरदान, श्राप).
- Translate from the English and Telugu meaning faithfully — same facts, same tone, nothing added or dropped.
- Keep `{key|Text}` name markup (translate only the Text), `**bold**`, `*italic*` and any other markup exactly
  as in the source string. Keep numbers, verse references and source names.
- Never write Hindi for the scripture texts listed at the top.

## Daily run

1. Add to the end of "## Next" any story or content file that has no complete Hindi overlay and is not yet listed
   (other daily tasks add new kids stories, sages and kings every day — a new sage/king also needs `hi/ui.js`).
2. Translate about 20,000 words of Hindi from the top of "## Next" (whole stories / whole content files; a very
   long file may be split by chapter — note the progress on its line).
3. `node tools/hi_check.js` (must print OK), `node tools/check_stories.js`, `node tools/check_sages.js`,
   `node tools/check_kings.js`. Move finished items to "## Done" as `- [x] <item> — YYYY-MM-DD` (New York date).
   Bump the CACHE version in sw.js by one. Commit "Hindi: <items>" and push.

## Next
- [ ] sages/shuka.js
- [ ] sages/kanva.js
- [ ] sages/mandavya.js
- [ ] sages/pulastya.js
- [ ] sages/lomasha.js
- [ ] sages/dhaumya.js
- [ ] sages/upamanyu.js
- [ ] sages/sandipani.js
- [ ] sages/kumaras.js
- [ ] sages/aruni.js
- [ ] sages/jaimini.js
- [ ] sages/garga.js
- [ ] sages/shandilya.js
- [ ] sages/valakhilyas.js
- [ ] sages/parashara.js
- [ ] sages/mudgala.js
- [ ] sages/ribhu.js
- [ ] sages/vamadeva.js
- [ ] kings/chandragupta.js
- [ ] kings/ashoka.js
- [ ] kings/shatakarni.js
- [ ] kings/kharavela.js
- [ ] kings/samudragupta.js
- [ ] kings/vikramaditya.js
- [ ] kings/skandagupta.js
- [ ] kings/harsha.js
- [ ] kings/pulakeshin.js
- [ ] kings/narasimhavarman.js
- [ ] kings/lalitaditya.js
- [ ] kings/rajaraja.js
- [ ] kings/rajendra.js
- [ ] kings/bhoja.js
- [ ] kings/kakatiya.js
- [ ] kings/prithviraj.js
- [ ] kings/vijayanagara.js
- [ ] kings/krishnadevaraya.js
- [ ] kings/sanga.js
- [ ] kings/pratap.js
- [ ] kings/shivaji.js
- [ ] kings/kumbha.js
- [ ] ramayana/bala.js
- [ ] ramayana/ayodhya.js
- [ ] ramayana/aranya.js
- [ ] ramayana/kishkindha.js
- [ ] ramayana/sundara.js
- [ ] ramayana/yuddha.js
- [ ] ramayana/uttara.js
- [ ] mahabharata/adi.js
- [ ] mahabharata/sabha.js
- [ ] mahabharata/vana.js
- [ ] mahabharata/virata.js
- [ ] mahabharata/udyoga.js
- [ ] mahabharata/bhishma.js
- [ ] mahabharata/drona.js
- [ ] mahabharata/karna.js
- [ ] mahabharata/shalya.js
- [ ] mahabharata/sauptika.js
- [ ] mahabharata/stri.js
- [ ] mahabharata/shanti.js
- [ ] mahabharata/anushasana.js
- [ ] mahabharata/ashvamedhika.js
- [ ] mahabharata/ashramavasika.js
- [ ] mahabharata/mausala.js
- [ ] mahabharata/mahaprasthanika.js
- [ ] mahabharata/svargarohana.js
- [ ] mahabharata/harivamsha.js
- [ ] vedas/intro.js
- [ ] vedas/rig.js
- [ ] vedas/yajur.js
- [ ] vedas/sama.js
- [ ] vedas/atharva.js
- [ ] vedas/life.js
- [ ] vedas/vedanta.js
- [ ] vedas/upanishads.js
- [ ] vedas/acharyas.js
- [ ] story: nala-and-damayanti
- [ ] story: bhagiratha-brings-down-the-ganga
- [ ] story: ganga-and-king-santanu
- [ ] story: vishvamitra-becomes-brahmarshi
- [ ] story: ashtavakra-wins-the-debate
- [ ] story: mandavi-and-shrutakirti
- [ ] sages/raikva.js
- [ ] kings/ahilya.js
- [ ] story: duryodhana-in-the-hall-of-illusions
- [ ] story: the-crow-and-sita-at-chitrakuta
- [ ] story: jarasandha-and-bhimas-great-wrestle
- [ ] sages/saubhari.js
- [ ] kings/amoghavarsha.js
- [ ] story: rama-meets-parashurama
- [ ] story: kichaka-and-the-brave-sairandhri
- [ ] story: hanuman-in-the-ashoka-garden
- [ ] sages/dirghatamas.js
- [ ] kings/mihirabhoja.js
- [ ] story: shishupalas-hundred-mistakes
- [ ] story: lakshmana-learns-from-ravana
- [ ] story: arjuna-and-the-five-crocodiles
- [ ] sages/pippalada.js
- [ ] kings/lakshmibai.js
- [ ] story: sita-in-valmikis-ashrama
- [ ] story: parikshit-the-baby-saved-by-krishna
- [ ] story: rishyashringa-brings-the-rain
- [ ] sages/devala.js
- [ ] kings/vikramanka.js
- [ ] story: garuda-brings-the-nectar
- [ ] story: monkeys-raid-the-honey-garden
- [ ] story: aruni-the-student-who-became-a-dam
- [ ] sages/marici.js
- [ ] kings/vishnuvardhana.js

## Done
- [x] Hindi framework (hi/hi.js, hi/ui.js, tools) — 2026-11-12
- [x] story: squirrel-and-the-bridge — 2026-11-12
- [x] story: arjuna-and-the-birds-eye — 2026-11-12
- [x] story: hanumans-great-leap — 2026-11-12
- [x] story: karna-the-son-of-the-sun — 2026-11-12
- [x] story: karna-gives-away-his-armour — 2026-11-12
- [x] story: ekalavyas-guru-dakshina — 2026-11-12
- [x] story: ganesha-writes-the-mahabharata — 2026-11-12
- [x] story: bhishmas-promise — 2026-11-12
- [x] story: bhima-meets-hanuman — 2026-11-12
- [x] story: rama-breaks-shivas-bow — 2026-11-12
- [x] story: shabaris-berries — 2026-11-12
- [x] story: jatayu-the-brave-bird — 2026-11-12
- [x] story: kumbhakarna-the-sleeping-giant — 2026-11-12
- [x] story: bharata-and-ramas-sandals — 2026-11-12
- [x] story: hanuman-and-the-sun — 2026-11-12
- [x] story: karna-and-parashurama — 2026-11-12
- [x] story: dasharathas-four-sons — 2026-11-12
- [x] story: how-the-pandavas-were-born — 2026-11-12
- [x] story: vishvamitra-and-tataka — 2026-11-12
- [x] story: dronas-ring-in-the-well — 2026-11-12
- [x] story: ahalya-is-freed — 2026-11-12
- [x] story: pandavas-escape-the-house-of-lac — 2026-11-12
- [x] story: kaikeyis-two-boons — 2026-11-12
- [x] story: bhima-and-bakasura — 2026-11-12
- [x] story: guha-the-boatman — 2026-11-12
- [x] story: hidimba-and-ghatotkacha — 2026-11-12
- [x] story: the-golden-deer — 2026-11-12
- [x] story: arjuna-wins-draupadi — 2026-11-12
- [x] story: lakshmanas-line — 2026-11-12
- [x] story: draupadi-born-from-the-fire — 2026-11-12
- [x] story: rama-meets-hanuman-and-sugriva — 2026-11-12
- [x] story: the-akshaya-patra — 2026-11-12
- [x] story: vali-and-sugriva — 2026-11-12
- [x] story: krishna-eats-a-single-leaf — 2026-11-12
- [x] story: sampati-jatayus-brother — 2026-11-12
- [x] story: yakshas-questions-at-the-lake — 2026-11-12
- [x] story: hanuman-meets-sita — 2026-11-12
- [x] story: arjuna-and-shiva-the-hunter — 2026-11-12
- [x] story: hanuman-sets-lanka-on-fire — 2026-11-12
- [x] story: arjuna-and-urvashi — 2026-11-12
- [x] story: vibhishana-joins-rama — 2026-11-12
- [x] story: bhima-and-the-saugandhika-flowers — 2026-11-12
- [x] story: samudra-shows-the-way — 2026-11-12
- [x] story: pandavas-in-disguise-at-viratas-court — 2026-11-12
- [x] story: angadas-foot-in-ravanas-court — 2026-11-12
- [x] story: prince-uttaras-brave-ride — 2026-11-12
- [x] story: hanuman-carries-the-mountain — 2026-11-12
- [x] story: krishna-the-peace-messenger — 2026-11-12
- [x] story: indrajit-the-cloud-warrior — 2026-11-12
- [x] story: viduras-simple-meal-for-krishna — 2026-11-12
- [x] story: ravanas-ten-heads-and-brahmas-boon — 2026-11-12
- [x] story: kunti-meets-karna-by-the-river — 2026-11-15
- [x] story: the-victory-at-lanka — 2026-11-15
- [x] story: arjuna-chooses-krishna — 2026-11-15
- [x] story: sitas-return-and-the-fire — 2026-11-15
- [x] story: krishnas-song-the-gita — 2026-11-15
- [x] story: the-pushpaka-flight-home — 2026-11-15
- [x] story: barbarika-the-boy-with-three-arrows — 2026-11-15
- [x] story: ramas-coronation — 2026-11-15
- [x] story: abhimanyu-learns-in-the-womb — 2026-11-15
- [x] story: hanuman-opens-his-heart — 2026-11-15
- [x] story: abhimanyu-and-the-chakravyuha — 2026-11-15
- [x] story: lava-and-kusha-sing-the-ramayana — 2026-11-15
- [x] story: bhishma-on-the-bed-of-arrows — 2026-11-15
- [x] story: how-valmiki-became-a-poet — 2026-11-15
- [x] story: ghatotkacha-saves-the-pandavas — 2026-11-15
- [x] story: shravana-kumara-and-dasharatha — 2026-11-15
- [x] story: the-mongoose-with-the-golden-side — 2026-11-15
- [x] story: hanuman-and-kalanemi — 2026-11-15
- [x] story: yudhishthira-and-the-faithful-dog — 2026-11-15
- [x] story: shurpanakha-comes-to-panchavati — 2026-11-15
- [x] story: krishna-and-sudamas-handful-of-rice — 2026-11-15
- [x] story: sumitras-blessing-to-lakshmana — 2026-11-15
- [x] story: shikhandis-story — 2026-11-15
- [x] story: urmilas-long-sleep — 2026-11-15
- [x] story: sahadeva-the-wise-youngest-brother — 2026-11-15
- [x] story: mandodaris-advice — 2026-11-15
- [x] story: nakula-the-most-handsome-pandava — 2026-11-15
- [x] story: taras-wise-words — 2026-11-15
- [x] story: shakuni-and-the-game-of-dice — 2026-11-15
- [x] story: jambavan-the-oldest-bear — 2026-11-15
- [x] story: draupadis-endless-sari — 2026-11-15
- [x] story: nala-and-nila-the-floating-stone-engineers — 2026-11-15
- [x] story: gandharis-blindfold — 2026-11-15
- [x] story: hanuman-and-surasa — 2026-11-15
- [x] story: sanjaya-who-saw-the-war-from-afar — 2026-11-15
- [x] story: sita-is-found-in-the-furrow — 2026-11-15
- [x] story: ashvatthama-and-the-jewel — 2026-11-15
- [x] story: ramas-bridge-is-blessed-rameshvaram — 2026-11-15
- [x] story: ulupi-and-arjunas-journey — 2026-11-15
- [x] story: hanuman-tests-arjunas-arrow-bridge — 2026-11-15
- [x] story: kausalya-waits-for-rama — 2026-11-15
- [x] story: babhruvahana-meets-his-father — 2026-11-15
- [x] story: satyavati-and-vyasas-birth — 2026-11-15
- [x] story: kabandha-the-headless-giant — 2026-11-15
- [x] story: drona-and-his-friend-drupada — 2026-11-15
- [x] story: agastyas-gift-of-weapons — 2026-11-15
- [x] story: bhima-and-the-poisoned-sweets — 2026-11-15
- [x] story: shatananda-welcomes-rama — 2026-11-15
- [x] story: kripa-and-kripi-the-twins — 2026-11-15
- [x] story: bharadvajas-feast-for-bharata — 2026-11-15
- [x] story: vidura-born-to-be-wise — 2026-11-15
- [x] story: sugriva-forgets-his-promise — 2026-11-15
- [x] story: uttanka-and-the-queens-earrings — 2026-11-15
- [x] story: hanuman-finds-sitas-jewels — 2026-11-15
- [x] story: savitri-and-satyavan — 2026-11-15
- [x] story: ravana-lifts-mount-kailasa — 2026-11-15
- [x] sages/vishvamitra.js — 2026-11-16
- [x] sages/vasishtha.js — 2026-11-16
- [x] sages/shukracharya.js — 2026-11-17
- [x] sages/agastya.js — 2026-11-17
- [x] sages/bhrigu.js — 2026-11-17
- [x] sages/brihaspati.js — 2026-11-18
- [x] sages/narada.js — 2026-11-18
- [x] sages/vyasa.js — 2026-11-18
- [x] sages/valmiki.js — 2026-11-19
- [x] sages/durvasa.js — 2026-11-19
- [x] sages/atri.js — 2026-11-19
- [x] sages/gautama.js — 2026-11-20
- [x] sages/bharadvaja.js — 2026-11-20
- [x] sages/markandeya.js — 2026-11-20
- [x] sages/dadhichi.js — 2026-11-21
- [x] sages/kapila.js — 2026-11-21
- [x] sages/jamadagni.js — 2026-11-21
- [x] sages/yajnavalkya.js — 2026-11-21
- [x] sages/angiras.js — 2026-11-21
- [x] sages/kashyapa.js — 2026-11-22
- [x] sages/ashtavakra.js — 2026-11-22
- [x] sages/rishyashringa.js — 2026-11-22
- [x] sages/cyavana.js — 2026-11-22
- [x] sages/uttanka.js — 2026-11-22
