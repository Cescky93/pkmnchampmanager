# Pokémon Champions Manager v0.8 cache-kill

Versione one-file corretta per neutralizzare i vecchi service worker/cache.

## File da caricare in root
Carica/sovrascrivi:
- `index.html`
- `sw.js`

`sw.js` in questa versione è un "cache killer": serve a disattivare i service worker vecchi che potevano continuare a servire versioni precedenti.

## Test
Apri:
`https://cescky93.github.io/pkmnchampmanager/?v=08`

Deve comparire:
`Pokémon Champions Manager v0.8 cache-kill`

## Dopo che funziona
Il file `sw.js` può anche restare: non installa più una cache aggressiva.
