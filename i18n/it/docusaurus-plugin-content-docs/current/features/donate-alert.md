---
sidebar_position: 8
---

# Avvisi di donazione

Mostra un avviso con immagine, suono, nome del donatore, importo e messaggio quando qualcuno fa una donazione.

## URL della fonte OBS

```
http://127.0.0.1:7272/donate-alert
```

Copia l'URL in cima alla pagina **Impostazioni Avvisi di donazione** e aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source).

:::warning
Gli avvisi riproducono un suono. Seleziona **Controlla audio tramite OBS** nelle proprietà della fonte browser, altrimenti il suono non si sentirà nella diretta.
:::

Usa l'interruttore accanto a **Avvisi di donazione** nella barra laterale sinistra per attivare o disattivare gli avvisi. Quando è spento non viene mostrato alcun avviso (compresi quelli di prova), ma le donazioni vengono comunque registrate nella [Bacheca donazioni](./sponsors).

Quando arrivano più donazioni a breve distanza, gli avvisi vengono messi in coda e mostrati uno dopo l'altro.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Scheda Impostazioni

### Piattaforme collegate

Seleziona le piattaforme che devono attivare un avviso: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Un punto verde indica che la piattaforma è collegata; altrimenti la riga mostra **(non connesso)**. Queste caselle riguardano solo gli avvisi, non la Barra donazioni né la Bacheca donazioni.

**Twitch ⚙️** (visibile quando Twitch è collegato e selezionato):

1. Scegli **Conta Bits e abbonamenti**, **Conta solo i Bits** o **Conta solo gli abbonamenti**
2. **Conta i rinnovi di abbonamento**: se i rinnovi di abbonamento attivano un avviso (visibile quando vengono conteggiati gli abbonamenti)
3. **Sotto i [N] Bits non vengono conteggiati**: selezionalo e inserisci un minimo, così i cheer più piccoli non attivano un avviso (visibile quando vengono conteggiati i Bits)
4. Fai clic su **Salva**

**YouTube ⚙️**:

- **Mostra il nome degli spettatori invece del @handle**: disponibile solo dopo aver effettuato l'accesso con Google.
- **Eventi conteggiati**: **Super Chat**, **Super Sticker**, **Nuovo iscritto**, **Rinnovo iscrizione**, **Iscrizione regalata**, **Gemme**. **Gemme** richiede l'accesso con Google.

Se la chat live di YouTube non è collegata, la riga mostra **URL della chat non collegato** con **Connessione automatica** (richiede l'accesso con Google) e **Inserisci manualmente** (ti porta al campo dell'URL della chat nelle Impostazioni). Se è selezionato un evento di iscrizione ma non sono impostati i prezzi delle iscrizioni, fai clic su **⚠ Prezzi iscrizione non impostati** per impostarli. Vedi [Impostazioni YouTube](../platforms/youtube-settings).

Per collegare PayPal, Stripe, O'Pay o ECPay, vedi [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) ed [ECPay](../payments/ecpay).

### Impostazioni

| Campo | Descrizione |
|-------|-------------|
| **Converti automaticamente nella tua valuta** | Attivo per impostazione predefinita. Mostra l'importo convertito nella **Valuta delle donazioni** impostata nella pagina Impostazioni. |
| **Durata di visualizzazione** | Per quanto tempo ogni avviso resta sullo schermo, in secondi. Predefinito: 6. |

## Scheda Aspetto

### Anteprima

L'anteprima usa la stessa pagina della fonte OBS. Usa il selettore colore accanto ad **Anteprima** per cambiare lo sfondo dell'anteprima e fai clic su **▶ Riproduci animazione** per riprodurre di nuovo l'animazione dell'avviso.

### Stile unificato / Indipendente per piattaforma

- **Stile unificato**: tutte le piattaforme usano lo stesso stile di avviso.
- **Indipendente per piattaforma**: ogni piattaforma ha il proprio stile. Scegli la piattaforma con i pulsanti sottostanti (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) e modificane le impostazioni. Al primo passaggio, le piattaforme che non hai personalizzato copiano lo stile unificato attuale, ciascuna con il proprio colore della barra countdown.

**Ripristina predefiniti** ripristina lo stile predefinito per lo stile che stai modificando.

### Immagine

- **Scegli immagine**: scegli un'immagine dal gestore risorse. Senza immagine viene mostrata un'emoji a forma di cuore. **Cancella** rimuove l'immagine.
- **Dimensione immagine**: 1–400 px.
- **Posizione immagine**: **A sinistra**, **A destra**, **In alto** o **In basso**.

### Suono

Scegli un suono integrato: **Nessuno**, **Campanella** (predefinito), **Moneta**, **Campana**, **Pop**, **Fanfara**. Fai clic su **▶** per ascoltarlo. Fai clic su **Scegli suono** per usare un tuo file audio dal gestore risorse.

### Visualizzazione testo

- **Predefinito**: importo, nome del donatore e messaggio vengono mostrati su righe separate.
- **Testo personalizzato**: scrivi una tua frase. Usa `{name}` per il nome del donatore e `{amount}` per l'importo, ad es. `Grazie {name} per aver donato {amount}!`

### Testo e colore

- **Testo**: imposta font, dimensione e colore per **Importo**, **Nome del donatore** e **Messaggio** (più **Testo personalizzato** in modalità Testo personalizzato).
- **Colore**: **Sfondo**, **Ombra** e **Barra countdown**.

### CSS personalizzato

Espandi **CSS personalizzato** per modificare il CSS dello stile che stai modificando (unificato o della piattaforma selezionata). **Ripristina predefiniti** ripristina il CSS del modello e **Gestisci risorse** apre il gestore risorse. Qui si possono applicare anche i temi di Steam Workshop. Mentre un tema è applicato, il CSS è di sola lettura. Vedi [Temi](./themes).

## Provare gli avvisi

Nella pagina **Impostazioni**, fai clic su **Notifica di prova** accanto a **Integrazione piattaforme di donazione**:

1. Compila **Nome di prova**, **Messaggio di prova** e **Importo di prova**, scegli una **Piattaforma di prova**
2. Fai clic su **Invia notifica di prova**

La sezione **Prova Super Chat YouTube** ti permette di inserire una **Stringa importo** grezza (ad es. `$5.00`, `¥500`, `NT$150`) e fare clic su **Invia Super Chat di prova** per provare il riconoscimento dell'importo e la conversione di valuta.

:::note
Un avviso di prova viene gestito come una donazione reale: viene aggiunto anche alla [Barra donazioni](./donate) e alla [Bacheca donazioni](./sponsors) se lì quelle piattaforme sono selezionate.
:::

:::info Versione di prova
Il CSS personalizzato è disponibile solo nella versione completa. I gateway di pagamento reali (PayPal / Stripe / O'Pay / ECPay), gli eventi di iscrizione di YouTube e le Gemme non possono essere usati nella versione di prova, e l'avviso mostra una filigrana in OBS. Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::

## Domande frequenti

**Q: Nessun suono nella diretta?**
Controlla che **Controlla audio tramite OBS** sia selezionato nelle proprietà della fonte browser e che la fonte non sia silenziata nel mixer di OBS. Controlla anche che **Suono** non sia impostato su **Nessuno**.

**Q: Ho aggiunto la fonte OBS in ritardo. Riproduce gli avvisi precedenti?**
No. Una fonte appena aperta mostra solo gli avvisi che arrivano dopo il suo collegamento.
