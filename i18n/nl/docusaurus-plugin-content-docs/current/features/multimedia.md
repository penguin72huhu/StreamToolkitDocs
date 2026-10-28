---
sidebar_position: 5
---

# Media Board

Toon afbeeldingen, speel video's af en speel geluidseffecten af op de stream met een klik of een sneltoets.

De pagina heeft drie tabbladen: **Afbeelding**, **Video** en **Geluid**. Elk tabblad heeft een eigen OBS-bron-URL.

| Tabblad | OBS-bron-URL | Audio bedienen via OBS |
|-----|----------------|-----------------------|
| **Afbeelding** | `http://127.0.0.1:7272/imageboard` | Niet nodig |
| **Video** | `http://127.0.0.1:7272/videoboard` | Vereist |
| **Geluid** | `http://127.0.0.1:7272/soundboard` | Vereist |

Klik op **Kopiëren** naast elke URL en voeg deze in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source). Video's en geluiden worden afgespeeld in de OBS-bron, niet in Stream Toolkit zelf, dus je moet **Audio bedienen via OBS** aanzetten voor die twee bronnen, anders horen kijkers ze niet.

:::tip
Zet de schakelaar naast **Media Board** in de linkerzijbalk aan (**OBS-weergave inschakelen**). Zolang deze uit staat, kunnen afbeeldingen niet worden getoond en worden video's en geluiden niet afgespeeld, of je nu de knoppen of de sneltoetsen gebruikt.
:::

## Algemene bediening

Afbeeldingen, video's en geluiden worden allemaal als kaarten weergegeven:

- Klik op een kaart om de instellingen uit of in te klappen
- Het selectievakje rechts op een kaart: als het is aangevinkt, verschijnt het item bij de starttools van [Snelle tools](./quick-tools). Nieuwe items zijn standaard aangevinkt
- **✕** verwijdert het item
- Is een lokaal bestand verplaatst of verwijderd, dan toont de kaart **Bestand niet gevonden**

### Sneltoetsen

Elk item kan een eigen sneltoets hebben:

1. Klap de kaart uit en klik op de sneltoetsknop
2. Druk op de gewenste toetscombinatie en laat die los. Druk op **Esc** om te annuleren
3. Klik op **Wissen** om de sneltoets te verwijderen

Wordt de combinatie al door een andere functie gebruikt, dan wordt deze niet opgeslagen en toont de knop een conflictmelding. De sneltoets werkt ook als Stream Toolkit niet het actieve venster is. Alle sneltoetsen staan ook op de pagina [Sneltoetsen](./hotkeys).

## Afbeelding

{/* TODO: 截圖 — 圖片分頁 */}

### Een afbeelding toevoegen

1. Klik op **Afbeelding toevoegen**
2. Kies een bestand (jpg, jpeg, png of gif). De bestandsnaam wordt de naam van de afbeelding

Als je de kaart uitklapt, zie je een miniatuur en deze instellingen:

- **Naam**: de naam van de afbeelding
- **Bestandspad**: klik op **Opnieuw kiezen** om een ander bestand te kiezen
- **Sneltoets**: druk één keer om de afbeelding te tonen, druk nogmaals om haar te verbergen
- **Positie en grootte instellen**: zie hieronder
- **Afbeelding verwijderen**: verwijdert de afbeelding

### Tonen en verbergen

Klik op de knop **○** op een kaart om de afbeelding in OBS te tonen. Deze verandert in **◉**. Klik er nogmaals op om de afbeelding te verbergen.

### Weergave-instellingen

**Meerdere afbeeldingen tegelijk tonen toestaan** staat standaard uit. Zolang dit uit staat, verbergt het tonen van een afbeelding de afbeelding die op dat moment wordt getoond. Zet het aan om meerdere afbeeldingen tegelijk te tonen.

### Positie en grootte instellen

