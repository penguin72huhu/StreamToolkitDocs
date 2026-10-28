---
sidebar_position: 1
---

# Strumenti rapidi

**Strumenti rapidi** è una piccola finestra di controllo che puoi tenere aperta accanto al gioco o a OBS. Ti permette di attivare e disattivare le funzioni e usarne i controlli più comuni senza tornare alla finestra principale.

## Aprire Strumenti rapidi

Usa uno di questi metodi:

- Fai clic su **⚡ Strumenti rapidi** in cima alla barra laterale sinistra della finestra principale
- Fai clic con il tasto destro sull'icona di Stream Toolkit nell'area di notifica e scegli **Apri strumenti rapidi**

Se la finestra è già aperta, viene portata in primo piano invece di aprirne una seconda.

{/* TODO: 截圖 — 快速工具視窗 */}

## La finestra

- **Spostarla**: trascina la barra del titolo
- **📌 Fissa in alto / Sblocca da in alto**: mantiene la finestra sopra le altre finestre. All'apertura della finestra è già fissata
- **✕**: chiude la finestra

La finestra segue il tema e la lingua dell'interfaccia dell'app.

## Pannello Interruttori rapidi

Fai clic sulla freccia **›** sul bordo sinistro per far scorrere fuori il pannello **Interruttori rapidi**. Elenca tutte le funzioni:

- L'interruttore attiva o disattiva la funzione (come l'interruttore accanto a ogni funzione nella barra laterale principale)
- **⚙** (**Apri impostazioni**) porta in primo piano la finestra principale sulla pagina delle impostazioni di quella funzione

Fai clic fuori dal pannello o di nuovo sulla freccia per chiuderlo.

Le funzioni sono elencate nello stesso ordine della barra laterale principale. Per cambiare l'ordine, trascina la maniglia **⠿** accanto a una funzione nella barra laterale della finestra principale.

## Schede delle funzioni

Ogni funzione attiva che ha dei controlli compare come scheda. Le schede sono inizialmente compresse: fai clic sul titolo di una scheda per espanderla o comprimerla. Se nessuna di queste funzioni è attiva, la finestra mostra **Nessuna funzione attivata**.

| Funzione | Cosa offre la scheda |
|---------|---------------------|
| [Controllo scene OBS](./obs-scene) | Stato della connessione, più un pulsante per ogni cambio di scena o attivazione/disattivazione di fonti configurati (la scena attuale è evidenziata). I pulsanti sono disattivati quando non c'è connessione. La scheda compare solo quando esiste almeno una voce di scorciatoia |
| [Traduzione vocale](./voice-translate) | Pulsante **REC**: tienilo premuto per registrare, rilascialo per tradurre |
| [Marcatore momenti salienti stream](./highlight) | Pulsante **MARK**. Dopo una marcatura, l'icona della piattaforma e il tempo vengono mostrati per 5 secondi |
| [Barra donazioni](./donate) | Importo attuale / obiettivo con una barra di avanzamento, un campo **Aggiungi importo manualmente** con **Aggiungi**, e **Azzera** |
| [Timer](./timer) | Per ogni timer visualizzato: nome, tempo, **Avvia** / **Pausa**, **Reimposta** e i pulsanti per aggiungere tempo che hai configurato. I cronometri mostrano invece **Ferma** e **Giro** |
| [Ruota](./turntable) | Per ogni ruota visualizzata: **Avvia** e **Reimposta** |
| [Media Board](./multimedia) | Pulsanti per le immagini fissate (mostra / nascondi), i video fissati (riproduci) e i suoni fissati (riproduci) |
| [Richieste musicali](./song-request) | **Riproduci** / **Pausa**, **Ferma**, **Successivo** |

Se a un controllo è assegnata una scorciatoia, la scorciatoia viene mostrata sul relativo pulsante.

Le funzioni che qui non hanno nulla da controllare (Chat, Barra obiettivo Twitch, Avvisi di donazione, Bacheca donazioni, Orologio, Parete delle emote, Sondaggi live, Estrazioni, Chat bot) hanno solo il loro interruttore nel pannello Interruttori rapidi.

:::tip
**Azzera** nella scheda della Barra donazioni richiede due clic: il primo clic trasforma il pulsante in **Conferma azzeramento** e un secondo clic entro 10 secondi azzera l'importo.
:::

:::info
Timer e ruote seguono la **Modalità di visualizzazione** di ciascuna funzione: con **Timer singolo** / **Ruota singola** viene mostrato solo quello attualmente selezionato; con **Timer multipli** / **Ruote multiple** vengono mostrati solo quelli che hai aggiunto. Se non ce ne sono, la scheda mostra **Nessun timer** / **Nessuna ruota**.
:::
