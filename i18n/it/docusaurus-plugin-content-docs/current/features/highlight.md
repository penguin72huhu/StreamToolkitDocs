---
sidebar_position: 6
---

# Marcatore momenti salienti stream

Premi una scorciatoia durante la diretta per registrare "a che punto della diretta" è avvenuto un momento saliente. In seguito puoi usare l'elenco dei tempi per ritrovare i momenti salienti nel VOD durante il montaggio.

I segnaposto vengono salvati in Stream Toolkit. Questa funzione non ha un overlay OBS, quindi non è necessario aggiungere una fonte OBS.

La pagina ha due schede: **Impostazioni** e **Registro momenti salienti**.

:::tip
Attiva l'interruttore accanto a **Marcatore momenti salienti stream** nella barra laterale sinistra. Quando è spento, né la scorciatoia né il pulsante **MARK** aggiungono un segnaposto.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Passaggio 1: Scegli la sorgente

La **Sorgente** decide come viene calcolato il tempo della diretta:

| Sorgente | Come viene calcolato il tempo | Requisito |
|--------|----------------------------|-------------|
| **Twitch** | Tempo trascorso dall'inizio della diretta Twitch in corso | Twitch collegato. Vedi [Impostazioni Twitch](../platforms/twitch) |
| **YouTube** | Tempo trascorso dall'inizio della diretta YouTube in corso | Accesso con Google. Vedi [Impostazioni YouTube](../platforms/youtube-settings) |
| **Allineamento manuale** (predefinito) | Il valore del timer manuale in questa pagina | Nessuno |

Un punto accanto a **Twitch** e **YouTube** indica se è collegato. In caso contrario, l'opzione mostra **(non connesso)** o **(accesso a Google non effettuato)**.

Se segni mentre non sei in diretta (oppure, con **Allineamento manuale**, mentre il timer è fermo), il tempo viene registrato come **Nessuna diretta**. Con la sorgente **Twitch** questo risultato può impiegare circa 20 secondi a comparire, perché Stream Toolkit riprova alcune volte nel caso in cui Twitch non abbia ancora registrato una diretta appena iniziata.

### Timer manuale

Quando è selezionato **Allineamento manuale**, compare un **Timer manuale**:

1. Inserisci il tempo attuale della diretta come `HH:MM:SS` (ad esempio `00:00:00` proprio quando vai in diretta)
2. Fai clic su **Avvia timer sincronizzato**. Il timer inizia a contare a partire da quel valore
3. Ogni segnaposto usa il valore attuale del timer
4. Fai clic su **Ferma** per fermare il timer

### Crea clip Twitch al segnare

Questa opzione compare solo quando la sorgente è **Twitch**. Quando è attiva, ogni segnaposto crea anche una clip Twitch.

- Devi essere in diretta. La clip dura circa 30 secondi
- Le clip vengono salvate in Dashboard del creator → Contenuti → Clip
- Dopo aver segnato, la pagina mostra **Clip Twitch creato** oppure il motivo dell'errore: **Non sei in diretta**, **Permesso mancante; riconnetti Twitch**, **Twitch non connesso** o **Non riuscito; riprova**

## Passaggio 2: Imposta la scorciatoia

La scorciatoia predefinita è `Ctrl+Shift+M`. Per cambiarla:

1. Fai clic sul pulsante della scorciatoia
2. Premi la combinazione di tasti desiderata, poi rilasciala. Premi **Esc** per annullare
3. Per rimuoverla, fai clic su **Cancella**

Se la combinazione è già usata da un'altra funzione, il pulsante mostra **Questa scorciatoia è già in uso** e la scorciatoia non viene salvata. La scorciatoia funziona anche quando Stream Toolkit non è la finestra attiva.

Puoi anche fare clic sul pulsante **MARK** sotto la scorciatoia. Fa la stessa cosa della scorciatoia. Anche la finestra [Strumenti rapidi](./quick-tools) ha un pulsante **MARK**.

## Passaggio 3: Segna durante la diretta

1. (Facoltativo) Scrivi un nome in **Nome del segnaposto** prima di segnare. Se lo lasci vuoto, i segnaposto vengono numerati automaticamente (`精華標記_1`, `精華標記_2`, …)
2. Premi la scorciatoia o fai clic su **MARK**

Il nome scritto viene usato solo per il segnaposto successivo, poi il campo viene svuotato.

## Registro momenti salienti

La scheda **Registro momenti salienti** elenca tutti i segnaposto, dal più recente. Ogni riga mostra il tempo della diretta, il nome, la sorgente e la data e l'ora in cui hai segnato.

- **Copia**: copia il segnaposto come testo, nel formato `[data] nome 🎬 tempo della diretta (sorgente)`
- **🗑️**: fai clic, poi su **Conferma eliminazione** per eliminare il segnaposto
- **Apri clip Twitch**: compare quando per questo segnaposto è stata creata una clip Twitch. Apre la clip su Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Limiti della versione di prova
**Crea clip Twitch al segnare** non è disponibile. Viene mostrato come "Attiva nella versione completa".

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::
