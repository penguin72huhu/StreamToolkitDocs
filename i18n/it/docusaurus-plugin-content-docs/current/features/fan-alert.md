---
sidebar_position: 8.1
---

# Avvisi nuovi follower

Mostra un avviso durante la diretta quando qualcuno ti segue su Twitch o si iscrive al tuo canale YouTube.

## URL della fonte OBS

```
http://127.0.0.1:7272/fan-alert
```

Copia l'URL in cima alla pagina **Impostazioni Avvisi nuovi follower** e aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source).

:::warning
Gli avvisi riproducono un suono. Seleziona **Controlla audio tramite OBS** nelle proprietà della fonte browser, altrimenti il suono non si sentirà nella diretta.
:::

Usa l'interruttore accanto a **Avvisi nuovi follower** nella barra laterale sinistra per attivare o disattivare gli avvisi. Quando è spento, i nuovi follower non vengono né mostrati né registrati, e anche i pulsanti di prova non funzionano.

Quando arrivano più follower a breve distanza, gli avvisi vengono messi in coda e mostrati uno dopo l'altro. Questo overlay ha una coda propria, quindi non aspetta mai dietro agli [Avvisi di donazione](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Scheda Impostazioni

### Piattaforme collegate

Seleziona le piattaforme che devono attivare un avviso: **Twitch** e **YouTube** (entrambe selezionate per impostazione predefinita). Un punto verde indica che la piattaforma è collegata; altrimenti la riga mostra **Non autorizzato**.

- **Twitch**: ogni nuovo follow attiva subito un avviso. Collega prima Twitch: [Impostazioni Twitch](../platforms/twitch).
- **YouTube**: nuovi iscritti. Accedi prima con Google: [Impostazioni YouTube](../platforms/youtube-settings).

Come vengono rilevati gli iscritti di YouTube:

- YouTube non ha un evento live di "nuovo iscritto", quindi l'app chiede a YouTube i tuoi iscritti più recenti ogni 1,5 minuti.
- Il controllo avviene solo mentre sei in diretta e la chat live di YouTube è collegata a quella trasmissione. Non avviene nella sala d'attesa né dopo la fine della diretta.
- Chi si è iscritto prima dell'inizio della diretta (più di circa 5 minuti prima dell'avvio dei controlli) non viene annunciato.
- Come indica il suggerimento nella pagina, **YouTube avvisa solo per gli iscritti con iscrizioni pubbliche, con ritardi da minuti a ore.**

### Impostazioni

| Campo | Descrizione |
|-------|-------------|
| **Durata di visualizzazione** | Per quanto tempo ogni avviso resta sullo schermo, in secondi (1–60). Predefinito: 5. |
| **Stesso spettatore al massimo una volta ogni 24 ore** | Disattivato per impostazione predefinita. Quando è attivo, se lo stesso spettatore ti segue di nuovo entro 24 ore (ad esempio smettendo di seguirti e seguendoti di nuovo) non viene né mostrato né registrato. |

### Provare gli avvisi

Fai clic su **Prova avviso (Twitch)** o **Prova avviso (YouTube)** per inviare un avviso di esempio a OBS. Gli avvisi di prova non vengono aggiunti alla cronologia.

Se Avvisi nuovi follower è disattivato, la prova non viene riprodotta e la pagina mostra **Attiva prima gli avvisi nuovi follower negli interruttori rapidi**.

## Scheda Aspetto

### Anteprima

L'anteprima usa la stessa pagina della fonte OBS. Usa il selettore colore accanto ad **Anteprima** per cambiare lo sfondo dell'anteprima e fai clic su **▶ Riproduci animazione** per riprodurre di nuovo l'animazione dell'avviso.

### Stile unificato / Indipendente per piattaforma

- **Stile unificato**: Twitch e YouTube usano lo stesso stile di avviso.
- **Indipendente per piattaforma**: ogni piattaforma ha il proprio stile. Scegli **Twitch** o **YouTube** con i pulsanti sottostanti e modificane le impostazioni. Al primo passaggio, le piattaforme che non hai personalizzato copiano lo stile unificato attuale, ciascuna con il proprio colore della barra countdown.

**Ripristina predefiniti** ripristina lo stile predefinito per lo stile che stai modificando.

### Immagine

- **Scegli immagine**: scegli un'immagine dal gestore risorse. Senza immagine viene mostrata un'emoji a forma di cuore. **Cancella** rimuove l'immagine.
- **Dimensione immagine**: 1–400 px.
- **Posizione immagine**: **A sinistra**, **A destra**, **In alto** o **In basso**.

### Suono

Scegli un suono integrato: **Nessuno**, **Campanella** (predefinito), **Moneta**, **Campana**, **Pop**, **Fanfara**. Fai clic su **▶** per ascoltarlo. Fai clic su **Scegli suono** per usare un tuo file audio dal gestore risorse.

### Testo personalizzato

Scrivi la frase mostrata nell'avviso. Usa `{name}` per il nome del follower e `{platform}` per il nome della piattaforma. Lascia vuoto per usare il testo predefinito: `Benvenuto {name}, grazie per il follow!`

### Testo e colore

- **Testo**: imposta font, dimensione e colore per **Testo personalizzato** e **Nome del follower**.
- **Colore**: **Sfondo**, **Ombra** e **Barra countdown**.

### CSS personalizzato

Espandi **CSS personalizzato** per modificare il CSS dello stile che stai modificando (unificato o della piattaforma selezionata). **Ripristina predefiniti** ripristina il CSS del modello e **Gestisci risorse** apre il gestore risorse. Qui si possono applicare anche i temi di Steam Workshop. Mentre un tema è applicato, il CSS è di sola lettura. Vedi [Temi](./themes).

## Scheda Cronologia

Elenca i nuovi follower recenti di entrambe le piattaforme, dal più recente: piattaforma, nome e ora. La cronologia è visibile solo nell'app, mai nell'overlay.

- Vengono conservati fino a 100 follower e le voci più vecchie di 30 giorni vengono rimosse automaticamente.
- Fai clic su **Cancella** per svuotare l'elenco.

:::info Versione di prova
Il CSS personalizzato è disponibile solo nella versione completa e l'avviso mostra una filigrana in OBS. Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::

## Domande frequenti

**Q: Nessun suono nella diretta?**
Controlla che **Controlla audio tramite OBS** sia selezionato nelle proprietà della fonte browser e che la fonte non sia silenziata nel mixer di OBS. Controlla anche che **Suono** non sia impostato su **Nessuno**.

**Q: Un iscritto di YouTube non ha ricevuto un avviso.**
Vengono segnalate solo le iscrizioni pubbliche, e YouTube può impiegare da minuti a ore per segnalarle. Inoltre l'app controlla solo mentre sei in diretta con la chat live di YouTube collegata.

**Q: Ho aggiunto la fonte OBS in ritardo. Riproduce gli avvisi precedenti?**
No. Una fonte appena aperta mostra solo gli avvisi che arrivano dopo il suo collegamento. I follower precedenti restano nella scheda **Cronologia**.
