# Champions Team Manager PWA

PWA personale mobile-first per gestire team, box, oggetti, PV, build e ingaggi di Pokémon Champions.

Questa versione è pensata per essere pubblicata gratis su **GitHub Pages** e poi installata su Android con **Aggiungi a schermata Home**.

## Stato progetto

Versione: `0.2-github-pages`

Dati iniziali già inseriti:

- PV disponibili: `8.366`
- Squadra 1: Lucario, Spiritomb, Sylveon, Dragonite, Snorlax, Raichu
- Box attuale: 19/30 Pokémon letti da screen/video
- Oggetti disponibili e assegnati letti dagli screen
- Ottimizzatore euristico: solo posseduti / teorico con ingaggi / risparmio PV / spinta competitiva
- Import/export JSON per aggiornare dati e chiedere analisi IA

## Pubblicazione su GitHub Pages

### Metodo consigliato: Actions

1. Crea un nuovo repository GitHub, per esempio:
   `pokemon-champions-manager`
2. Carica tutti i file di questa cartella nella root del repository, non dentro una sottocartella.
3. Vai su **Settings → Pages**.
4. In **Build and deployment**, scegli:
   - Source: **GitHub Actions**
5. Vai su **Actions** e avvia/controlla il workflow `Deploy static PWA to GitHub Pages`.
6. Quando finisce, GitHub ti darà il link pubblico.

### Metodo alternativo: Deploy from branch

1. Carica i file nella root del repository.
2. Vai su **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main`, cartella `/root`.
5. Salva e attendi la pubblicazione.

## Uso su Android

1. Apri il link GitHub Pages da Chrome sul Galaxy S22 Ultra o sul Tab S9 FE.
2. Menu `⋮` → **Aggiungi a schermata Home** o **Installa app**.
3. Apri l'app dall'icona creata.

## File principali

- `index.html` — struttura dell'app
- `styles.css` — UI mobile-first
- `app.js` — logica, salvataggio locale, ottimizzatore
- `data.js` — dati iniziali personali, Pokémon, oggetti, build, candidati ingaggio
- `manifest.json` — configurazione PWA
- `sw.js` — cache/offline base
- `.github/workflows/pages.yml` — pubblicazione automatica su GitHub Pages

## Come aggiornare Pokémon, oggetti e PV

Dall'app:

- scheda **Aggiorna**: aggiungi Pokémon, oggetti, PV e candidati ingaggio;
- scheda **Dati**: esporta/importa JSON.

Per aggiornamenti grossi:

1. Esporta il JSON dall'app.
2. Fai aggiornare dati/build/meta.
3. Reimporta il JSON nell'app.

## Nota importante

Il motore di consiglio è euristico. Serve per uso personale e per guidare le priorità, ma non verifica automaticamente legalità competitive, regolamenti aggiornati, costi reali di ingaggio o cambiamenti del meta.

I nomi di mosse, abilità, oggetti, nature e statistiche sono impostati in italiano quando presenti nel database.


## Patch v0.3
- Correzione navigazione barra inferiore su PC/mobile/PWA.
- Nuova chiave localStorage per evitare dati/cache vecchi.
- Service worker aggiornato: se GitHub continua a mostrare la versione vecchia, fare refresh forzato o svuotare dati sito.
