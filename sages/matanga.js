// Great Sages — Mataṅga. Retold by Hari Pokkuluri.
// Told from the Mahābhārata (Anuśāsana Parva, Bhīṣma's teaching on Mataṅga and Indra), the Vālmīki
// Rāmāyaṇa (Araṇya Kāṇḍa — Kabandha and Śabarī; Kiṣkindhā Kāṇḍa — Dundubhi and Sugrīva), the Adhyātma
// Rāmāyaṇa and later tellings, in fresh original wording.
// Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { matanga: [
  ["The Donkey's Words", "Mahābhārata, Anuśāsana Parva"],
  ["Indra Says No", "Mahābhārata, Anuśāsana Parva"],
  ["Chandodeva — Honoured, Not Changed", "Mahābhārata, Anuśāsana and Vana Parvas"],
  ["The Forest Where Sweat Became Flowers", "Vālmīki Rāmāyaṇa, Araṇya Kāṇḍa"],
  ["Dundubhi's Blood", "Vālmīki Rāmāyaṇa, Kiṣkindhā Kāṇḍa"],
  ["The Mountain Vālin Could Not Climb", "Vālmīki Rāmāyaṇa, Kiṣkindhā Kāṇḍa"],
  ["The Promise to Śabarī", "Vālmīki Rāmāyaṇa, Araṇya Kāṇḍa · Adhyātma Rāmāyaṇa · later tellings"],
  ["Rāma in the Guru's Forest", "Vālmīki Rāmāyaṇa, Araṇya Kāṇḍa · later tellings"],
  ["The Name That Stayed", "Later tradition — Śyāmalā Daṇḍakam, Gayā Māhātmya, Hampi"]
] });
window.RMY_WHO = Object.assign({
  "gardabhi": { "av": "🫏", "en": "The mother donkey", "te": "తల్లి గాడిద", "d": "In the Mahābhārata, the she-donkey who saw young Mataṅga beating her foal and, speaking aloud, told him the secret of his birth.", "dt": "మహాభారతంలో — పసి మతంగుడు తన పిల్లను కొడుతుంటే చూసి, మాట్లాడి, అతని పుట్టుక రహస్యాన్ని చెప్పిన తల్లి గాడిద." },
  "matangi": { "av": "🦜", "en": "Mātaṅgī (Śyāmalā)", "te": "మాతంగి (శ్యామలా దేవి)", "d": "A form of the Goddess, dark-hued, holding a vīṇā, worshipped as the goddess of speech and music. Later Śākta tradition calls her the daughter of the sage Mataṅga.", "dt": "వీణ పట్టుకున్న, శ్యామల వర్ణపు దేవీ రూపం; వాక్కుకూ సంగీతానికీ అధిదేవతగా పూజలందుకుంటుంది. తర్వాతి శాక్త సంప్రదాయం ఆమెను మతంగ మహర్షి కుమార్తెగా చెబుతుంది." },
  "kalidasa": { "av": "🪶", "en": "Kālidāsa", "te": "కాళిదాసు", "d": "The greatest classical Sanskrit poet, author of Śākuntalam, Raghuvaṃśa and Meghadūta. Tradition also ascribes to him the hymn Śyāmalā Daṇḍakam.", "dt": "సంస్కృత మహాకవి; అభిజ్ఞాన శాకుంతలం, రఘువంశం, మేఘదూతం రచించాడు. శ్యామలా దండకం కూడా ఆయనదేనని సంప్రదాయం చెబుతుంది." },
  "tulasidas": { "av": "📿", "en": "Tulasīdās", "te": "తులసీదాసు", "d": "Sixteenth-century poet-saint who retold the Rāmāyaṇa in the Avadhī language as the Rāmacaritamānasa.", "dt": "పదహారవ శతాబ్దపు భక్త కవి; రామాయణాన్ని అవధీ భాషలో ‘రామచరితమానస్’గా రచించాడు." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "mt-1", sage: "matanga", n: 1, order: 5201, date: "2026-11-25",
 title: "The Donkey's Words", titleTe: "గాడిద చెప్పిన మాట",
 src: "Mahābhārata, Anuśāsana Parva",
 who: ["matanga", "gardabhi", "bhishma", "yudhishthira"],
 pages: [
  [
   ["p", "There are two pictures of the sage {matanga|Mataṅga} in our old books. In the Rāmāyaṇa he is an old teacher in a forest by Lake Pampā, so holy that the sweat of his pupils turned into flowers, and so fierce that one curse of his kept the mighty Vālin away from a whole mountain. In the Mahābhārata he is a young man who learns a painful secret about his birth and spends his whole life fighting against it.", "మన పాత గ్రంథాల్లో {matanga|మతంగ} మహర్షికి రెండు చిత్రాలు కనిపిస్తాయి. రామాయణంలో ఆయన పంపా సరస్సు దగ్గర అడవిలో ఉండే వృద్ధ గురువు — ఎంత పవిత్రుడంటే ఆయన శిష్యుల చెమట పువ్వులుగా మారింది; ఎంత తీక్ష్ణుడంటే ఆయన ఒక్క శాపం బలశాలి వాలిని ఒక పర్వతం మొత్తానికీ దూరంగా ఉంచింది. మహాభారతంలో ఆయన ఒక యువకుడు — తన పుట్టుక గురించి బాధాకరమైన రహస్యం తెలుసుకుని, జీవితమంతా దానితో పోరాడినవాడు."],
   ["p", "The texts themselves do not say plainly that these two are the same man. Many people in the tradition join them into one life, and others keep them apart. In this book we tell both, and at every step we say which book is speaking. We begin with the Mahābhārata, because it tells how Mataṅga's tapas began.", "ఈ ఇద్దరూ ఒక్కరే అని గ్రంథాలు స్పష్టంగా చెప్పవు. సంప్రదాయంలో చాలామంది ఇద్దరినీ కలిపి ఒకే జీవితంగా చెబుతారు; మరికొందరు వేరువేరుగా చూస్తారు. ఈ పుస్తకంలో రెండు కథలూ చెబుతాం; ప్రతి అడుగులోనూ ఏ గ్రంథం చెబుతోందో చెబుతాం. మతంగుని తపస్సు ఎలా మొదలైందో మహాభారతం చెబుతుంది కాబట్టి, అక్కడి నుండే మొదలుపెడదాం."],
   ["h", "A question on the bed of arrows", "అంపశయ్య మీద ఒక ప్రశ్న"],
   ["p", "After the Kurukṣetra war, {bhishma|Bhīṣma} lay on his bed of arrows, and {yudhishthira|Yudhiṣṭhira} came to him day after day to learn about dharma. One day he asked: “Grandfather, if a man is born a kṣatriya, a vaiśya or a śūdra, can he become a brāhmaṇa? How is it done?” Bhīṣma answered that by birth it is very hard indeed, and to show how hard, he told an old story — the story of Mataṅga and a donkey.", "కురుక్షేత్ర యుద్ధం ముగిశాక {bhishma|భీష్ముడు} అంపశయ్య మీద పడుకుని ఉన్నాడు; ధర్మం గురించి తెలుసుకోవడానికి {yudhishthira|ధర్మరాజు} రోజూ ఆయన దగ్గరకు వచ్చేవాడు. ఒక రోజు అడిగాడు: “తాతగారూ, క్షత్రియుడిగానో, వైశ్యుడిగానో, శూద్రుడిగానో పుట్టినవాడు బ్రాహ్మణుడు కాగలడా? ఎలా?” పుట్టుకతో అది చాలా చాలా కష్టమని భీష్ముడు చెప్పాడు; ఎంత కష్టమో చూపించడానికి ఒక పాత కథ చెప్పాడు — మతంగుడూ ఒక గాడిదా కథ."]
  ],
  [
   ["h", "A cart on the road", "దారిలో ఒక బండి"],
   ["p", "Mataṅga grew up as the son of a brāhmaṇa, in a brāhmaṇa's house, and everyone — Mataṅga too — believed he was a brāhmaṇa. One day his father was preparing a sacrifice and sent him to fetch what was needed. The young man set out in a cart pulled by a donkey, and the donkey was very young, hardly more than a foal.", "మతంగుడు ఒక బ్రాహ్మణుని కొడుకుగా, బ్రాహ్మణ ఇంట్లో పెరిగాడు. అతను బ్రాహ్మణుడే అని అందరూ — మతంగుడితో సహా — నమ్మారు. ఒక రోజు అతని తండ్రి యజ్ఞానికి ఏర్పాట్లు చేస్తూ, కావలసిన సామగ్రి తెమ్మని కొడుకును పంపాడు. ఆ యువకుడు ఒక గాడిద లాగే బండిలో బయలుదేరాడు. ఆ గాడిద చాలా చిన్నది — దాదాపు పిల్లే."],
   ["p", "The little animal did not pull the way Mataṅga wanted. He grew impatient and struck it with his goad, again and again, on its tender nose, until it was hurt and bleeding. Its mother, a she-donkey, was walking nearby and saw it all.", "ఆ చిన్న జంతువు మతంగుడు కోరినట్టు లాగలేదు. అతనికి అసహనం పెరిగింది; ములుకోలతో దాని మెత్తని ముక్కు మీద మళ్ళీ మళ్ళీ పొడిచాడు — దానికి గాయమై రక్తం కారింది. దాని తల్లి గాడిద పక్కనే నడుస్తూ అదంతా చూసింది."],
   ["p", "Then the {gardabhi|mother donkey} spoke to her child, loudly enough for the young man to hear: “Do not grieve, my little one. It is a caṇḍāla who is driving you. A brāhmaṇa is gentle; a brāhmaṇa is a friend to every creature. A man who strikes a helpless young animal like this is showing what he really is.”", "అప్పుడు {gardabhi|తల్లి గాడిద} ఆ యువకుడికి వినిపించేలా తన పిల్లతో ఇలా అంది: “బాధపడకు చిన్నా. నిన్ను తోలుతున్నది ఒక చండాలుడు. బ్రాహ్మణుడు మృదువుగా ఉంటాడు; ప్రతి ప్రాణికీ స్నేహితుడుగా ఉంటాడు. ఇలా నిస్సహాయమైన పసి జంతువును కొట్టేవాడు తానెవరో తానే చూపించుకుంటున్నాడు.”"]
  ],
  [
   ["h", "The secret", "ఆ రహస్యం"],
   ["p", "Mataṅga jumped down from the cart and stood before the donkey with folded hands. “Mother, why do you call me a caṇḍāla? Who told you this? Tell me the truth.” And the donkey told him. His mother, long ago, at a careless moment, had been with a barber — a śūdra — and not with her husband. Mataṅga was the son of that barber. So, by the strict rules of birth of those days, he was not a brāhmaṇa at all, but a caṇḍāla, a man of the lowest standing.", "మతంగుడు బండి దిగి, చేతులు జోడించి ఆ గాడిద ముందు నిలబడ్డాడు. “అమ్మా, నన్ను చండాలుడు అని ఎందుకు అంటున్నావు? నీకు ఎవరు చెప్పారు? నిజం చెప్పు.” గాడిద చెప్పింది. చాలా కాలం క్రితం, ఒక అజాగ్రత్త క్షణంలో, అతని తల్లి తన భర్తతో కాకుండా ఒక మంగలివానితో — ఒక శూద్రునితో — కలిసింది. మతంగుడు ఆ మంగలివాని కొడుకు. అందుచేత ఆనాటి కఠినమైన జన్మ నియమాల ప్రకారం అతను బ్రాహ్మణుడు కాడు — అందరికంటే తక్కువ స్థానంలో ఉంచబడిన చండాలుడు."],
   ["p", "The Mahābhārata does not soften this, and we will not either. A young man who had grown up proud of his birth learnt, from the mouth of a donkey, that the birth he was proud of was not his. And he learnt it at the very moment he was being cruel — so the lesson came with shame twice over.", "మహాభారతం దీన్ని మృదువుగా చెప్పదు; మనమూ చెప్పం. తన పుట్టుక గురించి గర్వంగా పెరిగిన ఒక యువకుడు, తాను గర్వపడిన ఆ పుట్టుక తనది కాదని ఒక గాడిద నోటి నుండి తెలుసుకున్నాడు. అదీ సరిగ్గా తాను క్రూరంగా ప్రవర్తిస్తున్న క్షణంలోనే — కాబట్టి ఆ పాఠం రెండింతల సిగ్గుతో వచ్చింది."],
   ["dyk", "🫏", "Look closely at how the donkey judged him. She did not look at his family or his sacred thread. She looked at what he was doing with his hands. In the epic, the cruelty came first and the secret second.", "గాడిద అతణ్ణి ఎలా అంచనా వేసిందో గమనించండి. అతని వంశాన్నీ, జంధ్యాన్నీ చూడలేదు. అతను తన చేతులతో ఏం చేస్తున్నాడో చూసింది. ఇతిహాసంలో ముందు వచ్చింది క్రూరత్వం; రహస్యం తర్వాత వచ్చింది."]
  ],
  [
   ["h", "Turning back", "వెనక్కి తిరిగిన ప్రయాణం"],
   ["p", "Mataṅga did not go on to fetch the things for the sacrifice. He turned the cart around and went home. His father was surprised to see him back so soon. “Why have you returned?” Mataṅga told him everything the donkey had said. Then he said, “If I am not a brāhmaṇa by birth, I will become one by tapas.” And he left his father's house and went into the forest.", "మతంగుడు యజ్ఞ సామగ్రి తేవడానికి ముందుకు వెళ్ళలేదు. బండి వెనక్కి తిప్పి ఇంటికి వచ్చేశాడు. ఇంత త్వరగా తిరిగి వచ్చినందుకు తండ్రి ఆశ్చర్యపోయాడు. “ఎందుకు వెనక్కి వచ్చావు?” గాడిద చెప్పినదంతా మతంగుడు తండ్రికి చెప్పాడు. తర్వాత ఇలా అన్నాడు: “పుట్టుకతో నేను బ్రాహ్మణుణ్ణి కాకపోతే, తపస్సుతో అవుతాను.” తండ్రి ఇల్లు విడిచి అడవికి వెళ్ళిపోయాడు."],
   ["p", "Notice what he did not do. He did not deny it, he did not hide it, and he did not blame the donkey. He went straight to the man who had raised him and told him the truth, painful as it was. Whatever we think of the rest of his story, it begins with honesty.", "అతను ఏం చేయలేదో గమనించండి. దాన్ని కాదనలేదు, దాచలేదు, గాడిదను నిందించలేదు. తనను పెంచిన మనిషి దగ్గరకే నేరుగా వెళ్ళి, ఎంత బాధగా ఉన్నా నిజం చెప్పాడు. అతని మిగతా కథ గురించి మనం ఏమనుకున్నా, అది నిజాయితీతోనే మొదలైంది."],
   ["src", "Mahābhārata, Anuśāsana Parva — Yudhiṣṭhira asks Bhīṣma how one of another varṇa may become a brāhmaṇa; Bhīṣma tells the story of Mataṅga and the she-donkey (the dialogue of Indra and Mataṅga).", "మహాభారతం, అనుశాసనిక పర్వం — ఇతర వర్ణంలో పుట్టినవాడు బ్రాహ్మణుడు ఎలా కాగలడని ధర్మరాజు భీష్ముని అడుగుతాడు; భీష్ముడు మతంగుడూ గాడిదా కథ చెబుతాడు (ఇంద్ర–మతంగ సంవాదం)."]
  ]
 ],
 remember: [
  ["There are two pictures of {matanga|Mataṅga}: the Mahābhārata's young seeker and the Rāmāyaṇa's old forest guru.", "{matanga|మతంగుడికి} రెండు చిత్రాలు: మహాభారతంలోని యువ సాధకుడు, రామాయణంలోని వృద్ధ వనగురువు."],
  ["{bhishma|Bhīṣma} told his story to {yudhishthira|Yudhiṣṭhira} on the bed of arrows.", "అంపశయ్య మీద {bhishma|భీష్ముడు} ఈ కథను {yudhishthira|ధర్మరాజుకు} చెప్పాడు."],
  ["A {gardabhi|mother donkey} revealed his birth when she saw him beating her foal.", "తన పిల్లను కొడుతుంటే చూసిన {gardabhi|తల్లి గాడిద} అతని పుట్టుక రహస్యం బయటపెట్టింది."]
 ],
 think: ["The donkey judged Mataṅga by what he did, not by who his parents were. Which do you think tells more about a person — and why?", "గాడిద మతంగుణ్ణి అతని తల్లిదండ్రులను బట్టి కాదు, అతను చేసిన పనిని బట్టి అంచనా వేసింది. ఒక మనిషి గురించి ఏది ఎక్కువ చెబుతుందని మీరు అనుకుంటున్నారు — ఎందుకు?"]
},
{
 id: "mt-2", sage: "matanga", n: 2, order: 5202, date: "2026-11-25",
 title: "Indra Says No", titleTe: "ఇంద్రుడు ‘కాదు’ అన్నాడు",
 src: "Mahābhārata, Anuśāsana Parva",
 who: ["matanga", "indra", "bhishma"],
 pages: [
  [
   ["p", "In the forest Mataṅga began a tapas so harsh that, the Mahābhārata says, it heated the worlds. He ate almost nothing, he did not rest, and every thought of his was turned to one wish. At last {indra|Indra}, king of the gods, came down to him and said, “Mataṅga, I am pleased. Ask for a boon.”", "అడవిలో మతంగుడు ఎంత కఠినమైన తపస్సు మొదలుపెట్టాడంటే, దాని వేడికి లోకాలు తపించిపోయాయని మహాభారతం చెబుతుంది. దాదాపు ఏమీ తినలేదు, విశ్రాంతి తీసుకోలేదు; అతని ప్రతి ఆలోచనా ఒకే కోరిక వైపు తిరిగింది. చివరకు దేవతల రాజు {indra|ఇంద్రుడు} దిగివచ్చి, “మతంగా, నీ తపస్సుకు సంతోషించాను. వరం కోరుకో” అన్నాడు."],
   ["p", "“Make me a brāhmaṇa,” said Mataṅga. “That is the only boon I want.”", "“నన్ను బ్రాహ్మణుణ్ణి చెయ్యి,” అన్నాడు మతంగుడు. “నాకు కావలసిన వరం అదొక్కటే.”"],
   ["p", "Indra shook his head. “That I cannot give you. Brāhmaṇahood is not won by one born as you were, not in this life. Ask for anything else — wealth, power, long life, pleasures — and it is yours. But give up this wish, or it will destroy you.”", "ఇంద్రుడు తల అడ్డంగా ఊపాడు. “అది నేను ఇవ్వలేను. నీలా పుట్టినవాడికి ఈ జన్మలో బ్రాహ్మణత్వం దొరకదు. ఇంకేదైనా అడుగు — ధనం, అధికారం, దీర్ఘాయువు, సుఖాలు — ఏదైనా ఇస్తాను. కానీ ఈ కోరిక వదులుకో; లేకపోతే ఇది నిన్నే నాశనం చేస్తుంది.”"]
  ],
  [
   ["h", "A hundred years on one foot", "ఒంటి కాలి మీద వంద సంవత్సరాలు"],
   ["p", "Mataṅga did not ask for anything else. When Indra had gone, he made his tapas harder still. He stood on one foot, the Mahābhārata says, for a hundred years, his mind fixed on his goal. Again Indra came, and again the answer was the same.", "మతంగుడు ఇంకేదీ అడగలేదు. ఇంద్రుడు వెళ్ళిపోయాక తపస్సును ఇంకా కఠినం చేశాడు. మనసును లక్ష్యం మీద నిలిపి వంద సంవత్సరాలు ఒంటి కాలి మీద నిలబడ్డాడని మహాభారతం చెబుతుంది. ఇంద్రుడు మళ్ళీ వచ్చాడు; మళ్ళీ అదే జవాబు."],
   ["p", "This time Indra explained, in the way the epic thinks about such things. A being climbs slowly, he said, through a long ladder of births — from the lowest station to a śūdra, to a vaiśya, to a kṣatriya — and only after countless lives of good conduct does one reach brāhmaṇahood. And even a brāhmaṇa can fall from it easily, through anger, greed or wrong deeds. “You are asking to jump the whole ladder in one step. It cannot be done.”", "ఈసారి ఇంద్రుడు ఇతిహాసం ఆలోచించే తీరులో వివరించాడు. ఒక జీవి ఎన్నో జన్మల పొడవాటి నిచ్చెన మీద నెమ్మదిగా పైకి ఎక్కుతుంది — అన్నిటికంటే కింది స్థానం నుండి శూద్రుడిగా, వైశ్యుడిగా, క్షత్రియుడిగా — లెక్కలేనన్ని జన్మల సత్ప్రవర్తన తర్వాతే బ్రాహ్మణత్వం వస్తుంది. బ్రాహ్మణుడు కూడా కోపం, లోభం, చెడ్డ పనుల వల్ల సులభంగా దాని నుండి పడిపోతాడు. “నువ్వు నిచ్చెన మొత్తాన్నీ ఒక్క అడుగులో దూకాలనుకుంటున్నావు. అది జరగదు.”"],
   ["p", "Mataṅga's answer was full of pain. “If brāhmaṇas can throw away what they were born with, and I who was never given it am working this hard for it, why should I be refused? I have no wife, no wealth, no comfort — only this one aim. I will not give it up.”", "మతంగుని జవాబు బాధతో నిండి ఉంది. “పుట్టుకతో వచ్చినదాన్ని బ్రాహ్మణులు పారేసుకోగలిగినప్పుడు, అది ఎప్పుడూ దొరకని నేను దాని కోసం ఇంత కష్టపడుతుంటే నన్నెందుకు తిరస్కరించాలి? నాకు భార్య లేదు, ధనం లేదు, సుఖం లేదు — ఈ ఒక్క లక్ష్యమే ఉంది. దీన్ని వదలను.”"]
  ],
  [
   ["h", "On the tip of a toe", "బొటనవేలి కొన మీద"],
   ["p", "Then he did the hardest thing of all. He balanced on the tip of his big toe, and stood like that, the epic says, for another hundred years. He grew so thin that he was skin over bone; his veins stood out like cords. At last his strength gave way, and he began to fall.", "అప్పుడు అన్నిటికంటే కష్టమైన పని చేశాడు. కాలి బొటనవేలి కొన మీద తనను నిలుపుకుని, ఇంకో వంద సంవత్సరాలు అలాగే నిలబడ్డాడని ఇతిహాసం చెబుతుంది. ఎముకల మీద చర్మం మాత్రమే మిగిలేంతగా చిక్కిపోయాడు; నరాలు తాళ్ళలా బయటికి కనిపించాయి. చివరకు శక్తి సన్నగిల్లి కూలిపోసాగాడు."],
   ["p", "Indra hurried to him and held him up before he struck the ground. Even the king of the gods, who had said no three times, was moved by a man who would not stop.", "నేల తాకకముందే ఇంద్రుడు పరుగెత్తి వచ్చి అతణ్ణి పట్టుకున్నాడు. మూడుసార్లు ‘కాదు’ అన్న దేవేంద్రుడు కూడా, ఆగని ఆ మనిషిని చూసి చలించిపోయాడు."],
   ["dyk", "🦶", "Standing on one foot, or on a toe, is one of the oldest pictures of tapas in our books. Bhagīratha, praying for the Gaṅgā, and the child Dhruva are both described doing it. The point is not the body's pain but the mind's stillness: if the mind wavers even a little, you fall.", "ఒంటి కాలి మీదో, బొటనవేలి మీదో నిలబడడం మన గ్రంథాల్లో తపస్సుకు అతి పురాతనమైన చిత్రాల్లో ఒకటి. గంగ కోసం ప్రార్థించిన భగీరథుడూ, బాలుడు ధ్రువుడూ అలా తపస్సు చేశారని చెబుతారు. అసలు విషయం శరీరపు నొప్పి కాదు — మనసు నిశ్చలత. మనసు కొంచెం చలించినా పడిపోతారు."],
   ["src", "Mahābhārata, Anuśāsana Parva — the dialogue of Indra and Mataṅga: Mataṅga's tapas, Indra's repeated refusals and his teaching on how hard brāhmaṇahood is to reach by birth.", "మహాభారతం, అనుశాసనిక పర్వం — ఇంద్ర–మతంగ సంవాదం: మతంగుని తపస్సు, ఇంద్రుడు పదేపదే తిరస్కరించడం, పుట్టుకతో బ్రాహ్మణత్వం ఎంత దుర్లభమో ఆయన చెప్పిన ఉపదేశం."]
  ]
 ],
 remember: [
  ["{matanga|Mataṅga} asked {indra|Indra} for one boon only: to become a brāhmaṇa.", "{matanga|మతంగుడు} {indra|ఇంద్రుణ్ణి} ఒక్కటే వరం అడిగాడు: బ్రాహ్మణుడు కావాలని."],
  ["He stood a hundred years on one foot, and then a hundred more on the tip of his toe.", "వంద సంవత్సరాలు ఒంటి కాలి మీద, తర్వాత ఇంకో వంద బొటనవేలి కొన మీద నిలబడ్డాడు."],
  ["Indra refused again and again, but caught him when he fell.", "ఇంద్రుడు మళ్ళీ మళ్ళీ తిరస్కరించాడు; కానీ అతను కూలుతుంటే పట్టుకున్నాడు."]
 ],
 think: ["Mataṅga would not take any other boon. Is it brave to refuse every second choice and hold on to one goal — or can it also be a kind of trap?", "మతంగుడు ఇంకే వరమూ తీసుకోలేదు. రెండో ఎంపిక ఏదీ ఒప్పుకోకుండా ఒకే లక్ష్యాన్ని పట్టుకోవడం ధైర్యమా — లేక అది ఒక విధమైన ఉచ్చు కూడా కావచ్చా?"]
},
{
 id: "mt-3", sage: "matanga", n: 3, order: 5203, date: "2026-11-25",
 title: "Chandodeva — Honoured, Not Changed", titleTe: "ఛందోదేవుడు — మారని పుట్టుక, దక్కిన గౌరవం",
 src: "Mahābhārata, Anuśāsana and Vana Parvas",
 who: ["matanga", "indra", "bhishma", "vishvamitra", "yudhishthira", "satyakama"],
 pages: [
  [
   ["p", "Holding the fallen ascetic, Indra spoke gently. “What you ask I still cannot give. But your tapas will not go empty. Choose a different gift.” Mataṅga, at the end of his strength, asked for something smaller: to move freely wherever he wished like a bird in the sky, to take whatever form he wished, to be honoured, and to have a fame that would not die.", "కూలిన తపస్విని పట్టుకుని ఇంద్రుడు మెల్లగా మాట్లాడాడు. “నువ్వు అడిగినది ఇప్పటికీ ఇవ్వలేను. కానీ నీ తపస్సు వృథా పోదు. వేరే వరం కోరుకో.” శక్తి అంతా అయిపోయిన మతంగుడు చిన్న కోరిక అడిగాడు: ఆకాశంలో పక్షిలా ఎక్కడికంటే అక్కడికి స్వేచ్ఛగా వెళ్ళగలగాలి, కోరిన రూపం ధరించగలగాలి, గౌరవం పొందాలి, ఎప్పటికీ చావని కీర్తి ఉండాలి."],
   ["p", "Indra granted it. “You will be known as Chandodeva — a god of the Vedic metres. Women will worship you, and your fame will be great.” Then Indra returned to heaven, and Mataṅga, Bhīṣma says, gave up his body and reached a high and blessed state.", "ఇంద్రుడు ఆ వరం ఇచ్చాడు. “నువ్వు ‘ఛందోదేవుడు’ — వేద ఛందస్సుల దేవత — అని ప్రసిద్ధి పొందుతావు. స్త్రీలు నిన్ను పూజిస్తారు; నీ కీర్తి గొప్పదవుతుంది.” తర్వాత ఇంద్రుడు స్వర్గానికి తిరిగి వెళ్ళాడు. మతంగుడు దేహం విడిచి ఉన్నతమైన, పుణ్యమైన స్థితిని పొందాడని భీష్ముడు చెబుతాడు."],
   ["dyk", "🎵", "Chandas means the metres of the Veda — the measured patterns, like the Gāyatrī and the Triṣṭubh, that hold the sacred words. The man who was refused the Veda's priesthood was made a god of the Veda's own music. The epic does not explain the irony; it leaves it for us to notice.", "‘ఛందస్సు’ అంటే వేద మంత్రాలను పట్టి ఉంచే కొలతల నడకలు — గాయత్రి, త్రిష్టుప్ వంటివి. వేద పౌరోహిత్యం నిరాకరించబడిన వ్యక్తిని, వేదపు సంగీతానికే దేవతగా చేశారు. ఇతిహాసం ఈ విచిత్రాన్ని వివరించదు; మనమే గమనించేందుకు వదిలేస్తుంది."]
  ],
  [
   ["h", "What Bhīṣma meant", "భీష్ముడు చెప్పదలచినది"],
   ["p", "Bhīṣma told this story to make one point: in the world of the epic, to become a brāhmaṇa by birth-change is so hard that even two hundred years of tapas did not win it. That is the rule of its age, and the Mahābhārata states it plainly. We should hear it as it is, without pretending the book says something else.", "భీష్ముడు ఈ కథ ఒక విషయం చెప్పడానికే చెప్పాడు: ఇతిహాస లోకంలో పుట్టుక మార్చుకుని బ్రాహ్మణుడు కావడం ఎంత కష్టమంటే, రెండు వందల సంవత్సరాల తపస్సు కూడా దాన్ని సాధించలేదు. అది ఆ యుగపు నియమం; మహాభారతం దాన్ని సూటిగా చెబుతుంది. ఆ గ్రంథం వేరేది చెబుతున్నట్టు నటించకుండా, అది ఉన్నదున్నట్టే వినాలి."],
   ["p", "But the same Bhīṣma, in the same book, had just spoken about {vishvamitra|Viśvāmitra}, a kṣatriya king who did become a brahmarṣi by tapas. Yudhiṣṭhira's question in fact began from him. So the Mahābhārata holds both: a rule that birth decides, and a famous case where tapas broke the rule.", "కానీ అదే భీష్ముడు, అదే గ్రంథంలో, అంతకు ముందే {vishvamitra|విశ్వామిత్రుని} గురించి చెప్పాడు — తపస్సుతో బ్రహ్మర్షి అయిన క్షత్రియ రాజు ఆయన. నిజానికి ధర్మరాజు ప్రశ్న ఆయన దగ్గర నుండే మొదలైంది. అంటే మహాభారతం రెండింటినీ పట్టుకుంటుంది: పుట్టుకే నిర్ణయిస్తుందనే నియమం, తపస్సు ఆ నియమాన్ని దాటిన ప్రసిద్ధ ఉదాహరణ."],
   ["sglink", "How Viśvāmitra became a Brahmarṣi", "విశ్వామిత్రుడు బ్రహ్మర్షి అయిన కథ", "vm-7"]
  ],
  [
   ["h", "Other voices in the same tradition", "అదే సంప్రదాయంలో ఇతర స్వరాలు"],
   ["p", "Earlier in the Mahābhārata, in the Vana Parva, {yudhishthira|Yudhiṣṭhira} himself answers a great serpent — King Nahuṣa under a curse — who asks him who a brāhmaṇa is. Yudhiṣṭhira says: one in whom truth, generosity, forgiveness, good conduct, kindness, austerity and compassion are seen. If these are found in a śūdra, he says, that man is not a śūdra; and if they are missing in a brāhmaṇa, he is no brāhmaṇa.", "మహాభారతంలోనే ముందు, అరణ్య పర్వంలో, శాపం వల్ల పెద్ద సర్పమైన నహుషుడు “బ్రాహ్మణుడు ఎవరు?” అని అడిగితే {yudhishthira|ధర్మరాజే} ఇలా జవాబిస్తాడు: సత్యం, దానం, క్షమ, సత్ప్రవర్తన, క్రూరత్వం లేకపోవడం, తపస్సు, దయ — ఇవి ఎవరిలో కనిపిస్తాయో అతనే బ్రాహ్మణుడు. ఇవి శూద్రునిలో కనిపిస్తే అతను శూద్రుడు కాడు; బ్రాహ్మణునిలో లేకపోతే అతను బ్రాహ్మణుడు కాడు — అంటాడు."],
   ["p", "And the Chāndogya Upaniṣad tells of {satyakama|Satyakāma}, a boy who did not know his father's name. His teacher accepted him because he told the plain truth about it: “Only a brāhmaṇa would speak so honestly.” Our tradition is not one voice. Mataṅga's story is one of its hardest voices, and it is worth hearing beside these others.", "ఛాందోగ్య ఉపనిషత్తు {satyakama|సత్యకాముని} కథ చెబుతుంది — తన తండ్రి పేరు తెలియని బాలుడు. ఆ విషయం గురించి సూటిగా నిజం చెప్పినందుకే గురువు అతణ్ణి స్వీకరించాడు: “ఇంత నిజాయితీగా బ్రాహ్మణుడే మాట్లాడగలడు.” మన సంప్రదాయం ఒకే స్వరం కాదు. మతంగుని కథ అందులోని అత్యంత కఠినమైన స్వరాల్లో ఒకటి; దాన్ని ఈ ఇతర స్వరాల పక్కన పెట్టి వినడం మంచిది."],
   ["sglink", "Satyakāma — the boy who told the truth", "సత్యకాముడు — నిజం చెప్పిన బాలుడు", "gt-10"],
   ["src", "Mahābhārata, Anuśāsana Parva (Indra's last boon — Mataṅga as Chandodeva; Yudhiṣṭhira's question arising from Viśvāmitra's story). Mahābhārata, Vana Parva (Yudhiṣṭhira's answers to the serpent Nahuṣa on who is a brāhmaṇa). Chāndogya Upaniṣad, Book 4 (Satyakāma Jābāla).", "మహాభారతం, అనుశాసనిక పర్వం (ఇంద్రుని చివరి వరం — ఛందోదేవుడుగా మతంగుడు; విశ్వామిత్రుని కథ నుండి పుట్టిన ధర్మరాజు ప్రశ్న). మహాభారతం, అరణ్య పర్వం (బ్రాహ్మణుడు ఎవరనే విషయంపై సర్పరూప నహుషునికి ధర్మరాజు జవాబులు). ఛాందోగ్య ఉపనిషత్తు, నాలుగవ అధ్యాయం (సత్యకామ జాబాలి)."]
  ]
 ],
 remember: [
  ["{indra|Indra} made {matanga|Mataṅga} Chandodeva, a god of the Vedic metres, honoured by women.", "{indra|ఇంద్రుడు} {matanga|మతంగుణ్ణి} స్త్రీలు పూజించే వేద ఛందస్సుల దేవత — ఛందోదేవుడుగా చేశాడు."],
  ["{bhishma|Bhīṣma} used the story to show how hard it was to change one's birth — yet {vishvamitra|Viśvāmitra} did.", "పుట్టుక మార్చుకోవడం ఎంత కష్టమో చూపించడానికి {bhishma|భీష్ముడు} ఈ కథ చెప్పాడు — అయినా {vishvamitra|విశ్వామిత్రుడు} సాధించాడు."],
  ["{yudhishthira|Yudhiṣṭhira} told Nahuṣa that a brāhmaṇa is known by truth, forgiveness and compassion.", "సత్యం, క్షమ, దయ వల్లే బ్రాహ్మణుడు తెలుస్తాడని {yudhishthira|ధర్మరాజు} నహుషునికి చెప్పాడు."]
 ],
 think: ["Mataṅga did not get what he asked for, but he was given lasting honour. Do you think his tapas failed or succeeded?", "మతంగుడు అడిగినది దొరకలేదు, కానీ శాశ్వత గౌరవం దక్కింది. అతని తపస్సు విఫలమైందా, ఫలించిందా — మీరేమనుకుంటున్నారు?"]
},
{
 id: "mt-4", sage: "matanga", n: 4, order: 5204, date: "2026-11-25",
 title: "The Forest Where Sweat Became Flowers", titleTe: "చెమట పువ్వులైన వనం",
 src: "Vālmīki Rāmāyaṇa, Araṇya Kāṇḍa",
 who: ["matanga", "kabandha", "rama", "lakshmana", "shabari"],
 pages: [
  [
   ["p", "Now we turn to the Rāmāyaṇa. Here Mataṅga is not a young man struggling with his birth, but an old and honoured guru, the head of a forest āśrama on the western shore of Lake Pampā, in the land where the vānaras lived. Vālmīki never tells us how he came there. He shows us the place, and the place tells us who the man was.", "ఇప్పుడు రామాయణానికి వద్దాం. ఇక్కడ మతంగుడు తన పుట్టుకతో పోరాడే యువకుడు కాడు — వానరులు నివసించే ప్రాంతంలో, పంపా సరస్సు పడమటి ఒడ్డున ఉన్న ఒక వనాశ్రమానికి అధిపతి, గౌరవనీయుడైన వృద్ధ గురువు. ఆయన అక్కడికి ఎలా వచ్చాడో వాల్మీకి చెప్పడు. ఆ ప్రదేశాన్ని చూపిస్తాడు; ఆ ప్రదేశమే ఆ మనిషి ఎవరో చెబుతుంది."],
   ["p", "The first description comes from a strange teller. After Sītā was carried off, Rāma and Lakṣmaṇa freed the cursed being {kabandha|Kabandha} from his headless, monstrous body. Before rising to heaven, Kabandha told them where to go: to Lake Pampā, to the mountain Ṛṣyamūka, to Sugrīva. And on the way, he said, they would find the forest of Mataṅga.", "మొదటి వర్ణన ఒక విచిత్రమైన వ్యక్తి నోటి నుండి వస్తుంది. సీతాపహరణం తర్వాత రామలక్ష్మణులు శాపగ్రస్తుడైన {kabandha|కబంధుణ్ణి} తల లేని భయంకర శరీరం నుండి విడిపించారు. స్వర్గానికి వెళ్ళే ముందు కబంధుడు వారికి దారి చెప్పాడు: పంపా సరస్సుకు, ఋష్యమూక పర్వతానికి, సుగ్రీవుని దగ్గరకు. దారిలో మతంగ వనం కనిపిస్తుందని చెప్పాడు."],
   ["link", "Kabandha", "కబంధుడు", "aranya-17"]
  ],
  [
   ["h", "Flowers that never fade", "ఎప్పటికీ వాడని పువ్వులు"],
   ["p", "Kabandha described Mataṅga's pupils. They served their guru with their whole bodies, carrying heavy loads of fruit, roots and firewood from the forest for his rites. As they walked under those loads, drops of sweat fell from them onto the ground. And wherever a drop fell, Kabandha said, a flower sprang up — flowers that never wither, because they were born of the labour of devoted pupils.", "కబంధుడు మతంగుని శిష్యులను వర్ణించాడు. వారు గురువును శరీరమంతటితో సేవించారు — ఆయన యజ్ఞాలకోసం అడవి నుండి పండ్లు, దుంపలు, కట్టెల బరువైన మోపులు మోసుకొచ్చేవారు. ఆ బరువు మోస్తూ నడుస్తుంటే వారి ఒంటి నుండి చెమట చుక్కలు నేలపై పడేవి. ఎక్కడ చుక్క పడితే అక్కడ ఒక పువ్వు పుట్టిందని కబంధుడు చెప్పాడు — భక్తితో పనిచేసిన శిష్యుల శ్రమ నుండి పుట్టినవి కాబట్టి అవి ఎప్పటికీ వాడవు."],
   ["p", "Then Kabandha added: “Those sages have now gone from this world. But one of them still lives there — a woman ascetic named {shabari|Śabarī}, who served them all. She has lived a very long life. She is waiting for you, Rāma. When you see her, you will understand.”", "తర్వాత కబంధుడు ఇలా అన్నాడు: “ఆ మునులు ఇప్పుడు ఈ లోకం విడిచి వెళ్ళిపోయారు. కానీ వారిలో ఒకరు ఇంకా అక్కడే ఉన్నారు — వారందరికీ సేవ చేసిన {shabari|శబరి} అనే తపస్విని. ఆమె చాలా దీర్ఘకాలం జీవించింది. రామా, ఆమె నీ కోసం ఎదురుచూస్తోంది. ఆమెను చూస్తే నీకు అర్థమవుతుంది.”"],
   ["dyk", "🌸", "Think about what this picture honours. Not the guru's own tapas, but the sweat of the pupils who fetched and carried. In Mataṅga's forest, humble service itself became something holy and lasting.", "ఈ చిత్రం దేన్ని గౌరవిస్తుందో ఆలోచించండి. గురువు సొంత తపస్సును కాదు — మోసుకొచ్చిన శిష్యుల చెమటను. మతంగ వనంలో వినయంతో చేసిన సేవే పవిత్రమైనదిగా, శాశ్వతమైనదిగా మారింది."]
  ],
  [
   ["h", "The shape of the land", "ఆ ప్రాంతపు రూపురేఖలు"],
   ["p", "From the Rāmāyaṇa we can draw a rough map. Lake Pampā, full of lotuses and birds; on its western side, Mataṅga's forest and āśrama; near it, the mountain Ṛṣyamūka, where Sugrīva was hiding; and not far off, the vānara city of Kiṣkindhā, where his brother Vālin ruled. Later the hill near the āśrama was called Mataṅga's hill.", "రామాయణం ఆధారంగా ఒక చిన్న పటం గీయవచ్చు. తామరలతో, పక్షులతో నిండిన పంపా సరస్సు; దాని పడమటి వైపు మతంగ వనం, ఆశ్రమం; దానికి దగ్గరగా సుగ్రీవుడు దాక్కున్న ఋష్యమూక పర్వతం; మరీ దూరం కాకుండా, అతని అన్న వాలి పాలించే వానర నగరం కిష్కింధ. తర్వాతి కాలంలో ఆశ్రమం దగ్గరి కొండకు ‘మతంగ పర్వతం’ అనే పేరు వచ్చింది."],
   ["p", "Why does this map matter? Because Mataṅga's forest sat between two brothers who hated each other. And as we shall see, one old curse of Mataṅga's decided which brother could go where — and so decided where Rāma would find his friends.", "ఈ పటం ఎందుకు ముఖ్యం? ఎందుకంటే మతంగ వనం ఒకరినొకరు ద్వేషించుకునే ఇద్దరు అన్నదమ్ముల మధ్య ఉంది. ముందు చూడబోతున్నట్టు, మతంగుడు పెట్టిన ఒక పాత శాపమే ఏ సోదరుడు ఎక్కడికి వెళ్ళగలడో నిర్ణయించింది — అందువల్లే రాముడు తన మిత్రులను ఎక్కడ కలుస్తాడో కూడా నిర్ణయించింది."],
   ["dyk", "🗺️", "Pilgrims have long believed this land lies around Hampi and Ānegondi on the Tuṅgabhadrā, in Karnataka, where a hill is still called Mataṅga parvata and a small lake is called Pampā sarovara. This is local tradition — Vālmīki does not name modern places, and scholars cannot prove it.", "కర్ణాటకలో తుంగభద్ర ఒడ్డున ఉన్న హంపి, ఆనెగొంది చుట్టూ ఉన్నదే ఈ ప్రాంతమని యాత్రికులు చాలా కాలంగా నమ్ముతున్నారు; అక్కడ ఒక కొండను ఇప్పటికీ ‘మతంగ పర్వతం’ అనీ, ఒక చిన్న సరస్సును ‘పంపా సరోవరం’ అనీ పిలుస్తారు. ఇది స్థానిక సంప్రదాయం — వాల్మీకి ఈనాటి ప్రదేశాల పేర్లు చెప్పడు; పండితులు దీన్ని నిరూపించలేరు."],
   ["src", "Vālmīki Rāmāyaṇa, Araṇya Kāṇḍa, the closing sargas — Kabandha's directions to Pampā, Mataṅga's forest, the flowers born of the pupils' sweat, and the ascetic Śabarī. Hampi identification: local and pilgrim tradition.", "వాల్మీకి రామాయణం, అరణ్య కాండ, చివరి సర్గలు — పంపకు కబంధుడు చెప్పిన దారి, మతంగ వనం, శిష్యుల చెమట నుండి పుట్టిన పువ్వులు, తపస్విని శబరి. హంపి గుర్తింపు: స్థానిక, యాత్రికుల సంప్రదాయం."]
  ]
 ],
 remember: [
  ["In the Rāmāyaṇa, {matanga|Mataṅga}'s āśrama stood on the western shore of Lake Pampā.", "రామాయణంలో {matanga|మతంగుని} ఆశ్రమం పంపా సరస్సు పడమటి ఒడ్డున ఉంది."],
  ["{kabandha|Kabandha} told Rāma that the sweat of Mataṅga's pupils had become unfading flowers.", "మతంగుని శిష్యుల చెమట వాడని పువ్వులుగా మారిందని {kabandha|కబంధుడు} రాముడికి చెప్పాడు."],
  ["Only {shabari|Śabarī} still lived in the forest after the sages had gone.", "మునులు వెళ్ళిపోయాక ఆ వనంలో {shabari|శబరి} ఒక్కతే మిగిలింది."]
 ],
 think: ["In Mataṅga's forest, the pupils' sweat became flowers. What small, tiring work that people do for others deserves to be honoured like that today?", "మతంగ వనంలో శిష్యుల చెమట పువ్వులైంది. ఈరోజు ఇతరుల కోసం ప్రజలు చేసే ఏ చిన్న, అలసట కలిగించే పనులు అలాంటి గౌరవానికి అర్హమైనవి?"]
},
{
 id: "mt-5", sage: "matanga", n: 5, order: 5205, date: "2026-11-25",
 title: "Dundubhi's Blood", titleTe: "దుందుభి రక్తం",
 src: "Vālmīki Rāmāyaṇa, Kiṣkindhā Kāṇḍa",
 who: ["matanga", "dundubhi", "samudra", "himavan", "vali", "sugriva"],
 pages: [
  [
   ["p", "This story is told in the Kiṣkindhā Kāṇḍa by {sugriva|Sugrīva}, sitting with Rāma on Ṛṣyamūka. It happened long before, when {vali|Vālin} was at the height of his strength. There was an asura named {dundubhi|Dundubhi}, who had the shape of a huge buffalo and the strength, it was said, of a thousand elephants. He was proud of that strength and went about looking for someone to fight.", "ఈ కథను కిష్కింధ కాండలో ఋష్యమూకం మీద రాముడితో కూర్చుని {sugriva|సుగ్రీవుడు} చెబుతాడు. ఇది చాలా కాలం క్రితం, {vali|వాలి} బలం పరాకాష్ఠలో ఉన్నప్పుడు జరిగింది. {dundubhi|దుందుభి} అనే ఒక అసురుడు ఉండేవాడు — భారీ దున్నపోతు రూపం, వెయ్యి ఏనుగుల బలం అని చెప్పేవారు. ఆ బలానికి గర్వపడి, ఎవరితోనైనా యుద్ధం చేయాలని తిరుగుతుండేవాడు."],
   ["p", "First he went to the {samudra|Ocean} and roared a challenge. The Ocean answered calmly: “I am not your match. Go to Himavān, the king of mountains — he is the one to fight you.” Dundubhi went to {himavan|Himavān} and began smashing his peaks with his horns. The mountain appeared and said, “I am a home for sages and ascetics, not a fighter. If you want a real fight, go to Vālin, the vānara king of Kiṣkindhā.”", "ముందు అతను {samudra|సముద్రుని} దగ్గరకు వెళ్ళి గర్జించి యుద్ధానికి పిలిచాడు. సముద్రుడు శాంతంగా జవాబిచ్చాడు: “నేను నీకు సరిజోడు కాను. పర్వతరాజు హిమవంతుని దగ్గరకు వెళ్ళు — నీతో పోరాడేది ఆయనే.” దుందుభి {himavan|హిమవంతుని} దగ్గరకు వెళ్ళి కొమ్ములతో ఆయన శిఖరాలను బద్దలు కొట్టసాగాడు. పర్వతుడు ప్రత్యక్షమై, “నేను మునులకూ తపస్వులకూ నివాసం; యోధుణ్ణి కాను. నిజమైన యుద్ధం కావాలంటే కిష్కింధ వానర రాజు వాలి దగ్గరకు వెళ్ళు” అన్నాడు."]
  ],
  [
   ["h", "The fight at the gate", "నగర ద్వారం దగ్గర యుద్ధం"],
   ["p", "So Dundubhi came to the gate of Kiṣkindhā, bellowing and tearing up the earth. Vālin came out, and the two fought a terrible fight. In the end Vālin seized the buffalo-demon by the horns, whirled him round and dashed him to the ground, and Dundubhi died.", "అలా దుందుభి కిష్కింధ ద్వారం దగ్గరకు వచ్చి, అరుస్తూ నేలను చీల్చసాగాడు. వాలి బయటికి వచ్చాడు; ఇద్దరి మధ్య భయంకరమైన యుద్ధం జరిగింది. చివరకు వాలి ఆ దున్నపోతు రాక్షసుని కొమ్ములు పట్టి, గిరగిరా తిప్పి నేలకేసి కొట్టాడు; దుందుభి చనిపోయాడు."],
   ["p", "Then, in the pride of victory, Vālin picked up the enormous dead body and hurled it far away — so far that it flew about a yojana through the air. As it flew, drops of blood fell from its mouth. And they fell on the āśrama of the sage Mataṅga.", "అప్పుడు విజయ గర్వంతో వాలి ఆ భారీ శవాన్ని ఎత్తి దూరంగా విసిరేశాడు — ఒక యోజనం దూరం గాలిలో ఎగిరిపోయింది. ఎగురుతుంటే దాని నోటి నుండి రక్తపు చుక్కలు కారాయి. అవి మతంగ మహర్షి ఆశ్రమం మీద పడ్డాయి."]
  ],
  [
   ["h", "The curse", "శాపం"],
   ["p", "Mataṅga saw the blood scattered over his sacred ground — the place of his fire-offerings and his pupils' study. He was furious. “Who has done this?” By the power of his tapas he looked and saw that it was Vālin who had flung the carcass. Then he spoke a curse: “If the one who threw this body ever sets foot in this forest, he will die.”", "తన పవిత్రమైన నేల మీద — తన అగ్నిహోత్రాలూ, శిష్యుల అధ్యయనమూ జరిగే చోట — రక్తం చిందిఉండటం మతంగుడు చూశాడు. ఆయనకు తీవ్రమైన కోపం వచ్చింది. “ఎవరు చేశారు ఈ పని?” తపశ్శక్తితో చూడగా, ఆ శవాన్ని విసిరింది వాలి అని తెలిసింది. అప్పుడు శపించాడు: “ఈ శరీరాన్ని విసిరినవాడు ఎప్పుడైనా ఈ వనంలో అడుగుపెడితే చనిపోతాడు.”"],
   ["p", "The curse reached Vālin's followers too. Sugrīva says the sage ordered all the vānaras of Vālin's side who lived in that forest to leave it, warning them of a curse if they stayed. They left at once. And from that day Vālin, terrible as he was, never dared to enter Mataṅga's forest or climb Ṛṣyamūka. He would not even go near it.", "ఆ శాపం వాలి అనుచరులకూ తగిలింది. ఆ వనంలో ఉన్న వాలి పక్షపు వానరులందరినీ అక్కడి నుండి వెళ్ళిపొమ్మని, ఉంటే శాపం తగులుతుందని ముని హెచ్చరించాడని సుగ్రీవుడు చెబుతాడు. వారు వెంటనే వెళ్ళిపోయారు. ఆ రోజు నుండి అంత భయంకరుడైన వాలి కూడా మతంగ వనంలో అడుగుపెట్టడానికి గానీ, ఋష్యమూకం ఎక్కడానికి గానీ సాహసించలేదు. దాని దగ్గరకు కూడా వెళ్ళలేదు."],
   ["dyk", "🩸", "Was the curse too harsh? Vālin had not meant to harm the sage. But he had killed in a show of pride and flung the body carelessly, without a thought for where it would land. In the Rāmāyaṇa, careless violence near a holy place is not small, and the sage's anger follows Vālin to the end.", "ఈ శాపం మరీ కఠినమా? మునికి హాని చేయాలని వాలి అనుకోలేదు. కానీ గర్వ ప్రదర్శనలో చంపి, ఆ శవం ఎక్కడ పడుతుందో ఆలోచించకుండా అజాగ్రత్తగా విసిరేశాడు. రామాయణంలో పవిత్ర స్థలం దగ్గర అజాగ్రత్తగా చేసిన హింస చిన్న విషయం కాదు; ముని కోపం వాలిని చివరి వరకూ వెంటాడుతుంది."]
  ],
  [
   ["p", "The great body of Dundubhi did not vanish. It lay where it fell and dried in the sun until only a huge pile of bones was left — a hill of bones at the foot of the mountain. Years later, Sugrīva would show that skeleton to Rāma.", "దుందుభి భారీ శరీరం మాయం కాలేదు. పడిన చోటనే పడి ఉండి, ఎండకు ఎండి, చివరకు ఒక పెద్ద ఎముకల గుట్ట మాత్రమే మిగిలింది — పర్వతం పాదాల దగ్గర ఎముకల కొండ. ఎన్నో సంవత్సరాల తర్వాత సుగ్రీవుడు ఆ అస్థిపంజరాన్ని రాముడికి చూపించాడు."],
   ["link", "Dundubhi and the Seven Sāla Trees", "దుందుభి, ఏడు సాల వృక్షాలు", "kishkindha-6"],
   ["src", "Vālmīki Rāmāyaṇa, Kiṣkindhā Kāṇḍa — Sugrīva tells Rāma of Dundubhi, the Ocean and Himavān, Vālin's victory, the blood on Mataṅga's āśrama and the sage's curse on Vālin and his followers.", "వాల్మీకి రామాయణం, కిష్కింధ కాండ — దుందుభి, సముద్రుడు, హిమవంతుడు, వాలి విజయం, మతంగాశ్రమం మీద పడిన రక్తం, వాలికీ అతని అనుచరులకూ ముని ఇచ్చిన శాపం గురించి సుగ్రీవుడు రాముడికి చెబుతాడు."]
  ]
 ],
 remember: [
  ["{vali|Vālin} killed the buffalo-demon {dundubhi|Dundubhi} and flung his body far away.", "{vali|వాలి} దున్నపోతు రాక్షసుడు {dundubhi|దుందుభిని} చంపి, శవాన్ని దూరంగా విసిరేశాడు."],
  ["Drops of its blood fell on {matanga|Mataṅga}'s āśrama.", "దాని రక్తపు చుక్కలు {matanga|మతంగుని} ఆశ్రమం మీద పడ్డాయి."],
  ["The sage cursed Vālin to die if he ever entered that forest.", "ఆ వనంలో అడుగుపెడితే వాలి చనిపోతాడని ముని శపించాడు."]
 ],
 think: ["Vālin did not mean to harm the sage, yet he was cursed. Should we be judged for harm we cause carelessly, even if we did not intend it?", "మునికి హాని చేయాలని వాలి అనుకోలేదు; అయినా శాపం పొందాడు. మనం ఉద్దేశించకపోయినా, అజాగ్రత్తగా కలిగించిన హానికి మనల్ని తప్పుపట్టవచ్చా?"]
},
{
 id: "mt-6", sage: "matanga", n: 6, order: 5206, date: "2026-11-25",
 title: "The Mountain Vālin Could Not Climb", titleTe: "వాలి ఎక్కలేని పర్వతం",
 src: "Vālmīki Rāmāyaṇa, Kiṣkindhā Kāṇḍa",
 who: ["matanga", "sugriva", "vali", "mayavi", "ruma", "hanuman", "rama", "lakshmana", "tara"],
 pages: [
  [
   ["p", "Years after Dundubhi, the two vānara brothers fell out. Vālin went into a cave to fight the demon {mayavi|Māyāvī}, and Sugrīva, waiting outside, saw blood flow out and heard no sound of his brother. Thinking Vālin was dead, he blocked the cave with a rock and went home, where the vānaras made him king. But Vālin came back alive, believed Sugrīva had tried to trap him, and drove him out — taking even Sugrīva's wife {ruma|Rumā}.", "దుందుభి సంఘటన జరిగిన ఎన్నో ఏళ్ళ తర్వాత ఇద్దరు వానర సోదరుల మధ్య విరోధం వచ్చింది. {mayavi|మాయావి} అనే రాక్షసునితో పోరాడటానికి వాలి ఒక గుహలోకి వెళ్ళాడు. బయట ఎదురుచూస్తున్న సుగ్రీవుడికి గుహ నుండి రక్తం ప్రవహించడం కనిపించింది, అన్న గొంతు వినిపించలేదు. వాలి చనిపోయాడనుకుని గుహను బండతో మూసి ఇంటికి వచ్చాడు; వానరులు అతణ్ణి రాజుగా చేశారు. కానీ వాలి బతికి తిరిగి వచ్చాడు; సుగ్రీవుడు తనను బంధించాలని చూశాడని నమ్మి అతణ్ణి తరిమేశాడు — సుగ్రీవుని భార్య {ruma|రుమను} కూడా తనదగ్గరే ఉంచుకున్నాడు."],
   ["link", "Vāli and the Cave", "వాలి, గుహ", "kishkindha-5"]
  ],
  [
   ["h", "Running across the world", "లోకమంతా పరుగు"],
   ["p", "Later in the Kiṣkindhā Kāṇḍa, Sugrīva tells Rāma how it felt to be hunted. Vālin chased him from place to place. He fled east, south, west and north, across the whole earth, and wherever he went, Vālin followed. There seemed to be nowhere in the world his brother could not reach.", "కిష్కింధ కాండలో తర్వాత, వేటాడబడటం ఎలా ఉంటుందో సుగ్రీవుడు రాముడికి చెబుతాడు. వాలి అతణ్ణి చోటు నుండి చోటుకు తరిమాడు. తూర్పు, దక్షిణం, పడమర, ఉత్తరం — భూమి అంతా పరుగెత్తాడు; ఎక్కడికి వెళ్ళినా వాలి వెంటాడాడు. అన్న చేరలేని చోటు లోకంలో ఎక్కడా లేదనిపించింది."],
   ["p", "Then {hanuman|Hanumān}, his minister, remembered. “Your Majesty, now I recall — the sage Mataṅga cursed Vālin. If Vālin enters Mataṅga's forest, his head will burst into a hundred pieces. Ṛṣyamūka is the one place on earth where you are safe.” So Sugrīva went to Ṛṣyamūka with Hanumān and three other ministers, and lived there without fear of his brother.", "అప్పుడు అతని మంత్రి {hanuman|హనుమంతునికి} గుర్తొచ్చింది. “మహారాజా, ఇప్పుడు జ్ఞాపకం వస్తోంది — మతంగ మహర్షి వాలిని శపించాడు. వాలి మతంగ వనంలో అడుగుపెడితే అతని తల వంద ముక్కలవుతుంది. భూమి మీద మీరు సురక్షితంగా ఉండగలిగే ఒకే ఒక చోటు ఋష్యమూకం.” అలా సుగ్రీవుడు హనుమంతుడూ మరో ముగ్గురు మంత్రులతో ఋష్యమూకానికి వెళ్ళి, అన్నకు భయపడకుండా అక్కడ నివసించాడు."],
   ["dyk", "🛡️", "A curse spoken in anger years before had become the safest shelter in the world for a frightened, wronged younger brother. In the Rāmāyaṇa, even a sage's anger ends up serving dharma.", "ఎన్నో ఏళ్ళ క్రితం కోపంలో పలికిన శాపం, భయపడిన, అన్యాయానికి గురైన ఒక తమ్ముడికి లోకంలోనే అత్యంత సురక్షితమైన ఆశ్రయమైంది. రామాయణంలో ఒక ముని కోపం కూడా చివరకు ధర్మానికే ఉపయోగపడుతుంది."]
  ],
  [
   ["h", "Two strangers at the foot of the hill", "కొండ కింద ఇద్దరు అపరిచితులు"],
   ["p", "One day Sugrīva, from his mountain, saw two tall men with bows walking beside Lake Pampā. He was terrified — had Vālin sent them? Only Vālin's warriors would dare to come so near. He sent Hanumān down to find out, disguised as a wandering mendicant. That meeting gave the Rāmāyaṇa one of its greatest friendships.", "ఒక రోజు సుగ్రీవుడు తన పర్వతం మీద నుండి, పంపా సరస్సు పక్కన ధనుస్సులు పట్టి నడుస్తున్న ఇద్దరు పొడవైన పురుషులను చూశాడు. భయంతో వణికిపోయాడు — వాలి పంపాడా? ఇంత దగ్గరకు రావడానికి వాలి యోధులే సాహసిస్తారు. విషయం తెలుసుకోమని హనుమంతుణ్ణి భిక్షువు వేషంలో కిందికి పంపాడు. ఆ కలయిక రామాయణానికి దానిలోని గొప్ప స్నేహాల్లో ఒకదాన్ని ఇచ్చింది."],
   ["link", "Hanumān Meets Rāma", "హనుమంతుడు రాముణ్ణి కలిశాడు", "kishkindha-2"],
   ["p", "When Sugrīva told Rāma about Vālin's strength, he took him to Dundubhi's dry bones. Rāma flicked that hill of bones far away with his big toe, and with one arrow pierced seven great sāla trees in a row. Then Sugrīva believed that this man could face his brother.", "వాలి బలం గురించి రాముడికి చెప్పినప్పుడు, సుగ్రీవుడు ఆయనను దుందుభి ఎండిన ఎముకల దగ్గరకు తీసుకువెళ్ళాడు. రాముడు ఆ ఎముకల గుట్టను కాలి బొటనవేలితో దూరంగా విసిరేశాడు; ఒకే బాణంతో వరుసగా ఉన్న ఏడు పెద్ద సాల వృక్షాలను చీల్చాడు. అప్పుడే ఈ మనిషి తన అన్నను ఎదుర్కోగలడని సుగ్రీవుడు నమ్మాడు."]
  ],
  [
   ["h", "How one curse shaped a war", "ఒక శాపం ఒక యుద్ధాన్ని ఎలా తీర్చిదిద్దింది"],
   ["p", "Follow the thread. Because of Mataṅga's curse, Sugrīva was hiding on Ṛṣyamūka. Because he was there, Rāma found him, and Hanumān. Because of that friendship, Vālin fell in his duel with Sugrīva, and {tara|Tārā} mourned him; Sugrīva became king, and the vānara armies went out to search for Sītā. A few drops of a demon's blood on a sage's doorstep led, step by step, to the bridge to Laṅkā.", "దారాన్ని పట్టుకుని అనుసరించండి. మతంగ శాపం వల్లే సుగ్రీవుడు ఋష్యమూకంలో దాక్కున్నాడు. అతను అక్కడ ఉన్నందుకే రాముడు అతణ్ణీ, హనుమంతుణ్ణీ కలిశాడు. ఆ స్నేహం వల్లే సుగ్రీవునితో ద్వంద్వ యుద్ధంలో వాలి పడిపోయాడు; {tara|తార} అతని కోసం విలపించింది; సుగ్రీవుడు రాజయ్యాడు; వానర సైన్యాలు సీత కోసం వెతకడానికి బయలుదేరాయి. ఒక ముని గుమ్మం మీద పడిన రాక్షసుని కొన్ని రక్తపు చుక్కలు, అడుగు అడుగునా, లంకకు వారధి వరకూ దారితీశాయి."],
   ["p", "Mataṅga himself was gone by the time Rāma came. He never met the prince whose path his curse had prepared. In the Rāmāyaṇa he is a sage who works even in his absence.", "రాముడు వచ్చేసరికి మతంగుడు ఈ లోకంలో లేడు. తన శాపం దారి సిద్ధం చేసిన ఆ రాకుమారుణ్ణి ఆయన ఎప్పుడూ కలవలేదు. రామాయణంలో ఆయన లేకపోయినా పని చేసే ముని."],
   ["src", "Vālmīki Rāmāyaṇa, Kiṣkindhā Kāṇḍa — Vālin, Māyāvī and the cave; Sugrīva on Ṛṣyamūka; Dundubhi's bones and the seven sāla trees; and, later in the Kāṇḍa, Sugrīva's account of his flight across the earth and Hanumān's memory of Mataṅga's curse.", "వాల్మీకి రామాయణం, కిష్కింధ కాండ — వాలి, మాయావి, గుహ; ఋష్యమూకంలో సుగ్రీవుడు; దుందుభి ఎముకలు, ఏడు సాల వృక్షాలు; కాండలో తర్వాత, భూమంతా పారిపోయిన సంగతీ, మతంగ శాపం హనుమంతునికి గుర్తొచ్చిన సంగతీ సుగ్రీవుడు చెప్పిన కథనం."]
  ]
 ],
 remember: [
  ["Because of {matanga|Mataṅga}'s curse, {vali|Vālin} could not enter Ṛṣyamūka.", "{matanga|మతంగుని} శాపం వల్ల {vali|వాలి} ఋష్యమూకానికి రాలేకపోయాడు."],
  ["{hanuman|Hanumān} remembered the curse and led {sugriva|Sugrīva} to safety there.", "{hanuman|హనుమంతునికి} ఆ శాపం గుర్తొచ్చి {sugriva|సుగ్రీవుణ్ణి} అక్కడ సురక్షితంగా ఉంచాడు."],
  ["That is why {rama|Rāma} found his vānara friends on that mountain.", "అందుకే {rama|రాముడికి} తన వానర మిత్రులు ఆ పర్వతం మీదే దొరికారు."]
 ],
 think: ["Mataṅga's curse, spoken in anger, later protected an innocent man and helped Rāma. Can something done for one reason end up serving a very different good?", "కోపంలో పలికిన మతంగ శాపం తర్వాత ఒక నిరపరాధిని కాపాడి రాముడికి సాయపడింది. ఒక కారణంతో చేసిన పని, చాలా భిన్నమైన మంచికి ఉపయోగపడగలదా?"]
},
{
 id: "mt-7", sage: "matanga", n: 7, order: 5207, date: "2026-11-25",
 title: "The Promise to Śabarī", titleTe: "శబరికి ఇచ్చిన మాట",
 src: "Vālmīki Rāmāyaṇa, Araṇya Kāṇḍa · Adhyātma Rāmāyaṇa · later tellings",
 who: ["matanga", "shabari", "rama"],
 pages: [
  [
   ["p", "Of everyone in Mataṅga's āśrama, the one we remember best is not a sage at all, but a woman who served the sages — {shabari|Śabarī}. Vālmīki calls her a śramaṇī, a woman ascetic, and speaks of her with great respect: she was perfected in her tapas, honoured by the sages, and had lived a very long life.", "మతంగాశ్రమంలోని అందరిలోకీ మనకు బాగా గుర్తుండేది ఒక ముని కాదు — మునులకు సేవ చేసిన ఒక స్త్రీ — {shabari|శబరి}. వాల్మీకి ఆమెను ‘శ్రమణి’ — తపస్విని — అని పిలుస్తాడు; ఎంతో గౌరవంగా మాట్లాడతాడు: ఆమె తపస్సులో సిద్ధి పొందింది, మునులు ఆమెను గౌరవించారు, ఆమె చాలా దీర్ఘకాలం జీవించింది."],
   ["p", "Her name points to the Śabaras, a forest people. Later tellings say plainly that she was born among hunters, left her home and came to the āśrama, and that Mataṅga accepted her and let her serve there. Vālmīki himself says little about her birth. What he shows is her place: inside the āśrama, among the sages, as one of them.", "ఆమె పేరు ‘శబరులు’ అనే అటవీ జాతిని సూచిస్తుంది. ఆమె వేటగాళ్ళ కుటుంబంలో పుట్టి, ఇల్లు విడిచి ఆశ్రమానికి వచ్చిందనీ, మతంగుడు ఆమెను స్వీకరించి అక్కడ సేవ చేయనిచ్చాడనీ తర్వాతి కథనాలు స్పష్టంగా చెబుతాయి. వాల్మీకి ఆమె పుట్టుక గురించి పెద్దగా చెప్పడు. ఆయన చూపించేది ఆమె స్థానాన్ని: ఆశ్రమం లోపల, మునుల మధ్య, వారిలో ఒకరిగా."],
   ["dyk", "🤝", "Put the two halves of Mataṅga's story side by side. The Mahābhārata's Mataṅga was told his birth shut him out. The Rāmāyaṇa's Mataṅga keeps in his own āśrama a woman of the forest people and makes her his pupil. Whether or not they are the same man, the tradition has loved telling them together.", "మతంగ కథలోని రెండు భాగాలనూ పక్కపక్కన పెట్టండి. మహాభారతపు మతంగుడికి — నీ పుట్టుక నిన్ను బయట నిలబెడుతుంది — అని చెప్పారు. రామాయణపు మతంగుడు తన ఆశ్రమంలోనే ఒక అటవీ జాతి స్త్రీని ఉంచుకుని శిష్యురాలిగా చేసుకుంటాడు. వారిద్దరూ ఒక్కరే అయినా కాకపోయినా, ఈ రెండు కథలనూ కలిపి చెప్పడం సంప్రదాయానికి ఎంతో ఇష్టం."]
  ],
  [
   ["h", "The sages go", "మునుల ప్రయాణం"],
   ["p", "In Vālmīki, Śabarī herself tells Rāma when the sages left. “When you came to Citrakūṭa, the teachers I served rose up to heaven in shining celestial chariots. Before they went, they told me: ‘Rāma will come to this holy āśrama. Receive him as your guest. When you have seen him, you will go to the undying worlds.’”", "వాల్మీకిలో మునులు ఎప్పుడు వెళ్ళిపోయారో శబరే రాముడికి చెబుతుంది. “మీరు చిత్రకూటానికి వచ్చినప్పుడు, నేను సేవించిన గురువులు ప్రకాశించే దివ్య విమానాల్లో స్వర్గానికి వెళ్ళిపోయారు. వెళ్ళే ముందు నాతో ఇలా అన్నారు: ‘రాముడు ఈ పుణ్యాశ్రమానికి వస్తాడు. ఆయనను అతిథిగా ఆదరించు. ఆయనను చూశాక నువ్వు శాశ్వత లోకాలకు చేరుకుంటావు.’”"],
   ["p", "So in Vālmīki the promise comes from the sages together. In the Adhyātma Rāmāyaṇa and in many later tellings it is Mataṅga himself, her guru, who, as he leaves this world, tells her: “Stay here. Rāma, who is Viṣṇu, will come. Serve him, and you will be free.” That is how most families tell it today.", "అంటే వాల్మీకిలో ఆ మాట మునులందరూ కలిసి ఇచ్చినది. అధ్యాత్మ రామాయణంలోనూ, తర్వాతి ఎన్నో కథనాల్లోనూ, ఆమె గురువైన మతంగుడే లోకం విడిచి వెళ్తూ ఇలా చెబుతాడు: “నువ్వు ఇక్కడే ఉండు. విష్ణువే అయిన రాముడు వస్తాడు. ఆయనకు సేవ చెయ్యి; నీకు ముక్తి కలుగుతుంది.” ఈరోజు చాలా కుటుంబాలు ఈ కథను ఇలాగే చెబుతాయి."]
  ],
  [
   ["h", "Waiting", "ఎదురుచూపు"],
   ["p", "So Śabarī stayed on alone in the forest of her teachers. She kept the āśrama as they had left it. Each day, the later tellings say, she swept the path Rāma might walk on and gathered fruits of the forest for the guest who might come that day. Days became years. Her hair turned white, her back bent, and still she kept the path clean.", "అలా శబరి తన గురువుల వనంలో ఒంటరిగా ఉండిపోయింది. వారు విడిచి వెళ్ళినట్టే ఆశ్రమాన్ని కాపాడింది. రాముడు నడిచే దారిని రోజూ ఊడ్చి, ఆ రోజే రాబోయే అతిథి కోసం అడవి పండ్లు సేకరించేదని తర్వాతి కథనాలు చెబుతాయి. రోజులు సంవత్సరాలయ్యాయి. జుట్టు తెల్లబడింది, నడుము వంగింది; అయినా ఆ దారిని శుభ్రంగానే ఉంచింది."],
   ["p", "Some folk tellings add that other sages living near Pampā looked down on her because of her birth, and that Mataṅga defended her. These details are not in Vālmīki, and we mark them as later. But they grew from something that is in Vālmīki: a woman of the forest people, honoured in a sage's āśrama, chosen to receive Rāma.", "పంపా దగ్గర నివసించే ఇతర మునులు ఆమె పుట్టుక వల్ల ఆమెను చిన్నచూపు చూశారనీ, మతంగుడు ఆమె పక్షాన నిలిచాడనీ కొన్ని జానపద కథనాలు చెబుతాయి. ఈ వివరాలు వాల్మీకిలో లేవు; తర్వాతి కథనాలుగా గుర్తిస్తున్నాం. కానీ అవి వాల్మీకిలో ఉన్నదాని నుండే పెరిగాయి: ఒక ముని ఆశ్రమంలో గౌరవం పొంది, రాముణ్ణి ఆదరించడానికి ఎంపికైన అటవీ జాతి స్త్రీ."],
   ["src", "Vālmīki Rāmāyaṇa, Araṇya Kāṇḍa, the closing sargas (Śabarī the śramaṇī; the sages' ascent at the time of Rāma's stay at Citrakūṭa and their words to her). Adhyātma Rāmāyaṇa, Araṇya Kāṇḍa (Mataṅga's own promise to Śabarī). Folk tellings of the other sages' scorn: later tradition.", "వాల్మీకి రామాయణం, అరణ్య కాండ, చివరి సర్గలు (తపస్విని శబరి; రాముడు చిత్రకూటంలో ఉన్నప్పుడు మునులు స్వర్గానికి వెళ్ళడం, ఆమెతో చెప్పిన మాటలు). అధ్యాత్మ రామాయణం, అరణ్య కాండ (మతంగుడే శబరికి ఇచ్చిన మాట). ఇతర మునుల చిన్నచూపు గురించిన జానపద కథనాలు: తర్వాతి సంప్రదాయం."]
  ]
 ],
 remember: [
  ["{shabari|Śabarī}, a woman of the forest people, served the sages of {matanga|Mataṅga}'s āśrama.", "అటవీ జాతి స్త్రీ అయిన {shabari|శబరి} {matanga|మతంగాశ్రమంలోని} మునులకు సేవ చేసింది."],
  ["In Vālmīki the sages, and in later tellings Mataṅga himself, told her that {rama|Rāma} would come.", "రాముడు వస్తాడని వాల్మీకిలో మునులూ, తర్వాతి కథనాల్లో మతంగుడే ఆమెకు చెప్పారు."],
  ["She waited for him for many years, keeping the āśrama ready.", "ఆశ్రమాన్ని సిద్ధంగా ఉంచుకుని ఎన్నో సంవత్సరాలు ఆయన కోసం ఎదురుచూసింది."]
 ],
 think: ["Śabarī waited many years for one guest, without knowing the day. What is the hardest part of waiting for something good — and what helps?", "రోజు తెలియకుండా ఒకే అతిథి కోసం శబరి ఎన్నో సంవత్సరాలు ఎదురుచూసింది. మంచి దాని కోసం ఎదురుచూడటంలో అన్నిటికంటే కష్టమైనది ఏమిటి — ఏది సహాయపడుతుంది?"]
},
{
 id: "mt-8", sage: "matanga", n: 8, order: 5208, date: "2026-11-25",
 title: "Rāma in the Guru's Forest", titleTe: "గురువు వనంలో రాముడు",
 src: "Vālmīki Rāmāyaṇa, Araṇya Kāṇḍa · later tellings",
 who: ["shabari", "rama", "lakshmana", "matanga", "tulasidas"],
 pages: [
  [
   ["p", "At last Rāma and Lakṣmaṇa came to the western shore of Pampā and entered the āśrama. Śabarī saw them, rose at once, and touched their feet with folded hands. She brought water to wash their feet and gave them all the honour due to guests. Rāma asked her kindly, “Have your tapas and your service gone well? Have you overcome anger? Is your mind at peace?”", "చివరకు రామలక్ష్మణులు పంపా పడమటి ఒడ్డుకు చేరి ఆశ్రమంలోకి ప్రవేశించారు. వారిని చూడగానే శబరి లేచి, చేతులు జోడించి వారి పాదాలకు నమస్కరించింది. కాళ్ళు కడుక్కోవడానికి నీళ్ళు తెచ్చి, అతిథులకు చేయవలసిన గౌరవమంతా చేసింది. రాముడు ఆప్యాయంగా అడిగాడు: “నీ తపస్సూ, సేవా సఫలమయ్యాయా? కోపాన్ని జయించావా? నీ మనసు శాంతంగా ఉందా?”"],
   ["p", "“Today my tapas has borne fruit,” she said. “Today my birth is fulfilled, and my service to my teachers is complete — because I have seen you.” Then she offered him the forest food she had gathered for him on the shore of Pampā.", "“ఈరోజు నా తపస్సు ఫలించింది,” అంది ఆమె. “ఈరోజు నా జన్మ ధన్యమైంది; నా గురువులకు చేసిన సేవ పూర్తయింది — ఎందుకంటే మిమ్మల్ని చూశాను.” తర్వాత పంపా ఒడ్డున ఆయన కోసం సేకరించిన అడవి ఆహారాన్ని సమర్పించింది."],
   ["link", "Śabarī", "శబరి", "aranya-18"]
  ],
  [
   ["h", "What the teachers left behind", "గురువులు వదిలి వెళ్ళినవి"],
   ["p", "Rāma asked to see the forest of her teachers, and Śabarī showed him round. “This is Mataṅga's forest,” she said. “Here my great-souled gurus made their offerings into the sacred fire with mantras.” She showed him the altar called Pratyaksthalī, where, she said, the old teachers had worshipped with hands trembling from age — and the altar still shone with the power of their tapas.", "తన గురువుల వనాన్ని చూపించమని రాముడు అడిగాడు; శబరి చుట్టూ తిప్పి చూపించింది. “ఇది మతంగ వనం,” అంది. “ఇక్కడే నా మహాత్ములైన గురువులు మంత్రాలతో అగ్నిలో ఆహుతులు ఇచ్చేవారు.” ‘ప్రత్యక్‌స్థలి’ అనే వేదికను చూపించింది — అక్కడ ముసలితనం వల్ల వణికే చేతులతో వృద్ధ గురువులు పూజ చేసేవారని, వారి తపశ్శక్తితో ఆ వేదిక ఇప్పటికీ వెలుగుతోందని చెప్పింది."],
   ["p", "“Look there,” she went on. “When they grew too weak from fasting to walk to the seven seas for their bath, they called the seven seas here by the power of their thought. And see — the bark garments they washed and hung on the trees are still not dry. The lotus garlands they offered to the gods have not withered.” Everything in the forest still kept the warmth of their tapas, as if they had left only that morning.", "“అటు చూడండి,” అని కొనసాగించింది. “ఉపవాసాల వల్ల బలహీనులై సప్త సముద్రాల దగ్గరకు స్నానానికి నడవలేనప్పుడు, వారు తమ సంకల్ప బలంతో ఏడు సముద్రాలనూ ఇక్కడికే రప్పించుకున్నారు. చూడండి — వారు ఉతికి చెట్లకు ఆరేసిన నారచీరలు ఇంకా ఆరలేదు. దేవతలకు సమర్పించిన తామర మాలలు వాడలేదు.” ఆ వనంలోని ప్రతిదీ వారి తపస్సు వెచ్చదనాన్ని ఇంకా నిలుపుకుంది — వారు ఈ ఉదయమే వెళ్ళినట్టు."],
   ["dyk", "👕", "Bark clothes that never dry and garlands that never fade — Vālmīki's way of saying that a true teacher's presence does not leave a place when his body does. Śabarī is showing Rāma her gurus, not just their things.", "ఎప్పటికీ ఆరని నారచీరలు, ఎప్పటికీ వాడని మాలలు — నిజమైన గురువు శరీరం వెళ్ళిపోయినా ఆయన సాన్నిధ్యం ఆ ప్రదేశాన్ని విడిచిపోదని వాల్మీకి చెప్పే పద్ధతి ఇది. శబరి రాముడికి చూపిస్తున్నది తన గురువుల వస్తువులను మాత్రమే కాదు — తన గురువులనే."]
  ],
  [
   ["h", "Going to her teachers", "గురువుల దగ్గరకు ప్రయాణం"],
   ["p", "Then Śabarī asked Rāma's leave. “I have seen you. Let me now go to the world of the great souls I served.” Rāma gave her leave. She offered herself into the sacred fire, and rose from it in a shining form, dressed in divine clothes and garlands, lighting up the forest like lightning. She went, Vālmīki says, to the holy place where her teachers dwelt.", "తర్వాత శబరి రాముని అనుమతి కోరింది. “మిమ్మల్ని చూశాను. ఇక నేను సేవించిన మహాత్ముల లోకానికి వెళ్ళనివ్వండి.” రాముడు అనుమతి ఇచ్చాడు. ఆమె పవిత్రాగ్నిలో ప్రవేశించి, దివ్య వస్త్రాలూ మాలలూ ధరించిన ప్రకాశవంతమైన రూపంతో పైకి లేచింది; మెరుపులా ఆ వనాన్ని వెలిగించింది. తన గురువులు ఉండే పుణ్యలోకానికే ఆమె వెళ్ళిందని వాల్మీకి చెబుతాడు."],
   ["p", "Later tellings add the scenes many of us know best. In the much-loved folk story, Śabarī tasted each berry before giving it to Rāma, to be sure it was sweet, and Rāma ate them happily — love counting for more than custom. This is not in Vālmīki. In the Adhyātma Rāmāyaṇa, and in {tulasidas|Tulasīdās}'s Rāmacaritamānasa, Rāma teaches Śabarī the nine kinds of devotion.", "మనలో చాలామందికి బాగా తెలిసిన దృశ్యాలు తర్వాతి కథనాల్లో వస్తాయి. ఎంతో ప్రేమించబడే జానపద కథలో, శబరి ప్రతి రేగుపండునూ తియ్యగా ఉందో లేదో రుచి చూసి రాముడికి ఇచ్చింది; రాముడు సంతోషంగా తిన్నాడు — ఆచారం కంటే ప్రేమే ఎక్కువ. ఇది వాల్మీకిలో లేదు. అధ్యాత్మ రామాయణంలోనూ, {tulasidas|తులసీదాసు} రామచరితమానస్‌లోనూ రాముడు శబరికి తొమ్మిది విధాల భక్తిని ఉపదేశిస్తాడు."],
   ["src", "Vālmīki Rāmāyaṇa, Araṇya Kāṇḍa, the closing sargas (Śabarī welcomes Rāma; Mataṅga's forest, the altar Pratyaksthalī, the seven seas, the unwithered garlands and undried garments; Śabarī enters the fire and goes to her teachers' world). Adhyātma Rāmāyaṇa, Araṇya Kāṇḍa, and Tulasīdās, Rāmacaritamānasa, Araṇya Kāṇḍa (the nine kinds of devotion). The tasted berries: later folk and devotional tradition.", "వాల్మీకి రామాయణం, అరణ్య కాండ, చివరి సర్గలు (శబరి రాముణ్ణి ఆదరించడం; మతంగ వనం, ప్రత్యక్‌స్థలి వేదిక, సప్త సముద్రాలు, వాడని మాలలు, ఆరని వస్త్రాలు; శబరి అగ్నిలో ప్రవేశించి గురువుల లోకానికి వెళ్ళడం). అధ్యాత్మ రామాయణం, అరణ్య కాండ; తులసీదాసు, రామచరితమానస్, అరణ్య కాండ (నవవిధ భక్తి). రుచి చూసిన రేగుపండ్లు: తర్వాతి జానపద, భక్తి సంప్రదాయం."]
  ]
 ],
 remember: [
  ["{shabari|Śabarī} welcomed {rama|Rāma} and showed him the forest of her teachers.", "{shabari|శబరి} {rama|రాముణ్ణి} ఆదరించి తన గురువుల వనాన్ని చూపించింది."],
  ["The sages' garlands had not withered and their bark clothes had not dried.", "మునుల మాలలు వాడలేదు, వారి నారచీరలు ఆరలేదు."],
  ["She entered the fire and went to the world where {matanga|Mataṅga}'s sages lived.", "ఆమె అగ్నిలో ప్రవేశించి {matanga|మతంగుని} మునులు ఉండే లోకానికి వెళ్ళింది."]
 ],
 think: ["Śabarī said her service was complete when she saw Rāma. Is there something you are working towards that would make you say, “Now it is complete”?", "రాముణ్ణి చూడగానే తన సేవ పూర్తయిందని శబరి చెప్పింది. “ఇప్పుడు పూర్తయింది” అని మీరు చెప్పుకునేలా చేసే ఏదైనా లక్ష్యం కోసం మీరు శ్రమిస్తున్నారా?"]
},
{
 id: "mt-9", sage: "matanga", n: 9, order: 5209, date: "2026-11-25",
 title: "The Name That Stayed", titleTe: "నిలిచిన మతంగుని పేరు",
 src: "Later tradition — Śyāmalā Daṇḍakam, Gayā Māhātmya, Hampi",
 who: ["matanga", "matangi", "kalidasa", "shabari", "indra"],
 pages: [
  [
   ["h", "Mātaṅgī, daughter of Mataṅga", "మతంగ కన్య మాతంగి"],
   ["p", "Indra had promised Mataṅga lasting fame, and in a way the tradition kept that promise through a goddess. In later Śākta tradition, the Goddess appears in a dark, gentle form holding a vīṇā, the mistress of speech and music, and is called {matangi|Mātaṅgī} or Śyāmalā. She is said to be the daughter of the sage Mataṅga — born, as some tellings say, in answer to his tapas.", "మతంగుడికి శాశ్వత కీర్తి ఇస్తానని ఇంద్రుడు మాట ఇచ్చాడు; ఒక విధంగా సంప్రదాయం ఆ మాటను ఒక దేవత ద్వారా నిలబెట్టింది. తర్వాతి శాక్త సంప్రదాయంలో, వీణ పట్టుకున్న శ్యామల వర్ణపు సౌమ్య రూపంలో, వాక్కుకూ సంగీతానికీ అధిదేవతగా దేవి కనిపిస్తుంది; ఆమెను {matangi|మాతంగి} అనీ, శ్యామల అనీ పిలుస్తారు. ఆమె మతంగ మహర్షి కుమార్తె అనీ — కొన్ని కథనాల ప్రకారం ఆయన తపస్సుకు ఫలంగా పుట్టిందనీ — చెబుతారు."],
   ["p", "The hymn Śyāmalā Daṇḍakam, which tradition ascribes to {kalidasa|Kālidāsa}, begins by remembering her as she plays a jewelled vīṇā, and calls her Mātaṅga-kanyā — “Mataṅga's daughter.” Many Telugu homes still recite it. The Mahābhārata's Mataṅga was made a god of the Veda's metres; the later tradition gave him a daughter who is music itself.", "కాళిదాసు రచించాడని సంప్రదాయం చెప్పే ‘శ్యామలా దండకం’ — రత్నాల వీణ మీటుతున్న ఆమెను స్మరిస్తూ మొదలై, ఆమెను ‘మాతంగ కన్య’ — “మతంగుని కుమార్తె” — అని పిలుస్తుంది. ఎన్నో తెలుగు ఇళ్ళలో ఇప్పటికీ దీన్ని పఠిస్తారు. మహాభారతపు మతంగుడు వేద ఛందస్సుల దేవతగా మారాడు; తర్వాతి సంప్రదాయం ఆయనకు సాక్షాత్తూ సంగీతమే అయిన కుమార్తెను ఇచ్చింది."],
   ["dyk", "🦜", "These links between the Goddess and the sage come from later Tantric and devotional works, not from the Rāmāyaṇa or the Mahābhārata. They show how much the tradition kept thinking about Mataṅga, long after the epics.", "దేవికీ ఈ మునికీ ఉన్న ఈ సంబంధాలు తర్వాతి తంత్ర, భక్తి గ్రంథాల నుండి వచ్చినవి; రామాయణ మహాభారతాల నుండి కాదు. ఇతిహాసాల తర్వాత కూడా సంప్రదాయం మతంగుని గురించి ఎంతగా ఆలోచిస్తూనే ఉందో అవి చూపిస్తాయి."]
  ],
  [
   ["h", "Places that keep his name", "ఆయన పేరు నిలుపుకున్న ప్రదేశాలు"],
   ["p", "At Hampi on the Tuṅgabhadrā, pilgrims climb Mataṅga hill to watch the sun rise over the ruins, and believe that the old sage's āśrama stood there. Near Ānegondi, a small lake is honoured as Pampā, and a spot beside it as Śabarī's āśrama. At Gayā in Bihar, the pilgrim guide called the Gayā Māhātmya names a sacred pool of Mataṅga, where pilgrims offer rites for their ancestors.", "తుంగభద్ర ఒడ్డున హంపిలో, శిథిలాల మీద సూర్యోదయం చూడటానికి యాత్రికులు మతంగ కొండ ఎక్కుతారు; ఆ పాత ముని ఆశ్రమం అక్కడే ఉండేదని నమ్ముతారు. ఆనెగొంది దగ్గర ఒక చిన్న సరస్సును పంపగా, దాని పక్కన ఒక చోటును శబరి ఆశ్రమంగా పూజిస్తారు. బిహార్‌లోని గయలో, ‘గయా మాహాత్మ్యం’ అనే తీర్థ గ్రంథం మతంగుని పేరిట ఒక పవిత్ర కోనేరును పేర్కొంటుంది; అక్కడ యాత్రికులు పితృకార్యాలు చేస్తారు."],
   ["p", "None of these places can be proved to be the sage's own. But they show that people wanted to stand where Mataṅga stood — on the hill Vālin could not climb, by the lake where Śabarī waited.", "ఇవేవీ ఆ ముని సొంత ప్రదేశాలని నిరూపించలేం. కానీ మతంగుడు నిలిచిన చోట నిలబడాలని — వాలి ఎక్కలేని కొండ మీద, శబరి ఎదురుచూసిన సరస్సు ఒడ్డున — ప్రజలు కోరుకున్నారని అవి చూపిస్తాయి."],
   ["dyk", "🎼", "Don't mix him up with two other Mataṅgas. One is the author of the Bṛhaddeśī, an old Sanskrit book on music which scholars place somewhere around the middle of the first millennium CE, and which is among the first to describe rāgas. The other is the Mātaṅga of a Buddhist Jātaka tale, a sage born among outcastes who won honour by his goodness.", "ఇంకో ఇద్దరు మతంగులతో ఈయనను కలిపి పొరబడకండి. ఒకరు ‘బృహద్దేశి’ అనే పాత సంస్కృత సంగీత గ్రంథ కర్త — పండితులు దాన్ని సుమారు మొదటి సహస్రాబ్ది మధ్య కాలానికి చెందినదిగా చెబుతారు; రాగాలను వర్ణించిన తొలి గ్రంథాల్లో అదొకటి. మరొకరు ఒక బౌద్ధ జాతక కథలోని మాతంగుడు — వెలివేయబడిన వారిలో పుట్టి, తన మంచితనంతో గౌరవం పొందిన ముని."]
  ],
  [
   ["h", "What Mataṅga leaves us", "మతంగుడు మనకు ఇచ్చేది"],
   ["p", "Look at the whole life again. A proud young man is shamed by a donkey and goes straight to the truth. He asks the gods for the one thing they will not give, and does not stop. He is refused, and still honoured. And in the Rāmāyaṇa, an old guru keeps a forest so holy that his pupils' sweat turns into flowers, curses the strongest king around for a careless act of violence, and leaves behind a pupil from the forest people whose devotion the whole of India remembers.", "ఆ జీవితాన్ని మొత్తంగా మళ్ళీ చూడండి. గర్వంగా పెరిగిన ఒక యువకుడు గాడిద చేతిలో సిగ్గుపడి, నేరుగా నిజం వైపు వెళ్తాడు. దేవతలు ఇవ్వని ఒకే ఒక్కదాన్ని వారిని అడుగుతాడు; ఆగడు. తిరస్కారం పొందుతాడు; అయినా గౌరవం పొందుతాడు. రామాయణంలో, ఒక వృద్ధ గురువు తన శిష్యుల చెమట పువ్వులయ్యేంత పవిత్రంగా ఒక వనాన్ని కాపాడుతాడు; అజాగ్రత్త హింస చేసినందుకు చుట్టుపక్కల అందరికంటే బలమైన రాజును శపిస్తాడు; దేశమంతా గుర్తుంచుకునే భక్తి గల ఒక అటవీ జాతి శిష్యురాలిని వదిలి వెళ్తాడు."],
   ["p", "Perhaps that is the deepest thing about Mataṅga. Whatever the rules said about birth, the sage of the Rāmāyaṇa is remembered most for the one he let in — {shabari|Śabarī}, who swept his path for Rāma.", "మతంగుని గురించి అన్నిటికంటే లోతైన విషయం బహుశా ఇదే. పుట్టుక గురించి నియమాలు ఏం చెప్పినా, రామాయణపు ముని ఎక్కువగా గుర్తుండేది తాను లోపలికి రానిచ్చిన ఆ ఒక్కరి వల్లే — రాముడి కోసం ఆయన దారిని ఊడ్చిన {shabari|శబరి} వల్ల."],
   ["src", "Śyāmalā Daṇḍakam (traditionally ascribed to Kālidāsa) and later Śākta works (Mātaṅgī as Mataṅga's daughter). Gayā Māhātmya (Mataṅga's sacred pool at Gayā). Hampi and Ānegondi: local and pilgrim tradition. Bṛhaddeśī of Mataṅga (a later author on music). Mātaṅga Jātaka (Buddhist Jātaka collection).", "శ్యామలా దండకం (కాళిదాసు రచనగా సంప్రదాయం చెబుతుంది), తర్వాతి శాక్త గ్రంథాలు (మతంగుని కుమార్తెగా మాతంగి). గయా మాహాత్మ్యం (గయలో మతంగుని పవిత్ర కోనేరు). హంపి, ఆనెగొంది: స్థానిక, యాత్రికుల సంప్రదాయం. మతంగుని బృహద్దేశి (తర్వాతి కాలపు సంగీత గ్రంథకర్త). మాతంగ జాతకం (బౌద్ధ జాతక కథలు)."]
  ]
 ],
 remember: [
  ["Later tradition calls the goddess {matangi|Mātaṅgī} the daughter of {matanga|Mataṅga}.", "తర్వాతి సంప్రదాయం {matangi|మాతంగి} దేవిని {matanga|మతంగుని} కుమార్తెగా చెబుతుంది."],
  ["Mataṅga hill at Hampi and a sacred pool at Gayā keep his name.", "హంపిలోని మతంగ కొండ, గయలోని ఒక పవిత్ర కోనేరు ఆయన పేరు నిలుపుకున్నాయి."],
  ["He is remembered most through his devoted pupil {shabari|Śabarī}.", "ఆయన ఎక్కువగా తన భక్తురాలైన శిష్యురాలు {shabari|శబరి} ద్వారానే గుర్తుంటాడు."]
 ],
 think: ["Mataṅga was shut out by others, yet he let Śabarī in. When you have been left out of something, does it make you more likely or less likely to welcome others?", "మతంగుణ్ణి ఇతరులు బయట నిలబెట్టారు; అయినా ఆయన శబరిని లోపలికి రానిచ్చాడు. మిమ్మల్ని ఎక్కడైనా దూరంగా ఉంచినప్పుడు, ఇతరులను ఆహ్వానించే అవకాశం మీలో పెరుగుతుందా, తగ్గుతుందా?"]
}
]);
