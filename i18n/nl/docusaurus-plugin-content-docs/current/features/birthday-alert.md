---
sidebar_position: 8.2
---

# Verjaardagen van kijkers

Zet de verjaardagen van je kijkers in een lijst. Als een kijker uit de lijst tijdens je stream chat op of kort na zijn of haar verjaardag, verschijnt er een verjaardagsmelding op de stream. Elke kijker krijgt één melding per verjaardag.

## OBS-bron-URL

```
http://127.0.0.1:7272/birthday-alert
```

Kopieer de URL bovenaan de pagina **Instellingen voor Verjaardagen van kijkers** en voeg deze in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source).

:::warning
Meldingen spelen een geluid af. Vink **Audio bedienen via OBS** aan in de eigenschappen van de browserbron, anders is het geluid niet te horen op de stream.
:::

Zet de schakelaar naast **Verjaardagen van kijkers** in de linkerzijbalk aan. Alleen als deze aan staat, maakt de app verbinding met de chat en controleert hij verjaardagen. De knoppen **Testmelding** en **Opnieuw** werken ook als de schakelaar uit staat.

De pagina heeft drie tabbladen: **Instellingen**, **Kijkers** en **Weergave**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Hoe het werkt

- Een kijker uit de lijst die chat vanaf zijn verjaardag tot het ingestelde aantal dagen daarna, krijgt een melding. Vóór de verjaardag verschijnt er niets.
- Elke kijker krijgt één melding per verjaardag. Een verjaardag op 12/28 die op 1/2 wordt gemeld, telt nog als de verjaardag van het vorige jaar.
- Meldingen verschijnen alleen terwijl het platform waarop de kijker chatte live is. Ben je offline, of kan de app nog niet bepalen of je live bent, dan wordt de melding door chatten niet geactiveerd of geregistreerd; hij verschijnt de volgende keer dat de kijker tijdens een stream chat.
- Chatgeschiedenis die wordt geladen wanneer de YouTube-chat verbinding maakt, telt niet mee. Een herstart van de app meldt dus geen mensen die chatten terwijl de app gesloten was.
- Een verjaardag op 2/29 valt in niet-schrikkeljaren op 2/28.

## Tabblad Instellingen

### Chatverbinding

Wordt getoond als de functie aan staat. Per platform zie je of de chat verbonden is:

- **Twitch**: als er geen kanaal is ingesteld, toont de rij **Geen Twitch-kanaal ingesteld — koppel eerst Twitch** met **Naar instellingen**. Koppel eerst Twitch: [Twitch-instellingen](../platforms/twitch).
- **YouTube**: als de chat niet verbonden is, toont de rij **Automatisch verbinden** en **Handmatig invoeren** (brengt je naar het veld voor de chat-URL in Instellingen). Gebruik je automatisch verbinden en ben je aangemeld met Google, dan staat er **Als er na de start van je stream geen verbinding is, klik dan op Verbinden op de chatpagina**. Zie [YouTube-instellingen](../platforms/youtube-settings) en [Chat](./chat).

Zodra een platform verbonden is, staat er ook **Live**, **Offline** of **Onbekend of je live bent**. Meldingen verschijnen alleen bij **Live**.

### Instellingen

| Veld | Beschrijving |
|-------|-------------|
| **Dagen na de verjaardag die nog tellen** | 0–30. Standaard: 7. 0 = alleen de verjaardag zelf. |
| **Weergaveduur** | Hoe lang elke melding in beeld blijft, in seconden (1–60). Standaard: 6. |

### Meldingen testen

Klik op **Testmelding** om een voorbeeldmelding naar OBS te sturen, met een testkijker en de datum van vandaag. Deze is alleen zichtbaar in OBS, wordt nooit opgeslagen en werkt ook als de schakelaar in de linkerzijbalk uit staat. De knop verandert kort in **Verzonden**.

## Tabblad Kijkers

### Een kijker toevoegen

Er zijn twee manieren om een kijker toe te voegen:

