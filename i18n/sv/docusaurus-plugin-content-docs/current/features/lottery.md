---
sidebar_position: 16
---

# Utlottningar

Tittarna deltar genom att skriva ett nyckelord i Twitch- eller YouTube-chatten. När anmälan stänger dras vinnare slumpmässigt, och dragningsanimationen spelas upp i OBS-overlayen.

## OBS-källans URL

```
http://127.0.0.1:7272/lottery
```

Klicka på **Kopiera** bredvid **OBS-källadress** högst upp på sidan och lägg sedan till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source). Utlottningar spelar inget ljud, så du behöver inte slå på ”Styr ljud via OBS”.

:::tip
Slå också på reglaget bredvid **Utlottningar** i vänstermenyn (**Slå på OBS-visning**). När det är av förblir overlayen dold.
:::

Sidan har två flikar: **Inställningar** och **Historik**.

## Inställningar

### Omröstningsplattform

Klicka på **Twitch** eller **YouTube** för att välja vilken plattforms chatt som kan delta. Du kan välja båda. En plattform som inte är ansluten visar **(Ej ansluten)** för Twitch eller **Ingen chattadress ansluten** för YouTube. För att ansluta, se [Twitch Inställningar](../platforms/twitch) och [YouTube-inställningar](../platforms/youtube-settings).

### Nyckelord för utlottning

Ett chattmeddelande som innehåller det här nyckelordet anmäler tittaren. Varje tittare kan bara delta en gång per utlottning. Det går inte att klicka på **Börja samla** när nyckelordet är tomt.

### Utlottningstid

Hur länge anmälan är öppen, i sekunder. Standard är 300 och intervallet är 10–3600.

### Max antal deltagare

Anmälan stänger i förtid när så här många har anmält sig. Ange `0` för ingen gräns.

### Ta bort alternativ efter dragning

När det här är på tas en vinnare bort från deltagarna före nästa dragning, så att hen inte kan dras igen i samma utlottning.

### Tipstext

Tipset som visas i overlayen under anmälan och som talar om nyckelordet och antalet deltagare för tittarna. Ställ in teckensnitt, färg och storlek (px).

### Dragningsanimation

- **Snabb ID-växling** (standard): deltagarnas namn svävar på skärmen medan anmälan är öppen och växlar sedan snabbt under dragningen
  - **Teckensnitt på insamlingsskärm**: teckensnitt, teckenstorlek och färgerna på namnbrickorna (upp till 5)
  - **Teckensnitt för dragningsanimation**: teckensnitt och teckenstorlek för namnen som växlar under dragningen
  - **Återställ standard**: återställer dessa inställningar
- **Hjulanimation**: deltagarna placeras på ett hjul som snurrar för att välja vinnaren. Välj ett färgschema: **Minimalistisk** eller ett eget tema som du har skapat i [Snurrhjul](./turntable)

Medan anmälan är öppen kan du inte ändra plattformar, nyckelord, tid, max antal deltagare, Ta bort alternativ efter dragning eller animationstyp.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Genomföra en utlottning

1. Klicka på **Börja samla**. Panelen visar **Samlar…**, återstående tid och antalet deltagare
2. Medan anmälan är öppen kan du skriva ett namn i **Ange deltagarnamn manuellt** och klicka på **Lägg till** (eller trycka på Enter). Ett namn som redan finns i listan visar ”Detta ID finns redan i listan”
3. För att stänga anmälan innan tiden är slut, klicka på **Avsluta insamling**. Anmälan stänger också när tiden är slut eller när **Max antal deltagare** har uppnåtts. Panelen visar då **Tiden är ute!**
4. Klicka på **Starta dragning**. Overlayen spelar upp animationen, och när den är klar visas vinnaren under **Vinnare**
5. För att dra ytterligare en vinnare, klicka på **Dra igen**

Klicka på **Avbryt dragning** när som helst för att rensa alla deltagare och vinnare, så återgår overlayen till vänteläge.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Historik

Fliken **Historik** sparar en post per utlottning med tid, nyckelord och antal deltagare. Expandera en post för att se vinnarna och hela deltagarlistan. Endast de senaste 30 dagarnas utlottningshistorik sparas. För att ta bort en post, klicka på 🗑 och sedan på **Bekräfta borttagning**.

:::info Begränsningar i testversionen
OBS-overlayen visar en vattenstämpel. Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::
