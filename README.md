# Pokémon Champions Manager

**Pokémon Champions Manager** è una web app/PWA mobile-first pensata per gestire il proprio box, la squadra, gli oggetti, i PV e le build competitive di Pokémon Champions.

Il progetto nasce per uso personale e per funzionare bene da smartphone e tablet Android, senza APK, senza backend e senza dipendenze esterne. La pubblicazione avviene tramite GitHub Pages.

## Link app

https://cescky93.github.io/pkmnchampmanager/

## Stato attuale

Versione attuale: **v1.1 – IA Ready Manager**

La direzione del progetto è stata corretta: l'app non prova più a sostituire una IA competitiva completa, ma diventa un **manager ordinato dei dati** e un ponte pratico verso ChatGPT, Claude, Gemini o altre IA.

In pratica:

- l'app conserva e organizza i dati;
- l'utente aggiorna rapidamente box, PV, oggetti, team e build;
- l'app esporta un prompt/JSON pulito per chiedere analisi mirate a una IA;
- la IA restituisce consigli e, quando possibile, JSON reimportabile.

## Funzioni principali

### Dashboard

- Vista rapida dei PV disponibili.
- Conteggio Pokémon registrati.
- Conteggio strumenti disponibili.
- Selettore formato preferito: **Singolo** o **Doppio**.
- Modifica rapida della squadra attuale da 6 Pokémon.
- Assegnazione rapida degli oggetti ai membri della squadra.

### Gestione rosa / box

- Elenco Pokémon posseduti.
- Ricerca per nome, tipo, ruolo, abilità o mossa.
- Schede Pokémon più leggibili rispetto alle prime versioni.
- Aggiunta o aggiornamento rapido di un Pokémon già presente.
- Campi utili per:
  - tipi;
  - ruolo;
  - score;
  - natura;
  - abilità;
  - mosse;
  - oggetto assegnato.

### Gestione oggetti

- Lista strumenti e Megapietre disponibili.
- Aggiunta rapida di nuovi oggetti.
- Collegamento con gli oggetti assegnati alla squadra.

### Team Singolo / Doppio

La squadra base resta composta da 6 Pokémon, ma l'app distingue i due formati competitivi.

#### Singolo 3v3

- Selezione di 3 Pokémon da una squadra da 6.
- Lead consigliato/manuale.
- Varianti 3v3 salvabili.
- Note strategiche.

#### Doppio

- Selezione coppia lead.
- Backup/core.
- Piani Doppio salvabili.
- Note strategiche.

### Build Advisor locale

L'app mantiene consigli base per formato, senza pretendere di sostituire una vera analisi IA.

Può conservare informazioni come:

- moveset consigliato;
- natura consigliata;
- statistiche da privilegiare;
- strumento consigliato;
- abilità consigliata;
- note diverse tra Singolo e Doppio.

### Export per IA

Una delle funzioni più importanti del progetto.

L'app genera un prompt/JSON strutturato contenente:

- PV disponibili;
- box;
- squadra attuale;
- strumenti disponibili;
- oggetti assegnati;
- build note;
- formato scelto;
- richiesta di analisi mirata.

L'utente può copiarlo e inviarlo a ChatGPT, Claude, Gemini o altre IA per ricevere:

- miglior team da 6;
- miglior trio Singolo 3v3;
- miglior piano Doppio;
- build consigliate;
- natura;
- statistiche;
- mosse;
- oggetti;
- priorità PV;
- eventuale JSON aggiornato da reimportare.

### Import / Export JSON

- Esportazione dati completa.
- Importazione JSON da file o testo.
- Migrazione automatica dei dati dalle versioni precedenti.
- Salvataggio locale nel browser.

## Scelte tecniche

- App single-file: `index.html`.
- Nessun backend.
- Nessuna API key.
- Nessuna IA integrata direttamente.
- Nessun service worker aggressivo.
- Nessuna dipendenza esterna.
- Dati salvati in `localStorage`.
- Pubblicazione tramite GitHub Pages.

Questa scelta riduce i problemi di cache, deploy e compatibilità mobile.

## Uso consigliato

1. Aprire la web app da smartphone o tablet.
2. Aggiornare PV, box, squadra, oggetti e build.
3. Usare la sezione **Export per IA**.
4. Copiare il prompt generato.
5. Inviare il prompt a una IA esterna.
6. Salvare o reimportare i consigli ricevuti.
7. Aggiornare l'app dopo ogni ingaggio, oggetto ottenuto o modifica importante.

## Repository

Questo repository contiene la versione pubblicabile della web app.

File principale:

```text
index.html
```

File di documentazione consigliati:

```text
README.md
PKMNChampManager_v11_IA_Ready_Manager.md
```

## Roadmap

### v1.1 – IA Ready Manager

- Interfaccia meno minimal.
- Gestione più comoda da smartphone.
- Dashboard più ricca.
- Schede Pokémon migliorate.
- Export per IA più centrale.

### Prossimi miglioramenti possibili

- Import guidato dei consigli IA.
- Storico modifiche squadra/build.
- Diario test partite.
- Schede build più dettagliate.
- Template separati per analisi Singolo e Doppio.
- Miglior gestione delle priorità PV.

## Nota sul progetto

L'obiettivo non è creare un simulatore competitivo perfetto, ma uno strumento personale per non perdere dati, ridurre inserimenti ripetitivi e preparare richieste molto precise da dare a una IA esterna.

In breve:

> L'app organizza.  
> La IA ragiona.  
> L'utente decide.
