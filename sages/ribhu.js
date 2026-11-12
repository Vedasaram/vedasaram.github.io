// Great Sages — Ṛbhu and Nidāgha. Retold by Hari Pokkuluri.
// Told from the Viṣṇu Purāṇa (Aṃśa 2), the Varāha and Tejobindu Upaniṣads, the Ṛbhu Gītā of the Śivarahasya,
// and the Ṛgveda (for the other, Vedic Ṛbhus), in fresh original wording.
// Block format: see the top of ramayana.js and sages.js.
window.SAGE_PLAN = Object.assign(window.SAGE_PLAN || {}, { ribhu: [
  ["The Son of Brahmā and the Son of Pulastya", "Viṣṇu Purāṇa, Aṃśa 2"],
  ["The Guest at the Door", "Viṣṇu Purāṇa, Aṃśa 2"],
  ["“Where Have You Come From?”", "Viṣṇu Purāṇa, Aṃśa 2"],
  ["Which Is the King, and Which the Elephant?", "Viṣṇu Purāṇa, Aṃśa 2"],
  ["“Who Is ‘I’, and Who Is ‘You’?”", "Viṣṇu Purāṇa, Aṃśa 2"],
  ["Ṛbhu and the Great Boar", "Varāha Upaniṣad (a later minor Upaniṣad)"],
  ["The Song at Kedāra — the Ṛbhu Gītā", "Śivarahasya (later work)"],
  ["The Other Ṛbhus — Craftsmen of the Ṛgveda", "Ṛgveda 1.161, 4.33–37 · Bhāgavata 4"],
  ["What Ṛbhu and Nidāgha Leave Us", "Viṣṇu Purāṇa · Tejobindu Upaniṣad · tradition"]
] });
window.RMY_WHO = Object.assign({
  "ribhu": { "av": "🌅", "en": "Ṛbhu", "te": "ఋభువు", "d": "A son of Brahmā, a knower of the Self, who came back again and again to teach his pupil Nidāgha.", "dt": "బ్రహ్మ కుమారుడు, ఆత్మజ్ఞాని. తన శిష్యుడు నిదాఘునికి బోధించడానికి మళ్ళీ మళ్ళీ వచ్చిన గురువు." },
  "nidagha": { "av": "🧑", "en": "Nidāgha", "te": "నిదాఘుడు", "d": "Pulastya's son and the pupil of Ṛbhu, who slowly learned that the Self in all is one.", "dt": "పులస్త్యుని కుమారుడు, ఋభువు శిష్యుడు. అందరిలో ఉన్న ఆత్మ ఒక్కటే అని నెమ్మదిగా తెలుసుకున్నవాడు." },
  "sauvira": { "av": "👑", "en": "The king of Sauvīra", "te": "సౌవీర రాజు", "d": "The king whose palanquin Jaḍa Bharata carried. The Viṣṇu Purāṇa calls him only the king of Sauvīra; the Bhāgavata names him Rahūgaṇa, king of Sindhu and Sauvīra.", "dt": "జడభరతుడు ఎవరి పల్లకీ మోశాడో ఆ రాజు. విష్ణు పురాణం అతన్ని సౌవీర రాజు అని మాత్రమే అంటుంది; భాగవతం అతని పేరు రహూగణుడు, సింధు-సౌవీర దేశాల రాజు అని చెబుతుంది." },
  "ribhus": { "av": "🛠️", "en": "The Ṛbhus (Vedic)", "te": "ఋభువులు (వైదిక)", "d": "Three brother craftsmen of the Ṛgveda — Ṛbhu (Ṛbhukṣan), Vāja and Vibhvan, sons of Sudhanvan — who won immortality by their skill. They are different from Ṛbhu the teacher of Nidāgha.", "dt": "ఋగ్వేదంలోని ముగ్గురు శిల్పి సోదరులు — ఋభు (ఋభుక్షుడు), వాజుడు, విభ్వుడు; సుధన్వుని కుమారులు. తమ నైపుణ్యంతో అమరత్వం పొందారు. నిదాఘుని గురువైన ఋభువు వీరు కారు." },
  "sudhanvan_v": { "av": "🏹", "en": "Sudhanvan (Vedic)", "te": "సుధన్వుడు (వైదిక)", "d": "Father of the three Vedic Ṛbhus, who are therefore called the Saudhanvanas.", "dt": "ముగ్గురు వైదిక ఋభువుల తండ్రి; అందుకే వారిని సౌధన్వనులు అంటారు." }
}, window.RMY_WHO || {});
window.SAGE_CHAPTERS = (window.SAGE_CHAPTERS || []).concat([
{
 id: "rbh-1", sage: "ribhu", n: 1, order: 4101, date: "2026-11-12",
 title: "The Son of Brahmā and the Son of Pulastya", titleTe: "బ్రహ్మ కుమారుడు, పులస్త్యుని కుమారుడు",
 src: "Viṣṇu Purāṇa, Aṃśa 2",
 who: ["ribhu", "nidagha", "brahma", "pulastya", "jadabharata", "sauvira", "parashara", "maitreyamuni"],
 pages: [
  [
   ["p", "Some sages are famous for their curses, some for their battles, some for the books they wrote. {ribhu|Ṛbhu} is famous for one thing only: patience. He was a teacher who would not give up on his pupil. When the pupil forgot what he had learned, Ṛbhu did not scold him from far away. He came back himself, in disguise, again and again, until the lesson finally took root.", "కొందరు మునులు తమ శాపాలకు ప్రసిద్ధులు, కొందరు యుద్ధాలకు, కొందరు రాసిన గ్రంథాలకు. {ribhu|ఋభువు} మాత్రం ఒక్క దానికే ప్రసిద్ధుడు — ఓర్పు. శిష్యుణ్ణి ఎప్పటికీ వదిలిపెట్టని గురువు ఆయన. శిష్యుడు నేర్చుకున్నది మరచిపోతే, దూరం నుండి తిట్టలేదు. తానే మారువేషంలో మళ్ళీ మళ్ళీ వచ్చాడు — ఆ పాఠం శిష్యుని మనసులో వేళ్ళూనుకునే వరకూ."],
   ["p", "The Viṣṇu Purāṇa says that Ṛbhu was a son of {brahma|Brahmā}, whom it calls Parameṣṭhin, “the one who stands highest.” It also says that Ṛbhu was wise by his very nature. He did not have to struggle for the knowledge of the Self as other seekers do. He was born seeing what others spend whole lives trying to see: that one and the same Self lives in every creature.", "ఋభువు {brahma|బ్రహ్మదేవుని} కుమారుడని విష్ణు పురాణం చెబుతుంది; బ్రహ్మను అక్కడ “పరమేష్ఠి” — అందరికంటే పైన ఉన్నవాడు — అని పిలుస్తుంది. ఋభువు పుట్టుకతోనే జ్ఞాని అని కూడా చెబుతుంది. ఇతర సాధకుల్లా ఆత్మజ్ఞానం కోసం ఆయన కష్టపడనక్కర్లేదు. ఇతరులు జీవితమంతా వెతికినా కనుగొనలేనిది ఆయనకు పుట్టుకతోనే కనిపించింది — ప్రతి ప్రాణిలోనూ ఉన్నది ఒకే ఆత్మ అని."],
   ["dyk", "🔤", "In the Veda, the word ṛbhu means “skilful” or “clever with the hands.” And nidāgha means the hot season — the burning heat of summer. A teacher whose name means skill, and a pupil whose name means heat: by the end of the story the heat is cooled.", "వేదంలో “ఋభు” అంటే నేర్పరి, చేతులతో చక్కగా పని చేసేవాడు. “నిదాఘం” అంటే వేసవి కాలం — మండే ఎండ. పేరుకే నైపుణ్యం ఉన్న గురువు, పేరుకే వేడి ఉన్న శిష్యుడు. కథ ముగిసేసరికి ఆ వేడి చల్లారుతుంది."]
  ],
  [
   ["h", "The pupil", "శిష్యుడు"],
   ["p", "Ṛbhu's pupil was {nidagha|Nidāgha}, a son of the great sage {pulastya|Pulastya}. Pulastya was himself one of Brahmā's mind-born sons. So teacher and pupil were of one family: Ṛbhu was Brahmā's son, and Nidāgha was Brahmā's grandson. Nidāgha came to Ṛbhu as a young man, lived with him, served him, and learned from him the whole teaching about the Self.", "ఋభువు శిష్యుడు {nidagha|నిదాఘుడు} — మహర్షి {pulastya|పులస్త్యుని} కుమారుడు. పులస్త్యుడు కూడా బ్రహ్మ మానస పుత్రులలో ఒకడు. అంటే గురుశిష్యులు ఒకే వంశంవారు — ఋభువు బ్రహ్మ కొడుకు, నిదాఘుడు బ్రహ్మ మనవడు. నిదాఘుడు యువకుడిగా ఋభువు దగ్గరకు వచ్చి, ఆయనతోనే ఉంటూ, సేవ చేస్తూ, ఆత్మ గురించిన బోధ అంతా నేర్చుకున్నాడు."],
   ["p", "Nidāgha was a good student. He could repeat everything his teacher said. But there is a difference between knowing a truth with the head and living it in every moment. When his studies were done, he took his teacher's leave and went to settle in Vīranagara, a large and beautiful city on the banks of the river Devikā. There he married and lived as a householder, keeping the sacred fires and doing every daily rite exactly as the books lay down.", "నిదాఘుడు మంచి విద్యార్థి. గురువు చెప్పినదంతా పొల్లుపోకుండా తిరిగి చెప్పగలిగేవాడు. కానీ ఒక సత్యాన్ని బుర్రతో తెలుసుకోవడం వేరు, ప్రతి క్షణం దాన్ని బతకడం వేరు. చదువు పూర్తయ్యాక గురువు దగ్గర సెలవు తీసుకుని, దేవికా నది ఒడ్డున ఉన్న వీరనగరం అనే పెద్ద, అందమైన పట్టణానికి వెళ్ళి స్థిరపడ్డాడు. అక్కడ పెళ్ళి చేసుకుని గృహస్థుగా ఉంటూ, అగ్నిహోత్రం కాపాడుతూ, శాస్త్రం చెప్పినట్లే ప్రతి నిత్యకర్మనూ నిష్ఠగా చేసేవాడు."],
   ["dyk", "🏠", "A householder's day was meant to include feeding guests. The Taittirīya Upaniṣad tells the student leaving his teacher: “Let the guest be a god to you” — atithi-devo bhava. Keep that in mind; it matters in the next chapter.", "గృహస్థు దినచర్యలో అతిథికి అన్నం పెట్టడం ఒక భాగం. గురువు దగ్గర చదువు ముగించి వెళ్ళే శిష్యునికి తైత్తిరీయ ఉపనిషత్తు చెప్పే మాట: “అతిథి దేవో భవ” — అతిథిని దేవునిలా చూడు. ఇది గుర్తుంచుకోండి; తర్వాతి అధ్యాయంలో అవసరం."]
  ],
  [
   ["h", "A teacher who does not forget", "మరచిపోని గురువు"],
   ["p", "Years passed. The Viṣṇu Purāṇa counts them in the vast measure of the gods: a thousand years of the gods went by. Nidāgha was busy with his household and his rites. But Ṛbhu had not forgotten him. A teacher of this kind does not think his work is over when the last lesson is spoken. He watches to see whether the seed has sprouted.", "సంవత్సరాలు గడిచాయి. విష్ణు పురాణం వాటిని దేవతల కొలతలో లెక్కిస్తుంది — వెయ్యి దివ్య సంవత్సరాలు గడిచిపోయాయి. నిదాఘుడు సంసారంలో, కర్మకాండలో మునిగిపోయాడు. కానీ ఋభువు అతన్ని మరచిపోలేదు. ఇలాంటి గురువు చివరి పాఠం చెప్పగానే తన పని అయిపోయిందనుకోడు. విత్తనం మొలకెత్తిందో లేదో చూస్తూనే ఉంటాడు."],
   ["p", "What follows shows what Ṛbhu saw. Nidāgha had learned that the Self is one. Yet in daily life he still divided everything — this food is fine and that is poor; this man is a king and that one is nobody; this is “I” and that is “you.” So Ṛbhu decided to go to Vīranagara himself, without telling anyone who he was.", "తర్వాత జరిగినది ఋభువు ఏం గమనించాడో చూపిస్తుంది. ఆత్మ ఒక్కటే అని నిదాఘుడు నేర్చుకున్నాడు. అయినా రోజువారీ జీవితంలో ప్రతిదాన్నీ ఇంకా విడదీసి చూస్తున్నాడు — ఈ అన్నం మంచిది, ఆ అన్నం నాసిరకం; ఇతను రాజు, అతను ఎవరో సామాన్యుడు; ఇది “నేను”, అది “నువ్వు”. అందుకే ఋభువు తానెవరో ఎవరికీ చెప్పకుండా స్వయంగా వీరనగరానికి వెళ్ళాలని నిశ్చయించుకున్నాడు."],
   ["p", "This story does not stand alone in the Purāṇa. {parashara|Parāśara} tells the Viṣṇu Purāṇa to his pupil {maitreyamuni|Maitreya}. Inside it, the holy simpleton {jadabharata|Jaḍa Bharata} tells this story to the {sauvira|king of Sauvīra}, whose palanquin he had been made to carry. So the teaching of Ṛbhu reaches us through three teachers, one inside the other.", "ఈ కథ పురాణంలో ఒంటరిగా రాదు. {parashara|పరాశరుడు} విష్ణు పురాణాన్ని తన శిష్యుడు {maitreyamuni|మైత్రేయునికి} చెబుతాడు. అందులో, తనచేత పల్లకీ మోయించిన {sauvira|సౌవీర రాజుకు} పవిత్రమైన అమాయకుడు {jadabharata|జడభరతుడు} ఈ కథ చెబుతాడు. అంటే ఋభువు బోధ ఒకరి లోపల ఒకరుగా ముగ్గురు గురువుల ద్వారా మనకు చేరుతుంది."],
   ["sglink", "Parāśara, Jaḍa Bharata and the Viṣṇu Purāṇa", "పరాశరుడు, జడభరతుడు, విష్ణు పురాణం", "prs-9"],
   ["src", "Viṣṇu Purāṇa, Aṃśa 2, adhyāya 15 (Ṛbhu, son of Parameṣṭhin; Nidāgha, son of Pulastya; Vīranagara on the Devikā), within the story of Jaḍa Bharata and the king of Sauvīra (Aṃśa 2, adhyāyas 13–16). “Atithi-devo bhava”: Taittirīya Upaniṣad, Śikṣā Vallī.", "విష్ణు పురాణం, రెండవ అంశం, 15వ అధ్యాయం (పరమేష్ఠి కుమారుడు ఋభువు; పులస్త్యుని కుమారుడు నిదాఘుడు; దేవికా తీరాన వీరనగరం) — జడభరతుడు, సౌవీర రాజు కథలో భాగంగా (రెండవ అంశం, 13–16 అధ్యాయాలు). “అతిథి దేవో భవ”: తైత్తిరీయ ఉపనిషత్తు, శిక్షావల్లి."]
  ]
 ],
 remember: [
  ["{ribhu|Ṛbhu} was a son of Brahmā, wise by birth; {nidagha|Nidāgha} was Pulastya's son and his pupil.", "{ribhu|ఋభువు} బ్రహ్మ కుమారుడు, పుట్టుకతోనే జ్ఞాని; {nidagha|నిదాఘుడు} పులస్త్యుని కుమారుడు, ఆయన శిష్యుడు."],
  ["Nidāgha learned the teaching, then went to live as a householder in Vīranagara on the Devikā.", "నిదాఘుడు బోధ నేర్చుకుని, దేవికా తీరాన వీరనగరంలో గృహస్థుగా స్థిరపడ్డాడు."],
  ["The story is told by {jadabharata|Jaḍa Bharata} to a king, inside Parāśara's Viṣṇu Purāṇa.", "ఈ కథను పరాశరుని విష్ణు పురాణంలో {jadabharata|జడభరతుడు} ఒక రాజుకు చెబుతాడు."]
 ],
 think: ["Nidāgha could repeat every word his teacher said. Is that the same as understanding? How can you tell when you have really understood something?", "నిదాఘుడు గురువు చెప్పిన ప్రతి మాటా తిరిగి చెప్పగలడు. అది అర్థం చేసుకోవడంతో సమానమా? ఏదైనా మనకు నిజంగా అర్థమైందని ఎలా తెలుస్తుంది?"]
},
{
 id: "rbh-2", sage: "ribhu", n: 2, order: 4102, date: "2026-11-12",
 title: "The Guest at the Door", titleTe: "గుమ్మం దగ్గర అతిథి",
 src: "Viṣṇu Purāṇa, Aṃśa 2",
 who: ["ribhu", "nidagha"],
 pages: [
  [
   ["p", "One day in Vīranagara, {nidagha|Nidāgha} finished the Vaiśvadeva — the daily offering a householder makes to all beings before he eats. The rule says that after it, the householder should look out for a guest, so that no hungry person goes away from his door. Nidāgha stepped to his doorway and looked out.", "ఒక రోజు వీరనగరంలో {nidagha|నిదాఘుడు} వైశ్వదేవం ముగించాడు — గృహస్థు తాను తినే ముందు సమస్త ప్రాణులకూ చేసే నిత్య బలి అది. దాని తర్వాత ఆకలితో ఎవరూ తన ఇంటి గుమ్మం నుండి వెనక్కి వెళ్ళకుండా, అతిథి కోసం ఎదురుచూడాలని నియమం. నిదాఘుడు గుమ్మం దగ్గరకు వచ్చి బయటకు చూశాడు."],
   ["p", "There stood a stranger — a plain-looking wanderer. It was {ribhu|Ṛbhu}, but Nidāgha did not know him. Perhaps it was the long years; perhaps Ṛbhu had made himself look ordinary on purpose. Nidāgha did everything a good host should. He welcomed the stranger in, gave him water to wash his feet, offered him a seat, and said with folded hands, “Sir, please eat in my house.”", "అక్కడ ఒక అపరిచితుడు నిలబడి ఉన్నాడు — సాదాసీదాగా కనిపించే బాటసారి. అతను ఋభువే, కానీ నిదాఘుడు గుర్తుపట్టలేదు. ఏళ్ళు గడిచిపోవడం వల్లనో, ఋభువే కావాలని సామాన్యునిలా కనిపించడం వల్లనో. మంచి ఆతిథ్యం ఇచ్చేవాడు చేయవలసినదంతా నిదాఘుడు చేశాడు. అతిథిని లోపలికి ఆహ్వానించాడు, కాళ్ళు కడుక్కోవడానికి నీళ్ళిచ్చాడు, ఆసనం వేశాడు, చేతులు జోడించి “అయ్యా, దయచేసి మా ఇంట్లో భోజనం చేయండి” అన్నాడు."],
   ["dyk", "🚪", "Notice: Ṛbhu does not come to Nidāgha's hermitage or his classroom. He comes to his doorstep, at mealtime — right into the middle of ordinary life. That is where the test is.", "గమనించండి: ఋభువు నిదాఘుని ఆశ్రమానికో, పాఠశాలకో రాలేదు. భోజనం వేళ, నేరుగా అతని ఇంటి గుమ్మానికే వచ్చాడు — సాధారణ జీవితం మధ్యలోకే. పరీక్ష అక్కడే ఉంది."]
  ],
  [
   ["h", "“What food do you have?”", "“మీ ఇంట్లో ఏం వంటలున్నాయి?”"],
   ["p", "The guest sat down and asked, “Tell me, brāhmaṇa, what food is there in your house? I do not care for coarse food.” It was a strange question from a guest. Nidāgha answered politely, naming what they had: barley-meal, cakes, rice and such ordinary things — good, wholesome household food.", "అతిథి కూర్చుని, “చెప్పు బ్రాహ్మణా, మీ ఇంట్లో ఏం ఆహారం ఉంది? నాకు ముతక తిండి నచ్చదు” అని అడిగాడు. అతిథి అడగవలసిన ప్రశ్న కాదది. నిదాఘుడు మర్యాదగా తమ దగ్గర ఉన్నవి చెప్పాడు — సత్తు పిండి, రొట్టెలు, అన్నం లాంటివి — మంచి, బలమైన ఇంటి భోజనం."],
   ["p", "The guest wrinkled his nose. “That is poor stuff. Give me something sweet — rice cooked in milk with sugar, wheat cakes, milk and curds, sweets made with jaggery.” Many hosts would have lost patience. Nidāgha did not. He went inside and said to his wife, “A guest has come. Cook the best and sweetest things we have, and cook them well.” And she did.", "అతిథి ముఖం చిట్లించాడు. “అవన్నీ నాసిరకం. నాకు తీపి పెట్టు — పాలు, చక్కెర వేసి వండిన పరమాన్నం, గోధుమ రొట్టెలు, పాలు, పెరుగు, బెల్లం వేసిన పిండివంటలు.” చాలామంది ఇంటివాళ్ళకైతే ఓపిక నశించేది. నిదాఘునికి నశించలేదు. లోపలికి వెళ్ళి భార్యతో, “అతిథి వచ్చారు. మన దగ్గర ఉన్న వాటిలో శ్రేష్ఠమైనవీ, తియ్యనివీ చక్కగా వండు” అన్నాడు. ఆమె అలాగే వండింది."],
   ["dyk", "🍚", "Nidāgha passes the test of a householder perfectly — he is patient, generous and polite. But that is not the test Ṛbhu came to give. Watch for the next one.", "గృహస్థుగా నిదాఘుడు ఈ పరీక్షలో పూర్తిగా నెగ్గాడు — ఓపిక, ఉదారత, మర్యాద అన్నీ చూపించాడు. కానీ ఋభువు పెట్టడానికి వచ్చిన పరీక్ష ఇది కాదు. తర్వాతిది చూడండి."]
  ],
  [
   ["h", "After the meal", "భోజనం తర్వాత"],
   ["p", "The stranger ate the sweet food slowly and fully. When he had finished and washed his hands, Nidāgha, as a courteous host, bowed and asked the usual questions: “Has the meal satisfied you, sir? Is your mind at ease? Where do you live? Where are you going now, and where have you come from?”", "అపరిచితుడు ఆ తీపి వంటలను నెమ్మదిగా, కడుపు నిండా తిన్నాడు. తిని, చేతులు కడుక్కున్నాక, మర్యాదగల ఇంటి యజమానిగా నిదాఘుడు నమస్కరించి మామూలుగా అడిగే ప్రశ్నలు అడిగాడు: “అయ్యా, భోజనం తృప్తిగా ఉందా? మనసుకు సుఖంగా ఉందా? మీరు ఎక్కడ ఉంటారు? ఇప్పుడు ఎక్కడికి వెళ్తున్నారు, ఎక్కడి నుండి వచ్చారు?”"],
   ["p", "They were the kind of questions anyone asks a traveller. Nidāgha expected a name, a village, a road. Instead the guest looked at him and began to answer each question in a way no traveller had ever answered before — and in those answers, everything Nidāgha had once learned and half forgotten came rushing back.", "బాటసారిని ఎవరైనా అడిగే ప్రశ్నలే అవి. ఒక పేరు, ఒక ఊరు, ఒక దారి — ఇలాంటి జవాబు వస్తుందని నిదాఘుడు అనుకున్నాడు. కానీ అతిథి అతని వైపు చూసి, ఇంతవరకూ ఏ బాటసారీ చెప్పని విధంగా ఒక్కొక్క ప్రశ్నకూ జవాబివ్వడం మొదలుపెట్టాడు — ఆ జవాబుల్లో, నిదాఘుడు ఒకప్పుడు నేర్చుకుని సగం మరచిపోయినదంతా మళ్ళీ ఉప్పెనలా తిరిగి వచ్చింది."],
   ["src", "Viṣṇu Purāṇa, Aṃśa 2, adhyāya 15 — Ṛbhu's first visit to Vīranagara after a thousand years of the gods; the Vaiśvadeva, the welcome, Ṛbhu's request for sweet food, and Nidāgha's questions after the meal.", "విష్ణు పురాణం, రెండవ అంశం, 15వ అధ్యాయం — వెయ్యి దివ్య సంవత్సరాల తర్వాత ఋభువు వీరనగరానికి మొదటిసారి రావడం; వైశ్వదేవం, ఆతిథ్యం, ఋభువు తీపి వంటలు అడగడం, భోజనం తర్వాత నిదాఘుని ప్రశ్నలు."]
  ]
 ],
 remember: [
  ["{ribhu|Ṛbhu} came to {nidagha|Nidāgha}'s door in disguise, just after the daily offering.", "నిత్య బలి ముగిసిన వెంటనే {ribhu|ఋభువు} మారువేషంలో {nidagha|నిదాఘుని} ఇంటి గుమ్మానికి వచ్చాడు."],
  ["He refused plain food and asked for sweet dishes; Nidāgha patiently had them cooked.", "సాదా తిండి వద్దని తీపి వంటలు అడిగాడు; నిదాఘుడు ఓపికగా వాటిని వండించాడు."],
  ["After the meal, Nidāgha asked: are you satisfied, where do you live, where are you going?", "భోజనం తర్వాత నిదాఘుడు అడిగాడు: తృప్తిగా ఉందా, ఎక్కడ ఉంటారు, ఎక్కడికి వెళ్తున్నారు?"]
 ],
 think: ["Nidāgha was a perfect host to a fussy guest. Have you ever been kind to someone who was hard to please? How did it feel?", "పేచీ పెట్టే అతిథికి నిదాఘుడు చక్కని ఆతిథ్యం ఇచ్చాడు. సంతోషపెట్టడం కష్టమైన ఎవరితోనైనా మీరు దయగా ప్రవర్తించారా? అప్పుడు మీకు ఎలా అనిపించింది?"]
},
{
 id: "rbh-3", sage: "ribhu", n: 3, order: 4103, date: "2026-11-12",
 title: "“Where Have You Come From?”", titleTe: "“ఎక్కడి నుండి వచ్చారు?”",
 src: "Viṣṇu Purāṇa, Aṃśa 2",
 who: ["ribhu", "nidagha"],
 pages: [
  [
   ["h", "Hunger and satisfaction", "ఆకలి, తృప్తి"],
   ["p", "“You ask if I am satisfied,” said the guest. “Listen. A man is hungry when the food in him has been used up. He is thirsty when the water in him is gone. Hunger and thirst belong to the body. I am not the body, and I have never been hungry — so I am always satisfied. Why ask me about it?”", "“నాకు తృప్తిగా ఉందా అని అడుగుతున్నావు,” అన్నాడు అతిథి. “విను. లోపల తిన్నది అరిగిపోయినప్పుడు మనిషికి ఆకలి వేస్తుంది. లోపలి నీరు అయిపోయినప్పుడు దాహం వేస్తుంది. ఆకలి, దాహం శరీరానికి చెందినవి. నేను శరీరాన్ని కాను; నాకు ఎప్పుడూ ఆకలి వేయలేదు — కాబట్టి ఎప్పుడూ తృప్తిగానే ఉన్నాను. దాని గురించి నన్నెందుకు అడుగుతావు?”"],
   ["p", "“And you ask if my mind is at ease. Contentment and discontent are moods of the mind. They come and go like weather. The Self that watches the mind is not touched by them. Ask the mind about its ease, not me.”", "“నా మనసుకు సుఖంగా ఉందా అనీ అడిగావు. సంతోషం, అసంతోషం మనసు పొందే భావాలు. వాతావరణంలా అవి వస్తూ పోతూ ఉంటాయి. మనసును చూస్తూ ఉండే ఆత్మను అవి తాకవు. సుఖం గురించి మనసును అడుగు, నన్ను కాదు.”"],
   ["dyk", "🌦️", "Ṛbhu is not being rude. He is answering the real question under the polite one — “Who is it that eats, who is it that feels?”", "ఋభువు మొరటుగా మాట్లాడటం లేదు. మర్యాదపూర్వకమైన ప్రశ్న కింద దాగిన అసలు ప్రశ్నకు జవాబిస్తున్నాడు — “తినేది ఎవరు? అనుభవించేది ఎవరు?”"]
  ],
  [
   ["h", "No coming, no going", "రాకా లేదు, పోకా లేదు"],
   ["p", "“You ask where I live, where I am going, where I have come from. The Self is everywhere, like the sky. Does the sky come into your house when you open the door? Does it leave when you shut it? How can what fills everything come or go? I am not going, I am not coming, and I do not live in one place.”", "“నేను ఎక్కడ ఉంటాను, ఎక్కడికి వెళ్తున్నాను, ఎక్కడి నుండి వచ్చాను అని అడిగావు. ఆత్మ ఆకాశంలా అంతటా ఉంది. తలుపు తెరిస్తే ఆకాశం నీ ఇంట్లోకి వస్తుందా? మూసేస్తే వెళ్ళిపోతుందా? అంతటా నిండి ఉన్నది ఎలా వస్తుంది, ఎలా పోతుంది? నేను వెళ్ళడం లేదు, రావడం లేదు, ఒక్క చోట ఉండటమూ లేదు.”"],
   ["p", "Then he said something stranger still: “You are not truly ‘you,’ and others are not truly ‘others,’ and I am not truly ‘I.’ These are names for bodies. The one Self in all of them is the same.”", "తర్వాత ఇంకా విచిత్రమైన మాట అన్నాడు: “నువ్వు నిజంగా ‘నువ్వు’ కాదు, ఇతరులు నిజంగా ‘ఇతరులు’ కారు, నేను నిజంగా ‘నేను’ కాను. ఇవన్నీ శరీరాలకు పెట్టిన పేర్లు. వాటన్నిటిలో ఉన్న ఆత్మ ఒక్కటే.”"]
  ],
  [
   ["h", "What is sweet?", "ఏది తియ్యనిది?"],
   ["p", "“And as for the sweet food I asked for — think about it. What is sweet? Sweets are delicious to a hungry man. Give him more after he is full, and the same sweets make him feel sick. Plain food is a feast to someone starving. So which food is sweet at the beginning, in the middle and at the end? Sweetness is not in the food; it is in the state of the one who eats.”", "“ఇక నేను అడిగిన తీపి వంటల సంగతి — ఆలోచించు. ఏది తియ్యనిది? ఆకలితో ఉన్నవాడికి మిఠాయి అమృతంలా ఉంటుంది. కడుపు నిండాక ఇంకా పెడితే అదే మిఠాయి వెగటు పుట్టిస్తుంది. ఆకలితో అల్లాడేవాడికి సాదా అన్నమే విందు. మరి మొదట్లో, మధ్యలో, చివరలో — ఎప్పుడూ తియ్యగా ఉండే తిండి ఏది? తీపి తిండిలో లేదు; తినేవాడి స్థితిలో ఉంది.”"],
   ["p", "“The body is made of earth, and food is earth too. As a mud house is patched with fresh mud, this body of earth is patched with food. That is all eating is. So be one who sees all things evenly — that even sight is the road to freedom.” The Viṣṇu Purāṇa adds that the guest was asking for sweet food only to teach this.", "“శరీరం మట్టితో చేసినది; అన్నమూ మట్టి నుండే వస్తుంది. మట్టి ఇంటిని కొత్త మట్టితో అలికినట్టే, ఈ మట్టి శరీరాన్ని అన్నంతో నింపుతాం. తినడం అంటే అంతే. కాబట్టి అన్నిటినీ సమంగా చూసేవాడివి కా — ఆ సమదృష్టే ముక్తికి దారి.” తీపి వంటలు అడిగింది ఈ పాఠం చెప్పడానికే అని విష్ణు పురాణం అంటుంది."]
  ],
  [
   ["h", "“Who are you?”", "“మీరెవరు?”"],
   ["p", "Nidāgha was shaken. These were not a traveller's words. He fell at the guest's feet and said, “Be gracious to me, sir. Who are you, who have come here for my good? My mind was troubled, and your words have made it still.”", "నిదాఘుడు కదిలిపోయాడు. ఇవి బాటసారి మాటలు కావు. అతిథి పాదాల మీద పడి, “అయ్యా, నన్ను అనుగ్రహించండి. నా మేలు కోసం ఇక్కడికి వచ్చిన మీరు ఎవరు? కలత చెందిన నా మనసు మీ మాటలతో నిశ్చలమైంది” అన్నాడు."],
   ["p", "The guest smiled. “I am {ribhu|Ṛbhu}, your teacher. I came to give you wisdom. Now you know what is real: that this whole world is one, the form of the one Lord, with no second.” Nidāgha worshipped his teacher with deep joy — and Ṛbhu, his work done for now, went on his way.", "అతిథి చిరునవ్వు నవ్వాడు. “నేను {ribhu|ఋభువును}, నీ గురువును. నీకు జ్ఞానం ఇవ్వడానికి వచ్చాను. ఇప్పుడు నీకు నిజం ఏమిటో తెలిసింది — ఈ జగత్తంతా ఒక్కటే, ఏకైక పరమాత్మ స్వరూపమే; రెండవది లేదు.” నిదాఘుడు ఎంతో ఆనందంతో గురువును పూజించాడు — ఆ సారికి పని ముగిసిందని ఋభువు తన దారిన వెళ్ళిపోయాడు."],
   ["dyk", "🔁", "Nidāgha understood — for a while. The Purāṇa is honest: one good lesson is not always enough. Ṛbhu would have to come back.", "నిదాఘునికి అర్థమైంది — కొంతకాలం వరకూ. పురాణం నిజాయితీగా చెబుతుంది: ఒక్క మంచి పాఠం ఎప్పుడూ సరిపోదు. ఋభువు మళ్ళీ రావలసి వచ్చింది."],
   ["src", "Viṣṇu Purāṇa, Aṃśa 2, adhyāya 15 — Ṛbhu's answers on hunger and satisfaction, on coming and going, on sweet and not-sweet food, the body of earth, and his revealing of himself. Told here in fresh words, not as a translation.", "విష్ణు పురాణం, రెండవ అంశం, 15వ అధ్యాయం — ఆకలి-తృప్తి, రాకపోకలు, తీపి-తీపి కానిది, మట్టి శరీరం గురించి ఋభువు జవాబులు, తానెవరో బయటపెట్టడం. ఇక్కడ అనువాదంగా కాక, కొత్త మాటల్లో చెప్పబడింది."]
  ]
 ],
 remember: [
  ["Hunger and thirst belong to the body; the Self is always satisfied.", "ఆకలి, దాహం శరీరానివి; ఆత్మ ఎప్పుడూ తృప్తిగానే ఉంటుంది."],
  ["The Self is everywhere like the sky, so it neither comes nor goes.", "ఆత్మ ఆకాశంలా అంతటా ఉంది, కాబట్టి అది రాదు, పోదు."],
  ["Sweetness is in the eater's state, not the food; {ribhu|Ṛbhu} then told Nidāgha who he was.", "తీపి తినేవాడి స్థితిలో ఉంది, తిండిలో కాదు; తర్వాత {ribhu|ఋభువు} తానెవరో నిదాఘునికి చెప్పాడు."]
 ],
 think: ["Ṛbhu said the same sweet is delicious when you are hungry and sickening when you are full. What else in life changes like that, depending on our state rather than the thing itself?", "ఆకలిగా ఉన్నప్పుడు అమృతంలా ఉండే మిఠాయి, కడుపు నిండాక వెగటుగా ఉంటుందని ఋభువు అన్నాడు. జీవితంలో ఇంకా ఏవి — ఆ వస్తువు వల్ల కాక, మన స్థితిని బట్టి — ఇలా మారుతూ ఉంటాయి?"]
},
{
 id: "rbh-4", sage: "ribhu", n: 4, order: 4104, date: "2026-11-12",
 title: "Which Is the King, and Which the Elephant?", titleTe: "ఏది రాజు, ఏది ఏనుగు?",
 src: "Viṣṇu Purāṇa, Aṃśa 2",
 who: ["ribhu", "nidagha"],
 pages: [
  [
   ["p", "Another thousand years went by, says the Viṣṇu Purāṇa, and {ribhu|Ṛbhu} came to Vīranagara once more, to see how his pupil was doing. This time he did not find {nidagha|Nidāgha} at home.", "మరో వెయ్యి సంవత్సరాలు గడిచాయి అని విష్ణు పురాణం చెబుతుంది. శిష్యుడు ఎలా ఉన్నాడో చూడటానికి {ribhu|ఋభువు} మళ్ళీ వీరనగరానికి వచ్చాడు. ఈసారి {nidagha|నిదాఘుడు} ఇంట్లో కనిపించలేదు."],
   ["p", "It was a day of great noise in the city. The king was making his entry into Vīranagara with a huge procession — soldiers, horses, chariots and crowds pushing to see. And at the edge of it all, outside the city, apart from the crowd, stood Nidāgha. He had been to the forest to gather firewood and sacred kuśa grass for his rites. He was thin from fasting, and he held his bundle and waited for the crowd to pass.", "ఆ రోజు పట్టణమంతా గోలగోలగా ఉంది. రాజు పెద్ద ఊరేగింపుతో వీరనగరంలోకి ప్రవేశిస్తున్నాడు — సైనికులు, గుర్రాలు, రథాలు, చూడటానికి తోసుకుంటున్న జనం. ఆ హడావిడి అంచున, పట్టణం బయట, జనానికి దూరంగా నిదాఘుడు నిలబడి ఉన్నాడు. కర్మల కోసం సమిధలూ, దర్భలూ తేవడానికి అడవికి వెళ్ళి వచ్చాడు. ఉపవాసాలతో చిక్కిపోయి ఉన్నాడు. చేతిలో మోపుతో, జనం దాటిపోయే వరకూ ఎదురుచూస్తున్నాడు."],
   ["dyk", "🌾", "Nidāgha is still very careful about his rituals — fasting, gathering kuśa grass, keeping away from the crowd. None of that is wrong. But Ṛbhu wants to see what is in his eyes, not in his hands.", "నిదాఘుడు ఇంకా తన కర్మల విషయంలో ఎంతో జాగ్రత్తగా ఉన్నాడు — ఉపవాసం, దర్భలు ఏరడం, జనానికి దూరంగా ఉండటం. అందులో తప్పేమీ లేదు. కానీ ఋభువు చూడాలనుకుంటున్నది అతని చేతుల్లో ఏముందో కాదు, కళ్ళలో ఏముందో."]
  ],
  [
   ["h", "A stranger's questions", "అపరిచితుని ప్రశ్నలు"],
   ["p", "Ṛbhu came up to him, again looking like an ordinary village man, bowed, and asked, “Brāhmaṇa, why are you standing here all alone?” Nidāgha said, “Look at that crowd! The king is entering the city. It is too crowded, so I am standing aside until they pass.”", "ఋభువు మళ్ళీ ఒక మామూలు పల్లెటూరివాడిలా కనిపిస్తూ దగ్గరకు వచ్చి, నమస్కరించి, “బ్రాహ్మణా, ఇక్కడ ఒంటరిగా ఎందుకు నిలబడ్డావు?” అని అడిగాడు. నిదాఘుడు, “ఆ జనాన్ని చూడు! రాజు పట్టణంలోకి వస్తున్నాడు. బాగా రద్దీగా ఉంది; వాళ్ళు వెళ్ళిపోయే దాకా పక్కన నిలబడ్డాను” అన్నాడు."],
   ["p", "“You seem to know these things,” said the stranger. “Tell me, which one is the king, and which are the others?” Nidāgha pointed. “The one riding on that huge elephant, tall as a mountain peak — that is the king. The rest are his people.”", "“నీకు ఈ విషయాలు బాగా తెలిసినట్టున్నాయి,” అన్నాడు ఆ అపరిచితుడు. “చెప్పు, వీరిలో రాజు ఎవరు, మిగతావాళ్ళు ఎవరు?” నిదాఘుడు వేలు చూపించాడు. “కొండ శిఖరంలా ఎత్తుగా ఉన్న ఆ పెద్ద ఏనుగు మీద కూర్చున్నవాడే రాజు. మిగిలినవాళ్ళు అతని పరివారం.”"]
  ],
  [
   ["h", "Above and below", "పైన, కింద"],
   ["p", "“But I see two there — a king and an elephant,” said the stranger. “I cannot tell them apart. Which is the elephant, and which is the king?” Nidāgha was a little impatient now. “The elephant is underneath. The king is on top of it. Surely anyone can see that!”", "“కానీ అక్కడ నాకు ఇద్దరు కనిపిస్తున్నారు — ఒక రాజు, ఒక ఏనుగు,” అన్నాడు అపరిచితుడు. “ఏది ఏదో నాకు తెలియడం లేదు. ఏది ఏనుగు, ఏది రాజు?” నిదాఘునికి ఇప్పుడు కాస్త విసుగు వచ్చింది. “కింద ఉన్నది ఏనుగు. దాని పైన ఉన్నది రాజు. ఇది ఎవరికైనా తెలుస్తుంది కదా!”"],
   ["p", "“Yes, yes,” said the stranger mildly. “But please explain to me — what does ‘underneath’ mean, and what does ‘on top’ mean?”", "“అవునవును,” అన్నాడు అపరిచితుడు నెమ్మదిగా. “కానీ దయచేసి నాకు అర్థమయ్యేలా చెప్పు — ‘కింద’ అంటే ఏమిటి, ‘పైన’ అంటే ఏమిటి?”"],
   ["p", "And here Nidāgha, a learned brāhmaṇa who had lived with a great teacher, lost his temper. He did something no pupil should ever do to anyone, let alone a stranger who had bowed to him. He jumped onto the man's back. “Now see!” he said. “I am on top, like the king. You are underneath, like the elephant. Now do you understand above and below?”", "ఇక్కడే — గొప్ప గురువు దగ్గర ఉండి చదువుకున్న పండితుడైన నిదాఘుడు — కోపం ఆపుకోలేకపోయాడు. తనకు నమస్కరించిన అపరిచితునికే కాదు, ఎవరికీ ఏ శిష్యుడూ చేయకూడని పని చేశాడు. ఎగిరి ఆ మనిషి వీపు మీదకు ఎక్కాడు. “ఇప్పుడు చూడు!” అన్నాడు. “రాజులా నేను పైన ఉన్నాను. ఏనుగులా నువ్వు కింద ఉన్నావు. ఇప్పుడైనా పైనా కిందా అర్థమైందా?”"],
   ["dyk", "😳", "The Purāṇa does not hide this. The pupil who had learned that the Self in all is one climbs on a stranger's back in irritation. Knowing the words did not stop his anger.", "పురాణం దీన్ని దాచదు. అందరిలో ఉన్న ఆత్మ ఒక్కటే అని నేర్చుకున్న శిష్యుడే, విసుగుతో ఒక అపరిచితుని వీపు ఎక్కాడు. మాటలు తెలియడం అతని కోపాన్ని ఆపలేకపోయింది."],
   ["src", "Viṣṇu Purāṇa, Aṃśa 2, adhyāya 16 — Ṛbhu's second visit after another thousand years; Nidāgha standing apart outside the city with fuel and kuśa grass as the king enters; the questions about the king and the elephant; Nidāgha climbing onto Ṛbhu's back.", "విష్ణు పురాణం, రెండవ అంశం, 16వ అధ్యాయం — మరో వెయ్యి సంవత్సరాల తర్వాత ఋభువు రెండవసారి రావడం; రాజు పట్టణంలోకి వస్తుండగా సమిధలు, దర్భలతో నిదాఘుడు బయట దూరంగా నిలబడటం; రాజు-ఏనుగు ప్రశ్నలు; నిదాఘుడు ఋభువు వీపు ఎక్కడం."]
  ]
 ],
 remember: [
  ["After another thousand years, {ribhu|Ṛbhu} found Nidāgha standing apart as the king entered the city.", "మరో వెయ్యి సంవత్సరాల తర్వాత, రాజు పట్టణంలోకి వస్తుండగా దూరంగా నిలబడ్డ నిదాఘుణ్ణి {ribhu|ఋభువు} చూశాడు."],
  ["He asked: which is the king, which the elephant — and what do ‘above’ and ‘below’ mean?", "ఏది రాజు, ఏది ఏనుగు — ‘పైన’, ‘కింద’ అంటే ఏమిటి? అని అడిగాడు."],
  ["Irritated, {nidagha|Nidāgha} climbed onto the stranger's back to show him.", "విసుగుతో {nidagha|నిదాఘుడు} చూపించడానికి ఆ అపరిచితుని వీపు ఎక్కాడు."]
 ],
 think: ["Ṛbhu kept asking simple questions until Nidāgha lost patience. Why do you think a teacher might ask questions that sound silly?", "నిదాఘుని ఓపిక నశించే వరకూ ఋభువు సులభమైన ప్రశ్నలు అడుగుతూనే ఉన్నాడు. వెర్రి ప్రశ్నల్లా అనిపించేవి ఒక గురువు ఎందుకు అడుగుతాడని మీరు అనుకుంటున్నారు?"]
},
{
 id: "rbh-5", sage: "ribhu", n: 5, order: 4105, date: "2026-11-12",
 title: "“Who Is ‘I’, and Who Is ‘You’?”", titleTe: "“‘నేను’ ఎవరు, ‘నువ్వు’ ఎవరు?”",
 src: "Viṣṇu Purāṇa, Aṃśa 2",
 who: ["ribhu", "nidagha", "jadabharata", "sauvira"],
 pages: [
  [
   ["p", "With {nidagha|Nidāgha} sitting on his back, the stranger did not shake him off or shout. He said quietly: “Good. You have shown me. You are above, like the king; I am below, like the elephant. Now there is just one more thing I do not understand. Tell me — which of us is ‘I,’ and which of us is ‘you’?”", "{nidagha|నిదాఘుడు} తన వీపు మీద కూర్చుని ఉన్నా, ఆ అపరిచితుడు అతన్ని దులిపేయలేదు, అరవలేదు. ప్రశాంతంగా అన్నాడు: “మంచిది. చూపించావు. రాజులా నువ్వు పైన; ఏనుగులా నేను కింద. ఇప్పుడు నాకు అర్థం కానిది ఇంకా ఒక్కటే ఉంది. చెప్పు — మన ఇద్దరిలో ‘నేను’ ఎవరు, ‘నువ్వు’ ఎవరు?”"],
   ["p", "Nidāgha opened his mouth to answer — and could not. The body underneath was a body; the body on top was a body. Where in either of them was the line that made one “I” and the other “you”? It was the very teaching he had once learned. In a flash it was no longer words.", "నిదాఘుడు జవాబు చెప్పడానికి నోరు తెరిచాడు — కానీ చెప్పలేకపోయాడు. కింద ఉన్నదీ ఒక శరీరమే; పైన ఉన్నదీ ఒక శరీరమే. ఒకదాన్ని “నేను”గా, ఇంకోదాన్ని “నువ్వు”గా చేసే గీత ఆ రెండింటిలో ఎక్కడుంది? ఒకప్పుడు తాను నేర్చుకున్న బోధే అది. ఒక్క క్షణంలో అది మాటగా కాక అనుభవంగా మారింది."],
   ["dyk", "🐘", "The king-and-elephant question was never about kings or elephants. “Above” and “below” are only positions of bodies — and so are “I” and “you.”", "రాజు-ఏనుగు ప్రశ్న ఎప్పుడూ రాజుల గురించో ఏనుగుల గురించో కాదు. “పైన”, “కింద” అనేవి శరీరాలు ఉన్న స్థానాలు మాత్రమే — “నేను”, “నువ్వు” కూడా అంతే."]
  ],
  [
   ["h", "“You must be my teacher”", "“మీరు నా గురువే అయి ఉండాలి”"],
   ["p", "Nidāgha slid down at once and fell at the stranger's feet. “You must be my teacher, Ṛbhu!” he cried. “No one else's mind is so steeped in the truth that there is no second. You can only be my guru.”", "నిదాఘుడు వెంటనే కిందికి దిగి అపరిచితుని పాదాల మీద పడ్డాడు. “మీరు నా గురువు ఋభువే అయి ఉండాలి!” అని అరిచాడు. “రెండవది లేదనే సత్యంలో ఇంతగా మునిగిన మనసు మరెవరికీ ఉండదు. మీరు నా గురువే.”"],
   ["p", "“Yes,” said {ribhu|Ṛbhu}. “I am Ṛbhu. You served me faithfully long ago, and out of love for you I came to teach you again. Now you have grasped, in short, the real meaning of things: that all is one, without a second.” And having said this, Ṛbhu went away.", "“అవును,” అన్నాడు {ribhu|ఋభువు}. “నేను ఋభువునే. చాలా కాలం క్రితం నువ్వు నాకు నిష్ఠగా సేవ చేశావు. నీ మీద ప్రేమతో నీకు మళ్ళీ బోధించడానికి వచ్చాను. ఇప్పుడు అన్నిటి అసలు అర్థాన్ని క్లుప్తంగా పట్టుకున్నావు — అంతా ఒక్కటే, రెండవది లేదు.” ఇలా చెప్పి ఋభువు వెళ్ళిపోయాడు."],
   ["p", "This time the lesson held. The Viṣṇu Purāṇa says that from then on Nidāgha saw all beings as not different from himself. He was no longer kind to one and cold to another, impressed by one and scornful of another. And seeing this way, he reached the final freedom.", "ఈసారి పాఠం నిలిచిపోయింది. అప్పటి నుండి నిదాఘుడు సమస్త ప్రాణులనూ తనకంటే వేరు కానివిగా చూశాడని విష్ణు పురాణం చెబుతుంది. ఒకరి పట్ల దయ, ఇంకొకరి పట్ల చులకన; ఒకరిని చూసి ఆశ్చర్యం, ఇంకొకరిని చూసి తిరస్కారం — అవేవీ ఇక లేవు. అలా చూస్తూ అతను పరమ ముక్తిని పొందాడు."]
  ],
  [
   ["h", "Back to the palanquin", "మళ్ళీ పల్లకీ దగ్గరకు"],
   ["p", "Remember who is telling this story: {jadabharata|Jaḍa Bharata}, to the {sauvira|king of Sauvīra}. That king had been carried in a palanquin, with Bharata as one of the bearers, and had scolded him for walking unevenly. He was the king on top; Bharata was the one underneath. Now Bharata turns the story on him: “As Nidāgha learned, so you too, O king, should see that the Self in you and in every creature is the same. Who carries, and who is carried?”", "ఈ కథ చెబుతున్నది ఎవరో గుర్తుంచుకోండి: {jadabharata|జడభరతుడు}, {sauvira|సౌవీర రాజుకు}. ఆ రాజు పల్లకీలో ఊరేగుతుంటే, మోసేవాళ్ళలో భరతుడు ఒకడు; అతను సరిగ్గా నడవడం లేదని రాజు తిట్టాడు. అక్కడ పైన రాజు; కింద భరతుడు. ఇప్పుడు భరతుడు ఈ కథను రాజు వైపే తిప్పుతాడు: “నిదాఘుడు తెలుసుకున్నట్టే, రాజా, నువ్వూ తెలుసుకో — నీలోనూ, ప్రతి ప్రాణిలోనూ ఉన్న ఆత్మ ఒక్కటే. మోసేది ఎవరు, మోయబడేది ఎవరు?”"],
   ["p", "Earlier in his teaching, Bharata had given the king an image. The one air blowing through the holes of a flute comes out as many different notes, each with its own name; yet it is one breath. In the same way the one Self appears as many beings. The king of Sauvīra took this to heart, and the Purāṇa says he too reached freedom.", "అంతకుముందే తన బోధలో భరతుడు రాజుకు ఒక ఉపమానం చెప్పాడు: వేణువు రంధ్రాల గుండా వీచే గాలి ఒక్కటే అయినా, వేర్వేరు పేర్లున్న ఎన్నో స్వరాలుగా బయటికి వస్తుంది; అయినా అది ఒకే ఊపిరి. అలాగే ఒకే ఆత్మ ఎన్నో ప్రాణులుగా కనిపిస్తుంది. సౌవీర రాజు దీన్ని మనసుకు పట్టించుకున్నాడు; అతను కూడా ముక్తి పొందాడని పురాణం చెబుతుంది."],
   ["dyk", "🪈", "The palanquin and the elephant are the same picture: someone on top, someone underneath. Both stories ask the one on top to stop and think.", "పల్లకీ, ఏనుగు — రెండూ ఒకే చిత్రం: పైన ఒకరు, కింద ఒకరు. పైన ఉన్నవాణ్ణి ఆగి ఆలోచించమని రెండు కథలూ అడుగుతాయి."],
   ["src", "Viṣṇu Purāṇa, Aṃśa 2, adhyāya 16 (“which is ‘I’ and which is ‘you’?”; Nidāgha recognizes Ṛbhu; his freedom; Bharata's words to the king of Sauvīra and the king's freedom). The flute image: Viṣṇu Purāṇa, Aṃśa 2, adhyāya 14. The Bhāgavata Purāṇa (Skandha 5) tells Jaḍa Bharata's meeting with King Rahūgaṇa in its own way, but does not include the Ṛbhu story.", "విష్ణు పురాణం, రెండవ అంశం, 16వ అధ్యాయం (“‘నేను’ ఎవరు, ‘నువ్వు’ ఎవరు?”; నిదాఘుడు ఋభువును గుర్తించడం; అతని ముక్తి; సౌవీర రాజుకు భరతుని మాటలు, రాజు ముక్తి). వేణువు ఉపమానం: విష్ణు పురాణం, రెండవ అంశం, 14వ అధ్యాయం. భాగవతం (ఐదవ స్కంధం) జడభరతుడు రహూగణ మహారాజును కలిసిన కథను తనదైన రీతిలో చెబుతుంది, కానీ అందులో ఋభువు కథ లేదు."]
  ]
 ],
 remember: [
  ["{ribhu|Ṛbhu} asked: “Which of us is ‘I’ and which is ‘you’?” — and Nidāgha could not draw the line.", "“మనలో ‘నేను’ ఎవరు, ‘నువ్వు’ ఎవరు?” అని {ribhu|ఋభువు} అడిగాడు — నిదాఘుడు ఆ గీత గీయలేకపోయాడు."],
  ["Nidāgha recognized his teacher, and from then on saw all beings as one with himself.", "నిదాఘుడు గురువును గుర్తించాడు; అప్పటి నుండి అన్ని ప్రాణులనూ తనతో ఒక్కటిగా చూశాడు."],
  ["{jadabharata|Jaḍa Bharata} told this story to the king whose palanquin he carried, and the king too was freed.", "తాను మోసిన పల్లకీలోని రాజుకు {jadabharata|జడభరతుడు} ఈ కథ చెప్పాడు; ఆ రాజు కూడా ముక్తుడయ్యాడు."]
 ],
 think: ["Ṛbhu did not get angry when Nidāgha climbed on his back. He used it to teach. When someone is rude to you, is there a way to answer that helps them see something?", "నిదాఘుడు వీపు ఎక్కినా ఋభువు కోప్పడలేదు; దాన్నే పాఠంగా మార్చాడు. ఎవరైనా మీతో మొరటుగా ప్రవర్తించినప్పుడు, వాళ్ళకు ఏదైనా అర్థమయ్యేలా జవాబివ్వడానికి మార్గం ఉందా?"]
},
{
 id: "rbh-6", sage: "ribhu", n: 6, order: 4106, date: "2026-11-12",
 title: "Ṛbhu and the Great Boar", titleTe: "ఋభువు, వరాహస్వామి",
 src: "Varāha Upaniṣad (a later minor Upaniṣad)",
 who: ["ribhu", "varaha", "vishnu", "nidagha"],
 pages: [
  [
   ["p", "The Viṣṇu Purāṇa says {ribhu|Ṛbhu} was wise by birth. But a later text tells how Ṛbhu himself sought knowledge. This is the Varāha Upaniṣad, one of the many minor Upaniṣads that were composed long after the great early ones and attached to the Kṛṣṇa Yajurveda. It is a later work, and its story of Ṛbhu should be read as such.", "ఋభువు పుట్టుకతోనే జ్ఞాని అని విష్ణు పురాణం చెబుతుంది. కానీ ఋభువే స్వయంగా జ్ఞానం కోసం ఎలా వెతికాడో ఒక తర్వాతి గ్రంథం చెబుతుంది. అదే వరాహోపనిషత్తు — ప్రాచీనమైన ముఖ్య ఉపనిషత్తుల తర్వాత చాలా కాలానికి రచించబడి, కృష్ణ యజుర్వేదానికి జోడించబడిన అనేక చిన్న ఉపనిషత్తులలో ఒకటి. ఇది తర్వాతి కాలపు రచన; అందులో ఋభువు కథను ఆ దృష్టితోనే చదవాలి."],
   ["p", "In it, Ṛbhu sits in tapas for twelve years of the gods. At the end of that long stillness, the Lord appears before him in the form of {varaha|Varāha}, the great Boar — the form in which {vishnu|Viṣṇu} once lifted the Earth from the bottom of the cosmic ocean on his tusks. “Rise,” says Varāha. “Ask for a boon.”", "అందులో ఋభువు పన్నెండు దివ్య సంవత్సరాలు తపస్సు చేస్తాడు. ఆ సుదీర్ఘ నిశ్చలత ముగిసేసరికి, భగవంతుడు {varaha|వరాహ} రూపంలో — ఒకప్పుడు ప్రళయ సముద్రం అడుగు నుండి భూమిని కోరలపై ఎత్తిన {vishnu|విష్ణువు} రూపంలో — అతని ముందు ప్రత్యక్షమవుతాడు. “లే,” అంటాడు వరాహస్వామి. “వరం కోరుకో.”"],
   ["dyk", "🐗", "Why a boar? Varāha dives to the very bottom of the waters to bring up what was lost. The Upaniṣad uses that form to teach Ṛbhu how to bring the Self up out of the depths of forgetting.", "వరాహమే ఎందుకు? పోయినదాన్ని పైకి తేవడానికి వరాహస్వామి నీటి అట్టడుగుకు దూకుతాడు. మరపు అనే లోతుల నుండి ఆత్మను పైకి ఎలా తేవాలో ఋభువుకు నేర్పడానికి ఉపనిషత్తు ఆ రూపాన్నే వాడుకుంటుంది."]
  ],
  [
   ["h", "The boon he asked for", "అతను కోరిన వరం"],
   ["p", "Ṛbhu does not ask for kingdoms, long life or heaven. He says, in effect: “The things people usually want from you — wealth, wives, sons, pleasures — I do not even want to dream of. Teach me the knowledge of Brahman, the knowledge that sets one free.” The Lord is pleased, and the rest of the first part of the Upaniṣad is Varāha's teaching to Ṛbhu.", "ఋభువు రాజ్యాలు, దీర్ఘాయువు, స్వర్గం కోరలేదు. అతను చెప్పిన దాని సారాంశం ఇది: “సాధారణంగా మనుషులు నిన్ను కోరేవి — ధనం, భార్యాపిల్లలు, సుఖాలు — వాటి గురించి కలలో కూడా నాకు కోరిక లేదు. నాకు బ్రహ్మజ్ఞానం నేర్పు — మనిషిని ముక్తుణ్ణి చేసే జ్ఞానం.” భగవంతుడు సంతోషిస్తాడు; ఉపనిషత్తు మొదటి భాగంలో మిగిలినదంతా ఋభువుకు వరాహస్వామి చేసిన బోధే."],
   ["p", "Varāha explains the principles out of which body and world are said to be made — the elements, the senses, the mind and the rest — and shows that the Self is not any of them. It is the witness of them all: pure being, awareness and joy, never born and never ending. He tells Ṛbhu to know himself as that.", "శరీరం, జగత్తు దేనితో తయారయ్యాయని చెబుతారో ఆ తత్త్వాలన్నిటినీ వరాహస్వామి వివరిస్తాడు — పంచభూతాలు, ఇంద్రియాలు, మనసు మొదలైనవి — ఆత్మ వాటిలో ఏదీ కాదని చూపిస్తాడు. అది వాటన్నిటినీ చూసే సాక్షి: సత్, చిత్, ఆనందం; పుట్టుకా లేదు, అంతమూ లేదు. నువ్వు అదేనని తెలుసుకో అని ఋభువుకు చెబుతాడు."]
  ],
  [
   ["h", "The teacher becomes the taught, then the teacher again", "శిష్యుడు, మళ్ళీ గురువు"],
   ["p", "Later in the same Upaniṣad, the scene changes. Now Ṛbhu is the teacher and {nidagha|Nidāgha} is asking the questions — about how one who is free still lives in the world, and about the stages by which knowledge slowly ripens in a seeker. Ṛbhu answers him at length. So the Upaniṣad joins the two halves of Ṛbhu's life: what he received, he passed on.", "అదే ఉపనిషత్తులో తర్వాత దృశ్యం మారుతుంది. ఇప్పుడు ఋభువు గురువు; ప్రశ్నలు అడిగేది {nidagha|నిదాఘుడు} — ముక్తుడైనవాడు లోకంలో ఇంకా ఎలా జీవిస్తాడు, సాధకునిలో జ్ఞానం ఏ మెట్ల ద్వారా నెమ్మదిగా పండుతుంది అని. ఋభువు విపులంగా జవాబిస్తాడు. ఇలా ఉపనిషత్తు ఋభువు జీవితంలోని రెండు భాగాలనూ కలుపుతుంది: తాను పొందినదాన్ని తాను అందించాడు."],
   ["p", "Notice that this does not quite match the Viṣṇu Purāṇa, where Ṛbhu needs no teacher. Different texts, written at different times, honoured Ṛbhu in different ways. The Purāṇa makes him wise from birth; the Upaniṣad makes him a seeker first. Both agree on the main thing: that he became the great teacher of Nidāgha.", "ఇది విష్ణు పురాణంతో పూర్తిగా సరిపోదని గమనించండి — అక్కడ ఋభువుకు గురువు అక్కర్లేదు. వేర్వేరు కాలాల్లో రాసిన వేర్వేరు గ్రంథాలు ఋభువును వేర్వేరు రీతుల్లో గౌరవించాయి. పురాణం అతన్ని పుట్టుకతోనే జ్ఞానిగా చేస్తుంది; ఉపనిషత్తు అతన్ని ముందు సాధకునిగా చూపిస్తుంది. ముఖ్యమైన విషయంలో రెండూ ఏకీభవిస్తాయి: అతను నిదాఘునికి గొప్ప గురువయ్యాడు."],
   ["src", "Varāha Upaniṣad, a minor (later) Upaniṣad of the Kṛṣṇa Yajurveda in the traditional list of 108: Ṛbhu's tapas for twelve divine years, Varāha's appearance and teaching in the first part; Ṛbhu's teaching to Nidāgha in the later parts. Viṣṇu Purāṇa, Aṃśa 2, adhyāya 15, for Ṛbhu as wise by nature. Varāha lifting the Earth: Viṣṇu Purāṇa, Aṃśa 1; Bhāgavata, Skandha 3.", "వరాహోపనిషత్తు — సంప్రదాయ 108 ఉపనిషత్తుల జాబితాలో కృష్ణ యజుర్వేదానికి చెందిన ఒక చిన్న (తర్వాతి కాలపు) ఉపనిషత్తు: మొదటి భాగంలో ఋభువు పన్నెండు దివ్య సంవత్సరాల తపస్సు, వరాహస్వామి ప్రత్యక్షమై బోధించడం; తర్వాతి భాగాల్లో ఋభువు నిదాఘునికి చేసిన బోధ. ఋభువు పుట్టుకతోనే జ్ఞాని అన్నది: విష్ణు పురాణం, రెండవ అంశం, 15వ అధ్యాయం. వరాహస్వామి భూమిని ఎత్తడం: విష్ణు పురాణం, మొదటి అంశం; భాగవతం, మూడవ స్కంధం."]
  ]
 ],
 remember: [
  ["In the later Varāha Upaniṣad, {ribhu|Ṛbhu} does tapas for twelve divine years and {varaha|Varāha} appears.", "తర్వాతి కాలపు వరాహోపనిషత్తులో {ribhu|ఋభువు} పన్నెండు దివ్య సంవత్సరాలు తపస్సు చేయగా {varaha|వరాహస్వామి} ప్రత్యక్షమవుతాడు."],
  ["Ṛbhu asks for no pleasures — only the knowledge of Brahman.", "ఋభువు సుఖాలేవీ కోరలేదు — బ్రహ్మజ్ఞానం ఒక్కటే."],
  ["Later in the same text Ṛbhu teaches Nidāgha what he had received.", "అదే గ్రంథంలో తర్వాత, తాను పొందినదాన్ని ఋభువు నిదాఘునికి బోధిస్తాడు."]
 ],
 think: ["Offered any boon, Ṛbhu asked only for knowledge. If you were offered one wish that could not be money or things, what would you ask for?", "ఏ వరమైనా ఇస్తానంటే ఋభువు జ్ఞానం ఒక్కటే అడిగాడు. డబ్బు, వస్తువులు కాకుండా ఒక్క కోరిక కోరుకోమంటే మీరు ఏం అడుగుతారు?"]
},
{
 id: "rbh-7", sage: "ribhu", n: 7, order: 4107, date: "2026-11-12",
 title: "The Song at Kedāra — the Ṛbhu Gītā", titleTe: "కేదారంలో గానం — ఋభు గీత",
 src: "Śivarahasya (later work)",
 who: ["ribhu", "nidagha", "shiva"],
 pages: [
  [
   ["p", "There is a long poem that bears Ṛbhu's name: the Ṛbhu Gītā, “the Song of Ṛbhu.” It is found in the Śivarahasya, a large work devoted to {shiva|Śiva} that is counted among the later Purāṇa-like texts (an itihāsa or upapurāṇa, as tradition variously calls it). It is much later than the Viṣṇu Purāṇa, and we should say so plainly.", "ఋభువు పేరుతో ఒక పెద్ద కావ్యం ఉంది — ఋభు గీత, “ఋభువు పాడిన గీతం.” ఇది {shiva|శివునికి} అంకితమైన శివరహస్యం అనే పెద్ద గ్రంథంలో ఉంది. సంప్రదాయం దాన్ని ఇతిహాసమనీ, ఉపపురాణమనీ రకరకాలుగా పిలుస్తుంది; అది తర్వాతి కాలపు పురాణ తరహా గ్రంథాలలో ఒకటి. విష్ణు పురాణం కంటే చాలా తర్వాతిది — ఈ మాట స్పష్టంగా చెప్పుకోవాలి."],
   ["p", "In the Ṛbhu Gītā, Ṛbhu is again a son of Brahmā. He goes to Mount Kailāsa and learns the highest truth from Śiva himself. Later, his pupil {nidagha|Nidāgha} comes to him at Kedāra, in the high Himālayas, and asks to be taught. Ṛbhu then sings to him what he heard from Śiva — chapter after chapter.", "ఋభు గీతలో కూడా ఋభువు బ్రహ్మ కుమారుడే. అతను కైలాస పర్వతానికి వెళ్ళి స్వయంగా శివుని దగ్గర పరమ సత్యం నేర్చుకుంటాడు. తర్వాత అతని శిష్యుడు {nidagha|నిదాఘుడు} ఎత్తైన హిమాలయాల్లోని కేదారంలో అతని దగ్గరకు వచ్చి బోధించమని అడుగుతాడు. అప్పుడు శివుని నుండి తాను విన్నదాన్ని ఋభువు అధ్యాయం తర్వాత అధ్యాయంగా అతనికి గానం చేస్తాడు."],
   ["dyk", "🏔️", "So in the Viṣṇu Purāṇa Ṛbhu is a teacher of the Vaiṣṇava tradition, and in the Ṛbhu Gītā he is a teacher of the Śaiva tradition. Both traditions wanted him — because the teaching of the one Self belongs to everyone.", "విష్ణు పురాణంలో ఋభువు వైష్ణవ సంప్రదాయపు గురువు; ఋభు గీతలో శైవ సంప్రదాయపు గురువు. రెండు సంప్రదాయాలూ అతన్ని తమవాడిగా కోరుకున్నాయి — ఎందుకంటే ఒకే ఆత్మ అనే బోధ అందరిదీ."]
  ],
  [
   ["h", "“All is Brahman”", "“అంతా బ్రహ్మమే”"],
   ["p", "The Ṛbhu Gītā says the same thing again and again, in hundreds of different ways, like waves breaking on a shore: there is only Brahman. The world is Brahman; the mind is Brahman; you are Brahman; I am Brahman; there is nothing that is not Brahman. Whatever seems separate is only a name and a form laid over the one reality.", "ఋభు గీత ఒకే విషయాన్ని మళ్ళీ మళ్ళీ, వందల రకాలుగా — ఒడ్డున విరిగే అలల్లా — చెబుతుంది: ఉన్నది బ్రహ్మం ఒక్కటే. జగత్తు బ్రహ్మం; మనసు బ్రహ్మం; నువ్వు బ్రహ్మం; నేను బ్రహ్మం; బ్రహ్మం కానిదేదీ లేదు. విడిగా కనిపించేదంతా ఆ ఒక్క సత్యం మీద పెట్టిన పేరు, రూపం మాత్రమే."],
   ["p", "The repetition is the point. A reader who stays with it finds that the constant return to one idea quiets the mind, the way a lullaby does. The poem is meant less to be argued with than to be soaked in.", "ఆ పునరావృత్తే అసలు ఉద్దేశం. దానితో పాటు ఉండే పాఠకునికి, ఒకే భావనకు మళ్ళీ మళ్ళీ తిరిగి రావడం జోలపాటలా మనసును నెమ్మదింపజేస్తుందని తెలుస్తుంది. ఈ కావ్యం వాదించడానికి కంటే, అందులో నానడానికి ఉద్దేశించినది."]
  ],
  [
   ["h", "Knowledge and devotion together", "జ్ఞానం, భక్తి కలిసి"],
   ["p", "Alongside its high teaching, the Ṛbhu Gītā keeps a warm devotion to Śiva. It praises the worship of Śiva and the sacred ash and the five-syllable mantra, and it treats the knower of Brahman and the devotee of Śiva as walking one road. At the end, Nidāgha declares that his doubts are gone and bows to his teacher.", "ఉన్నతమైన బోధతో పాటు, ఋభు గీత శివుని పట్ల గాఢమైన భక్తిని కూడా నిలుపుకుంటుంది. శివారాధనను, విభూతిని, పంచాక్షరీ మంత్రాన్ని కీర్తిస్తుంది; బ్రహ్మజ్ఞానీ, శివభక్తుడూ ఒకే దారిలో నడుస్తున్నారని భావిస్తుంది. చివరకు తన సందేహాలన్నీ పోయాయని నిదాఘుడు ప్రకటించి గురువుకు నమస్కరిస్తాడు."],
   ["p", "Notice how different this Nidāgha is from the one in the Viṣṇu Purāṇa. There, he is a forgetful householder who needs two surprise visits and climbs on his teacher's back. Here, he is an eager seeker sitting at his teacher's feet. The older story is the more human one; the later poem keeps only the teaching.", "విష్ణు పురాణంలోని నిదాఘునికీ ఇక్కడి నిదాఘునికీ ఎంత తేడా ఉందో చూడండి. అక్కడ అతను మరచిపోయే గృహస్థు — రెండుసార్లు గురువు అనుకోకుండా రావలసి వచ్చింది, గురువు వీపు కూడా ఎక్కాడు. ఇక్కడ గురువు పాదాల దగ్గర కూర్చున్న ఉత్సాహం గల జిజ్ఞాసువు. పాత కథ ఎక్కువ మానవీయమైనది; తర్వాతి కావ్యం బోధను మాత్రమే నిలుపుకుంది."],
   ["src", "Ṛbhu Gītā, in the Śivarahasya (Śiva Rahasya), a later Śaiva work; it is often printed and read on its own. Ṛbhu learns from Śiva on Kailāsa and teaches Nidāgha at Kedāra. Compare the Viṣṇu Purāṇa, Aṃśa 2, adhyāyas 15–16, for the older story.", "ఋభు గీత — తర్వాతి కాలపు శైవ గ్రంథమైన శివరహస్యంలో భాగం; తరచుగా విడిగా ముద్రించి చదువుతారు. ఋభువు కైలాసంలో శివుని దగ్గర నేర్చుకుని కేదారంలో నిదాఘునికి బోధిస్తాడు. పాత కథ కోసం విష్ణు పురాణం, రెండవ అంశం, 15–16 అధ్యాయాలతో పోల్చండి."]
  ]
 ],
 remember: [
  ["The Ṛbhu Gītā is a later Śaiva poem in the Śivarahasya.", "ఋభు గీత శివరహస్యంలోని తర్వాతి కాలపు శైవ కావ్యం."],
  ["There {ribhu|Ṛbhu} learns from {shiva|Śiva} on Kailāsa and teaches Nidāgha at Kedāra.", "అందులో {ribhu|ఋభువు} కైలాసంలో {shiva|శివుని} దగ్గర నేర్చుకుని కేదారంలో నిదాఘునికి బోధిస్తాడు."],
  ["Its one refrain, repeated endlessly: all is Brahman.", "అది అంతులేకుండా మళ్ళీ మళ్ళీ చెప్పే ఒకే మాట: అంతా బ్రహ్మమే."]
 ],
 think: ["The Ṛbhu Gītā repeats one idea hundreds of times. Is there something you say or hear again and again that has slowly changed you?", "ఋభు గీత ఒకే భావనను వందలసార్లు చెబుతుంది. మీరు మళ్ళీ మళ్ళీ చెప్పే లేదా వినే ఏదైనా మాట మిమ్మల్ని నెమ్మదిగా మార్చిందా?"]
},
{
 id: "rbh-8", sage: "ribhu", n: 8, order: 4108, date: "2026-11-12",
 title: "The Other Ṛbhus — Craftsmen of the Ṛgveda", titleTe: "మరో ఋభువులు — ఋగ్వేద శిల్పులు",
 src: "Ṛgveda 1.161, 4.33–37 · Bhāgavata 4",
 who: ["ribhus", "sudhanvan_v", "indra", "ashvins", "brihaspati", "tvashta", "agni", "vamadeva", "bhrigu"],
 pages: [
  [
   ["p", "If you open the Ṛgveda looking for {ribhu|Ṛbhu} the teacher of Nidāgha, you will not find him. But you will find the word Ṛbhu many times — for a different set of beings altogether. They are {ribhus|the Ṛbhus}: three brothers named Ṛbhu (also called Ṛbhukṣan), Vāja and Vibhvan, the sons of {sudhanvan_v|Sudhanvan}. They are not teachers of the Self. They are craftsmen — the most skilful hands in the Veda.", "నిదాఘుని గురువైన {ribhu|ఋభువు} కోసం ఋగ్వేదం తెరిస్తే, అతను కనిపించడు. కానీ “ఋభు” అనే మాట చాలాసార్లు కనిపిస్తుంది — పూర్తిగా వేరే వారి కోసం. వారే {ribhus|ఋభువులు}: {sudhanvan_v|సుధన్వుని} కుమారులైన ముగ్గురు సోదరులు — ఋభు (ఋభుక్షుడు అని కూడా), వాజుడు, విభ్వుడు. వీరు ఆత్మజ్ఞాన గురువులు కారు. శిల్పులు — వేదంలోనే అత్యంత నేర్పరి చేతులు."],
   ["p", "They were born mortal, yet by their work they won a place among the gods. The Ṛgveda praises them for wonderful things they made: they fashioned the two bay horses that draw {indra|Indra}'s chariot; they built the three-wheeled chariot of {ashvins|the Aśvins} that runs without horses; they brought forth a cow for {brihaspati|Bṛhaspati}; and they made their old, worn-out parents young again.", "వారు మనుషులుగా పుట్టారు; అయినా తమ పనితనంతో దేవతల మధ్య స్థానం సంపాదించారు. వారు చేసిన అద్భుతాల కోసం ఋగ్వేదం వారిని కీర్తిస్తుంది: {indra|ఇంద్రుని} రథాన్ని లాగే రెండు గుర్రాలను మలిచారు; గుర్రాలు లేకుండానే పరుగెత్తే {ashvins|అశ్వినుల} మూడు చక్రాల రథాన్ని నిర్మించారు; {brihaspati|బృహస్పతికి} ఒక ఆవును సృష్టించారు; ముసలితనంతో అలసిపోయిన తమ తల్లిదండ్రులను మళ్ళీ యువకులుగా చేశారు."],
   ["dyk", "🔤", "Remember: ṛbhu means “skilful.” For these three brothers the name fits perfectly. For Ṛbhu the teacher, the skill is of a different kind — the skill of opening a pupil's eyes.", "గుర్తుంచుకోండి: “ఋభు” అంటే నేర్పరి. ఈ ముగ్గురు సోదరులకు ఆ పేరు సరిగ్గా సరిపోతుంది. గురువైన ఋభువుది వేరే రకం నైపుణ్యం — శిష్యుని కళ్ళు తెరిపించే నైపుణ్యం."]
  ],
  [
   ["h", "One cup into four", "ఒక పాత్ర నాలుగు"],
   ["p", "Their most famous deed is told in a hymn of the first book of the Ṛgveda. The gods sent {agni|Agni} to them as a messenger with a challenge. {tvashta|Tvaṣṭṛ}, the divine smith, had made a single cup for drinking soma. Could they make it into four? The Ṛbhus took the one cup and made four cups out of it.", "వారి అత్యంత ప్రసిద్ధ కార్యం ఋగ్వేదం మొదటి మండలంలోని ఒక సూక్తంలో ఉంది. దేవతలు {agni|అగ్నిని} దూతగా వారి దగ్గరకు ఒక సవాలుతో పంపారు. దివ్య శిల్పి {tvashta|త్వష్ట} సోమం తాగడానికి ఒకే పాత్ర చేశాడు. దాన్ని నాలుగుగా చేయగలరా? ఋభువులు ఆ ఒక్క పాత్రను తీసుకుని దానితో నాలుగు పాత్రలు చేశారు."],
   ["p", "For this they were given immortality and a share of the soma at the sacrifice, at the third pressing of the day, together with Indra. Some verses hint that Tvaṣṭṛ was not pleased to see his single cup outdone. The Ṛgveda also says the brothers rested for twelve days in the house of one called Agohya, “the one who cannot be hidden” — which many have understood as the Sun, and as the twelve extra days that close the year.", "అందుకు వారికి అమరత్వమూ, యజ్ఞంలో రోజు మూడవ సవనంలో ఇంద్రునితో కలిసి సోమంలో భాగమూ లభించాయి. తన ఒక్క పాత్రను మించిపోయినందుకు త్వష్ట సంతోషించలేదని కొన్ని మంత్రాలు సూచిస్తాయి. అగోహ్యుడు — “దాచలేనివాడు” — అనేవాని ఇంట్లో ఆ సోదరులు పన్నెండు రోజులు విశ్రమించారని కూడా ఋగ్వేదం చెబుతుంది. చాలామంది దాన్ని సూర్యునిగా, సంవత్సరం చివరి పన్నెండు అదనపు రోజులుగా అర్థం చేసుకున్నారు."]
  ],
  [
   ["h", "Vāmadeva's hymns", "వామదేవుని సూక్తాలు"],
   ["p", "A whole group of hymns to the Ṛbhus stands in the fourth book of the Ṛgveda, the book of the seer {vamadeva|Vāmadeva}. There they are praised as makers of good things, and as men who became gods by doing their work well. The Veda honours skill of hand as something holy.", "ఋభువులకు అంకితమైన సూక్తాల సమూహం ఒకటి ఋగ్వేదం నాలుగవ మండలంలో — {vamadeva|వామదేవ} ఋషి మండలంలో — ఉంది. అక్కడ వారిని మంచి వస్తువుల సృష్టికర్తలనీ, తమ పనిని చక్కగా చేయడం వల్లనే దేవతలైన మనుషులనీ కీర్తిస్తారు. చేతి నైపుణ్యాన్ని వేదం పవిత్రమైనదిగా గౌరవిస్తుంది."],
   ["p", "There is yet a third use of the name. The Bhāgavata Purāṇa says that when Śiva's attendants stormed Dakṣa's sacrifice, the sage {bhrigu|Bhṛgu} poured offerings into the fire, and out of it rose shining beings called Ṛbhus who drove the attackers away. These too are not our Ṛbhu. Three different stories share one name; it is worth keeping them apart.", "ఈ పేరుకు మూడవ వాడుక కూడా ఉంది. శివ గణాలు దక్షుని యజ్ఞం మీద దాడి చేసినప్పుడు {bhrigu|భృగు} మహర్షి అగ్నిలో ఆహుతులు వేయగా, అందులో నుండి ఋభువులనే తేజస్వులు పుట్టి దాడి చేసినవారిని తరిమికొట్టారని భాగవతం చెబుతుంది. వీరూ మన ఋభువు కారు. మూడు వేర్వేరు కథలకు ఒకే పేరు; వాటిని వేరువేరుగా గుర్తుంచుకోవడం మంచిది."],
   ["sglink", "Bhṛgu at Dakṣa's sacrifice", "దక్ష యజ్ఞంలో భృగువు", "bh-7"],
   ["src", "Ṛgveda 1.161 (the four cups, Agni as messenger, Tvaṣṭṛ); Ṛgveda 4.33–37 (Vāmadeva's hymns to the Ṛbhus: Indra's horses, the Aśvins' chariot, Bṛhaspati's cow, the parents made young, immortality); also Ṛgveda 1.20, 1.110–111. The twelve days with Agohya: Ṛgveda 1.161 and 4.33. The Ṛbhus from Bhṛgu's fire: Bhāgavata Purāṇa, Skandha 4. These are separate from Ṛbhu the teacher of Nidāgha.", "ఋగ్వేదం 1.161 (నాలుగు పాత్రలు, దూతగా అగ్ని, త్వష్ట); ఋగ్వేదం 4.33–37 (ఋభువులపై వామదేవుని సూక్తాలు: ఇంద్రుని గుర్రాలు, అశ్వినుల రథం, బృహస్పతి ఆవు, తల్లిదండ్రులను యువకులుగా చేయడం, అమరత్వం); ఋగ్వేదం 1.20, 1.110–111 కూడా. అగోహ్యుని ఇంట పన్నెండు రోజులు: ఋగ్వేదం 1.161, 4.33. భృగువు అగ్ని నుండి పుట్టిన ఋభువులు: భాగవతం, నాలుగవ స్కంధం. వీరంతా నిదాఘుని గురువైన ఋభువు కంటే వేరు."]
  ]
 ],
 remember: [
  ["The Vedic {ribhus|Ṛbhus} are three craftsman brothers, sons of Sudhanvan — not Nidāgha's teacher.", "వైదిక {ribhus|ఋభువులు} సుధన్వుని కుమారులైన ముగ్గురు శిల్పి సోదరులు — నిదాఘుని గురువు కారు."],
  ["They made Indra's horses, the Aśvins' chariot, and four cups out of Tvaṣṭṛ's one.", "ఇంద్రుని గుర్రాలను, అశ్వినుల రథాన్ని, త్వష్ట ఒక్క పాత్రతో నాలుగు పాత్రలను చేశారు."],
  ["By their skill they won immortality and a share of the soma.", "తమ నైపుణ్యంతో అమరత్వాన్నీ, సోమంలో భాగాన్నీ పొందారు."]
 ],
 think: ["The Vedic Ṛbhus became gods by doing their work beautifully. Can doing ordinary work very well be a kind of worship?", "వైదిక ఋభువులు తమ పనిని అందంగా చేయడం వల్లే దేవతలయ్యారు. మామూలు పనిని చాలా చక్కగా చేయడం కూడా ఒక రకమైన పూజ కాగలదా?"]
},
{
 id: "rbh-9", sage: "ribhu", n: 9, order: 4109, date: "2026-11-12",
 title: "What Ṛbhu and Nidāgha Leave Us", titleTe: "ఋభువు, నిదాఘుడు మనకు మిగిల్చినవి",
 src: "Viṣṇu Purāṇa · Tejobindu Upaniṣad · tradition",
 who: ["ribhu", "nidagha", "pulastya", "jadabharata"],
 pages: [
  [
   ["p", "{ribhu|Ṛbhu} and {nidagha|Nidāgha} became a pair, the way Kṛṣṇa and Arjuna are a pair or Yājñavalkya and Maitreyī. Wherever later writers wanted a teacher and a pupil to talk about the one Self, they often reached for these two names. Besides the Varāha Upaniṣad and the Ṛbhu Gītā, other later minor Upaniṣads — the Tejobindu among them — also set parts of their teaching as Nidāgha asking and Ṛbhu answering.", "{ribhu|ఋభువు}, {nidagha|నిదాఘుడు} ఒక జంటగా నిలిచిపోయారు — కృష్ణార్జునులు, యాజ్ఞవల్క్య-మైత్రేయిల్లాగా. ఒకే ఆత్మ గురించి ఒక గురువూ శిష్యుడూ మాట్లాడుకునేలా రాయాలనుకున్న తర్వాతి రచయితలు తరచుగా ఈ రెండు పేర్లనే తీసుకున్నారు. వరాహోపనిషత్తు, ఋభు గీతలతో పాటు తేజోబిందు వంటి మరికొన్ని తర్వాతి చిన్న ఉపనిషత్తులు కూడా తమ బోధలో కొంత భాగాన్ని నిదాఘుడు అడగడం, ఋభువు జవాబివ్వడం రూపంలో చెబుతాయి."],
   ["p", "In the twentieth century, Ramaṇa Maharṣi of Tiruvaṇṇāmalai was fond of the king-and-elephant story and told it to visitors, and he held the Ṛbhu Gītā in high regard; it was often read aloud in his presence. So a story first told by Jaḍa Bharata to a king carrying him in a palanquin went on teaching, more than a thousand years later, in a small āśrama at the foot of Aruṇācala.", "ఇరవయ్యవ శతాబ్దంలో తిరువణ్ణామలైకి చెందిన రమణ మహర్షికి రాజు-ఏనుగు కథ అంటే ఇష్టం; వచ్చినవారికి దాన్ని చెప్పేవారు. ఋభు గీతను ఆయన ఎంతో గౌరవించారు; ఆయన సన్నిధిలో దాన్ని తరచుగా పారాయణ చేసేవారు. అంటే — పల్లకీలో ఊరేగుతున్న రాజుకు జడభరతుడు మొదట చెప్పిన కథ, వెయ్యి సంవత్సరాలకు పైగా తర్వాత అరుణాచలం పాదాల దగ్గర ఒక చిన్న ఆశ్రమంలో ఇంకా బోధిస్తూనే ఉంది."],
   ["dyk", "🗻", "Aruṇācala is the holy hill at Tiruvaṇṇāmalai in Tamil Nadu, worshipped as a form of Śiva himself.", "అరుణాచలం తమిళనాడులోని తిరువణ్ణామలైలో ఉన్న పవిత్ర కొండ; దాన్ని సాక్షాత్తూ శివుని రూపంగా పూజిస్తారు."]
  ],
  [
   ["h", "The patient teacher", "ఓర్పుగల గురువు"],
   ["p", "What makes Ṛbhu great is not that he knew the truth. Many sages knew it. It is that he did not give up on a pupil who had forgotten it. He did not send a letter of rebuke. He came himself, more than once, put up with being fed and questioned and even climbed upon, and each time found a way to turn the moment into the lesson.", "ఋభువు గొప్పతనం సత్యం తెలిసి ఉండటంలో లేదు. అది ఎందరో మునులకు తెలుసు. దాన్ని మరచిపోయిన శిష్యుణ్ణి వదిలిపెట్టకపోవడంలో ఉంది. మందలిస్తూ కబురు పంపలేదు. తానే వచ్చాడు, ఒకటికంటే ఎక్కువసార్లు; అన్నం పెట్టించుకున్నాడు, ప్రశ్నలు వేయించుకున్నాడు, వీపు కూడా ఎక్కించుకున్నాడు — ప్రతిసారీ ఆ క్షణాన్నే పాఠంగా మార్చే దారి కనుగొన్నాడు."],
   ["p", "And he taught in the middle of life, not in a quiet forest. A meal at the door. A crowd at the city gate. A king on an elephant. The lesson is that the one Self is not seen only in meditation — it must be seen in the dining room and in the street, or it has not really been seen at all.", "అతను బోధించింది ప్రశాంతమైన అడవిలో కాదు, జీవితం మధ్యలో. గుమ్మం దగ్గర భోజనం. పట్టణ ద్వారం దగ్గర జనం. ఏనుగు మీద రాజు. పాఠం ఇది: ఒకే ఆత్మ ధ్యానంలో మాత్రమే కనిపించేది కాదు — భోజనాల గదిలోనూ, వీధిలోనూ కనిపించాలి; లేకపోతే అది నిజంగా కనిపించనట్టే."]
  ],
  [
   ["h", "The pupil who forgot", "మరచిపోయిన శిష్యుడు"],
   ["p", "Nidāgha is not a hero who gets everything right. He learns, forgets, plays the perfect host, loses his temper, climbs on a stranger's back — and finally understands. That honesty is a gift. Anyone who has learned something good and then slipped back into old habits can see themselves in him, and can take heart: the teacher keeps coming back.", "నిదాఘుడు అన్నీ సరిగ్గా చేసే వీరుడు కాదు. నేర్చుకుంటాడు, మరచిపోతాడు, చక్కని ఆతిథ్యం ఇస్తాడు, కోపం తెచ్చుకుంటాడు, అపరిచితుని వీపు ఎక్కుతాడు — చివరకు అర్థం చేసుకుంటాడు. ఆ నిజాయితీ ఒక వరం. ఏదైనా మంచిది నేర్చుకుని మళ్ళీ పాత అలవాట్లలోకి జారిపోయిన ఎవరైనా అతనిలో తమను చూసుకోవచ్చు, ధైర్యం తెచ్చుకోవచ్చు: గురువు మళ్ళీ మళ్ళీ వస్తూనే ఉంటాడు."],
   ["p", "So when you next see someone riding high and someone carrying the load — on an elephant, in a palanquin, in an office or a classroom — you might hear Ṛbhu's quiet question: “Which is above, and which is below? Which is ‘I’, and which is ‘you’?”", "కాబట్టి ఇకపై ఎవరైనా ఎత్తులో ఊరేగుతూ, ఇంకెవరో బరువు మోస్తూ కనిపిస్తే — ఏనుగు మీదైనా, పల్లకీలోనైనా, ఆఫీసులోనైనా, తరగతి గదిలోనైనా — ఋభువు నెమ్మదిగా అడిగే ప్రశ్న మీకు వినిపించవచ్చు: “ఏది పైన, ఏది కింద? ‘నేను’ ఎవరు, ‘నువ్వు’ ఎవరు?”"],
   ["dyk", "🌞", "Nidāgha's name means summer heat. By the end, the heat of “I am above you” has cooled into the shade of “we are one.”", "నిదాఘుడు అంటే వేసవి వేడి. కథ ముగిసేసరికి “నేను నీకంటే పైన” అనే వేడి చల్లారి, “మనం ఒక్కటే” అనే నీడగా మారింది."],
   ["src", "Viṣṇu Purāṇa, Aṃśa 2, adhyāyas 15–16 (the two visits). Tejobindu Upaniṣad and Varāha Upaniṣad, later minor Upaniṣads of the Kṛṣṇa Yajurveda, which set teachings as dialogues of Ṛbhu and Nidāgha. Ṛbhu Gītā, in the Śivarahasya. Ramaṇa Maharṣi's regard for the story and the Ṛbhu Gītā is recorded by those who lived with him (modern, twentieth century).", "విష్ణు పురాణం, రెండవ అంశం, 15–16 అధ్యాయాలు (రెండు సందర్శనలు). తేజోబిందు ఉపనిషత్తు, వరాహోపనిషత్తు — కృష్ణ యజుర్వేదానికి చెందిన తర్వాతి కాలపు చిన్న ఉపనిషత్తులు; వాటిలో బోధలు ఋభు-నిదాఘ సంవాదంగా ఉన్నాయి. ఋభు గీత — శివరహస్యంలో. ఈ కథ పట్ల, ఋభు గీత పట్ల రమణ మహర్షికి ఉన్న గౌరవాన్ని ఆయనతో ఉన్నవారు నమోదు చేశారు (ఆధునిక కాలం, ఇరవయ్యవ శతాబ్దం)."]
  ]
 ],
 remember: [
  ["{ribhu|Ṛbhu} and {nidagha|Nidāgha} became the classic teacher-and-pupil pair for later Upaniṣads.", "తర్వాతి ఉపనిషత్తులకు {ribhu|ఋభువు}, {nidagha|నిదాఘుడు} ఆదర్శ గురుశిష్య జంటగా నిలిచారు."],
  ["Ṛbhu's greatness was his patience: he kept coming back to a pupil who forgot.", "ఋభువు గొప్పతనం అతని ఓర్పు: మరచిపోయే శిష్యుని దగ్గరకు మళ్ళీ మళ్ళీ వచ్చాడు."],
  ["He taught in daily life — at a meal, at a city gate — that the Self in all is one.", "అందరిలో ఆత్మ ఒక్కటే అని అతను రోజువారీ జీవితంలోనే — భోజనం దగ్గర, పట్టణ ద్వారం దగ్గర — బోధించాడు."]
 ],
 think: ["Ṛbhu came back for his pupil again and again. Who in your life has been patient with you when you forgot something important? How could you be that for someone else?", "ఋభువు తన శిష్యుని కోసం మళ్ళీ మళ్ళీ వచ్చాడు. ముఖ్యమైనది మీరు మరచిపోయినప్పుడు మీ పట్ల ఓర్పుగా ఉన్నవారు మీ జీవితంలో ఎవరు? మీరు మరొకరికి అలా ఎలా ఉండగలరు?"]
}
]);
