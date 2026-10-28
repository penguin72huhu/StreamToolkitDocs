---
sidebar_position: 3
---

# Chat

**Chat** mostra insieme la chat di Twitch e quella di YouTube in un unico overlay, con traduzione automatica opzionale. Può anche mostrare la chat in una finestra trasparente sul desktop visibile solo a te.

## URL della fonte OBS

```
http://127.0.0.1:7272/chat
```

Aggiungilo come fonte browser: [Come aggiungere fonti su OBS](../getting-started/obs-source). Questo overlay non ha audio.

:::info
I messaggi vengono inviati all'overlay solo mentre l'interruttore **Chat** nella barra laterale è acceso. La chat viene comunque ricevuta anche quando è spento, quindi le funzioni che leggono la chat (sondaggi, estrazioni, richieste musicali, ecc.) continuano a funzionare.
:::

## Prima di iniziare

Collega le piattaforme che vuoi mostrare:

- [Impostazioni Twitch](../platforms/twitch)
- [Impostazioni YouTube](../platforms/youtube-settings)

La pagina delle impostazioni ha due schede: **Impostazioni** e **Aspetto**.

## Scheda Impostazioni

### Piattaforme

- **Mostra icona piattaforma (Twitch / YouTube)** — mostra l'icona <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> davanti a ogni messaggio

Ogni piattaforma ha la propria scheda. Il punto accanto al nome della piattaforma diventa verde quando è collegata e attiva; viene mostrato **(non connesso)** se Twitch non è collegato e **URL della chat non collegato** se la chat di YouTube non è collegata.

| Opzione | Descrizione |
|--------|-------------|
| **Attiva chat** | Mostra i messaggi di questa piattaforma |
| **Mostra avatar** | Mostra l'avatar dello spettatore |
| **Mostra distintivi** (Twitch) / **Mostra distintivi (icone membro)** (YouTube) | Mostra i distintivi |
| **Mostra il nome degli spettatori invece del @handle** | Solo YouTube. Disattivato finché non accedi con Google |

Quando la chat di YouTube è attiva ma non collegata, nella sua scheda compaiono due pulsanti:

