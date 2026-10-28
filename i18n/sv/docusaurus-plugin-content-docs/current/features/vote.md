---
sidebar_position: 15
---

# Liveomröstningar

Håll en omröstning i sändningen. Tittarna röstar genom att skriva ett alternativnummer i Twitch- eller YouTube-chatten, och resultaten uppdateras live i OBS-overlayen.

## OBS-källans URL

```
http://127.0.0.1:7272/vote
```

Klicka på **Kopiera** bredvid **OBS-källadress** högst upp på sidan och lägg sedan till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source). Liveomröstningar spelar inget ljud, så du behöver inte slå på ”Styr ljud via OBS”.

:::tip
Slå också på reglaget bredvid **Liveomröstningar** i vänstermenyn (**Slå på OBS-visning**). När det är av förblir overlayen dold.
:::

Sidan har tre flikar: **Inställningar**, **Utseende** och **Historik**.

## Starta en omröstning (fliken Inställningar)

### Omröstningsplattform

Klicka på **Twitch** eller **YouTube** för att välja vilken plattforms chatt som kan rösta. Du kan välja båda. En plattform som inte är ansluten visar **(Ej ansluten)** för Twitch eller **Ingen chattadress ansluten** för YouTube. Anslut den först:

- [Twitch Inställningar](../platforms/twitch)
- [YouTube-inställningar](../platforms/youtube-settings)

### Omröstningstitel

Valfritt. Till exempel: ”Vilket spel i kväll?”

### Omröstningsalternativ (2–10 st)

- Ange minst 2 alternativ. Du kan ha upp till 10
- **+ Lägg till alternativ** lägger till en rad och **×** tar bort en
- **Använd historik** låter dig välja en av dina 15 senaste omröstningar och fylla i dess titel och alternativ

Medan du redigerar förhandsvisar OBS-overlayen titeln och alternativen.

### Omröstningstid

Omröstningens längd i sekunder. Standard är 60 och minimum är 10.

### Starta / Stoppa

- **Starta omröstning**: kräver minst 2 ifyllda alternativ och minst en vald plattform som är ansluten
- **Stoppa omröstning**: avslutar omröstningen i förtid. Annars avslutas den när tiden är slut

Medan en omröstning pågår kan du inte ändra plattformar, titel, alternativ eller tid.

{/* TODO: 截圖 — 投票設定分頁 */}

## Så röstar tittarna

Medan omröstningen pågår visar overlayen ”Skriv alternativets nummer i chatten för att rösta (t.ex.: 1)”.

- Hela meddelandet måste vara alternativets nummer, till exempel `1` eller `1.`. Mellanslag ignoreras. Ett meddelande med annan text räknas inte
- Varje tittare har en röst. Om tittaren skickar ett annat nummer flyttas rösten till det nya alternativet, och den sista rösten innan tiden är slut räknas

## Liveresultat

Under omröstningen visas **Liveresultat** under inställningarna med återstående tid, antal röster och procent för varje alternativ samt det totala antalet röster. När omröstningen är slut ändras det till **Slutresultat**. Klicka på **Detaljer** för att se vem som röstade på varje alternativ, grupperat efter Twitch och YouTube.

## Utseende

Fliken **Utseende** har **Förhandsvisa** högst upp. Färgväljaren bredvid ändrar bara förhandsvisningens bakgrund, inte OBS-overlayen.

- **Teckensnitt**: ställ in teckensnitt, färg och **Storlek** (px) för **Titel**, **Tips**, **Alternativ**, **Nedräkningssekunder** och **Antal röster**
- **Färg på förloppsstapel**: upp till 5 färger, som används för alternativens staplar i tur och ordning. Var och en kan vara **Enfärgad** eller **Gradient**. Gradienter har även en **Vinkel**
- **Bakgrundsfärg**: omröstningskortets bakgrund
- **Återställ standard**: återställer standardutseendet. Om ett tema är tillämpat återställs temats utseende

Under **Anpassad CSS** kan du skriva egna stilar. För att dela eller ladda ner utseenden, se [Teman](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Historik

Fliken **Historik** listar varje omröstnings titel, tid, antal alternativ och totala antal röster. Expandera en omröstning för att se resultaten, antalet röster per plattform och **Detaljer**. Endast de senaste 30 dagarnas omröstningshistorik sparas. För att ta bort en post, klicka på 🗑 och sedan på **Bekräfta borttagning**.

:::info Begränsningar i testversionen
- **Anpassad CSS** finns bara i fullversionen
- OBS-overlayen visar en vattenstämpel

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::
