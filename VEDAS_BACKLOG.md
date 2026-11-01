# The Vedas — backlog

A "Vedas / వేదాలు" tile: six books, each a set of chapters in the same paged reader as the Rāmāyaṇa
(`vedas.js`, one file per book in `vedas/`). A daily scheduled task writes **one book per day**, starting
Wednesday 2026-10-21, taking the first unchecked book under "Next".

## What Hari asked for (read this first)

- **Easy to understand, like the Rāmāyaṇa.** Many readers — Hari included — do not know what the Vedas are,
  why they matter, or what relevance they have today. Write for that reader: a curious adult or a child of
  10+, who has heard the word "Veda" but nothing more. Explain every Sanskrit term the first time it is used.
- **No verses.** Do not use `sloka` blocks, and do not quote Sanskrit lines. Explain ideas in plain words.
  A famous short phrase may be named inside a sentence with its meaning when it really helps
  (e.g. "Satyameva Jayate — truth alone wins"), at most once or twice a book.
- **Tell it through stories and pictures-in-words** wherever possible: the Upaniṣad stories, the people who
  preserved the Vedas, what happens at a real yajña or upanayanam, a family chanting at dawn.
- English and Telugu for every block. Telugu must be natural and simple, the way Telugu families speak.
- Fresh wording from the original texts and well-established facts. Never copy or closely follow any modern
  book, translation, website or video. Where scholars and tradition differ (dates, authorship), give both
  plainly and respectfully. Never invent a story, a reference or a statistic.
- Credit line "Written by Hari Pokkuluri" appears automatically on chapter 1 of each book.

## How a book file is built

- `vedas/<key>.js` adds `window.VEDA_PLAN.<key>` (chapter titles and short source labels) and appends to
  `window.VEDA_CHAPTERS`. Copy the object shape of a chapter in `sages/vasishtha.js`, but use `book: '<key>'`
  instead of `sage`. Chapter `id` = `<prefix>-<n>` (prefixes: intro `vi`, rig `vr`, yajur `vy`, sama `vs`,
  atharva `va2`, life `vl`, vedanta `vn`, upanishads `vu`, acharyas `vc`); `order` = book position (1–9) × 100 + n; `date` = today (America/New_York).
- 8–12 chapters a book, 3–5 pages a chapter. Blocks: `p`, `h`, `dyk`, `more`, `src` (one on the last page of
  every chapter), `link` (Rāmāyaṇa chapter id, e.g. `bala-5`), `sglink` (Great Sages chapter id, e.g. `an-8`),
  `vdlink` (another Vedas chapter). Link to existing sage and Rāmāyaṇa chapters instead of retelling them.
  Give each chapter `remember` (3 lines) and `think` (one question). `who` and `{key|Name}` links may use
  existing `RMY_WHO` keys; add new ones with `window.RMY_WHO = Object.assign({...new}, window.RMY_WHO || {})`.
- Wire each file in: `<script src="vedas/<key>.js"></script>` in `index.html` just before
  `<script src="vedas.js"></script>`; add `'./vedas/<key>.js'` to `SHELL` in `sw.js` and bump `CACHE`.
- **First run only (when `vedas/` does not exist yet):** also add the home tile in `index.html`'s library
  `texts` list, right after the `sages` tile:
  `{ key:'vedas', icon:'🕉️', name:'The Vedas', desc:'Vedālu · explained simply', action:"openVedas()", gradient:'linear-gradient(160deg,#3a1406,#c0601c)', dot:'#c0601c', tradition:'Veda' },`
  and a top-bar tab after the Sages tab: `<button class="stab" data-sec="vedas" onclick="openVedas()">Vedas</button>`.
  The views, routing, `vedas.js` script tag and service-worker entry are already in place.
- `node tools/check_vedas.js` must print OK (it rejects `sloka` blocks).

## Next

Vedānta series — Hari asked for it on 2026-10-31 as three books, one a day, same style as the first six
(plain words, stories, no verses, EN + Telugu). The tiles are already in the list in `vedas.js` (showing
"Coming soon"). Link back to the first six books with `vdlink` (e.g. the "Four Layers" chapter of intro)
instead of repeating them, and between these three books once they exist. The planned chapters below are a
guide — adjust if the sources call for it, but keep the scope.

- [ ] The Ten Great Upaniṣads (upanishads) — one chapter per Upaniṣad, in the traditional order: Īśa, Kena, Kaṭha,
  Praśna, Muṇḍaka, Māṇḍūkya, Taittirīya, Aitareya, Chāndogya, Bṛhadāraṇyaka; optionally an 11th on
  Śvetāśvatara. For each: which Veda it belongs to, its setting and people, its stories (Umā Haimavatī and
  the Yakṣa; Naciketas and Yama; the six seekers before Pippalāda; Śaunaka and Aṅgiras; Bhṛgu and Varuṇa;
  Satyakāma, Śvetaketu and Uddālaka, Nārada and Sanatkumāra; Yājñavalkya, Maitreyī, Gārgī, Janaka) and its
  main idea in plain words. Use `sglink` to existing sage chapters where the same sage appears.
- [ ] The Great Ācāryas (acharyas) — chapters: before the ācāryas (Gauḍapāda and the early teachers) ·
  Ādi Śaṅkarācārya's life · his teaching, Advaita, in plain words, and the four maṭhas · Rāmānujācārya's life ·
  Viśiṣṭādvaita and the path of devotion and surrender · Madhvācārya's life · Dvaita and the
  Haridāsas/Udupi tradition · other teachers (Nimbārka, Vallabha, Caitanya, and others) in brief · where the
  schools agree and where they differ, told fairly with no school ranked above another · the living traditions
  today (maṭhas, festivals, how families in Andhra/Telangana and elsewhere follow them). Give dates as
  "about/c." with traditional and scholarly views where they differ.

## Done
- [x] What Are the Vedas? (intro) — 10 chapters — 2026-10-21
- [x] Ṛgveda (rig) — 11 chapters — 2026-10-22
- [x] Yajurveda (yajur) — 11 chapters — 2026-10-22
- [x] Sāmaveda (sama) — 11 chapters — 2026-10-22
- [x] Atharvaveda (atharva) — 10 chapters — 2026-10-22
- [x] The Vedas in Our Life (life) — 11 chapters — 2026-10-22
- [x] Vedānta (vedanta) — 11 chapters — 2026-10-31