- **Connessione automatica** — trova automaticamente la tua trasmissione in corso (richiede l'accesso con Google)
- **Inserisci manualmente** — ti porta alla pagina delle impostazioni per incollare l'URL della chat

**Numero massimo di messaggi**: quanti messaggi restano sullo schermo (5–200, predefinito 50).

### Traduzione automatica

1. Seleziona **Attiva traduzione**
2. **Lingua di destinazione**: la lingua in cui vengono tradotti i messaggi. Il valore predefinito, **Segui la lingua dell'interfaccia**, usa la lingua dell'interfaccia dell'app
3. **Lingue da non tradurre** (facoltativo): i messaggi nelle lingue selezionate restano invariati. Il portoghese PT-BR e PT-PT non possono essere distinti, quindi selezionarne uno li esclude entrambi

Il **Servizio di traduzione** è **MyMemory**, che non richiede alcuna chiave API.

- **Email (facoltativo)**: senza email la quota giornaliera è di 5.000 caratteri; inserisci un'email e fai clic su **Salva** per aumentarla a 50.000 caratteri (gratis, non serve registrarsi su MyMemory)
- La barra sottostante mostra la quantità approssimativa usata oggi. Si azzera ogni giorno alle 08:00 UTC

### Prova

- **Invia messaggio di prova** — invia all'overlay un messaggio di esempio casuale
- **Cancella** — cancella tutti i messaggi dall'overlay

Se compare **Connessione non riuscita — il server potrebbe non essere attivo**, il server locale di Stream Toolkit non risponde.

### Finestra chat sul desktop

Mostra la chat in una piccola finestra trasparente, sempre in primo piano sopra il gioco. Solo tu puoi vederla: comoda per lo streaming con un solo monitor.

1. Fai clic su **Apri finestra** (oppure fai clic con il tasto destro sull'icona nell'area di notifica e scegli **Apri chat sul desktop**)
2. Quando è sbloccata, trascina la barra superiore per spostare la finestra e trascinane i bordi per ridimensionarla
3. Fai clic su **🔒 Blocca** quando è nella posizione giusta. I clic passano poi attraverso la finestra al gioco. Per sbloccarla, porta il mouse sulla finestra e fai clic sul 🔓 che compare nell'angolo in alto a destra, oppure fai clic su **🔓 Sblocca** nella pagina delle impostazioni

**Reimposta posizione** riporta la finestra nella posizione predefinita.

| Impostazione | Descrizione |
|---------|-------------|
| **Stile** | **Solo nome e messaggio** (predefinito) o **Come la chat OBS** |
| **Dimensione carattere** | 12–32 px, predefinito 16. Solo per **Solo nome e messaggio** |
| **Opacità testo** | 10–100%, predefinito 100% |
| **Opacità sfondo** | 0–100%, predefinito 40% |
| **Dissolvenza messaggi** | 0–120 secondi, predefinito 0. Ogni messaggio sfuma dopo questo numero di secondi e i messaggi sfumati non possono essere recuperati scorrendo. Con 0 nulla sfuma e, quando la finestra è sbloccata, puoi scorrere verso l'alto fino ai messaggi precedenti (fino al Numero massimo di messaggi) |
| **Nascondi dalla cattura della diretta** | Attivo per impostazione predefinita. La Cattura schermo di OBS non riprende la finestra, così gli spettatori non vedono la chat due volte. Inoltre non compare negli screenshot né nella condivisione schermo di Discord |

:::tip
Se non vedi la finestra mentre il gioco è a schermo intero, imposta il gioco in modalità Finestra senza bordi o In finestra. Usa **Invia messaggio di prova** per controllare posizione e dimensioni della finestra.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Scheda Aspetto

### Anteprima

In cima alla scheda c'è un'anteprima in tempo reale. Il selettore colore accanto ad **Anteprima** cambia solo lo sfondo dell'anteprima. Le caselle **Avatar**, **Distintivi** e **Icona piattaforma** cambiano solo ciò che mostra l'anteprima.

### Impostazioni dell'aspetto

**Ripristina predefiniti** ripristina l'aspetto predefinito (o l'aspetto del tema applicato, se presente).

- **Direzione di entrata**: **Dall’alto in basso**, **Dal basso in alto** (predefinito), **Da sinistra a destra**, **Da destra a sinistra**
- **Testo** — impostato separatamente per **Nickname** e **Messaggio**:
  - Font, dimensione (px) e colore. Per il nickname puoi scegliere **Colore originale** (il colore della piattaforma dello spettatore) o **Colore personalizzato**
  - **Contorno**: colore, **Opacità**, **Spessore**
  - **Ombra**: colore, **Opacità**, **Sfocatura**, spostamento X / Y
- **Dimensione icone**: scala per **Icona piattaforma**, **Avatar** e **Distintivi** (0.1–5x)
- **Colore**: **Colore sfondo** di ogni messaggio

### CSS personalizzato

Espandi **CSS personalizzato** per modificare direttamente il CSS dell'overlay. Usa **Gestisci risorse** per caricare immagini da usare nel CSS. **Ripristina predefiniti** ripristina il CSS predefinito. Vedi anche [Temi](./themes).

:::tip
Se il tuo CSS personalizzato imposta uno dei campi dell'aspetto con `!important`, quel campo appare in grigio nelle impostazioni dell'aspetto ("Questa impostazione è controllata dal CSS personalizzato"). Quando è applicato un tema, il CSS è di sola lettura: ripristinalo prima di modificarlo.
:::

## Limiti della versione di prova

:::info
- Attivare la traduzione automatica aggiunge una filigrana all'overlay della chat
- Il **CSS personalizzato** è disponibile solo nella versione completa
- La **Finestra chat sul desktop** è disponibile solo nella versione completa

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::
