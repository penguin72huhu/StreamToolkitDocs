---
sidebar_position: 15
---

# Sondaggi live

Avvia un sondaggio durante la diretta. Gli spettatori votano scrivendo il numero di un'opzione nella chat di Twitch o YouTube, e i risultati si aggiornano in tempo reale nell'overlay OBS.

## URL della fonte OBS

```
http://127.0.0.1:7272/vote
```

Fai clic su **Copia** accanto a **URL sorgente OBS** in cima alla pagina, poi aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source). Sondaggi live non riproduce suoni, quindi non è necessario attivare "Controlla audio tramite OBS".

:::tip
Attiva anche l'interruttore accanto a **Sondaggi live** nella barra laterale sinistra (**Attiva output OBS**). Quando è spento, l'overlay resta nascosto.
:::

La pagina ha tre schede: **Impostazioni**, **Aspetto** e **Cronologia**.

## Avviare un sondaggio (scheda Impostazioni)

### Piattaforma di voto

Fai clic su **Twitch** o **YouTube** per scegliere quale chat può votare. Puoi sceglierle entrambe. Una piattaforma non collegata mostra **(non connesso)** per Twitch o **URL della chat non collegato** per YouTube. Collegala prima:

- [Impostazioni Twitch](../platforms/twitch)
- [Impostazioni YouTube](../platforms/youtube-settings)

### Titolo del sondaggio

Facoltativo. Ad esempio: "Quale gioco stasera?"

### Opzioni di voto (2–10)

- Inserisci almeno 2 opzioni. Puoi averne fino a 10
- **+ Aggiungi opzione** aggiunge una riga e **×** ne elimina una
- **Applica cronologia** ti permette di scegliere uno dei tuoi 15 sondaggi più recenti e di compilarne titolo e opzioni

Mentre modifichi, l'overlay OBS mostra un'anteprima del titolo e delle opzioni.

### Durata del sondaggio

La durata del sondaggio in secondi. Il valore predefinito è 60 e il minimo è 10.

### Avvio / Arresto

- **Avvia sondaggio**: richiede almeno 2 opzioni compilate e almeno una piattaforma selezionata e collegata
- **Ferma sondaggio**: termina il sondaggio in anticipo. Altrimenti termina allo scadere del tempo

Mentre un sondaggio è in corso, non puoi cambiare piattaforme, titolo, opzioni o durata.

{/* TODO: 截圖 — 投票設定分頁 */}

## Come votano gli spettatori

Mentre il sondaggio è in corso, l'overlay mostra "Scrivi il numero dell'opzione in chat per votare (es.: 1)".

- L'intero messaggio deve essere il numero dell'opzione, ad esempio `1` o `1.`. Gli spazi vengono ignorati. Un messaggio con qualsiasi altro testo non conta
- Ogni spettatore ha un voto. Se invia un numero diverso, il suo voto passa alla nuova opzione e conta l'ultimo voto prima dello scadere del tempo

## Risultati in tempo reale

Durante il sondaggio, sotto le impostazioni compare **Risultati in tempo reale** con il tempo rimanente, il numero di voti e la percentuale di ogni opzione e il totale dei voti. Al termine del sondaggio diventa **Risultati finali**. Fai clic su **Dettagli** per vedere chi ha votato ogni opzione, raggruppati per Twitch e YouTube.

## Aspetto

La scheda **Aspetto** ha un'**Anteprima** in alto. Il selettore colore accanto cambia solo lo sfondo dell'anteprima, non l'overlay OBS.

- **Carattere**: imposta font, colore e **Dimensione** (px) per **Titolo**, **Suggerimento**, **Opzione**, **Secondi del countdown** e **Numero di voti**
- **Colore barra di avanzamento**: fino a 5 colori, usati in ordine per le barre delle opzioni. Ognuno può essere **Tinta unita** o **Sfumatura**. Le sfumature hanno anche un **Angolo**
- **Colore sfondo**: lo sfondo della scheda del sondaggio
- **Ripristina predefiniti**: ripristina l'aspetto predefinito. Se è applicato un tema, ripristina l'aspetto del tema

In **CSS personalizzato** puoi scrivere i tuoi stili. Per condividere o scaricare stili, vedi [Temi](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Cronologia

La scheda **Cronologia** elenca per ogni sondaggio titolo, ora, numero di opzioni e totale dei voti. Espandi un sondaggio per vederne i risultati, il numero di voti per piattaforma e i **Dettagli**. Vengono conservati solo i sondaggi degli ultimi 30 giorni. Per eliminare un record, fai clic su 🗑 e poi su **Conferma eliminazione**.

:::info Limiti della versione di prova
- Il **CSS personalizzato** è disponibile solo nella versione completa
- L'overlay OBS mostra una filigrana

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::
