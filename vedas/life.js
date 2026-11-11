// The Vedas — Book 6: The Vedas in Our Life. Written by Hari Pokkuluri.
// Where the Vedas still touch a Hindu — and especially a Telugu — family's day and life, told in plain words
// from the Saṃhitās, Brāhmaṇas, Āraṇyakas, Upaniṣads, gṛhya and dharma sūtras and present-day practice,
// in fresh original wording. No verse blocks (Hari's request). Block format: see ramayana.js and vedas.js.
window.VEDA_PLAN = Object.assign(window.VEDA_PLAN || {}, { life: [
  ["A Morning in a Vedic Home", "Present-day family practice · Atharvaveda 12.1 · Ṛgveda 1.113"],
  ["Sandhyāvandanam — Meeting the Light Three Times a Day", "Taittirīya Āraṇyaka 2.2 · Ṛgveda 3.62.10"],
  ["Sixteen Steps Through Life — the Saṃskāras", "Gṛhya sūtras · Gautama Dharmasūtra 8"],
  ["Upanayanam — the Second Birth", "Gṛhya sūtras · Atharvaveda 11.5"],
  ["The Wedding — Seven Steps Around the Fire", "Ṛgveda 10.85 · Āpastamba Gṛhya Sūtra"],
  ["Farewell and Remembrance — the Last Rites and the Ancestors", "Ṛgveda 10.14–18 · śrāddha and tarpaṇa"],
  ["Gotra and Pravara — Who We Are", "Pravara lists of the śrauta sūtras · abhivādana"],
  ["The Temple, the Saṅkalpa and the Pañcāṅgam", "Taittirīya Āraṇyaka 1.22 · Vedāṅga Jyotiṣa"],
  ["Gifts of the Vedas to the World", "Vedāṅgas and Upavedas · Śulba Sūtras · Pāṇini"],
  ["How the Vedas Teach Us to Live", "Ṛgveda 1.89.1 · 1.164.46 · 10.191 · Taittirīya Upaniṣad 1.11"],
  ["How to Begin — and Why It Matters", "Present-day learning paths"]
] });
window.RMY_WHO = Object.assign({
  "mandehas": { "av": "👹", "en": "The Mandehas", "te": "మందేహులు", "d": "In the Taittirīya Āraṇyaka, demons said to attack the rising and setting sun; the water offered at sandhyā is pictured as weapons that drive them away.", "dt": "తైత్తిరీయ ఆరణ్యకంలో ఉదయించే, అస్తమించే సూర్యునిపై దాడి చేస్తారని చెప్పే రాక్షసులు. సంధ్యలో ఇచ్చే అర్ఘ్య జలం వారిని తరిమే ఆయుధాలుగా చిత్రించబడింది." }
}, window.RMY_WHO || {});
window.VEDA_CHAPTERS = (window.VEDA_CHAPTERS || []).concat([
{
 id: "vl-1", book: "life", n: 1, order: 601, date: "2026-10-22",
 title: "A Morning in a Vedic Home", titleTe: "వైదిక గృహంలో ఒక ఉదయం",
 src: "Present-day family practice · Atharvaveda 12.1 · Ṛgveda 1.113",
 who: ["bhudevi", "ushas", "surya"],
 pages: [
  [
   ["p", "You have now read about the four Vedas — the Ṛgveda's hymns, the Yajurveda's rites, the Sāmaveda's songs and the Atharvaveda's prayers for daily life. You might think: all this is very old and very far away. But it is not. The Vedas are woven into the ordinary day of a Hindu family so closely that we hardly notice them. This last book is about finding them — in your own home.", "మీరు ఇప్పుడు నాలుగు వేదాల గురించి చదివారు — ఋగ్వేద సూక్తాలు, యజుర్వేద కర్మలు, సామవేద గానాలు, నిత్య జీవితం కోసం అథర్వవేద ప్రార్థనలు. ఇదంతా చాలా పాతది, చాలా దూరమైనది అని అనుకోవచ్చు. కానీ కాదు. వేదాలు హిందూ కుటుంబపు సాధారణ రోజులో ఎంత దగ్గరగా అల్లుకుపోయాయంటే, మనం వాటిని గమనించనే గమనించం. ఈ చివరి పుస్తకం వాటిని కనుగొనడం గురించి — మీ సొంత ఇంట్లోనే."],
   ["p", "Picture a Telugu home just before sunrise. A grandmother wakes, sits up, and before her feet touch the floor she touches the ground with her fingers and then her eyes, asking Mother Earth to forgive her for stepping on her. That is the feeling of the Atharvaveda's Bhūmi Sūkta, alive in a three-second habit.", "సూర్యోదయానికి ముందు ఒక తెలుగు ఇంటిని ఊహించుకోండి. ఒక నాయనమ్మ నిద్రలేచి, కూర్చుని, పాదాలు నేలకు తాకే ముందే వేళ్ళతో నేలను తాకి కళ్ళకు అద్దుకుంటుంది — తనను తొక్కుతున్నందుకు క్షమించమని భూమాతను అడుగుతూ. అథర్వవేదపు భూమి సూక్తపు భావం అది, మూడు సెకన్ల అలవాటులో సజీవంగా."],
   ["vdlink", "The Earth is my mother — the Bhūmi Sūkta", "భూమి నా తల్లి — భూమి సూక్తం", "va2-5"]
  ],
  [
   ["h", "Dawn", "తెల్లవారుజాము"],
   ["p", "The hour before sunrise is called *brāhma muhūrta* — the best time for prayer and study. In the Ṛgveda, this is the hour of {ushas|Uṣas}, the Dawn, who wakes every living thing and sends each one off to its work. Someone sweeps the front yard and sprinkles it with water, and draws a *muggu* in rice flour at the door — a welcome for the goddess Lakṣmī, and food for the ants. Someone lights the lamp in the pūjā room. Someone, perhaps, faces the rising {surya|Sun} and offers water from cupped hands.", "సూర్యోదయానికి ముందు గంటను *బ్రాహ్మ ముహూర్తం* అంటారు — ప్రార్థనకూ చదువుకూ అత్యుత్తమ సమయం. ఋగ్వేదంలో ఇది {ushas|ఉషోదేవి} సమయం — ప్రతి ప్రాణినీ నిద్రలేపి, దాని దాని పనికి పంపే తెలివెలుగు. ఎవరో ముంగిలి ఊడ్చి కళ్ళాపి చల్లి, గుమ్మం ముందు బియ్యప్పిండితో *ముగ్గు* వేస్తారు — లక్ష్మీదేవికి స్వాగతం, చీమలకు ఆహారం. ఎవరో పూజ గదిలో దీపం వెలిగిస్తారు. ఎవరో, బహుశా, ఉదయిస్తున్న {surya|సూర్యుని} వైపు తిరిగి దోసిలితో నీళ్ళు అర్పిస్తారు."],
   ["p", "Each of these is a tiny Vedic yajña. The lamp is the household fire. The water to the sun is the oldest offering of all. The muggu that feeds the ants is the daily yajña for all living beings. Nobody needs to explain this to a child; the child simply grows up inside it.", "వీటిలో ప్రతి ఒక్కటీ చిన్న వైదిక యజ్ఞమే. దీపం గృహాగ్ని. సూర్యునికి నీళ్ళు అన్నిటికంటే పాత అర్పణ. చీమలకు ఆహారమిచ్చే ముగ్గు అన్ని ప్రాణుల కోసం చేసే నిత్య యజ్ఞం. ఇది పిల్లలకు ఎవరూ వివరించాల్సిన అవసరం లేదు; పిల్లలు దాని లోపలే పెరుగుతారు."],
   ["dyk", "🪔", "The word *dīpa*, lamp, and the habit of lighting one at dawn and dusk echo the Vedic agnihotra — the householder's offering into the fire at sunrise and sunset.", "*దీపం* అనే మాటా, తెల్లవారుజామునా సంధ్యవేళా దీపం వెలిగించే అలవాటూ వైదిక అగ్నిహోత్రాన్ని ప్రతిధ్వనిస్తాయి — సూర్యోదయ, సూర్యాస్తమయాల్లో గృహస్థుడు అగ్నిలో చేసే అర్పణ."]
  ],
  [
   ["h", "Om Before Everything", "అన్నిటికంటే ముందు ఓం"],
   ["p", "Before a prayer, before a lesson, before starting a journey or a new piece of work, many of us say *Om*, or a short prayer to Gaṇeśa. Before a meal, some families offer the food to God first, or set aside a little for the crows. Before an exam, a child touches the elders' feet. None of these is in a textbook. They are simply how the Vedas have lived on — not only in books, but in hands, feet, lamps and voices.", "ప్రార్థనకు ముందు, పాఠానికి ముందు, ప్రయాణం లేదా కొత్త పని మొదలుపెట్టే ముందు, మనలో చాలా మంది *ఓం* అనో, వినాయకునికి ఒక చిన్న ప్రార్థనో చెబుతాం. భోజనానికి ముందు, కొన్ని కుటుంబాలు అన్నాన్ని ముందు దేవునికి నివేదిస్తాయి, లేదా కాకుల కోసం కొంచెం పక్కన పెడతాయి. పరీక్షకు ముందు, పిల్లలు పెద్దల కాళ్ళకు నమస్కరిస్తారు. వీటిలో ఏదీ పాఠ్యపుస్తకంలో లేదు. వేదాలు ఇలాగే జీవిస్తూ వచ్చాయి — పుస్తకాలలోనే కాదు, చేతుల్లో, పాదాల్లో, దీపాల్లో, గొంతుల్లో."],
   ["p", "In the chapters ahead, we will follow a life from morning to evening and from birth to old age, and see where the Vedas are waiting at each step.", "తర్వాతి అధ్యాయాలలో, ఒక జీవితాన్ని ఉదయం నుండి సాయంత్రం వరకు, పుట్టుక నుండి వృద్ధాప్యం వరకు అనుసరిస్తూ, ప్రతి అడుగులో వేదాలు ఎక్కడ ఎదురుచూస్తున్నాయో చూద్దాం."],
   ["src", "The morning customs described (touching the earth on rising, sweeping and sprinkling, the rice-flour muggu, the lamp, water offered to the sun, Om before beginning, food offered first to God or to crows) are widespread present-day Telugu and wider Hindu family practice. *Brāhma muhūrta* as the hour before sunrise. Uṣas waking all beings: Ṛgveda 1.113. The Bhūmi Sūkta: Atharvaveda 12.1. The five daily yajñas: Taittirīya Āraṇyaka 2.10.", "వర్ణించిన ఉదయపు ఆచారాలు (లేవగానే నేలను తాకడం, ఊడ్చి కళ్ళాపి చల్లడం, బియ్యప్పిండి ముగ్గు, దీపం, సూర్యునికి నీళ్ళు, మొదలుపెట్టే ముందు ఓం, అన్నాన్ని ముందు దేవునికో కాకులకో పెట్టడం) ఈ కాలపు తెలుగు, ఇతర హిందూ కుటుంబాలలో విస్తృతమైన ఆచారాలు. సూర్యోదయానికి ముందు గంటగా *బ్రాహ్మ ముహూర్తం*. అందరినీ నిద్రలేపే ఉషస్సు: ఋగ్వేదం 1.113. భూమి సూక్తం: అథర్వవేదం 12.1. ఐదు నిత్య యజ్ఞాలు: తైత్తిరీయ ఆరణ్యకం 2.10."]
  ]
 ],
 remember: [
  ["The Vedas live on in small daily habits — touching the earth, the lamp, the muggu, water to the sun.", "వేదాలు చిన్న రోజువారీ అలవాట్లలో జీవిస్తాయి — నేలను తాకడం, దీపం, ముగ్గు, సూర్యునికి నీళ్ళు."],
  ["The hour before sunrise, *brāhma muhūrta*, belongs to {ushas|Uṣas}, the Dawn.", "సూర్యోదయానికి ముందు గంట, *బ్రాహ్మ ముహూర్తం*, {ushas|ఉషోదేవికి} చెందినది."],
  ["Each of these habits is a tiny yajña — giving thanks and giving back.", "ఈ అలవాట్లలో ప్రతి ఒక్కటీ చిన్న యజ్ఞం — కృతజ్ఞత చెప్పడం, తిరిగి ఇవ్వడం."]
 ],
 think: ["Which small habit in your home do you now think might come from the Vedas? Ask an elder in your family where it came from.", "మీ ఇంట్లోని ఏ చిన్న అలవాటు వేదాల నుండి వచ్చి ఉండవచ్చని ఇప్పుడు మీకు అనిపిస్తోంది? అది ఎక్కడ నుండి వచ్చిందో మీ కుటుంబంలోని ఒక పెద్దను అడగండి."]
},
{
 id: "vl-2", book: "life", n: 2, order: 602, date: "2026-10-22",
 title: "Sandhyāvandanam — Meeting the Light Three Times a Day", titleTe: "సంధ్యావందనం — రోజుకు మూడుసార్లు వెలుగును కలవడం",
 src: "Taittirīya Āraṇyaka 2.2 · Ṛgveda 3.62.10",
 who: ["savitr", "mandehas", "vishvamitra"],
 pages: [
  [
   ["p", "*Sandhyā* means a “joining” — the moments when one part of the day joins the next. Dawn, when night joins day. Noon, when the morning joins the afternoon. Dusk, when day joins night. *Sandhyāvandanam* means “saluting at the joinings.” For those who have had the thread ceremony, it is the most important daily practice the Vedas give: a short worship of the Sun, three times a day.", "*సంధ్య* అంటే “కలయిక” — రోజులోని ఒక భాగం తర్వాతి భాగంతో కలిసే క్షణాలు. రాత్రి పగటితో కలిసే తెల్లవారుజాము. ఉదయం మధ్యాహ్నంతో కలిసే మిట్టమధ్యాహ్నం. పగలు రాత్రితో కలిసే సాయంత్రం. *సంధ్యావందనం* అంటే “కలయికల వేళ నమస్కరించడం.” ఉపనయనం అయినవారికి ఇది వేదాలు ఇచ్చే అతి ముఖ్యమైన నిత్య ఆచరణ: రోజుకు మూడుసార్లు సూర్యుని చిన్న ఆరాధన."],
   ["p", "It takes perhaps fifteen or twenty minutes. There is sipping of water with the names of God, to purify; sprinkling water on oneself with prayers to the waters; a few rounds of controlled breathing, *prāṇāyāma*; then offering water to the Sun from cupped hands, called *arghya*; and then quietly repeating the Gāyatrī many times, *japa*. It ends with bowing to the four directions and to the Sun.", "దీనికి బహుశా పదిహేను ఇరవై నిమిషాలు పడుతుంది. భగవన్నామాలతో నీళ్ళు ఆచమనం చేయడం, శుద్ధి కోసం; జలదేవతలకు ప్రార్థనలతో తన మీద నీళ్ళు చల్లుకోవడం; కొన్ని సార్లు నియంత్రిత శ్వాస, *ప్రాణాయామం*; ఆ తర్వాత దోసిలితో సూర్యునికి నీళ్ళు అర్పించడం, దాన్ని *అర్ఘ్యం* అంటారు; ఆ తర్వాత నిశ్శబ్దంగా గాయత్రిని చాలా సార్లు జపించడం, *జపం*. నాలుగు దిక్కులకూ, సూర్యునికీ నమస్కరించడంతో ముగుస్తుంది."]
  ],
  [
   ["h", "Water as Weapons for the Sun", "సూర్యుని కోసం ఆయుధాలుగా నీళ్ళు"],
   ["p", "Why throw water toward the Sun? The Taittirīya Āraṇyaka tells a vivid story. At the time of sunrise and sunset, demons called {mandehas|the Mandehas} rush to attack the Sun. When the worshipper offers water to the Sun with the Gāyatrī, each drop becomes a thunderbolt that drives the demons away, and the Sun shines on. Those who do not offer it, the text says playfully, leave the Sun to fight alone!", "సూర్యుని వైపు నీళ్ళు ఎందుకు విసరాలి? తైత్తిరీయ ఆరణ్యకం ఒక స్పష్టమైన కథ చెబుతుంది. సూర్యోదయ, సూర్యాస్తమయ సమయాల్లో {mandehas|మందేహులు} అనే రాక్షసులు సూర్యుని మీద దాడి చేయడానికి పరుగెత్తుతారు. భక్తుడు గాయత్రితో సూర్యునికి నీళ్ళు అర్పించినప్పుడు, ప్రతి బిందువూ ఒక వజ్రాయుధమై రాక్షసులను తరిమేస్తుంది, సూర్యుడు ప్రకాశిస్తూనే ఉంటాడు. అర్పించనివారు, ఆ గ్రంథం సరదాగా చెబుతుంది, సూర్యుడిని ఒంటరిగా పోరాడమని వదిలేస్తారు!"],
   ["p", "Teachers explain the story's meaning simply. The darkness that tries to swallow the light is also inside us — laziness, anger, confusion. Each time we pause at the joinings of the day to turn towards the light, we help the light win.", "కథ అర్థాన్ని ఆచార్యులు సరళంగా వివరిస్తారు. వెలుగును మింగడానికి ప్రయత్నించే చీకటి మనలోపల కూడా ఉంది — సోమరితనం, కోపం, గందరగోళం. రోజులోని కలయికల వేళ ఆగి వెలుగు వైపు తిరిగిన ప్రతిసారీ, వెలుగు గెలవడానికి సహాయం చేస్తాం."],
   ["dyk", "⏱️", "The full name for the practice at noon is *mādhyāhnika*. Many busy people today do at least the morning and evening sandhyā — and on a rushed day, at least the arghya and a few Gāyatrīs.", "మధ్యాహ్న సంధ్యకు పూర్తి పేరు *మాధ్యాహ్నికం*. ఈ రోజు చాలా మంది హడావుడిగా ఉండేవారు కనీసం ఉదయం, సాయంత్రం సంధ్యలు చేస్తారు — తొందరగా ఉన్న రోజు కనీసం అర్ఘ్యం, కొన్ని గాయత్రులు."]
  ],
  [
   ["h", "The Gāyatrī at the Centre", "కేంద్రంలో గాయత్రి"],
   ["p", "At the heart of sandhyāvandanam is the Gāyatrī — the prayer seen by {vishvamitra|Viśvāmitra}, addressed to {savitr|Savitṛ}, the Sun as the awakener. It asks for one thing only: that the divine light awaken our minds. Of all the things one might pray for three times a day, the Vedas chose this — not wealth, not success, but a clear, bright mind. And it says “*our* minds,” not “mine.”", "సంధ్యావందనానికి హృదయం గాయత్రి — {vishvamitra|విశ్వామిత్రుడు} దర్శించిన, మేల్కొలిపే సూర్యుడైన {savitr|సవితకు} చేసే ప్రార్థన. అది ఒక్కటే అడుగుతుంది: దివ్యమైన వెలుగు మా బుద్ధులను మేల్కొలపాలి. రోజుకు మూడుసార్లు అడగదగిన అన్నిటిలోనూ, వేదాలు దీన్నే ఎంచుకున్నాయి — సంపద కాదు, విజయం కాదు, స్పష్టమైన, ప్రకాశవంతమైన బుద్ధి. “*మా* బుద్ధులు” అంటుంది, “నా” అని కాదు."],
   ["vdlink", "The Gāyatrī — the full chapter", "గాయత్రి — పూర్తి అధ్యాయం", "vr-9"],
   ["p", "Traditionally the Gāyatrī is given at the upanayanam and chanted within sandhyāvandanam. Today many families, and many people beyond the traditional circle, also recite it in their own prayers. Different communities follow different customs about this, and it is good to ask your own elders or teacher how your family does it.", "సంప్రదాయంగా గాయత్రిని ఉపనయనంలో ఉపదేశిస్తారు, సంధ్యావందనంలో జపిస్తారు. ఈ రోజు చాలా కుటుంబాలు, సంప్రదాయ పరిధికి బయట ఉన్న చాలా మంది కూడా తమ ప్రార్థనలలో దాన్ని చదువుతారు. దీని గురించి వేర్వేరు సమాజాలు వేర్వేరు ఆచారాలు పాటిస్తాయి; మీ కుటుంబం ఎలా పాటిస్తుందో మీ పెద్దలనో గురువునో అడగడం మంచిది."],
   ["src", "The parts of sandhyāvandanam (*ācamana*, *mārjana*, *prāṇāyāma*, *arghya*, Gāyatrī *japa*, salutation of the directions) as taught in the gṛhya and smṛti manuals and practised today. The Mandehas and the water as thunderbolts: Taittirīya Āraṇyaka 2.2. The Gāyatrī: Ṛgveda 3.62.10, seer Viśvāmitra, deity Savitṛ.", "సంధ్యావందనంలోని భాగాలు (*ఆచమనం*, *మార్జనం*, *ప్రాణాయామం*, *అర్ఘ్యం*, గాయత్రీ *జపం*, దిక్కులకు నమస్కారం) — గృహ్య, స్మృతి గ్రంథాలలో బోధించినట్టు, ఈ రోజు ఆచరిస్తున్నట్టు. మందేహులు, వజ్రాయుధాలుగా నీళ్ళు: తైత్తిరీయ ఆరణ్యకం 2.2. గాయత్రి: ఋగ్వేదం 3.62.10, ద్రష్ట విశ్వామిత్రుడు, దేవత సవిత."]
  ]
 ],
 remember: [
  ["*Sandhyā* = the joinings of the day: dawn, noon and dusk.", "*సంధ్య* = రోజులోని కలయికలు: తెల్లవారుజాము, మధ్యాహ్నం, సాయంత్రం."],
  ["Water offered to the Sun drives away {mandehas|the Mandehas} — the darkness that attacks the light.", "సూర్యునికి అర్పించే నీళ్ళు {mandehas|మందేహులను} — వెలుగుపై దాడి చేసే చీకటిని — తరిమేస్తాయి."],
  ["At its heart is the Gāyatrī: “may the light awaken our minds.”", "దాని హృదయంలో గాయత్రి: “వెలుగు మా బుద్ధులను మేల్కొలపాలి.”"]
 ],
 think: ["Even without a full ritual, could you pause for one minute at sunrise or sunset and turn towards the light? What would you ask for?", "పూర్తి కర్మ లేకపోయినా, సూర్యోదయంలోనో సూర్యాస్తమయంలోనో ఒక నిమిషం ఆగి వెలుగు వైపు తిరగగలరా? మీరు ఏమి అడుగుతారు?"]
},
{
 id: "vl-3", book: "life", n: 3, order: 603, date: "2026-10-22",
 title: "Sixteen Steps Through Life — the Saṃskāras", titleTe: "జీవితంలో పదహారు మెట్లు — సంస్కారాలు",
 src: "Gṛhya sūtras · Gautama Dharmasūtra 8",
 who: ["apastamba"],
 pages: [
  [
   ["p", "A *saṃskāra* is a rite that “refines” or “shapes” a person at an important turning point of life. The word is related to *saṃskṛta* — Sanskrit itself, “the refined language.” The guidebooks of each Veda, called *gṛhya sūtras* — “rules for the home” — describe how each rite is done and which mantras are said. Telugu families mostly follow {apastamba|Āpastamba}'s.", "*సంస్కారం* అంటే జీవితంలోని ముఖ్యమైన మలుపులో మనిషిని “శుద్ధి చేసే” లేదా “తీర్చిదిద్దే” కర్మ. ఈ మాట *సంస్కృతం* — “శుద్ధమైన భాష” — కు సంబంధించినది. ప్రతి వేదపు మార్గదర్శక గ్రంథాలైన *గృహ్య సూత్రాలు* — “ఇంటి నియమాలు” — ప్రతి కర్మనూ ఎలా చేయాలో, ఏ మంత్రాలు చెప్పాలో వర్ణిస్తాయి. తెలుగు కుటుంబాలు చాలావరకు {apastamba|ఆపస్తంబునివి} పాటిస్తాయి."],
   ["p", "Different books list different numbers of saṃskāras — one old dharma book counts forty! — but the most famous list has sixteen. Together they walk with a person from before birth to after death.", "వేర్వేరు గ్రంథాలు వేర్వేరు సంఖ్యలో సంస్కారాలను చెబుతాయి — ఒక పాత ధర్మ గ్రంథం నలభై లెక్కిస్తుంది! — కానీ అతి ప్రసిద్ధ జాబితాలో పదహారు ఉన్నాయి. అవన్నీ కలిసి మనిషితో పుట్టుకకు ముందు నుండి మరణం తర్వాత వరకు నడుస్తాయి."]
  ],
  [
   ["h", "Before and Just After Birth", "పుట్టుకకు ముందు, పుట్టిన వెంటనే"],
   ["p", "The first three are prayers for a child not yet born: for conception (*garbhādhāna*), for a healthy pregnancy (*puṃsavana*), and in the seventh or eighth month the lovely *sīmantonnayana*, when the husband parts his wife's hair with care and music is played, to keep the mother happy and the baby calm. In Telugu homes this is the *sīmantam*, often celebrated together with the bangle ceremony.", "మొదటి మూడు ఇంకా పుట్టని బిడ్డ కోసం ప్రార్థనలు: గర్భధారణ కోసం (*గర్భాదానం*), ఆరోగ్యకరమైన గర్భం కోసం (*పుంసవనం*), ఏడో లేదా ఎనిమిదో నెలలో అందమైన *సీమంతోన్నయనం* — భర్త భార్య జుట్టుకు జాగ్రత్తగా పాపిడి తీస్తాడు, తల్లి సంతోషంగా, బిడ్డ ప్రశాంతంగా ఉండేలా సంగీతం వాయిస్తారు. తెలుగు ఇళ్ళలో ఇదే *సీమంతం*, తరచుగా గాజుల పండుగతో కలిపి జరుపుకుంటారు."],
   ["p", "At birth comes *jātakarma*: the father welcomes the child, touches its lips with honey and ghee, and whispers a blessing for wisdom and long life. Then *nāmakaraṇa*, the naming — in Telugu homes the *bārasāla*, when the baby is placed in a cradle and its name is whispered into its ear. *Niṣkramaṇa* is the baby's first outing to see the sun. *Annaprāśana*, around six months, is the first taste of rice — and many families place books, pens, gold and other objects before the baby to see what it reaches for first!", "పుట్టినప్పుడు *జాతకర్మ*: తండ్రి బిడ్డను స్వాగతించి, తేనె, నెయ్యితో పెదవులు తాకించి, బుద్ధి, దీర్ఘాయువుల కోసం చెవిలో ఆశీర్వాదం చెబుతాడు. తర్వాత *నామకరణం* — తెలుగు ఇళ్ళలో *బారసాల*, బిడ్డను ఉయ్యాలలో పెట్టి చెవిలో పేరు చెబుతారు. *నిష్క్రమణం* సూర్యుడిని చూపించడానికి బిడ్డను మొదటిసారి బయటకు తీసుకెళ్ళడం. దాదాపు ఆరు నెలలకు *అన్నప్రాశనం* — అన్నం మొదటి రుచి — చాలా కుటుంబాలు పుస్తకాలు, కలాలు, బంగారం, ఇతర వస్తువులు బిడ్డ ముందు పెట్టి, బిడ్డ ముందుగా దేన్ని అందుకుంటుందో చూస్తారు!"],
   ["dyk", "🍯", "Honey on a newborn's lips, a whispered blessing for wisdom: the jātakarma is described in the Bṛhadāraṇyaka Upaniṣad itself, nearly three thousand years ago.", "నవజాత శిశువు పెదవులపై తేనె, బుద్ధి కోసం చెవిలో ఆశీర్వాదం: జాతకర్మను దాదాపు మూడు వేల ఏళ్ళ క్రితమే బృహదారణ్యకోపనిషత్తే వర్ణించింది."]
  ],
  [
   ["h", "Growing Up", "ఎదగడం"],
   ["p", "*Cūḍākarma* is the first haircut — the *puṭṭuveṇṭrukalu*, often offered at Tirumala or another temple. *Karṇavedha* is the ear-piercing. *Vidyārambha* is the start of learning, the *akṣarābhyāsam*, when the child writes its first letters in rice, often on Vijayadaśamī or at the Sarasvatī temple at Basara. Then comes the *upanayanam*, the thread ceremony, and *vedārambha*, the start of Vedic study. *Keśānta* marks the first shave of a young man, and *samāvartana* the return home after finishing studies — the graduation of the Taittirīya Upaniṣad.", "*చూడాకర్మ* మొదటి క్షవరం — *పుట్టువెంట్రుకలు*, తరచుగా తిరుమలలోనో మరో గుడిలోనో సమర్పిస్తారు. *కర్ణవేధ* చెవులు కుట్టడం. *విద్యారంభం* చదువు మొదలు — *అక్షరాభ్యాసం*, బిడ్డ బియ్యంలో మొదటి అక్షరాలు రాస్తుంది, తరచుగా విజయదశమి నాడు గానీ బాసరలోని సరస్వతి ఆలయంలో గానీ. ఆ తర్వాత *ఉపనయనం*, *వేదారంభం* — వేదాధ్యయన ప్రారంభం. *కేశాంతం* యువకుని మొదటి క్షౌరం, *సమావర్తనం* చదువు పూర్తి చేసుకుని ఇంటికి తిరిగి రావడం — తైత్తిరీయోపనిషత్తులోని స్నాతకోత్సవం."],
   ["p", "Then come the two greatest: *vivāha*, marriage, which begins the householder's life, and *antyeṣṭi*, the last rites. The next chapters look at the upanayanam, the wedding and the last rites more closely.", "ఆ తర్వాత రెండు గొప్పవి: గృహస్థ జీవితాన్ని ప్రారంభించే *వివాహం*, చివరి కర్మలైన *అంత్యేష్టి*. తర్వాతి అధ్యాయాలు ఉపనయనం, వివాహం, అంత్యక్రియలను మరింత దగ్గరగా చూస్తాయి."],
   ["vdlink", "The teacher's last words — the Taittirīya graduation", "గురువు చివరి మాటలు — తైత్తిరీయ స్నాతకోపదేశం", "vy-9"],
   ["src", "The saṃskāras as described in the gṛhya sūtras (Āpastamba, Āśvalāyana, Pāraskara and others); forty saṃskāras counted in Gautama Dharmasūtra 8; the usual list of sixteen (*ṣoḍaśa saṃskāras*) as given in later manuals. Jātakarma with honey, ghee and a whispered blessing: Bṛhadāraṇyaka Upaniṣad 6.4.24–28. Telugu names and customs (sīmantam, bārasāla, puṭṭuveṇṭrukalu, akṣarābhyāsam at Basara) are present-day practice.", "గృహ్య సూత్రాలు (ఆపస్తంబ, ఆశ్వలాయన, పారస్కర, ఇతరాలు) వర్ణించిన సంస్కారాలు; గౌతమ ధర్మసూత్రం 8లో నలభై సంస్కారాలు; తర్వాతి గ్రంథాలు ఇచ్చే సాధారణ పదహారు (*షోడశ సంస్కారాలు*) జాబితా. తేనె, నెయ్యి, చెవిలో ఆశీర్వాదంతో జాతకర్మ: బృహదారణ్యకోపనిషత్తు 6.4.24–28. తెలుగు పేర్లు, ఆచారాలు (సీమంతం, బారసాల, పుట్టువెంట్రుకలు, బాసరలో అక్షరాభ్యాసం) ఈ కాలపు ఆచారాలు."]
  ]
 ],
 remember: [
  ["A *saṃskāra* shapes a person at a turning point of life; the usual list has sixteen.", "*సంస్కారం* జీవితపు మలుపులో మనిషిని తీర్చిదిద్దుతుంది; సాధారణ జాబితాలో పదహారు."],
  ["Sīmantam, bārasāla, annaprāśana, akṣarābhyāsam — Telugu names for Vedic rites.", "సీమంతం, బారసాల, అన్నప్రాశనం, అక్షరాభ్యాసం — వైదిక కర్మలకు తెలుగు పేర్లు."],
  ["They are described in each Veda's *gṛhya sūtras*; most Telugu families follow {apastamba|Āpastamba}.", "వాటిని ప్రతి వేదపు *గృహ్య సూత్రాలు* వర్ణిస్తాయి; చాలా తెలుగు కుటుంబాలు {apastamba|ఆపస్తంబుని} పాటిస్తాయి."]
 ],
 think: ["Which of these saṃskāras were done for you? Ask your parents what they remember about one of them.", "వీటిలో ఏ సంస్కారాలు మీకు జరిగాయి? వాటిలో ఒకదాని గురించి మీ తల్లిదండ్రులకు ఏమి గుర్తుందో అడగండి."]
},
{
 id: "vl-4", book: "life", n: 4, order: 604, date: "2026-10-22",
 title: "Upanayanam — the Second Birth", titleTe: "ఉపనయనం — రెండవ జన్మ",
 src: "Gṛhya sūtras · Atharvaveda 11.5",
 who: ["savitr"],
 pages: [
  [
   ["p", "*Upanayana* means “leading near” — leading the child near to the teacher, and through the teacher, near to the Veda. In Telugu homes it is the *odugu*, one of the biggest family celebrations after a wedding. The boy — traditionally between eight and twelve years old — has his head shaved, bathes, and eats a last meal sitting beside his mother, as a sign that his childhood is ending.", "*ఉపనయనం* అంటే “దగ్గరకు తీసుకెళ్ళడం” — బిడ్డను గురువు దగ్గరకు, గురువు ద్వారా వేదం దగ్గరకు తీసుకెళ్ళడం. తెలుగు ఇళ్ళలో ఇది *ఒడుగు*, పెళ్ళి తర్వాత అతి పెద్ద కుటుంబ వేడుకలలో ఒకటి. బాలుడు — సంప్రదాయంగా ఎనిమిది నుండి పన్నెండేళ్ళ మధ్య — తల క్షవరం చేయించుకుని, స్నానం చేసి, బాల్యం ముగుస్తోందనే గుర్తుగా తల్లి పక్కన కూర్చుని చివరి భోజనం చేస్తాడు."],
   ["p", "He is then given the sacred thread, the *yajñopavīta* — three strands of cotton twisted together, worn over the left shoulder. Teachers explain the three strands in many ways: three debts every person owes — to the gods, to the seers and to the ancestors; or the three qualities of thought, word and deed that must be kept pure. He also receives a girdle of grass, a staff and a deer-skin or cloth — the dress of a Vedic student.", "ఆ తర్వాత అతనికి పవిత్రమైన దారం, *యజ్ఞోపవీతం* — మూడు నూలు పోగులు కలిపి పేనినది, ఎడమ భుజం మీదుగా ధరించేది — ఇస్తారు. మూడు పోగులను ఆచార్యులు ఎన్నో విధాలుగా వివరిస్తారు: ప్రతి మనిషికీ ఉన్న మూడు ఋణాలు — దేవతలకు, ఋషులకు, పితృదేవతలకు; లేదా శుద్ధంగా ఉంచుకోవాల్సిన ఆలోచన, మాట, పని అనే మూడు. గడ్డి మొలతాడు, దండం, జింక చర్మం లేదా వస్త్రం కూడా పొందుతాడు — వైదిక విద్యార్థి వేషం."]
  ],
  [
   ["h", "The Whisper Under the Cloth", "వస్త్రం కింద గుసగుస"],
   ["p", "Then comes the heart of the rite. The father or teacher and the boy sit together, covered by a single cloth, and the teacher whispers the Gāyatrī into the boy's ear — first a part at a time, then the whole — and the boy repeats it. It is given privately, as a treasure is handed over. From this moment, the boy is called *dvija*, “twice-born”: his first birth was from his mother; this second birth is into knowledge.", "ఆ తర్వాత కర్మలోని హృదయం వస్తుంది. తండ్రి లేదా గురువూ బాలుడూ ఒకే వస్త్రం కప్పుకుని కలిసి కూర్చుంటారు, గురువు బాలుని చెవిలో గాయత్రిని గుసగుసగా చెబుతాడు — ముందు ఒక్కో భాగం, తర్వాత మొత్తం — బాలుడు మళ్ళీ చెబుతాడు. నిధిని అప్పగించినట్టు ఏకాంతంగా ఇస్తారు. ఈ క్షణం నుండి బాలుడిని *ద్విజుడు* — “రెండుసార్లు పుట్టినవాడు” — అంటారు: మొదటి జన్మ తల్లి నుండి; ఈ రెండో జన్మ జ్ఞానంలోకి."],
   ["p", "The Atharvaveda describes this beautifully: the teacher, taking in the student, holds him within himself for three nights as a mother holds a child in her womb, and when he is “born,” the gods come to see him.", "అథర్వవేదం దీన్ని అందంగా వర్ణిస్తుంది: విద్యార్థిని స్వీకరించిన గురువు, తల్లి బిడ్డను గర్భంలో మోసినట్టు మూడు రాత్రులు అతన్ని తనలో మోస్తాడు, అతను “పుట్టినప్పుడు” దేవతలు చూడటానికి వస్తారు."],
   ["vdlink", "The student who holds up the world", "లోకాన్ని మోసే విద్యార్థి", "va2-6"]
  ],
  [
   ["h", "The First Alms", "మొదటి భిక్ష"],
   ["p", "Then the newly made student takes a bowl and goes to beg for food, as Vedic students once did every day, to learn humility. His first alms must come from his own mother. He stands before her and asks, and she places rice in his bowl, often with tears in her eyes — the little boy who ate beside her that morning is now a student of the Veda. Then the aunts and other ladies of the family give too.", "ఆ తర్వాత కొత్త విద్యార్థి ఒక పాత్ర పట్టుకుని భిక్ష అడగడానికి వెళ్తాడు — వైదిక విద్యార్థులు వినయం నేర్చుకోవడానికి ఒకప్పుడు రోజూ చేసినట్టు. అతని మొదటి భిక్ష తన సొంత తల్లి నుండే రావాలి. ఆమె ముందు నిలబడి అడుగుతాడు, ఆమె అతని పాత్రలో బియ్యం వేస్తుంది — తరచుగా కళ్ళలో నీళ్ళతో — ఆ ఉదయం తన పక్కన కూర్చుని తిన్న చిన్న బాలుడు ఇప్పుడు వేద విద్యార్థి. తర్వాత అత్తలూ, కుటుంబంలోని ఇతర స్త్రీలూ కూడా ఇస్తారు."],
   ["p", "In old times, the boy would now leave home to live with his teacher for years — bringing firewood, tending cows, learning by heart, like Satyakāma and Śvetaketu. Today most boys go back to ordinary school the next week. But the thread stays on his shoulder, and with it the sandhyāvandanam and the Gāyatrī — a small daily reminder that learning is sacred.", "పాత రోజుల్లో బాలుడు ఇప్పుడు ఇల్లు వదిలి ఏళ్ళ తరబడి గురువు దగ్గర ఉండేవాడు — సమిధలు తెస్తూ, ఆవులను కాస్తూ, కంఠస్థం చేస్తూ, సత్యకాముడు, శ్వేతకేతుడిలా. ఈ రోజు చాలా మంది బాలురు మరుసటి వారమే సాధారణ బడికి తిరిగి వెళ్తారు. కానీ దారం అతని భుజం మీదే ఉంటుంది, దానితో పాటు సంధ్యావందనం, గాయత్రి — చదువు పవిత్రమైనదని రోజూ గుర్తు చేసే చిన్న జ్ఞాపిక."],
   ["vdlink", "Satyakāma comes with firewood in hand", "సమిధలతో వచ్చిన సత్యకాముడు", "vs-6"],
   ["src", "Upanayana as described in the gṛhya sūtras: the age, the last meal with the mother, the *yajñopavīta*, girdle, staff and skin, the teaching of the Gāyatrī (Sāvitrī) under a cloth, and the first alms from the mother. *Dvija*, “twice-born.” The teacher holding the student three nights as in a womb: Atharvaveda 11.5.3. The three debts: Taittirīya Saṃhitā 6.3.10.5. The Telugu name *oḍugu* and present-day customs.", "గృహ్య సూత్రాలు వర్ణించిన ఉపనయనం: వయస్సు, తల్లితో చివరి భోజనం, *యజ్ఞోపవీతం*, మొలతాడు, దండం, చర్మం, వస్త్రం కింద గాయత్రి (సావిత్రి) ఉపదేశం, తల్లి నుండి మొదటి భిక్ష. *ద్విజుడు*, “రెండుసార్లు పుట్టినవాడు.” గర్భంలో లాగా మూడు రాత్రులు విద్యార్థిని మోసే గురువు: అథర్వవేదం 11.5.3. మూడు ఋణాలు: తైత్తిరీయ సంహిత 6.3.10.5. తెలుగు పేరు *ఒడుగు*, ఈ కాలపు ఆచారాలు."]
  ]
 ],
 remember: [
  ["*Upanayana* = “leading near” the teacher and the Veda; in Telugu, the *oḍugu*.", "*ఉపనయనం* = గురువుకూ వేదానికీ “దగ్గరకు తీసుకెళ్ళడం”; తెలుగులో *ఒడుగు*."],
  ["The Gāyatrī is whispered under a cloth; the boy becomes *dvija*, twice-born.", "వస్త్రం కింద గాయత్రి గుసగుసగా చెబుతారు; బాలుడు *ద్విజుడు* — రెండుసార్లు పుట్టినవాడు — అవుతాడు."],
  ["His first alms come from his own mother.", "అతని మొదటి భిక్ష తన సొంత తల్లి నుండే."]
 ],
 think: ["The upanayanam calls learning a “second birth.” What is one thing you learned that made you feel like a different, new person?", "ఉపనయనం చదువును “రెండో జన్మ” అంటుంది. మిమ్మల్ని వేరే, కొత్త వ్యక్తిలా అనిపించేలా చేసిన, మీరు నేర్చుకున్న ఒక విషయం ఏమిటి?"]
},
{
 id: "vl-5", book: "life", n: 5, order: 605, date: "2026-10-22",
 title: "The Wedding — Seven Steps Around the Fire", titleTe: "వివాహం — అగ్ని చుట్టూ ఏడు అడుగులు",
 src: "Ṛgveda 10.85 · Āpastamba Gṛhya Sūtra",
 who: ["agni", "arundhati", "dhruva", "surya"],
 pages: [
  [
   ["p", "A Telugu wedding is full of colour and custom — the cumin-and-jaggery paste placed on each other's heads at the auspicious moment, the shower of turmeric rice called *talambrālu*, the *maṅgalasūtram*, the playful games. Many of these are beloved regional customs that grew up over the centuries. But at the centre of the wedding, around the fire, the rites are Vedic — and some of the mantras are among the oldest words humans still use.", "తెలుగు పెళ్ళి రంగులతో, ఆచారాలతో నిండి ఉంటుంది — ముహూర్తం వేళ ఒకరి తల మీద ఒకరు పెట్టుకునే జీలకర్ర-బెల్లం, *తలంబ్రాలు* అనే పసుపు బియ్యపు వర్షం, *మంగళసూత్రం*, సరదా ఆటలు. వీటిలో చాలా శతాబ్దాలుగా పెరిగిన ప్రియమైన ప్రాంతీయ ఆచారాలు. కానీ పెళ్ళి కేంద్రంలో, అగ్ని చుట్టూ జరిగే కర్మలు వైదికమైనవి — వాటిలోని కొన్ని మంత్రాలు మనుషులు ఇప్పటికీ వాడే అతి పాత మాటలలో ఉన్నాయి."],
   ["p", "The great wedding hymn of the Ṛgveda tells of the marriage of Sūryā, the daughter of {surya|the Sun}, and the words spoken at her wedding are spoken at Hindu weddings to this day. At *pāṇigrahaṇa*, “taking the hand,” the groom takes the bride's hand and says, in essence: I take your hand for good fortune, so that we may grow old together.", "ఋగ్వేదపు గొప్ప వివాహ సూక్తం {surya|సూర్యుని} కుమార్తె అయిన సూర్య వివాహం గురించి చెబుతుంది, ఆమె పెళ్ళిలో పలికిన మాటలు ఈ రోజు వరకు హిందూ పెళ్ళిళ్ళలో పలుకుతారు. *పాణిగ్రహణం* — “చేయి పట్టుకోవడం” — లో వరుడు వధువు చేయి పట్టుకుని, సారాంశంలో ఇలా అంటాడు: మనం కలిసి వృద్ధులమయ్యేలా, శుభం కోసం నీ చేయి పట్టుకుంటున్నాను."],
   ["vdlink", "Hymns we still use — weddings, farewells, prayers", "ఇప్పటికీ వాడే సూక్తాలు — పెళ్ళిళ్ళు, వీడ్కోళ్ళు, ప్రార్థనలు", "vr-10"]
  ],
  [
   ["h", "Agni the Witness", "సాక్షి అగ్ని"],
   ["p", "The couple walk around the sacred fire, and {agni|Agni} is the witness to their promises — which is why people say a marriage is made “with Agni as witness.” The bride, helped by her brother, offers puffed rice into the fire, the *lājahoma*, praying for her husband's long life and her family's well-being. She steps on a flat stone, the *aśmārohaṇa*, as the groom asks that she be as firm as that stone in their life together.", "దంపతులు పవిత్ర అగ్ని చుట్టూ తిరుగుతారు, వారి వాగ్దానాలకు {agni|అగ్ని} సాక్షి — అందుకే వివాహం “అగ్నిసాక్షిగా” జరుగుతుందని అంటారు. వధువు, తన సోదరుని సహాయంతో, అగ్నిలో పేలాలు అర్పిస్తుంది — *లాజహోమం* — భర్త దీర్ఘాయువు కోసం, కుటుంబ శ్రేయస్సు కోసం ప్రార్థిస్తూ. ఆమె ఒక చదునైన రాయి మీద అడుగు పెడుతుంది — *అశ్మారోహణం* — వారి కలిసిన జీవితంలో ఆ రాయిలా స్థిరంగా ఉండాలని వరుడు కోరుకుంటాడు."],
   ["h", "The Seven Steps", "సప్తపది"],
   ["p", "Then comes the most important moment: the *saptapadī*, the seven steps. The couple take seven steps together, and with each step comes a wish. The first step for food, the second for strength, the third for prosperity, the fourth for happiness, the fifth for children, the sixth for the seasons — a life in tune with nature's rhythms — and the seventh for friendship. After the seventh step the groom says: now be my friend. In Vedic tradition, it is the seventh step that completes the marriage.", "ఆ తర్వాత అతి ముఖ్యమైన క్షణం: *సప్తపది*, ఏడు అడుగులు. దంపతులు కలిసి ఏడు అడుగులు వేస్తారు, ప్రతి అడుగుతో ఒక కోరిక. మొదటి అడుగు అన్నం కోసం, రెండోది బలం కోసం, మూడోది ఐశ్వర్యం కోసం, నాల్గోది సుఖం కోసం, ఐదోది సంతానం కోసం, ఆరోది ఋతువుల కోసం — ప్రకృతి లయకు అనుగుణమైన జీవితం — ఏడోది స్నేహం కోసం. ఏడో అడుగు తర్వాత వరుడు అంటాడు: ఇప్పుడు నా స్నేహితురాలివి కా. వైదిక సంప్రదాయంలో వివాహాన్ని పూర్తి చేసేది ఏడో అడుగే."],
   ["dyk", "👫", "Notice the last and highest wish: not wealth, not children, but *friendship*. In the Vedic picture, a husband and wife are meant to be, above all, friends — *sakhā*.", "చివరిదీ అత్యున్నతమైనదీ అయిన కోరికను గమనించండి: సంపద కాదు, సంతానం కాదు, *స్నేహం*. వైదిక చిత్రంలో భార్యాభర్తలు అన్నిటికంటే ముందు స్నేహితులు — *సఖులు* — కావాలి."]
  ],
  [
   ["h", "Two Stars", "రెండు నక్షత్రాలు"],
   ["p", "At night, the new couple are taken outside and shown two stars. One is the Pole Star, {dhruva|Dhruva}, which never moves while all the other stars wheel around it — may your love be as steady. The other is the little star {arundhati|Arundhatī}, next to Vasiṣṭha in the Great Bear — the model of a faithful, wise wife, who never left her husband's side. Telugu weddings still keep this custom: the *arundhatī darśanam*.", "రాత్రి కొత్త దంపతులను బయటకు తీసుకెళ్ళి రెండు నక్షత్రాలు చూపిస్తారు. ఒకటి ధ్రువ నక్షత్రం — {dhruva|ధ్రువుడు} — మిగతా నక్షత్రాలన్నీ దాని చుట్టూ తిరుగుతుండగా అది కదలదు — మీ ప్రేమ కూడా అంత స్థిరంగా ఉండాలి. మరొకటి సప్తర్షి మండలంలో వసిష్ఠుని పక్కన ఉండే చిన్న నక్షత్రం {arundhati|అరుంధతి} — భర్త పక్కను ఎప్పుడూ విడువని, నమ్మకమైన, జ్ఞానవతి అయిన భార్యకు ఆదర్శం. తెలుగు పెళ్ళిళ్ళు ఈ ఆచారాన్ని ఇప్పటికీ పాటిస్తాయి: *అరుంధతీ దర్శనం*."],
   ["sglink", "Arundhatī — Vasiṣṭha's wife and the star beside him", "అరుంధతి — వసిష్ఠుని భార్య, ఆయన పక్కన ఉన్న నక్షత్రం", "va-2"],
   ["src", "Ṛgveda 10.85 (the wedding of Sūryā; 10.85.36, taking the hand for good fortune and growing old together). Pāṇigrahaṇa, the fire as witness, *lājahoma*, *aśmārohaṇa*, *saptapadī* with its seven wishes ending in friendship, and the showing of Dhruva and Arundhatī: Āpastamba Gṛhya Sūtra and the other gṛhya sūtras (wording of the seven wishes as in Āśvalāyana and others). Jīlakarra-bellam, talambrālu and the maṅgalasūtram are later regional customs.", "ఋగ్వేదం 10.85 (సూర్య వివాహం; 10.85.36, శుభం కోసం, కలిసి వృద్ధులవడానికి చేయి పట్టుకోవడం). పాణిగ్రహణం, అగ్ని సాక్షి, *లాజహోమం*, *అశ్మారోహణం*, స్నేహంతో ముగిసే ఏడు కోరికల *సప్తపది*, ధ్రువ, అరుంధతి దర్శనం: ఆపస్తంబ గృహ్య సూత్రం, ఇతర గృహ్య సూత్రాలు (ఏడు కోరికల పదజాలం ఆశ్వలాయనాదుల ప్రకారం). జీలకర్ర-బెల్లం, తలంబ్రాలు, మంగళసూత్రం తర్వాతి కాలపు ప్రాంతీయ ఆచారాలు."]
  ]
 ],
 remember: [
  ["The wedding's core is Vedic: taking the hand, {agni|Agni} as witness, the seven steps.", "పెళ్ళి కేంద్రం వైదికం: పాణిగ్రహణం, {agni|అగ్ని} సాక్షి, సప్తపది."],
  ["The seven steps: food, strength, prosperity, happiness, children, seasons — and friendship.", "ఏడు అడుగులు: అన్నం, బలం, ఐశ్వర్యం, సుఖం, సంతానం, ఋతువులు — స్నేహం."],
  ["The couple are shown {dhruva|Dhruva} and {arundhati|Arundhatī} — steadiness and faithfulness.", "దంపతులకు {dhruva|ధ్రువ}, {arundhati|అరుంధతి} నక్షత్రాలు చూపిస్తారు — స్థిరత్వం, విశ్వాసం."]
 ],
 think: ["The Vedic wedding ends with “be my friend.” Why do you think friendship was chosen as the highest of the seven wishes?", "వైదిక వివాహం “నా స్నేహితురాలివి కా” అనే మాటతో ముగుస్తుంది. ఏడు కోరికలలో స్నేహాన్నే అత్యున్నతమైనదిగా ఎందుకు ఎంచుకున్నారని మీరు అనుకుంటున్నారు?"]
},
{
 id: "vl-6", book: "life", n: 6, order: 606, date: "2026-10-22",
 title: "Farewell and Remembrance — the Last Rites and the Ancestors", titleTe: "వీడ్కోలు, స్మరణ — అంత్యక్రియలు, పితృదేవతలు",
 src: "Ṛgveda 10.14–18 · śrāddha and tarpaṇa",
 who: ["yama", "agni"],
 pages: [
  [
   ["p", "Every life ends, and the Vedas do not look away from that. The last of the saṃskāras, *antyeṣṭi* — “the final offering” — is the cremation. In it, the body itself is the last offering into the fire. The hymns used come from the tenth book of the Ṛgveda, and they are spoken with great tenderness.", "ప్రతి జీవితం ముగుస్తుంది, వేదాలు దాని నుండి చూపు తిప్పుకోవు. సంస్కారాలలో చివరిది, *అంత్యేష్టి* — “చివరి అర్పణ” — దహనం. అందులో శరీరమే అగ్నికి చివరి అర్పణ. వాడే మంత్రాలు ఋగ్వేదం పదో మండలం నుండి వస్తాయి, అవి ఎంతో మృదువుగా పలకబడతాయి."],
   ["p", "The hymns speak to {agni|Agni}: do not burn him harshly; carry him gently to the world of the ancestors. They speak to the one who has died: go by the ancient paths on which our fathers went before; meet {yama|Yama} and the ancestors in the highest heaven. Let your eye go to the sun, your breath to the wind; go to the sky and to the earth, to the waters and the plants, as is right.", "మంత్రాలు {agni|అగ్నితో} మాట్లాడతాయి: అతన్ని కఠినంగా కాల్చకు; పితృలోకానికి మృదువుగా మోసుకెళ్ళు. మరణించినవారితో మాట్లాడతాయి: మన పితరులు ముందుగా నడిచిన ప్రాచీన దారులలో వెళ్ళు; అత్యున్నత స్వర్గంలో {yama|యముని}, పితృదేవతలను కలువు. నీ కన్ను సూర్యునికి, నీ శ్వాస గాలికి వెళ్ళాలి; ధర్మానుసారంగా ఆకాశానికీ భూమికీ, నీళ్ళకూ ఓషధులకూ వెళ్ళు."]
  ],
  [
   ["h", "“Come Back to the Living”", "“బ్రతికి ఉన్నవారి లోకానికి తిరిగి రా”"],
   ["p", "One verse turns from the dead to the living. It speaks to the widow, sitting beside her husband's body, and tells her gently: rise up, woman; come back to the world of the living. The one beside whom you lie is gone; take hold of the hand that reaches out to you, and live. Even in the hour of greatest grief, the Ṛgveda chooses life.", "ఒక మంత్రం మరణించినవారి నుండి బ్రతికి ఉన్నవారి వైపు తిరుగుతుంది. భర్త శరీరం పక్కన కూర్చున్న వితంతువుతో మాట్లాడి, మృదువుగా చెబుతుంది: లే, అమ్మా; బ్రతికి ఉన్నవారి లోకానికి తిరిగి రా. నువ్వు ఎవరి పక్కన ఉన్నావో ఆయన వెళ్ళిపోయాడు; నీ వైపు చాచిన చేతిని పట్టుకుని జీవించు. అత్యంత దుఃఖపు గంటలో కూడా ఋగ్వేదం జీవితాన్నే ఎంచుకుంటుంది."],
   ["p", "Another verse asks that the living go home, laughing and dancing again in time, with long lives ahead of them — and that a stone be set up as a boundary between the living and death, so that no one else dies before their time. Grief is honoured, but it is not allowed to swallow the family.", "బ్రతికి ఉన్నవారు ఇంటికి వెళ్ళి, కాలక్రమంలో మళ్ళీ నవ్వుతూ ఆడుతూ, ముందు దీర్ఘాయువుతో ఉండాలని మరో మంత్రం అడుగుతుంది — ఇంకెవరూ అకాల మరణం పొందకుండా, బ్రతికి ఉన్నవారికీ మృత్యువుకీ మధ్య సరిహద్దుగా ఒక రాయి నిలపాలని. దుఃఖాన్ని గౌరవిస్తారు, కానీ అది కుటుంబాన్ని మింగేయనీయరు."],
   ["vdlink", "Yama, the first to die, and the hymns of farewell", "మొదట మరణించిన యముడు, వీడ్కోలు సూక్తాలు", "vr-6"]
  ],
  [
   ["h", "Remembering the Ancestors", "పితృదేవతలను స్మరించడం"],
   ["p", "The bond does not end with the cremation. Every year, on the day of a parent's passing, families perform *śrāddha* — offering food to the ancestors and feeding guests in their name. *Tarpaṇa*, offering water with sesame seeds to the ancestors, is done on new-moon days and at eclipses. And in the dark fortnight before Navarātri, the *Mahālaya pakṣa* or *pitṛ pakṣa*, families everywhere remember all who came before them. In many Telugu homes, rice balls are placed out for the crows, who are thought to carry the offering to the ancestors.", "అంత్యక్రియలతో బంధం ముగిసిపోదు. ప్రతి సంవత్సరం తల్లిదండ్రులు పోయిన రోజున కుటుంబాలు *శ్రాద్ధం* చేస్తాయి — పితృదేవతలకు ఆహారం అర్పించి, వారి పేరుతో అతిథులకు భోజనం పెడతాయి. *తర్పణం* — పితృదేవతలకు నువ్వులతో నీళ్ళు అర్పించడం — అమావాస్యలలో, గ్రహణాలలో చేస్తారు. నవరాత్రికి ముందు కృష్ణపక్షంలో — *మహాలయ పక్షం* లేదా *పితృ పక్షం* — అంతటా కుటుంబాలు తమకంటే ముందున్న వారందరినీ స్మరించుకుంటాయి. చాలా తెలుగు ఇళ్ళలో పిండాలను కాకులకు పెడతారు — అవి అర్పణను పితృదేవతలకు చేరుస్తాయని నమ్మకం."],
   ["p", "The Vedic idea is simple and warm: those who gave us life are not forgotten. Remembering them with gratitude is one of the five daily yajñas, and one of the three debts every person owes.", "వైదిక ఆలోచన సరళమైనది, ఆప్యాయమైనది: మనకు జీవితం ఇచ్చినవారిని మర్చిపోము. కృతజ్ఞతతో వారిని స్మరించడం ఐదు నిత్య యజ్ఞాలలో ఒకటి, ప్రతి మనిషికీ ఉన్న మూడు ఋణాలలో ఒకటి."],
   ["src", "Ṛgveda 10.14 (Yama and the ancestors; the ancient paths), 10.16 (to Agni: do not burn him harshly; eye to the sun, breath to the wind), 10.18.3 and 10.18.4 (the living return to laughter and dance; the boundary stone), 10.18.8 (“rise, woman, come back to the world of the living”). Śrāddha, tarpaṇa and Mahālaya/pitṛ pakṣa as described in the gṛhya and dharma literature and in present-day practice; feeding crows is a widespread custom. The five daily yajñas: Taittirīya Āraṇyaka 2.10; the three debts: Taittirīya Saṃhitā 6.3.10.5.", "ఋగ్వేదం 10.14 (యముడు, పితృదేవతలు; ప్రాచీన దారులు), 10.16 (అగ్నికి: అతన్ని కఠినంగా కాల్చకు; కన్ను సూర్యునికి, శ్వాస గాలికి), 10.18.3, 10.18.4 (బ్రతికి ఉన్నవారు నవ్వుకూ నృత్యానికీ తిరిగి రావడం; సరిహద్దు రాయి), 10.18.8 (“లే, అమ్మా, బ్రతికి ఉన్నవారి లోకానికి తిరిగి రా”). శ్రాద్ధం, తర్పణం, మహాలయ/పితృ పక్షం — గృహ్య, ధర్మ గ్రంథాలలో, ఈ కాలపు ఆచారంలో వర్ణించినట్టు; కాకులకు పెట్టడం విస్తృతమైన ఆచారం. ఐదు నిత్య యజ్ఞాలు: తైత్తిరీయ ఆరణ్యకం 2.10; మూడు ఋణాలు: తైత్తిరీయ సంహిత 6.3.10.5."]
  ]
 ],
 remember: [
  ["*Antyeṣṭi*, the last rite, offers the body to {agni|Agni}, asking him to carry it gently.", "*అంత్యేష్టి*, చివరి కర్మ, శరీరాన్ని {agni|అగ్నికి} అర్పిస్తూ, దాన్ని మృదువుగా తీసుకెళ్ళమని అడుగుతుంది."],
  ["The Ṛgveda tells the grieving: rise, come back to the world of the living.", "ఋగ్వేదం దుఃఖంలో ఉన్నవారికి చెబుతుంది: లే, బ్రతికి ఉన్నవారి లోకానికి తిరిగి రా."],
  ["Śrāddha, tarpaṇa and Mahālaya keep the ancestors remembered with gratitude.", "శ్రాద్ధం, తర్పణం, మహాలయం పితృదేవతలను కృతజ్ఞతతో స్మరించేలా చేస్తాయి."]
 ],
 think: ["Is there a grandparent or elder you never met whose story you would like to know? Who in your family could tell you about them?", "మీరు ఎప్పుడూ కలవని ఒక తాతయ్యో అమ్మమ్మో పెద్దవారో — ఎవరి కథ తెలుసుకోవాలని ఉంది? మీ కుటుంబంలో వారి గురించి ఎవరు చెప్పగలరు?"]
},
{
 id: "vl-7", book: "life", n: 7, order: 607, date: "2026-10-22",
 title: "Gotra and Pravara — Who We Are", titleTe: "గోత్రం, ప్రవర — మనం ఎవరం",
 src: "Pravara lists of the śrauta sūtras · abhivādana",
 who: ["saptarshi", "angiras", "vasishtha", "bhrigu"],
 pages: [
  [
   ["p", "When you go to a temple and the priest offers an archana in your name, he usually asks: “*Gotram?*” — your family line. A *gotra* is a lineage traced back, father to son, to one of the great ṛṣis — {vasishtha|Vasiṣṭha}, {bhrigu|Bhṛgu}, {angiras|Aṅgiras}, Bharadvāja, Kaśyapa, Atri, Viśvāmitra, Agastya and others. Saying your gotra is a way of saying: I am a descendant of a seer of the Veda.", "మీరు గుడికి వెళ్ళినప్పుడు, పూజారి మీ పేరు మీద అర్చన చేస్తూ సాధారణంగా అడుగుతాడు: “*గోత్రం?*” — మీ వంశం. *గోత్రం* అంటే తండ్రి నుండి కొడుకుకు, గొప్ప ఋషులలో ఒకరి వరకు వెనక్కి వెళ్ళే వంశం — {vasishtha|వసిష్ఠుడు}, {bhrigu|భృగువు}, {angiras|అంగిరసుడు}, భరద్వాజుడు, కశ్యపుడు, అత్రి, విశ్వామిత్రుడు, అగస్త్యుడు, ఇతరులు. మీ గోత్రం చెప్పడం అంటే: నేను ఒక వేద ద్రష్ట వంశీయుడిని అని చెప్పడం."],
   ["p", "The *pravara* goes one step further. It names the one, three or (rarely) five most famous ṛṣis of that line. The pravara came from the yajña: when a priest called on Agni, he named the ancestors of the person performing the rite, reminding Agni, “this family has always honoured you.”", "*ప్రవర* ఇంకొక అడుగు ముందుకు వెళ్తుంది. అది ఆ వంశంలోని అతి ప్రసిద్ధ ఒకటి, మూడు లేదా (అరుదుగా) ఐదుగురు ఋషుల పేర్లు చెబుతుంది. ప్రవర యజ్ఞం నుండి వచ్చింది: ఋత్విజుడు అగ్నిని పిలిచినప్పుడు, కర్మ చేసేవాడి పూర్వీకుల పేర్లు చెప్పేవాడు — “ఈ కుటుంబం ఎప్పుడూ నిన్ను గౌరవించింది” అని అగ్నికి గుర్తు చేస్తూ."],
   ["sglink", "The pravara — Aṅgirasa, Āmyahavya, Aurukṣaya", "ప్రవర — ఆంగీరస, ఆమ్యహవ్య, ఔరుక్షయ", "an-11"]
  ],
  [
   ["h", "One Sentence That Says Everything", "అన్నీ చెప్పే ఒకే వాక్యం"],
   ["p", "When a young person bows to an elder in the traditional way, they say the *abhivādana* — a formal greeting. In one sentence it says: I belong to this pravara of these seers, to this gotra, I follow this sūtra, I study this branch of this Veda, my name is so-and-so, and I bow to you. Your whole Vedic identity — your seers, your family line, your teacher's rulebook, your Veda — in a single breath.", "ఒక యువకుడు సంప్రదాయ పద్ధతిలో పెద్దలకు నమస్కరించినప్పుడు *అభివాదనం* — ఒక లాంఛనప్రాయమైన పలకరింపు — చెబుతాడు. ఒకే వాక్యంలో అది చెబుతుంది: నేను ఈ ఋషుల ఈ ప్రవరకు, ఈ గోత్రానికి చెందినవాడిని, ఈ సూత్రాన్ని పాటిస్తాను, ఈ వేదపు ఈ శాఖను అధ్యయనం చేస్తాను, నా పేరు ఫలానా, మీకు నమస్కరిస్తున్నాను. మీ మొత్తం వైదిక గుర్తింపు — మీ ఋషులు, మీ వంశం, మీ ఆచార్యుని నియమ గ్రంథం, మీ వేదం — ఒకే శ్వాసలో."],
   ["dyk", "🌟", "Legend groups the gotras under the seven great sages, the *Saptarṣis* — the seven bright stars of the Great Bear. When you look up at those stars at night, you may be looking at your own family's first ancestor.", "పురాణ కథనం గోత్రాలను ఏడుగురు మహర్షుల — *సప్తర్షుల* — కింద వర్గీకరిస్తుంది — సప్తర్షి మండలంలోని ఏడు ప్రకాశవంతమైన నక్షత్రాలు. రాత్రి ఆ నక్షత్రాల వైపు చూసినప్పుడు, మీరు మీ సొంత కుటుంబపు మొదటి పూర్వీకుడిని చూస్తూ ఉండవచ్చు."]
  ],
  [
   ["h", "Why It Still Matters", "ఇది ఇప్పటికీ ఎందుకు ముఖ్యం"],
   ["p", "Traditionally, gotra was also used in deciding marriages — families avoided marrying within the same gotra, because people of one gotra were considered brothers and sisters, children of the same ṛṣi. Customs about this differ between communities and have changed over time, and families today follow their own elders' guidance.", "సంప్రదాయంగా వివాహాలను నిర్ణయించడంలో కూడా గోత్రాన్ని వాడేవారు — ఒకే గోత్రంలో వివాహం చేసుకోవడాన్ని కుటుంబాలు నివారించేవి, ఎందుకంటే ఒకే గోత్రం వారిని ఒకే ఋషి సంతానమైన అన్నదమ్ములు, అక్కచెల్లెళ్ళుగా భావించేవారు. దీని గురించిన ఆచారాలు సమాజాల మధ్య వేరువేరుగా ఉంటాయి, కాలక్రమంలో మారాయి; ఈ రోజు కుటుంబాలు తమ పెద్దల మార్గదర్శనం పాటిస్తాయి."],
   ["p", "But the deepest meaning is not about rules. It is about belonging. Saying your gotra reminds you that you are part of a story thousands of years long — that the seers whose hymns you have been reading in these books are, in a real sense, your family. Every time you say it at a temple, you are introducing yourself to God as their child.", "కానీ లోతైన అర్థం నియమాల గురించి కాదు. అది చెందడం గురించి. మీ గోత్రం చెప్పడం మీరు వేల సంవత్సరాల పొడవైన కథలో భాగమని గుర్తు చేస్తుంది — ఈ పుస్తకాలలో మీరు చదువుతున్న సూక్తాల ద్రష్టలు నిజమైన అర్థంలో మీ కుటుంబమే. గుడిలో దాన్ని చెప్పిన ప్రతిసారీ, వారి బిడ్డగా దేవునికి మిమ్మల్ని మీరు పరిచయం చేసుకుంటున్నారు."],
   ["src", "Gotra as descent from a ṛṣi; the pravara of one, three or five ṛṣis; its origin in naming the sacrificer's ancestors when choosing Agni as *hotṛ* (the śrauta sūtras' pravara lists, e.g. Āśvalāyana and Baudhāyana). The *abhivādana* greeting with pravara, gotra, sūtra, śākhā and name, as practised today. The grouping of gotras under the Saptarṣis follows traditional accounts. Customs about same-gotra marriage vary by community.", "ఋషి సంతానంగా గోత్రం; ఒకటి, మూడు, ఐదుగురు ఋషుల ప్రవర; అగ్నిని *హోతగా* ఎన్నుకునేటప్పుడు యజమాని పూర్వీకుల పేర్లు చెప్పడంలో దాని మూలం (శ్రౌత సూత్రాల ప్రవర జాబితాలు, ఉదా. ఆశ్వలాయన, బౌధాయన). ప్రవర, గోత్రం, సూత్రం, శాఖ, పేరుతో *అభివాదనం* — ఈ రోజు ఆచరిస్తున్నట్టు. సప్తర్షుల కింద గోత్రాల వర్గీకరణ సంప్రదాయ కథనాల ప్రకారం. సగోత్ర వివాహం గురించిన ఆచారాలు సమాజాన్ని బట్టి మారుతాయి."]
  ]
 ],
 remember: [
  ["A *gotra* traces a family back to a great ṛṣi; the *pravara* names its most famous seers.", "*గోత్రం* కుటుంబాన్ని ఒక మహర్షి వరకు వెనక్కి తీసుకెళ్తుంది; *ప్రవర* దాని అతి ప్రసిద్ధ ఋషుల పేర్లు చెబుతుంది."],
  ["The *abhivādana* says pravara, gotra, sūtra, śākhā and name in one breath.", "*అభివాదనం* ప్రవర, గోత్రం, సూత్రం, శాఖ, పేరు — ఒకే శ్వాసలో చెబుతుంది."],
  ["Saying your gotra means: the seers of the Veda are my family.", "మీ గోత్రం చెప్పడం అంటే: వేద ద్రష్టలు నా కుటుంబం."]
 ],
 think: ["Do you know your gotra and pravara? If not, ask your parents — and then look up the ṛṣi in the Great Sages section of this app.", "మీ గోత్రం, ప్రవర మీకు తెలుసా? తెలియకపోతే మీ తల్లిదండ్రులను అడగండి — ఆ తర్వాత ఈ యాప్‌లోని మహర్షుల విభాగంలో ఆ ఋషి గురించి చూడండి."]
},
{
 id: "vl-8", book: "life", n: 8, order: 608, date: "2026-10-22",
 title: "The Temple, the Saṅkalpa and the Pañcāṅgam", titleTe: "ఆలయం, సంకల్పం, పంచాంగం",
 src: "Taittirīya Āraṇyaka 1.22 · Vedāṅga Jyotiṣa",
 who: ["venkateshvara"],
 pages: [
  [
   ["p", "The Vedic yajña was performed in the open, around fires; there were no great temples in the time of the Ṛgveda. Temples, with their sanctums and images, grew up later, with their own sacred manuals called *Āgamas*. Yet the Vedas walked right into the temple and made themselves at home. At Tirumala, as in many great temples, groups of scholars chant the Vedas every day before {venkateshvara|Lord Veṅkaṭeśvara}, and at festivals the deity's procession is led by Vedic chanters.", "వైదిక యజ్ఞాలు ఆరుబయట, అగ్నుల చుట్టూ జరిగేవి; ఋగ్వేద కాలంలో గొప్ప ఆలయాలు లేవు. గర్భగుడులూ విగ్రహాలతో ఆలయాలు తర్వాత, *ఆగమాలు* అనే తమ సొంత పవిత్ర గ్రంథాలతో పెరిగాయి. అయినా వేదాలు ఆలయంలోకి నేరుగా నడిచి వచ్చి ఇంట్లో ఉన్నట్టు కూర్చున్నాయి. తిరుమలలో, ఎన్నో గొప్ప ఆలయాల్లో లాగే, పండితుల బృందాలు ప్రతిరోజూ {venkateshvara|శ్రీ వేంకటేశ్వరుని} ముందు వేదాలు పఠిస్తారు, ఉత్సవాలలో స్వామి ఊరేగింపుకు ముందు వేద పండితులు నడుస్తారు."],
   ["p", "Near the end of almost every big pūjā, the priests hold flowers in their hands and chant the *Mantrapuṣpam*, “the flower of mantras,” before offering the flowers to God. It comes from the Taittirīya Āraṇyaka, and it begins with a riddle: whoever knows the flower of the waters becomes rich in flowers, in children and in cattle. The moon, it says, is the flower of the waters.", "దాదాపు ప్రతి పెద్ద పూజ చివర దగ్గర, పూజారులు చేతుల్లో పువ్వులు పట్టుకుని, దేవునికి ఆ పువ్వులు అర్పించే ముందు *మంత్రపుష్పం* — “మంత్రాల పువ్వు” — పఠిస్తారు. అది తైత్తిరీయ ఆరణ్యకం నుండి వచ్చింది, ఒక పొడుపుకథతో మొదలవుతుంది: నీటి పువ్వును తెలుసుకున్నవాడు పువ్వులతో, సంతానంతో, పశువులతో సమృద్ధుడవుతాడు. చంద్రుడే నీటి పువ్వు అంటుంది."]
  ],
  [
   ["h", "Your Address in the Universe", "విశ్వంలో మీ చిరునామా"],
   ["p", "Before any pūjā or vow, the priest says the *saṅkalpa* — a statement of intention. And it begins with something astonishing: your exact address in time and space, on the scale of the whole universe. In the second half of Brahmā's life, in the present cosmic age, in the age of the seventh Manu, in the Kali Yuga, in its first quarter; on the island of Jambū, in the land of Bhārata; in such-and-such a year of the sixty-year cycle, in this season, this month, this fortnight, this lunar day, this weekday, under this star — I, of this gotra, named so-and-so, do this worship.", "ఏ పూజకైనా, వ్రతానికైనా ముందు పూజారి *సంకల్పం* — ఉద్దేశ ప్రకటన — చెబుతాడు. అది ఆశ్చర్యపరిచేదానితో మొదలవుతుంది: విశ్వమంతటి స్థాయిలో కాలంలో, స్థలంలో మీ ఖచ్చితమైన చిరునామా. బ్రహ్మదేవుని ఆయుష్షులో రెండో సగంలో, ఈ శ్వేతవరాహ కల్పంలో, ఏడవ మనువు మన్వంతరంలో, కలియుగంలో, దాని ప్రథమ పాదంలో; జంబూద్వీపంలో, భరతవర్షంలో; అరవై సంవత్సరాల చక్రంలోని ఫలానా సంవత్సరంలో, ఈ ఋతువులో, ఈ మాసంలో, ఈ పక్షంలో, ఈ తిథిలో, ఈ వారంలో, ఈ నక్షత్రంలో — ఈ గోత్రానికి చెందిన, ఫలానా పేరు గల నేను, ఈ పూజ చేస్తున్నాను."],
   ["p", "Think about what that does. Before a small family pūjā, you place yourself inside the vast sweep of cosmic time — and then zoom all the way in to this one day and this one person. You are tiny, and yet you are exactly located, and you matter.", "అది ఏమి చేస్తుందో ఆలోచించండి. ఒక చిన్న కుటుంబ పూజకు ముందు, మిమ్మల్ని మీరు విశ్వకాలపు అపారమైన విస్తృతిలో ఉంచుకుంటారు — ఆ తర్వాత ఈ ఒక్క రోజు, ఈ ఒక్క వ్యక్తి వరకు దగ్గరకు వస్తారు. మీరు చాలా చిన్నవారు, అయినా ఖచ్చితమైన స్థానంలో ఉన్నారు, మీరు ముఖ్యం."]
  ],
  [
   ["h", "The Pañcāṅgam", "పంచాంగం"],
   ["p", "How does the priest know the lunar day and the star? From the *pañcāṅgam* — the Hindu almanac — whose name means “five limbs”: the *tithi* (lunar day), *vāra* (weekday), *nakṣatra* (the star the moon is in), *yoga* and *karaṇa*. Every Telugu family has one, or checks it on Ugādi when the new year's almanac is read aloud.", "తిథి, నక్షత్రం పూజారికి ఎలా తెలుస్తాయి? *పంచాంగం* నుండి — హిందూ కాలపట్టిక — దాని పేరు అర్థం “ఐదు అంగాలు”: *తిథి*, *వారం*, *నక్షత్రం* (చంద్రుడు ఉన్న నక్షత్రం), *యోగం*, *కరణం*. ప్రతి తెలుగు కుటుంబం దగ్గర ఒకటి ఉంటుంది, లేదా ఉగాది నాడు కొత్త సంవత్సరపు పంచాంగ శ్రవణంలో వింటుంది."],
   ["p", "Its roots go back to the *Vedāṅga Jyotiṣa*, the “limb of the Veda” for astronomy — one of the oldest astronomy texts in India. It was written for a very practical reason: a yajña had to be done at exactly the right time, on the right new moon or full moon, so the priests had to watch the sky carefully. The Panchāṅgam in this very app, which works out the day's tithi and star for wherever you are, is the newest link in that long chain.", "దాని మూలాలు *వేదాంగ జ్యోతిషం* వరకు వెళ్తాయి — ఖగోళ శాస్త్రానికి సంబంధించిన “వేదాంగం” — భారతదేశంలోని అతి ప్రాచీన ఖగోళ గ్రంథాలలో ఒకటి. ఇది చాలా ఆచరణాత్మక కారణం కోసం రాయబడింది: యజ్ఞం సరిగ్గా సరైన సమయంలో, సరైన అమావాస్యకో పౌర్ణమికో జరగాలి, అందుకే ఋత్విజులు ఆకాశాన్ని జాగ్రత్తగా గమనించాల్సి వచ్చింది. మీరు ఎక్కడ ఉన్నా ఆ రోజు తిథి, నక్షత్రాన్ని లెక్కించే ఈ యాప్‌లోని పంచాంగమే ఆ పొడవైన గొలుసులో సరికొత్త లింకు."],
   ["vdlink", "The six limbs of the Veda — the Vedāṅgas", "వేదానికి ఆరు అంగాలు — వేదాంగాలు", "vi-8"],
   ["src", "The Āgamas as the temple manuals; daily Veda recitation (*Veda pārāyaṇam*) at Tirumala and other great temples. The Mantrapuṣpam: Taittirīya Āraṇyaka 1.22 (“whoever knows the flower of the waters…”). The saṅkalpa formula with the cosmic time-reckoning (Brahmā's second half, Śvetavarāha kalpa, Vaivasvata manvantara, Kali Yuga) as used in present-day practice. The five limbs of the pañcāṅga. The Vedāṅga Jyotiṣa (attributed to Lagadha) and its purpose of timing the sacrifices.", "ఆలయ గ్రంథాలుగా ఆగమాలు; తిరుమల, ఇతర గొప్ప ఆలయాలలో నిత్య *వేద పారాయణం*. మంత్రపుష్పం: తైత్తిరీయ ఆరణ్యకం 1.22 (“నీటి పువ్వును తెలుసుకున్నవాడు…”). విశ్వకాల గణనతో సంకల్ప వాక్యం (బ్రహ్మ ద్వితీయ పరార్ధం, శ్వేతవరాహ కల్పం, వైవస్వత మన్వంతరం, కలియుగం) — ఈ కాలపు ఆచారంలో వాడుతున్నట్టు. పంచాంగపు ఐదు అంగాలు. వేదాంగ జ్యోతిషం (లగధుని పేరుతో), యజ్ఞాల సమయాన్ని నిర్ణయించడం దాని ఉద్దేశం."]
  ]
 ],
 remember: [
  ["Temples came later than the Vedas, but Vedic chanting fills them — like the Mantrapuṣpam.", "ఆలయాలు వేదాల తర్వాత వచ్చాయి, కానీ వేదపఠనం వాటిని నింపుతుంది — మంత్రపుష్పం లాగా."],
  ["The *saṅkalpa* gives your address in cosmic time and space before every pūjā.", "*సంకల్పం* ప్రతి పూజకు ముందు విశ్వకాల, స్థలాలలో మీ చిరునామా చెబుతుంది."],
  ["The *pañcāṅgam* — five limbs — goes back to the Vedāṅga Jyotiṣa.", "*పంచాంగం* — ఐదు అంగాలు — వేదాంగ జ్యోతిషం వరకు వెళ్తుంది."]
 ],
 think: ["Open the Panchāṅgam in this app and find today's tithi and nakṣatra. Can you now say your own saṅkalpa for today?", "ఈ యాప్‌లోని పంచాంగం తెరిచి ఈ రోజు తిథి, నక్షత్రం కనుగొనండి. ఇప్పుడు ఈ రోజు కోసం మీ సొంత సంకల్పం చెప్పగలరా?"]
},
{
 id: "vl-9", book: "life", n: 9, order: 609, date: "2026-10-22",
 title: "Gifts of the Vedas to the World", titleTe: "ప్రపంచానికి వేదాల కానుకలు",
 src: "Vedāṅgas and Upavedas · Śulba Sūtras · Pāṇini",
 who: ["panini", "baudhayana", "caraka", "bharatamuni"],
 pages: [
  [
   ["p", "The Vedas were made for worship. But to preserve them and perform them perfectly, the people of the Vedas had to invent whole sciences. To say every sound correctly, they studied phonetics. To understand every word, they studied grammar and the history of words. To time every yajña, they studied the sky. To build every altar, they studied geometry. Out of devotion came knowledge — and some of that knowledge changed the world.", "వేదాలు ఆరాధన కోసం ఏర్పడ్డాయి. కానీ వాటిని కాపాడి, సంపూర్ణంగా ఆచరించడానికి, వేద ప్రజలు పూర్తి శాస్త్రాలను కనిపెట్టాల్సి వచ్చింది. ప్రతి శబ్దాన్నీ సరిగ్గా పలకడానికి, ధ్వని శాస్త్రం అధ్యయనం చేశారు. ప్రతి మాటనూ అర్థం చేసుకోవడానికి, వ్యాకరణం, మాటల చరిత్ర అధ్యయనం చేశారు. ప్రతి యజ్ఞ సమయాన్నీ నిర్ణయించడానికి, ఆకాశాన్ని అధ్యయనం చేశారు. ప్రతి వేదికనూ కట్టడానికి, జ్యామితి అధ్యయనం చేశారు. భక్తి నుండి జ్ఞానం వచ్చింది — ఆ జ్ఞానంలో కొంత ప్రపంచాన్నే మార్చింది."]
  ],
  [
   ["h", "Language and Number", "భాష, సంఖ్య"],
   ["p", "Grammar. {panini|Pāṇini}, probably in the fourth century BCE, described the whole Sanskrit language in about four thousand short rules — a work so precise and so compact that modern linguists and even computer scientists still study it with admiration. It grew from the Vedic limb of grammar.", "వ్యాకరణం. బహుశా క్రీ.పూ. నాలుగో శతాబ్దంలో {panini|పాణిని} సంస్కృత భాష మొత్తాన్ని దాదాపు నాలుగు వేల చిన్న సూత్రాలలో వర్ణించాడు — ఎంత ఖచ్చితమైన, ఎంత సంక్షిప్తమైన గ్రంథమంటే, ఆధునిక భాషా శాస్త్రవేత్తలూ, కంప్యూటర్ శాస్త్రవేత్తలూ కూడా ఇప్పటికీ దాన్ని ప్రశంసతో అధ్యయనం చేస్తారు. అది వ్యాకరణం అనే వేదాంగం నుండి పెరిగింది."],
   ["p", "Geometry. The Śulba Sūtras of {baudhayana|Baudhāyana} and others, written to build fire altars, contain the diagonal rule now called Pythagoras's theorem and a remarkably exact value for the square root of two. Astronomy. The Vedāṅga Jyotiṣa, written to time the yajñas, began a long Indian tradition of watching and calculating the sky.", "జ్యామితి. యజ్ఞ వేదికలను కట్టడానికి రాసిన {baudhayana|బౌధాయనాదుల} శుల్బ సూత్రాలలో ఇప్పుడు పైథాగరస్ సిద్ధాంతం అనే కర్ణ నియమం, రెండు యొక్క వర్గమూలానికి ఆశ్చర్యకరంగా ఖచ్చితమైన విలువ ఉన్నాయి. ఖగోళ శాస్త్రం. యజ్ఞాల సమయాన్ని నిర్ణయించడానికి రాసిన వేదాంగ జ్యోతిషం ఆకాశాన్ని గమనించి లెక్కించే పొడవైన భారతీయ సంప్రదాయాన్ని ప్రారంభించింది."],
   ["vdlink", "The bird of bricks and the rope-rules", "ఇటుకల పక్షి, తాడు నియమాలు", "vy-4"]
  ],
  [
   ["h", "Body, Mind and Art", "శరీరం, మనసు, కళ"],
   ["p", "Medicine. Āyurveda, which {caraka|Caraka} traced to the Atharvaveda, grew into a full science of health that millions still use. Yoga. The Kaṭha Upaniṣad already calls yoga the steady holding of the senses; the Upaniṣads' teaching of breath, meditation and the Self flowed into Patañjali's Yoga Sūtras — and today yoga is practised in nearly every country on earth. Music and dance. The seven notes trace back to Sāma singing, and {bharatamuni|Bharata}'s Nāṭyaśāstra says Brahmā built drama out of all four Vedas. Architecture. The upaveda of building, *sthāpatya*, gave rise to the traditions of temple and house design.", "వైద్యం. {caraka|చరకుడు} అథర్వవేదం వరకు వెనక్కి తీసుకెళ్ళిన ఆయుర్వేదం కోట్లాది మంది ఇప్పటికీ వాడే పూర్తి ఆరోగ్య శాస్త్రంగా పెరిగింది. యోగం. కఠోపనిషత్తే యోగాన్ని ఇంద్రియాలను స్థిరంగా పట్టి ఉంచడం అంటుంది; శ్వాస, ధ్యానం, ఆత్మ గురించిన ఉపనిషత్తుల బోధ పతంజలి యోగ సూత్రాలలోకి ప్రవహించింది — ఈ రోజు భూమి మీద దాదాపు ప్రతి దేశంలో యోగం ఆచరిస్తున్నారు. సంగీతం, నృత్యం. సప్త స్వరాలు సామ గానం వరకు వెళ్తాయి, బ్రహ్మ నాలుగు వేదాల నుండి నాట్యాన్ని నిర్మించాడని {bharatamuni|భరతుని} నాట్యశాస్త్రం చెబుతుంది. వాస్తు. నిర్మాణానికి సంబంధించిన ఉపవేదం, *స్థాపత్యం*, ఆలయ, గృహ నిర్మాణ సంప్రదాయాలకు దారితీసింది."],
   ["p", "Memory. And perhaps the greatest gift of all: the method of chanting that kept millions of syllables perfect for thousands of years without writing. In 2003, UNESCO recognised the tradition of Vedic chanting as one of the masterpieces of the oral and intangible heritage of humanity.", "స్మృతి. అన్నిటికంటే గొప్ప కానుక బహుశా ఇదే: రాయకుండానే లక్షలాది అక్షరాలను వేల సంవత్సరాలు సంపూర్ణంగా ఉంచిన పఠన పద్ధతి. 2003లో యునెస్కో వేదపఠన సంప్రదాయాన్ని మానవాళి మౌఖిక, అమూర్త వారసత్వపు గొప్ప కళాఖండాలలో ఒకటిగా గుర్తించింది."],
   ["dyk", "🌍", "When someone does yoga in Brazil, studies Pāṇini's grammar in Germany, or uses an Āyurvedic remedy in Japan, they are receiving a gift that began with people chanting around a fire in ancient India.", "బ్రెజిల్‌లో ఎవరైనా యోగా చేసినా, జర్మనీలో పాణిని వ్యాకరణం చదివినా, జపాన్‌లో ఆయుర్వేద ఔషధం వాడినా, ప్రాచీన భారతదేశంలో అగ్ని చుట్టూ పఠించిన ప్రజలతో మొదలైన కానుకను వారు అందుకుంటున్నారు."],
   ["src", "The six Vedāṅgas and four Upavedas. Pāṇini's Aṣṭādhyāyī (about 4,000 sūtras; usually dated around the 4th century BCE). The Śulba Sūtras' diagonal rule and value of √2. The Vedāṅga Jyotiṣa. Caraka Saṃhitā, Sūtrasthāna 30.21. Kaṭha Upaniṣad 2.3.11 (yoga as steady holding of the senses); Patañjali's Yoga Sūtras. Nāṭyaśāstra 1. UNESCO's 2003 proclamation of the tradition of Vedic chanting (inscribed on the Representative List in 2008).", "ఆరు వేదాంగాలు, నాలుగు ఉపవేదాలు. పాణిని అష్టాధ్యాయి (సుమారు 4,000 సూత్రాలు; సాధారణంగా క్రీ.పూ. 4వ శతాబ్దం). శుల్బ సూత్రాల కర్ణ నియమం, √2 విలువ. వేదాంగ జ్యోతిషం. చరక సంహిత, సూత్రస్థానం 30.21. కఠోపనిషత్తు 2.3.11 (ఇంద్రియాల స్థిర ధారణగా యోగం); పతంజలి యోగ సూత్రాలు. నాట్యశాస్త్రం 1. వేదపఠన సంప్రదాయం గురించి యునెస్కో 2003 ప్రకటన (2008లో ప్రాతినిధ్య జాబితాలో చేర్చబడింది)."]
  ]
 ],
 remember: [
  ["To preserve and perform the Vedas perfectly, whole sciences were born.", "వేదాలను కాపాడి సంపూర్ణంగా ఆచరించడానికి పూర్తి శాస్త్రాలు పుట్టాయి."],
  ["{panini|Pāṇini}'s grammar, the Śulba geometry, Āyurveda, yoga and music all grew from Vedic roots.", "{panini|పాణిని} వ్యాకరణం, శుల్బ జ్యామితి, ఆయుర్వేదం, యోగం, సంగీతం — అన్నీ వైదిక మూలాల నుండి పెరిగాయి."],
  ["UNESCO recognised Vedic chanting as part of humanity's heritage in 2003.", "2003లో యునెస్కో వేదపఠనాన్ని మానవాళి వారసత్వంలో భాగంగా గుర్తించింది."]
 ],
 think: ["Which of these gifts — grammar, geometry, medicine, yoga, music, memory — touches your own life the most?", "ఈ కానుకలలో — వ్యాకరణం, జ్యామితి, వైద్యం, యోగం, సంగీతం, స్మృతి — ఏది మీ జీవితాన్ని ఎక్కువగా తాకుతుంది?"]
},
{
 id: "vl-10", book: "life", n: 10, order: 610, date: "2026-10-22",
 title: "How the Vedas Teach Us to Live", titleTe: "ఎలా జీవించాలో వేదాలు నేర్పేది",
 src: "Ṛgveda 1.89.1 · 1.164.46 · 10.191 · Taittirīya Upaniṣad 1.11",
 who: ["dirghatamas"],
 pages: [
  [
   ["p", "After six books, what do the Vedas actually ask of us in daily life? Not, mostly, that we perform great yajñas. Their deepest teachings can be lived by anyone, in any job, in any country. Here are some of them, drawn from the chapters you have read.", "ఆరు పుస్తకాల తర్వాత, రోజువారీ జీవితంలో వేదాలు నిజంగా మన నుండి ఏమి కోరుతాయి? ఎక్కువగా, గొప్ప యజ్ఞాలు చేయమని కాదు. వాటి లోతైన బోధలను ఎవరైనా, ఏ ఉద్యోగంలోనైనా, ఏ దేశంలోనైనా జీవించవచ్చు. మీరు చదివిన అధ్యాయాల నుండి తీసిన కొన్ని ఇవి."],
   ["h", "Truth", "సత్యం"],
   ["p", "Speak the truth — the first words of the Taittirīya graduation. Satyakāma was accepted by his teacher for nothing but honesty; Sukeśā said “I do not know” rather than lie; Hariścandra gave up everything rather than break his word. *Satyameva jayate* — truth alone wins.", "సత్యం చెప్పు — తైత్తిరీయ స్నాతకోపదేశపు మొదటి మాటలు. సత్యకాముడిని గురువు నిజాయితీ ఒక్కదాని కోసమే స్వీకరించాడు; సుకేశుడు అబద్ధం చెప్పకుండా “నాకు తెలియదు” అన్నాడు; హరిశ్చంద్రుడు మాట తప్పకుండా అన్నీ వదులుకున్నాడు. *సత్యమేవ జయతే* — సత్యమే గెలుస్తుంది."]
  ],
  [
   ["h", "Giving, Self-Control, Compassion", "దానం, నిగ్రహం, దయ"],
   ["p", "The thunder in the Bṛhadāraṇyaka says *da, da, da* — control yourself, give, be compassionate. The Ṛgveda's hymn of giving warns that the one who eats alone, without sharing, eats only sin. The Taittirīya says: give with faith, generously, modestly. The whole idea of yajña is giving back what we receive.", "బృహదారణ్యకంలోని ఉరుము *ద, ద, ద* అంటుంది — అదుపు, దానం, దయ. పంచుకోకుండా ఒంటరిగా తినేవాడు పాపాన్నే తింటాడని ఋగ్వేదపు దాన సూక్తం హెచ్చరిస్తుంది. శ్రద్ధతో, ఉదారంగా, వినయంగా ఇవ్వమని తైత్తిరీయం చెబుతుంది. యజ్ఞం అనే ఆలోచన మొత్తం మనం పొందినదాన్ని తిరిగి ఇవ్వడమే."],
   ["vdlink", "Gārgī, Maitreyī and the thunder", "గార్గి, మైత్రేయి, ఉరుము", "vy-10"],
   ["h", "Respect — for Parents, Teachers, Guests and the Earth", "గౌరవం — తల్లిదండ్రులకు, గురువులకు, అతిథులకు, భూమికి"],
   ["p", "Treat your mother, father, teacher and guest as God. Never turn away someone who comes to your door. And treat the Earth as your mother: whatever you take from her, let it grow back; never pierce her heart.", "తల్లిని, తండ్రిని, గురువును, అతిథిని దేవునిగా చూడు. నీ గుమ్మం దగ్గరకు వచ్చినవారిని ఎప్పుడూ తిప్పి పంపకు. భూమిని నీ తల్లిగా చూడు: ఆమె నుండి ఏది తీసుకున్నా, అది మళ్ళీ పెరగాలి; ఆమె హృదయాన్ని ఎప్పుడూ గుచ్చకు."]
  ],
  [
   ["h", "Openness and Harmony", "విశాల హృదయం, సామరస్యం"],
   ["p", "A famous Ṛgveda prayer asks that good and noble thoughts come to us from every direction. Another verse, seen by {dirghatamas|Dīrghatamas}, says that Truth is one, but the wise call it by many names. The Ṛgveda ends with a prayer that our hearts, our minds and our purposes be one, so that we may live together happily. The Vedas, in other words, ask us to be open to wisdom from anywhere, respectful of other paths, and devoted to harmony.", "ప్రసిద్ధమైన ఒక ఋగ్వేద ప్రార్థన మంచి, ఉదాత్తమైన ఆలోచనలు అన్ని దిక్కుల నుండి మాకు రావాలని అడుగుతుంది. {dirghatamas|దీర్ఘతముడు} దర్శించిన మరో మంత్రం, సత్యం ఒక్కటే, కానీ జ్ఞానులు దాన్ని ఎన్నో పేర్లతో పిలుస్తారని చెబుతుంది. మన హృదయాలు, మనసులు, లక్ష్యాలు ఒక్కటై, మనం కలిసి సంతోషంగా జీవించాలనే ప్రార్థనతో ఋగ్వేదం ముగుస్తుంది. అంటే, ఎక్కడి నుండైనా జ్ఞానాన్ని స్వీకరించమని, ఇతర మార్గాలను గౌరవించమని, సామరస్యానికి అంకితం కావాలని వేదాలు అడుగుతాయి."],
   ["vdlink", "“Let your hearts be one” — the Ṛgveda today", "“మీ హృదయాలు ఒక్కటి కావాలి” — ఈ రోజు ఋగ్వేదం", "vr-11"],
   ["h", "Peace, Three Times", "శాంతి, మూడుసార్లు"],
   ["p", "Almost every Vedic chant ends with *Om śāntiḥ śāntiḥ śāntiḥ* — peace, peace, peace. Teachers say it is said three times for three kinds of trouble: trouble from within ourselves, trouble from other beings around us, and trouble from the forces of nature beyond our control. May there be peace in all three. That, in the end, is what the Vedas wish for every one of us.", "దాదాపు ప్రతి వేదపఠనం *ఓం శాంతిః శాంతిః శాంతిః* — శాంతి, శాంతి, శాంతి — తో ముగుస్తుంది. మూడు రకాల కష్టాల కోసం మూడుసార్లు చెబుతారని ఆచార్యులు అంటారు: మనలో నుండి వచ్చే కష్టం (ఆధ్యాత్మికం), మన చుట్టూ ఉన్న ఇతర ప్రాణుల నుండి వచ్చే కష్టం (ఆధిభౌతికం), మన అదుపులో లేని ప్రకృతి శక్తుల నుండి వచ్చే కష్టం (ఆధిదైవికం). మూడింటిలోనూ శాంతి ఉండాలి. చివరికి, వేదాలు మనలో ప్రతి ఒక్కరి కోసం కోరేది అదే."],
   ["src", "Taittirīya Upaniṣad 1.11 (speak the truth; honour mother, father, teacher, guest; give with faith); Muṇḍaka Upaniṣad 3.1.6 (*satyameva jayate*); Bṛhadāraṇyaka Upaniṣad 5.2 (*da, da, da*); Ṛgveda 10.117.6 (who eats alone eats sin); Taittirīya Upaniṣad 3.10 (never turn away a guest); Atharvaveda 12.1.35 (may what I dig grow back); Ṛgveda 1.89.1 (noble thoughts from every side), 1.164.46 (Truth is one, called by many names), 10.191 (hearts and minds as one). The threefold *śānti* and its usual explanation (ādhyātmika, ādhibhautika, ādhidaivika).", "తైత్తిరీయోపనిషత్తు 1.11 (సత్యం చెప్పు; తల్లి, తండ్రి, గురువు, అతిథిని గౌరవించు; శ్రద్ధతో ఇవ్వు); ముండకోపనిషత్తు 3.1.6 (*సత్యమేవ జయతే*); బృహదారణ్యకోపనిషత్తు 5.2 (*ద, ద, ద*); ఋగ్వేదం 10.117.6 (ఒంటరిగా తినేవాడు పాపం తింటాడు); తైత్తిరీయోపనిషత్తు 3.10 (అతిథిని ఎప్పుడూ తిప్పి పంపకు); అథర్వవేదం 12.1.35 (నేను తవ్వినది మళ్ళీ పెరగాలి); ఋగ్వేదం 1.89.1 (అన్ని దిక్కుల నుండి మంచి ఆలోచనలు), 1.164.46 (సత్యం ఒక్కటే, ఎన్నో పేర్లు), 10.191 (హృదయాలు, మనసులు ఒక్కటి). మూడుసార్లు *శాంతి*, దాని సాధారణ వివరణ (ఆధ్యాత్మిక, ఆధిభౌతిక, ఆధిదైవిక)."]
  ]
 ],
 remember: [
  ["Truth, giving, self-control and compassion are at the heart of Vedic living.", "సత్యం, దానం, నిగ్రహం, దయ వైదిక జీవనానికి హృదయం."],
  ["Honour parents, teachers, guests — and the Earth as your mother.", "తల్లిదండ్రులను, గురువులను, అతిథులను — భూమిని తల్లిగా — గౌరవించు."],
  ["“Truth is one; the wise call it by many names” — and peace, three times, for all.", "“సత్యం ఒక్కటే; జ్ఞానులు దాన్ని ఎన్నో పేర్లతో పిలుస్తారు” — అందరికీ మూడుసార్లు శాంతి."]
 ],
 think: ["Of all the teachings in this chapter, which one would make the biggest difference if your whole family practised it for one week?", "ఈ అధ్యాయంలోని బోధలన్నిటిలో, మీ కుటుంబమంతా ఒక వారం ఆచరిస్తే ఏది అతి పెద్ద మార్పు తెస్తుంది?"]
},
{
 id: "vl-11", book: "life", n: 11, order: 611, date: "2026-10-22",
 title: "How to Begin — and Why It Matters", titleTe: "ఎలా మొదలుపెట్టాలి — ఇది ఎందుకు ముఖ్యం",
 src: "Present-day learning paths",
 who: [],
 pages: [
  [
   ["p", "Perhaps, after reading these books, you would like to come closer to the Vedas yourself. Where do you start? The good news is that there are many doors, and you can walk through whichever one suits you.", "ఈ పుస్తకాలు చదివిన తర్వాత, బహుశా మీరే స్వయంగా వేదాలకు దగ్గరవ్వాలనుకోవచ్చు. ఎక్కడ మొదలుపెట్టాలి? మంచి వార్త ఏమిటంటే, ఎన్నో తలుపులు ఉన్నాయి, మీకు సరిపోయే దాని గుండా నడవవచ్చు."],
   ["h", "Listen", "వినండి"],
   ["p", "The easiest beginning is simply to listen. Recordings of Vedic chanting — the Rudram, the Puruṣa Sūkta, the Śānti mantras, Sāma songs — are easy to find. Play one in the morning while the house wakes up. You do not have to understand every word. The Vedas were made to be heard before they were understood, and the sound itself has a calming power that millions have felt.", "అతి సులభమైన మొదలు కేవలం వినడం. వేదపఠన రికార్డింగ్‌లు — రుద్రం, పురుష సూక్తం, శాంతి మంత్రాలు, సామ గానాలు — సులభంగా దొరుకుతాయి. ఇల్లు నిద్రలేస్తున్నప్పుడు ఉదయం ఒకటి పెట్టండి. ప్రతి మాటా అర్థం కానక్కర్లేదు. వేదాలు అర్థం కావడానికి ముందే వినబడటానికి ఏర్పడ్డాయి, ఆ శబ్దానికే కోట్లాది మంది అనుభవించిన ప్రశాంతపరిచే శక్తి ఉంది."]
  ],
  [
   ["h", "Chant", "పఠించండి"],
   ["p", "If you want to chant, find a teacher. Vedic chanting depends on accents, rhythm and pronunciation that are very hard to learn from a book alone — which is exactly why the Veda has always passed from a living voice to a living ear. Many temples, Vedic schools and cultural organisations, in India and abroad, teach classes, and many teachers now teach online. Start small: the Śānti mantras, the Gāyatrī if your tradition gives it to you, the Puruṣa Sūkta. Then perhaps one day, the Rudram.", "పఠించాలనుకుంటే, ఒక గురువును వెతకండి. వేదపఠనం స్వరాలు, లయ, ఉచ్చారణ మీద ఆధారపడి ఉంటుంది, అవి కేవలం పుస్తకం నుండి నేర్చుకోవడం చాలా కష్టం — అందుకే వేదం ఎప్పుడూ సజీవ గొంతు నుండి సజీవ చెవికి అందుతూ వచ్చింది. భారతదేశంలో, విదేశాలలో చాలా ఆలయాలు, వేద పాఠశాలలు, సాంస్కృతిక సంస్థలు తరగతులు నిర్వహిస్తాయి, చాలా మంది గురువులు ఇప్పుడు ఆన్‌లైన్‌లో కూడా నేర్పుతారు. చిన్నగా మొదలుపెట్టండి: శాంతి మంత్రాలు, మీ సంప్రదాయం మీకు ఇస్తే గాయత్రి, పురుష సూక్తం. ఆ తర్వాత బహుశా ఒకరోజు, రుద్రం."],
   ["p", "This app is a place to practise what you learn. The Śrī Rudram is here in full, with the Viṣṇu Sahasranāmam, the Bhagavad Gītā — which tradition calls the essence of the Upaniṣads — and more. Use it alongside a teacher, not instead of one.", "మీరు నేర్చుకున్నది సాధన చేయడానికి ఈ యాప్ ఒక చోటు. శ్రీ రుద్రం ఇక్కడ పూర్తిగా ఉంది, విష్ణు సహస్రనామం, భగవద్గీత — సంప్రదాయం ఉపనిషత్తుల సారంగా పిలిచేది — ఇంకా ఎన్నో ఉన్నాయి. గురువుకు బదులుగా కాకుండా, గురువుతో పాటు దీన్ని వాడండి."]
  ],
  [
   ["h", "Read and Live", "చదవండి, జీవించండి"],
   ["p", "You do not need Sanskrit to read the Upaniṣads — good translations exist in Telugu, English and many other languages. Start with a short one: the Īśa, the Kena or the Kaṭha. Read a few lines a day and think about them. And most important of all, try living just one teaching: speak the truth for a week; feed someone; touch the earth with thanks in the morning; sit quietly for a minute at sunset.", "ఉపనిషత్తులు చదవడానికి మీకు సంస్కృతం అక్కర్లేదు — తెలుగులో, ఇంగ్లీషులో, ఇంకా ఎన్నో భాషలలో మంచి అనువాదాలు ఉన్నాయి. ఒక చిన్నదానితో మొదలుపెట్టండి: ఈశ, కేన, లేక కఠ. రోజుకు కొన్ని వాక్యాలు చదివి వాటి గురించి ఆలోచించండి. అన్నిటికంటే ముఖ్యంగా, ఒక్క బోధనైనా జీవించడానికి ప్రయత్నించండి: ఒక వారం సత్యం చెప్పండి; ఎవరికైనా అన్నం పెట్టండి; ఉదయం కృతజ్ఞతతో నేలను తాకండి; సాయంత్రం సూర్యాస్తమయం వేళ ఒక నిమిషం నిశ్శబ్దంగా కూర్చోండి."]
  ],
  [
   ["h", "Why It Matters", "ఇది ఎందుకు ముఖ్యం"],
   ["p", "For thousands of years, the Vedas survived because, in every generation, some families chose to carry them — father to son, teacher to student, grandmother to grandchild — without writing, without being paid much, often without being noticed. Branches of the Veda have been lost when a single family line ended. Others, like the Jaiminīya Sāma and the Paippalāda Atharva, were saved by a handful of people who would not let go.", "వేల సంవత్సరాలుగా వేదాలు నిలిచాయి, ఎందుకంటే ప్రతి తరంలో కొన్ని కుటుంబాలు వాటిని మోయాలని ఎంచుకున్నాయి — తండ్రి నుండి కొడుకుకు, గురువు నుండి శిష్యుడికి, అమ్మమ్మ నుండి మనవడికి — రాయకుండా, ఎక్కువ ప్రతిఫలం లేకుండా, తరచుగా ఎవరూ గమనించకుండా. ఒకే కుటుంబ వరుస ముగిసినప్పుడు వేదపు శాఖలు పోయాయి. జైమినీయ సామం, పైప్పలాద అథర్వం వంటి మరికొన్ని, వదలనని పట్టుబట్టిన కొద్దిమంది వల్ల రక్షించబడ్డాయి."],
   ["p", "Now it is our turn. You do not have to become a priest or a scholar. But if you know a little of what the Vedas are, and why they matter, and you pass even that much to the next child in your family, you have joined the longest unbroken chain of memory in the world. The seers sang. Their children listened. And now, so have you.", "ఇప్పుడు మన వంతు. మీరు పురోహితులో పండితులో కానక్కర్లేదు. కానీ వేదాలు అంటే ఏమిటో, అవి ఎందుకు ముఖ్యమో కొంచెమైనా మీకు తెలిస్తే, ఆ కొంచెమైనా మీ కుటుంబంలోని తర్వాతి బిడ్డకు అందిస్తే, మీరు ప్రపంచంలోనే అతి పొడవైన, తెగని జ్ఞాపకాల గొలుసులో చేరినట్టే. ఋషులు పాడారు. వారి పిల్లలు విన్నారు. ఇప్పుడు, మీరు కూడా విన్నారు."],
   ["dyk", "🕉️", "Om śāntiḥ śāntiḥ śāntiḥ — peace within, peace around, peace from above.", "ఓం శాంతిః శాంతిః శాంతిః — లోపల శాంతి, చుట్టూ శాంతి, పై నుండి శాంతి."],
   ["vdlink", "Back to the beginning — “Veda” means knowledge", "మళ్ళీ మొదటికి — “వేదం” అంటే జ్ఞానం", "vi-1"],
   ["src", "Practical suggestions for beginners, drawn from present-day learning paths (recordings, teachers, Vedic schools, online classes, translations). The Bhagavad Gītā as the essence of the Upaniṣads follows the traditional verse comparing the Upaniṣads to cows and the Gītā to their milk (Gītā Dhyānam). The near-loss and survival of the Jaiminīya Sāmaveda and Paippalāda Atharvaveda: see the Sāmaveda and Atharvaveda books.", "ప్రారంభకులకు ఆచరణాత్మక సూచనలు — ఈ కాలపు నేర్చుకునే మార్గాల నుండి (రికార్డింగ్‌లు, గురువులు, వేద పాఠశాలలు, ఆన్‌లైన్ తరగతులు, అనువాదాలు). ఉపనిషత్తులను ఆవులుగా, గీతను వాటి పాలుగా పోల్చే సంప్రదాయ శ్లోకం (గీతా ధ్యానం) ప్రకారం భగవద్గీత ఉపనిషత్తుల సారం. జైమినీయ సామవేదం, పైప్పలాద అథర్వవేదం దాదాపు పోయి నిలవడం: సామవేద, అథర్వవేద పుస్తకాలు చూడండి."]
  ]
 ],
 remember: [
  ["Begin by listening; the Vedas were made to be heard.", "వినడంతో మొదలుపెట్టండి; వేదాలు వినబడటానికే ఏర్పడ్డాయి."],
  ["To chant, find a teacher — the Veda passes from voice to ear.", "పఠించడానికి గురువును వెతకండి — వేదం గొంతు నుండి చెవికి అందుతుంది."],
  ["Pass even a little to the next child — and join the longest chain of memory in the world.", "కొంచెమైనా తర్వాతి బిడ్డకు అందించండి — ప్రపంచంలోనే అతి పొడవైన జ్ఞాపకాల గొలుసులో చేరండి."]
 ],
 think: ["What is one thing from these six books that you would like to share with a younger person in your family? When will you tell them?", "ఈ ఆరు పుస్తకాల నుండి మీ కుటుంబంలోని చిన్నవారితో పంచుకోవాలనుకునే ఒక విషయం ఏమిటి? వారికి ఎప్పుడు చెబుతారు?"]
}
]);
