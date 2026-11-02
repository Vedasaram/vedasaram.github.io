# Great Sages — backlog

The Great Sages tile (`sages.js`, one file per sage in `sages/`). A daily scheduled task takes the
**first unchecked** sage under "Next", writes that sage's complete life, publishes it, and moves it to
"Done" in the same commit.

## What Hari asked for

- The **full** life of each sage — "big stories, nothing hidden", for kids and adults alike.
  Include every major episode the sources tell, including hard ones (curses, killings, wrongs done
  to women, the sage's own failures). Tell difficult events plainly and without graphic detail.
  No separate kids' version.
- English and Telugu for every block. Telugu must be natural, grammatical, the way Telugu families
  speak, with the usual Telugu names (రాముడు, సీతాదేవి, వసిష్ఠుడు, …).
- Written fresh in our own words from the original texts (Veda, Brāhmaṇas, Vālmīki Rāmāyaṇa,
  Mahābhārata, Purāṇas, Yoga Vāsiṣṭha, Kālidāsa and other pre-modern works). Never copy or closely
  follow any modern translation, comic, book, film or website.
- Where texts disagree, tell the main version and give the other(s), saying which text says what.
  Mark folk or later tellings as such ("later tellings say…"). Never invent an episode or a source.
  If unsure of a chapter/verse number, name the book and section without the number.
- Credit line "Retold by Hari Pokkuluri" appears automatically on chapter 1.

## How a sage file is built (copy the pattern of `sages/vasishtha.js`)

1. `window.SAGE_PLAN.<key>` — the list of chapter titles and sources (aim for 7–12 chapters).
2. `window.RMY_WHO` — add a name-sheet entry (`av, en, te, d, dt`) for every new person used in
   `who` or in `{key|Name}` links, using `Object.assign({...new}, window.RMY_WHO || {})` so existing
   entries win. Check `ramayana/*.js` and the other `sages/*.js` for keys that already exist.
3. `window.SAGE_CHAPTERS` — one object per chapter: `id` (`<prefix>-<n>`, prefix 2–3 letters and unique),
   `sage`, `n`, `order` (= the sage's position in the SAGES list in `sages.js` × 100 + n), `date`
   (today, America/New_York), `title`, `titleTe`, `src`, `who`, `pages` (3–5 pages of blocks),
   `remember` (3 lines), `think` (one question).
4. Block types (see the top of `ramayana.js` and `sages.js`): `p` paragraph, `h` sub-heading,
   `sloka` (Telugu-script lines, transliteration, meaning EN, meaning TE), `dyk` "Did you know?",
   `src` "Where this is told" (put one on the last page of every chapter), `more` tap-to-open box,
   `link` (opens a Rāmāyaṇa chapter id such as `bala-5`), `sglink` (opens another sage chapter).
   Use `sglink`/`link` where a story is already told in full elsewhere instead of retelling it.
   Only quote a Sanskrit verse when you are certain of its exact text.
5. Wire it in: `<script src="sages/<key>.js"></script>` in `index.html` just before
   `<script src="sages.js"></script>`; add `'./sages/<key>.js'` to `SHELL` in `sw.js` and bump `CACHE`.
6. `node tools/check_sages.js` must print OK.

## Next

- [ ] Sāndīpani (sandipani) — teacher of Kṛṣṇa and Balarāma at Avantī; sixty-four arts in sixty-four days; the son lost to the sea and brought back from Yama's city as guru-dakṣiṇā (Bhāgavata 10, Viṣṇu Purāṇa, Harivaṃśa).
- [ ] The four Kumāras (kumaras) — Sanaka, Sanandana, Sanātana, Sanatkumāra, mind-born sons who refused to create; cursing Jaya and Vijaya at Vaikuṇṭha; Sanatkumāra teaching Nārada (Chāndogya) and Dhṛtarāṣṭra (Sanatsujātīya) (Bhāgavata, Chāndogya Upaniṣad, MBh Udyoga).
- [ ] Uddālaka Āruṇi (aruni) — Dhaumya's pupil who lay down in the breach of the field-dyke; “Tat tvam asi” taught to Śvetaketu with the salt, the banyan seed and the honey; the debate with Yājñavalkya; Naciketas's father in the Kaṭha (MBh Ādi, Chāndogya and Bṛhadāraṇyaka Upaniṣads, Kaṭha Upaniṣad).
- [ ] Jaimini (jaimini) — Vyāsa's pupil who received the Sāmaveda; author of the Mīmāṃsā Sūtras; the four birds of the Vindhyas who answered his questions (Mārkaṇḍeya Purāṇa); the Jaimini Bhārata and its Aśvamedha tales (Viṣṇu Purāṇa, Bhāgavata, Mārkaṇḍeya Purāṇa, later Jaimini Bhārata).
- [ ] Garga (garga) — priest of the Yadus; the secret naming of Kṛṣṇa and Balarāma in Nanda's cowshed; the sage of the stars and omens; the Garga Saṃhitā (Bhāgavata 10, Harivaṃśa, MBh Śalya, later Garga Saṃhitā).
- [ ] Śāṇḍilya (shandilya) — the Śāṇḍilya-vidyā “all this is Brahman” in the Chāndogya; the Bhakti Sūtras in his name; guide of Vajra's Vraja (Chāndogya, Śatapatha Brāhmaṇa, Bhāgavata Māhātmya).
- [ ] The Vālakhilyas (valakhilyas) — sixty thousand thumb-sized sages born of Kratu; hanging from the bough Garuḍa carried; the sacrifice that made Garuḍa against Indra's pride; the Vālakhilya hymns of the Ṛgveda and their place before the Sun's chariot (MBh Ādi, Ṛgveda, Viṣṇu Purāṇa).

Add more when fewer than five remain: e.g. Pulastya, Kaṇva, Uttaṅka, Dhaumya, Lomaśa, Māṇḍavya,
Śuka, Jaimini, Vālakhilyas, the four Kumāras, Upamanyu, Āruṇi, Sāndīpani, Garga, Śāṇḍilya, Cyavana.
New sages also need a line in the SAGES list in `sages.js` (key, name, Telugu, known-for, Telugu,
icon, gradient) — add it at the end of the list.

## Done
- [x] Viśvāmitra (vishvamitra) — 13 chapters — 2026-10-17
- [x] Vasiṣṭha (vasishtha) — 9 chapters — 2026-10-17
- [x] Śukrācārya (shukracharya) — 9 chapters — 2026-10-17
- [x] Angirasa, with Aamahaiya and Orukshaya (angiras) — 11 chapters — 2026-10-17
- [x] Agastya (agastya) — 12 chapters — 2026-10-18
- [x] Bhṛgu (bhrigu) — 11 chapters — 2026-10-19
- [x] Nārada (narada) — 12 chapters — 2026-10-20
- [x] Vyāsa (vyasa) — 12 chapters — 2026-10-21
- [x] Vālmīki (valmiki) — 10 chapters — 2026-10-22
- [x] Durvāsa (durvasa) — 10 chapters — 2026-10-23
- [x] Atri and Anasūyā (atri) — 10 chapters — 2026-10-23
- [x] Gautama (gautama) — 10 chapters — 2026-10-23
- [x] Bharadvāja (bharadvaja) — 11 chapters — 2026-10-23
- [x] Mārkaṇḍeya (markandeya) — 7 chapters — 2026-10-23
- [x] Dadhīci (dadhichi) — 7 chapters — 2026-10-23
- [x] Kapila (kapila) — 7 chapters — 2026-10-23
- [x] Jamadagni and Paraśurāma (jamadagni) — 10 chapters — 2026-10-23
- [x] Yājñavalkya (yajnavalkya) — 8 chapters — 2026-10-23
- [x] Bṛhaspati (brihaspati) — 8 chapters — 2026-10-23
- [x] Kaśyapa (kashyapa) — 8 chapters — 2026-10-23
- [x] Aṣṭāvakra (ashtavakra) — 7 chapters — 2026-10-23
- [x] Ṛṣyaśṛṅga (rishyashringa) — 6 chapters — 2026-10-23
- [x] Cyavana (cyavana) — 9 chapters — 2026-10-24
- [x] Uttaṅka (uttanka) — 11 chapters — 2026-10-25
- [x] Śuka (shuka) — 12 chapters — 2026-10-26
- [x] Kaṇva (kanva) — 10 chapters — 2026-10-27
- [x] Māṇḍavya (mandavya) — 9 chapters — 2026-10-28
- [x] Pulastya (pulastya) — 10 chapters — 2026-10-29
- [x] Lomaśa (lomasha) — 12 chapters — 2026-10-31
- [x] Dhaumya (dhaumya) — 11 chapters — 2026-11-01
- [x] Upamanyu (upamanyu) — 10 chapters — 2026-11-02
