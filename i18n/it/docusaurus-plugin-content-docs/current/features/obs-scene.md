---
sidebar_position: 2
---

# Controllo scene OBS

**Controllo scene OBS** ti permette di cambiare scena e mostrare/nascondere fonti nel tuo software di streaming con scorciatoie globali o da [Strumenti rapidi](./quick-tools). Funziona con **OBS Studio**, **Streamlabs** e **Meld Studio**.

Questa funzione non ha un overlay, quindi non c'è nulla da aggiungere in OBS come fonte browser.

:::info
Le scorciatoie funzionano solo mentre l'interruttore **Controllo scene OBS** nella barra laterale è acceso. Funzionano anche quando la finestra di Stream Toolkit è ridotta nell'area di notifica.
:::

La pagina delle impostazioni ha due schede: **Connessione** e **Scorciatoie**.

## Scheda Connessione

### Passaggio 1: Scegli il software

In **Software**, scegli **OBS Studio**, **Streamlabs** o **Meld Studio**. Si può cambiare solo quando non si è connessi.

Ogni software conserva le proprie scorciatoie e il proprio elenco di scene, quindi cambiando software vengono mostrate le impostazioni di quel software.

### Passaggio 2: Prepara il software

#### OBS Studio

1. In OBS, apri **Strumenti → Impostazioni server WebSocket**
2. Seleziona **Abilita il server WebSocket**
3. Fai clic su **Mostra info di connessione** per vedere la password
4. In Stream Toolkit, compila **Host** (predefinito `localhost`), **Porta** (predefinito `4455`) e **Password**

#### Streamlabs / Meld Studio

Non serve alcuna configurazione: basta che il programma sia in esecuzione.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Passaggio 3: Connetti

Fai clic su **Connetti**. Lo **Stato** diventa **Connesso** (per OBS e Meld viene mostrato anche il numero di versione). Fai clic su **Disconnetti** per interrompere la connessione.

**Connetti all’avvio** (attivo per impostazione predefinita): si connette automaticamente all'avvio di Stream Toolkit e quando accendi l'interruttore della funzione. Spegnere l'interruttore della funzione interrompe la connessione.

### Scene

La sezione **Scene** elenca le tue scene e quante fonti ha ciascuna; la scena attuale è evidenziata. Fai clic su **Aggiorna** per ottenere l'elenco aggiornato dopo aver modificato le scene nel tuo software.

Quando non sei connesso, viene comunque mostrato l'ultimo elenco ottenuto.

## Scheda Scorciatoie

Per impostare una scorciatoia, fai clic su **Fai clic per impostare la scorciatoia**, poi premi la combinazione di tasti. Premi `Esc` per annullare. Se la combinazione è già usata da un'altra funzione, viene mostrato **Conflitto scorciatoia** e non viene salvata. Fai clic su **✕** accanto a una scorciatoia per cancellarla.

### Cambia scena

1. Fai clic su **Aggiungi**
2. Imposta una scorciatoia
3. Scegli la scena a cui passare

Fai clic su **✕** alla fine della riga per eliminarla.

### Attiva/disattiva fonti

Una scorciatoia può controllare più fonti della stessa scena insieme.

1. Fai clic su **Aggiungi**
2. Imposta una scorciatoia
3. Inserisci un **Nome** (facoltativo: usato come etichetta del pulsante in Strumenti rapidi; se vuoto viene usato il nome della scena)
4. Scegli la scena a cui appartengono le fonti
5. Fai clic su **Aggiungi fonte**, scegli una fonte e scegli **Mostra**, **Nascondi** o **Alterna** (predefinito **Alterna**)
6. Ripeti il passaggio 5 per altre fonti

Cambiare la scena di una voce cancella il suo elenco di fonti.

:::tip
Una scena o una fonte che non esiste più nel tuo software è contrassegnata in rosso. Sceglila di nuovo dal menu a discesa.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Uso da Strumenti rapidi

Quando la funzione è attiva ed esiste almeno una voce di scorciatoia, [Strumenti rapidi](./quick-tools) mostra una scheda **Controllo scene OBS** con un pulsante per ogni voce. Fare clic su un pulsante equivale a premere la relativa scorciatoia.

## Messaggi di errore

Quando si usa una scorciatoia o un pulsante, possono comparire questi messaggi:

| Messaggio | Significato |
|---------|---------|
| **Non connesso a OBS** | Non connesso: vai alla scheda **Connessione** e fai clic su **Connetti** |
| **Scena “…” non trovata** | La scena è stata rinominata o eliminata nel tuo software |
| **Fonti non trovate: …** | Quelle fonti non esistono più nella scena |

## Limiti della versione di prova

:::info
La versione di prova consente **1** voce di scorciatoia in totale (Cambia scena e Attiva/disattiva fonti insieme). Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::

## Domande frequenti

**Q: Ha detto che non riesce a raggiungere OBS e non ha riprovato dopo che ho aperto OBS.**
Se il primissimo tentativo di connessione fallisce (ad esempio perché OBS non era ancora in esecuzione), Stream Toolkit non continua a riprovare. Apri il tuo software di streaming, poi fai clic su **Connetti**. Una volta stabilita una connessione, si riconnette automaticamente se la connessione cade.
