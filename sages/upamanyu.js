// Great Sages — Upamanyu. Retold by Hari Pokkuluri.
// Told from the Mahābhārata (Ādi Parva, Pauṣya section; Anuśāsana Parva, Dānadharma section — Kṛṣṇa's
// account to Yudhiṣṭhira of Upamanyu and the thousand names of Śiva), with the Liṅga and Śiva Purāṇas,
// the Chāndogya Upaniṣad, Yāska's Nirukta and later Tamil Śaiva works, in fresh original wording.
// Block format: see the top of ramayana.js and sages.js.
// Note: the Ādi Parva's Upamanyu is the pupil of Āyoda Dhaumya (key "dhaumya", from sages/uttanka.js);
// the Anuśāsana Parva's Upamanyu is the son of Vyāghrapāda, with a brother named Dhaumya (key "dhaumya_u").
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { upamanyu: [
  ["One Name, Two Boyhoods", "Mahābhārata, Ādi Parva · Anuśāsana Parva"],
  ["The Cowherd Pupil — Four Ways to Eat, Four Times Forbidden", "Mahābhārata, Ādi Parva (Pauṣya section)"],
  ["Blind in the Dry Well", "Mahābhārata, Ādi Parva (Pauṣya section)"],
  ["The Cake He Would Not Eat", "Mahābhārata, Ādi Parva (Pauṣya section)"],
  ["Flour in Water — the Boy Who Asked for Milk", "Mahābhārata, Anuśāsana Parva (Dānadharma section)"],
  ["Indra on the White Elephant", "Mahābhārata, Anuśāsana Parva · Liṅga Purāṇa · Śiva Purāṇa"],
  ["The Ocean of Milk", "Mahābhārata, Anuśāsana Parva · Liṅga Purāṇa · Śiva Purāṇa · later Tamil tradition"],
  ["Kṛṣṇa at the Hermitage", "Mahābhārata, Anuśāsana Parva (Dānadharma section)"],
  ["The Thousand Names of Śiva", "Mahābhārata, Anuśāsana Parva · Śiva Purāṇa (Vāyavīya Saṃhitā)"],
  ["What Upamanyu Leaves Us", "Chāndogya Upaniṣad · Nirukta · Periya Purāṇam · later tradition"]
] });
window.RMY_WHO = Object.assign({
  "vyaghrapada": { "av": "🐅", "en": "Vyāghrapāda", "te": "వ్యాఘ్రపాదుడు", "d": "“Tiger-foot”, a forest sage; in the Anuśāsana Parva he is the father of Upamanyu and Dhaumya. Later Tamil tradition links him with Chidambaram.", "dt": "“పులి పాదాలవాడు” — అడవిలో ఉండే ముని. అనుశాసన పర్వంలో ఉపమన్యుడు, ధౌమ్యుల తండ్రి. తర్వాతి తమిళ సంప్రదాయం ఆయనను చిదంబరంతో ముడిపెడుతుంది." },
  "dhaumya_u": { "av": "👦", "en": "Dhaumya (Upamanyu's brother)", "te": "ధౌమ్యుడు (ఉపమన్యుని తమ్ముడు)", "d": "In the Anuśāsana Parva, Upamanyu's younger brother, son of Vyāghrapāda, who also asked their mother for milk as a child.", "dt": "అనుశాసన పర్వంలో ఉపమన్యుని తమ్ముడు, వ్యాఘ్రపాదుని కొడుకు; చిన్నప్పుడు అన్నతో కలిసి తల్లిని పాలు అడిగినవాడు." },
  "jambavati": { "av": "🐻", "en": "Jāmbavatī", "te": "జాంబవతి", "d": "Daughter of Jāmbavān and one of Kṛṣṇa's chief queens; for her wish for a son, Kṛṣṇa went to Upamanyu's hermitage. Her son was Sāmba.", "dt": "జాంబవంతుని కుమార్తె, శ్రీకృష్ణుని పట్టమహిషులలో ఒకతె. ఆమె కొడుకు కావాలని కోరగా కృష్ణుడు ఉపమన్యుని ఆశ్రమానికి వెళ్ళాడు. ఆమె కొడుకు సాంబుడు." },
  "tandi": { "av": "📿", "en": "Taṇḍi", "te": "తండి మహర్షి", "d": "An ancient sage who, the Anuśāsana Parva says, worshipped Śiva for ages in the Kṛta age and received the thousand names of Śiva, which came down to Upamanyu.", "dt": "ప్రాచీన మహర్షి. కృతయుగంలో ఎంతో కాలం శివుణ్ణి ఆరాధించి శివ సహస్రనామాలను పొందాడని అనుశాసన పర్వం చెబుతుంది; అవే ఉపమన్యునికి వచ్చాయి." },
  "prachinashala": { "av": "🔥", "en": "Prācīnaśāla Aupamanyava", "te": "ప్రాచీనశాల ఔపమన్యవుడు", "d": "A rich householder of the Chāndogya Upaniṣad, “son (or descendant) of Upamanyu”, who went with four others to King Aśvapati to learn about the Universal Self.", "dt": "ఛాందోగ్య ఉపనిషత్తులోని సంపన్న గృహస్థుడు, “ఉపమన్యుని కొడుకు (లేదా వంశస్థుడు)”. మరో నలుగురితో కలిసి వైశ్వానర ఆత్మ గురించి తెలుసుకోవడానికి అశ్వపతి మహారాజు దగ్గరకు వెళ్ళాడు." },
  "ashvapati": { "av": "👑", "en": "Aśvapati Kaikeya", "te": "అశ్వపతి కైకేయుడు", "d": "A wise king of the Kekayas in the Chāndogya Upaniṣad, who taught six learned householders about the Self that is in everyone.", "dt": "ఛాందోగ్య ఉపనిషత్తులోని కేకయ దేశపు జ్ఞాని రాజు. ఆరుగురు పండిత గృహస్థులకు అందరిలో ఉన్న ఆత్మ గురించి బోధించాడు." },
  "yaska": { "av": "📖", "en": "Yāska", "te": "యాస్కుడు", "d": "Author of the Nirukta, the oldest surviving book that explains the meanings of hard Vedic words.", "dt": "నిరుక్తం రచయిత. కష్టమైన వేద పదాల అర్థాలను వివరించే, ఇప్పటికి మిగిలిన అతి ప్రాచీన గ్రంథం అది." },
  "sekkizhar": { "av": "🪶", "en": "Sekkiḻār", "te": "శేక్కిళార్", "d": "Twelfth-century Tamil poet and minister of the Cōḻa court who wrote the Periya Purāṇam, the lives of the sixty-three Śaiva saints (Nāyaṉmārs).", "dt": "పన్నెండవ శతాబ్దపు తమిళ కవి, చోళ రాజ్యంలో మంత్రి. అరవై ముగ్గురు శివభక్తుల (నాయనార్ల) జీవితాలైన పెరియ పురాణాన్ని రచించాడు." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "up-1", sage: "upamanyu", n: 1, order: 3101, date: "2026-11-02",
 title: "One Name, Two Boyhoods", titleTe: "ఒకే పేరు, రెండు బాల్యాలు",
 src: "Mahābhārata, Ādi Parva · Anuśāsana Parva",
 who: ["upamanyu", "dhaumya", "ashvins", "vyaghrapada", "shiva", "krishna"],
 pages: [
  [
   ["p", "Some sages are famous for what they knew. {upamanyu|Upamanyu} is famous for what he was willing to do without. Twice in the Mahābhārata we meet a boy of this name, and both times the story turns on the simplest thing a child can want — something to eat, a cup of milk. Both times the boy goes hungry rather than take what is not rightly his. And both times heaven itself comes down to him.", "కొందరు మునులు తమకు తెలిసిన జ్ఞానం వల్ల ప్రసిద్ధులు. {upamanyu|ఉపమన్యుడు} మాత్రం తాను దేనిని వదులుకోగలిగాడో దానివల్ల ప్రసిద్ధుడు. మహాభారతంలో ఈ పేరుగల బాలుడు రెండుసార్లు కనిపిస్తాడు. రెండుసార్లూ కథ ఒక పిల్లవాడు కోరుకునే అతి సాధారణమైన దాని చుట్టూ తిరుగుతుంది — కాస్త తిండి, ఒక గ్లాసు పాలు. రెండుసార్లూ ఆ బాలుడు తనకు న్యాయంగా దక్కని దానిని తీసుకోకుండా ఆకలితోనే ఉంటాడు. రెండుసార్లూ దేవతలే దిగివచ్చి అతనిని కలుస్తారు."],
   ["p", "The first story stands at the very opening of the epic, in the Ādi Parva. There Upamanyu is a pupil of the stern teacher {dhaumya|Āyoda Dhaumya}. He herds his teacher's cows, is forbidden every way of feeding himself, goes blind, falls into a well — and is healed by the twin physicians of the gods, the {ashvins|Aśvins}.", "మొదటి కథ ఇతిహాసం ఆరంభంలోనే, ఆది పర్వంలో ఉంది. అక్కడ ఉపమన్యుడు కఠినమైన గురువు {dhaumya|ఆయోదధౌమ్యుని} శిష్యుడు. గురువు ఆవులను మేపుతాడు; తిండికి ఉన్న ప్రతి దారీ మూసుకుపోతుంది; కళ్ళు పోతాయి; బావిలో పడతాడు — చివరికి దేవవైద్యులైన {ashvins|అశ్వినీ దేవతలు} అతనికి చూపు తిరిగి ఇస్తారు."]
  ],
  [
   ["p", "The second story comes near the end, in the Anuśāsana Parva, told by {krishna|Kṛṣṇa} himself to Yudhiṣṭhira. There Upamanyu is the son of a poor forest sage named {vyaghrapada|Vyāghrapāda}. As a little boy he cries for milk; his mother has none to give; and he grows up to win, by long worship of {shiva|Śiva}, a whole ocean of milk. Later he becomes Kṛṣṇa's own teacher in the worship of Śiva, and hands him the thousand names of Śiva.", "రెండవ కథ ఇతిహాసం చివరి భాగంలో, అనుశాసన పర్వంలో ఉంది. దానిని స్వయంగా {krishna|శ్రీకృష్ణుడే} ధర్మరాజుకు చెబుతాడు. అక్కడ ఉపమన్యుడు {vyaghrapada|వ్యాఘ్రపాదుడు} అనే పేద ముని కొడుకు. చిన్నతనంలో పాల కోసం ఏడుస్తాడు; తల్లి దగ్గర ఇవ్వడానికి పాలు ఉండవు; పెద్దయ్యాక {shiva|శివుని} గురించి దీర్ఘ తపస్సు చేసి ఏకంగా పాల సముద్రాన్నే పొందుతాడు. ఆ తరువాత శివారాధనలో కృష్ణునికే గురువై, శివ సహస్రనామాలను ఆయనకు అందిస్తాడు."],
   ["p", "Are they the same man? The epic never says so. The teacher of the first is Āyoda Dhaumya; in the second, Dhaumya is the name of Upamanyu's younger brother. Many later tellers have joined the two lives into one, and it is easy to see why — the same name, the same hunger, the same Dhaumya close by, the same reward from the gods. In this book we tell both, side by side, and say each time which story is speaking.", "వీరిద్దరూ ఒక్కరేనా? ఇతిహాసం అలా ఎక్కడా చెప్పదు. మొదటి కథలో గురువు ఆయోదధౌమ్యుడు; రెండవ కథలో ధౌమ్యుడు ఉపమన్యుని తమ్ముడి పేరు. తర్వాతి కాలపు కథకులు చాలామంది ఈ రెండు జీవితాలనూ ఒకటిగా కలిపేశారు — ఎందుకో సులభంగానే అర్థమవుతుంది: ఒకటే పేరు, ఒకటే ఆకలి, దగ్గరలోనే ఒక ధౌమ్యుడు, దేవతల నుండి ఒకేలాంటి వరం. ఈ పుస్తకంలో మనం రెండు కథలనూ పక్కపక్కనే చెబుతాం; ప్రతిసారీ ఏ కథ మాట్లాడుతోందో చెబుతాం."]
  ],
  [
   ["h", "What the two stories share", "రెండు కథలలో ఉన్న ఒకే సత్యం"],
   ["p", "Put them together and a single picture appears: a child who learns, very early, that hunger can be borne, and that some things matter more than a full stomach — obedience to a teacher in the first story, faithfulness to God in the second. From that small beginning grows a sage whom the Śaiva tradition counts among the greatest teachers of Śiva's worship, honoured from the Himālaya to the temples of Tamil country.", "రెండింటినీ కలిపి చూస్తే ఒకే చిత్రం కనిపిస్తుంది: ఆకలిని భరించవచ్చని, కడుపు నిండడం కంటే ముఖ్యమైనవి కొన్ని ఉన్నాయని చాలా చిన్న వయసులోనే నేర్చుకున్న ఒక పిల్లవాడు. మొదటి కథలో అది గురువు మాట; రెండవ కథలో అది భగవంతుని పట్ల నమ్మకం. ఆ చిన్న ఆరంభం నుండే ఒక మహర్షి ఎదిగాడు — శైవ సంప్రదాయం ఆయనను శివారాధనకు గొప్ప గురువులలో ఒకనిగా లెక్కిస్తుంది; హిమాలయాల నుండి తమిళనాడు ఆలయాల వరకూ ఆయనను పూజిస్తారు."],
   ["dyk", "🥛", "Milk runs through both of Upamanyu's stories. In the first he is forbidden to drink it; in the second he cries because there is none. In the end the gods give him more than he could ever drink.", "ఉపమన్యుని రెండు కథలలోనూ పాలు ఉన్నాయి. మొదటి కథలో పాలు తాగవద్దని నిషేధం; రెండవ కథలో పాలు లేవని ఏడుపు. చివరికి దేవతలు ఆయనకు తాగలేనన్ని పాలు ఇస్తారు."],
   ["src", "Mahābhārata, Ādi Parva, Pauṣya section (Upamanyu, pupil of Āyoda Dhaumya); Anuśāsana Parva, Dānadharma section (Kṛṣṇa's account of Upamanyu, son of Vyāghrapāda).", "మహాభారతం, ఆది పర్వం, పౌష్య ఘట్టం (ఆయోదధౌమ్యుని శిష్యుడు ఉపమన్యుడు); అనుశాసన పర్వం, దానధర్మ ఘట్టం (వ్యాఘ్రపాదుని కొడుకు ఉపమన్యుని గురించి కృష్ణుడు చెప్పిన కథ)."]
  ]
 ],
 remember: [
  ["The Mahābhārata tells of {upamanyu|Upamanyu} twice: in the Ādi Parva and in the Anuśāsana Parva.", "మహాభారతం {upamanyu|ఉపమన్యుని} గురించి రెండుసార్లు చెబుతుంది — ఆది పర్వంలో, అనుశాసన పర్వంలో."],
  ["In the first he is {dhaumya|Āyoda Dhaumya}'s pupil; in the second he is {vyaghrapada|Vyāghrapāda}'s son.", "మొదటి కథలో ఆయన {dhaumya|ఆయోదధౌమ్యుని} శిష్యుడు; రెండవ కథలో {vyaghrapada|వ్యాఘ్రపాదుని} కొడుకు."],
  ["Both stories are about a hungry boy who would not take what was not rightly his.", "రెండు కథలూ తనకు న్యాయంగా దక్కనిది తీసుకోని ఆకలిగొన్న బాలుని గురించే."]
 ],
 think: ["Have you ever gone without something you wanted because taking it would not have been right?", "తీసుకోవడం సరికాదని తెలిసి, నువ్వు కోరుకున్నదాన్ని ఎప్పుడైనా వదులుకున్నావా?"]
},
{
 id: "up-2", sage: "upamanyu", n: 2, order: 3102, date: "2026-11-02",
 title: "The Cowherd Pupil — Four Ways to Eat, Four Times Forbidden", titleTe: "ఆవులు మేపే శిష్యుడు — నాలుగు దారులు, నాలుగు నిషేధాలు",
 src: "Mahābhārata, Ādi Parva (Pauṣya section)",
 who: ["upamanyu", "dhaumya", "uddalaka", "vedaguru"],
 pages: [
  [
   ["p", "{dhaumya|Āyoda Dhaumya} had three pupils, and he tested each one in his own way. The first, Āruṇi, was sent to stop a breach in a field-dyke and lay down in it himself. The third, Veda, served like an ox under a yoke. The second was {upamanyu|Upamanyu}, and his test was hunger.", "{dhaumya|ఆయోదధౌమ్యునికి} ముగ్గురు శిష్యులు; ఒక్కొక్కరినీ ఒక్కో విధంగా పరీక్షించాడు. మొదటివాడు ఆరుణి — పొలం గట్టుకు పడిన గండిని ఆపమంటే తానే అందులో అడ్డంగా పడుకున్నాడు. మూడవవాడు వేదుడు — కాడి కట్టిన ఎద్దులా సేవ చేశాడు. రెండవవాడు {upamanyu|ఉపమన్యుడు}; అతని పరీక్ష ఆకలి."],
   ["sglink", "Āyoda Dhaumya and his three pupils, in Uttaṅka's life", "ఉత్తంకుని జీవితంలో ఆయోదధౌమ్యుడు, ఆయన ముగ్గురు శిష్యులు", "ut-1"],
   ["p", "“Upamanyu, my child,” said the teacher, “look after the cows.” So every morning the boy drove the herd out to graze, spent the whole day with them in the open, and brought them home at sunset. Then he would come and bow before his teacher.", "“నాయనా ఉపమన్యూ, ఆవులను చూసుకో,” అన్నాడు గురువు. అప్పటి నుండి ప్రతి ఉదయం ఆ బాలుడు మందను మేతకు తోలుకెళ్ళేవాడు; పగలంతా బయలులో వాటితోనే ఉండేవాడు; సాయంత్రం ఇంటికి తోలుకొచ్చేవాడు. వచ్చి గురువుకు నమస్కరించేవాడు."]
  ],
  [
   ["h", "First: begging", "మొదటిది: భిక్ష"],
   ["p", "One evening Dhaumya looked at him and said, “You look well fed, Upamanyu. How do you live?” “By begging, sir,” said the boy. A pupil was allowed to beg his food — but the custom was to bring what he got to his teacher first. “You must not eat what you beg without offering it to me,” said Dhaumya. From then on, Upamanyu brought all his alms to his teacher, and his teacher kept all of it.", "ఒకనాటి సాయంత్రం ధౌమ్యుడు అతనిని చూసి, “ఉపమన్యూ, నువ్వు బాగా బలంగా ఉన్నావే. ఎలా బ్రతుకుతున్నావు?” అని అడిగాడు. “భిక్షం ఎత్తుకుని, అయ్యా,” అన్నాడు బాలుడు. శిష్యుడు భిక్షం ఎత్తుకోవచ్చు — కానీ వచ్చినదంతా మొదట గురువుకు సమర్పించడం ఆచారం. “నాకు చూపించకుండా భిక్షాన్నం తినకూడదు,” అన్నాడు ధౌమ్యుడు. అప్పటి నుండి ఉపమన్యుడు దొరికిన భిక్షంతా గురువుకు తెచ్చి ఇచ్చేవాడు; గురువు అంతా తానే ఉంచుకునేవాడు."],
   ["h", "Second: begging again", "రెండవది: మళ్ళీ భిక్ష"],
   ["p", "Yet the boy still looked healthy. “I give you everything I beg,” he explained, “and then I go round a second time and eat what I get.” “That is not right,” said Dhaumya. “By begging twice you take food from other people who live by begging, and you show yourself greedy.” Upamanyu accepted it and stopped.", "అయినా బాలుడు ఆరోగ్యంగానే కనిపించాడు. “మొదట వచ్చిన భిక్షంతా మీకే ఇస్తున్నాను; తర్వాత మళ్ళీ ఒకసారి వెళ్ళి వచ్చినది నేను తింటున్నాను,” అని చెప్పాడు. “అది సరికాదు,” అన్నాడు ధౌమ్యుడు. “రెండుసార్లు భిక్షం ఎత్తడం వల్ల భిక్షతోనే బ్రతికే ఇతరుల అన్నం నువ్వు లాక్కుంటున్నావు; అది లోభం కూడా.” ఉపమన్యుడు సరేనని మానేశాడు."]
  ],
  [
   ["h", "Third: the cows' milk", "మూడవది: ఆవుల పాలు"],
   ["p", "Still he did not grow thin. “Now I drink the milk of these cows,” he said. “I did not give you leave for that,” said the teacher. “It is not right for you to drink it.” Upamanyu stopped.", "అయినా అతడు చిక్కిపోలేదు. “ఇప్పుడు ఈ ఆవుల పాలు తాగుతున్నాను,” అన్నాడు. “దానికి నేను అనుమతి ఇవ్వలేదు. నువ్వు ఆ పాలు తాగడం సరికాదు,” అన్నాడు గురువు. ఉపమన్యుడు అదీ మానేశాడు."],
   ["h", "Fourth: the calves' froth", "నాలుగవది: దూడల నురుగు"],
   ["p", "And still he looked strong. “Now,” he said, “I drink the froth that the calves let fall from their mouths when they have finished sucking at their mothers.” “Those good calves,” said Dhaumya, “out of kindness for you, let more froth fall than they should — and so they go short themselves. You must not drink that either.” And the last door was closed.", "అయినా బలంగానే కనిపించాడు. “ఇప్పుడు దూడలు తల్లుల దగ్గర పాలు తాగిన తర్వాత నోటి నుండి కార్చే నురుగును తాగుతున్నాను,” అన్నాడు. “ఆ మంచి దూడలు నీ మీది జాలితో ఎక్కువ నురుగు కారుస్తున్నాయి; దానివల్ల అవే తక్కువ తాగుతున్నాయి. అదీ తాగకూడదు,” అన్నాడు ధౌమ్యుడు. చివరి దారి కూడా మూసుకుపోయింది."],
   ["dyk", "🐄", "Notice that each refusal comes with a reason: the teacher's share, other beggars, the owner's permission, the calves' hunger. Dhaumya is hard, but he is teaching the boy to see who else is affected by what he eats.", "ప్రతి నిషేధం వెనుక ఒక కారణం ఉంది: గురువు వాటా, ఇతర భిక్షకులు, యజమాని అనుమతి, దూడల ఆకలి. ధౌమ్యుడు కఠినుడే; కానీ తాను తినేదాని వల్ల ఇంకెవరెవరిపై ప్రభావం పడుతుందో చూడడం నేర్పుతున్నాడు."],
   ["src", "Mahābhārata, Ādi Parva, Pauṣya section — Āyoda Dhaumya's tests of Upamanyu: alms given to the teacher, the second round of begging, the cows' milk, the calves' froth.", "మహాభారతం, ఆది పర్వం, పౌష్య ఘట్టం — ఉపమన్యునికి ఆయోదధౌమ్యుని పరీక్షలు: భిక్షాన్నం గురువుకు, రెండవసారి భిక్ష, ఆవుల పాలు, దూడల నురుగు."]
  ]
 ],
 remember: [
  ["{upamanyu|Upamanyu}'s task was to herd {dhaumya|Dhaumya}'s cows all day.", "{dhaumya|ధౌమ్యుని} ఆవులను రోజంతా మేపడం {upamanyu|ఉపమన్యుని} పని."],
  ["He was forbidden, one after another, his alms, a second round of alms, the milk and the calves' froth.", "భిక్షాన్నం, రెండవ భిక్ష, ఆవుల పాలు, దూడల నురుగు — ఒకదాని తర్వాత ఒకటి నిషేధించబడ్డాయి."],
  ["Each time he obeyed without arguing.", "ప్రతిసారీ ఎదురు చెప్పకుండా గురువు మాట విన్నాడు."]
 ],
 think: ["The teacher showed Upamanyu who else was hurt by each thing he ate. Is there something you use every day that leaves less for someone else?", "ఉపమన్యుడు తినే ప్రతిదాని వల్ల ఇంకెవరికి నష్టమో గురువు చూపించాడు. నువ్వు రోజూ వాడేవాటిలో ఇతరులకు తక్కువ మిగిలేలా చేసేది ఏదైనా ఉందా?"]
},
{
 id: "up-3", sage: "upamanyu", n: 3, order: 3103, date: "2026-11-02",
 title: "Blind in the Dry Well", titleTe: "పాడుబావిలో గుడ్డివాడై",
 src: "Mahābhārata, Ādi Parva (Pauṣya section)",
 who: ["upamanyu", "dhaumya", "ashvins"],
 pages: [
  [
   ["p", "Now {upamanyu|Upamanyu} had nothing at all. Day after day he walked behind the cows in the forest with an empty stomach. One day, mad with hunger, he pulled leaves from an arka bush — the plant that grows wild by every roadside, with its milky sap — and ate them.", "ఇప్పుడు {upamanyu|ఉపమన్యునికి} తినడానికి ఏమీ లేదు. రోజుల తరబడి ఖాళీ కడుపుతోనే అడవిలో ఆవుల వెనుక నడిచాడు. ఒకరోజు ఆకలికి తాళలేక ప్రతి దారి పక్కనా పెరిగే, తెల్లని పాలు కారే జిల్లేడు మొక్క ఆకులు తెంపి తినేశాడు."],
   ["p", "The epic says the leaves were bitter, sharp and burning, and their heat went to his eyes. He went blind. Stumbling about in the forest, unable to see, he fell into a dry well and lay at the bottom.", "ఆ ఆకులు చేదుగా, ఘాటుగా, మంటపుట్టించేవిగా ఉన్నాయని, వాటి వేడి కళ్ళకు ఎక్కిందని ఇతిహాసం చెబుతుంది. అతనికి చూపు పోయింది. ఏమీ కనబడక అడవిలో తడబడుతూ తిరుగుతూ ఒక పాడుబావిలో పడిపోయి అడుగున పడి ఉన్నాడు."],
   ["dyk", "🌿", "The arka plant (jilleḍu in Telugu) is the same one whose leaves are offered to the Sun on Ratha Saptamī and whose flowers are offered to Gaṇeśa. Its sap really does harm the eyes.", "జిల్లేడు ఆకులనే రథసప్తమి నాడు సూర్యునికి సమర్పిస్తాం; జిల్లేడు పూలను వినాయకునికి పెడతాం. దాని పాలు నిజంగానే కళ్ళకు హాని చేస్తాయి."]
  ],
  [
   ["h", "“Where are you, Upamanyu?”", "“ఉపమన్యూ, ఎక్కడున్నావు?”"],
   ["p", "The sun set and the cows did not come home with their herdsman. {dhaumya|Dhaumya} said to his other pupils, “I have closed every way for Upamanyu to eat. He must be angry with me — that is why he has not come back. Let us go and look for him.” So the teacher himself went into the forest with his pupils, calling, “Upamanyu! Where are you, my child? Come!”", "సూర్యుడు అస్తమించాడు; ఆవులూ, వాటిని మేపేవాడూ ఇంటికి రాలేదు. {dhaumya|ధౌమ్యుడు} మిగతా శిష్యులతో, “ఉపమన్యునికి తిండికి ఉన్న దారులన్నీ మూసేశాను. నా మీద కోపం వచ్చి ఉంటుంది — అందుకే తిరిగి రాలేదు. వెళ్ళి వెతుకుదాం,” అన్నాడు. గురువు తానే శిష్యులను వెంటబెట్టుకుని అడవిలోకి వెళ్ళి, “ఉపమన్యూ! ఎక్కడున్నావు నాయనా? రా!” అని పిలిచాడు."],
   ["p", "From the bottom of the well a voice answered: “I am here, sir, in the well.” “How did you fall into a well?” “I ate arka leaves, and I went blind, and so I fell in.” He did not complain. He did not say, “Because you starved me.” He simply told what had happened.", "బావి అడుగు నుండి ఒక గొంతు జవాబిచ్చింది: “ఇక్కడ ఉన్నానయ్యా, బావిలో.” “బావిలో ఎలా పడ్డావు?” “జిల్లేడు ఆకులు తిన్నాను; కళ్ళు పోయాయి; అందుకే పడిపోయాను.” అతడు ఫిర్యాదు చేయలేదు. “మీరు నన్ను ఆకలితో మాడ్చారు కాబట్టి” అని అనలేదు. జరిగింది జరిగినట్లు చెప్పాడు, అంతే."]
  ],
  [
   ["h", "The hymn from the well", "బావిలో నుండి స్తుతి"],
   ["p", "“Praise the {ashvins|Aśvins},” said Dhaumya. “They are the physicians of the gods. They will give you back your eyes.” So from the bottom of that dark well, the blind boy praised the twin gods with words from the Ṛgveda's way of speaking — full of riddles. He called them the first-born, bright as the dawn; he spoke of the great wheel of the year that turns without stopping, of day and night woven like white and black threads, of the twins who set free what is swallowed and bring back what is lost.", "“అశ్వినీ దేవతలను స్తుతించు,” అన్నాడు ధౌమ్యుడు. “వారు దేవతల వైద్యులు. నీ కళ్ళు తిరిగి ఇస్తారు.” ఆ చీకటి బావి అడుగు నుండే గుడ్డివాడైన ఆ బాలుడు {ashvins|అశ్వినీ దేవతలను} ఋగ్వేద శైలిలో, పొడుపుకథల వంటి మాటలతో స్తుతించాడు. వారిని మొట్టమొదట పుట్టినవారిగా, ఉషస్సులా ప్రకాశించేవారిగా కీర్తించాడు; ఆగకుండా తిరిగే సంవత్సర చక్రం గురించి, తెలుపు-నలుపు దారాల్లా అల్లిన పగలు-రాత్రుల గురించి, మింగబడినదాన్ని విడిపించి, పోయినదాన్ని తిరిగి తెచ్చే ఆ కవల దేవతల గురించి పాడాడు."],
   ["p", "It is a strange and beautiful hymn, and scholars still puzzle over some of its lines. But its meaning for the story is plain: a boy who has lost everything — food, sight, even the ground under his feet — still has his voice, and he uses it to praise.", "అది వింతైన, అందమైన స్తుతి; అందులోని కొన్ని పంక్తుల అర్థం గురించి పండితులు ఇప్పటికీ ఆలోచిస్తూనే ఉన్నారు. కానీ కథకు దాని అర్థం స్పష్టమే: తిండి, చూపు, కాళ్ళ కింద నేల — అన్నీ పోగొట్టుకున్న బాలుని దగ్గర ఇంకా గొంతు మిగిలి ఉంది; దానిని అతను స్తుతికే వాడాడు."],
   ["src", "Mahābhārata, Ādi Parva, Pauṣya section — Upamanyu eats arka leaves, goes blind and falls into a well; Dhaumya's search; the hymn to the Aśvins.", "మహాభారతం, ఆది పర్వం, పౌష్య ఘట్టం — ఉపమన్యుడు జిల్లేడు ఆకులు తిని గుడ్డివాడై బావిలో పడడం; ధౌమ్యుడు వెతకడం; అశ్వినీ దేవతల స్తుతి."]
  ]
 ],
 remember: [
  ["Starving, {upamanyu|Upamanyu} ate arka leaves, went blind and fell into a dry well.", "ఆకలికి తాళలేక {upamanyu|ఉపమన్యుడు} జిల్లేడు ఆకులు తిని, గుడ్డివాడై, పాడుబావిలో పడ్డాడు."],
  ["{dhaumya|Dhaumya} himself went into the forest at night to search for him.", "{dhaumya|ధౌమ్యుడు} స్వయంగా రాత్రి అడవిలోకి వెళ్ళి అతని కోసం వెతికాడు."],
  ["From the well the boy praised the {ashvins|Aśvins}, the physicians of the gods.", "బావిలో నుండే బాలుడు దేవవైద్యులైన {ashvins|అశ్వినీ దేవతలను} స్తుతించాడు."]
 ],
 think: ["Upamanyu told his teacher what happened without blaming him. Why might that have been harder — and braver — than complaining?", "ఉపమన్యుడు గురువును నిందించకుండా జరిగింది చెప్పాడు. ఫిర్యాదు చేయడం కంటే అది ఎందుకు కష్టం — ఎందుకు ధైర్యం?"]
},
{
 id: "up-4", sage: "upamanyu", n: 4, order: 3104, date: "2026-11-02",
 title: "The Cake He Would Not Eat", titleTe: "తినని అప్పం",
 src: "Mahābhārata, Ādi Parva (Pauṣya section)",
 who: ["upamanyu", "dhaumya", "ashvins"],
 pages: [
  [
   ["p", "The {ashvins|Aśvins} were pleased with the hymn, and they came. Standing by the well, the twin gods said, “We are happy with you. Here is a cake — eat it.” After so many days of hunger, a cake from the hands of the gods themselves!", "స్తుతికి సంతోషించి {ashvins|అశ్వినీ దేవతలు} వచ్చారు. బావి దగ్గర నిలబడి ఆ కవల దేవతలు, “నీ మీద మాకు సంతోషంగా ఉంది. ఇదిగో ఈ అప్పం — తిను,” అన్నారు. ఇన్ని రోజుల ఆకలి తర్వాత, స్వయంగా దేవతల చేతుల నుండి ఒక అప్పం!"],
   ["p", "But {upamanyu|Upamanyu} said, “Your words are true, lords, and I am grateful. But I cannot eat this without first offering it to my teacher.” Even now — blind, starving, in a well — he would not break the rule he had been taught.", "కానీ {upamanyu|ఉపమన్యుడు}, “స్వాములారా, మీ మాట నిజమే; నేను కృతజ్ఞుడను. కానీ మొదట నా గురువుకు సమర్పించకుండా దీనిని తినలేను,” అన్నాడు. ఇప్పుడు కూడా — గుడ్డివాడై, ఆకలితో, బావిలో పడి ఉండి కూడా — తనకు నేర్పిన నియమాన్ని అతను తప్పలేదు."]
  ],
  [
   ["h", "A secret about the teacher", "గురువు గురించి ఒక రహస్యం"],
   ["p", "Then the Aśvins told him something surprising. “Long ago, your own teacher was a pupil too, and he praised us just as you have. We gave him a cake, and he ate it without offering it to his teacher. Do as he did — eat it.”", "అప్పుడు అశ్వినీ దేవతలు ఆశ్చర్యకరమైన విషయం చెప్పారు. “చాలా కాలం క్రితం నీ గురువు కూడా శిష్యుడే. ఆయన కూడా నీలాగే మమ్మల్ని స్తుతించాడు. మేము ఆయనకు అప్పం ఇచ్చాము; ఆయన తన గురువుకు సమర్పించకుండానే తినేశాడు. నువ్వూ ఆయనలాగే చెయ్యి — తిను.”"],
   ["p", "It was a real test, and a clever one. The boy now had a perfect excuse: his teacher had done the very same thing. But Upamanyu answered, “Forgive me, lords. I cannot eat it without offering it to my teacher.” What his teacher had once done did not change what was right for him to do now.", "అది నిజమైన పరీక్ష, తెలివైన పరీక్ష. ఇప్పుడు బాలుని దగ్గర చక్కటి సాకు ఉంది: తన గురువే అలా చేశాడు. కానీ ఉపమన్యుడు, “క్షమించండి స్వాములారా. గురువుకు సమర్పించకుండా దీనిని తినలేను,” అని జవాబిచ్చాడు. గురువు ఒకప్పుడు ఏం చేశాడన్నది, ఇప్పుడు తాను చేయవలసిన సరైన పనిని మార్చలేదు."]
  ],
  [
   ["h", "Teeth of gold", "బంగారు పళ్ళు"],
   ["p", "The Aśvins were delighted. “We are pleased with your devotion to your teacher,” they said. “Your teacher's teeth are of black iron. Yours shall be of gold. You shall see again, and good fortune shall be yours.” At once his eyes were opened. The epic's picture is a little playful: the teacher who once ate the cake has dark iron teeth, and the pupil who refused it will smile with gold.", "అశ్వినీ దేవతలు ఎంతో సంతోషించారు. “గురువు పట్ల నీ భక్తికి మెచ్చుకున్నాం. నీ గురువు పళ్ళు నల్లని ఇనుపవి. నీ పళ్ళు బంగారువి అవుతాయి. నీకు మళ్ళీ చూపు వస్తుంది; నీకు శుభం కలుగుతుంది,” అన్నారు. వెంటనే అతని కళ్ళు తెరుచుకున్నాయి. ఇతిహాసం గీసిన చిత్రంలో కాస్త హాస్యం ఉంది: ఒకప్పుడు అప్పం తినేసిన గురువుకు నల్లని ఇనుప పళ్ళు; దాన్ని నిరాకరించిన శిష్యుడు బంగారు పళ్ళతో నవ్వుతాడు."],
   ["p", "Upamanyu climbed out, went to {dhaumya|Dhaumya}, bowed and told him everything. The teacher was very pleased. “You will have the good fortune the Aśvins promised,” he said. “All the Vedas and all the teachings of dharma will shine in you.” That was the end of the test. The hunger had not been cruelty for its own sake; it had been the last lesson, and the boy had passed it.", "ఉపమన్యుడు బావిలో నుండి బయటికి వచ్చి, {dhaumya|ధౌమ్యుని} దగ్గరకు వెళ్ళి నమస్కరించి జరిగినదంతా చెప్పాడు. గురువు ఎంతో సంతోషించాడు. “అశ్వినీ దేవతలు చెప్పిన శుభం నీకు తప్పక కలుగుతుంది. వేదాలన్నీ, ధర్మశాస్త్రాలన్నీ నీలో ప్రకాశిస్తాయి,” అని ఆశీర్వదించాడు. పరీక్ష అంతటితో ముగిసింది. ఆ ఆకలి కేవలం క్రూరత్వం కాదు; అది చివరి పాఠం — బాలుడు అందులో నెగ్గాడు."],
   ["dyk", "🤔", "Many readers today find Dhaumya's tests too harsh, and they are right to wonder. The epic itself seems to agree in its own way: in the same section, Dhaumya's pupil Veda, who had suffered under him, chooses never to make his own pupils suffer.", "ఈ రోజుల్లో చాలామంది పాఠకులకు ధౌమ్యుని పరీక్షలు మరీ కఠినంగా అనిపిస్తాయి; అలా ఆలోచించడం సహజమే. ఇతిహాసం కూడా తనదైన విధంగా అంగీకరిస్తున్నట్లుంది: అదే ఘట్టంలో ధౌమ్యుని దగ్గర కష్టాలు పడిన శిష్యుడు వేదుడు తన శిష్యులను ఎన్నడూ కష్టపెట్టకూడదని నిర్ణయించుకుంటాడు."],
   ["src", "Mahābhārata, Ādi Parva, Pauṣya section — the Aśvins' cake, Upamanyu's refusal, the teeth of iron and gold, the return of his sight and Dhaumya's blessing.", "మహాభారతం, ఆది పర్వం, పౌష్య ఘట్టం — అశ్వినీ దేవతల అప్పం, ఉపమన్యుని నిరాకరణ, ఇనుప పళ్ళు-బంగారు పళ్ళు, తిరిగి వచ్చిన చూపు, ధౌమ్యుని ఆశీర్వాదం."]
  ]
 ],
 remember: [
  ["The {ashvins|Aśvins} offered {upamanyu|Upamanyu} a cake, but he would not eat it before offering it to his teacher.", "{ashvins|అశ్వినీ దేవతలు} అప్పం ఇచ్చినా, గురువుకు సమర్పించకుండా {upamanyu|ఉపమన్యుడు} తినలేదు."],
  ["Even when told his teacher had once eaten such a cake, he still refused.", "తన గురువే ఒకప్పుడు అలా తిన్నాడని చెప్పినా, అతను నిరాకరించాడు."],
  ["The Aśvins gave him back his sight and teeth of gold; {dhaumya|Dhaumya} blessed him with all knowledge.", "అశ్వినులు చూపును, బంగారు పళ్ళను ఇచ్చారు; {dhaumya|ధౌమ్యుడు} సకల విద్యలూ కలగాలని ఆశీర్వదించాడు."]
 ],
 think: ["“My teacher did it too” was a perfect excuse. Why do you think Upamanyu still refused?", "“నా గురువే అలా చేశాడు” — ఇది చక్కటి సాకు. అయినా ఉపమన్యుడు ఎందుకు నిరాకరించాడని నువ్వు అనుకుంటున్నావు?"]
},
{
 id: "up-5", sage: "upamanyu", n: 5, order: 3105, date: "2026-11-02",
 title: "Flour in Water — the Boy Who Asked for Milk", titleTe: "నీళ్ళలో పిండి — పాలు అడిగిన బాలుడు",
 src: "Mahābhārata, Anuśāsana Parva (Dānadharma section)",
 who: ["upamanyu", "vyaghrapada", "dhaumya_u", "krishna", "shiva"],
 pages: [
  [
   ["p", "The second story is told by {krishna|Kṛṣṇa}. After the war, as {bhishma|Bhīṣma} lay on his bed of arrows teaching Yudhiṣṭhira, the king asked about the names and greatness of {shiva|Śiva}. Bhīṣma said that Kṛṣṇa could speak of this better than he — and Kṛṣṇa told of a hermitage in the Himālaya, and of the sage he had met there, Upamanyu. And Upamanyu, Kṛṣṇa said, had told him his own childhood.", "రెండవ కథను {krishna|శ్రీకృష్ణుడు} చెబుతాడు. యుద్ధం తర్వాత, అంపశయ్య మీద పడుకుని {bhishma|భీష్ముడు} ధర్మరాజుకు బోధిస్తుండగా, ధర్మరాజు {shiva|శివుని} నామాల గురించి, మహిమ గురించి అడిగాడు. దీని గురించి తనకంటే కృష్ణుడే బాగా చెప్పగలడని భీష్ముడు అన్నాడు. అప్పుడు కృష్ణుడు హిమాలయాలలోని ఒక ఆశ్రమం గురించి, అక్కడ తాను కలుసుకున్న ఉపమన్యుని గురించి చెప్పాడు. ఉపమన్యుడు తన బాల్యాన్ని తనకు చెప్పాడని కృష్ణుడు అన్నాడు."],
   ["p", "“My father,” said {upamanyu|Upamanyu}, “was the sage {vyaghrapada|Vyāghrapāda}. I had a younger brother, {dhaumya_u|Dhaumya}. We lived in the forest, and we were poor.”", "“నా తండ్రి {vyaghrapada|వ్యాఘ్రపాద} మహర్షి,” అన్నాడు {upamanyu|ఉపమన్యుడు}. “నాకు {dhaumya_u|ధౌమ్యుడు} అనే తమ్ముడు ఉండేవాడు. మేము అడవిలో ఉండేవాళ్ళం; పేదవాళ్ళం.”"]
  ],
  [
   ["h", "The taste he remembered", "గుర్తుండిపోయిన రుచి"],
   ["p", "One day the boys went with their father to the home of a well-to-do family of sages, and there Upamanyu drank cow's milk for the first time. He never forgot the taste. Back home in the forest, he and his brother went to their mother and said, “Mother, give us milk to drink.”", "ఒకరోజు ఆ పిల్లలు తండ్రితో కలిసి సంపన్నులైన ఒక ముని కుటుంబం ఇంటికి వెళ్ళారు. అక్కడ ఉపమన్యుడు మొదటిసారిగా ఆవు పాలు తాగాడు. ఆ రుచిని ఎప్పటికీ మరచిపోలేదు. అడవిలోని ఇంటికి తిరిగి వచ్చాక అన్నదమ్ములిద్దరూ తల్లి దగ్గరకు వెళ్ళి, “అమ్మా, మాకు తాగడానికి పాలు ఇవ్వు,” అని అడిగారు."],
   ["p", "There was no milk in that house. So the mother did what poor mothers have always done: she ground a little grain, mixed the flour in water until it was white, and gave it to them. “Here is your milk.” Upamanyu drank, and put the cup down. “Mother,” he said, “this is not milk.”", "ఆ ఇంట్లో పాలు లేవు. అందుకని పేద తల్లులు ఎప్పుడూ చేసేదే ఆమె చేసింది: కాసిని గింజలు విసిరి, ఆ పిండిని తెల్లగా అయ్యేదాకా నీళ్ళలో కలిపి వాళ్ళకు ఇచ్చింది. “ఇదిగో మీ పాలు.” ఉపమన్యుడు తాగి గ్లాసు కింద పెట్టాడు. “అమ్మా, ఇవి పాలు కావు,” అన్నాడు."]
  ],
  [
   ["h", "What his mother told him", "అమ్మ చెప్పిన మాట"],
   ["p", "His mother took him in her arms and wept. “My son, where would we get milk? We live in the forest, on roots and fruit. We have no cows, no fields, no wealth. Without the grace of Śiva — of the great god Sthāṇu — no one gets milk. Whatever anyone has, they have it because he gave it. Worship him, and you will have all you want.”", "తల్లి అతనిని దగ్గరకు తీసుకుని ఏడ్చింది. “నాయనా, మనకు పాలు ఎక్కడి నుండి వస్తాయి? అడవిలో దుంపలు, పండ్లు తిని బ్రతుకుతున్నాం. మనకు ఆవులు లేవు, పొలాలు లేవు, ధనం లేదు. శివుని — స్థాణువైన ఆ మహాదేవుని — అనుగ్రహం లేకుండా ఎవరికీ పాలు దొరకవు. ఎవరి దగ్గర ఏమున్నా, అది ఆయన ఇచ్చిందే. ఆయనను ఆరాధించు; నువ్వు కోరుకున్నదంతా దొరుకుతుంది.”"],
   ["p", "A mother's words, spoken in sorrow, perhaps only to comfort a crying child. But the boy took them as a promise. “Then I will worship Śiva,” he said, “until he gives me milk.” And he folded his hands and set out on the long road of tapas.", "బాధతో, బహుశా ఏడుస్తున్న బిడ్డను ఊరడించడానికి మాత్రమే అన్న తల్లి మాటలు అవి. కానీ బాలుడు వాటిని ఒక వాగ్దానంగా తీసుకున్నాడు. “అయితే శివుడు పాలు ఇచ్చేదాకా ఆయనను ఆరాధిస్తాను,” అన్నాడు. చేతులు జోడించి తపస్సు అనే దీర్ఘ మార్గంలో బయలుదేరాడు."],
   ["dyk", "🍚", "Flour or rice water passed off as milk is a picture that Telugu families know well from hard times. The epic puts this very ordinary scene at the root of one of Śaivism's greatest stories.", "పాలు లేనప్పుడు బియ్యపు పిండి నీళ్ళను పాలుగా ఇవ్వడం — కష్టకాలాల నుండి తెలుగు కుటుంబాలకు బాగా తెలిసిన దృశ్యమే. ఇంత సాధారణమైన సన్నివేశాన్ని ఇతిహాసం శైవ సంప్రదాయపు గొప్ప కథలలో ఒకదానికి మూలంగా పెట్టింది."],
   ["src", "Mahābhārata, Anuśāsana Parva, Dānadharma section — Kṛṣṇa tells Yudhiṣṭhira what Upamanyu told him of his childhood: Vyāghrapāda's sons, the flour-water “milk”, the mother's words about Śiva.", "మహాభారతం, అనుశాసన పర్వం, దానధర్మ ఘట్టం — ఉపమన్యుడు తన బాల్యం గురించి చెప్పినది కృష్ణుడు ధర్మరాజుకు చెప్పడం: వ్యాఘ్రపాదుని కొడుకులు, పిండినీళ్ళ “పాలు”, శివుని గురించి తల్లి మాటలు."]
  ]
 ],
 remember: [
  ["In the Anuśāsana Parva, {upamanyu|Upamanyu} is the son of {vyaghrapada|Vyāghrapāda} and brother of {dhaumya_u|Dhaumya}.", "అనుశాసన పర్వంలో {upamanyu|ఉపమన్యుడు} {vyaghrapada|వ్యాఘ్రపాదుని} కొడుకు, {dhaumya_u|ధౌమ్యుని} అన్న."],
  ["His poor mother gave him flour mixed in water, and he knew it was not milk.", "పేదరాలైన తల్లి నీళ్ళలో పిండి కలిపి ఇచ్చింది; అవి పాలు కావని అతను గుర్తుపట్టాడు."],
  ["She told him that everything comes from {shiva|Śiva}'s grace, and he set out to worship Śiva.", "అన్నీ {shiva|శివుని} అనుగ్రహం వల్లే వస్తాయని ఆమె చెప్పింది; అతను శివారాధనకు బయలుదేరాడు."]
 ],
 think: ["Upamanyu's mother may have spoken only to comfort him, but he took her words seriously. Has something said to you in passing ever changed what you did?", "ఉపమన్యుని తల్లి బహుశా ఊరడించడానికే అలా అని ఉండవచ్చు; కానీ అతను ఆ మాటను గట్టిగా పట్టుకున్నాడు. యథాలాపంగా ఎవరో అన్న మాట నీ జీవితంలో ఏదైనా మార్చిందా?"]
},
{
 id: "up-6", sage: "upamanyu", n: 6, order: 3106, date: "2026-11-02",
 title: "Indra on the White Elephant", titleTe: "తెల్ల ఏనుగుపై ఇంద్రుడు",
 src: "Mahābhārata, Anuśāsana Parva · Liṅga Purāṇa · Śiva Purāṇa",
 who: ["upamanyu", "shiva", "indra", "airavata"],
 pages: [
  [
   ["p", "{upamanyu|Upamanyu} went into the Himālaya and began his tapas. The epic, in its way, counts it in huge numbers: for a thousand years, it says, he stood on the tip of one toe, eating first only fruit, then only fallen leaves, then only water, and at last nothing but air. Whatever the count, the meaning is clear — the boy who had wanted milk now wanted nothing but {shiva|Śiva}.", "{upamanyu|ఉపమన్యుడు} హిమాలయాలకు వెళ్ళి తపస్సు మొదలుపెట్టాడు. ఇతిహాసం తన పద్ధతిలో భారీ సంఖ్యలతో లెక్క చెబుతుంది: వెయ్యి సంవత్సరాలు ఒంటికాలి బొటనవేలి మీద నిలబడ్డాడట — మొదట పండ్లు మాత్రమే తిని, తర్వాత రాలిన ఆకులు మాత్రమే, తర్వాత నీళ్ళు మాత్రమే, చివరికి గాలి మాత్రమే తీసుకుని. లెక్క ఏదైనా అర్థం మాత్రం స్పష్టం — పాలు కోరిన ఆ బాలుడు ఇప్పుడు {shiva|శివుని} తప్ప మరేదీ కోరడం లేదు."],
   ["p", "The Liṅga and Śiva Purāṇas tell the same tapas, and in their version the boy is still very young, and the heat of his devotion begins to trouble the worlds. In all the tellings, Śiva decides to come — but first, to test him.", "లింగ పురాణం, శివ పురాణం కూడా ఇదే తపస్సును చెబుతాయి. వాటి కథనంలో ఆ బాలుడు ఇంకా చాలా చిన్నవాడు; అతని భక్తి తపన లోకాలను కలవరపెడుతుంది. అన్ని కథనాలలోనూ శివుడు రావాలనుకుంటాడు — కానీ ముందు అతనిని పరీక్షించడానికి."]
  ],
  [
   ["h", "The king of the gods offers a boon", "దేవతల రాజు ఇచ్చిన వరం"],
   ["p", "One day the sky shone, and down came {indra|Indra}, king of the gods, riding the great white elephant {airavata|Airāvata}, with the thunderbolt in his hand and the gods around him. “I am pleased with your tapas, good brāhmaṇa,” he said. “Choose a boon. Whatever you want, I will give.”", "ఒకరోజు ఆకాశం వెలిగిపోయింది. వజ్రాయుధం చేత పట్టుకుని, చుట్టూ దేవతలతో, మహా తెల్ల ఏనుగు {airavata|ఐరావతం} మీద దేవేంద్రుడు {indra|ఇంద్రుడు} దిగి వచ్చాడు. “బ్రాహ్మణోత్తమా, నీ తపస్సుకు మెచ్చాను. వరం కోరుకో. ఏది కోరినా ఇస్తాను,” అన్నాడు."],
   ["p", "It was Śiva himself, taking Indra's form. Upamanyu did not know that. He bowed politely — and refused. “I do not want a boon from you, lord of the gods. I want a boon only from Śiva. If Śiva told me to be a worm or an insect, I would gladly be one. But I will not take the three worlds from anyone else.”", "నిజానికి అది ఇంద్రుని రూపంలో వచ్చిన శివుడే. ఉపమన్యునికి ఆ విషయం తెలియదు. వినయంగా నమస్కరించాడు — కానీ నిరాకరించాడు. “దేవేంద్రా, మీ దగ్గర నుండి నాకు వరం వద్దు. శివుని దగ్గర నుండి మాత్రమే వరం కోరుకుంటాను. శివుడు నన్ను పురుగుగానో కీటకంగానో పుట్టమంటే సంతోషంగా పుడతాను. కానీ ఇంకెవరి దగ్గర నుండీ మూడు లోకాలైనా తీసుకోను.”"]
  ],
  [
   ["h", "“Who is this Śiva?”", "“ఎవరీ శివుడు?”"],
   ["p", "The false Indra pressed him and even spoke slightingly of Śiva, to see what the boy would do. Upamanyu would not bend. He answered with a long praise of Śiva as the cause of all things, the one from whom Brahmā, Viṣṇu and Indra himself had come, the giver of every boon the gods had ever received. The epic gives him a great many verses here — the young hermit lecturing the king of heaven on who the true king is.", "ఆ మారువేషపు ఇంద్రుడు ఇంకా బలవంతం చేశాడు; బాలుడు ఏం చేస్తాడో చూడడానికి శివుని గురించి చులకనగా కూడా మాట్లాడాడు. ఉపమన్యుడు లొంగలేదు. శివుడే సమస్తానికీ కారణమని, బ్రహ్మ, విష్ణువు, ఇంద్రుడు కూడా ఆయన నుండే వచ్చారని, దేవతలు పొందిన ప్రతి వరమూ ఆయన ఇచ్చిందేనని దీర్ఘంగా స్తుతించాడు. ఇక్కడ ఇతిహాసం అతనికి ఎన్నో శ్లోకాలు ఇస్తుంది — ఒక చిన్న తాపసి, అసలైన రాజు ఎవరో స్వర్గాధిపతికే బోధిస్తున్నాడు."],
   ["p", "The Purāṇas sharpen the scene. In the Śiva Purāṇa's telling, when the false Indra keeps insulting Śiva, the boy cannot bear to hear it and resolves to give up his own life rather than listen — and at that very moment the disguise falls away. The Mahābhārata keeps it gentler, but in every telling the test ends the same way: he will take nothing from anyone but Śiva.", "పురాణాలు ఈ సన్నివేశాన్ని ఇంకా తీవ్రంగా చెబుతాయి. శివ పురాణం కథనంలో మారువేషపు ఇంద్రుడు శివుణ్ణి నిందిస్తూనే ఉంటే, ఆ బాలుడు అది వినలేక, వినడం కంటే ప్రాణం విడవడమే మేలని నిశ్చయించుకుంటాడు — సరిగ్గా ఆ క్షణంలోనే మారువేషం తొలగిపోతుంది. మహాభారతం దీనిని కాస్త మెత్తగా చెబుతుంది; కానీ ఏ కథనంలోనైనా పరీక్ష ఒకేలా ముగుస్తుంది: శివుని దగ్గర తప్ప ఎవరి దగ్గరా ఏదీ తీసుకోడు."],
   ["dyk", "🐘", "Two tests, two gods. In the Ādi Parva the Aśvins tempt Upamanyu with a cake; in the Anuśāsana Parva “Indra” tempts him with the three worlds. Both times the answer is no — and both times the refusal is the very thing that wins the gift.", "రెండు పరీక్షలు, ఇద్దరు దేవతలు. ఆది పర్వంలో అశ్వినులు అప్పంతో ఆశ చూపారు; అనుశాసన పర్వంలో “ఇంద్రుడు” మూడు లోకాలతో ఆశ చూపాడు. రెండుసార్లూ జవాబు ‘వద్దు’ — రెండుసార్లూ ఆ నిరాకరణే వరాన్ని తెచ్చిపెట్టింది."],
   ["src", "Mahābhārata, Anuśāsana Parva, Dānadharma section — Upamanyu's tapas; Śiva in the form of Indra on Airāvata; the refusal and the praise of Śiva. Liṅga Purāṇa and Śiva Purāṇa (Upamanyu's story) for the young boy's tapas and the sharper telling of the test.", "మహాభారతం, అనుశాసన పర్వం, దానధర్మ ఘట్టం — ఉపమన్యుని తపస్సు; ఐరావతం మీద ఇంద్రుని రూపంలో శివుడు; నిరాకరణ, శివ స్తుతి. బాలుని తపస్సు, పరీక్ష తీవ్ర కథనం కోసం లింగ పురాణం, శివ పురాణం (ఉపమన్యుని కథ)."]
  ]
 ],
 remember: [
  ["{upamanyu|Upamanyu} did long tapas in the Himālaya, living at last on air alone.", "{upamanyu|ఉపమన్యుడు} హిమాలయాలలో దీర్ఘ తపస్సు చేశాడు; చివరికి గాలి మాత్రమే తీసుకున్నాడు."],
  ["{shiva|Śiva} came disguised as {indra|Indra} on {airavata|Airāvata} and offered a boon.", "{shiva|శివుడు} {airavata|ఐరావతం} మీద {indra|ఇంద్రుని} వేషంలో వచ్చి వరం ఇస్తానన్నాడు."],
  ["Upamanyu refused any boon not given by Śiva.", "శివుడు ఇవ్వని ఏ వరమూ వద్దని ఉపమన్యుడు నిరాకరించాడు."]
 ],
 think: ["Upamanyu turned down the king of heaven himself. When is it right to say no to a big offer because it comes from the wrong place?", "ఉపమన్యుడు స్వర్గాధిపతి ఇచ్చినదాన్నే నిరాకరించాడు. పెద్ద ఆఫర్ అయినా తప్పు చోటు నుండి వస్తోందని ‘వద్దు’ అనడం ఎప్పుడు సరైనది?"]
},
{
 id: "up-7", sage: "upamanyu", n: 7, order: 3107, date: "2026-11-02",
 title: "The Ocean of Milk", titleTe: "పాల సముద్రం",
 src: "Mahābhārata, Anuśāsana Parva · Liṅga Purāṇa · Śiva Purāṇa · later Tamil tradition",
 who: ["upamanyu", "shiva", "uma", "nandi", "vyaghrapada"],
 pages: [
  [
   ["p", "Then the white elephant changed. Where Airāvata had stood there was a great white bull, {nandi|Nandi}, and on it sat {shiva|Śiva} with {uma|Umā} beside him — the moon in his hair, the serpent at his throat, the trident in his hand, brighter than a thousand suns. The gods who had come as Indra's escort now stood around him, praising.", "అప్పుడు ఆ తెల్ల ఏనుగు మారిపోయింది. ఐరావతం నిలబడిన చోట ఒక మహా తెల్ల వృషభం — {nandi|నందీశ్వరుడు} — కనిపించాడు; దాని మీద {uma|ఉమాదేవి} పక్కన {shiva|శివుడు} కూర్చుని ఉన్నాడు — జటలో చంద్రుడు, మెడలో సర్పం, చేతిలో త్రిశూలం, వెయ్యి సూర్యులకంటే ప్రకాశంగా. ఇంద్రుని వెంట వచ్చిన దేవతలు ఇప్పుడు ఆయన చుట్టూ నిలబడి స్తుతిస్తున్నారు."],
   ["p", "{upamanyu|Upamanyu} fell to the ground, his throat choked with joy, his eyes streaming. Śiva smiled. “Look,” he said — and the boy looked, and saw an ocean of milk stretching away before him.", "{upamanyu|ఉపమన్యుడు} సాష్టాంగపడ్డాడు; ఆనందంతో గొంతు పూడుకుపోయింది; కళ్ళ నుండి ధారలుగా నీళ్ళు. శివుడు నవ్వాడు. “చూడు,” అన్నాడు — బాలుడు చూశాడు; తన ఎదుట కనుచూపు మేర పరుచుకున్న పాల సముద్రం కనిపించింది."]
  ],
  [
   ["h", "The boons", "వరాలు"],
   ["p", "In the Mahābhārata, Śiva gives him an ocean of milk, and with it oceans of curd, ghee and every kind of food, to enjoy with his family for ever. He makes Upamanyu ageless, gives him lasting fame and the knowledge of the highest truth, and promises to be always near his hermitage. “You shall be my devotee for ever,” he says — and Umā, too, blesses him.", "మహాభారతంలో శివుడు అతనికి పాల సముద్రాన్ని ఇస్తాడు; దానితో పాటు పెరుగు, నెయ్యి సముద్రాలనూ, అన్ని రకాల ఆహారాన్నీ — కుటుంబంతో ఎప్పటికీ అనుభవించేందుకు. ఉపమన్యుణ్ణి ముసలితనం లేనివానిగా చేస్తాడు; శాశ్వత కీర్తిని, పరమ సత్యపు జ్ఞానాన్ని ఇస్తాడు; అతని ఆశ్రమం దగ్గర ఎప్పుడూ ఉంటానని మాట ఇస్తాడు. “నువ్వు ఎప్పటికీ నా భక్తుడవై ఉంటావు,” అంటాడు — ఉమాదేవి కూడా ఆశీర్వదిస్తుంది."],
   ["p", "The Purāṇas add something tender. In the Liṅga and Śiva Purāṇas, Śiva takes the boy as his own son and gives him to the Goddess as hers, and makes him a leader among his gaṇas. The child who had cried for milk at his mother's knee is now held by the Mother of the world.", "పురాణాలు ఒక మృదువైన విషయాన్ని కలుపుతాయి. లింగ, శివ పురాణాలలో శివుడు ఆ బాలుణ్ణి తన సొంత కొడుకుగా స్వీకరించి, దేవికి కూడా కొడుకుగా అప్పగిస్తాడు; తన గణాలలో నాయకునిగా చేస్తాడు. తల్లి ఒడిలో పాల కోసం ఏడ్చిన బిడ్డను ఇప్పుడు జగన్మాతే ఎత్తుకుంది."]
  ],
  [
   ["h", "A later Tamil telling: Chidambaram", "తర్వాతి తమిళ కథనం: చిదంబరం"],
   ["p", "Tamil Śaiva tradition has its own version, told in the Purāṇa of the Chidambaram temple, which is much later than the epic. There {vyaghrapada|Vyāghrapāda} — “Tiger-foot” — is a sage who worships Śiva at Tillai, the forest of Chidambaram, and who was given a tiger's clawed feet so that he could climb trees and pick flowers for Śiva before the bees reached them. His little son Upamanyu cries for milk, and Śiva brings the ocean of milk to the child there, at Tillai.", "తమిళ శైవ సంప్రదాయానికి సొంత కథనం ఉంది; అది ఇతిహాసం కంటే చాలా తర్వాతిదైన చిదంబర ఆలయ పురాణంలో ఉంది. అక్కడ {vyaghrapada|వ్యాఘ్రపాదుడు} — “పులి పాదాలవాడు” — చిదంబరపు తిల్లై వనంలో శివుణ్ణి పూజించే ముని. తేనెటీగలు రాకముందే చెట్లెక్కి శివునికి పూలు కోయడానికి వీలుగా ఆయనకు పులి గోళ్ళ వంటి పాదాలు వచ్చాయట. ఆయన చిన్న కొడుకు ఉపమన్యుడు పాల కోసం ఏడిస్తే, శివుడు అక్కడే, తిల్లైలోనే, ఆ బిడ్డకు పాల సముద్రాన్ని తెచ్చాడు."],
   ["p", "So the same story is told in the Himālaya and in the far south, each region taking the hungry child as its own. The Mahābhārata's version is the oldest; the Chidambaram version is a later, loving local telling.", "అలా ఒకే కథ హిమాలయాలలోనూ, దూర దక్షిణాన కూడా చెప్పబడుతుంది; ప్రతి ప్రాంతమూ ఆ ఆకలిగొన్న బిడ్డను తనవాడిగా చేసుకుంది. మహాభారత కథనం అన్నిటికంటే పాతది; చిదంబర కథనం తర్వాతి కాలపు, ప్రేమతో నిండిన స్థానిక కథనం."],
   ["src", "Mahābhārata, Anuśāsana Parva, Dānadharma section — Śiva and Umā on the bull; the ocean of milk and the other boons. Liṅga Purāṇa and Śiva Purāṇa — Upamanyu taken as son of Śiva and the Goddess. Later Tamil Chidambaram tradition (the temple's Purāṇa) for Vyāghrapāda at Tillai.", "మహాభారతం, అనుశాసన పర్వం, దానధర్మ ఘట్టం — వృషభం మీద శివపార్వతులు; పాల సముద్రం, ఇతర వరాలు. లింగ పురాణం, శివ పురాణం — ఉపమన్యుడు శివపార్వతుల కుమారునిగా. తిల్లైలో వ్యాఘ్రపాదుని కథ కోసం తర్వాతి తమిళ చిదంబర సంప్రదాయం (ఆలయ పురాణం)."]
  ]
 ],
 remember: [
  ["{shiva|Śiva} showed himself with {uma|Umā} on {nandi|Nandi} and gave {upamanyu|Upamanyu} an ocean of milk.", "{nandi|నందీశ్వరుని} మీద {uma|ఉమాదేవితో} కలిసి {shiva|శివుడు} ప్రత్యక్షమై {upamanyu|ఉపమన్యునికి} పాల సముద్రాన్ని ఇచ్చాడు."],
  ["He also gave him agelessness, knowledge and his lasting presence near the hermitage.", "ముసలితనం లేకపోవడం, జ్ఞానం, ఆశ్రమం దగ్గర తన నిత్య సాన్నిధ్యం కూడా ఇచ్చాడు."],
  ["Later Tamil tradition places this story at Chidambaram, with {vyaghrapada|Vyāghrapāda} as the tiger-footed father.", "తర్వాతి తమిళ సంప్రదాయం ఈ కథను చిదంబరంలో చెబుతుంది; అక్కడ పులి పాదాల {vyaghrapada|వ్యాఘ్రపాదుడు} తండ్రి."]
 ],
 think: ["Upamanyu asked for a cup of milk and received an ocean. Why do you think stories so often give the most to the one who stopped asking for himself?", "ఉపమన్యుడు ఒక గ్లాసు పాలు అడిగాడు; సముద్రమే దొరికింది. తన కోసం అడగడం మానేసినవాడికే కథలు ఎక్కువ ఎందుకు ఇస్తాయని నువ్వు అనుకుంటున్నావు?"]
},
{
 id: "up-8", sage: "upamanyu", n: 8, order: 3108, date: "2026-11-02",
 title: "Kṛṣṇa at the Hermitage", titleTe: "ఆశ్రమానికి వచ్చిన శ్రీకృష్ణుడు",
 src: "Mahābhārata, Anuśāsana Parva (Dānadharma section)",
 who: ["upamanyu", "krishna", "jambavati", "rukmini", "pradyumna", "samba"],
 pages: [
  [
   ["p", "Years later, in Dvārakā, {jambavati|Jāmbavatī} — the daughter of Jāmbavān and one of {krishna|Kṛṣṇa}'s queens — came to her husband with a wish. {rukmini|Rukmiṇī} had fine sons, {pradyumna|Pradyumna} first among them. “Give me a son like them,” she said, “brave and strong and dear to all.”", "ఎన్నో ఏళ్ళ తర్వాత ద్వారకలో {jambavati|జాంబవతి} — జాంబవంతుని కుమార్తె, {krishna|శ్రీకృష్ణుని} రాణులలో ఒకతె — భర్త దగ్గరకు ఒక కోరికతో వచ్చింది. {rukmini|రుక్మిణీదేవికి} చక్కని కొడుకులు ఉన్నారు; వారిలో {pradyumna|ప్రద్యుమ్నుడు} మొదటివాడు. “అలాంటి కొడుకును నాకూ ఇవ్వండి — వీరుడు, బలవంతుడు, అందరికీ ప్రియమైనవాడు,” అని అడిగింది."],
   ["p", "Kṛṣṇa said he would win such a son by tapas, and he set out for the Himālaya. There, Kṛṣṇa tells Yudhiṣṭhira, he came upon the hermitage of {upamanyu|Upamanyu}, now a great and ageless sage.", "అలాంటి కొడుకు కోసం తపస్సు చేస్తానని కృష్ణుడు చెప్పి హిమాలయాలకు బయలుదేరాడు. అక్కడ, ఇప్పుడు గొప్ప మహర్షిగా, ముసలితనం లేనివానిగా ఉన్న {upamanyu|ఉపమన్యుని} ఆశ్రమానికి చేరుకున్నానని కృష్ణుడు ధర్మరాజుకు చెబుతాడు."]
  ],
  [
   ["h", "A hermitage where no one was afraid", "భయం లేని ఆశ్రమం"],
   ["p", "Kṛṣṇa describes the place with wonder. Trees bore flowers and fruit in every season. Sages of every kind lived there — some living only on water, some on air, some on fallen leaves, some standing in water, some sitting among five fires. And the wild animals had forgotten to fight: lions and deer, snakes and mongooses, tigers and cows lived side by side as friends, because of the power of that place.", "కృష్ణుడు ఆ చోటును ఆశ్చర్యంతో వర్ణిస్తాడు. చెట్లు అన్ని ఋతువుల్లోనూ పూలు, పండ్లు ఇస్తున్నాయి. రకరకాల మునులు అక్కడ ఉన్నారు — కొందరు నీళ్ళు మాత్రమే తాగుతూ, కొందరు గాలి మాత్రమే తీసుకుంటూ, కొందరు రాలిన ఆకులు తింటూ, కొందరు నీళ్ళలో నిలబడి, కొందరు పంచాగ్నుల మధ్య కూర్చుని. అడవి జంతువులు పోట్లాడడం మరచిపోయాయి: సింహాలు-జింకలు, పాములు-ముంగిసలు, పులులు-ఆవులు ఆ చోటి మహిమ వల్ల స్నేహితుల్లా పక్కపక్కనే ఉన్నాయి."],
   ["p", "In the middle of it all sat Upamanyu, shining with tapas, surrounded by pupils. Kṛṣṇa bowed to him, and the sage welcomed him with honour, as one who knew exactly who his guest was.", "వీటన్నిటి మధ్యలో తపస్తేజస్సుతో ప్రకాశిస్తూ, శిష్యుల మధ్య ఉపమన్యుడు కూర్చుని ఉన్నాడు. కృష్ణుడు ఆయనకు నమస్కరించాడు; తన అతిథి ఎవరో పూర్తిగా తెలిసినవాడిగా ఆ మహర్షి ఆయనను సగౌరవంగా ఆహ్వానించాడు."]
  ],
  [
   ["h", "The teacher of Kṛṣṇa", "కృష్ణునికి గురువు"],
   ["p", "Upamanyu told Kṛṣṇa his own story — the flour-water, the tapas, the false Indra, the ocean of milk. Then he told him of many others to whom Śiva had given boons: gods, sages, even demons, and Viṣṇu himself, who, the sage said, had received his discus from Śiva. “You too will see him,” said Upamanyu, “and you will have the son you seek.”", "ఉపమన్యుడు తన కథను కృష్ణునికి చెప్పాడు — పిండి నీళ్ళు, తపస్సు, మారువేషపు ఇంద్రుడు, పాల సముద్రం. తర్వాత శివుడు వరాలిచ్చిన ఇంకెంతో మంది గురించి చెప్పాడు — దేవతలు, మునులు, రాక్షసులు కూడా; విష్ణువే తన చక్రాన్ని శివుని నుండి పొందాడని ఆ మహర్షి చెప్పాడు. “నువ్వూ ఆయనను చూస్తావు; నువ్వు కోరే కొడుకు నీకు కలుగుతాడు,” అన్నాడు ఉపమన్యుడు."],
   ["p", "Then the sage gave Kṛṣṇa dīkṣā — formal initiation into the worship of Śiva. It is a striking picture, and the epic does not hide it: Kṛṣṇa, whom the epic itself calls the Lord, sits as a pupil before the hungry boy who became a sage, and receives the teaching with folded hands.", "తర్వాత ఆ మహర్షి కృష్ణునికి దీక్ష ఇచ్చాడు — శివారాధనలో విధిపూర్వకమైన ఉపదేశం. ఇది అద్భుతమైన దృశ్యం; ఇతిహాసం దీనిని దాచదు: ఇతిహాసమే భగవంతుడని పిలిచే కృష్ణుడు, ఆకలిగొన్న బాలుని నుండి మహర్షిగా ఎదిగిన వ్యక్తి ఎదుట శిష్యునిగా కూర్చుని, చేతులు జోడించి ఉపదేశం పొందుతున్నాడు."],
   ["dyk", "🙏", "In the epics, the great avatāras learn from human teachers: Rāma from Vasiṣṭha and Viśvāmitra, Kṛṣṇa from Sāndīpani — and, in the worship of Śiva, from Upamanyu.", "ఇతిహాసాలలో గొప్ప అవతారాలు మానవ గురువుల దగ్గర నేర్చుకుంటాయి: రాముడు వసిష్ఠ, విశ్వామిత్రుల దగ్గర; కృష్ణుడు సాందీపని దగ్గర — శివారాధనలో మాత్రం ఉపమన్యుని దగ్గర."],
   ["src", "Mahābhārata, Anuśāsana Parva, Dānadharma section — Jāmbavatī's wish; Kṛṣṇa's journey to the Himālaya; the description of Upamanyu's hermitage; Upamanyu's stories of Śiva's grace; Kṛṣṇa's initiation.", "మహాభారతం, అనుశాసన పర్వం, దానధర్మ ఘట్టం — జాంబవతి కోరిక; కృష్ణుని హిమాలయ ప్రయాణం; ఉపమన్యుని ఆశ్రమ వర్ణన; శివానుగ్రహం గురించి ఉపమన్యుడు చెప్పిన కథలు; కృష్ణునికి దీక్ష."]
  ]
 ],
 remember: [
  ["{jambavati|Jāmbavatī} asked {krishna|Kṛṣṇa} for a son like {rukmini|Rukmiṇī}'s sons.", "{rukmini|రుక్మిణి} కొడుకుల వంటి కొడుకును {jambavati|జాంబవతి} {krishna|కృష్ణుని} కోరింది."],
  ["Kṛṣṇa went to the Himālaya and found {upamanyu|Upamanyu}'s hermitage, where even wild animals lived in peace.", "కృష్ణుడు హిమాలయాలకు వెళ్ళి {upamanyu|ఉపమన్యుని} ఆశ్రమాన్ని చేరుకున్నాడు; అక్కడ అడవి జంతువులు కూడా శాంతంగా ఉండేవి."],
  ["Upamanyu initiated Kṛṣṇa into the worship of Śiva.", "ఉపమన్యుడు కృష్ణునికి శివారాధనలో దీక్ష ఇచ్చాడు."]
 ],
 think: ["In the story, even Kṛṣṇa sits down as a pupil. What does it say about learning, that the greatest are still willing to be taught?", "ఈ కథలో కృష్ణుడు కూడా శిష్యునిగా కూర్చున్నాడు. గొప్పవారు కూడా నేర్చుకోవడానికి సిద్ధంగా ఉండడం చదువు గురించి ఏం చెబుతుంది?"]
},
{
 id: "up-9", sage: "upamanyu", n: 9, order: 3109, date: "2026-11-02",
 title: "The Thousand Names of Śiva", titleTe: "శివ సహస్రనామాలు",
 src: "Mahābhārata, Anuśāsana Parva · Śiva Purāṇa (Vāyavīya Saṃhitā)",
 who: ["upamanyu", "krishna", "shiva", "uma", "tandi", "samba", "bhishma", "yudhishthira"],
 pages: [
  [
   ["p", "As part of the teaching, {upamanyu|Upamanyu} gave {krishna|Kṛṣṇa} a great treasure: the thousand and eight names of {shiva|Śiva}. These names, he said, had first been spoken by Brahmā, and had come down through a long line of teachers. Among them was the ancient sage {tandi|Taṇḍi}, who had worshipped Śiva for ages in the first age of the world and had praised him with these names; and so they came at last to Upamanyu.", "ఉపదేశంలో భాగంగా {upamanyu|ఉపమన్యుడు} {krishna|కృష్ణునికి} ఒక గొప్ప నిధిని ఇచ్చాడు — {shiva|శివుని} సహస్ర (వెయ్యిన్నెనిమిది) నామాలు. ఈ నామాలను మొదట బ్రహ్మ పలికాడని, అవి గురువుల దీర్ఘ పరంపర ద్వారా వచ్చాయని చెప్పాడు. ఆ పరంపరలో {tandi|తండి మహర్షి} అనే ప్రాచీన ముని ఉన్నాడు — లోకపు మొదటి యుగంలో ఎంతో కాలం శివుణ్ణి ఆరాధించి ఈ నామాలతో స్తుతించాడు. అలా అవి చివరికి ఉపమన్యునికి చేరాయి."],
   ["p", "The epic gives the whole list of names here. It is the oldest Śiva Sahasranāma we have, and it is still chanted. Upamanyu also told Kṛṣṇa how Taṇḍi had won Śiva's grace, so that Kṛṣṇa would know he was receiving the words of a long and tested line.", "ఇతిహాసం ఇక్కడ ఆ నామాల పూర్తి జాబితాను ఇస్తుంది. మనకు ఉన్న శివ సహస్రనామాలలో ఇదే అతి ప్రాచీనమైనది; ఇప్పటికీ దీనిని పారాయణ చేస్తారు. తండి మహర్షి శివానుగ్రహాన్ని ఎలా పొందాడో కూడా ఉపమన్యుడు కృష్ణునికి చెప్పాడు — తాను పొందుతున్నది సుదీర్ఘమైన, పరీక్షించబడిన పరంపర మాటలని కృష్ణునికి తెలియాలని."]
  ],
  [
   ["h", "Kṛṣṇa's tapas", "కృష్ణుని తపస్సు"],
   ["p", "Then Kṛṣṇa himself did tapas, as Upamanyu had taught him — living first on fruit, then on water, then on air, standing with his arms raised and his mind fixed on Śiva. In time the sky opened and Śiva appeared with {uma|Umā}, surrounded by the gods. Kṛṣṇa praised him, and Śiva and Umā gave him boons — the epic counts eight from each — among them strength and victory in battle, great fame, steadiness in dharma, nearness to Śiva, the love of his own people, and many sons.", "తర్వాత ఉపమన్యుడు నేర్పినట్లే కృష్ణుడు తానే తపస్సు చేశాడు — మొదట పండ్లు, తర్వాత నీళ్ళు, తర్వాత గాలి మాత్రమే తీసుకుంటూ, చేతులు పైకెత్తి నిలబడి, మనసును శివుని మీదే నిలిపి. కొంత కాలానికి ఆకాశం తెరుచుకుని, దేవతలు చుట్టూ ఉండగా {uma|ఉమాదేవితో} కలిసి శివుడు ప్రత్యక్షమయ్యాడు. కృష్ణుడు స్తుతించాడు; శివపార్వతులు ఆయనకు వరాలు ఇచ్చారు — ఒక్కొక్కరూ ఎనిమిదేసి అని ఇతిహాసం లెక్క చెబుతుంది. వాటిలో యుద్ధంలో బలం, విజయం; గొప్ప కీర్తి; ధర్మంలో స్థిరత్వం; శివుని సాన్నిధ్యం; తనవారి ప్రేమ; ఎంతో మంది కొడుకులు ఉన్నాయి."],
   ["p", "Kṛṣṇa went home to Dvārakā, and in time Jāmbavatī bore him a son, {samba|Sāmba}.", "కృష్ణుడు ద్వారకకు తిరిగి వెళ్ళాడు; కాలక్రమాన జాంబవతికి {samba|సాంబుడు} అనే కొడుకు పుట్టాడు."]
  ],
  [
   ["h", "Who is telling whom?", "ఎవరు ఎవరికి చెబుతున్నారు?"],
   ["p", "Look at how this story reaches us. Upamanyu told it to Kṛṣṇa. Kṛṣṇa told it to Yudhiṣṭhira, at {bhishma|Bhīṣma}'s side, after the war. Vaiśampāyana told the whole Mahābhārata to King Janamejaya, and the bard Ugraśravas told it to the sages of the Naimiṣa forest. Like the thousand names themselves, the story of Upamanyu comes down a line of tellers — each one passing on what he received.", "ఈ కథ మనకు ఎలా చేరిందో చూడండి. ఉపమన్యుడు కృష్ణునికి చెప్పాడు. యుద్ధం తర్వాత {bhishma|భీష్ముని} పక్కన కృష్ణుడు {yudhishthira|ధర్మరాజుకు} చెప్పాడు. వైశంపాయనుడు మహాభారతాన్నంతటినీ జనమేజయ మహారాజుకు చెప్పాడు; సూతుడైన ఉగ్రశ్రవుడు నైమిశారణ్యంలోని మునులకు చెప్పాడు. సహస్రనామాల లాగే ఉపమన్యుని కథ కూడా కథకుల పరంపరగా వచ్చింది — ప్రతి ఒక్కరూ తాము పొందినదాన్ని ముందుకు అందించారు."],
   ["p", "The Śiva Purāṇa, in its Vāyavīya Saṃhitā, goes further: there Upamanyu teaches Kṛṣṇa the whole Pāśupata way of Śiva's worship at length — the rites, the mantra, the inner meaning. For the Śaiva tradition, Upamanyu became the model teacher, and the conversation of Upamanyu and Kṛṣṇa became one of its great scriptures.", "శివ పురాణం, తన వాయవీయ సంహితలో, ఇంకా ముందుకు వెళ్తుంది: అక్కడ ఉపమన్యుడు కృష్ణునికి శివారాధన యొక్క పాశుపత మార్గాన్నంతటినీ విస్తారంగా బోధిస్తాడు — విధులు, మంత్రం, అంతరార్థం. శైవ సంప్రదాయానికి ఉపమన్యుడు ఆదర్శ గురువు అయ్యాడు; ఉపమన్యు-కృష్ణ సంవాదం దాని గొప్ప గ్రంథాలలో ఒకటైంది."],
   ["dyk", "🕉️", "There are two famous “thousand names” in the Anuśāsana Parva: Bhīṣma's Viṣṇu Sahasranāma, and the Śiva Sahasranāma that Kṛṣṇa received from Upamanyu. The same book of the same epic holds both.", "అనుశాసన పర్వంలో రెండు ప్రసిద్ధ “సహస్రనామాలు” ఉన్నాయి: భీష్ముడు చెప్పిన విష్ణు సహస్రనామం, ఉపమన్యుని నుండి కృష్ణుడు పొందిన శివ సహస్రనామం. ఒకే ఇతిహాసంలోని ఒకే పర్వం రెండింటినీ కలిగి ఉంది."],
   ["src", "Mahābhārata, Anuśāsana Parva, Dānadharma section — the Śiva Sahasranāma handed down through Taṇḍi to Upamanyu and given to Kṛṣṇa; Kṛṣṇa's tapas; the boons of Śiva and Umā; the birth of Sāmba. Śiva Purāṇa, Vāyavīya Saṃhitā — Upamanyu's teaching of the Pāśupata way to Kṛṣṇa.", "మహాభారతం, అనుశాసన పర్వం, దానధర్మ ఘట్టం — తండి ద్వారా ఉపమన్యునికి వచ్చి కృష్ణునికి ఇవ్వబడిన శివ సహస్రనామం; కృష్ణుని తపస్సు; శివపార్వతుల వరాలు; సాంబుని జననం. శివ పురాణం, వాయవీయ సంహిత — ఉపమన్యుడు కృష్ణునికి పాశుపత మార్గాన్ని బోధించడం."]
  ]
 ],
 remember: [
  ["{upamanyu|Upamanyu} gave {krishna|Kṛṣṇa} the thousand names of {shiva|Śiva}, handed down from Brahmā through {tandi|Taṇḍi}.", "బ్రహ్మ నుండి {tandi|తండి} ద్వారా వచ్చిన {shiva|శివ} సహస్రనామాలను {upamanyu|ఉపమన్యుడు} {krishna|కృష్ణునికి} ఇచ్చాడు."],
  ["Kṛṣṇa did tapas, received boons from Śiva and {uma|Umā}, and his son {samba|Sāmba} was born.", "కృష్ణుడు తపస్సు చేసి శివపార్వతుల వరాలు పొందాడు; {samba|సాంబుడు} జన్మించాడు."],
  ["The Śiva Purāṇa's Vāyavīya Saṃhitā makes Upamanyu Kṛṣṇa's teacher in the Pāśupata way.", "శివ పురాణంలోని వాయవీయ సంహిత ఉపమన్యుణ్ణి పాశుపత మార్గంలో కృష్ణుని గురువుగా చూపిస్తుంది."]
 ],
 think: ["The thousand names reached Upamanyu through a long line of teachers. What is something precious that came to you from people long before you?", "సహస్రనామాలు గురువుల దీర్ఘ పరంపర ద్వారా ఉపమన్యునికి చేరాయి. నీకంటే ఎంతో ముందటి వారి నుండి నీకు వచ్చిన విలువైనది ఏమిటి?"]
},
{
 id: "up-10", sage: "upamanyu", n: 10, order: 3110, date: "2026-11-02",
 title: "What Upamanyu Leaves Us", titleTe: "ఉపమన్యుడు మనకు ఇచ్చినది",
 src: "Chāndogya Upaniṣad · Nirukta · Periya Purāṇam · later tradition",
 who: ["upamanyu", "prachinashala", "ashvapati", "yaska", "sekkizhar", "dhaumya", "shiva"],
 pages: [
  [
   ["h", "The name in the Veda's world", "వేద ప్రపంచంలో ఈ పేరు"],
   ["p", "The name Upamanyu is old. In the Chāndogya Upaniṣad we meet {prachinashala|Prācīnaśāla Aupamanyava} — “the son, or descendant, of Upamanyu” — a wealthy and learned householder who, with four companions, went first to Uddālaka Āruṇi and then, with him, to King {ashvapati|Aśvapati} of the Kekayas, to learn about the Self that is present in all. And in {yaska|Yāska}'s Nirukta, the old book that explains the words of the Veda, a scholar named Aupamanyava is quoted again and again for his views on what words mean.", "ఉపమన్యుడు అనే పేరు పాతది. ఛాందోగ్య ఉపనిషత్తులో {prachinashala|ప్రాచీనశాల ఔపమన్యవుడు} కనిపిస్తాడు — “ఉపమన్యుని కొడుకు, లేదా వంశస్థుడు”. సంపన్నుడు, విద్వాంసుడు అయిన ఆ గృహస్థుడు మరో నలుగురితో కలిసి మొదట ఉద్దాలక ఆరుణి దగ్గరకు, తర్వాత ఆయనతో కలిసి కేకయ రాజు {ashvapati|అశ్వపతి} దగ్గరకు వెళ్ళి, అన్నిటిలో ఉన్న వైశ్వానర ఆత్మ గురించి నేర్చుకున్నాడు. వేద పదాల అర్థాన్ని వివరించే ప్రాచీన గ్రంథమైన {yaska|యాస్కుని} నిరుక్తంలో ఔపమన్యవుడు అనే పండితుని అభిప్రాయాలు మళ్ళీ మళ్ళీ ఉదహరించబడతాయి."],
   ["p", "We cannot say these men are the epic's Upamanyu or his sons; the texts do not say so. But they show that “Upamanyu” was a family name of learned brāhmaṇas from the time of the Upaniṣads, and many families still name it as their gotra today.", "వీరు ఇతిహాసంలోని ఉపమన్యుడో, ఆయన కొడుకులో అని చెప్పలేం; గ్రంథాలు అలా చెప్పవు. కానీ ఉపనిషత్తుల కాలం నుండే “ఉపమన్యు” విద్వాంసులైన బ్రాహ్మణుల వంశనామంగా ఉండేదని ఇవి చూపిస్తాయి; ఈనాటికీ చాలా కుటుంబాలు దానిని తమ గోత్రంగా చెప్పుకుంటాయి."]
  ],
  [
   ["h", "At the opening of the Periya Purāṇam", "పెరియ పురాణం ఆరంభంలో"],
   ["p", "In Tamil country, Upamanyu is greatly loved. {sekkizhar|Sekkiḻār}'s Periya Purāṇam, the twelfth-century Tamil book of the lives of the sixty-three Śaiva saints, begins in the Himālaya, at Upamanyu's hermitage. As the sage sits with his pupils, a great light passes by, going south. Upamanyu rises and worships it, and when his pupils ask why, he tells them: it is one of Śiva's own attendants, going down to be born on earth as the saint-poet Sundarar. And so, in Upamanyu's voice, the lives of the Tamil saints begin.", "తమిళనాట ఉపమన్యుడంటే ఎంతో ప్రేమ. అరవై ముగ్గురు శైవ భక్తుల జీవితాలను చెప్పే పన్నెండవ శతాబ్దపు తమిళ గ్రంథమైన {sekkizhar|శేక్కిళార్} రచించిన పెరియ పురాణం హిమాలయాలలో, ఉపమన్యుని ఆశ్రమంలో మొదలవుతుంది. మహర్షి శిష్యులతో కూర్చుని ఉండగా ఒక గొప్ప కాంతి దక్షిణం వైపు వెళ్తూ కనిపిస్తుంది. ఉపమన్యుడు లేచి దానికి నమస్కరిస్తాడు; ఎందుకని శిష్యులు అడిగితే, అది శివుని సొంత పరిచారకులలో ఒకడని, భూమి మీద భక్తకవి సుందరమూర్తి నాయనార్‌గా పుట్టడానికి వెళ్తున్నాడని చెబుతాడు. అలా ఉపమన్యుని మాటలతోనే తమిళ భక్తుల జీవితాలు మొదలవుతాయి."],
   ["p", "The hungry boy of the epic has become the elder who points the way for other saints — the one who recognises a holy soul passing by, and bows.", "ఇతిహాసంలోని ఆకలిగొన్న బాలుడు ఇప్పుడు ఇతర భక్తులకు దారి చూపించే పెద్దవాడయ్యాడు — పక్క నుండి వెళ్తున్న పవిత్ర ఆత్మను గుర్తించి నమస్కరించేవాడు."]
  ],
  [
   ["h", "Three lessons from a hungry boy", "ఆకలిగొన్న బాలుని నుండి మూడు పాఠాలు"],
   ["p", "First: what we eat touches others. {dhaumya|Dhaumya}'s hard rules taught Upamanyu to see the other beggars, the cows' owner and the calves behind every mouthful. Second: a rule kept only when it is easy is not yet kept. In the well, blind and starving, with the gods themselves giving him leave, he still would not break it. Third: ask the right giver. He would not take the three worlds from the false Indra; he waited for {shiva|Śiva}, and received an ocean.", "మొదటిది: మనం తినేది ఇతరులనూ తాకుతుంది. {dhaumya|ధౌమ్యుని} కఠిన నియమాలు ప్రతి ముద్ద వెనుక ఉన్న ఇతర భిక్షకులను, ఆవుల యజమానిని, దూడలను చూడడం ఉపమన్యునికి నేర్పాయి. రెండవది: సులభంగా ఉన్నప్పుడు మాత్రమే పాటించే నియమం ఇంకా పాటించినట్లు కాదు. బావిలో, గుడ్డివాడై, ఆకలితో, దేవతలే అనుమతి ఇస్తున్నా అతను నియమాన్ని తప్పలేదు. మూడవది: సరైన దాతనే అడుగు. మారువేషపు ఇంద్రుడు ఇచ్చే మూడు లోకాలనూ అతను తీసుకోలేదు; {shiva|శివుని} కోసం ఎదురుచూశాడు — సముద్రాన్నే పొందాడు."],
   ["p", "Whether you meet him as Dhaumya's cowherd or as Vyāghrapāda's son, Upamanyu is the sage of the empty cup. He shows that the child who learns to wait — patiently, honestly, without grabbing — may one day be the one who fills the cups of others, even the cup of Kṛṣṇa.", "ధౌమ్యుని ఆవుల కాపరిగా కలిసినా, వ్యాఘ్రపాదుని కొడుకుగా కలిసినా, ఉపమన్యుడు ఖాళీ గ్లాసు ముని. ఓపికగా, నిజాయితీగా, లాక్కోకుండా ఎదురుచూడడం నేర్చుకున్న బిడ్డే ఒకనాడు ఇతరుల గ్లాసులు నింపేవాడవుతాడని — కృష్ణుని గ్లాసును కూడా — ఆయన చూపిస్తాడు."],
   ["sglink", "Āyoda Dhaumya's other pupils, in Uttaṅka's life", "ఉత్తంకుని జీవితంలో ఆయోదధౌమ్యుని ఇతర శిష్యులు", "ut-1"],
   ["src", "Chāndogya Upaniṣad, fifth chapter (Prācīnaśāla Aupamanyava and the teaching of Aśvapati Kaikeya); Yāska's Nirukta (the views of Aupamanyava); Sekkiḻār's Periya Purāṇam, opening section (Upamanyu and the light of Sundarar); Upamanyu as a gotra name in living tradition.", "ఛాందోగ్య ఉపనిషత్తు, ఐదవ అధ్యాయం (ప్రాచీనశాల ఔపమన్యవుడు, అశ్వపతి కైకేయుని బోధ); యాస్కుని నిరుక్తం (ఔపమన్యవుని అభిప్రాయాలు); శేక్కిళార్ పెరియ పురాణం, ఆరంభ భాగం (ఉపమన్యుడు, సుందరుని కాంతి); సజీవ సంప్రదాయంలో ఉపమన్యు గోత్రనామం."]
  ]
 ],
 remember: [
  ["The Chāndogya Upaniṣad's {prachinashala|Prācīnaśāla Aupamanyava} and {yaska|Yāska}'s Aupamanyava carry the family name Upamanyu.", "ఛాందోగ్య ఉపనిషత్తులోని {prachinashala|ప్రాచీనశాల ఔపమన్యవుడు}, {yaska|యాస్కుని} నిరుక్తంలోని ఔపమన్యవుడు ఉపమన్యు వంశనామాన్ని కలిగి ఉన్నారు."],
  ["{sekkizhar|Sekkiḻār}'s Periya Purāṇam opens at {upamanyu|Upamanyu}'s Himālayan hermitage.", "{sekkizhar|శేక్కిళార్} పెరియ పురాణం హిమాలయాలలోని {upamanyu|ఉపమన్యుని} ఆశ్రమంలో మొదలవుతుంది."],
  ["His lessons: see who your food affects, keep the rule when it is hard, and ask the right giver.", "ఆయన పాఠాలు: నీ ఆహారం ఎవరిని తాకుతుందో చూడు; కష్టంలోనూ నియమం పాటించు; సరైన దాతనే అడుగు."]
 ],
 think: ["Of Upamanyu's three lessons, which one do you find hardest to live by — and why?", "ఉపమన్యుని మూడు పాఠాలలో నీకు పాటించడానికి అన్నిటికంటే కష్టమైనది ఏది — ఎందుకు?"]
}
]);
