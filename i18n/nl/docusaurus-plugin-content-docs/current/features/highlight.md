---
sidebar_position: 6
---

# Stream-hoogtepuntmarkering

Druk tijdens je stream op een sneltoets om vast te leggen "hoe ver in de stream" een hoogtepunt plaatsvond. Later kun je de lijst met tijden gebruiken om hoogtepunten in je VOD terug te vinden tijdens het monteren.

Markeringen worden opgeslagen in Stream Toolkit. Deze functie heeft geen OBS-overlay, dus je hoeft geen OBS-bron toe te voegen.

De pagina heeft twee tabbladen: **Instellingen** en **Highlightgeschiedenis**.

:::tip
Zet de schakelaar naast **Stream-hoogtepuntmarkering** in de linkerzijbalk aan. Zolang deze uit staat, voegen noch de sneltoets noch de knop **MARK** een markering toe.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Stap 1: Kies de bron

**Bron** bepaalt hoe de streamtijd wordt berekend:

| Bron | Hoe de tijd wordt berekend | Vereiste |
|--------|----------------------------|-------------|
| **Twitch** | Tijd sinds het begin van je huidige Twitch-stream | Twitch verbonden. Zie [Twitch-instellingen](../platforms/twitch) |
| **YouTube** | Tijd sinds het begin van je huidige YouTube-livestream | Aanmelden met Google. Zie [YouTube-instellingen](../platforms/youtube-settings) |
| **Handmatig uitlijnen** (standaard) | De waarde van de handmatige timer op deze pagina | Geen |

Een bolletje naast **Twitch** en **YouTube** geeft aan of het verbonden is. Zo niet, dan toont de optie **(niet verbonden)** of **(niet aangemeld bij Google)**.

Markeer je terwijl je niet live bent (of, bij **Handmatig uitlijnen**, terwijl de timer stilstaat), dan wordt de tijd vastgelegd als **Geen stream actief**. Met de bron **Twitch** kan het ongeveer 20 seconden duren voordat dit resultaat verschijnt, omdat Stream Toolkit het een paar keer opnieuw probeert voor het geval Twitch een net gestarte stream nog niet heeft geregistreerd.

### Handmatige timer

Als **Handmatig uitlijnen** is gekozen, verschijnt een **Handmatige timer**:

1. Vul de huidige streamtijd in als `HH:MM:SS` (bijvoorbeeld `00:00:00` op het moment dat je live gaat)
2. Klik op **Synchroon timen starten**. De timer telt vanaf die waarde op
3. Elke markering gebruikt de huidige waarde van de timer
4. Klik op **Stoppen** om de timer te stoppen

### Twitch-clip maken bij markeren

Deze optie verschijnt alleen als de bron **Twitch** is. Als deze aan staat, maakt elke markering ook een Twitch-clip.

- Je moet live zijn. De clip is ongeveer 30 seconden lang
- Clips worden opgeslagen in Creator Dashboard → Content → Clips
- Na het markeren toont de pagina **Twitch-clip gemaakt**, of waarom het mislukte: **Niet live**, **Ontbrekende toestemming; verbind Twitch opnieuw**, **Twitch niet verbonden** of **Mislukt; probeer opnieuw**

## Stap 2: Stel de sneltoets in

De standaardsneltoets is `Ctrl+Shift+M`. Zo wijzig je deze:

1. Klik op de sneltoetsknop
2. Druk op de gewenste toetscombinatie en laat die los. Druk op **Esc** om te annuleren
3. Klik op **Wissen** om de sneltoets te verwijderen

Wordt de combinatie al door een andere functie gebruikt, dan toont de knop **Deze sneltoets is al in gebruik** en wordt de sneltoets niet opgeslagen. De sneltoets werkt ook als Stream Toolkit niet het actieve venster is.

Je kunt ook op de knop **MARK** onder de sneltoets klikken. Die doet hetzelfde als de sneltoets. Het venster [Snelle tools](./quick-tools) heeft ook een knop **MARK**.

## Stap 3: Markeren tijdens de stream

1. (Optioneel) Typ een naam in **Naam van markering** voordat je markeert. Laat je dit leeg, dan worden markeringen automatisch genummerd (`精華標記_1`, `精華標記_2`, …)
2. Druk op de sneltoets of klik op **MARK**

De naam die je hebt getypt, wordt alleen voor de volgende markering gebruikt; daarna wordt het veld leeggemaakt.

## Highlightgeschiedenis

Het tabblad **Highlightgeschiedenis** toont alle markeringen, nieuwste eerst. Elke rij toont de streamtijd, de naam, de bron en de datum en tijd waarop je markeerde.

- **Kopiëren**: kopieert de markering als tekst, in de indeling `[datum] naam 🎬 streamtijd (bron)`
- **🗑️**: klik erop en daarna op **Verwijderen bevestigen** om de markering te verwijderen
- **Twitch-clip openen**: verschijnt als er voor deze markering een Twitch-clip is gemaakt. Opent de clip op Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Beperkingen van de proefversie
**Twitch-clip maken bij markeren** is niet beschikbaar. Het wordt getoond als "Beschikbaar in volledige versie".

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::
