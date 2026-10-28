---
sidebar_position: 17
---

# Richieste musicali

Gli spettatori richiedono brani di YouTube con un comando in chat e i brani vengono riprodotti in OBS uno dopo l'altro. Puoi anche aggiungere brani tu stesso e impostare una playlist predefinita da riprodurre quando non ci sono richieste.

## URL della fonte OBS

```
http://127.0.0.1:7272/song-request
```

Fai clic su **Copia** accanto a **URL sorgente OBS** in cima alla pagina, poi aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source).

:::warning
Le richieste musicali riproducono audio. Nelle proprietà della fonte browser, seleziona **Controlla audio tramite OBS**, altrimenti la musica non arriverà alla diretta.
:::

:::tip
Attiva anche l'interruttore accanto a **Richieste musicali** nel menu a sinistra. I comandi in chat vengono gestiti solo mentre l'interruttore è acceso.
:::

La pagina ha due schede: **Impostazioni** e **Playlist**.

## Scheda Impostazioni

### Piattaforma

Ogni piattaforma ha la propria scheda:

- **Consenti richieste brani da questa piattaforma**: permette agli spettatori di quella chat di richiedere brani
- **Attiva le risposte del bot di chat** (solo Twitch, attivo per impostazione predefinita): risponde nella chat di Twitch con il risultato di ogni comando, usando il tuo account Twitch collegato. Visibile solo quando Twitch è attivo e collegato

Una piattaforma non collegata mostra **(non connesso)** (Twitch) o **URL della chat non collegato** (YouTube). Collegala prima:

- [Impostazioni Twitch](../platforms/twitch)
- [Impostazioni YouTube](../platforms/youtube-settings)

### Comandi della chat

| Campo | Predefinito |
|------|--------|
| **Prefisso comandi** | `!` (scegli tra `! @ # $ % & ~`) |
| **Comando per richiedere brano** | `sr` |
| **Comando per rimuovere brano** | `remove` |
| **Comando per vedere l'elenco brani** | `queue` |
| **Comando per il brano attuale** | `song` |
| **Tempo di attesa tra le richieste** | 3000 ms |

Il tempo di attesa vale per ogni spettatore: dopo una richiesta riuscita, lo stesso spettatore deve attendere questo tempo prima di richiedere di nuovo.

### Impostazioni

- **Mostra il video sullo schermo** (attivo per impostazione predefinita): quando è disattivato, il video è nascosto in OBS ma l'audio viene comunque riprodotto
- **Limite dell'elenco** (1–100, predefinito 20): il numero massimo di brani richiesti nell'elenco. I brani della playlist predefinita non contano
- **Mostra notifica di richiesta brano** (attivo per impostazione predefinita): mostra una scheda di notifica in OBS quando uno spettatore richiede, rimuove o non riesce a richiedere un brano. Quando è attivo, puoi impostare:
  - **X** / **Y**: posizione della notifica dall'angolo in alto a sinistra (px, predefinito 16 / 16)
  - **Scala notifica**: moltiplicatore di dimensione (predefinito 1.0)
  - **Prova l'aspetto della notifica**: invia una notifica di prova a OBS

Ogni notifica resta visibile per 5 secondi; ne vengono mostrate fino a 3 contemporaneamente.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Come lo usano gli spettatori

Con le impostazioni predefinite:

| Comando | Cosa fa |
|------|------|
| `!sr <YouTube link>` | Richiede quel video |
| `!sr <search words>` | Cerca su YouTube e richiede il primo risultato |
| `!remove` | Rimuove la richiesta più recente dello spettatore (non il brano in riproduzione) |
| `!queue` | Risponde con i prossimi 3 brani richiesti |
| `!song` | Risponde con il brano in riproduzione |

- Link accettati: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…` o un ID video di 11 caratteri
- I link alle playlist non sono accettati
- Una richiesta non riesce quando l'elenco ha raggiunto il **Limite dell'elenco**
- Le nuove richieste vengono accodate dopo le richieste degli altri spettatori, prima dei brani della playlist predefinita
- `!queue` e `!song` funzionano solo nella chat di Twitch con **Attiva le risposte del bot di chat** attivo

## Scheda Playlist

### Controlli di riproduzione

La riga superiore mostra chi ha richiesto il brano attuale e il suo titolo. Pulsanti:

- **Riproduci** / **Pausa**: se non è in riproduzione nulla, parte dal primo brano dell'elenco
- **Ferma**: interrompe la riproduzione
- **Successivo**: passa al brano successivo

Durante la riproduzione di un brano compare una barra di avanzamento; trascinala per saltare a un punto. Al termine di un brano, il successivo parte automaticamente.

:::note
All'avvio dell'app non viene riprodotto nulla automaticamente. Premi **Riproduci** per iniziare.
:::

### Playlist predefinita

Incolla l'URL di una playlist di YouTube e scegli **Riproduzione ciclica** o **Riproduzione casuale**. Quando l'elenco si esaurisce, un brano di questa playlist viene aggiunto e riprodotto automaticamente. Questi brani compaiono nell'elenco come **Playlist predefinita**.

La playlist predefinita viene letta tramite il tuo account YouTube, quindi devi prima accedere con Google in [Impostazioni YouTube](../platforms/youtube-settings).

### Richiedi brano manualmente

Incolla l'URL di un video di YouTube e fai clic su **Aggiungi all'elenco** (o premi Invio). Le richieste manuali non supportano le parole di ricerca.

### Elenco

**Elenco (n)** mostra tutti i brani: piattaforma, richiedente, titolo e ID del video (fai clic per aprirlo su YouTube). Fai clic su **Elimina** per rimuovere un brano; eliminare il brano in riproduzione passa al successivo. **Svuota** svuota l'intero elenco.

{/* TODO: 截圖 — 播放清單分頁 */}

## Domande frequenti

**Q: Gli spettatori scrivono il comando ma non succede nulla?**
Controlla che:
- L'interruttore **Richieste musicali** nel menu a sinistra sia acceso
- **Consenti richieste brani da questa piattaforma** sia selezionato per quella piattaforma
- Per Twitch: la chat di Twitch viene letta dalla funzione [Chat](./chat). Se hai disattivato Twitch nella pagina Chat (e il [Chat bot](./chat-bot) non usa Twitch), i comandi di Twitch non vengono ricevuti

**Q: La playlist predefinita non viene riprodotta?**
Assicurati di aver effettuato l'accesso con Google nelle Impostazioni e che l'URL sia un link a una playlist (contiene `list=`).

:::info Limiti della versione di prova
- Le richieste degli spettatori dalla chat sono disponibili solo nella versione completa. Nella versione di prova, una richiesta dalla chat non riesce con il messaggio "Le richieste di canzoni non sono disponibili nella versione di prova". **Richiedi brano manualmente** e la playlist predefinita funzionano comunque
- L'overlay OBS mostra una filigrana

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::
