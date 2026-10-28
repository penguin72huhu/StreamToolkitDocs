---
sidebar_position: 5
---

# Media Board

Visa bilder, spela videor och spela ljudeffekter i sändningen med ett klick eller ett kortkommando.

Sidan har tre flikar: **Bild**, **Video** och **Ljud**. Varje flik har en egen OBS-käll-URL.

| Flik | OBS-källans URL | Styr ljud via OBS |
|-----|----------------|-----------------------|
| **Bild** | `http://127.0.0.1:7272/imageboard` | Behövs inte |
| **Video** | `http://127.0.0.1:7272/videoboard` | Krävs |
| **Ljud** | `http://127.0.0.1:7272/soundboard` | Krävs |

Klicka på **Kopiera** bredvid varje URL och lägg till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source). Videor och ljud spelas upp i OBS-källan, inte i Stream Toolkit, så du måste slå på **Styr ljud via OBS** för de två källorna, annars hör tittarna dem inte.

:::tip
Slå på reglaget bredvid **Media Board** i vänstermenyn (**Slå på OBS-visning**). När det är av kan bilder inte visas och videor och ljud spelas inte upp, oavsett om du använder knapparna eller kortkommandona.
:::

## Gemensamma kontroller

Bilder, videor och ljud listas alla som kort:

- Klicka på ett kort för att expandera eller fälla ihop dess inställningar
- Kryssrutan till höger på ett kort: när den är markerad visas objektet bland startverktygen i [Snabbverktyg](./quick-tools). Nya objekt är markerade som standard
- **✕** tar bort objektet
- Om en lokal fil har flyttats eller tagits bort visar kortet **Filen hittades inte**

### Kortkommandon

Varje objekt kan ha ett eget kortkommando:

1. Expandera kortet och klicka på kortkommandoknappen
2. Tryck på den tangentkombination du vill ha och släpp den sedan. Tryck på **Esc** för att avbryta
3. För att ta bort kortkommandot, klicka på **Rensa**

Om kombinationen redan används av en annan funktion sparas den inte och knappen visar ett konfliktmeddelande. Kortkommandot fungerar även när Stream Toolkit inte är det aktiva fönstret. Alla kortkommandon listas också på sidan [Kortkommandon](./hotkeys).

## Bild

{/* TODO: 截圖 — 圖片分頁 */}

### Lägg till en bild

1. Klicka på **Lägg till bild**
2. Välj en fil (jpg, jpeg, png eller gif). Filnamnet blir bildens namn

När du expanderar kortet visas en miniatyr och dessa inställningar:

- **Namn**: bildens namn
- **Filsökväg**: klicka på **Välj om** för att välja en annan fil
- **Kortkommando**: tryck en gång för att visa bilden, tryck igen för att dölja den
- **Ställ in position och storlek**: se nedan
- **Ta bort bild**: tar bort bilden

### Visa och dölj

Klicka på knappen **○** på ett kort för att visa bilden i OBS. Den blir **◉**. Klicka igen för att dölja bilden.

### Visningsinställningar

**Tillåt flera bilder samtidigt** är av som standard. När det är av döljs den bild som visas när du visar en ny. Slå på det för att visa flera bilder samtidigt.

### Ställ in position och storlek

- **X-position** / **Y-position**: i px. 0/0 är källans mitt. Positiva värden flyttar åt höger/nedåt, negativa värden åt vänster/uppåt
- **Bredd** / **Höjd**: i % av originalstorleken. 100 = originalstorlek. Knappen 🔗 låser bildförhållandet (på som standard). Klicka på den för att skala fritt
- Medan bilden visas förhandsvisas ändringarna direkt i OBS
- **Spara** behåller ändringarna, **Återställ** går tillbaka till värdena från när du öppnade fönstret, **Avbryt** stänger utan att spara

## Video

{/* TODO: 截圖 — 影片分頁 */}

Klicka på **Lägg till video** för att lägga till ett kort och expandera det sedan:

- **Videonamn**: namnet som visas på kortet
- **Källa**: **YouTube** eller **Lokal**
  - **YouTube**: klistra in videolänken i **YouTube-adress**. Klicka på **Testa analys** för att kontrollera den. Om det lyckas visas ”Analyserad, tillämpas automatiskt vid uppspelning”
  - **Lokal**: klicka på **Välj fil** för att välja en mp4-, webm- eller ogg-fil. Storleksgränsen är 200MB, och större filer ger längre fördröjning. För genomskinlig bakgrund, använd en WebM-video (VP9 Alpha)
- **Spela i loop**: upprepar videon
- **Uppspelningstid**: ange **Från** och **Till** (timmar, minuter, sekunder, ms). Lämna **Till** på 00:00 för att spela till slutet
- **Volym**: 0–100 %
- **Kortkommando**: tryck för att spela upp videon. Tryck igen medan videon spelas för att stoppa den
- **Ställ in position och storlek**: samma fält för position och storlek som för bilder. Klicka på **Förhandsvisa i loop** för att spela videon i loop i OBS medan du justerar, och **Stoppa förhandsvisning** för att sluta. Klicka på **Spara** eller **Avbryt** när du är klar

Klicka på **▶** på ett kort för att spela videon i OBS. Klicka på **■** för att stoppa den.

## Ljud

{/* TODO: 截圖 — 音效分頁 */}

Klicka på **Lägg till ljud** för att lägga till ett kort och expandera det sedan:

- **Ljudnamn**: namnet som visas på kortet
- **Källa**: **YouTube-adress** eller **Lokal fil**
  - **YouTube-adress**: klistra in länken och klicka på **Testa analys** för att kontrollera den
  - **Lokal fil**: klicka på **Välj fil** för att välja en mp3-, wav-, ogg-, flac-, m4a-, aac- eller opus-fil
- **Uppspelningstid**: ange **Från** och **Till**. Lämna **Till** på 00:00 för att spela till slutet
- **Volym**: 0–100 %
- **Kortkommando**: tryck för att spela upp ljudet

Klicka på **▶** på ett kort för att spela ljudet i OBS. Klicka på **■** för att stoppa det. Bara ett ljud spelas åt gången. Om du startar ett annat ljud stoppas det aktuella.

:::info Begränsningar i testversionen
- Du kan bara lägga till **1** bild, **1** video och **1** ljud
- Bild- och video-overlayerna visar en vattenstämpel

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::

## Vanliga frågor

**Q: Videor eller ljud spelas upp, men inget ljud hörs i sändningen.**
Se till att **Styr ljud via OBS** är markerat för källorna `/videoboard` och `/soundboard`, och att källorna inte är ljudlösa i OBS-mixern.

**Q: Jag kan inte välja min videofil.**
Bara mp4-, webm- och ogg-filer kan väljas, upp till 200MB. Om en fil är större visas ett meddelande om gränsen och filen läggs inte till.
