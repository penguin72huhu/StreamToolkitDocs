---
sidebar_position: 10
---

# Barra obiettivo Twitch

Mostra durante la diretta le barre di avanzamento dei tuoi obiettivi Twitch di follower, abbonamenti e Bits. Ogni tipo di obiettivo ha la propria barra, le proprie impostazioni e il proprio URL OBS.

:::note Prima di iniziare
Le barre obiettivo contano gli eventi di Twitch, quindi collega prima il tuo account Twitch. Vedi [Impostazioni Twitch](../platforms/twitch).
:::

## Passaggio 1: Scegli un tipo di obiettivo e aggiungi la fonte OBS

In cima alla pagina, scegli un tipo di obiettivo: **Follow**, **Abbonamenti** o **Bits**. L'**URL OBS** sotto i pulsanti cambia di conseguenza. Fai clic su **Copia** per copiarlo.

| Tipo di obiettivo | URL della fonte OBS |
|-----------|----------------|
| **Follow** | `http://127.0.0.1:7272/goal/follow` |
| **Abbonamenti** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Aggiungi a OBS ogni barra che vuoi mostrare come fonte browser separata. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source). Le barre obiettivo non riproducono suoni, quindi non è necessario attivare "Controlla audio tramite OBS".

:::tip
Attiva anche l'interruttore accanto a **Barra obiettivo Twitch** nella barra laterale sinistra (**Attiva output OBS**). Quando è spento, le barre sono nascoste in OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Passaggio 2: Imposta l'obiettivo

Tutte le impostazioni seguenti si applicano al tipo di obiettivo scelto in alto.

- **Titolo**: il testo del titolo mostrato sulla barra
- **Obiettivo**: il numero da raggiungere (numeri interi, 0 o più)
- **Progresso**: mostra il conteggio attuale, l'obiettivo e la percentuale

### Come viene conteggiato il progresso

| Tipo di obiettivo | Cosa aumenta il progresso |
|-----------|----------------------|
| **Follow** | Ogni nuovo follow aggiunge 1. Mentre Twitch è collegato, il conteggio viene anche sincronizzato ogni 30 secondi con il totale dei follower del tuo canale su Twitch. Fai clic su **Sincronizza** per sincronizzarlo subito |
| **Abbonamenti** | Nuovi abbonamenti e abbonamenti regalati (un regalo di più abbonamenti aggiunge il numero di abbonamenti regalati). I rinnovi contano solo quando **Conta i rinnovi di abbonamento** è attivo |
| **Bits** | Ogni cheer aggiunge il numero di Bits inviati |

### Opzioni degli abbonamenti

Visibili solo per **Abbonamenti**:

- **Ponderato per Tier**: quando è attivo, gli abbonamenti di livello superiore aggiungono di più al progresso. Quando è disattivato, ogni abbonamento aggiunge 1
- **Conta i rinnovi di abbonamento**: quando è attivo, anche i messaggi di rinnovo aumentano il progresso

### Reimpostare il progresso

**Abbonamenti** e **Bits** hanno un pulsante **Reimposta progresso**. Fai clic, poi fai clic su **Conferma reimpostazione** per riportare a 0 il conteggio attuale. Il numero dell'obiettivo viene mantenuto.

**Follow** non ha un pulsante di reimpostazione, perché il suo conteggio segue il totale dei tuoi follower su Twitch.

## Passaggio 3: Regola l'aspetto

### Anteprima

L'**Anteprima** in alto mostra la barra del tipo di obiettivo selezionato. Usa il riquadro colore accanto per cambiare lo sfondo dell'anteprima. Seleziona **Anteprima raggiunto** per vedere come appare la barra una volta raggiunto l'obiettivo.

### Impostazioni dell'aspetto

| Impostazione | Descrizione |
|---------|-------------|
| **Colore sfondo** | Sfondo della barra |
| **Colore barra di avanzamento** | Colore della parte riempita |
| **Colore obiettivo raggiunto** | Colore di riempimento una volta raggiunto l'obiettivo |
| **Testo titolo** | Font, colore e dimensione (8–72 px) del titolo |
| **Testo obiettivo** | Font, colore e dimensione (8–72 px) dei numeri |
| **Percentuale** | Font, colore e dimensione (8–72 px) della percentuale |

Fai clic su **Ripristina predefiniti** per ripristinare l'aspetto del tipo di obiettivo selezionato.

### CSS personalizzato

Fai clic su **CSS personalizzato** per espandere l'editor. Ogni tipo di obiettivo ha il proprio CSS. Usalo per layout e struttura. Colori, font e dimensioni si impostano nelle impostazioni dell'aspetto qui sopra.

- **Ripristina predefiniti**: ripristina il CSS predefinito
- **Gestisci risorse**: apre il gestore risorse per le immagini usate nel CSS

Se il tuo CSS sovrascrive una proprietà con `!important`, il controllo dell'aspetto corrispondente viene bloccato, perché il CSS avrebbe comunque la precedenza.

:::info Limiti della versione di prova
- Il **CSS personalizzato** è disponibile solo nella versione completa
- L'overlay OBS mostra una filigrana

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::