- **+ Toevoegen uit recente chatters**: kies iemand die onlangs heeft gechat. Het formulier opent met hun naam als notitie, hun account al gekoppeld en de datum van vandaag als verjaardag.
- **+ Toevoegen op naam**: typ de accountnaam zelf.

**Recente chatters** toont kijkers die chatten terwijl de chat verbonden was (maximaal 200, 30 dagen bewaard). Klik op **Vernieuwen** om de lijst bij te werken. Kijkers die al in de lijst staan, tonen **Toegevoegd** en kunnen niet opnieuw worden gekozen. Bij een lange lijst verschijnt een zoekvak.

Vul het formulier in:

1. **Notitie / bijnaam**: de naam waaronder je hen kent, bijv. `Alex`. Optioneel.
2. **Verjaardag**: maand en dag (geen jaar).
3. **Accounts**: minstens één account. Eén kijker kan meerdere accounts hebben, bijv. zowel Twitch als YouTube.
   - **＋ Account typen**: kies **Twitch** of **YouTube** en typ de naam. Gebruik voor Twitch de loginnaam of weergavenaam; voor YouTube de @handle of kanaalnaam.
   - **＋ Uit recente chatters**: voeg een account toe dat al gekoppeld is.
   - **✕** verwijdert een account.
4. Klik op **Opslaan** (of druk op Enter). **Annuleren** (of Esc) sluit het formulier.

### Getypte namen en koppelen

Een getypte naam wordt aan het account gekoppeld de eerste keer dat die kijker chat. Bij het vergelijken worden hoofdletters/kleine letters en een voorloop-`@` genegeerd. Namen kunnen door meerdere mensen worden gebruikt, dus kiezen uit recente chatters is veiliger.

Typ voor YouTube de @handle: tenzij **Kijkersnamen tonen in plaats van @handles** op de chatpagina aan staat, komt een kanaalnaam mogelijk nooit overeen.

Elk account in de lijst toont:

- **Gekoppeld: [naam]**: het account is gekoppeld.
- **Wacht tot “[naam]” chat**: een getypte naam die nog niet gekoppeld is.
- **Net gekoppeld**: de app heeft dit account automatisch gekoppeld toen de kijker chatte. Controleer of het echt de juiste persoon is en klik dan op **✓ Klopt**, of klik op **Ontkoppelen** als dat niet zo is.
- **Dit account staat al bij “[naam]”**: de getypte naam kwam overeen met een account dat bij een andere kijker in de lijst hoort. Eén account kan maar bij één kijker horen, dus wijzig hier de naam of verwijder een van de twee.

**Ontkoppelen** opent een vak onder het account. Na het ontkoppelen wordt in plaats daarvan de naam in het vak gebruikt om te vergelijken (je kunt die wijzigen), en het account wordt opnieuw gekoppeld wanneer die kijker weer chat.

### De lijst

Kijkers bij wie de verjaardagsmelding aan de beurt is, staan bovenaan, gevolgd door de eerstvolgende verjaardagen. Bij meer dan 5 kijkers verschijnt een zoekvak. Bij elke kijker staat:

- **Wacht op chat**: het is hun verjaardagsperiode; de melding verschijnt zodra ze chatten.
- **🎂 Getoond op [datum]**: de melding voor deze verjaardag is al getoond.
- **▶ Opnieuw**: toon de melding van deze kijker opnieuw in OBS. Werkt altijd en wordt nooit opgeslagen.
- **Bewerken**: wijzig de notitie, verjaardag of accounts. Als je de verjaardag wijzigt, kan de melding voor de nieuwe datum opnieuw verschijnen.
- **Verwijderen**: klik op **Verwijderen** en daarna op **Verwijderen bevestigen**.

## Tabblad Weergave

### Voorbeeld

Het voorbeeld gebruikt dezelfde pagina als de OBS-bron. Gebruik de kleurkiezer naast **Voorbeeld** om de achtergrond van het voorbeeld te wijzigen en klik op **▶ Animatie opnieuw** om de meldingsanimatie opnieuw af te spelen.

### Uniforme stijl / Per platform apart

