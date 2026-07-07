const DEFAULT_DATA = {
  version: "0.2-mobile-personale",
  updatedAt: "2026-07-07",
  pv: 8366,
  language: "it",
  currentTeam: ["Lucario", "Spiritomb", "Sylveon", "Dragonite", "Snorlax", "Raichu"],
  items: [
    { name: "Erbachiara", category: "Statistiche", qty: 1 },
    { name: "Stolascelta", category: "Statistiche", qty: 1 },
    { name: "Miracolseme", category: "Potenza", qty: 1 },
    { name: "Bandana", category: "Difesa", qty: 1 },
    { name: "Focalnastro", category: "Difesa", qty: 1 },
    { name: "Avanzi", category: "Cura", qty: 1 },
    { name: "Baccaprugna", category: "Cura", qty: 1 },
    { name: "Baccacedro", category: "Cura", qty: 1 },
    { name: "Raichuite X", category: "Megapietra", qty: 1 },
    { name: "Raichuite Y", category: "Megapietra", qty: 1 },
    { name: "Dragonitite", category: "Megapietra", qty: 1 },
    { name: "Lucarite", category: "Megapietra", qty: 1 },
    { name: "Chesnaughtite", category: "Megapietra", qty: 1 },
    { name: "Luminpolvere", category: "Altro", qty: 1 },
    { name: "Rapidartiglio", category: "Altro", qty: 1 },
    { name: "Roccia di re", category: "Altro", qty: 1 }
  ],
  assignedItems: {
    "Lucario": "Lucarite",
    "Spiritomb": "Baccacedro",
    "Sylveon": "Rapidartiglio",
    "Dragonite": "Dragonitite",
    "Snorlax": "Avanzi",
    "Raichu": "Raichuite Y"
  },
  pokemon: [
    {
      name: "Lucario", owned: true, types: ["Lotta", "Acciaio"], role: "attaccante speciale", tags: ["mega", "setup", "priority"], meta: 82,
      current: { ability: "Forza Interiore", item: "Lucarite", nature: "Modesta", moves: ["Sferapulsar", "Cannonflash", "Vuotonda", "Congiura"] },
      ideal: { ability: "Adattabilità", item: "Lucarite", nature: "Timida", moves: ["Forzasfera", "Cannonflash", "Vuotonda", "Congiura"], stats: { "PS": 4, "Attacco": 0, "Difesa": 0, "Attacco Speciale": 252, "Difesa Speciale": 0, "Velocità": 252 } },
      upgrades: [{ text: "Confermare Mega Lucario come win condition speciale", cost: 900, impact: 25 }, { text: "Ottimizzare Velocità e Attacco Speciale", cost: 1600, impact: 30 }, { text: "Valutare Protezione al posto di una copertura se giochi VGC", cost: 500, impact: 10 }]
    },
    {
      name: "Sylveon", owned: true, types: ["Folletto"], role: "attaccante speciale", tags: ["spread", "yawn", "fairy"], meta: 76,
      current: { ability: "Pellefolletto", item: "Rapidartiglio", nature: "Modesta", moves: ["Granvoce", "Palla Ombra", "Sbadiglio", "Coro"] },
      ideal: { ability: "Pellefolletto", item: "Stolascelta", nature: "Modesta", moves: ["Granvoce", "Palla Ombra", "Sbadiglio", "Protezione"], stats: { "PS": 196, "Attacco": 0, "Difesa": 60, "Attacco Speciale": 252, "Difesa Speciale": 0, "Velocità": 0 } },
      upgrades: [{ text: "Sostituire Rapidartiglio: è troppo casuale per una build stabile", cost: 0, impact: 18 }, { text: "Massimizzare Attacco Speciale", cost: 1200, impact: 24 }, { text: "Tenere Granvoce + Pellefolletto come asse principale", cost: 0, impact: 15 }]
    },
    {
      name: "Dragonite", owned: true, types: ["Drago", "Volante"], role: "attaccante fisico", tags: ["mega", "priority", "setup"], meta: 84,
      current: { ability: "Multisquame", item: "Dragonitite", nature: "Modesta", moves: ["Dragobolide", "Lanciafiamme", "Geloraggio", "Extrarapido"] },
      ideal: { ability: "Pellecielo", item: "Dragonitite", nature: "Decisa", moves: ["Dragodanza", "Extrarapido", "Terremoto", "Protezione"], stats: { "PS": 4, "Attacco": 252, "Difesa": 0, "Attacco Speciale": 0, "Difesa Speciale": 0, "Velocità": 252 } },
      upgrades: [{ text: "Decidere se convertirlo da speciale a fisico: probabile upgrade grosso", cost: 1800, impact: 34 }, { text: "Tenere Extrarapido come priorità", cost: 0, impact: 18 }, { text: "Aggiungere Dragodanza solo se lo giochi da cleaner", cost: 900, impact: 22 }]
    },
    {
      name: "Raichu", owned: true, types: ["Elettro"], role: "supporto", tags: ["mega", "speed", "electric"], meta: 66,
      current: { ability: "Parafulmine", item: "Raichuite Y", nature: "Timida", moves: ["Elettrocannone", "Carineria", "Assorbipugno", "Apripista"] },
      ideal: { ability: "Parafulmine", item: "Raichuite Y", nature: "Timida", moves: ["Bruciapelo", "Invertivolt", "Elettrotela", "Protezione"], stats: { "PS": 4, "Attacco": 0, "Difesa": 0, "Attacco Speciale": 252, "Difesa Speciale": 0, "Velocità": 252 } },
      upgrades: [{ text: "Ridurre mosse imprecise/situazionali: Elettrocannone è rischiosa", cost: 600, impact: 20 }, { text: "Usarlo come supporto veloce più che come sweeper", cost: 900, impact: 18 }]
    },
    {
      name: "Snorlax", owned: true, types: ["Normale"], role: "bulky", tags: ["trickroom", "yawn", "tank"], meta: 79,
      current: { ability: "Grassospesso", item: "Avanzi", nature: "Vivace", moves: ["Sbadiglio", "Corposcontro", "Terremoto", "Pesobomba"] },
      ideal: { ability: "Grassospesso", item: "Avanzi", nature: "Audace", moves: ["Sbadiglio", "Corposcontro", "Terremoto", "Protezione"], stats: { "PS": 252, "Attacco": 156, "Difesa": 100, "Attacco Speciale": 0, "Difesa Speciale": 0, "Velocità": 0 } },
      upgrades: [{ text: "Mantenerlo se Spiritomb resta con Distortozona", cost: 0, impact: 16 }, { text: "Investire PS + Attacco, velocità bassa se giochi Distortozona", cost: 1500, impact: 26 }]
    },
    {
      name: "Spiritomb", owned: true, types: ["Spettro", "Buio"], role: "supporto", tags: ["trickroom", "special", "ghost"], meta: 70,
      current: { ability: "Intrapasso", item: "Baccacedro", nature: "Quieta", moves: ["Congiura", "Psichico", "Distortozona", "Palla Ombra"] },
      ideal: { ability: "Intrapasso", item: "Baccacedro", nature: "Quieta", moves: ["Distortozona", "Palla Ombra", "Fuocofatuo", "Protezione"], stats: { "PS": 252, "Attacco": 0, "Difesa": 116, "Attacco Speciale": 140, "Difesa Speciale": 0, "Velocità": 0 } },
      upgrades: [{ text: "Chiarire ruolo: setter Distortozona o attaccante con Congiura", cost: 300, impact: 18 }, { text: "Se resta setter, aggiungere utility/difesa", cost: 800, impact: 22 }]
    },
    { name: "Gyarados", owned: true, types: ["Acqua", "Volante"], role: "attaccante fisico", tags: ["intimidate", "setup", "water"], meta: 83, current: { ability: "Prepotenza", item: "", nature: "Decisa", moves: ["Cascata", "Terremoto", "Gelodenti", "Dragodanza"] }, ideal: { ability: "Prepotenza", item: "Baccaprugna", nature: "Decisa", moves: ["Cascata", "Terremoto", "Gelodenti", "Dragodanza"], stats: { "PS": 4, "Attacco": 252, "Difesa": 0, "Attacco Speciale": 0, "Difesa Speciale": 0, "Velocità": 252 } }, upgrades: [{ text: "Candidato forte a entrare al posto di Raichu se serve presenza fisica", cost: 900, impact: 28 }] },
    { name: "Zoroark Forma di Hisui", owned: true, types: ["Normale", "Spettro"], role: "attaccante speciale", tags: ["ghost", "speed", "immunity"], meta: 81, current: { ability: "Illusione", item: "", nature: "Timida", moves: ["Palla Ombra", "Ipervoce", "Lanciafiamme", "Congiura"] }, ideal: { ability: "Illusione", item: "Focalnastro", nature: "Timida", moves: ["Palla Ombra", "Ipervoce", "Lanciafiamme", "Protezione"], stats: { "PS": 4, "Attacco": 0, "Difesa": 0, "Attacco Speciale": 252, "Difesa Speciale": 0, "Velocità": 252 } }, upgrades: [{ text: "Molto buon candidato offensivo speciale; valutare Focalnastro", cost: 1200, impact: 30 }] },
    { name: "Rotom Forma Vortice", owned: true, types: ["Elettro", "Volante"], role: "supporto", tags: ["levitate", "electric", "pivot"], meta: 74, current: { ability: "Levitazione", item: "", nature: "Calma", moves: ["Fulmine", "Invertivolt", "Fuocofatuo", "Protezione"] }, ideal: { ability: "Levitazione", item: "Baccacedro", nature: "Calma", moves: ["Fulmine", "Invertivolt", "Fuocofatuo", "Protezione"], stats: { "PS": 252, "Attacco": 0, "Difesa": 80, "Attacco Speciale": 44, "Difesa Speciale": 132, "Velocità": 0 } }, upgrades: [{ text: "Buona alternativa a Raichu se vuoi più solidità", cost: 800, impact: 22 }] },
    { name: "Blaziken", owned: true, types: ["Fuoco", "Lotta"], role: "attaccante fisico", tags: ["speed", "fire", "fighting"], meta: 78, current: { ability: "Acceleratore", item: "", nature: "Decisa", moves: ["Fuococarica", "Zuffa", "Protezione", "Danzaspada"] }, ideal: { ability: "Acceleratore", item: "Focalnastro", nature: "Decisa", moves: ["Fuococarica", "Zuffa", "Protezione", "Danzaspada"], stats: { "PS": 4, "Attacco": 252, "Difesa": 0, "Attacco Speciale": 0, "Difesa Speciale": 0, "Velocità": 252 } }, upgrades: [{ text: "Candidato offensivo se serve Fuoco/Lotta fisico", cost: 1300, impact: 25 }] },
    { name: "Froslass", owned: true, types: ["Ghiaccio", "Spettro"], role: "speed control", tags: ["speed", "ghost", "ice"], meta: 72, current: { ability: "Corpogelo", item: "", nature: "Timida", moves: ["Ventogelato", "Palla Ombra", "Provocazione", "Destinobbligato"] }, ideal: { ability: "Corpogelo", item: "Focalnastro", nature: "Timida", moves: ["Ventogelato", "Palla Ombra", "Provocazione", "Destinobbligato"], stats: { "PS": 4, "Attacco": 0, "Difesa": 0, "Attacco Speciale": 252, "Difesa Speciale": 0, "Velocità": 252 } }, upgrades: [{ text: "Lead veloce fragile: rende molto meglio con Focalnastro", cost: 700, impact: 20 }] },
    { name: "Gardevoir", owned: true, types: ["Psico", "Folletto"], role: "attaccante speciale", tags: ["fairy", "psychic"], meta: 69, current: { ability: "Traccia", item: "", nature: "Timida", moves: ["Psichico", "Magibrillio", "Palla Ombra", "Protezione"] }, ideal: { ability: "Traccia", item: "Stolascelta", nature: "Timida", moves: ["Psichico", "Magibrillio", "Palla Ombra", "Protezione"], stats: { "PS": 4, "Attacco": 0, "Difesa": 0, "Attacco Speciale": 252, "Difesa Speciale": 0, "Velocità": 252 } }, upgrades: [{ text: "Buona ma sovrapposta a Sylveon/Zoroark come speciale", cost: 900, impact: 16 }] },
    { name: "Kommo-o", owned: true, types: ["Drago", "Lotta"], role: "bulky", tags: ["dragon", "fighting"], meta: 73, current: { ability: "Antiproiettile", item: "", nature: "Modesta", moves: ["Clamorsquame", "Forzasfera", "Lanciafiamme", "Protezione"] }, ideal: { ability: "Antiproiettile", item: "Baccaprugna", nature: "Modesta", moves: ["Clamorsquame", "Forzasfera", "Lanciafiamme", "Protezione"], stats: { "PS": 108, "Attacco": 0, "Difesa": 0, "Attacco Speciale": 252, "Difesa Speciale": 0, "Velocità": 148 } }, upgrades: [{ text: "Alternativa drago speciale, ma compete con Dragonite", cost: 1000, impact: 18 }] },
    { name: "Chesnaught", owned: true, types: ["Erba", "Lotta"], role: "bulky", tags: ["mega", "grass", "fighting"], meta: 68, current: { ability: "Antiproiettile", item: "", nature: "Scaltra", moves: ["Agodifesa", "Semebomba", "Assorbipugno", "Parassiseme"] }, ideal: { ability: "Antiproiettile", item: "Chesnaughtite", nature: "Scaltra", moves: ["Agodifesa", "Semebomba", "Assorbipugno", "Parassiseme"], stats: { "PS": 252, "Attacco": 4, "Difesa": 252, "Attacco Speciale": 0, "Difesa Speciale": 0, "Velocità": 0 } }, upgrades: [{ text: "Hai la Chesnaughtite, ma il team attuale ha già Mega più impattanti", cost: 1000, impact: 14 }] },
    { name: "Staraptor", owned: true, types: ["Normale", "Volante"], role: "attaccante fisico", tags: ["intimidate", "flying"], meta: 64, current: { ability: "Prepotenza", item: "", nature: "Allegra", moves: ["Baldeali", "Zuffa", "Retromarcia", "Attacco Rapido"] }, ideal: { ability: "Prepotenza", item: "Stolascelta", nature: "Allegra", moves: ["Baldeali", "Zuffa", "Retromarcia", "Attacco Rapido"], stats: { "PS": 4, "Attacco": 252, "Difesa": 0, "Attacco Speciale": 0, "Difesa Speciale": 0, "Velocità": 252 } }, upgrades: [{ text: "Utile, ma spesso meno prioritario di Gyarados/Dragonite", cost: 800, impact: 12 }] },
    { name: "Gourgeist", owned: true, types: ["Spettro", "Erba"], role: "bulky", tags: ["ghost", "grass", "trickroom"], meta: 62, current: { ability: "Raccolta", item: "", nature: "Scaltra", moves: ["Fuocofatuo", "Semebomba", "Halloween", "Protezione"] }, ideal: { ability: "Indagine", item: "Avanzi", nature: "Scaltra", moves: ["Fuocofatuo", "Semebomba", "Parassiseme", "Protezione"], stats: { "PS": 252, "Attacco": 0, "Difesa": 252, "Attacco Speciale": 0, "Difesa Speciale": 4, "Velocità": 0 } }, upgrades: [{ text: "Bulky interessante, ma non prioritario con Spiritomb/Snorlax già presenti", cost: 700, impact: 10 }] },
    { name: "Decidueye", owned: true, types: ["Erba", "Spettro"], role: "attaccante fisico", tags: ["ghost", "grass"], meta: 65, current: { ability: "Distacco", item: "", nature: "Decisa", moves: ["Cucitura d'Ombra", "Fendifoglia", "Danzaspada", "Protezione"] }, ideal: { ability: "Distacco", item: "Miracolseme", nature: "Decisa", moves: ["Cucitura d'Ombra", "Fendifoglia", "Danzaspada", "Protezione"], stats: { "PS": 4, "Attacco": 252, "Difesa": 0, "Attacco Speciale": 0, "Difesa Speciale": 0, "Velocità": 252 } }, upgrades: [{ text: "Può usare Miracolseme, ma non risolve i buchi principali", cost: 900, impact: 13 }] },
    { name: "Machamp", owned: true, types: ["Lotta"], role: "attaccante fisico", tags: ["trickroom", "fighting"], meta: 61, current: { ability: "Nullodifesa", item: "", nature: "Audace", moves: ["Dinamipugno", "Privazione", "Pietrataglio", "Protezione"] }, ideal: { ability: "Nullodifesa", item: "Bandana", nature: "Audace", moves: ["Dinamipugno", "Privazione", "Pietrataglio", "Protezione"], stats: { "PS": 252, "Attacco": 252, "Difesa": 4, "Attacco Speciale": 0, "Difesa Speciale": 0, "Velocità": 0 } }, upgrades: [{ text: "Ha senso solo se scegli davvero Distortozona", cost: 800, impact: 12 }] },
    { name: "Victreebel", owned: true, types: ["Erba", "Veleno"], role: "attaccante fisico", tags: ["grass", "poison", "sun"], meta: 58, current: { ability: "Clorofilla", item: "", nature: "Decisa", moves: ["Velenpuntura", "Fendifoglia", "Privazione", "Sonnifero"] }, ideal: { ability: "Clorofilla", item: "Miracolseme", nature: "Decisa", moves: ["Velenpuntura", "Fendifoglia", "Privazione", "Sonnifero"], stats: { "PS": 4, "Attacco": 252, "Difesa": 0, "Attacco Speciale": 0, "Difesa Speciale": 0, "Velocità": 252 } }, upgrades: [{ text: "Per ora basso impatto senza core sole", cost: 600, impact: 8 }] }
  ],
  hires: [
    { name: "Incineroar", owned: false, types: ["Fuoco", "Buio"], role: "supporto", tags: ["intimidate", "fakeout", "pivot"], meta: 94, cost: 0, note: "Candidato esterno da inserire se disponibile/costo noto." },
    { name: "Kingambit", owned: false, types: ["Buio", "Acciaio"], role: "attaccante fisico", tags: ["priority", "steel", "dark"], meta: 92, cost: 0, note: "Candidato meta forte, costo da confermare." },
    { name: "Basculegion", owned: false, types: ["Acqua", "Spettro"], role: "attaccante fisico", tags: ["water", "ghost", "speed"], meta: 91, cost: 0, note: "Candidato meta, costo da confermare." },
    { name: "Whimsicott", owned: false, types: ["Erba", "Folletto"], role: "speed control", tags: ["tailwind", "support"], meta: 88, cost: 0, note: "Candidato se serve speed control immediato." },
    { name: "Garchomp", owned: false, types: ["Drago", "Terra"], role: "attaccante fisico", tags: ["ground", "dragon", "speed"], meta: 89, cost: 0, note: "Candidato fisico stabile." }
  ]
};
