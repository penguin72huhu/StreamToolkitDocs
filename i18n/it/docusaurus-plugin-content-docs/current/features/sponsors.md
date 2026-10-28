---
sidebar_position: 9
---

# Bacheca donazioni

Mostra durante la diretta un elenco delle donazioni recenti: icona della piattaforma, nome del donatore, importo e messaggio.

## URL della fonte OBS

```
http://127.0.0.1:7272/sponsors
```

Copia l'URL in cima alla pagina **Impostazioni Bacheca donazioni** e aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source).

Usa l'interruttore accanto a **Bacheca donazioni** nella barra laterale sinistra per mostrare o nascondere la bacheca in OBS. Quando è spento, la bacheca sfuma. Le donazioni vengono comunque registrate anche quando è spento.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Scheda Impostazioni

### Piattaforme collegate

Seleziona le piattaforme le cui donazioni devono essere registrate: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Un punto verde indica che la piattaforma è collegata; altrimenti la riga mostra **(non connesso)**. Queste caselle riguardano solo la bacheca, non la Barra donazioni né gli Avvisi di donazione.

**Twitch ⚙️** (visibile quando Twitch è collegato e selezionato):

1. Scegli **Conta Bits e abbonamenti**, **Conta solo i Bits** o **Conta solo gli abbonamenti**
2. **Conta i rinnovi di abbonamento**: se i rinnovi di abbonamento vengono registrati (visibile quando vengono conteggiati gli abbonamenti)
3. **Sotto i [N] Bits non vengono conteggiati**: selezionalo e inserisci un minimo, così i cheer più piccoli non vengono registrati (visibile quando vengono conteggiati i Bits)
4. Fai clic su **Salva**

**YouTube ⚙️**:

- **Mostra il nome degli spettatori invece del @handle**: disponibile solo dopo aver effettuato l'accesso con Google.
- **Eventi conteggiati**: **Super Chat**, **Super Sticker**, **Nuovo iscritto**, **Rinnovo iscrizione**, **Iscrizione regalata**, **Gemme**. **Gemme** richiede l'accesso con Google. I regali in Gemme vengono mostrati con un'icona a forma di gemma e il numero di gemme invece di un importo in denaro.

Se la chat live di YouTube non è collegata, la riga mostra **URL della chat non collegato** con **Connessione automatica** (richiede l'accesso con Google) e **Inserisci manualmente** (ti porta al campo dell'URL della chat nelle Impostazioni). Se è selezionato un evento di iscrizione ma non sono impostati i prezzi delle iscrizioni, fai clic su **⚠ Prezzi iscrizione non impostati** per impostarli. Vedi [Impostazioni YouTube](../platforms/youtube-settings).

Per collegare PayPal, Stripe, O'Pay o ECPay, vedi [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) ed [ECPay](../payments/ecpay).

### Impostazioni

| Campo | Descrizione |
|-------|-------------|
| **Converti automaticamente nella tua valuta** | Attivo per impostazione predefinita. Mostra gli importi convertiti nella **Valuta delle donazioni** impostata nella pagina Impostazioni. |
| **Massimo da mostrare** | Quante voci conservare (1–100). Predefinito: 20. Quando arriva una nuova donazione oltre questo limite, la voce più vecchia viene rimossa. |

## Scheda Aspetto

### Anteprima

Usa il selettore colore accanto ad **Anteprima** per cambiare lo sfondo dell'anteprima. Fai clic su **Prova animazione di aggiunta** per riprodurre l'animazione di entrata con una voce di esempio. L'esempio non viene salvato nella cronologia.

Fai clic su **Ripristina predefiniti** per ripristinare l'aspetto predefinito.

### Impostazioni di visualizzazione

- **Mostra icona piattaforma**: mostra l'icona della piattaforma su ogni voce.
- **Direzione di comparsa**: **Dall'alto verso il basso** (predefinito), **Dal basso verso l'alto**, **Da sinistra a destra** o **Da destra a sinistra**.

### Carattere

Imposta font, colore e dimensione (8–72 px) per **Titolo** (nome del donatore), **Corpo del testo** (messaggio) e **Importo**.

### Colore sfondo

- **Predefinito**: colore di sfondo di ogni voce.
- **+ Aggiungi intervallo**: aggiunge un colore con un intervallo di **Importo** (**Minimo** ~ **Massimo**). Le voci il cui importo rientra nell'intervallo usano invece quel colore. Lascia vuoto Minimo o Massimo per nessun limite da quel lato. Fai clic su **✕** per rimuovere un intervallo.

Quando **Converti automaticamente nella tua valuta** è attivo, l'intervallo viene confrontato con l'importo convertito.

### CSS personalizzato

Espandi **CSS personalizzato** per modificare il CSS della bacheca. **Ripristina predefiniti** ripristina il CSS predefinito e **Gestisci risorse** apre il gestore risorse. Qui si possono applicare anche i temi di Steam Workshop. Mentre un tema è applicato, il CSS è di sola lettura. Vedi [Temi](./themes).

## Scheda Cronologia

### Aggiunta manuale (per prova)

Scegli una piattaforma, inserisci **Nome**, **Importo** e un eventuale **Messaggio (facoltativo)**, poi fai clic su **Aggiungi**. La voce viene aggiunta solo se quella piattaforma è selezionata in **Piattaforme collegate**. L'importo viene considerato nella tua valuta delle donazioni.

### Cronologia

Elenca le voci salvate con il numero di voci.

- Fai clic su **🗑** e poi su **Conferma eliminazione** per eliminare una voce.
- Fai clic su **Svuota** per eliminare tutte le voci. Prima compare una conferma. Non si può annullare.

:::info Versione di prova
Il CSS personalizzato è disponibile solo nella versione completa. I gateway di pagamento reali (PayPal / Stripe / O'Pay / ECPay), gli eventi di iscrizione di YouTube e le Gemme non possono essere usati nella versione di prova, e la bacheca mostra una filigrana in OBS. Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::

## Domande frequenti

**Q: Gli avvisi di prova compaiono nella bacheca.**
La **Notifica di prova** nella pagina Impostazioni viene gestita come una donazione reale, quindi viene registrata anche qui se quella piattaforma è selezionata. Eliminala nella scheda **Cronologia**.