- **Uniforme stijl**: Twitch en YouTube gebruiken dezelfde meldingsstijl.
- **Per platform apart**: elk platform heeft een eigen stijl. Kies met de knoppen eronder **Twitch** of **YouTube** en bewerk de instellingen. Bij de eerste keer overschakelen nemen platforms die je nog niet hebt aangepast de huidige uniforme stijl over, elk met een eigen kleur voor de aftelbalk.

**Standaard herstellen** zet de stijl die je bewerkt terug naar de standaardstijl.

### Afbeelding

- **Afbeelding kiezen**: kies een afbeelding uit het assetbeheer. Zonder afbeelding wordt een taart-emoji getoond. **Wissen** verwijdert de afbeelding.
- **Afbeeldingsgrootte**: 1–400 px.
- **Afbeeldingspositie**: **Links**, **Rechts**, **Boven** of **Onder**.

### Geluid

Kies een ingebouwd geluid: **Geen**, **Belletje** (standaard), **Munt**, **Bel**, **Plop**, **Fanfare**. Klik op **▶** om te luisteren. Klik op **Geluid kiezen** om je eigen geluidsbestand uit het assetbeheer te gebruiken.

### Aangepaste tekst

Schrijf de regel die op de melding wordt getoond. Laat het leeg om de standaardtekst te gebruiken: `Happy birthday, {name}!` Je kunt gebruiken:

| Plaatshouder | Vervangen door |
|-------------|---------------|
| `{name}` | De naam van de kijker in de chat |
| `{label}` | Je notitie / bijnaam (de chatnaam als de notitie leeg is) |
| `{birthday}` | De verjaardag, bijv. `10/20` |
| `{MM}` `{DD}` | Maand en dag met twee cijfers, om je eigen notatie te maken, bijv. `{DD}/{MM}` |
| `{date}` | De verjaardag in de taal van de overlay |
| `{platform}` | De naam van het platform |

### Tekst en kleur

- **Tekst**: stel lettertype, grootte en kleur in voor **Aangepaste tekst** en **Naam van kijker**.
- **Kleur**: **Achtergrond**, **Schaduw** en **Aftelbalk**.

### Aangepaste CSS

Klap **Aangepaste CSS** uit om de CSS te bewerken van de stijl die je bewerkt (uniform of het gekozen platform). **Standaard herstellen** zet de sjabloon-CSS terug en **Assets beheren** opent het assetbeheer. Hier kun je ook Steam Workshop-thema's toepassen. Zolang een thema is toegepast, is de CSS alleen-lezen. Zie [Thema's](./themes).

:::info Proefversie
- Maximaal 3 kijkers in de lijst. Bevat de lijst er meer (bijv. uit een opslagbestand van de volledige versie), dan worden de extra kijkers vergrendeld 🔒 getoond: ze activeren nooit een melding en kunnen niet worden bewerkt of opnieuw afgespeeld.
- Aangepaste CSS is alleen beschikbaar in de volledige versie.
- De melding toont een watermerk in OBS.

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::

## Veelgestelde vragen

**Q: Geen geluid op de stream?**
Controleer of **Audio bedienen via OBS** is aangevinkt in de eigenschappen van de browserbron en of de bron niet is gedempt in de OBS-mixer. Controleer ook of **Geluid** niet op **Geen** staat.

**Q: Een kijker chatte op zijn verjaardag, maar er verscheen geen melding.**
Controleer of de schakelaar in de linkerzijbalk aan staat, of de **Chatverbinding** op het tabblad **Instellingen** **Live** toont voor dat platform, en of het account in de lijst **Gekoppeld** toont of de getypte naam overeenkomt met de chatnaam. Werd de melding getoond terwijl OBS niet open was, gebruik dan **▶ Opnieuw**.

**Q: Ik heb de OBS-bron later toegevoegd. Worden eerdere meldingen opnieuw afgespeeld?**
Nee. Een nieuw geopende bron toont alleen meldingen die binnenkomen nadat hij verbinding heeft gemaakt. Gebruik **▶ Opnieuw** op het tabblad **Kijkers** om er een opnieuw te tonen.
