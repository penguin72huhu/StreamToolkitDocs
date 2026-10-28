---
sidebar_position: 7
---

# Barra donazioni

Mostra durante la diretta una barra di avanzamento verso un obiettivo di donazioni. Le donazioni dalle piattaforme scelte vengono aggiunte automaticamente al totale.

## URL della fonte OBS

```
http://127.0.0.1:7272/donate
```

Copia l'URL in cima alla pagina **Impostazioni Barra donazioni** e aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source).

Usa l'interruttore accanto a **Barra donazioni** nella barra laterale sinistra per mostrare o nascondere la barra in OBS. Quando è spento, la barra è nascosta.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Valuta

La barra usa la **Valuta delle donazioni** impostata nella pagina **Impostazioni**. Le donazioni in altre valute vengono convertite in questa valuta prima di essere aggiunte. Se la valuta di una donazione non può essere convertita, la donazione non viene aggiunta alla barra (Avvisi di donazione e Bacheca donazioni la mostrano comunque nella valuta originale).

## Scheda Impostazioni

### Piattaforme collegate

Seleziona le piattaforme le cui donazioni devono contare per la barra:

- **Twitch** — Bits e abbonamenti
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Un punto verde indica che la piattaforma è collegata; altrimenti la riga mostra **(non connesso)**. Queste caselle decidono solo cosa conta la barra. Non influiscono su Avvisi di donazione e Bacheca donazioni, che hanno i propri elenchi di piattaforme.

- **YouTube**: se la chat live non è collegata, la riga mostra **URL della chat non collegato** con due pulsanti: **Connessione automatica** (richiede l'accesso con Google) e **Inserisci manualmente** (ti porta al campo dell'URL della chat nelle Impostazioni). Vedi [Impostazioni YouTube](../platforms/youtube-settings).
- **YouTube ⚙️**: scegli quali **Eventi conteggiati** vengono aggiunti alla barra: **Super Chat**, **Super Sticker**, **Nuovo iscritto**, **Rinnovo iscrizione**, **Iscrizione regalata**, **Gemme**. **Gemme** richiede l'accesso con Google.
- Se è selezionato un evento di iscrizione ma non sono impostati i prezzi delle iscrizioni, compare **⚠ Prezzi iscrizione non impostati**. Fai clic per andare alle Impostazioni e inserire i prezzi dei livelli in **Impostazioni di conversione** di YouTube.
- Il valore di Bits e abbonamenti di Twitch si imposta in Impostazioni → Twitch → **Impostazioni di conversione**. Vedi [Impostazioni Twitch](../platforms/twitch).
- Per collegare PayPal, Stripe, O'Pay o ECPay, vedi [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) ed [ECPay](../payments/ecpay).

### Progresso attuale

Mostra il totale attuale, l'obiettivo e la percentuale.

| Campo | Descrizione |
|-------|-------------|
| **Titolo** | Facoltativo. Mostrato sopra la barra. |
| **Importo obiettivo** | L'importo da raggiungere, nella tua valuta delle donazioni. |
| **Aggiungi manualmente** | Inserisci un importo e fai clic su **Aggiungi** (o premi Invio) per aggiungerlo al totale. |
| **Azzera** | Riporta a zero il totale attuale. Prima compare una conferma. Non si può annullare. |

## Scheda Aspetto

### Anteprima

L'anteprima mostra la barra con importi di esempio. Usa il selettore colore accanto ad **Anteprima** per cambiare lo sfondo dell'anteprima. Seleziona **Anteprima raggiunto** per vedere la barra nello stato completato.

### Carattere e colore

Fai clic su **Ripristina predefiniti** per ripristinare l'aspetto predefinito.

- **Carattere**: imposta font, colore e dimensione (8–72 px) per **Titolo**, **Importo** e **Percentuale**.
- **Colore**: imposta **Sfondo**, **Barra obiettivo** (colore di riempimento) e **Barra obiettivo raggiunto** (colore di riempimento una volta raggiunto l'obiettivo).

### CSS personalizzato

Espandi **CSS personalizzato** per modificare il CSS della barra. **Ripristina predefiniti** ripristina il CSS predefinito e **Gestisci risorse** apre il gestore risorse per le immagini da usare nel CSS. Qui si possono applicare anche i temi di Steam Workshop. Mentre un tema è applicato, il CSS è di sola lettura finché non lo ripristini. Vedi [Temi](./themes).

:::info Versione di prova
Il CSS personalizzato è disponibile solo nella versione completa. I gateway di pagamento reali (PayPal / Stripe / O'Pay / ECPay), gli eventi di iscrizione di YouTube e le Gemme non possono essere usati nella versione di prova, e l'overlay mostra una filigrana. Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::

## Domande frequenti

**Q: Il totale è aumentato dopo aver inviato un avviso di prova.**
La **Notifica di prova** nella pagina Impostazioni conta come una donazione reale, quindi viene aggiunta alla barra (se quella piattaforma è selezionata). Dopo la prova, fai clic su **Azzera** per riportare il totale a zero.
