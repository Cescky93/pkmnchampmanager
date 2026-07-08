# Pokémon Champions Manager v1.3 — Quick Edit

## Obiettivo
La v1.3 taglia la parte macchinosa dell'inserimento dati. L'app resta single-file e mobile-first, ma ora l'uso quotidiano passa dal **Quick Edit Pokémon** in Home.

## Cosa cambia

### Quick Edit in Home
Nuova sezione subito raggiungibile dalla Home:

1. scegli il Pokémon;
2. modifichi natura, abilità e oggetto;
3. inserisci o correggi le 4 mosse;
4. inserisci le statistiche reali viste in gioco;
5. premi Salva.

Il JSON non è più il metodo normale per aggiornare i Pokémon: resta solo backup, import/export e ponte verso IA.

### Pulsanti rapidi sulla squadra
Nella card **Squadra attuale** ogni slot ha ora:

- **Modifica rapida**: porta subito al Quick Edit del Pokémon selezionato;
- **Scheda completa**: apre l'editor dettagliato in Rosa.

### Pulsanti rapidi in Rosa
Ogni card Pokémon ora dà priorità a:

- **Modifica rapida**;
- **Completa**;
- **Nel team**.

## Dati modificabili dal Quick Edit

- Natura;
- abilità;
- oggetto;
- stato allenamento: Allenato / Parziale / Da allenare;
- focus statistiche;
- moveset attuale, 4 mosse;
- statistiche reali: PS, Attacco, Difesa, Attacco Speciale, Difesa Speciale, Velocità.

## Funzione utile aggiunta

### Usa build consigliata
Nel Quick Edit c'è il pulsante **Usa build consigliata**.

Serve a compilare rapidamente le mosse/focus/natura/abilità/oggetto partendo dalla build locale consigliata per il formato attivo, Singolo o Doppio.

È pensato come scorciatoia, non come decisione definitiva.

## Flusso consigliato

### Uso normale

Home → Quick Edit Pokémon → scegli Pokémon → modifica → Salva.

### Quando alleni un Pokémon

Home → Quick Edit Pokémon → inserisci statistiche e mosse reali → Salva.

### Quando vuoi un parere IA

Dati → Export per IA.

## Scelte tecniche mantenute

- Single-file `index.html`;
- nessun backend;
- nessuna API key;
- nessuna IA integrata;
- salvataggio locale in `localStorage`;
- compatibilità GitHub Pages;
- uso prioritario da smartphone/tablet.

## File da pubblicare

Sostituire nel repository solo:

```text
index.html
```

Il file `.md` serve come riepilogo tecnico/versione di passaggio.

## Versione

```text
v1.3-quick-edit
```
