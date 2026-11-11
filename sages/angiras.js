// Great Sages — Angirasa, with Aamyahavya and Orukshaya. Retold by Hari Pokkuluri.
// Told from the Ṛgveda, the Brāhmaṇas, the Muṇḍaka Upaniṣad, the Mahābhārata and the Purāṇas,
// in fresh original wording. Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { angiras: [
  ["Born of Glowing Embers", "Brāhmaṇas · Purāṇas · Ṛgveda"],
  ["Brighter Than Fire", "Mahābhārata, Vana Parva"],
  ["The Hidden Cows of Dawn", "Ṛgveda"],
  ["Wife and Children", "Bhāgavata · Mahābhārata"],
  ["Saṃvarta and King Marutta's Golden Yajña", "Mahābhārata, Aśvamedhika Parva"],
  ["Nābhānediṣṭha's Thousand Cows", "Aitareya Brāhmaṇa · Ṛgveda"],
  ["King Citraketu's Son", "Bhāgavata Purāṇa, Book 6"],
  ["Śaunaka's Question — the Muṇḍaka Upaniṣad", "Muṇḍaka Upaniṣad · Atharvaveda"],
  ["Aamyahavya — the Seer of Soma", "Ṛgveda 9.61 · Sāmaveda"],
  ["Orukshaya — the Seer of Agni", "Ṛgveda 10.118"],
  ["The Pravara — Angirasa · Aamyahavya · Orukshaya", "Śrauta and Gṛhya Sūtras · family tradition"],
  ["The Great Family — Bharadvāja, Garga, Droṇa, Gotama", "Caraka Saṃhitā · Bhāgavata · Mahābhārata · Ṛgveda"]
] });
window.RMY_WHO = Object.assign({
  "angiras": { "av": "🔥", "en": "Angirasa (Aṅgiras)", "te": "ఆంగీరసుడు (అంగిరసుడు)", "d": "One of Brahmā's mind-born sons and one of the first seven sages, born, the Veda says, from glowing embers. Father of Bṛhaspati and ancestor of a great family of Vedic seers.", "dt": "బ్రహ్మ మానస పుత్రులలో ఒకరు, తొలి సప్తర్షులలో ఒకరు. వేదం ప్రకారం నిప్పు కణికల నుండి పుట్టినవాడు. బృహస్పతి తండ్రి, ఎందరో వైదిక ఋషుల వంశానికి మూలపురుషుడు." },
  "amahiyu": { "av": "🌙", "en": "Aamyahavya (Amahīyu)", "te": "ఆమ్యహవ్య (అమహీయుడు)", "d": "A seer of Aṅgiras' family, to whom Ṛgveda hymn 9.61, to Soma, was revealed. His descendants are called Āmahīyava.", "dt": "అంగిరస వంశపు ఋషి. సోమునికి చెందిన ఋగ్వేద సూక్తం 9.61 ఆయనకు దర్శనమైంది. ఆయన వంశీయులను ఆమహీయవులు అంటారు." },
  "urukshaya": { "av": "🔥", "en": "Orukshaya (Urukṣaya)", "te": "ఔరుక్షయ (ఉరుక్షయుడు)", "d": "A seer of Aamyahavya's line, to whom Ṛgveda hymn 10.118, to Agni, was revealed. His descendants are called Aurukṣaya.", "dt": "ఆమ్యహవ్య వంశపు ఋషి. అగ్నికి చెందిన ఋగ్వేద సూక్తం 10.118 ఆయనకు దర్శనమైంది. ఆయన వంశీయులను ఔరుక్షయులు అంటారు." },
  "garga": { "av": "📿", "en": "Garga", "te": "గర్గుడు", "d": "A sage of Bharadvāja's line, family priest of the Yadus, who secretly named Kṛṣṇa and Balarāma in Nanda's cowshed.", "dt": "భరద్వాజ వంశపు ముని, యదువంశ పురోహితుడు. నందుని గోశాలలో రహస్యంగా కృష్ణ బలరాములకు నామకరణం చేశాడు." },
  "drona": { "av": "🏹", "en": "Droṇa", "te": "ద్రోణాచార్యుడు", "d": "Son of the sage Bharadvāja, born from a vessel (droṇa); teacher of archery to the Kauravas and Pāṇḍavas.", "dt": "భరద్వాజ మహర్షి కుమారుడు, ద్రోణం (కలశం) నుండి పుట్టినవాడు; కౌరవ పాండవులకు ధనుర్విద్య గురువు." },
  "gotama": { "av": "🧘", "en": "Gotama Rāhūgaṇa", "te": "గోతమ రాహూగణుడు", "d": "A Ṛgveda seer of the Aṅgiras family, of Rahūgaṇa's line; father of the seers Vāmadeva and Nodhas.", "dt": "అంగిరస వంశపు ఋగ్వేద ద్రష్ట, రహూగణ వంశీయుడు; వామదేవుడు, నోధసుడు అనే ఋషులకు తండ్రి." },
  "shraddha": { "av": "👩", "en": "Śraddhā", "te": "శ్రద్ధ", "d": "Wife of Aṅgiras, a daughter of the sage Kardama. Her name means faith.", "dt": "అంగిరసుని భార్య, కర్దమ మహర్షి కుమార్తె. ఆమె పేరుకు అర్థం విశ్వాసం." },
  "utathya": { "av": "🧘", "en": "Utathya", "te": "ఉతథ్యుడు", "d": "Eldest son of Aṅgiras, elder brother of Bṛhaspati.", "dt": "అంగిరసుని పెద్ద కుమారుడు, బృహస్పతి అన్న." },
  "samvarta": { "av": "🧘", "en": "Saṃvarta", "te": "సంవర్తుడు", "d": "Youngest son of Aṅgiras, who wandered like a madman and performed King Marutta's golden yajña.", "dt": "అంగిరసుని చిన్న కుమారుడు. పిచ్చివానిలా తిరుగుతూ మరుత్త మహారాజు బంగారు యజ్ఞం చేయించాడు." },
  "mamata": { "av": "👩", "en": "Mamatā", "te": "మమత", "d": "Wife of Utathya and mother of the sage Dīrghatamas.", "dt": "ఉతథ్యుని భార్య, దీర్ఘతమ మహర్షి తల్లి." },
  "dirghatamas": { "av": "🧘", "en": "Dīrghatamas", "te": "దీర్ఘతముడు", "d": "Son of Utathya and Mamatā, born blind, a great seer of the Ṛgveda.", "dt": "ఉతథ్య మమతల కుమారుడు. పుట్టు గుడ్డివాడు, ఋగ్వేదపు గొప్ప ద్రష్ట." },
  "marutta": { "av": "👑", "en": "Marutta", "te": "మరుత్తుడు", "d": "A great king who performed the richest yajña ever held, with Saṃvarta as priest.", "dt": "సంవర్తుని పురోహితునిగా చేసుకుని ఎప్పుడూ జరగనంత సంపన్నమైన యజ్ఞం చేసిన మహారాజు." },
  "nabhanedishtha": { "av": "🧑", "en": "Nābhānediṣṭha", "te": "నాభానేదిష్ఠుడు", "d": "A son of Manu who was left out of the family inheritance.", "dt": "వారసత్వ పంపకంలో వాటా దక్కని మనువు కుమారుడు." },
  "rudra": { "av": "🔱", "en": "Rudra", "te": "రుద్రుడు", "d": "The fierce form of Śiva in the Veda.", "dt": "వేదంలో శివుని ఉగ్ర రూపం." },
  "citraketu": { "av": "👑", "en": "Citraketu", "te": "చిత్రకేతుడు", "d": "King of Śūrasena, whose son was given by Aṅgiras' blessing.", "dt": "శూరసేన రాజు. అంగిరసుని అనుగ్రహం వల్ల అతనికి కుమారుడు కలిగాడు." },
  "shaunaka": { "av": "🧑", "en": "Śaunaka", "te": "శౌనకుడు", "d": "A great householder-sage who asked the question that begins the Muṇḍaka Upaniṣad.", "dt": "ముండకోపనిషత్తును ప్రారంభించే ప్రశ్న అడిగిన మహా గృహస్థ ముని." },
  "sarama": { "av": "🐕", "en": "Saramā", "te": "సరమ", "d": "Indra's divine dog in the Ṛgveda, who found the cows hidden by the Paṇis.", "dt": "ఋగ్వేదంలో ఇంద్రుని దివ్య శునకం. పణులు దాచిన గోవులను కనుగొన్నది." },
  "agni": { "av": "🔥", "en": "Agni", "te": "అగ్నిదేవుడు", "d": "The fire god, who carries every offering to the gods.", "dt": "ప్రతి ఆహుతినీ దేవతలకు చేర్చే అగ్నిదేవుడు." },
  "brihaspati": { "av": "📜", "en": "Bṛhaspati", "te": "బృహస్పతి", "d": "Son of the sage Aṅgiras and guru of the devas — Śukrācārya's great rival. He is the planet Jupiter.", "dt": "అంగిరస మహర్షి కుమారుడు, దేవగురువు — శుక్రాచార్యుని ప్రత్యర్థి. గురు గ్రహం ఆయనే." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "an-1", sage: "angiras", n: 1, order: 1901, date: "2026-10-17",
 title: "Born of Glowing Embers", titleTe: "నిప్పు కణికల నుండి జననం",
 src: "Brāhmaṇas · Purāṇas · Ṛgveda",
 who: ["angiras", "brahma", "agni"],
 pages: [
  [
   ["p", "Of all the great sages, {angiras|Angirasa} is one of the very first. When Brahmā began to create the world, he brought forth his sons from his own body and mind. The Bhāgavata names where each came from: Marīci from his mind, Atri from his eyes, Pulastya from his ears, Vasiṣṭha from his breath — and Aṅgiras from his mouth. From the mouth comes speech, and Aṅgiras' family would become the great family of Vedic speech, of hymns and mantras.", "మహర్షులందరిలోనూ {angiras|ఆంగీరసుడు} అత్యంత ప్రథములలో ఒకరు. బ్రహ్మ సృష్టి ప్రారంభించినప్పుడు తన శరీరం నుండి, మనస్సు నుండి కుమారులను సృష్టించాడు. ఎవరు ఎక్కడి నుండి పుట్టారో భాగవతం చెబుతుంది: మరీచి మనస్సు నుండి, అత్రి కన్నుల నుండి, పులస్త్యుడు చెవుల నుండి, వసిష్ఠుడు శ్వాస నుండి — అంగిరసుడు ముఖం నుండి. ముఖం నుండే వాక్కు వస్తుంది; అంగిరసుని వంశం వైదిక వాక్కుకు — సూక్తాలకు, మంత్రాలకు — గొప్ప వంశమైంది."],
   ["p", "The Veda tells his birth in another way, full of fire. The Aitareya Brāhmaṇa says that at the beginning, when Prajāpati's seed was placed in Agni, it blazed up. From its flames came Bhṛgu. And from the glowing coals that were left — the aṅgāras — came Aṅgiras. That is the meaning of his name: the one born from the embers.", "వేదం ఆయన జన్మను మరో విధంగా, అగ్నితో నిండిన కథగా చెబుతుంది. ఆదిలో ప్రజాపతి తేజస్సు అగ్నిలో ఉంచబడగా అది జ్వలించిందని ఐతరేయ బ్రాహ్మణం చెబుతుంది. ఆ జ్వాలల నుండి భృగువు పుట్టాడు. మిగిలిన నిప్పు కణికల నుండి — అంగారాల నుండి — అంగిరసుడు పుట్టాడు. అదే ఆయన పేరుకు అర్థం: నిప్పు కణికల నుండి పుట్టినవాడు."],
   ["dyk", "🔥", "The old Vedic word-scholar Yāska, in his Nirukta, explains the name the same way: aṅgiras comes from aṅgāra, a glowing coal.", "ప్రాచీన వైదిక నిరుక్తకారుడు యాస్కుడు కూడా తన నిరుక్తంలో ఆ పేరును అలాగే వివరిస్తాడు: అంగిరస్ అనే పదం అంగారం — నిప్పు కణిక — నుండి వచ్చింది."]
  ],
  [
   ["h", "One of the First Seven", "తొలి సప్తర్షులలో ఒకరు"],
   ["p", "In the very first age of this creation, the age of Svāyambhuva Manu, Brahmā appointed seven great sages to guard the Vedas and the order of the world — the first Saptarṣis. They were Marīci, Atri, Aṅgiras, Pulastya, Pulaha, Kratu and Vasiṣṭha. So Aṅgiras was there from the start, before kings, before the Sun and Moon dynasties, before almost every other story in this app.", "ఈ సృష్టిలోని మొట్టమొదటి యుగంలో — స్వాయంభువ మనువు కాలంలో — వేదాలనూ లోక వ్యవస్థనూ కాపాడడానికి బ్రహ్మ ఏడుగురు మహర్షులను నియమించాడు — వారే తొలి సప్తర్షులు: మరీచి, అత్రి, అంగిరసుడు, పులస్త్యుడు, పులహుడు, క్రతువు, వసిష్ఠుడు. అంటే అంగిరసుడు మొదటి నుండీ ఉన్నాడు — రాజుల కంటే ముందు, సూర్యచంద్ర వంశాల కంటే ముందు, ఈ యాప్‌లోని దాదాపు ప్రతి కథ కంటే ముందు."],
   ["p", "In the Ṛgveda, Aṅgiras is so close to fire that the god Agni himself is often called “Aṅgiras.” In the very first hymn of the Ṛgveda, the poet speaks to Agni and calls him by that name: whatever good you do for the one who worships you, O Aṅgiras, that truly is your own.", "ఋగ్వేదంలో అంగిరసుడు అగ్నికి ఎంత దగ్గరవాడంటే అగ్నిదేవుణ్ణే తరచూ “అంగిరసా” అని పిలుస్తారు. ఋగ్వేదపు మొట్టమొదటి సూక్తంలోనే కవి అగ్నిని ఆ పేరుతో సంబోధిస్తాడు: నిన్ను పూజించేవానికి నువ్వు చేసే మేలు ఏదైనా, ఓ అంగిరసా, అది నిజంగా నీదే."],
   ["dyk", "📖", "The Ṛgveda often speaks of “the Aṅgirases” in the plural — the first sacrificers, “our fathers,” who first kindled the sacred fire and sang the first hymns. Their story is in Chapter 3.", "ఋగ్వేదం తరచూ “అంగిరసులు” అని బహువచనంలో చెబుతుంది — తొలి యజ్ఞకర్తలు, “మా పితరులు”, మొదట పవిత్రాగ్నిని రగిలించి మొదటి సూక్తాలు పాడినవారు. వారి కథ 3వ అధ్యాయంలో."],
   ["src", "Bhāgavata Purāṇa 3.12 (the mind-born sons); Aitareya Brāhmaṇa 3.34 (born of the embers); Yāska's Nirukta 3.17; Viṣṇu Purāṇa 3.1 (the first Saptarṣis); Ṛgveda 1.1.6.", "భాగవత పురాణం 3.12 (మానస పుత్రులు); ఐతరేయ బ్రాహ్మణం 3.34 (నిప్పు కణికల నుండి జననం); యాస్కుని నిరుక్తం 3.17; విష్ణు పురాణం 3.1 (తొలి సప్తర్షులు); ఋగ్వేదం 1.1.6."]
  ]
 ],
 remember: [
  ["{angiras|Angirasa} was born from Brahmā's mouth — and, the Veda says, from glowing embers (aṅgāra).", "{angiras|ఆంగీరసుడు} బ్రహ్మ ముఖం నుండి పుట్టాడు — వేదం ప్రకారం నిప్పు కణికల (అంగారాల) నుండి."],
  ["He was one of the first seven Saptarṣis.", "ఆయన తొలి సప్తర్షులలో ఒకరు."],
  ["In the very first hymn of the Ṛgveda, Agni himself is called “Aṅgiras.”", "ఋగ్వేదపు మొట్టమొదటి సూక్తంలోనే అగ్నిని “అంగిరసా” అని పిలుస్తారు."]
 ],
 think: ["Aṅgiras was born from the mouth, the place of speech. Why do you think words — hymns, mantras, promises — mattered so much to the ancient sages?", "అంగిరసుడు వాక్కుకు స్థానమైన ముఖం నుండి పుట్టాడు. మాటలు — సూక్తాలు, మంత్రాలు, ప్రమాణాలు — ప్రాచీన మహర్షులకు ఎందుకంత ముఖ్యమని మీరనుకుంటున్నారు?"]
},
{
 id: "an-2", sage: "angiras", n: 2, order: 1902, date: "2026-10-17",
 title: "Brighter Than Fire", titleTe: "అగ్ని కంటే ప్రకాశవంతుడు",
 src: "Mahābhārata, Vana Parva",
 who: ["angiras", "agni"],
 pages: [
  [
   ["p", "In the forest, the sage Mārkaṇḍeya told the Pāṇḍavas many stories about Agni. One of them is about Aṅgiras. Long ago Aṅgiras went into the forest and did tapas so fierce that he began to glow — brighter and brighter, until his radiance outshone Agni himself. Aṅgiras lit up the whole world, and people began to treat him as their fire.", "అడవిలో మార్కండేయ మహర్షి పాండవులకు అగ్ని గురించి ఎన్నో కథలు చెప్పాడు. వాటిలో ఒకటి అంగిరసుని గురించి. చాలా కాలం క్రితం అంగిరసుడు అడవికి వెళ్ళి ఎంత ఉగ్ర తపస్సు చేశాడంటే ఆయన ప్రకాశించడం మొదలుపెట్టాడు — క్రమంగా ఇంకా ఇంకా — చివరికి ఆయన తేజస్సు అగ్నినే మించిపోయింది. అంగిరసుడు లోకమంతటినీ వెలిగించాడు; జనం ఆయననే తమ అగ్నిగా భావించడం మొదలుపెట్టారు."],
   ["p", "Agni felt ashamed and useless. “Brahmā made me the fire of the world,” he thought, “but this sage has taken my place.” Unhappy, Agni went away and hid himself in the forest.", "అగ్నికి సిగ్గుగా, తాను పనికిరానివాడినని అనిపించింది. “బ్రహ్మ నన్ను లోకానికి అగ్నిగా చేశాడు,” అనుకున్నాడు, “కానీ ఈ ముని నా స్థానం తీసుకున్నాడు.” దిగులుతో అగ్ని వెళ్ళిపోయి అడవిలో దాక్కున్నాడు."]
  ],
  [
   ["p", "Aṅgiras went to find him. “Why are you hiding?” he asked. “Come back and be the fire of the world again. You are the first, and you are known in all the three worlds. Brahmā made you for this.” Agni answered: “My fame is lost. You are the fire now. I will be your son.”", "అంగిరసుడు ఆయనను వెతుక్కుంటూ వెళ్ళాడు. “ఎందుకు దాక్కున్నావు?” అని అడిగాడు. “తిరిగి వచ్చి మళ్ళీ లోకానికి అగ్నివి కా. నువ్వే ప్రథముడివి; ముల్లోకాలలో నీకే పేరు. బ్రహ్మ నిన్ను సృష్టించింది దీని కోసమే.” అగ్ని జవాబిచ్చాడు: “నా కీర్తి పోయింది. ఇప్పుడు అగ్నివి నువ్వే. నేను నీ కుమారుణ్ణవుతాను.”"],
   ["p", "But Aṅgiras would not take another's place. “No,” he said. “You be the fire that drives away darkness and carries offerings to the gods. Let me be your first-born son instead.” Agni agreed and returned to his place. And so, the Mahābhārata says, Aṅgiras is counted as the first son of Agni — and his son Bṛhaspati came after him.", "కానీ అంగిరసుడు ఇంకొకరి స్థానం తీసుకోవడానికి ఒప్పుకోలేదు. “వద్దు,” అన్నాడు. “చీకటిని తరిమి, ఆహుతులను దేవతలకు చేర్చే అగ్నివి నువ్వే కా. బదులుగా నన్ను నీ ప్రథమ పుత్రునిగా ఉండనివ్వు.” అగ్ని ఒప్పుకుని తన స్థానానికి తిరిగి వచ్చాడు. అలా అంగిరసుడు అగ్నికి ప్రథమ పుత్రునిగా లెక్కించబడ్డాడని మహాభారతం చెబుతుంది — ఆయన కుమారుడు బృహస్పతి ఆయన తర్వాత వచ్చాడు."],
   ["dyk", "🤝", "Aṅgiras could have kept Agni's place. Instead he gave it back and asked only to be called Agni's son. That is why the fire and the family of Aṅgiras are so closely joined in the Veda.", "అంగిరసుడు అగ్ని స్థానాన్ని తనదిగా ఉంచుకోవచ్చు. బదులుగా దాన్ని తిరిగి ఇచ్చి, అగ్ని కుమారుడు అని పిలవబడాలని మాత్రమే కోరుకున్నాడు. అందుకే వేదంలో అగ్నీ అంగిరస వంశమూ అంత దగ్గరగా కలిసి ఉన్నాయి."],
   ["src", "Mahābhārata, Vana Parva (Āṅgirasa Parva), told by Mārkaṇḍeya — chapter 207 in the Critical Edition (217 in many printed editions).", "మహాభారతం, వనపర్వం (ఆంగిరస పర్వం), మార్కండేయుడు చెప్పిన కథ — విమర్శనాత్మక ప్రతిలో 207వ అధ్యాయం (చాలా ముద్రిత ప్రతులలో 217)."]
  ]
 ],
 remember: [
  ["{angiras|Aṅgiras}' tapas made him shine brighter than Agni.", "{angiras|అంగిరసుని} తపస్సు ఆయనను అగ్ని కంటే ప్రకాశవంతుణ్ణి చేసింది."],
  ["Agni hid in shame, but Aṅgiras gave him back his place.", "అగ్ని సిగ్గుతో దాక్కున్నాడు; అంగిరసుడు ఆయన స్థానాన్ని తిరిగి ఇచ్చాడు."],
  ["Aṅgiras asked only to be Agni's first son.", "అగ్నికి ప్రథమ పుత్రునిగా ఉండాలని మాత్రమే అంగిరసుడు కోరుకున్నాడు."]
 ],
 think: ["When you become better at something than someone else, is it ever right to step back and let them shine?", "ఎవరికంటే మీరు ఏదైనా పనిలో మెరుగైనప్పుడు, వెనక్కి తగ్గి వారిని ప్రకాశించనివ్వడం ఎప్పుడైనా సరైనదేనా?"]
},
{
 id: "an-3", sage: "angiras", n: 3, order: 1903, date: "2026-10-17",
 title: "The Hidden Cows of Dawn", titleTe: "దాచిన ఉషస్సు గోవులు",
 src: "Ṛgveda",
 who: ["angiras", "sarama", "brihaspati", "indra"],
 pages: [
  [
   ["p", "The Ṛgveda remembers the Aṅgirases — Aṅgiras and his family — as “our fathers,” the first seers, who found the way to the light. Their greatest deed is told again and again in the hymns. A tribe of misers called the Paṇis had stolen the cows and hidden them deep inside a rock cave called Vala, far beyond the river Rasā. Without the cows, the world was dark.", "ఋగ్వేదం అంగిరసులను — అంగిరసుడూ ఆయన వంశీయులూ — “మా పితరులు”గా, వెలుగుకు దారి కనుగొన్న తొలి ఋషులుగా గుర్తుచేసుకుంటుంది. వారి గొప్ప కార్యం సూక్తాలలో మళ్ళీ మళ్ళీ చెప్పబడుతుంది. పణులు అనే లోభుల తెగ గోవులను దొంగిలించి, రసా నది ఆవల, వల అనే రాతి గుహలో లోతుగా దాచిపెట్టారు. గోవులు లేకపోవడంతో లోకం చీకటిగా ఉంది."],
   ["p", "Indra sent his divine dog {sarama|Saramā} to find them. Saramā crossed the wide river and came to the Paṇis. “Who sent you, and why have you come so far?” they asked. “I am Indra's messenger,” she said. “I have come for the cows you have hidden.” The Paṇis laughed and tried to bribe her: “Stay with us, Saramā, be our sister, and we will share the cows with you.” But Saramā would not be bought. “I do not know brotherhood or sisterhood with you. Indra and the Aṅgirases know it. Go away from here, Paṇis — far away!”", "వాటిని వెతకడానికి ఇంద్రుడు తన దివ్య శునకం {sarama|సరమను} పంపాడు. సరమ విశాలమైన నదిని దాటి పణుల దగ్గరికి వచ్చింది. “నిన్నెవరు పంపారు? ఇంత దూరం ఎందుకొచ్చావు?” అని అడిగారు. “నేను ఇంద్రుని దూతను,” అంది. “మీరు దాచిన గోవుల కోసం వచ్చాను.” పణులు నవ్వి ఆమెకు లంచం చూపారు: “సరమా, మాతోనే ఉండిపో, మా సోదరివి కా; గోవులను నీతో పంచుకుంటాం.” కానీ సరమ కొనబడలేదు. “మీతో నాకు సోదర సంబంధం తెలియదు. ఇంద్రునికీ అంగిరసులకూ తెలుసు. పణులారా, ఇక్కడి నుండి వెళ్ళిపోండి — దూరంగా!”"]
  ],
  [
   ["p", "Then the Aṅgirases came, singing. With {brihaspati|Bṛhaspati} — Aṅgiras' own son — leading the song, and with Indra at their side, they sang their hymns at the rock. Their song was so true and so strong that the rock split open. Bṛhaspati, the Veda says, roared like a lion, broke the cave, and drove the cows out — and with them came the light: the Sun, the Dawn, and the fire.", "అప్పుడు అంగిరసులు పాడుతూ వచ్చారు. అంగిరసుని సొంత కుమారుడు {brihaspati|బృహస్పతి} పాటకు నాయకత్వం వహిస్తూ, ఇంద్రుడు పక్కనుండగా, వారు ఆ రాతి ముందు తమ సూక్తాలు పాడారు. వారి పాట ఎంత సత్యమైనది, ఎంత బలమైనదంటే రాయి బద్దలైంది. బృహస్పతి సింహంలా గర్జించి గుహను పగలగొట్టి గోవులను బయటకు తోలాడని వేదం చెబుతుంది — వాటితో పాటు వెలుగు వచ్చింది: సూర్యుడు, ఉష, అగ్ని."],
   ["p", "The cows in this story are more than cattle. In the language of the Veda, “cows” are also rays of light, the light of dawn, and the light of knowledge. The Aṅgirases are the ones who, by the power of true speech, opened the dark cave and set the light free. That is why every seer of their family is honoured as a bringer of light.", "ఈ కథలోని గోవులు కేవలం పశువులు కావు. వేద భాషలో “గోవులు” అంటే కాంతి కిరణాలు, ఉషస్సు వెలుగు, జ్ఞానపు వెలుగు కూడా. సత్యవాక్కు శక్తితో చీకటి గుహను తెరిచి వెలుగును విడిపించినవారు అంగిరసులు. అందుకే వారి వంశపు ప్రతి ఋషీ వెలుగును తెచ్చినవానిగా గౌరవించబడతాడు."],
   ["dyk", "🐕", "The conversation between Saramā and the Paṇis is a whole hymn of the Ṛgveda (10.108) — one of the oldest dialogues in any literature. Dogs in Indian tradition are sometimes called Sārameya, “children of Saramā.”", "సరమకూ పణులకూ మధ్య సంభాషణ ఋగ్వేదంలో ఒక పూర్తి సూక్తం (10.108) — ఏ సాహిత్యంలోనైనా అత్యంత ప్రాచీన సంభాషణలలో ఒకటి. మన సంప్రదాయంలో కుక్కలను కొన్నిసార్లు సారమేయులు — “సరమ సంతానం” — అంటారు."],
   ["src", "Ṛgveda 10.108 (Saramā and the Paṇis); 10.67–68 (Bṛhaspati opens Vala); 4.1 and 1.71 (the Aṅgirases, our fathers, find the light).", "ఋగ్వేదం 10.108 (సరమ, పణులు); 10.67–68 (బృహస్పతి వల గుహను తెరవడం); 4.1, 1.71 (మా పితరులైన అంగిరసులు వెలుగును కనుగొనడం)."]
  ]
 ],
 remember: [
  ["The Paṇis hid the cows of light in the cave Vala.", "పణులు కాంతి గోవులను వల గుహలో దాచారు."],
  ["{sarama|Saramā} found them and refused the Paṇis' bribe.", "{sarama|సరమ} వాటిని కనుగొని పణుల లంచాన్ని తిరస్కరించింది."],
  ["The Aṅgirases, led by Bṛhaspati, sang the rock open and freed the light.", "బృహస్పతి నాయకత్వంలో అంగిరసులు పాటతో రాయిని తెరిచి వెలుగును విడిపించారు."]
 ],
 think: ["The Aṅgirases opened a rock with true words, not weapons. Can true words open things that force cannot?", "అంగిరసులు ఆయుధాలతో కాదు, సత్యవాక్కుతో రాయిని తెరిచారు. బలం తెరవలేనివాటిని సత్యమైన మాటలు తెరవగలవా?"]
},
{
 id: "an-4", sage: "angiras", n: 4, order: 1904, date: "2026-10-17",
 title: "Wife and Children", titleTe: "భార్య, సంతానం",
 src: "Bhāgavata · Mahābhārata",
 who: ["shraddha", "utathya", "brihaspati", "samvarta", "mamata", "dirghatamas"],
 pages: [
  [
   ["p", "The Bhāgavata says Aṅgiras married {shraddha|Śraddhā}, one of the nine daughters of the sage Kardama — her name means “faith.” They had four daughters and sons. The daughters were Sinīvālī, Kuhū, Rākā and Anumati — goddesses of the phases of the moon. Sinīvālī and Kuhū are the new-moon days; Rākā and Anumati are the full-moon days.", "అంగిరసుడు కర్దమ మహర్షి తొమ్మిది మంది కుమార్తెలలో ఒకరైన {shraddha|శ్రద్ధను} వివాహం చేసుకున్నాడని భాగవతం చెబుతుంది — ఆమె పేరుకు అర్థం “విశ్వాసం.” వారికి నలుగురు కుమార్తెలు, కుమారులు కలిగారు. కుమార్తెలు సినీవాలి, కుహూ, రాక, అనుమతి — చంద్రకళల దేవతలు. సినీవాలి, కుహూ అమావాస్య దినాలు; రాక, అనుమతి పౌర్ణమి దినాలు."],
   ["p", "Their sons were {utathya|Utathya} and {brihaspati|Bṛhaspati}; the Mahābhārata adds a third, the youngest, {samvarta|Saṃvarta}. Bṛhaspati became the guru of the gods and the planet Jupiter. Utathya was a great sage. Saṃvarta became famous in a strange way — his story is the next chapter.", "వారి కుమారులు {utathya|ఉతథ్యుడు}, {brihaspati|బృహస్పతి}; మహాభారతం మూడవవాడైన చిన్నవాడు {samvarta|సంవర్తుని} కూడా చెబుతుంది. బృహస్పతి దేవగురువు, గురు గ్రహం అయ్యాడు. ఉతథ్యుడు గొప్ప మహర్షి. సంవర్తుడు ఒక విచిత్రమైన విధంగా ప్రసిద్ధుడయ్యాడు — అతని కథ తర్వాతి అధ్యాయం."],
   ["dyk", "🌙", "So the moon-phase goddesses invoked in many Vedic rites are Aṅgiras' daughters. Even the name of the new-moon day, Kuhū, comes from one of them.", "అంటే ఎన్నో వైదిక కర్మలలో ఆవాహన చేసే చంద్రకళా దేవతలు అంగిరసుని కుమార్తెలు. అమావాస్యకు ‘కుహూ’ అనే పేరు కూడా వారిలో ఒకరి నుండే వచ్చింది."]
  ],
  [
   ["h", "The Child Who Spoke From the Womb", "గర్భం నుండి మాట్లాడిన శిశువు"],
   ["p", "The Mahābhārata does not hide that even great families have dark moments. Utathya's wife {mamata|Mamatā} was expecting a child. One day her husband's younger brother, Bṛhaspati, came to her overcome by desire. Mamatā refused him: “I carry your elder brother's child. Stop.” But he would not listen. Then the child in her womb — who already knew the Vedas — spoke out and refused him too, and blocked him.", "గొప్ప కుటుంబాలకు కూడా చీకటి క్షణాలు ఉంటాయని మహాభారతం దాచదు. ఉతథ్యుని భార్య {mamata|మమత} గర్భవతి. ఒక రోజు భర్త తమ్ముడు బృహస్పతి కామావేశంతో ఆమె దగ్గరికి వచ్చాడు. మమత తిరస్కరించింది: “నేను మీ అన్న బిడ్డను మోస్తున్నాను. ఆగండి.” కానీ అతను వినలేదు. అప్పుడు అప్పటికే వేదాలు తెలిసిన ఆమె గర్భంలోని శిశువు గొంతెత్తి అతన్ని తిరస్కరించి అడ్డుకున్నాడు."],
   ["p", "Bṛhaspati, angry at being stopped by an unborn child, cursed him: “You will be born into long darkness.” The child was born blind, and was named {dirghatamas|Dīrghatamas}, “long darkness.” Yet he grew into one of the greatest seers of the Ṛgveda. Some of the deepest hymns in the whole Veda — including the famous riddle hymn that says “Truth is one; the wise call it by many names” — are his.", "పుట్టని శిశువు అడ్డుకున్నందుకు కోపించిన బృహస్పతి అతన్ని శపించాడు: “దీర్ఘమైన చీకటిలో పుడతావు.” ఆ బిడ్డ గుడ్డివానిగా పుట్టాడు; అతనికి {dirghatamas|దీర్ఘతముడు} — “దీర్ఘ తమస్సు” — అని పేరు వచ్చింది. అయినా అతను ఋగ్వేదపు గొప్ప ద్రష్టలలో ఒకడయ్యాడు. వేదమంతటిలోనూ అత్యంత లోతైన కొన్ని సూక్తాలు — “ఉన్నది ఒక్కటే సత్యం; జ్ఞానులు దాన్ని ఎన్నో పేర్లతో పిలుస్తారు” అని చెప్పే ప్రసిద్ధ ప్రహేళికా సూక్తం సహా — అతనివే."],
   ["dyk", "✨", "“Ekaṃ sad viprā bahudhā vadanti” — “Truth is one; the wise speak of it in many ways” (Ṛgveda 1.164.46) — is by Dīrghatamas, Aṅgiras' grandson.", "“ఏకం సద్విప్రా బహుధా వదంతి” — “సత్యం ఒక్కటే; జ్ఞానులు దాన్ని అనేక విధాలుగా చెబుతారు” (ఋగ్వేదం 1.164.46) — అంగిరసుని మనవడు దీర్ఘతముని వాక్కు."],
   ["p", "The Bhāgavata adds that Mamatā later bore Bṛhaspati a son, Bharadvāja, whom neither parent would keep; the Maruts raised him. He too became one of the great seers — his story will have its own place among the sages.", "తర్వాత మమత బృహస్పతికి భరద్వాజుడు అనే కుమారుణ్ణి కన్నదని, తల్లిదండ్రులు ఇద్దరూ అతన్ని ఉంచుకోలేదని, మరుత్తులు పెంచారని భాగవతం చెబుతుంది. అతను కూడా మహర్షులలో ఒకడయ్యాడు — మహర్షుల మధ్య అతని కథకు ప్రత్యేక స్థానం ఉంటుంది."],
   ["src", "Bhāgavata Purāṇa 4.1 (Śraddhā and the children) and 9.20 (Bharadvāja); Mahābhārata, Ādi Parva — chapter 60 (sons of Aṅgiras) and the story of Dīrghatamas (chapter 98 in the Critical Edition); Ṛgveda 1.164.46.", "భాగవత పురాణం 4.1 (శ్రద్ధ, సంతానం), 9.20 (భరద్వాజుడు); మహాభారతం, ఆదిపర్వం — 60వ అధ్యాయం (అంగిరసుని కుమారులు), దీర్ఘతముని కథ (విమర్శనాత్మక ప్రతి 98వ అధ్యాయం); ఋగ్వేదం 1.164.46."]
  ]
 ],
 remember: [
  ["Aṅgiras' wife was {shraddha|Śraddhā}; their daughters are the goddesses of the moon's phases.", "అంగిరసుని భార్య {shraddha|శ్రద్ధ}; వారి కుమార్తెలు చంద్రకళల దేవతలు."],
  ["Their sons were Utathya, Bṛhaspati and Saṃvarta.", "వారి కుమారులు ఉతథ్యుడు, బృహస్పతి, సంవర్తుడు."],
  ["Utathya's son {dirghatamas|Dīrghatamas}, born blind, saw the hymn “Truth is one.”", "పుట్టు గుడ్డివాడైన ఉతథ్యుని కుమారుడు {dirghatamas|దీర్ఘతముడు} “సత్యం ఒక్కటే” అనే మంత్రాన్ని దర్శించాడు."]
 ],
 think: ["Dīrghatamas was born blind because of someone else's curse, yet he “saw” some of the deepest truths in the Veda. What does it mean to see without eyes?", "వేరొకరి శాపం వల్ల దీర్ఘతముడు గుడ్డివానిగా పుట్టాడు; అయినా వేదంలోని అత్యంత లోతైన సత్యాలను “దర్శించాడు.” కళ్ళు లేకుండా చూడడం అంటే ఏమిటి?"]
},
{
 id: "an-5", sage: "angiras", n: 5, order: 1905, date: "2026-10-17",
 title: "Saṃvarta and King Marutta's Golden Yajña", titleTe: "సంవర్తుడు, మరుత్తుని బంగారు యజ్ఞం",
 src: "Mahābhārata, Aśvamedhika Parva",
 who: ["samvarta", "marutta", "brihaspati", "indra", "narada", "shiva"],
 pages: [
  [
   ["p", "After the great war, when Yudhiṣṭhira wanted to perform an aśvamedha but had no wealth left, Vyāsa told him: “There is gold in the Himālayas, left over from King Marutta's yajña. Go and get it.” Then he told the story — a story about Aṅgiras' two sons.", "మహాయుద్ధం తర్వాత ధర్మరాజు అశ్వమేధం చేయాలనుకున్నాడు; కానీ ధనం మిగల్లేదు. వ్యాసుడు చెప్పాడు: “హిమాలయాలలో మరుత్త మహారాజు యజ్ఞం నుండి మిగిలిన బంగారం ఉంది. వెళ్ళి తెచ్చుకో.” తర్వాత ఆ కథ చెప్పాడు — అంగిరసుని ఇద్దరు కుమారుల కథ."],
   ["p", "King {marutta|Marutta} wanted to perform a great yajña and asked Bṛhaspati, the guru of the gods, to be his priest. But Indra did not want a human king to grow so great. He told Bṛhaspati: “You are my priest. Do not serve a mortal.” So Bṛhaspati refused the king.", "{marutta|మరుత్త} మహారాజు మహాయజ్ఞం చేయాలనుకుని దేవగురువు బృహస్పతిని పురోహితునిగా ఉండమని అడిగాడు. కానీ ఒక మానవ రాజు అంత గొప్పవాడు కావడం ఇంద్రునికి ఇష్టం లేదు. బృహస్పతితో అన్నాడు: “నువ్వు నా పురోహితుడివి. మనిషికి సేవ చేయకు.” అందుకే బృహస్పతి రాజును నిరాకరించాడు."],
   ["p", "Marutta was in despair. Then {narada|Nārada} told him a secret: “Bṛhaspati has a younger brother, Saṃvarta, as learned as he is. He has given up everything and wanders naked in Kāśī like a madman. You won't recognize him. Leave a dead body at the city gate. The man who sees it and turns back — that is Saṃvarta. Follow him, and whatever he says to you, do not leave him.”", "మరుత్తుడు నిరాశపడ్డాడు. అప్పుడు {narada|నారదుడు} ఒక రహస్యం చెప్పాడు: “బృహస్పతికి సంవర్తుడు అనే తమ్ముడు ఉన్నాడు — అన్నంతటి విద్వాంసుడు. సర్వం వదిలి కాశీలో దిగంబరంగా పిచ్చివానిలా తిరుగుతున్నాడు. నువ్వు అతన్ని గుర్తుపట్టలేవు. నగర ద్వారం దగ్గర ఒక శవాన్ని ఉంచు. దాన్ని చూసి వెనక్కి తిరిగేవాడే సంవర్తుడు. అతని వెంట వెళ్ళు; అతను ఏమన్నా సరే, వదలకు.”"]
  ],
  [
   ["p", "Marutta did exactly that. A wild-looking man saw the body and turned away — and the king followed him into a lonely place and fell at his feet. Saṃvarta shouted at him, threw dust on him, spat at him, and tried every way to drive him off. Marutta did not move. At last Saṃvarta laughed. “All right. I will be your priest. But Bṛhaspati and Indra will be furious. Will you stand by me?” “I will,” said Marutta.", "మరుత్తుడు అలాగే చేశాడు. అడవి మనిషిలా ఉన్న ఒకతను శవాన్ని చూసి వెనక్కి తిరిగాడు — రాజు అతని వెంట ఒక నిర్జన ప్రదేశానికి వెళ్ళి పాదాలపై పడ్డాడు. సంవర్తుడు అతని మీద అరిచాడు, మట్టి చల్లాడు, ఉమ్మేశాడు, తరిమేయడానికి అన్ని విధాలా ప్రయత్నించాడు. మరుత్తుడు కదలలేదు. చివరికి సంవర్తుడు నవ్వాడు. “సరే. నీకు పురోహితుణ్ణవుతాను. కానీ బృహస్పతికీ ఇంద్రునికీ పట్టరాని కోపం వస్తుంది. నా పక్షాన నిలబడతావా?” “నిలబడతాను,” అన్నాడు మరుత్తుడు."],
   ["p", "Saṃvarta sent the king to Mount Muñjavat in the Himālayas, where {shiva|Śiva} lives, to win gold. Śiva gave him a mountain of it. Then Saṃvarta performed a yajña so rich that every vessel, every ladle, every pot and even the ground was made of gold. Indra sent threats, then a gandharva messenger, then came himself with the thunderbolt. Saṃvarta simply chanted his mantras and froze the gods where they stood — and then invited them, politely, to take their share. Indra and the gods sat down, took the offerings, and blessed the king.", "సంవర్తుడు రాజును బంగారం సంపాదించడానికి శివుడు నివసించే హిమాలయాలలోని ముంజవత్ పర్వతానికి పంపాడు. శివుడు బంగారు కొండనే ఇచ్చాడు. తర్వాత సంవర్తుడు ఎంత సంపన్నమైన యజ్ఞం చేశాడంటే ప్రతి పాత్ర, ప్రతి స్రువం, ప్రతి కుండ, నేల కూడా బంగారమే. ఇంద్రుడు బెదిరింపులు పంపాడు, తర్వాత గంధర్వ దూతను పంపాడు, తర్వాత స్వయంగా వజ్రాయుధంతో వచ్చాడు. సంవర్తుడు తన మంత్రాలు జపించి దేవతలను ఉన్నచోటే స్తంభింపజేశాడు — తర్వాత మర్యాదగా వారి భాగాలు తీసుకోమని ఆహ్వానించాడు. ఇంద్రుడూ దేవతలూ కూర్చుని హవిస్సు స్వీకరించి రాజును ఆశీర్వదించారు."],
   ["p", "There was so much gold that the brāhmaṇas could not carry it all away. They left heaps of it in the Himālayas — and many ages later the Pāṇḍavas dug it up to pay for Yudhiṣṭhira's aśvamedha.", "బ్రాహ్మణులు మోసుకుపోలేనంత బంగారం మిగిలింది. దాన్ని హిమాలయాలలోనే రాశులుగా వదిలేశారు — యుగాల తర్వాత ధర్మరాజు అశ్వమేధం కోసం పాండవులు దాన్ని తవ్వి తీశారు."],
   ["src", "Mahābhārata, Aśvamedhika Parva, chapters 4–10, told by Vyāsa to Yudhiṣṭhira.", "మహాభారతం, అశ్వమేధిక పర్వం, 4–10 అధ్యాయాలు — వ్యాసుడు ధర్మరాజుకు చెప్పిన కథ."]
  ]
 ],
 remember: [
  ["Indra stopped {brihaspati|Bṛhaspati} from serving King {marutta|Marutta}.", "మరుత్త మహారాజుకు సేవ చేయకుండా ఇంద్రుడు {brihaspati|బృహస్పతిని} ఆపాడు."],
  ["Aṅgiras' youngest son {samvarta|Saṃvarta}, living like a madman, became Marutta's priest.", "పిచ్చివానిలా జీవిస్తున్న అంగిరసుని చిన్న కుమారుడు {samvarta|సంవర్తుడు} మరుత్తునికి పురోహితుడయ్యాడు."],
  ["His golden yajña left gold that the Pāṇḍavas used ages later.", "అతని బంగారు యజ్ఞంలో మిగిలిన బంగారాన్ని యుగాల తర్వాత పాండవులు ఉపయోగించుకున్నారు."]
 ],
 think: ["Saṃvarta looked like a madman, yet he was as learned as the guru of the gods. Have you ever judged someone by how they looked, and been wrong?", "సంవర్తుడు పిచ్చివానిలా కనిపించాడు; కానీ దేవగురువంతటి విద్వాంసుడు. రూపాన్ని చూసి ఎవరినైనా అంచనా వేసి పొరబడిన అనుభవం మీకుందా?"]
},
{
 id: "an-6", sage: "angiras", n: 6, order: 1906, date: "2026-10-17",
 title: "Nābhānediṣṭha's Thousand Cows", titleTe: "నాభానేదిష్ఠుని వెయ్యి గోవులు",
 src: "Aitareya Brāhmaṇa · Ṛgveda",
 who: ["nabhanedishtha", "manu", "angiras", "rudra"],
 pages: [
  [
   ["p", "Manu, the father of humankind, divided his property among his sons. One son, {nabhanedishtha|Nābhānediṣṭha}, was away living as a student with his teacher, and when he came home everything had already been shared out. “What is my share?” he asked his brothers. They pointed at their father: “Him. He is your share.”", "మానవజాతికి తండ్రి అయిన మనువు తన ఆస్తిని కుమారులకు పంచాడు. ఒక కుమారుడు {nabhanedishtha|నాభానేదిష్ఠుడు} గురువు దగ్గర విద్యార్థిగా దూరంగా ఉన్నాడు; ఇంటికి వచ్చేసరికి అంతా పంచుకోవడం అయిపోయింది. “నా వాటా ఏమిటి?” అని అన్నలను అడిగాడు. వారు తండ్రి వైపు చూపారు: “ఆయనే. ఆయనే నీ వాటా.”"],
   ["p", "The boy went to his father. Manu said kindly: “Do not mind, son. Listen — the Aṅgirases are performing a great sattra, a long yajña, to reach heaven. Every time they reach the sixth day, they get confused and cannot go on. Go and teach them these two hymns. When they go to heaven, they will give you the thousand cows of their yajña.” And he taught his son two hymns.", "బాలుడు తండ్రి దగ్గరికి వెళ్ళాడు. మనువు ప్రేమగా అన్నాడు: “బాధపడకు నాయనా. విను — అంగిరసులు స్వర్గం చేరడానికి సత్రయాగం — సుదీర్ఘమైన యజ్ఞం — చేస్తున్నారు. ఆరవ రోజుకు రాగానే ప్రతిసారీ తికమకపడి ముందుకు సాగలేకపోతున్నారు. వెళ్ళి వారికి ఈ రెండు సూక్తాలు నేర్పు. వారు స్వర్గానికి వెళ్ళేటప్పుడు తమ యజ్ఞపు వెయ్యి గోవులనూ నీకు ఇస్తారు.” కొడుక్కి రెండు సూక్తాలు నేర్పాడు."]
  ],
  [
   ["p", "Nābhānediṣṭha went to the Aṅgirases, recited the two hymns on the sixth day, and their yajña went forward. When it was complete and they were rising to heaven, they kept their word: “These thousand cows are yours.”", "నాభానేదిష్ఠుడు అంగిరసుల దగ్గరికి వెళ్ళి ఆరవ రోజున ఆ రెండు సూక్తాలు పఠించాడు; వారి యజ్ఞం ముందుకు సాగింది. అది పూర్తై వారు స్వర్గానికి లేస్తుండగా మాట నిలబెట్టుకున్నారు: “ఈ వెయ్యి గోవులూ నీవే.”"],
   ["p", "As he was gathering the cows, a man dressed in dark clothes came from the north. “These are mine,” he said. “Whatever is left on the place of sacrifice belongs to me.” Nābhānediṣṭha went to ask his father. Manu said: “He is right, son. Whatever is left at the yajña belongs to him. Go and give them to him.” The boy came back and said honestly, “My father says they are yours.”", "అతను గోవులను సేకరిస్తుండగా ఉత్తరం నుండి నల్లని బట్టలు ధరించిన ఒక మనిషి వచ్చాడు. “ఇవి నావి,” అన్నాడు. “యజ్ఞభూమిలో మిగిలినదంతా నాకే చెందుతుంది.” నాభానేదిష్ఠుడు తండ్రిని అడగడానికి వెళ్ళాడు. మనువు చెప్పాడు: “నాయనా, ఆయన చెప్పింది నిజమే. యజ్ఞంలో మిగిలినది ఆయనదే. వెళ్ళి ఇచ్చెయ్యి.” బాలుడు తిరిగి వచ్చి నిజాయితీగా చెప్పాడు: “ఇవి మీవే అని మా నాన్న అంటున్నారు.”"],
   ["p", "The man in dark clothes was {rudra|Rudra} — Śiva himself. Pleased with the boy's honesty, he said: “Because you spoke the truth, I give them all back to you.” And he blessed him with knowledge as well.", "నల్లని బట్టల మనిషి {rudra|రుద్రుడు} — సాక్షాత్తు శివుడు. బాలుని నిజాయితీకి సంతోషించి అన్నాడు: “నిజం చెప్పావు కాబట్టి అవన్నీ తిరిగి నీకే ఇస్తున్నాను.” జ్ఞానాన్ని కూడా అనుగ్రహించాడు."],
   ["dyk", "📖", "The two hymns Manu taught are still in the Ṛgveda — Book 10, hymns 61 and 62 — and their seer is named as Nābhānediṣṭha, son of Manu. One of them praises the Aṅgirases.", "మనువు నేర్పిన ఆ రెండు సూక్తాలు ఈ రోజుకీ ఋగ్వేదంలో ఉన్నాయి — 10వ మండలం, 61, 62 సూక్తాలు — వాటి ద్రష్ట మను పుత్రుడు నాభానేదిష్ఠుడు. వాటిలో ఒకటి అంగిరసులను కీర్తిస్తుంది."],
   ["src", "Aitareya Brāhmaṇa 5.14; Taittirīya Saṃhitā 3.1.9; Ṛgveda 10.61–62. The Bhāgavata Purāṇa (9.4) tells it too, naming the son Nābhāga.", "ఐతరేయ బ్రాహ్మణం 5.14; తైత్తిరీయ సంహిత 3.1.9; ఋగ్వేదం 10.61–62. భాగవత పురాణం (9.4) కూడా ఈ కథ చెబుతుంది; అక్కడ కుమారుని పేరు నాభాగుడు."]
  ]
 ],
 remember: [
  ["{nabhanedishtha|Nābhānediṣṭha} got no inheritance; Manu taught him two hymns for the Aṅgirases' yajña.", "{nabhanedishtha|నాభానేదిష్ఠునికి} వారసత్వ వాటా దక్కలేదు; అంగిరసుల యజ్ఞం కోసం మనువు అతనికి రెండు సూక్తాలు నేర్పాడు."],
  ["The Aṅgirases kept their word and gave him a thousand cows.", "అంగిరసులు మాట నిలబెట్టుకుని వెయ్యి గోవులు ఇచ్చారు."],
  ["{rudra|Rudra} claimed them — and gave them back because the boy told the truth.", "{rudra|రుద్రుడు} వాటిని తనవన్నాడు — బాలుడు నిజం చెప్పినందుకు తిరిగి ఇచ్చేశాడు."]
 ],
 think: ["Nābhānediṣṭha could have argued with the stranger. Instead he asked his father and told the truth. What did honesty win him?", "నాభానేదిష్ఠుడు అపరిచితునితో వాదించవచ్చు. బదులుగా తండ్రిని అడిగి నిజం చెప్పాడు. నిజాయితీ అతనికి ఏమి సంపాదించి పెట్టింది?"]
},
{
 id: "an-7", sage: "angiras", n: 7, order: 1907, date: "2026-10-17",
 title: "King Citraketu's Son", titleTe: "చిత్రకేతు మహారాజు కుమారుడు",
 src: "Bhāgavata Purāṇa, Book 6",
 who: ["citraketu", "angiras", "narada"],
 pages: [
  [
   ["p", "{citraketu|Citraketu}, king of Śūrasena, had everything a king could want — wealth, a great kingdom and many queens — but no child. One day Aṅgiras came to his palace. Seeing the king's sadness, he performed a yajña and gave the remains of the sacred offering to the eldest queen, Kṛtadyuti. “You will have a son,” he said, “and he will bring you both joy and sorrow.”", "శూరసేన రాజు {citraketu|చిత్రకేతునికి} రాజు కోరుకునేవన్నీ ఉన్నాయి — సంపద, గొప్ప రాజ్యం, ఎందరో రాణులు — కానీ సంతానం లేదు. ఒక రోజు అంగిరసుడు ఆయన భవనానికి వచ్చాడు. రాజు దుఃఖం చూసి ఒక యజ్ఞం చేసి, యజ్ఞ శేషాన్ని పెద్ద రాణి కృతద్యుతికి ఇచ్చాడు. “మీకు కుమారుడు కలుగుతాడు,” అన్నాడు, “అతను మీకు ఆనందమూ దుఃఖమూ రెండూ తెస్తాడు.”"],
   ["p", "A son was born, and the king was overjoyed. But he began to love the mother of the prince far more than his other queens, and they grew bitter with jealousy. One day, in secret, they poisoned the little prince. The baby died in his sleep.", "కుమారుడు పుట్టాడు; రాజు ఆనందానికి అంతులేదు. కానీ రాకుమారుని తల్లిని మిగతా రాణుల కంటే ఎంతో ఎక్కువగా ప్రేమించడం మొదలుపెట్టాడు; వారిలో అసూయ పెరిగింది. ఒక రోజు రహస్యంగా వారు చిన్నారి రాకుమారునికి విషం పెట్టారు. పసివాడు నిద్రలోనే చనిపోయాడు."]
  ],
  [
   ["p", "Citraketu fell beside the body, mad with grief. Then Aṅgiras came again, with {narada|Nārada}. “O king,” said Aṅgiras, “when I first came, I could have given you knowledge that ends all sorrow. You asked for a son instead. Now you see how a son brings sorrow too. Who is this child to you? Before he was born, where was he? After death, where is he? People come together like grains of sand in a river current, and the current separates them again.”", "చిత్రకేతుడు దుఃఖంతో పిచ్చివానిలా శవం పక్కన పడిపోయాడు. అప్పుడు అంగిరసుడు {narada|నారదునితో} కలిసి మళ్ళీ వచ్చాడు. “రాజా,” అన్నాడు అంగిరసుడు, “నేను మొదట వచ్చినప్పుడు సర్వ దుఃఖాలనూ తొలగించే జ్ఞానాన్ని నీకు ఇవ్వగలిగేవాణ్ణి. నువ్వు బదులుగా కొడుకును కోరావు. కొడుకు దుఃఖాన్నీ ఎలా తెస్తాడో ఇప్పుడు చూస్తున్నావు. ఈ బిడ్డ నీకు ఏమవుతాడు? పుట్టకముందు ఎక్కడ ఉన్నాడు? చనిపోయాక ఎక్కడ ఉన్నాడు? నదీ ప్రవాహంలో ఇసుక రేణువుల్లా మనుషులు కలుస్తారు; ప్రవాహమే మళ్ళీ వారిని విడదీస్తుంది.”"],
   ["p", "Then Nārada, by his power, called the soul of the dead prince back for a moment. “Speak to your parents,” he said. The soul answered: “In which of my many births were these my parents? I have wandered through countless lives, and had countless fathers and mothers. I am no one's son and no one's enemy.” And it went away.", "తర్వాత నారదుడు తన శక్తితో చనిపోయిన రాకుమారుని ఆత్మను ఒక్క క్షణం వెనక్కి పిలిచాడు. “నీ తల్లిదండ్రులతో మాట్లాడు,” అన్నాడు. ఆత్మ జవాబిచ్చింది: “నా అనేక జన్మలలో ఏ జన్మలో వీరు నా తల్లిదండ్రులు? లెక్కలేనన్ని జీవితాలు తిరిగాను; లెక్కలేనంత మంది తండ్రులూ తల్లులూ ఉన్నారు. నేను ఎవరికీ కొడుకునూ కాను, ఎవరికీ శత్రువునూ కాను.” వెళ్ళిపోయింది."],
   ["p", "The jealous queens, ashamed, did penance. And Citraketu, at last, asked for the knowledge Aṅgiras had offered him at the start. He became a great devotee and later a king of the vidyādharas — though his story goes on, the Bhāgavata says, into another strange birth as the asura Vṛtra.", "అసూయ గల రాణులు సిగ్గుపడి ప్రాయశ్చిత్తం చేసుకున్నారు. చిత్రకేతుడు చివరికి అంగిరసుడు మొదట ఇవ్వజూపిన జ్ఞానాన్నే కోరుకున్నాడు. గొప్ప భక్తుడై, తర్వాత విద్యాధరులకు రాజయ్యాడు — అయినా అతని కథ వృత్రాసురునిగా మరో విచిత్ర జన్మలోకి కొనసాగుతుందని భాగవతం చెబుతుంది."],
   ["src", "Bhāgavata Purāṇa, Book 6, chapters 14–16.", "భాగవత పురాణం, 6వ స్కంధం, 14–16 అధ్యాయాలు."]
  ]
 ],
 remember: [
  ["Aṅgiras' blessing gave King {citraketu|Citraketu} a son, who was poisoned by jealous queens.", "అంగిరసుని అనుగ్రహం వల్ల {citraketu|చిత్రకేతునికి} కుమారుడు కలిగాడు; అసూయ గల రాణులు అతనికి విషం పెట్టారు."],
  ["Aṅgiras and Nārada taught the grieving king about the soul.", "దుఃఖంలో ఉన్న రాజుకు అంగిరసుడు, నారదుడు ఆత్మ గురించి బోధించారు."],
  ["The king finally asked for the knowledge Aṅgiras had first offered.", "అంగిరసుడు మొదట ఇవ్వజూపిన జ్ఞానాన్నే రాజు చివరికి కోరుకున్నాడు."]
 ],
 think: ["Aṅgiras first offered knowledge, and the king chose a son instead. Why do people so often choose what they want now over what they need most?", "అంగిరసుడు మొదట జ్ఞానాన్ని ఇవ్వజూపాడు; రాజు బదులుగా కొడుకును ఎంచుకున్నాడు. అత్యంత అవసరమైనదాని కంటే ఇప్పుడు కావాలనుకున్నదాన్నే మనుషులు ఎందుకు తరచూ ఎంచుకుంటారు?"]
},
{
 id: "an-8", sage: "angiras", n: 8, order: 1908, date: "2026-10-17",
 title: "Śaunaka's Question — the Muṇḍaka Upaniṣad", titleTe: "శౌనకుని ప్రశ్న — ముండకోపనిషత్తు",
 src: "Muṇḍaka Upaniṣad · Atharvaveda",
 who: ["shaunaka", "angiras"],
 pages: [
  [
   ["p", "The fourth Veda, the Atharvaveda, has an old name: Atharvāṅgirasa — the Veda of Atharvan and Aṅgiras. The hymns of Atharvan's line were for healing, peace and blessing; those of Aṅgiras' line were fierce ones, for protection against enemies and evil. Together they made this Veda.", "నాల్గవ వేదమైన అథర్వ వేదానికి ఒక పాత పేరు ఉంది: అథర్వాంగిరసం — అథర్వుడు, అంగిరసుల వేదం. అథర్వుని వంశపు మంత్రాలు ఆరోగ్యం, శాంతి, ఆశీర్వాదం కోసం; అంగిరసుని వంశపు మంత్రాలు ఉగ్రమైనవి — శత్రువుల నుండి, దుష్టశక్తుల నుండి రక్షణ కోసం. రెండూ కలిసి ఈ వేదమయ్యాయి."],
   ["p", "One of the great Upaniṣads of the Atharvaveda, the Muṇḍaka, begins by tracing a line of teachers: Brahmā taught this knowledge to Atharvan; Atharvan to Aṅgir; Aṅgir to Satyavāha of Bharadvāja's family; and he to Aṅgiras. Then a great householder named {shaunaka|Śaunaka}, owner of a vast estate, came to Aṅgiras in the proper way, as a student, and asked one question:", "అథర్వ వేదపు గొప్ప ఉపనిషత్తులలో ఒకటైన ముండకోపనిషత్తు గురుపరంపరతో ప్రారంభమవుతుంది: బ్రహ్మ ఈ విద్యను అథర్వునికి బోధించాడు; అథర్వుడు అంగిర్‌కు; అంగిర్ భరద్వాజ వంశపు సత్యవాహునికి; అతను అంగిరసునికి. తర్వాత విశాలమైన ఆస్తి గల శౌనకుడు అనే మహా గృహస్థు విధిపూర్వకంగా శిష్యునిగా అంగిరసుని దగ్గరికి వచ్చి ఒకే ఒక్క ప్రశ్న అడిగాడు:"],
   ["sloka", ["కస్మిన్ను భగవో విజ్ఞాతే సర్వమిదం విజ్ఞాతం భవతి ॥"], ["kasmin nu bhagavo vijñāte sarvam idaṃ vijñātaṃ bhavati ||"], "“Revered sir, what is that which, when it is known, everything else becomes known?” (Muṇḍaka Upaniṣad 1.1.3)", "“పూజ్యులారా, దేనిని తెలుసుకుంటే ఇదంతా తెలిసిపోతుంది?” (ముండకోపనిషత్తు 1.1.3)"],
   ["dyk", "🧭", "The Aṅgiras of the Upaniṣad comes at the end of a line of teachers that begins with Atharvan; the tradition treats him as of Aṅgiras' family, carrying his name and his knowledge.", "ఉపనిషత్తులోని అంగిరసుడు అథర్వునితో మొదలయ్యే గురుపరంపర చివర వస్తాడు; సంప్రదాయం ఆయనను అంగిరస వంశీయునిగా — ఆ పేరునూ ఆ జ్ఞానాన్నీ కొనసాగించినవానిగా — భావిస్తుంది."]
  ],
  [
   ["h", "Two Kinds of Knowledge", "రెండు రకాల విద్యలు"],
   ["p", "Aṅgiras answered: “There are two kinds of knowledge to be learned — the lower and the higher. The lower is the four Vedas, phonetics, ritual, grammar, the meaning of words, metre and astronomy. The higher is that by which the Imperishable is known.” Even the Vedas themselves, he said, are lower knowledge, if they are learned only as words.", "అంగిరసుడు జవాబిచ్చాడు: “నేర్చుకోవలసిన విద్యలు రెండు — అపర విద్య, పర విద్య. అపర విద్య అంటే నాలుగు వేదాలు, శిక్ష, కల్పం, వ్యాకరణం, నిరుక్తం, ఛందస్సు, జ్యోతిషం. అక్షరమైన — నశించని — పరమాత్మను తెలుసుకునేది పర విద్య.” కేవలం మాటలుగా నేర్చుకుంటే వేదాలు కూడా అపర విద్యే అని చెప్పాడు."],
   ["p", "Then he described the Imperishable: it cannot be seen or grasped, has no family and no colour, no eyes or ears, no hands or feet; it is eternal, everywhere, subtle beyond subtle. “As a spider sends out its thread and draws it back,” he said, “as plants grow from the earth, as hair grows on a living person — so this whole world comes from the Imperishable.”", "తర్వాత ఆ అక్షరాన్ని వర్ణించాడు: దాన్ని చూడలేం, పట్టుకోలేం; దానికి గోత్రం లేదు, రంగు లేదు, కళ్ళూ చెవులూ లేవు, చేతులూ కాళ్ళూ లేవు; అది నిత్యం, సర్వవ్యాపి, సూక్ష్మం కంటే సూక్ష్మం. “సాలెపురుగు దారాన్ని బయటకు తీసి మళ్ళీ లోపలికి తీసుకున్నట్టు,” అన్నాడు, “భూమి నుండి మొక్కలు పెరిగినట్టు, జీవించే మనిషికి వెంట్రుకలు పెరిగినట్టు — ఈ లోకమంతా ఆ అక్షరం నుండే వస్తుంది.”"],
   ["p", "He taught Śaunaka the image of two birds on one tree: one eats the fruit, sweet and bitter, and is troubled; the other just watches, calm. The first is the person caught in the world; the second is the true Self. When the first bird turns and sees the second — its own true nature — its sorrow ends.", "ఒకే చెట్టు మీది రెండు పక్షుల ఉపమానాన్ని శౌనకునికి బోధించాడు: ఒకటి తీపి, చేదు పండ్లు తింటూ కలవరపడుతుంది; మరొకటి ప్రశాంతంగా చూస్తూ ఉంటుంది. మొదటిది లోకంలో చిక్కుకున్న మనిషి; రెండవది నిజమైన ఆత్మ. మొదటి పక్షి తిరిగి రెండవదాన్ని — తన నిజ స్వరూపాన్ని — చూడగానే దాని దుఃఖం తీరిపోతుంది."]
  ],
  [
   ["h", "Satyameva Jayate", "సత్యమేవ జయతే"],
   ["p", "In the same Upaniṣad, Aṅgiras' teaching contains four words that every Indian knows, because they are written under the national emblem of India:", "అదే ఉపనిషత్తులో అంగిరసుని బోధలో ప్రతి భారతీయునికీ తెలిసిన నాలుగు మాటలు ఉన్నాయి — అవి భారత జాతీయ చిహ్నం కింద రాసి ఉన్నాయి:"],
   ["sloka", ["సత్యమేవ జయతే నానృతం", "సత్యేన పంథా వితతో దేవయానః ।"], ["satyam eva jayate nānṛtaṃ", "satyena panthā vitato devayānaḥ |"], "“Truth alone wins, not falsehood. By truth is laid out the path of the gods.” (Muṇḍaka Upaniṣad 3.1.6)", "“సత్యమే జయిస్తుంది, అసత్యం కాదు. సత్యం చేతనే దేవయాన మార్గం విస్తరించబడింది.” (ముండకోపనిషత్తు 3.1.6)"],
   ["p", "So the motto of the Republic of India comes from the teaching given by Aṅgiras to Śaunaka.", "అంటే భారత గణతంత్రపు నినాదం అంగిరసుడు శౌనకునికి చేసిన బోధ నుండే వచ్చింది."],
   ["src", "Muṇḍaka Upaniṣad 1.1.1–9 (the line of teachers, Śaunaka's question, the two kinds of knowledge), 3.1.1–3 (the two birds), 3.1.6 (satyameva jayate). The name Atharvāṅgirasa for the Atharvaveda: Atharvaveda itself and the Gopatha Brāhmaṇa.", "ముండకోపనిషత్తు 1.1.1–9 (గురుపరంపర, శౌనకుని ప్రశ్న, రెండు విద్యలు), 3.1.1–3 (రెండు పక్షులు), 3.1.6 (సత్యమేవ జయతే). అథర్వ వేదానికి అథర్వాంగిరసం అనే పేరు: అథర్వ వేదం, గోపథ బ్రాహ్మణం."]
  ]
 ],
 remember: [
  ["The Atharvaveda's old name is Atharvāṅgirasa — the Veda of Atharvan and Aṅgiras.", "అథర్వ వేదానికి పాత పేరు అథర్వాంగిరసం — అథర్వుడు, అంగిరసుల వేదం."],
  ["{shaunaka|Śaunaka} asked Aṅgiras: what, when known, makes everything known?", "దేనిని తెలుసుకుంటే అంతా తెలుస్తుందని {shaunaka|శౌనకుడు} అంగిరసుణ్ణి అడిగాడు."],
  ["India's motto, “Satyameva Jayate,” is from this teaching.", "భారతదేశపు నినాదం “సత్యమేవ జయతే” ఈ బోధ నుండే."]
 ],
 think: ["Aṅgiras said even the Vedas are “lower knowledge” if learned only as words. What is the difference between knowing words and knowing what they point to?", "కేవలం మాటలుగా నేర్చుకుంటే వేదాలు కూడా అపర విద్యే అని అంగిరసుడు అన్నాడు. మాటలు తెలియడానికీ, అవి సూచించేది తెలియడానికీ తేడా ఏమిటి?"]
},
{
 id: "an-9", sage: "angiras", n: 9, order: 1909, date: "2026-10-17",
 title: "Aamyahavya — the Seer of Soma", titleTe: "ఆమ్యహవ్య — సోమ మంత్ర ద్రష్ట",
 src: "Ṛgveda 9.61 · Sāmaveda",
 who: ["amahiyu", "angiras", "indra"],
 pages: [
  [
   ["p", "Now we come to two seers who are not famous for stories at all — only for what they saw. In the family of Aṅgiras there was a ṛṣi named Amahīyu. His descendants are called Āmahīyava, and in many Telugu families the name is recited as {amahiyu|Aamyahavya} (ఆమ్యహవ్య).", "ఇప్పుడు కథల వల్ల కాకుండా, తాము దర్శించిన మంత్రాల వల్ల మాత్రమే ప్రసిద్ధులైన ఇద్దరు ఋషుల దగ్గరికి వస్తున్నాం. అంగిరసుని వంశంలో అమహీయుడు అనే ఋషి ఉండేవాడు. ఆయన వంశీయులను ఆమహీయవులు అంటారు; ఎన్నో తెలుగు కుటుంబాలలో ఈ పేరును {amahiyu|ఆమ్యహవ్య} అని పఠిస్తారు."],
   ["p", "Let us be honest from the start: the Purāṇas and the epics tell no stories about Amahīyu. We do not know where he lived, whom he married, or what he did. What we have is what made him a ṛṣi — a hymn of the Ṛgveda that was revealed to him, and that has been chanted, word for word, for thousands of years. In the Vedic tradition, that is the greatest thing a person can leave behind.", "మొదటే నిజాయితీగా చెప్పుకుందాం: పురాణాలు, ఇతిహాసాలు అమహీయుని గురించి కథలు చెప్పవు. ఆయన ఎక్కడ నివసించాడో, ఎవరిని వివాహం చేసుకున్నాడో, ఏమి చేశాడో మనకు తెలియదు. మన దగ్గర ఉన్నది ఆయనను ఋషిని చేసినది — ఆయనకు దర్శనమైన ఒక ఋగ్వేద సూక్తం; వేలాది సంవత్సరాలుగా అక్షరం తప్పకుండా జపించబడుతున్నది. వైదిక సంప్రదాయంలో మనిషి వదిలి వెళ్ళగల గొప్ప వారసత్వం అదే."],
   ["dyk", "👁️", "A ṛṣi is called a mantra-draṣṭā, a “seer of mantras.” The tradition says the hymns were not made up by the ṛṣis; they were seen or heard by them in deep meditation. That is why the Veda is called śruti, “that which was heard.”", "ఋషిని మంత్ర ద్రష్ట — “మంత్రాలను దర్శించినవాడు” — అంటారు. సూక్తాలను ఋషులు కల్పించలేదని, గాఢ ధ్యానంలో వారు వాటిని దర్శించారని లేదా విన్నారని సంప్రదాయం చెబుతుంది. అందుకే వేదాన్ని శ్రుతి — “వినబడినది” — అంటారు."]
  ],
  [
   ["h", "Ṛgveda 9.61 — a Hymn to Soma", "ఋగ్వేదం 9.61 — సోమునికి సూక్తం"],
   ["p", "The ninth book of the Ṛgveda is entirely for Soma Pavamāna — Soma “as he is being purified,” the sacred juice pressed and strained through wool for the yajña, and also the divine drink of joy and immortality. Hymn 9.61, seen by Amahīyu of Aṅgiras' family, is a long one — thirty verses.", "ఋగ్వేదపు తొమ్మిదవ మండలం పూర్తిగా సోమ పవమానునికి — “శుద్ధి చేయబడుతున్న” సోమునికి — చెందినది. యజ్ఞం కోసం పిండి, ఉన్ని వడపోతలో వడకట్టే పవిత్ర రసం అది; ఆనందానికీ అమృతత్వానికీ దివ్యపానం కూడా. అంగిరస వంశపు అమహీయుడు దర్శించిన 9.61 సూక్తం పెద్దది — ముప్పై మంత్రాలు."],
   ["p", "In it, the seer asks Soma to flow around and pour down his streams for the gods' feast. He remembers how, in Soma's joy, Indra broke the strongholds of Śambara for King Divodāsa, and helped Turvaśa and Yadu. He sings that Soma's birth is high — born in heaven, received by the earth — and that it brings great protection and great fame. And at the end he asks Soma to purify himself and make the people glorious, to drive away all who hate, and to guard the worshippers with sharp weapons against the slanderer.", "దానిలో ఋషి దేవతల విందు కోసం చుట్టూ ప్రవహించి తన ధారలు కురిపించమని సోముణ్ణి కోరతాడు. సోమానందంలో ఇంద్రుడు దివోదాస మహారాజు కోసం శంబరుని దుర్గాలను ఎలా బద్దలుకొట్టాడో, తుర్వశునికీ యదువుకీ ఎలా సహాయం చేశాడో గుర్తుచేసుకుంటాడు. సోముని జన్మ ఉన్నతమైనదని — స్వర్గంలో పుట్టి భూమి చేత స్వీకరించబడినదని — అది గొప్ప రక్షణనూ గొప్ప కీర్తినీ ఇస్తుందని పాడతాడు. చివరిలో, తనను తాను శుద్ధి చేసుకుని ప్రజలను కీర్తిమంతులను చేయమని, ద్వేషించేవారందరినీ తరిమేయమని, నిందించేవారి నుండి పదునైన ఆయుధాలతో భక్తులను కాపాడమని సోముణ్ణి కోరతాడు."],
   ["dyk", "🔗", "Turvaśa and Yadu, named in Aamyahavya's hymn, are two of the five peoples descended from King Yayāti's sons — the same names that appear in Śukrācārya's story and in the Battle of the Ten Kings.", "ఆమ్యహవ్య సూక్తంలో పేర్కొన్న తుర్వశుడు, యదువు యయాతి కుమారుల నుండి వచ్చిన ఐదు జాతులలో ఇద్దరు — శుక్రాచార్యుని కథలోనూ, దశరాజ యుద్ధంలోనూ కనిపించే అవే పేర్లు."],
   ["sglink", "Read about Yadu and Turvasu in Śukrācārya's life", "శుక్రాచార్యుని జీవితంలో యదు, తుర్వసుల గురించి చదవండి", "sk-5"]
  ],
  [
   ["h", "Sung, Not Only Spoken", "పఠించడమే కాదు, గానం కూడా"],
   ["p", "Amahīyu's name lives in the Sāmaveda too. Among the sāmans — the melodies to which Vedic verses are sung at the great soma yajñas — there are chants called “Āmahīyava,” named after him. The Pañcaviṃśa Brāhmaṇa of the Sāmaveda and the Śatapatha Brāhmaṇa mention the Āmahīyava sāman in the order of the rites. So his name was not only recited in families; it was sung aloud by priests at the greatest sacrifices.", "అమహీయుని పేరు సామవేదంలోనూ ఉంది. సామాలలో — గొప్ప సోమయాగాలలో వేద మంత్రాలను పాడే రాగాలలో — ఆయన పేరు మీద “ఆమహీయవ” అనే సామాలు ఉన్నాయి. సామవేదానికి చెందిన పంచవింశ బ్రాహ్మణం, శతపథ బ్రాహ్మణం కర్మల క్రమంలో ఆమహీయవ సామాన్ని పేర్కొంటాయి. అంటే ఆయన పేరు కుటుంబాలలో పఠించబడడమే కాదు; మహా యాగాలలో ఋత్విక్కులు బిగ్గరగా గానం చేశారు కూడా."],
   ["p", "And his son, or descendant, carried the line forward: the next seer of this family was Urukṣaya Āmahīyava — {urukshaya|Orukshaya} — whose hymn is the next chapter.", "ఆయన కుమారుడు, లేదా వంశీయుడు, ఆ వంశాన్ని ముందుకు నడిపించాడు: ఈ వంశపు తర్వాతి ఋషి ఉరుక్షయ ఆమహీయవుడు — {urukshaya|ఔరుక్షయ} — ఆయన సూక్తం తర్వాతి అధ్యాయం."],
   ["src", "Ṛgveda 9.61 (ṛṣi: Amahīyu Āṅgirasa, according to the Ṛgveda Anukramaṇī; deity: Soma Pavamāna; 30 verses). The Āmahīyava sāman: Pañcaviṃśa Brāhmaṇa and Śatapatha Brāhmaṇa (Book 4). No narrative about Amahīyu is found in the Purāṇas or epics.", "ఋగ్వేదం 9.61 (ఋషి: ఋగ్వేద అనుక్రమణి ప్రకారం అమహీయు ఆంగిరసుడు; దేవత: సోమ పవమానుడు; 30 మంత్రాలు). ఆమహీయవ సామం: పంచవింశ బ్రాహ్మణం, శతపథ బ్రాహ్మణం (4వ కాండ). అమహీయుని గురించి పురాణాలలో, ఇతిహాసాలలో కథ లేదు."]
  ]
 ],
 remember: [
  ["{amahiyu|Aamyahavya} (Amahīyu) was a seer of Aṅgiras' family.", "{amahiyu|ఆమ్యహవ్య} (అమహీయుడు) అంగిరస వంశపు ఋషి."],
  ["He is the seer of Ṛgveda 9.61, a thirty-verse hymn to Soma.", "ఆయన ఋగ్వేదం 9.61 — సోమునికి ముప్పై మంత్రాల సూక్తం — ద్రష్ట."],
  ["Sāmaveda melodies called Āmahīyava carry his name.", "ఆమహీయవ అనే సామవేద గానాలు ఆయన పేరును కలిగి ఉన్నాయి."]
 ],
 think: ["We know almost nothing about Aamyahavya's life — only the hymn he saw. Would you rather be remembered for your story, or for one true thing you gave the world?", "ఆమ్యహవ్య జీవితం గురించి మనకు దాదాపు ఏమీ తెలియదు — ఆయన దర్శించిన సూక్తం తప్ప. మీ కథ కోసం గుర్తుండిపోవాలనుకుంటారా, లేదా లోకానికి మీరు ఇచ్చిన ఒక సత్యమైన వస్తువు కోసమా?"]
},
{
 id: "an-10", sage: "angiras", n: 10, order: 1910, date: "2026-10-17",
 title: "Orukshaya — the Seer of Agni", titleTe: "ఔరుక్షయ — అగ్ని మంత్ర ద్రష్ట",
 src: "Ṛgveda 10.118",
 who: ["urukshaya", "amahiyu", "agni"],
 pages: [
  [
   ["p", "The next seer of the line was Urukṣaya, called Āmahīyava — “of Amahīyu's family.” His descendants are the Aurukṣayas, and in Telugu families the name is recited as {urukshaya|Orukshaya} (ఔరుక్షయ). His name means “one whose dwelling is wide.”", "ఈ వంశపు తర్వాతి ఋషి ఉరుక్షయుడు — ఆమహీయవుడు, అంటే “అమహీయుని వంశీయుడు” అని పిలవబడ్డాడు. ఆయన వంశీయులు ఔరుక్షయులు; తెలుగు కుటుంబాలలో ఈ పేరును {urukshaya|ఔరుక్షయ} అని పఠిస్తారు. ఆయన పేరుకు అర్థం “విశాలమైన నివాసం గలవాడు.”"],
   ["p", "As with Amahīyu, no Purāṇa or epic tells a story of Urukṣaya's life. He is remembered for one thing: the hymn he saw — Ṛgveda 10.118, nine verses to {agni|Agni}, in the form of Agni Rakṣohan, “Agni the slayer of demons.” It is fitting. The family of Aṅgiras was born, the Veda says, from Agni's embers; and here, generations later, one of its seers sings to Agni as the protector of the yajña.", "అమహీయుని లాగే, ఉరుక్షయుని జీవిత కథను ఏ పురాణమూ, ఇతిహాసమూ చెప్పదు. ఆయన ఒకే ఒక్క కారణంతో గుర్తుండిపోయాడు: ఆయన దర్శించిన సూక్తం — ఋగ్వేదం 10.118 — {agni|అగ్నికి} తొమ్మిది మంత్రాలు, అగ్ని రక్షోహన్ — “రాక్షసులను సంహరించే అగ్ని” — రూపంలో. ఇది సముచితం. వేదం ప్రకారం అంగిరస వంశం అగ్ని కణికల నుండి పుట్టింది; తరాల తర్వాత ఆ వంశపు ఋషి ఒకరు యజ్ఞ రక్షకునిగా అగ్నిని కీర్తిస్తున్నాడు."]
  ],
  [
   ["h", "Ṛgveda 10.118 — a Hymn to Agni", "ఋగ్వేదం 10.118 — అగ్నికి సూక్తం"],
   ["p", "The hymn begins with Agni blazing among mortals, striking down the devourer who would steal the offering, and standing firm in his own place. Then it shows the fire rising at the yajña: called on in the proper way, delighting in ghee, set firmly in place by the ladles; shining brightly when invoked with the hymn, his face anointed for the work; spreading his light and his wealth.", "అగ్ని మనుషుల మధ్య జ్వలిస్తూ, హవిస్సును దోచుకోవడానికి వచ్చే భక్షకుణ్ణి కూల్చేస్తూ, తన స్థానంలో దృఢంగా నిలబడడంతో సూక్తం మొదలవుతుంది. తర్వాత యజ్ఞంలో పైకి లేచే అగ్నిని చూపిస్తుంది: విధిపూర్వకంగా ఆవాహన చేయబడి, నెయ్యితో ఆనందిస్తూ, స్రువాలతో స్థిరంగా ప్రతిష్ఠించబడి; మంత్రంతో ఆవాహన చేయగా ప్రకాశవంతంగా వెలుగుతూ, కార్యం కోసం ముఖం అభిషేకించబడి; తన కాంతినీ సంపదనూ వ్యాపింపజేస్తూ."],
   ["p", "Kindled for the gods, Agni opens a path upward for mortals, the hymn says; people serve him, the immortal, with ghee — he who cannot be defeated, the lord of the house. Then the seer prays: “Burn away the devouring darkness with your unbreakable flame, and guard the order of truth.” In the eighth verse Agni burns back the sorcerers and blazes “in wide dwellings” — and the Sanskrit word for wide dwellings is urukṣaya, the seer's own name, shining inside his hymn. The hymn ends with Agni, kindled by hymns, carrying the offerings — the most capable priest among people.", "దేవతల కోసం రగిలించబడిన అగ్ని మనుషులకు ఊర్ధ్వ మార్గం తెరుస్తాడని సూక్తం చెబుతుంది; అజేయుడూ గృహపతీ అయిన ఆ అమరుణ్ణి మనుషులు నెయ్యితో సేవిస్తారు. తర్వాత ఋషి ప్రార్థిస్తాడు: “విరగని నీ జ్వాలతో మింగేసే చీకటిని కాల్చేయి; ఋత ధర్మాన్ని కాపాడు.” ఎనిమిదవ మంత్రంలో అగ్ని మాయావులను వెనక్కి కాల్చేస్తూ “విశాల నివాసాలలో” ప్రకాశిస్తాడు — విశాల నివాసాలకు సంస్కృత పదం ఉరుక్షయ — ఋషి సొంత పేరే ఆయన సూక్తంలో వెలుగుతోంది. మంత్రాలతో రగిలించబడిన అగ్ని హవిస్సును మోసుకుపోవడంతో — మనుషులలో అత్యంత సమర్థుడైన ఋత్విక్కుగా — సూక్తం ముగుస్తుంది."],
   ["dyk", "✨", "The word urukṣaya, “wide dwelling,” appears inside the hymn itself (10.118.8). Many Vedic seers' names echo in their own hymns like this.", "“విశాల నివాసం” అనే ఉరుక్షయ పదం సూక్తంలోనే (10.118.8) వస్తుంది. ఎంతో మంది వైదిక ఋషుల పేర్లు ఇలాగే వారి సొంత సూక్తాలలో ప్రతిధ్వనిస్తాయి."]
  ],
  [
   ["h", "Three Generations of Light", "మూడు తరాల వెలుగు"],
   ["p", "Put the three together and see the shape of the family. Aṅgiras — born from Agni's embers, the father of the hymn-singers who freed the light from the dark cave. Aamyahavya — his descendant, who sang to Soma, the drink of joy and immortality. Orukshaya — Aamyahavya's descendant, who sang to Agni, the guardian fire that burns away darkness.", "ముగ్గురినీ కలిపి చూస్తే ఆ వంశపు ఆకారం కనిపిస్తుంది. ఆంగీరసుడు — అగ్ని కణికల నుండి పుట్టినవాడు, చీకటి గుహ నుండి వెలుగును విడిపించిన మంత్రగాయకుల తండ్రి. ఆమ్యహవ్య — ఆయన వంశీయుడు, ఆనందానికీ అమృతత్వానికీ పానీయమైన సోముణ్ణి కీర్తించాడు. ఔరుక్షయ — ఆమ్యహవ్య వంశీయుడు, చీకటిని కాల్చేసే రక్షకాగ్నిని కీర్తించాడు."],
   ["p", "Fire, Soma, fire again. Light from the beginning to the end. And these are the three names that are recited together, to this day, as a pravara — the subject of the last chapter.", "అగ్ని, సోముడు, మళ్ళీ అగ్ని. ఆది నుండి అంతం వరకు వెలుగు. ఈ మూడు పేర్లనే ఈ రోజుకీ కలిపి ప్రవరగా పఠిస్తారు — అదే చివరి అధ్యాయం."],
   ["src", "Ṛgveda 10.118 (ṛṣi: Urukṣaya Āmahīyava, according to the Ṛgveda Anukramaṇī; deity: Agni Rakṣohan; 9 verses). No narrative about Urukṣaya is found in the Purāṇas or epics.", "ఋగ్వేదం 10.118 (ఋషి: ఋగ్వేద అనుక్రమణి ప్రకారం ఉరుక్షయ ఆమహీయవుడు; దేవత: అగ్ని రక్షోహన్; 9 మంత్రాలు). ఉరుక్షయుని గురించి పురాణాలలో, ఇతిహాసాలలో కథ లేదు."]
  ]
 ],
 remember: [
  ["{urukshaya|Orukshaya} (Urukṣaya Āmahīyava) was a seer of Aamyahavya's line.", "{urukshaya|ఔరుక్షయ} (ఉరుక్షయ ఆమహీయవుడు) ఆమ్యహవ్య వంశపు ఋషి."],
  ["He is the seer of Ṛgveda 10.118, nine verses to Agni the protector.", "ఆయన ఋగ్వేదం 10.118 — రక్షకుడైన అగ్నికి తొమ్మిది మంత్రాలు — ద్రష్ట."],
  ["His name, “wide dwelling,” shines inside his own hymn.", "“విశాల నివాసం” అనే ఆయన పేరు ఆయన సూక్తంలోనే ప్రకాశిస్తుంది."]
 ],
 think: ["Aṅgiras, Aamyahavya and Orukshaya all sang of light — fire and Soma. What “light” would you like to carry forward from your own family?", "ఆంగీరస, ఆమ్యహవ్య, ఔరుక్షయ ముగ్గురూ వెలుగును — అగ్నినీ సోమునీ — కీర్తించారు. మీ కుటుంబం నుండి మీరు ఏ “వెలుగు”ను ముందుకు తీసుకెళ్ళాలనుకుంటున్నారు?"]
},
{
 id: "an-11", sage: "angiras", n: 11, order: 1911, date: "2026-10-17",
 title: "The Pravara — Angirasa · Aamyahavya · Orukshaya", titleTe: "ప్రవర — ఆంగీరస · ఆమ్యహవ్య · ఔరుక్షయ",
 src: "Śrauta and Gṛhya Sūtras · family tradition",
 who: ["angiras", "amahiyu", "urukshaya", "agni"],
 pages: [
  [
   ["p", "Every family in the Vedic tradition belongs to a gotra — a line traced back to a great ṛṣi. And with the gotra comes a pravara: a short list of the most distinguished ṛṣis among one's ancestors, usually three, sometimes one, two or five. When a person says the pravara, they are saying, in effect: “These are the seers from whom I come.”", "వైదిక సంప్రదాయంలోని ప్రతి కుటుంబమూ ఒక గోత్రానికి చెందుతుంది — ఒక మహర్షి వరకు గుర్తించే వంశం. గోత్రంతో పాటు ప్రవర వస్తుంది: పూర్వీకులలో అత్యంత విశిష్టులైన ఋషుల చిన్న జాబితా — సాధారణంగా ముగ్గురు, కొన్నిసార్లు ఒకరు, ఇద్దరు లేదా ఐదుగురు. ప్రవర చెప్పినప్పుడు, సారాంశంలో ఇలా చెబుతున్నారు: “నేను ఈ ఋషుల నుండి వచ్చాను.”"],
   ["p", "The three names of this pravara are each a family form. Āṅgirasa means “of Aṅgiras' line.” Āmahīyava means “of Amahīyu's line.” Aurukṣaya means “of Urukṣaya's line.” Families recite them in the familiar spoken way: Angirasa, Aamyahavya, Orukshaya — ఆంగీరస, ఆమ్యహవ్య, ఔరుక్షయ. A pravara of three is called trayārṣeya, “of three ṛṣis.”", "ఈ ప్రవరలోని మూడు పేర్లూ వంశ వాచకాలే. ఆంగీరస అంటే “అంగిరసుని వంశీయుడు.” ఆమహీయవ అంటే “అమహీయుని వంశీయుడు.” ఔరుక్షయ అంటే “ఉరుక్షయుని వంశీయుడు.” కుటుంబాలు వీటిని సుపరిచితమైన వాడుక రూపంలో పఠిస్తాయి: ఆంగీరస, ఆమ్యహవ్య, ఔరుక్షయ. ముగ్గురు ఋషుల ప్రవరను త్రయార్షేయం — “మూడు ఋషుల” — అంటారు."]
  ],
  [
   ["h", "Where the Pravara Came From", "ప్రవర ఎక్కడి నుండి వచ్చింది"],
   ["p", "The word pravara means “choosing” or “calling.” In the old Vedic yajña, at the start, the hotṛ priest would call on Agni to carry the offering — and he would call on Agni by naming the yajamāna's ancestral seers: in effect, “Agni of Aṅgiras, of Amahīyu, of Urukṣaya — come!” The fire was invited through the family's own ṛṣis. The Śrauta Sūtras of Baudhāyana, Āpastamba and Āśvalāyana carry long lists of these pravaras for every gotra.", "ప్రవర అంటే “ఎంచుకోవడం” లేదా “పిలవడం.” ప్రాచీన వైదిక యజ్ఞం ప్రారంభంలో హోత ఆహుతిని మోసుకుపోవడానికి అగ్నిని పిలిచేవాడు — యజమాని పూర్వ ఋషుల పేర్లు చెప్పి అగ్నిని ఆవాహన చేసేవాడు: సారాంశంలో, “అంగిరసుని, అమహీయుని, ఉరుక్షయుని అగ్నీ — రా!” కుటుంబపు సొంత ఋషుల ద్వారానే అగ్నిని ఆహ్వానించేవారు. బౌధాయన, ఆపస్తంబ, ఆశ్వలాయన శ్రౌత సూత్రాలు ప్రతి గోత్రానికీ ఈ ప్రవరల పెద్ద జాబితాలను కలిగి ఉన్నాయి."],
   ["dyk", "🔥", "So a pravara is, at its root, a way of calling the fire. For a family whose first ṛṣi was born from Agni's embers, that is especially fitting.", "అంటే ప్రవర మూలంలో అగ్నిని పిలిచే విధానం. తొలి ఋషి అగ్ని కణికల నుండి పుట్టిన కుటుంబానికి అది మరింత సముచితం."]
  ],
  [
   ["h", "How It Is Said Today", "ఈ రోజు ఎలా చెబుతారు"],
   ["p", "The pravara is said at many moments of life: at the upanayanam, when a boy first learns the Gāyatrī; every day in sandhyāvandana, in the abhivādana, the formal greeting with which one bows to elders and teachers; at weddings; and in rites for the ancestors. In the abhivādana, a person names their pravara, their gotra, the Veda-sūtra they follow, and their own name. For this pravara it takes this shape (fill in the family's own gotra, sūtra, śākhā and name):", "జీవితంలో ఎన్నో సందర్భాలలో ప్రవర చెబుతారు: ఉపనయనంలో — బాలుడు మొదట గాయత్రి నేర్చుకున్నప్పుడు; ప్రతి రోజూ సంధ్యావందనంలోని అభివాదనలో — పెద్దలకూ గురువులకూ నమస్కరించే విధిపూర్వక వందనం; వివాహాలలో; పితృ కర్మలలో. అభివాదనలో మనిషి తన ప్రవర, గోత్రం, అనుసరించే వేద సూత్రం, తన పేరు చెబుతాడు. ఈ ప్రవరకు అది ఈ రూపంలో ఉంటుంది (కుటుంబపు సొంత గోత్రం, సూత్రం, శాఖ, పేరు నింపుకోవాలి):"],
   ["sloka", ["చతుస్సాగరపర్యంతం గోబ్రాహ్మణేభ్యః శుభం భవతు ।", "ఆంగీరస ఆమ్యహవ్య ఔరుక్షయ త్రయార్షేయ ప్రవరాన్విత", "… గోత్రః … సూత్రః … శాఖాధ్యాయీ … శర్మా అహం భో అభివాదయే ॥"], ["catussāgaraparyantaṃ go-brāhmaṇebhyaḥ śubhaṃ bhavatu |", "āṅgirasa āmyahavya aurukṣaya trayārṣeya pravarānvita", "… gotraḥ … sūtraḥ … śākhādhyāyī … śarmā ahaṃ bho abhivādaye ||"], "“May all be well with the cows and the learned, to the shores of the four oceans. I, of the three-ṛṣi pravara Āṅgirasa, Āmahīyava, Aurukṣaya, of … gotra, following … sūtra, student of the … śākhā, named … Śarmā, offer my respectful greeting.”", "“నాలుగు సముద్రాల తీరాల వరకు గోవులకూ బ్రాహ్మణులకూ శుభం కలుగుగాక. ఆంగీరస, ఆమ్యహవ్య, ఔరుక్షయ అనే త్రయార్షేయ ప్రవర గల, … గోత్రుడు, … సూత్రుడు, … శాఖాధ్యాయి అయిన … శర్మ అనే నేను నమస్కరిస్తున్నాను.”"],
   ["dyk", "💍", "Families also use the pravara at weddings: by old rule, a bride and groom should not share the same gotra or pravara ṛṣis.", "కుటుంబాలు వివాహాలలో కూడా ప్రవరను ఉపయోగిస్తాయి: పూర్వ నియమం ప్రకారం వధూవరులకు ఒకే గోత్రం గానీ ఒకే ప్రవర ఋషులు గానీ ఉండకూడదు."],
   ["p", "So whenever these three names are said — Angirasa, Aamyahavya, Orukshaya — a person is connecting themselves, in one breath, to a sage born of fire at the beginning of creation, to a seer who sang to Soma, and to a seer who sang to Agni, and through them to the light those hymns were seen for.", "అంటే ఈ మూడు పేర్లు — ఆంగీరస, ఆమ్యహవ్య, ఔరుక్షయ — చెప్పిన ప్రతిసారీ, మనిషి ఒకే శ్వాసలో సృష్టి ఆరంభంలో అగ్ని నుండి పుట్టిన మహర్షితో, సోముణ్ణి కీర్తించిన ఋషితో, అగ్నిని కీర్తించిన ఋషితో — వారి ద్వారా ఆ మంత్రాలు దర్శించబడిన వెలుగుతో — తనను తాను జోడించుకుంటున్నాడు."],
   ["src", "Baudhāyana, Āpastamba and Āśvalāyana Śrauta Sūtras (the pravara lists and the calling of Agni); the Gṛhya Sūtras (upanayana and marriage); the abhivādana form as recited in South Indian, including Telugu, family tradition. Spoken forms of the names vary by region and family.", "బౌధాయన, ఆపస్తంబ, ఆశ్వలాయన శ్రౌత సూత్రాలు (ప్రవర జాబితాలు, అగ్ని ఆవాహన); గృహ్య సూత్రాలు (ఉపనయనం, వివాహం); దక్షిణ భారత — తెలుగు సహా — కుటుంబ సంప్రదాయంలో పఠించే అభివాదన రూపం. పేర్ల వాడుక రూపాలు ప్రాంతాన్ని బట్టి, కుటుంబాన్ని బట్టి మారుతాయి."]
  ]
 ],
 remember: [
  ["A pravara names the most distinguished ṛṣis among one's ancestors.", "పూర్వీకులలో అత్యంత విశిష్టులైన ఋషుల పేర్లు చెప్పేదే ప్రవర."],
  ["Āṅgirasa, Āmahīyava, Aurukṣaya mean “of the line of Aṅgiras, Amahīyu and Urukṣaya.”", "ఆంగీరస, ఆమహీయవ, ఔరుక్షయ అంటే “అంగిరస, అమహీయ, ఉరుక్షయుల వంశీయుడు.”"],
  ["At its root, the pravara was the way the priest called Agni at the yajña.", "మూలంలో ప్రవర యజ్ఞంలో ఋత్విక్కు అగ్నిని పిలిచే విధానం."]
 ],
 think: ["When you say your pravara, you name seers who lived thousands of years ago. What would you like your own descendants to remember about you?", "మీ ప్రవర చెప్పినప్పుడు వేలాది సంవత్సరాల క్రితం జీవించిన ఋషుల పేర్లు చెబుతున్నారు. మీ సంతతి మీ గురించి ఏమి గుర్తుంచుకోవాలని కోరుకుంటారు?"]
},
{
 id: "an-12", sage: "angiras", n: 12, order: 1912, date: "2026-10-21",
 title: "The Great Family — Bharadvāja, Garga, Droṇa, Gotama", titleTe: "మహా వంశం — భరద్వాజుడు, గర్గుడు, ద్రోణుడు, గోతముడు",
 src: "Caraka Saṃhitā · Bhāgavata · Mahābhārata · Ṛgveda",
 who: ["angiras", "brihaspati", "bharadvajamuni", "garga", "krishna", "drona", "gotama"],
 pages: [
  [
   ["p", "Few families in our tradition have given the world as many great people as the family of {angiras|Aṅgiras}. We have already met his son {brihaspati|Bṛhaspati}, guru of the gods, and his grandson Dīrghatamas. This last chapter follows the family further down — to a grandson who brought medicine to the earth, a great-grandson who named Kṛṣṇa, the teacher of the Pāṇḍavas and Kauravas, and a seer whose hymn of peace is still chanted every day.", "మన సంప్రదాయంలో {angiras|అంగిరసుని} వంశమంత గొప్పవారిని లోకానికి ఇచ్చిన వంశాలు చాలా అరుదు. ఆయన కుమారుడు, దేవగురువు {brihaspati|బృహస్పతిని}, మనవడు దీర్ఘతముణ్ణి ఇప్పటికే కలిశాం. ఈ చివరి అధ్యాయం ఆ వంశాన్ని ఇంకా ముందుకు అనుసరిస్తుంది — భూమికి వైద్యాన్ని తెచ్చిన మనవడు, శ్రీకృష్ణునికి పేరు పెట్టిన మునిమనవడు, పాండవ కౌరవుల గురువు, ఈ రోజుకీ ప్రతి రోజూ పఠించే శాంతి మంత్రాన్ని దర్శించిన ఋషి."],
   ["h", "Bharadvāja — Who Brought Āyurveda to Earth", "భరద్వాజుడు — ఆయుర్వేదాన్ని భూమికి తెచ్చినవాడు"],
   ["p", "{bharadvajamuni|Bharadvāja} was the son of Bṛhaspati and Mamatā, raised by the Maruts — so Aṅgiras' grandson. The Caraka Saṃhitā, the great book of Āyurveda, tells how medicine came to us. Long ago, disease spread among living beings and stopped people from doing tapas, study and good work. The great sages gathered on the slopes of the Himālayas to find a way. Bharadvāja stepped forward: “I will go.” He went to Indra, who had learned the science of life from the Aśvins, who had it from Dakṣa, who had it from Brahmā. Bharadvāja learned it all from Indra and brought it back to the sages; his student Ātreya Punarvasu taught it to Agniveśa and others, and from them came the Āyurveda we know.", "{bharadvajamuni|భరద్వాజుడు} బృహస్పతి, మమతల కుమారుడు; మరుత్తులు పెంచారు — అంటే అంగిరసుని మనవడు. మనకు వైద్యం ఎలా వచ్చిందో ఆయుర్వేద మహాగ్రంథమైన చరక సంహిత చెబుతుంది. చాలా కాలం క్రితం ప్రాణులలో రోగాలు వ్యాపించి, తపస్సు, అధ్యయనం, మంచి పనులు చేయకుండా మనుషులను ఆపాయి. మార్గం కనుగొనడానికి మహర్షులు హిమాలయ వాలులలో సమావేశమయ్యారు. భరద్వాజుడు ముందుకు వచ్చాడు: “నేను వెళ్తాను.” ఇంద్రుని దగ్గరికి వెళ్ళాడు — ఇంద్రుడు ఆయుర్వేదాన్ని అశ్వినుల నుండి, వారు దక్షుని నుండి, దక్షుడు బ్రహ్మ నుండి నేర్చుకున్నారు. భరద్వాజుడు ఇంద్రుని నుండి అంతా నేర్చుకుని మహర్షులకు తెచ్చాడు; ఆయన శిష్యుడు ఆత్రేయ పునర్వసుడు అగ్నివేశుడు మొదలైనవారికి బోధించాడు; వారి నుండే మనకు తెలిసిన ఆయుర్వేదం వచ్చింది."],
   ["dyk", "🌿", "Bharadvāja's family also saw the sixth book of the Ṛgveda. And in the Rāmāyaṇa it is Bharadvāja who welcomes Rāma at Prayāga, and later feasts Bharata's whole army.", "ఋగ్వేదపు ఆరవ మండలాన్ని కూడా భరద్వాజ వంశమే దర్శించింది. రామాయణంలో ప్రయాగలో రాముణ్ణి ఆహ్వానించిందీ, తర్వాత భరతుని సైన్యమంతటికీ విందు చేసిందీ భరద్వాజుడే."],
   ["link", "Read it in the Rāmāyaṇa: Bharadvāja's Feast", "రామాయణంలో చదవండి: భరద్వాజుని విందు", "ayodhya-16"]
  ],
  [
   ["h", "Garga — Who Named Kṛṣṇa", "గర్గుడు — శ్రీకృష్ణునికి పేరు పెట్టినవాడు"],
   ["p", "{garga|Garga} belongs to Bharadvāja's line. The Ṛgveda's index of seers names a Garga, son of Bharadvāja, as the seer of one of its hymns (6.47); the epics and Purāṇas place Garga a few generations later in Bharadvāja's family. Family tradition adds that his mother was a kṣatriya woman named Suśīlā; the main texts do not name her. A book of astronomy and the devotional Garga Saṃhitā about Kṛṣṇa are both traditionally credited to him.", "{garga|గర్గుడు} భరద్వాజ వంశీయుడు. ఋగ్వేద ఋషి సూచిక భరద్వాజుని కుమారుడైన గర్గుణ్ణి ఒక సూక్తానికి (6.47) ద్రష్టగా పేర్కొంటుంది; ఇతిహాస పురాణాలు గర్గుణ్ణి భరద్వాజ వంశంలో కొన్ని తరాల తర్వాత ఉంచుతాయి. ఆయన తల్లి సుశీల అనే క్షత్రియ స్త్రీ అని కుటుంబ సంప్రదాయం చెబుతుంది; ప్రధాన గ్రంథాలు ఆమె పేరు చెప్పవు. ఒక జ్యోతిష గ్రంథమూ, శ్రీకృష్ణుని గురించిన భక్తి గ్రంథమైన గర్గ సంహితా సంప్రదాయంగా ఆయనవిగా చెప్పబడతాయి."],
   ["p", "Garga was the family priest of the Yadus. The Bhāgavata tells that after Kṛṣṇa was secretly carried to Gokula, Vasudeva sent Garga to Nanda's house to perform the naming ceremony. Garga said, “If Kaṃsa hears that the Yadus' priest named this child, he will guess whose son he is.” So Nanda took him to the cowshed, and there, in secret, Garga named the two boys. Rohiṇī's son he called Rāma, Bala and Saṅkarṣaṇa. And of Yaśodā's dark little boy he said: “In other ages he took white, red and yellow colours. Now he has come dark — so he is Kṛṣṇa, the dark one.”", "గర్గుడు యదువంశానికి కులపురోహితుడు. శ్రీకృష్ణుణ్ణి రహస్యంగా గోకులానికి తీసుకెళ్ళాక, నామకరణం చేయడానికి వసుదేవుడు గర్గుణ్ణి నందుని ఇంటికి పంపాడని భాగవతం చెబుతుంది. గర్గుడు అన్నాడు: “యదువుల పురోహితుడు ఈ బిడ్డకు పేరు పెట్టాడని కంసునికి తెలిస్తే ఇతను ఎవరి కొడుకో ఊహిస్తాడు.” అందుకే నందుడు ఆయనను గోశాలకు తీసుకెళ్ళాడు; అక్కడ రహస్యంగా గర్గుడు ఇద్దరు బాలురకూ పేర్లు పెట్టాడు. రోహిణి కుమారునికి రాముడు, బలుడు, సంకర్షణుడు అని పేర్లు పెట్టాడు. యశోద నల్లని చిన్నారి గురించి అన్నాడు: “ఇతర యుగాలలో ఇతను తెలుపు, ఎరుపు, పసుపు రంగులు దాల్చాడు. ఇప్పుడు నల్లగా వచ్చాడు — కాబట్టి ఇతను కృష్ణుడు, నల్లనివాడు.”"]
  ],
  [
   ["h", "Droṇa — Teacher of Princes", "ద్రోణుడు — రాకుమారుల గురువు"],
   ["p", "{drona|Droṇa} was Bharadvāja's own son, and so of Aṅgiras' family; the Mahābhārata often calls him Āṅgirasa. One day, the Mahābhārata says, Bharadvāja saw the apsaras Ghṛtācī by the Gaṅgā; his seed fell, and he placed it in a droṇa, a wooden vessel. From it the boy was born and named Droṇa. He learned the Vedas and every weapon — including the divine weapons from Paraśurāma — and became the teacher of archery to the Kauravas and the Pāṇḍavas. Arjuna was his dearest student; his own son was Aśvatthāmā.", "{drona|ద్రోణుడు} భరద్వాజుని సొంత కుమారుడు — అంటే అంగిరస వంశీయుడు; మహాభారతం ఆయనను తరచూ ఆంగీరసుడు అని పిలుస్తుంది. ఒక రోజు భరద్వాజుడు గంగా తీరంలో ఘృతాచి అనే అప్సరసను చూశాడని, ఆయన వీర్యం జారిపడగా దాన్ని ద్రోణంలో — చెక్క కలశంలో — ఉంచాడని మహాభారతం చెబుతుంది. దాని నుండి పుట్టిన బాలునికి ద్రోణుడు అని పేరు పెట్టారు. వేదాలనూ, పరశురాముని నుండి దివ్యాస్త్రాలతో సహా అన్ని అస్త్రాలనూ నేర్చుకుని కౌరవ పాండవులకు ధనుర్విద్య గురువయ్యాడు. అర్జునుడు ఆయనకు అత్యంత ప్రియ శిష్యుడు; ఆయన సొంత కుమారుడు అశ్వత్థామ."],
   ["h", "Gotama Rāhūgaṇa — the Hymn of Peace", "గోతమ రాహూగణుడు — శాంతి సూక్తం"],
   ["p", "{gotama|Gotama Rāhūgaṇa}, “Gotama of Rahūgaṇa's family,” was a seer closely bound to the Aṅgirases. The Ṛgveda's index of seers gives him a whole run of hymns in the first book (1.74–93), to Agni, Indra, the Maruts, Soma and the All-Gods. His sons Vāmadeva and Nodhas were seers too — Vāmadeva saw much of the fourth book. Among Gotama's hymns is 1.89, which begins with the prayer “Let good thoughts come to us from every side.” One of its verses — asking that our ears hear only what is good and our eyes see only what is good — is recited as the peace chant before the Muṇḍaka, Praśna and Māṇḍūkya Upaniṣads, and in homes and temples every day.", "{gotama|గోతమ రాహూగణుడు} — “రహూగణ వంశపు గోతముడు” — అంగిరసులతో గాఢంగా ముడిపడిన ఋషి. ఋగ్వేద ఋషి సూచిక మొదటి మండలంలో ఆయనకు వరుసగా ఎన్నో సూక్తాలను (1.74–93) — అగ్ని, ఇంద్రుడు, మరుత్తులు, సోముడు, విశ్వేదేవతలకు — ఇస్తుంది. ఆయన కుమారులు వామదేవుడు, నోధసుడు కూడా ఋషులే — నాల్గవ మండలంలో చాలా భాగం వామదేవుడు దర్శించాడు. గోతముని సూక్తాలలో 1.89 ఒకటి — “అన్ని దిక్కుల నుండి మాకు మంచి ఆలోచనలు రావుగాక” అనే ప్రార్థనతో మొదలవుతుంది. మన చెవులు మంచినే వినాలని, కళ్ళు మంచినే చూడాలని కోరే దాని ఒక మంత్రం ముండక, ప్రశ్న, మాండూక్య ఉపనిషత్తుల ముందు శాంతి మంత్రంగా, ఇళ్ళలో దేవాలయాలలో ప్రతి రోజూ పఠించబడుతుంది."],
   ["dyk", "🔀", "Is Gotama Rāhūgaṇa the same as Gautama, the husband of Ahalyā? Some tellings join them; most scholars treat them as two different sages. Gautama of Ahalyā will have his own place among the sages.", "గోతమ రాహూగణుడూ, అహల్య భర్త గౌతముడూ ఒకరేనా? కొన్ని కథనాలు ఇద్దరినీ ఒకరిగా చెబుతాయి; చాలామంది పండితులు ఇద్దరు వేర్వేరు మహర్షులుగా భావిస్తారు. అహల్య భర్త గౌతమునికి మహర్షుల మధ్య ప్రత్యేక స్థానం ఉంటుంది."],
   ["src", "Caraka Saṃhitā, Sūtrasthāna 1 (Bharadvāja and Āyurveda); Bhāgavata Purāṇa 9.20–21 (Bharadvāja's line) and 10.8 (Garga names Kṛṣṇa and Balarāma; also Viṣṇu Purāṇa 5.6); Ṛgveda Anukramaṇī (Garga Bhāradvāja, 6.47; Gotama Rāhūgaṇa, 1.74–93); Mahābhārata, Ādi Parva (Droṇa's birth); Atharvaveda and Śatapatha Brāhmaṇa (Gotama Rāhūgaṇa). Suśīlā as Garga's mother is family tradition.", "చరక సంహిత, సూత్రస్థానం 1 (భరద్వాజుడు, ఆయుర్వేదం); భాగవత పురాణం 9.20–21 (భరద్వాజ వంశం), 10.8 (గర్గుడు కృష్ణ బలరాములకు నామకరణం; విష్ణు పురాణం 5.6 లో కూడా); ఋగ్వేద అనుక్రమణి (గర్గ భారద్వాజుడు, 6.47; గోతమ రాహూగణుడు, 1.74–93); మహాభారతం, ఆదిపర్వం (ద్రోణ జననం); అథర్వ వేదం, శతపథ బ్రాహ్మణం (గోతమ రాహూగణుడు). గర్గుని తల్లి సుశీల అనేది కుటుంబ సంప్రదాయం."]
  ]
 ],
 remember: [
  ["{bharadvajamuni|Bharadvāja}, Aṅgiras' grandson, learned Āyurveda from Indra and brought it to the sages.", "అంగిరసుని మనవడు {bharadvajamuni|భరద్వాజుడు} ఇంద్రుని నుండి ఆయుర్వేదం నేర్చుకుని మహర్షులకు తెచ్చాడు."],
  ["{garga|Garga} of Bharadvāja's line, priest of the Yadus, secretly named Kṛṣṇa and Balarāma.", "భరద్వాజ వంశపు, యదువుల పురోహితుడైన {garga|గర్గుడు} రహస్యంగా కృష్ణ బలరాములకు నామకరణం చేశాడు."],
  ["{drona|Droṇa}, Bharadvāja's son, taught the Kauravas and Pāṇḍavas; {gotama|Gotama Rāhūgaṇa} saw the peace hymn 1.89.", "భరద్వాజుని కుమారుడు {drona|ద్రోణుడు} కౌరవ పాండవులకు బోధించాడు; {gotama|గోతమ రాహూగణుడు} శాంతి సూక్తం 1.89 దర్శించాడు."]
 ],
 think: ["One family gave the world medicine, Kṛṣṇa's name, the teacher of the Mahābhārata's heroes and a daily prayer for peace. What would you like your family to give the world?", "ఒకే వంశం లోకానికి వైద్యాన్ని, కృష్ణుని పేరును, మహాభారత వీరుల గురువును, ప్రతి రోజూ శాంతి ప్రార్థనను ఇచ్చింది. మీ కుటుంబం లోకానికి ఏమి ఇవ్వాలని మీరు కోరుకుంటారు?"]
}
]);
