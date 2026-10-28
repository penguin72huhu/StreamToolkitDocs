---
sidebar_position: 13
---

# Emote-muur

Wanneer kijkers emotes gebruiken in de chat, zweven die emotes over je stream.

:::note Voordat je begint
De Emote-muur leest emotes uit de chat, dus koppel eerst de platforms die je gebruikt. Zie [Twitch-instellingen](../platforms/twitch) en [YouTube-instellingen](../platforms/youtube-settings).
:::

## Stap 1: Voeg de OBS-bron toe

Kopieer de **OBS-bron-URL** bovenaan de pagina:

```
http://127.0.0.1:7272/emote-wall
```

Voeg deze in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source). De Emote-muur speelt geen geluid af, dus je hoeft "Audio bedienen via OBS" niet aan te zetten.

:::tip
Zet ook de schakelaar naast **Emote-muur** in de linkerzijbalk aan (**OBS-weergave inschakelen**). Zolang deze uit staat, worden emotes uit de chat niet naar de overlay gestuurd.
:::

## Stap 2: Kies bronnen

Onder **Bron** staat een kaart voor **Twitch** en een voor **YouTube**. Elke kaart toont de verbindingsstatus:

- Twitch toont **(niet verbonden)** als je Twitch-account niet verbonden is
- YouTube toont **Geen chat-URL verbonden** als de YouTube-chat niet verbonden is

Vink **Emote-muur inschakelen** aan op een kaart om emotes uit de chat van dat platform te tonen. Vink het uit om dat platform te negeren.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Stap 3: Animatie-instellingen

| Instelling | Beschrijving |
|---------|-------------|
| **Emote-grootte** | Grootte van elke emote, 16–256 px |
| **Max. aantal emotes per bericht** | Er worden maximaal zoveel emotes uit één chatbericht genomen (1–20) |
| **Zweefduur** | Hoe lang elke emote zweeft, 1–30 seconden |
| **Zweefsnelheid** | 50–500 px/s |

Klik op **Standaard herstellen** naast de titel van het gedeelte om alle vier de waarden terug te zetten.

## Stap 4: Testen

Klik op **Testen (weergeven in OBS)** om met je huidige instellingen voorbeeldemotes van Twitch naar de overlay te sturen. Het aantal testemotes volgt **Max. aantal emotes per bericht**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Beperkingen van de proefversie
De OBS-overlay toont een watermerk zolang er emotes in beeld zijn. Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::
