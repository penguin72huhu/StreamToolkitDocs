---
sidebar_position: 16
---

# Estrazioni

Gli spettatori partecipano scrivendo una parola chiave nella chat di Twitch o YouTube. Alla chiusura delle iscrizioni, estrai i vincitori a caso e l'animazione dell'estrazione viene riprodotta nell'overlay OBS.

## URL della fonte OBS

```
http://127.0.0.1:7272/lottery
```

Fai clic su **Copia** accanto a **URL sorgente OBS** in cima alla pagina, poi aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source). Estrazioni non riproduce suoni, quindi non è necessario attivare "Controlla audio tramite OBS".

:::tip
Attiva anche l'interruttore accanto a **Estrazioni** nella barra laterale sinistra (**Attiva output OBS**). Quando è spento, l'overlay resta nascosto.
:::

La pagina ha due schede: **Impostazioni** e **Cronologia**.

## Impostazioni

### Piattaforma di voto

Fai clic su **Twitch** o **YouTube** per scegliere da quale chat si può partecipare. Puoi sceglierle entrambe. Una piattaforma non collegata mostra **(non connesso)** per Twitch o **URL della chat non collegato** per YouTube. Per collegarle, vedi [Impostazioni Twitch](../platforms/twitch) e [Impostazioni YouTube](../platforms/youtube-settings).

### Parola chiave del sorteggio

Un messaggio in chat che contiene questa parola chiave iscrive lo spettatore. Ogni spettatore può partecipare una sola volta per estrazione. Non è possibile fare clic su **Avvia raccolta** finché la parola chiave è vuota.

### Durata del sorteggio

Per quanto tempo restano aperte le iscrizioni, in secondi. Il valore predefinito è 300 e l'intervallo è 10–3600.

### Max partecipanti

Le iscrizioni si chiudono in anticipo quando si raggiunge questo numero di partecipanti. Inserisci `0` per nessun limite.

### Rimuovi l'opzione dopo l'estrazione

Quando è attivo, un vincitore viene rimosso dai partecipanti prima dell'estrazione successiva, quindi non può essere estratto di nuovo in quella estrazione.

### Testo suggerimento

Il suggerimento mostrato nell'overlay durante le iscrizioni, che indica agli spettatori la parola chiave e il numero di partecipanti. Impostane font, colore e dimensione (px).

### Animazione del sorteggio

- **Rotazione rapida degli ID** (predefinito): i nomi dei partecipanti fluttuano sullo schermo mentre le iscrizioni sono aperte, poi scorrono rapidamente durante l'estrazione
  - **Carattere della schermata di raccolta**: font, dimensione e colori delle etichette dei nomi (fino a 5)
  - **Carattere animazione estrazione**: font e dimensione dei nomi che scorrono durante l'estrazione
  - **Ripristina predefiniti**: ripristina queste impostazioni
- **Animazione ruota**: i partecipanti vengono posizionati su una ruota che gira per scegliere il vincitore. Scegli una combinazione di colori: **Minimal** o un tema personalizzato creato in [Ruota](./turntable)

Mentre le iscrizioni sono aperte, non puoi cambiare piattaforme, parola chiave, durata, max partecipanti, Rimuovi l'opzione dopo l'estrazione o tipo di animazione.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Svolgere un'estrazione

1. Fai clic su **Avvia raccolta**. Il pannello mostra **Raccolta in corso…**, il tempo rimanente e il numero di partecipanti
2. Mentre le iscrizioni sono aperte, puoi scrivere un nome in **Inserisci manualmente il nome del partecipante** e fare clic su **Aggiungi** (o premere Invio). Un nome già presente nell'elenco mostra "Questo ID è già nell'elenco"
3. Per chiudere le iscrizioni prima dello scadere del tempo, fai clic su **Termina raccolta**. Le iscrizioni si chiudono anche quando il tempo scade o si raggiunge **Max partecipanti**. Il pannello mostra quindi **Tempo scaduto!**
4. Fai clic su **Avvia estrazione**. L'overlay riproduce l'animazione e, al termine, il vincitore compare sotto **Vincitore**
5. Per estrarre un altro vincitore, fai clic su **Estrai di nuovo**

Fai clic su **Annulla sorteggio** in qualsiasi momento per cancellare tutti i partecipanti e i vincitori; l'overlay torna in attesa.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Cronologia

La scheda **Cronologia** conserva un record per ogni estrazione con ora, parola chiave e numero di partecipanti. Espandi un record per vedere i vincitori e l'elenco completo dei partecipanti. Viene conservata solo la cronologia degli ultimi 30 giorni. Per eliminare un record, fai clic su 🗑 e poi su **Conferma eliminazione**.

:::info Limiti della versione di prova
L'overlay OBS mostra una filigrana. Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::
