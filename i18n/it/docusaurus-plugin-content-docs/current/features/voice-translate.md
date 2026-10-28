---
sidebar_position: 4
---

# Traduzione vocale

Tieni premuta una scorciatoia e parla. Stream Toolkit trasforma la tua voce in testo, la traduce e mostra entrambe le righe come sottotitoli in OBS.

Il riconoscimento vocale viene eseguito sul tuo computer con un modello Whisper. Il testo viene poi tradotto con MyMemory.

La pagina ha due schede: **Impostazioni** e **Aspetto**.

## Passaggio 1: Aggiungi la fonte OBS

L'URL della fonte OBS è mostrato in cima alla pagina:

```
http://127.0.0.1:7272/voice-translate
```

Fai clic su **Copia** e aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source). La Traduzione vocale non riproduce suoni, quindi non è necessario attivare "Controlla audio tramite OBS".

I sottotitoli compaiono nella parte inferiore della fonte: il testo originale sopra e la traduzione sotto. Scompaiono dopo la **Durata dei sottotitoli**.

:::tip
Attiva l'interruttore accanto a **Traduzione vocale** nella barra laterale sinistra (**Attiva output OBS**). La scorciatoia funziona solo quando è acceso.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Passaggio 2: Imposta la scorciatoia

In **Scorciatoia (tieni premuto per registrare, rilascia per riconoscere)**:

1. Fai clic su **Fai clic per impostare la scorciatoia**
2. Premi la combinazione di tasti desiderata, poi rilasciala. Premi **Esc** per annullare
3. Per rimuovere la scorciatoia, fai clic su **Cancella**

Se la combinazione è già usata da un'altra funzione, il pulsante mostra **Conflitto scorciatoia** e la scorciatoia non viene salvata.

La scorciatoia funziona anche quando Stream Toolkit non è la finestra attiva. **Tienila premuta** mentre parli, poi **rilasciala** per riconoscere e tradurre. Una registrazione si interrompe automaticamente dopo 15 secondi.

Puoi anche tenere premuto con il mouse il pulsante **REC** sotto la scorciatoia. Funziona allo stesso modo: premi per registrare, rilascia per tradurre. La finestra [Strumenti rapidi](./quick-tools) ha lo stesso pulsante **REC**.

## Passaggio 3: Impostazioni di riconoscimento

| Campo | Descrizione |
|-------|-------------|
| **Stato del modello** | Mostra **Caricamento xx%**, **Pronto** o **Caricamento del modello non riuscito**. Puoi registrare quando mostra **Pronto** |
| **Modello Whisper** | **Tiny (il più veloce, circa 40MB)**, **Base (consigliato, circa 75MB)** (predefinito) o **Small (il più preciso, circa 245MB)**. Il modello viene scaricato al primo utilizzo. Cambiare modello lo ricarica |
| **Lingua vocale** | La lingua in cui parli. Il valore predefinito è il cinese tradizionale |
| **Microfono** | Il microfono da cui registrare. **Predefinito di sistema** usa il dispositivo di input predefinito di Windows |

## Passaggio 4: Impostazioni di traduzione

| Campo | Descrizione |
|-------|-------------|
| **Durata dei sottotitoli** | Per quanto tempo i sottotitoli restano sullo schermo, 1–30 secondi. Il valore predefinito è 5 |
| **Lingua di destinazione** | La lingua in cui tradurre. Il valore predefinito è l'inglese |
| **Usa la traduzione Whisper quando la lingua di destinazione è English** | Quando la lingua di destinazione è l'inglese, traduce Whisper invece di MyMemory. (Gratuito e senza quota, ma con latenza maggiore.) Non ha effetto per le altre lingue di destinazione |
| **Servizio di traduzione** | MyMemory |

### Email (facoltativo)

MyMemory è gratuito. La quota giornaliera dipende dall'inserimento di un'email:

- Senza email: 5.000 caratteri al giorno
- Con email: 50.000 caratteri al giorno (gratis, non serve registrarsi su MyMemory)

Inserisci la tua email e fai clic su **Salva**. Questa email è **Condiviso con la traduzione della chat**.

La barra sottostante mostra **Usato oggi (stima approssimativa, azzeramento giornaliero alle 08:00 UTC)**. Quando la quota è esaurita, mostra **Quota esaurita**.

## Passaggio 5: Aspetto

Nella scheda **Aspetto** puoi cambiare l'aspetto dei sottotitoli. Le modifiche vengono salvate subito.

- **Anteprima**: mostra sottotitoli di esempio. Il riquadro colore accanto cambia solo lo sfondo dell'anteprima
- **Allineamento**: **A sinistra** (predefinito), **Al centro** o **A destra**
- **Carattere**: una riga per la **Lingua originale** (il testo originale) e una per la **Lingua di destinazione** (la traduzione). Ogni riga ha un font, un colore e una dimensione (8–120 px). I valori predefiniti sono 14 px per l'originale e 22 px per la traduzione
- **Ombra**: il colore dell'ombra del testo
- **Ripristina predefiniti**: ripristina l'aspetto predefinito

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Limiti della versione di prova
La **Lingua di destinazione** è fissata sull'inglese. La pagina mostra "La Demo supporta solo la traduzione in inglese".

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::

## Domande frequenti

**Q: Tengo premuta la scorciatoia ma non succede nulla.**
Controlla che l'interruttore accanto a **Traduzione vocale** nella barra laterale sinistra sia acceso e che lo **Stato del modello** mostri **Pronto**.

**Q: La registrazione funziona, ma in OBS non compaiono sottotitoli.**
Se MyMemory non riesce a tradurre (ad esempio perché la quota giornaliera è esaurita), non vengono mostrati sottotitoli. Controlla la barra **Usato oggi**. Inserire un'email aumenta la quota. Se la lingua di destinazione è l'inglese, puoi anche attivare **Usa la traduzione Whisper quando la lingua di destinazione è English**, che non ha quota.
