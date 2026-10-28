---
sidebar_position: 8.2
---

# Compleanni degli spettatori

Aggiungi i compleanni dei tuoi spettatori a un elenco. Quando uno spettatore dell'elenco scrive in chat durante la diretta nel giorno del suo compleanno o poco dopo, sullo stream compare un avviso di compleanno. Ogni spettatore riceve un solo avviso per compleanno.

## URL della fonte OBS

```
http://127.0.0.1:7272/birthday-alert
```

Copia l'URL in cima alla pagina **Impostazioni Compleanni degli spettatori** e aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source).

:::warning
Gli avvisi riproducono un suono. Seleziona **Controlla audio tramite OBS** nelle proprietà della fonte browser, altrimenti il suono non si sentirà nella diretta.
:::

Attiva l'interruttore accanto a **Compleanni degli spettatori** nella barra laterale sinistra. Solo quando è acceso l'app si collega alla chat e controlla i compleanni. I pulsanti **Prova avviso** e **Riproduci di nuovo** funzionano anche quando è spento.

La pagina ha tre schede: **Impostazioni**, **Spettatori** e **Aspetto**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Come funziona

- Uno spettatore dell'elenco che scrive in chat dal giorno del suo compleanno fino al numero di giorni successivi che hai impostato riceve un avviso. Prima del compleanno non appare nulla.
- Ogni spettatore riceve un solo avviso per compleanno. Un compleanno del 12/28 annunciato il 1/2 conta ancora come compleanno dell'anno precedente.
- Gli avvisi scattano solo mentre la piattaforma su cui lo spettatore ha scritto è in diretta. Quando sei offline, o finché l'app non riesce ancora a capire se sei in diretta, i messaggi in chat non attivano né registrano l'avviso; comparirà la prossima volta che lo spettatore scrive durante una diretta.
- La cronologia della chat caricata al collegamento della chat di YouTube non conta, quindi riavviare l'app non annuncerà chi ha scritto mentre era chiusa.
- Un compleanno del 2/29 cade il 2/28 negli anni non bisestili.

## Scheda Impostazioni

### Connessione alla chat

Visibile quando la funzione è attiva. Per ogni piattaforma viene indicato se la chat è collegata:

