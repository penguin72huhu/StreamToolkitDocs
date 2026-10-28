---
sidebar_position: 17
---

# Muziekverzoeken

Kijkers vragen YouTube-nummers aan met een chatcommando, en de nummers worden na elkaar afgespeeld in OBS. Je kunt ook zelf nummers toevoegen en een standaardafspeellijst instellen die speelt als er geen verzoeken zijn.

## OBS-bron-URL

```
http://127.0.0.1:7272/song-request
```

Klik op **Kopiëren** naast **OBS-bron-URL** bovenaan de pagina en voeg de URL in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source).

:::warning
Muziekverzoeken spelen geluid af. Vink in de eigenschappen van de browserbron **Audio bedienen via OBS** aan, anders komt de muziek niet in je stream terecht.
:::

:::tip
Zet ook de schakelaar naast **Muziekverzoeken** in het linkermenu aan. Chatcommando's worden alleen verwerkt zolang de schakelaar aan staat.
:::

De pagina heeft twee tabbladen: **Instellingen** en **Afspeellijst**.

## Tabblad Instellingen

### Platform

Elk platform heeft een eigen kaart:

- **Nummers aanvragen op dit platform toestaan**: laat kijkers in die chat nummers aanvragen
- **Chatbot-antwoorden inschakelen** (alleen Twitch, standaard aan): antwoordt in de Twitch-chat met het resultaat van elk commando, via je gekoppelde Twitch-account. Alleen zichtbaar als Twitch is ingeschakeld en verbonden

Een platform dat niet verbonden is, toont **(niet verbonden)** (Twitch) of **Geen chat-URL verbonden** (YouTube). Koppel het eerst:

- [Twitch-instellingen](../platforms/twitch)
- [YouTube-instellingen](../platforms/youtube-settings)

### Chatcommando's

| Veld | Standaard |
|------|--------|
| **Commandoprefix** | `!` (kies uit `! @ # $ % & ~`) |
| **Aanvraagcommando** | `sr` |
| **Aanvraag verwijderen** | `remove` |
| **Aanvraaglijst bekijken** | `queue` |
| **Huidig nummer opvragen** | `song` |
| **Wachttijd tussen aanvragen** | 3000 ms |

De wachttijd geldt per kijker: na een geslaagde aanvraag moet dezelfde kijker zo lang wachten voordat hij opnieuw iets kan aanvragen.

### Instellingen

- **Video op scherm tonen** (standaard aan): als dit uit staat, is de video in OBS verborgen maar wordt de audio nog afgespeeld
- **Maximale lijstlengte** (1–100, standaard 20): het maximale aantal aangevraagde nummers in de lijst. Nummers uit de standaardafspeellijst tellen niet mee
- **Aanvraagmelding tonen** (standaard aan): toont een meldingskaart in OBS als een kijker een nummer aanvraagt, verwijdert of als een aanvraag mislukt. Als dit aan staat, kun je instellen:
  - **X** / **Y**: positie van de melding vanaf de linkerbovenhoek (px, standaard 16 / 16)
  - **Meldingsschaal**: vergrotingsfactor (standaard 1.0)
  - **Weergave van melding testen**: stuurt een testmelding naar OBS

Elke melding blijft 5 seconden staan; er worden maximaal 3 tegelijk getoond.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Hoe kijkers het gebruiken

Met de standaardinstellingen:

| Commando | Wat het doet |
|------|------|
| `!sr <YouTube-link>` | Vraagt die video aan |
| `!sr <zoekwoorden>` | Zoekt op YouTube en vraagt het eerste resultaat aan |
| `!remove` | Verwijdert de meest recente aanvraag van de kijker (niet het nummer dat speelt) |
| `!queue` | Antwoordt met de volgende 3 aangevraagde nummers |
| `!song` | Antwoordt met het nummer dat speelt |

- Geaccepteerde links: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…`, of een video-ID van 11 tekens
- Links naar afspeellijsten worden niet geaccepteerd
- Een aanvraag mislukt als de lijst de **Maximale lijstlengte** heeft bereikt
- Nieuwe aanvragen komen achter de aanvragen van andere kijkers in de rij, vóór de nummers uit de standaardafspeellijst
- `!queue` en `!song` werken alleen in de Twitch-chat met **Chatbot-antwoorden inschakelen** aan

## Tabblad Afspeellijst

### Afspeelbediening

De bovenste regel toont wie het huidige nummer heeft aangevraagd en de titel ervan. Knoppen:

- **Afspelen** / **Pauzeren**: als er niets speelt, begint het bij het eerste nummer in de lijst
- **Stoppen**: stopt het afspelen
- **Volgende**: springt naar het volgende nummer

Terwijl een nummer speelt, verschijnt er een voortgangsbalk; sleep die om naar een positie te springen. Als een nummer is afgelopen, begint het volgende automatisch.

:::note
Er wordt niets automatisch afgespeeld als de app opstart. Druk op **Afspelen** om te beginnen.
:::

### Standaardafspeellijst

Plak de URL van een YouTube-afspeellijst en kies **In lus afspelen** of **Willekeurig afspelen**. Als de lijst leeg raakt, wordt automatisch een nummer uit deze afspeellijst toegevoegd en afgespeeld. Deze nummers worden in de lijst getoond als **Standaardlijst**.

De standaardafspeellijst wordt via je YouTube-account gelezen, dus je moet je eerst aanmelden met Google in [YouTube-instellingen](../platforms/youtube-settings).

### Handmatig nummer aanvragen

Plak de URL van een YouTube-video en klik op **Aan lijst toevoegen** (of druk op Enter). Handmatige aanvragen ondersteunen geen zoekwoorden.

### Lijst

**Lijst (n)** toont alle nummers: platform, aanvrager, titel en video-ID (klik om te openen op YouTube). Klik op **Verwijderen** om een nummer te verwijderen; als je het nummer verwijdert dat speelt, wordt naar het volgende gesprongen. **Wissen** maakt de hele lijst leeg.

{/* TODO: 截圖 — 播放清單分頁 */}

## Veelgestelde vragen

**Q: Kijkers typen het commando, maar er gebeurt niets?**
Controleer of:
- De schakelaar **Muziekverzoeken** in het linkermenu aan staat
- **Nummers aanvragen op dit platform toestaan** is aangevinkt voor dat platform
- Voor Twitch: de Twitch-chat wordt gelezen door de functie [Chat](./chat). Heb je Twitch uitgezet op de chatpagina (en gebruikt de [Chatbot](./chat-bot) Twitch niet), dan worden Twitch-commando's niet ontvangen

**Q: De standaardafspeellijst speelt niet af?**
Zorg dat je bent aangemeld met Google in Instellingen en dat de URL een link naar een afspeellijst is (deze bevat `list=`).

:::info Beperkingen van de proefversie
- Aanvragen van kijkers via de chat zijn alleen beschikbaar in de volledige versie. In de proefversie mislukt een aanvraag uit de chat met de melding "Nummeraanvragen zijn niet beschikbaar in de proefversie". **Handmatig nummer aanvragen** en de standaardafspeellijst werken wel
- De OBS-overlay toont een watermerk

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::
