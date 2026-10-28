---
sidebar_position: 5
---

# Media Board

Mostra immagini, riproduci video ed effetti sonori durante la diretta con un clic o una scorciatoia.

La pagina ha tre schede: **Immagine**, **Video** e **Suono**. Ogni scheda ha il proprio URL della fonte OBS.

| Scheda | URL della fonte OBS | Controlla audio tramite OBS |
|-----|----------------|-----------------------|
| **Immagine** | `http://127.0.0.1:7272/imageboard` | Non necessario |
| **Video** | `http://127.0.0.1:7272/videoboard` | Obbligatorio |
| **Suono** | `http://127.0.0.1:7272/soundboard` | Obbligatorio |

Fai clic su **Copia** accanto a ogni URL e aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source). Video e suoni vengono riprodotti nella fonte OBS, non all'interno di Stream Toolkit, quindi per queste due fonti devi attivare **Controlla audio tramite OBS**, altrimenti gli spettatori non li sentiranno.

:::tip
Attiva l'interruttore accanto a **Media Board** nella barra laterale sinistra (**Attiva output OBS**). Quando è spento, le immagini non possono essere mostrate e video e suoni non vengono riprodotti, sia con i pulsanti sia con le scorciatoie.
:::

## Controlli comuni

Immagini, video e suoni sono tutti elencati come schede:

- Fai clic su una scheda per espandere o comprimere le sue impostazioni
- La casella di controllo a destra di una scheda: se selezionata, l'elemento compare tra gli strumenti di avvio di [Strumenti rapidi](./quick-tools). I nuovi elementi sono selezionati per impostazione predefinita
- **✕** elimina l'elemento
- Se un file locale è stato spostato o eliminato, la scheda mostra **File non trovato**

### Scorciatoie

Ogni elemento può avere la propria scorciatoia:

1. Espandi la scheda e fai clic sul pulsante della scorciatoia
2. Premi la combinazione di tasti desiderata, poi rilasciala. Premi **Esc** per annullare
3. Per rimuovere la scorciatoia, fai clic su **Cancella**

Se la combinazione è già usata da un'altra funzione, non viene salvata e il pulsante mostra un messaggio di conflitto. La scorciatoia funziona anche quando Stream Toolkit non è la finestra attiva. Tutte le scorciatoie sono elencate anche nella pagina [Scorciatoie](./hotkeys).

## Immagine

{/* TODO: 截圖 — 圖片分頁 */}

### Aggiungere un'immagine

1. Fai clic su **Aggiungi immagine**
2. Scegli un file (jpg, jpeg, png o gif). Il nome del file diventa il nome dell'immagine

Espandendo la scheda vengono mostrati una miniatura e queste impostazioni:

- **Nome**: il nome dell'immagine
- **Percorso del file**: fai clic su **Riseleziona** per scegliere un altro file
- **Scorciatoia**: premila una volta per mostrare l'immagine, premila di nuovo per nasconderla
- **Imposta posizione e dimensione**: vedi sotto
- **Elimina immagine**: elimina l'immagine

### Mostrare e nascondere

Fai clic sul pulsante **○** di una scheda per mostrare l'immagine in OBS. Diventa **◉**. Fai di nuovo clic per nascondere l'immagine.

### Impostazioni di visualizzazione

**Consenti di mostrare più immagini contemporaneamente** è disattivato per impostazione predefinita. Quando è disattivato, mostrare un'immagine nasconde quella attualmente visibile. Attivalo per mostrare più immagini contemporaneamente.

### Imposta posizione e dimensione

- **Posizione X** / **Posizione Y**: in px. 0/0 è il centro della fonte. I valori positivi spostano a destra/in basso, quelli negativi a sinistra/in alto
- **Larghezza** / **Altezza**: in % della dimensione originale. 100 = dimensione originale. Il pulsante 🔗 blocca le proporzioni (attivo per impostazione predefinita). Fai clic per ridimensionare liberamente
- Mentre l'immagine è visibile, le modifiche vengono mostrate in anteprima in tempo reale in OBS
- **Salva** mantiene le modifiche, **Reimposta** torna ai valori presenti all'apertura della finestra, **Annulla** chiude senza salvare

## Video

{/* TODO: 截圖 — 影片分頁 */}

Fai clic su **Aggiungi video** per aggiungere una scheda, poi espandila:

- **Nome del video**: il nome mostrato sulla scheda
- **Sorgente**: **YouTube** o **Locale**
  - **YouTube**: incolla il link del video in **URL YouTube**. Fai clic su **Prova analisi** per verificarlo. In caso di successo mostra "Analizzato, verrà applicato automaticamente alla riproduzione"
  - **Locale**: fai clic su **Scegli file** per scegliere un file mp4, webm o ogg. Il limite di dimensione è 200MB e i file più grandi comportano più latenza. Per uno sfondo trasparente, usa un video WebM (VP9 Alpha)
- **Riproduzione ciclica**: ripete il video
- **Tempo di riproduzione**: imposta **Da** e **A** (ore, minuti, secondi, ms). Lascia **A** su 00:00 per riprodurre fino alla fine
- **Volume**: 0–100%
- **Scorciatoia**: premila per riprodurre il video. Premila di nuovo mentre il video è in riproduzione per fermarlo
- **Imposta posizione e dimensione**: gli stessi campi di posizione e dimensione delle immagini. Fai clic su **Anteprima in loop** per riprodurre il video in loop in OBS mentre lo regoli, e su **Ferma anteprima** per fermarlo. Al termine fai clic su **Salva** o **Annulla**

Fai clic su **▶** di una scheda per riprodurre il video in OBS. Fai clic su **■** per fermarlo.

## Suono

{/* TODO: 截圖 — 音效分頁 */}

Fai clic su **Aggiungi suono** per aggiungere una scheda, poi espandila:

- **Nome del suono**: il nome mostrato sulla scheda
- **Sorgente**: **URL YouTube** o **File locale**
  - **URL YouTube**: incolla il link e fai clic su **Prova analisi** per verificarlo
  - **File locale**: fai clic su **Scegli file** per scegliere un file mp3, wav, ogg, flac, m4a, aac o opus
- **Tempo di riproduzione**: imposta **Da** e **A**. Lascia **A** su 00:00 per riprodurre fino alla fine
- **Volume**: 0–100%
- **Scorciatoia**: premila per riprodurre il suono

Fai clic su **▶** di una scheda per riprodurre il suono in OBS. Fai clic su **■** per fermarlo. Viene riprodotto un solo suono alla volta. Avviare un altro suono ferma quello in corso.

:::info Limiti della versione di prova
- Puoi aggiungere solo **1** immagine, **1** video e **1** suono
- Gli overlay di immagini e video mostrano una filigrana

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::

## Domande frequenti

**Q: Video o suoni vengono riprodotti, ma nella diretta non si sente nulla.**
Assicurati che **Controlla audio tramite OBS** sia selezionato per le fonti `/videoboard` e `/soundboard` e che le fonti non siano silenziate nel mixer di OBS.

**Q: Non riesco a scegliere il mio file video.**
Si possono scegliere solo file mp4, webm e ogg, fino a 200MB. Se un file è più grande, un messaggio indica il limite e il file non viene aggiunto.
