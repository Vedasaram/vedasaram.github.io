# Great Kings — backlog

The Great Kings tile (`kings.js`, one file per king in `kings/`). It is a sister of Great Sages and uses
the same reader. A daily scheduled task takes the **first unchecked** king under "Next", writes that
king's life, publishes it, and moves it to "Done" in the same commit.

## What Hari asked for

- Great **Hindu** kings of India — historical kings only (from the Mauryas onward); the Purāṇic and epic
  kings are already covered by the Rāmāyaṇa, Mahābhārata and Sages tiles. No Muslim rulers get their own
  life. Kings who were born into or ruled over Hindu society and followed Buddhism or Jainism for part of
  their lives (Aśoka, Candragupta Maurya, Khāravela, Amoghavarṣa…) are included; say their faith plainly.
- Full lives, for kids and adults alike, nothing hidden — wars, failures and hard episodes told plainly
  and without graphic detail. No separate kids' version.
- English and Telugu for every block. Telugu must be natural and grammatical, the way Telugu families
  speak, with the usual Telugu names. Bring out Telugu-land connections where they really exist.
- These are histories, so lean on the strongest evidence: inscriptions, coins, archaeology, contemporary
  writers (court poets, travellers, chronicles), then later traditions. Always say which source tells
  what; mark legends, folk and later tellings as such; give dates as “about/c.” where uncertain and say
  when historians disagree. Never invent an event, a quotation or a source; if unsure of a section or
  verse number, name the work without the number. Quote an original line only when certain of its text.
- Where a king fought Śakas, Huns, Arabs, Turks, Afghans, Mughals, Europeans or other Indian kings, tell
  the wars as the sources tell them: name the opponents plainly and fairly, give both sides' main
  accounts where they differ, and do not insult any community or faith.
- Written fresh in our own words. Never copy or closely follow any modern book, comic, film, TV serial
  or website.
- Credit line "Retold by Hari Pokkuluri" appears automatically on chapter 1.

## How a king file is built (copy the pattern of `kings/chandragupta.js`)

1. `window.KING_PLAN.<key>` — chapter titles and sources (aim for 6–10 chapters).
2. `window.RMY_WHO` — a name-sheet entry (`av, en, te, d, dt`) for every new person used in `who` or in
   `{key|Name}` links, using `Object.assign({...new}, window.RMY_WHO || {})` so existing entries win.
   Check `kings/*.js`, `sages/*.js` and `ramayana/*.js` for keys that already exist — reuse them only if
   they mean the same person (e.g. do not reuse `bharata` for a different Bharata).
3. `window.KING_CHAPTERS` — one object per chapter: `id` (`<prefix>-<n>`, prefix 2–3 letters and unique
   across kings), `king`, `n`, `order` (= the king's position in the KINGS list in `kings.js` × 100 + n),
   `date` (today, America/New_York), `title`, `titleTe`, `src`, `who`, `pages` (3 pages of blocks),
   `remember` (3 lines), `think` (one question).
4. Block types are the same as the Sages (see the top of `ramayana.js` and `sages.js`): `p`, `h`, `sloka`,
   `dyk`, `src` (one on the last page of every chapter), `more`, `link` (Rāmāyaṇa chapter), `sglink`
   (sage chapter), plus `kglink` (another king's chapter).
5. Wire it in: `<script src="kings/<key>.js"></script>` in `index.html` just before
   `<script src="kings.js"></script>`; add `'./kings/<key>.js'` to `SHELL` in `sw.js` and bump `CACHE`.
   A new king also needs a line at the end of the KINGS list in `kings.js` (key, name, Telugu, known-for,
   Telugu, icon, gradient). Keep the tile name short enough for one line (e.g. 'Śātakarṇi', not
   'Gautamīputra Śātakarṇi'); put the rest in the known-for text.
6. `node tools/check_kings.js` must print OK (and `node tools/check_sages.js` must still print OK).

## Next
- [ ] Bhoja of Dhārā (bhoja) — scholar-king of the Paramāras; the Bhojaśālā; the Bhojpur temple and lake; Bhoja in folk tales
- [ ] Gaṇapatideva and Rudramadevī (kakatiya) — the Kākatīyas of Orugallu; Rudramadevī as ruling queen; Marco Polo's account of Motupalli; the Thousand Pillar temple and Rāmappa
- [ ] Pṛthvīrāja III Cauhān (prithviraj) — the two battles of Tarāin with Muḥammad of Ghor (1191, 1192); the Pṛthvīrājavijaya; the later Pṛthvīrāj Rāso and Saṃyogitā (mark as later)
- [ ] Harihara and Bukka (vijayanagara) — founding of Vijayanagara on the Tuṅgabhadrā; Vidyāraṇya tradition; Gaṅgādevī's Madhurāvijayam
- [ ] Kṛṣṇadevarāya (krishnadevaraya) — Vijayanagara at its height; Raichur; Āmuktamālyada; the aṣṭadiggajas; Tenāli Rāmakṛṣṇa (mark folk tales); Domingos Paes and Nuniz
- [ ] Rāṇā Sāṅgā (sanga) — Mewar's great warrior; Khanwa (1527); his wounds
- [ ] Mahārāṇā Pratāp (pratap) — Haldīghāṭī (1576); Cetak; years in the hills; Bhāmāshāh; recovering Mewar
- [ ] Chatrapati Śivājī (shivaji) — Jījābāī; Toraṇa and Rāyagaḍh; Afzal Khān at Pratāpgaḍh; Shāyista Khān; Āgrā and the escape; the coronation of 1674; the navy; the southern campaign

Add more when fewer than five remain: e.g. Puṣyamitra Śuṅga, Rudradāman's rival kings, Kumāragupta,
Yaśodharman, Śaśāṅka, Mihira Bhoja, Dharmapāla, Amoghavarṣa I, Kṛṣṇa III, Vikramāditya VI, Hoysaḷa
Viṣṇuvardhana, Prolaya Nāyaka, Kapaya Nāyaka, Rāṇā Kumbhā, Hemu, Rājā Mān Siṃh, Chhatrasāl, Bājī Rāo I,
Mahādajī Śinde, Ahilyābāī Holkar, Ranjīt Siṃh, Rāṇī Lakṣmībāī.

## Done
- [x] Candragupta Maurya (chandragupta) — 9 chapters — 2026-10-24
- [x] Aśoka (ashoka) — 9 chapters — 2026-10-24
- [x] Gautamīputra Śātakarṇi (shatakarni) — 7 chapters — 2026-10-24
- [x] Khāravela (kharavela) — 8 chapters — 2026-10-25
- [x] Samudragupta (samudragupta) — 8 chapters — 2026-10-26
- [x] Candragupta II Vikramāditya (vikramaditya) — 9 chapters — 2026-10-27
- [x] Skandagupta (skandagupta) — 8 chapters — 2026-10-28
- [x] Harṣavardhana (harsha) — 9 chapters — 2026-10-29
- [x] Pulakeśin II (pulakeshin) — 8 chapters — 2026-10-31
- [x] Narasiṃhavarman I Mahāmalla (narasimhavarman) — 8 chapters — 2026-11-01
- [x] Lalitāditya Muktāpīḍa (lalitaditya) — 8 chapters — 2026-11-02
- [x] Rājarāja Cōḷa I (rajaraja) — 9 chapters — 2026-11-03
- [x] Rājendra Cōḷa I (rajendra) — 9 chapters — 2026-11-04
