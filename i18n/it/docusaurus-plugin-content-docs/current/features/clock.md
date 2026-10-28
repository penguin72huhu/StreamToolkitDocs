---
sidebar_position: 12
---

# Orologio

Mostra l'ora attuale durante la diretta, facoltativamente con la data e il giorno della settimana.

## Passaggio 1: Aggiungi la fonte OBS

Copia l'**URL sorgente OBS** in cima alla pagina:

```
http://127.0.0.1:7272/clock
```

Aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source). L'orologio non riproduce suoni, quindi non è necessario attivare "Controlla audio tramite OBS".

:::tip
Attiva anche l'interruttore accanto a **Orologio** nella barra laterale sinistra (**Attiva output OBS**). Quando è spento, l'orologio è nascosto in OBS.
:::

## Anteprima

L'**Anteprima** in alto mostra l'overlay OBS reale e si aggiorna mentre modifichi le impostazioni. Usa il riquadro colore accanto per cambiare lo sfondo dell'anteprima.

Sotto l'anteprima ci sono tre schede: **Aspetto**, **Formato orologio** e **Impostazioni di visualizzazione**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Aspetto

| Impostazione | Descrizione |
|---------|-------------|
| **Carattere** | Font per tutto il testo dell'orologio |
| **Stile** | Come sono disposti ora, data e giorno della settimana: **Stack**, **Horizontal**, **One-Top-Two-Bottom** o **Two-Top-One-Bottom**. **Interlinea** è disponibile in tutti i layout tranne **Horizontal**, e **Spaziatura** in tutti i layout tranne **Stack** (entrambi da −200 a 200 px) |
| **Ordine** | Trascina i blocchi **Ora**, **Data** e **Giorno** per cambiarne l'ordine |
| **Testo** | Imposta separatamente **Ora**, **Data** e **Giorno**: **Dimensione carattere**, colore (**Tinta unita**, oppure **Sfumatura** con due colori e un **Angolo**) e colore, **Opacità** e **Spessore** (0–7 px) del **Bordo** |
| **Ombra** | Colore dell'ombra, **Opacità**, **Sfocatura** e spostamento **X** / **Y**, comuni a tutto il testo |

Il pulsante **Ripristina predefiniti** si trova in cima alla scheda.

### CSS personalizzato

Fai clic su **CSS personalizzato** per espandere l'editor. Il CSS predefinito elenca, con commenti, i selettori di ogni parte dell'orologio (ora, data, giorno della settimana e i loro contenitori). Usalo per layout e struttura. Colori, font e dimensioni si impostano nelle impostazioni dell'aspetto qui sopra.

- **Ripristina predefiniti**: ripristina il CSS predefinito
- **Gestisci risorse**: apre il gestore risorse per le immagini usate nel CSS

Se il tuo CSS sovrascrive una proprietà con `!important`, il controllo dell'aspetto corrispondente viene bloccato, perché il CSS avrebbe comunque la precedenza.

## Formato orologio

- **Formato ora**: **24 ore** oppure una delle due opzioni a 12 ore. Nell'interfaccia italiana entrambe le opzioni a 12 ore si chiamano **12 ore (AM/PM)**: la seconda mostra AM/PM, mentre la prima mostra gli indicatori cinesi 上午 / 下午
- **Fuso orario**: da UTC−12 a UTC+14. Per impostazione predefinita corrisponde al fuso orario del tuo computer

## Impostazioni di visualizzazione

- **Mostra secondi**
- **Mostra data**: quando è attivo, scegli un formato di data dal menu a discesa. I formati contrassegnati con **Senza anno** omettono l'anno
  - **Zero iniziale nella data**: mostra mesi e giorni a una cifra con uno zero iniziale (ad esempio 2026/05/20)
  - **Formato anno**: visibile per i formati che iniziano con l'anno. **Completo (2026)** o **Abbreviato (26)**

  Queste due opzioni si applicano ai formati numerici (con `/` o `-`). I formati scritti per esteso (ad esempio "20 maggio 2026") seguono invece la lingua dell'interfaccia dell'app
- **Mostra giorno della settimana**: quando è attivo, scegli come scrivere il giorno della settimana (ad esempio **mercoledì**, **MER** o **mer**)

:::info Limiti della versione di prova
Il **CSS personalizzato** è disponibile solo nella versione completa. Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::
