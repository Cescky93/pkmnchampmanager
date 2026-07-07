# Pokémon Champions Manager — Step v0.8 cache-kill

## Problema
Il repository mostrava `index.html` aggiornato a v0.7, ma la pagina pubblicata continuava a comportarsi come versione vecchia.
Dopo le versioni precedenti era rimasto un `sw.js` in root: un vecchio service worker può continuare a controllare la pagina e servire asset/cache vecchi anche quando `index.html` è stato aggiornato.

## Decisione
Passare a una v0.8 one-file con:
- tutto in `index.html`;
- nessuna dipendenza da `app.js`, `data.js`, `styles.css`, `manifest.json`;
- navigazione interna gestita direttamente;
- import/export JSON visibile;
- pulsante diagnostico per rimuovere service worker e cache;
- `sw.js` trasformato in cache-killer, non in cache PWA.

## File necessari
Caricare in root del repository:
- `index.html`
- `sw.js`

Non è indispensabile caricare `.nojekyll`.

## Perché caricare anche `sw.js`
Se nel browser dell'utente esiste già un service worker attivo da versioni precedenti, il nuovo `index.html` potrebbe non essere sufficiente.
Il nuovo `sw.js` v0.8:
- elimina le cache;
- si deregistra;
- forza il ritorno alla rete;
- evita che vengano servite versioni vecchie.

## Procedura di test
1. Caricare `index.html` e `sw.js` della v0.8 in root.
2. Verificare su GitHub che `index.html` contenga `v0.8 cache-kill`.
3. Aprire `https://cescky93.github.io/pkmnchampmanager/?v=08`.
4. Se necessario, nella sezione `Dati` premere `Rimuovi vecchi service worker/cache`.
5. Ricaricare la pagina.

## Stato dati
La v0.8 contiene dati iniziali dell'utente:
- 8.366 PV;
- Squadra 1: Lucario, Spiritomb, Sylveon, Dragonite, Snorlax, Raichu;
- box 19/30;
- oggetti e oggetti assegnati;
- candidati ingaggio placeholder.

## Prossimo step
Dopo aver stabilizzato deploy/menu/import:
- migliorare il motore consigli team;
- aggiungere build italiane ufficiali;
- aggiungere piano PV progressivo;
- aggiornare lista ingaggi reali quando disponibili.
