---
sidebar_position: 16
---

# Weggeefacties

Kijkers doen mee door een trefwoord te typen in de Twitch- of YouTube-chat. Als de inschrijving sluit, trek je willekeurig winnaars, en de trekkingsanimatie wordt afgespeeld op de OBS-overlay.

## OBS-bron-URL

```
http://127.0.0.1:7272/lottery
```

Klik op **Kopiëren** naast **OBS-bron-URL** bovenaan de pagina en voeg de URL in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source). Weggeefacties speelt geen geluid af, dus je hoeft "Audio bedienen via OBS" niet aan te zetten.

:::tip
Zet ook de schakelaar naast **Weggeefacties** in de linkerzijbalk aan (**OBS-weergave inschakelen**). Zolang deze uit staat, blijft de overlay verborgen.
:::

De pagina heeft twee tabbladen: **Instellingen** en **Geschiedenis**.

## Instellingen

### Stemplatform

Klik op **Twitch** of **YouTube** om te kiezen via de chat van welk platform kijkers kunnen meedoen. Je kunt beide kiezen. Een platform dat niet verbonden is, toont **(niet verbonden)** voor Twitch of **Geen chat-URL verbonden** voor YouTube. Zie [Twitch-instellingen](../platforms/twitch) en [YouTube-instellingen](../platforms/youtube-settings) om te koppelen.

### Trefwoord voor trekking

Een chatbericht dat dit trefwoord bevat, schrijft de kijker in. Elke kijker kan maar één keer per weggeefactie meedoen. **Verzamelen starten** kan niet worden aangeklikt zolang het trefwoord leeg is.

### Trekkingsduur

Hoe lang de inschrijving openblijft, in seconden. Standaard is dit 300, het bereik is 10–3600.

### Max. deelnemers

De inschrijving sluit eerder zodra dit aantal mensen meedoet. Vul `0` in voor geen limiet.

### Optie verwijderen na trekking

Als dit aan staat, wordt een winnaar vóór de volgende trekking uit de deelnemers verwijderd, zodat die in deze weggeefactie niet nog eens kan worden getrokken.

### Hinttekst

De hint die tijdens de inschrijving op de overlay wordt getoond en kijkers het trefwoord en het aantal deelnemers laat zien. Stel het lettertype, de kleur en de grootte (px) in.

### Trekkingsanimatie

- **Snel wisselende ID's** (standaard): de namen van deelnemers zweven in beeld zolang de inschrijving open is, en wisselen tijdens de trekking snel af
  - **Lettertype verzamelscherm**: lettertype, lettergrootte en de kleuren van de naamlabels (maximaal 5)
  - **Lettertype trekkingsanimatie**: lettertype en lettergrootte van de wisselende namen tijdens de trekking
  - **Standaard herstellen**: zet deze instellingen terug
- **Rad-animatie**: deelnemers worden op een rad geplaatst dat draait om de winnaar te kiezen. Kies een kleurenschema: **Minimalistisch** of een eigen thema dat je hebt gemaakt in [Draairad](./turntable)

Zolang de inschrijving open is, kun je de platforms, het trefwoord, de duur, het max. aantal deelnemers, Optie verwijderen na trekking en het type animatie niet wijzigen.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Een weggeefactie houden

1. Klik op **Verzamelen starten**. Het paneel toont **Verzamelen…**, de resterende tijd en het aantal deelnemers
2. Zolang de inschrijving open is, kun je een naam typen in **Voer handmatig de naam van een deelnemer in** en op **Toevoegen** klikken (of op Enter drukken). Een naam die al op de lijst staat, toont "Deze ID staat al op de lijst"
3. Om de inschrijving te sluiten voordat de tijd om is, klik je op **Verzamelen beëindigen**. De inschrijving sluit ook als de tijd om is of **Max. deelnemers** is bereikt. Het paneel toont dan **Tijd is om!**
4. Klik op **Trekking starten**. De overlay speelt de animatie af, en als die klaar is, verschijnt de winnaar onder **Winnaar**
5. Klik op **Opnieuw trekken** om nog een winnaar te trekken

Klik in elke fase op **Trekking annuleren** om alle deelnemers en winnaars te wissen; de overlay gaat dan terug naar de wachtstand.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Geschiedenis

Het tabblad **Geschiedenis** bewaart per weggeefactie één record met de tijd, het trefwoord en het aantal deelnemers. Klap een record uit om de winnaars en de volledige deelnemerslijst te zien. Alleen de geschiedenis van de laatste 30 dagen wordt bewaard. Om een record te verwijderen, klik je op 🗑 en daarna op **Verwijderen bevestigen**.

:::info Beperkingen van de proefversie
De OBS-overlay toont een watermerk. Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::
