# Meanings backlog (Gītā and Viṣṇu Sahasranāmam)

Each verse of the Bhagavad Gītā and the Viṣṇu Sahasranāmam shows a small **📖 Meaning / అర్థం / अर्थ** button
when it has a meaning. Tapping it opens the verse with its meaning over the page; Back returns to the exact spot.

## Where meanings live

- Gītā: `meanings/gita.js` — `window.MEANINGS = Object.assign(window.MEANINGS || {}, { ... })`
- VSN: `meanings/vsn.js` — same shape.
- Key = the verse's key in the app: Gītā `gita_ch<C>_v<N>` (C = chapter 1–18, N = verse number as in GITA_DATA);
  VSN `vsn_<section>_<n>` (sections: preamble, purva, dhyanam, 1…108, phala).
- Entry: `{ en: "...", te: "...", hi: "..." }`. VSN nāma ślokas also carry
  `names: [[IAST name, Telugu name, English, Telugu, Hindi], ...]`.
- The app picks the language from settings (English, Telugu, Both = English + Telugu, Hindi).
- **In simple words** (shown in a box at the bottom of the Meaning page): `meanings/gita-simple.js` and
  `meanings/vsn-simple.js` — `window.SIMPLE = Object.assign(window.SIMPLE || {}, { key: {en, te, hi} })`, same keys.
  Hari asked for this: a layman's explanation, NOT a literal translation — what the verse is really saying and why it
  matters in everyday life, 2–4 warm, plain sentences, the way you'd explain it to a family member or a teenager.
  Every Gītā verse that gets a meaning must also get a simple-words entry. Gītā Chapter 12 is the model.

## Hari's requirements

- Plain, faithful meaning of what the verse says — no long commentary, no sectarian argument.
- Write fresh in your own words. Never copy or closely follow any published translation or website
  (Prabhupāda, Gita Press, Chinmaya, Sivananda, Gambhirananda, holy-bhagavad-gita.org, etc.).
- English: clear and simple. Telugu: natural, correct Telugu in Telugu script, the way Telugu families speak
  (usual names: అర్జునుడు, శ్రీకృష్ణుడు, సంజయుడు, ధృతరాష్ట్రుడు, పార్థా, కౌంతేయా…). Hindi: natural, simple Devanagari.
- Keep each meaning to about 1–3 sentences; when a verse runs on into the next, end with "—" and start the next with "—".
- Begin with the speaker when it changes ("Arjuna said: …", "The Lord said: …"), as in chapter 12.
- Never touch the scripture text itself (GITA_DATA, Telugu/Hindi texts).

## Gītā — Next (in this order)

- [ ] Chapter 7
- [ ] Chapter 8
- [ ] Chapter 9
- [ ] Chapter 10
- [ ] Chapter 11
- [ ] Chapter 13
- [ ] Chapter 14
- [ ] Chapter 15
- [ ] Chapter 16
- [ ] Chapter 17
- [ ] Chapter 18
- [ ] Gītā Dhyānam (keys `gita_dhyana_<n>` — add a meaning button to renderDhyanaPractice the same way as renderGitaPractice)

## Done

- [x] Gītā Chapter 6 — 47 verses (meaning + simple words) — 2026-11-24
- [x] Gītā Chapter 5 — 29 verses (meaning + simple words) — 2026-11-24
- [x] Gītā Chapter 4 — 42 verses (meaning + simple words) — 2026-11-23
- [x] Gītā Chapter 3 — 43 verses (meaning + simple words) — 2026-11-22
- [x] Gītā Chapter 2 — 72 verses (meaning + simple words) — 2026-11-21

- [x] Gītā Chapter 1 — 47 verses (meaning + simple words) — 2026-11-20
- [x] Gītā Chapter 12 — 20 verses (meaning + simple words) — 2026-11-19
- [x] VSN complete — invocation, Pūrva Pīṭhikā, Dhyānam, nāma ślokas 1–108, Phalaśruti (171), meaning + simple words — 2026-11-19