- **Twitch**: se non è impostato alcun canale, la riga mostra **Nessun canale Twitch impostato: collega prima Twitch** con **Vai alle impostazioni**. Collega prima Twitch: [Impostazioni Twitch](../platforms/twitch).
- **YouTube**: se la chat non è collegata, la riga mostra **Connessione automatica** e **Inserisci manualmente** (ti porta al campo dell'URL della chat nelle Impostazioni). Se usi la connessione automatica e hai effettuato l'accesso con Google, mostra **Se non si collega quando sei in diretta, premi Collega nella pagina Chat**. Vedi [Impostazioni YouTube](../platforms/youtube-settings) e [Chat](./chat).

Una volta collegata una piattaforma, viene mostrato anche **In diretta**, **Offline** o **Impossibile sapere se è in diretta**. Gli avvisi scattano solo con **In diretta**.

### Impostazioni

| Campo | Descrizione |
|-------|-------------|
| **Giorni dopo il compleanno che valgono ancora** | 0–30. Predefinito: 7. 0 = solo il giorno del compleanno. |
| **Durata di visualizzazione** | Per quanto tempo ogni avviso resta sullo schermo, in secondi (1–60). Predefinito: 6. |

### Provare gli avvisi

Fai clic su **Prova avviso** per inviare un avviso di esempio a OBS, con uno spettatore di prova e la data di oggi. Appare solo in OBS e non viene mai registrato, e funziona anche con l'interruttore della barra laterale sinistra spento. Il pulsante diventa brevemente **Inviato**.

## Scheda Spettatori

### Aggiungere uno spettatore

Ci sono due modi per aggiungere uno spettatore:

- **+ Aggiungi da chi ha scritto di recente**: scegli qualcuno che ha scritto di recente. Il modulo si apre con il suo nome come nota, il suo account già collegato e la data di oggi come compleanno.
- **+ Aggiungi per nome**: scrivi tu il nome dell'account.

**Chi ha scritto di recente** elenca gli spettatori che hanno scritto mentre la chat era collegata (fino a 200, conservati per 30 giorni). Fai clic su **Aggiorna** per aggiornarlo. Gli spettatori già nell'elenco mostrano **Aggiunto** e non possono essere scelti di nuovo. Quando l'elenco è lungo compare una casella di ricerca.

Compila il modulo:

1. **Nota / soprannome**: il nome con cui lo conosci, ad es. `Alex`. Facoltativo.
2. **Compleanno**: mese e giorno (senza anno).
3. **Account**: almeno un account. Uno spettatore può avere più account, ad es. sia Twitch che YouTube.
   - **＋ Scrivi un account**: scegli **Twitch** o **YouTube** e scrivi il nome. Per Twitch usa il login o il nome visualizzato; per YouTube l'@handle o il nome del canale.
   - **＋ Da chi ha scritto di recente**: aggiungi un account già collegato.
   - **✕** rimuove un account.
4. Fai clic su **Salva** (o premi Invio). **Annulla** (o Esc) chiude il modulo.

### Nomi scritti e collegamento

Un nome scritto viene collegato all'account la prima volta che quello spettatore scrive in chat. Il confronto ignora maiuscole/minuscole e una `@` iniziale. I nomi possono ripetersi, quindi scegliere tra chi ha scritto di recente è più sicuro.

Per YouTube scrivi l'@handle: se **Mostra il nome degli spettatori invece del @handle** non è attivo nella pagina Chat, un nome di canale potrebbe non corrispondere mai.

Ogni account nell'elenco mostra:

- **Collegato: [nome]**: l'account è collegato.
- **In attesa che "[nome]" scriva**: un nome scritto non ancora collegato.
- **Appena collegato**: l'app ha collegato automaticamente questo account quando lo spettatore ha scritto. Verifica che sia davvero lui, poi fai clic su **✓ È corretto**, oppure su **Scollega** se non lo è.
- **Questo account è già su "[nome]"**: il nome scritto corrisponde a un account che appartiene a un altro spettatore dell'elenco. Un account può appartenere a un solo spettatore, quindi cambia qui il nome o elimina uno dei due.

**Scollega** apre una casella sotto l'account. Dopo lo scollegamento si cercherà invece il nome nella casella (puoi modificarlo) e l'account verrà ricollegato la prossima volta che quello spettatore scriverà.

### L'elenco

Prima compaiono gli spettatori il cui avviso di compleanno è in corso, poi i prossimi compleanni. Con più di 5 spettatori compare una casella di ricerca. Ogni spettatore mostra:

- **In attesa che scriva**: è il periodo del suo compleanno; l'avviso compare non appena scrive.
- **🎂 Mostrato il [data]**: l'avviso per questo compleanno è già stato mostrato.
- **▶ Riproduci di nuovo**: mostra di nuovo l'avviso di questo spettatore in OBS. Funziona in qualsiasi momento e non viene mai registrato.
- **Modifica**: cambia nota, compleanno o account. Se cambi il compleanno, l'avviso può scattare di nuovo per la nuova data.
- **Elimina**: fai clic su **Elimina**, poi su **Conferma eliminazione**.

## Scheda Aspetto

### Anteprima

L'anteprima usa la stessa pagina della fonte OBS. Usa il selettore colore accanto ad **Anteprima** per cambiare lo sfondo dell'anteprima e fai clic su **▶ Riproduci animazione** per riprodurre di nuovo l'animazione dell'avviso.

### Stile unificato / Indipendente per piattaforma

- **Stile unificato**: Twitch e YouTube usano lo stesso stile di avviso.
- **Indipendente per piattaforma**: ogni piattaforma ha il proprio stile. Scegli **Twitch** o **YouTube** con i pulsanti sottostanti e modificane le impostazioni. Al primo passaggio, le piattaforme che non hai personalizzato copiano lo stile unificato attuale, ciascuna con il proprio colore della barra countdown.

**Ripristina predefiniti** ripristina lo stile predefinito per lo stile che stai modificando.

### Immagine

- **Scegli immagine**: scegli un'immagine dal gestore risorse. Senza immagine viene mostrata un'emoji della torta. **Cancella** rimuove l'immagine.
- **Dimensione immagine**: 1–400 px.
- **Posizione immagine**: **A sinistra**, **A destra**, **In alto** o **In basso**.

### Suono

Scegli un suono integrato: **Nessuno**, **Campanella** (predefinito), **Moneta**, **Campana**, **Pop**, **Fanfara**. Fai clic su **▶** per ascoltarlo. Fai clic su **Scegli suono** per usare un tuo file audio dal gestore risorse.

### Testo personalizzato

Scrivi la frase mostrata nell'avviso. Lascia vuoto per usare il testo predefinito: `Buon compleanno, {name}!` Puoi usare:

| Segnaposto | Sostituito con |
|-------------|---------------|
| `{name}` | Il nome dello spettatore in chat |
| `{label}` | La tua nota / soprannome (il nome in chat se la nota è vuota) |
| `{birthday}` | Il compleanno, ad es. `10/20` |
| `{MM}` `{DD}` | Mese e giorno a due cifre, per creare un formato personalizzato, ad es. `{DD}/{MM}` |
| `{date}` | Il compleanno nella lingua dell'overlay |
| `{platform}` | Il nome della piattaforma |

### Testo e colore

- **Testo**: imposta font, dimensione e colore per **Testo personalizzato** e **Nome dello spettatore**.
- **Colore**: **Sfondo**, **Ombra** e **Barra countdown**.

### CSS personalizzato

Espandi **CSS personalizzato** per modificare il CSS dello stile che stai modificando (unificato o della piattaforma selezionata). **Ripristina predefiniti** ripristina il CSS del modello e **Gestisci risorse** apre il gestore risorse. Qui si possono applicare anche i temi di Steam Workshop. Mentre un tema è applicato, il CSS è di sola lettura. Vedi [Temi](./themes).

:::info Versione di prova
- Fino a 3 spettatori nell'elenco. Se l'elenco ne contiene di più (ad es. da un salvataggio della versione completa), gli spettatori in eccesso vengono mostrati bloccati 🔒: non attivano mai un avviso e non possono essere modificati né riprodotti.
- Il CSS personalizzato è disponibile solo nella versione completa.
- L'avviso mostra una filigrana in OBS.

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::

## Domande frequenti

**Q: Nessun suono nella diretta?**
Controlla che **Controlla audio tramite OBS** sia selezionato nelle proprietà della fonte browser e che la fonte non sia silenziata nel mixer di OBS. Controlla anche che **Suono** non sia impostato su **Nessuno**.

**Q: Uno spettatore ha scritto nel giorno del suo compleanno ma non è apparso alcun avviso.**
Controlla che l'interruttore nella barra laterale sinistra sia acceso, che la **Connessione alla chat** nella scheda **Impostazioni** mostri **In diretta** per quella piattaforma e che l'account nell'elenco mostri **Collegato** o che il nome scritto corrisponda al suo nome in chat. Se l'avviso è stato mostrato mentre OBS non era aperto, usa **▶ Riproduci di nuovo**.

**Q: Ho aggiunto la fonte OBS in ritardo. Riproduce gli avvisi precedenti?**
No. Una fonte appena aperta mostra solo gli avvisi che arrivano dopo il suo collegamento. Usa **▶ Riproduci di nuovo** nella scheda **Spettatori** per mostrarne di nuovo uno.
