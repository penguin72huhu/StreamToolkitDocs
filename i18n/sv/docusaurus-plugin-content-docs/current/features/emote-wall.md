---
sidebar_position: 13
---

# Emote-vägg

När tittare använder emotes i chatten svävar emotes över din sändning.

:::note Innan du börjar
Emote-vägg läser emotes från chatten, så anslut de plattformar du använder först. Se [Twitch Inställningar](../platforms/twitch) och [YouTube-inställningar](../platforms/youtube-settings).
:::

## Steg 1: Lägg till OBS-källan

Kopiera **OBS-källadress** högst upp på sidan:

```
http://127.0.0.1:7272/emote-wall
```

Lägg till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source). Emote-vägg spelar inget ljud, så du behöver inte slå på ”Styr ljud via OBS”.

:::tip
Slå också på reglaget bredvid **Emote-vägg** i vänstermenyn (**Slå på OBS-visning**). När det är av skickas inte emotes från chatten till overlayen.
:::

## Steg 2: Välj källor

Under **Källa** finns ett kort för **Twitch** och ett för **YouTube**. Varje kort visar anslutningsstatus:

- Twitch visar **(Ej ansluten)** när ditt Twitch-konto inte är anslutet
- YouTube visar **Ingen chattadress ansluten** när YouTube-chatten inte är ansluten

Markera **Aktivera emoji-vägg** på ett kort för att visa emotes från den plattformens chatt. Avmarkera för att ignorera plattformen.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Steg 3: Animationsinställningar

| Inställning | Beskrivning |
|---------|-------------|
| **Klisterlappsstorlek** | Storlek på varje emote, 16–256 px |
| **Max antal emotes per meddelande** | Högst så här många emotes tas från ett chattmeddelande (1–20) |
| **Svävningens varaktighet** | Hur länge varje emote svävar, 1–30 sekunder |
| **Svävningshastighet** | 50–500 px/s |

Klicka på **Återställ standard** bredvid avsnittsrubriken för att återställa alla fyra värden.

## Steg 4: Testa

Klicka på **Testa (visa i OBS)** för att skicka exempel på Twitch-emotes till overlayen med dina nuvarande inställningar. Antalet testemotes följer **Max antal emotes per meddelande**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Begränsningar i testversionen
OBS-overlayen visar en vattenstämpel medan emotes visas på skärmen. Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::
