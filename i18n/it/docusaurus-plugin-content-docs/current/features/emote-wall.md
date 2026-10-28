---
sidebar_position: 13
---

# Parete delle emote

Quando gli spettatori usano le emote in chat, le emote fluttuano sul tuo stream.

:::note Prima di iniziare
La Parete delle emote legge le emote dalla chat, quindi collega prima le piattaforme che usi. Vedi [Impostazioni Twitch](../platforms/twitch) e [Impostazioni YouTube](../platforms/youtube-settings).
:::

## Passaggio 1: Aggiungi la fonte OBS

Copia l'**URL sorgente OBS** in cima alla pagina:

```
http://127.0.0.1:7272/emote-wall
```

Aggiungilo a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source). La Parete delle emote non riproduce suoni, quindi non è necessario attivare "Controlla audio tramite OBS".

:::tip
Attiva anche l'interruttore accanto a **Parete delle emote** nella barra laterale sinistra (**Attiva output OBS**). Quando è spento, le emote della chat non vengono inviate all'overlay.
:::

## Passaggio 2: Scegli le sorgenti

In **Sorgente** c'è una scheda per **Twitch** e una per **YouTube**. Ogni scheda mostra lo stato della connessione:

- Twitch mostra **(non connesso)** quando il tuo account Twitch non è collegato
- YouTube mostra **URL della chat non collegato** quando la chat di YouTube non è collegata

Seleziona **Attiva muro delle emote** su una scheda per mostrare le emote della chat di quella piattaforma. Deselezionalo per ignorare quella piattaforma.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Passaggio 3: Impostazioni animazione

| Impostazione | Descrizione |
|---------|-------------|
| **Dimensione emote** | Dimensione di ogni emote, 16–256 px |
| **Numero massimo di emote per messaggio** | Da un singolo messaggio in chat vengono prese al massimo queste emote (1–20) |
| **Durata del movimento** | Per quanto tempo fluttua ogni emote, 1–30 secondi |
| **Velocità del movimento** | 50–500 px/s |

Fai clic su **Ripristina predefiniti** accanto al titolo della sezione per ripristinare tutti e quattro i valori.

## Passaggio 4: Prova

Fai clic su **Prova (mostra in OBS)** per inviare all'overlay emote Twitch di esempio con le impostazioni attuali. Il numero di emote di prova segue **Numero massimo di emote per messaggio**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Limiti della versione di prova
L'overlay OBS mostra una filigrana mentre le emote sono sullo schermo. Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::