- **X-positie** / **Y-positie**: in px. 0/0 is het midden van de bron. Positieve waarden verschuiven naar rechts/beneden, negatieve waarden naar links/boven
- **Breedte** / **Hoogte**: in % van de oorspronkelijke grootte. 100 = oorspronkelijke grootte. De knop 🔗 vergrendelt de beeldverhouding (standaard aan). Klik erop om vrij te schalen
- Terwijl de afbeelding wordt getoond, zie je wijzigingen direct in OBS
- **Opslaan** bewaart de wijzigingen, **Resetten** gaat terug naar de waarden van toen je het venster opende, **Annuleren** sluit zonder op te slaan

## Video

{/* TODO: 截圖 — 影片分頁 */}

Klik op **Video toevoegen** om een kaart toe te voegen en klap die daarna uit:

- **Videonaam**: de naam die op de kaart wordt getoond
- **Bron**: **YouTube** of **Lokaal**
  - **YouTube**: plak de videolink in **YouTube-URL**. Klik op **Verwerking testen** om deze te controleren. Als het lukt, staat er "Verwerkt, wordt automatisch toegepast bij afspelen"
  - **Lokaal**: klik op **Bestand kiezen** om een mp4-, webm- of ogg-bestand te kiezen. De limiet is 200MB; grotere bestanden betekenen meer vertraging. Gebruik voor een transparante achtergrond een WebM-video (VP9 Alpha)
- **In lus afspelen**: herhaalt de video
- **Afspeeltijd**: stel **Van** en **Tot** in (uren, minuten, seconden, ms). Laat **Tot** op 00:00 staan om tot het einde af te spelen
- **Volume**: 0–100%
- **Sneltoets**: druk erop om de video af te spelen. Druk nogmaals terwijl de video speelt om deze te stoppen
- **Positie en grootte instellen**: dezelfde velden voor positie en grootte als bij afbeeldingen. Klik op **Voorbeeld herhalen** om de video in een lus in OBS af te spelen terwijl je hem aanpast, en op **Voorbeeld stoppen** om te stoppen. Klik op **Opslaan** of **Annuleren** als je klaar bent

Klik op **▶** op een kaart om de video in OBS af te spelen. Klik op **■** om te stoppen.

## Geluid

{/* TODO: 截圖 — 音效分頁 */}

Klik op **Geluid toevoegen** om een kaart toe te voegen en klap die daarna uit:

- **Geluidsnaam**: de naam die op de kaart wordt getoond
- **Bron**: **YouTube-URL** of **Lokaal bestand**
  - **YouTube-URL**: plak de link en klik op **Verwerking testen** om deze te controleren
  - **Lokaal bestand**: klik op **Bestand kiezen** om een mp3-, wav-, ogg-, flac-, m4a-, aac- of opus-bestand te kiezen
- **Afspeeltijd**: stel **Van** en **Tot** in. Laat **Tot** op 00:00 staan om tot het einde af te spelen
- **Volume**: 0–100%
- **Sneltoets**: druk erop om het geluid af te spelen

Klik op **▶** op een kaart om het geluid in OBS af te spelen. Klik op **■** om te stoppen. Er speelt maar één geluid tegelijk. Als je een ander geluid start, stopt het huidige.

:::info Beperkingen van de proefversie
- Je kunt maar **1** afbeelding, **1** video en **1** geluid toevoegen
- De overlays voor afbeeldingen en video's tonen een watermerk

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::

## Veelgestelde vragen

**Q: Video's of geluiden worden afgespeeld, maar er is geen geluid op de stream.**
Zorg dat **Audio bedienen via OBS** is aangevinkt voor de bronnen `/videoboard` en `/soundboard`, en dat de bronnen niet zijn gedempt in de OBS-mixer.

**Q: Ik kan mijn videobestand niet kiezen.**
Alleen mp4-, webm- en ogg-bestanden tot 200MB kunnen worden gekozen. Is een bestand groter, dan toont een melding de limiet en wordt het bestand niet toegevoegd.
