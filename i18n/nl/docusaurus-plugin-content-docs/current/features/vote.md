---
sidebar_position: 15
---

# Live peilingen

Houd een peiling op de stream. Kijkers stemmen door een optienummer te typen in de Twitch- of YouTube-chat, en de uitslag wordt live bijgewerkt op de OBS-overlay.

## OBS-bron-URL

```
http://127.0.0.1:7272/vote
```

Klik op **Kopiëren** naast **OBS-bron-URL** bovenaan de pagina en voeg de URL in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source). Live peilingen speelt geen geluid af, dus je hoeft "Audio bedienen via OBS" niet aan te zetten.

:::tip
Zet ook de schakelaar naast **Live peilingen** in de linkerzijbalk aan (**OBS-weergave inschakelen**). Zolang deze uit staat, blijft de overlay verborgen.
:::

De pagina heeft drie tabbladen: **Instellingen**, **Weergave** en **Geschiedenis**.

## Een peiling starten (tabblad Instellingen)

### Stemplatform

Klik op **Twitch** of **YouTube** om te kiezen via de chat van welk platform kan worden gestemd. Je kunt beide kiezen. Een platform dat niet verbonden is, toont **(niet verbonden)** voor Twitch of **Geen chat-URL verbonden** voor YouTube. Koppel het eerst:

- [Twitch-instellingen](../platforms/twitch)
- [YouTube-instellingen](../platforms/youtube-settings)

### Stemtitel

Optioneel. Bijvoorbeeld: "Welke game spelen we vanavond?"

### Stemopties (2–10 items)

- Vul minstens 2 opties in. Je kunt er maximaal 10 hebben
- **+ Optie toevoegen** voegt een rij toe en **×** verwijdert er een
- Met **Geschiedenis toepassen** kies je een van je 15 meest recente peilingen en vul je de titel en opties daarvan in

Terwijl je bewerkt, toont de OBS-overlay een voorbeeld van de titel en de opties.

### Stemduur

De duur van de peiling in seconden. Standaard is dit 60 en het minimum is 10.

### Starten / stoppen

- **Stemming starten**: vereist minstens 2 ingevulde opties en minstens één gekozen platform dat verbonden is
- **Stemming stoppen**: beëindigt de peiling eerder. Anders eindigt deze als de tijd om is

Zolang een peiling loopt, kun je de platforms, titel, opties of duur niet wijzigen.

{/* TODO: 截圖 — 投票設定分頁 */}

## Hoe kijkers stemmen

Zolang de peiling loopt, toont de overlay "Typ het optienummer in de chat om te stemmen (bijv.: 1)".

- Het hele bericht moet het optienummer zijn, zoals `1` of `1.`. Spaties worden genegeerd. Een bericht met andere tekst telt niet
- Elke kijker heeft één stem. Stuurt een kijker een ander nummer, dan gaat de stem naar de nieuwe optie, en telt de laatste stem voordat de tijd om is

## Live-uitslag

Tijdens de peiling verschijnt onder de instellingen **Live-uitslag** met de resterende tijd, het aantal stemmen en het percentage per optie, en het totale aantal stemmen. Na afloop van de peiling verandert dit in **Einduitslag**. Klik op **Details** om te zien wie op welke optie heeft gestemd, gegroepeerd per Twitch en YouTube.

## Weergave

Het tabblad **Weergave** heeft bovenaan een **Voorbeeld**. De kleurkiezer ernaast wijzigt alleen de achtergrond van het voorbeeld, niet de OBS-overlay.

- **Lettertype**: stel lettertype, kleur en **Grootte** (px) in voor **Titel**, **Tip**, **Optie**, **Afteltijd** en **Aantal stemmen**
- **Kleur voortgangsbalk**: maximaal 5 kleuren, op volgorde gebruikt voor de balken van de opties. Elke kleur kan **Effen** of **Verloop** zijn. Verlopen hebben ook een **Hoek**
- **Achtergrondkleur**: de achtergrond van de peilingkaart
- **Standaard herstellen**: zet de standaardweergave terug. Is er een thema toegepast, dan wordt de weergave van het thema teruggezet

Onder **Aangepaste CSS** kun je je eigen stijlen schrijven. Zie [Thema's](./themes) om stijlen te delen of te downloaden.

{/* TODO: 截圖 — 投票外觀分頁 */}

## Geschiedenis

Het tabblad **Geschiedenis** toont per peiling de titel, de tijd, het aantal opties en het totale aantal stemmen. Klap een peiling uit om de uitslag, het aantal stemmen per platform en **Details** te zien. Alleen de geschiedenis van de laatste 30 dagen wordt bewaard. Om een record te verwijderen, klik je op 🗑 en daarna op **Verwijderen bevestigen**.

:::info Beperkingen van de proefversie
- **Aangepaste CSS** is alleen beschikbaar in de volledige versie
- De OBS-overlay toont een watermerk

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::
