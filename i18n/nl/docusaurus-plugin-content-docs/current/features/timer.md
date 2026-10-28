---
sidebar_position: 11
---

# Timer

Toon afteltimers of stopwatches op de stream. Een afteltimer kan tijd erbij krijgen of verliezen via knoppen waarop je klikt, of automatisch via Twitch-volgers, -abonnementen, -Bits en donaties.

De pagina heeft twee tabbladen: **Instellingen** en **Timer maken**. Maak eerst een timer en bedien die daarna vanuit **Instellingen**.

## Stap 1: Maak een timer

1. Open **Timer** in de linkerzijbalk en ga naar het tabblad **Timer maken**
2. Klik onder **Mijn timers** op **Toevoegen**. Er wordt een nieuwe afteltimer gemaakt met een begintijd van 10 minuten en drie tijdopties (+30 sec, +1 min, +5 min)
3. Klik op een timerkaart om die te bewerken. Klik op de **✕** op een kaart om die timer te verwijderen

Het **Voorbeeld** toont hoe de gekozen timer eruitziet. Gebruik het kleurvak ernaast om de achtergrond van het voorbeeld te wijzigen.

Wissel onder het voorbeeld tussen **Timerinstellingen** en **Weergave**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Stap 2: Timerinstellingen

### Timermodus

- **Aftellen**: telt af vanaf de begintijd
- **Stopwatch**: telt op vanaf 0 en kan rondetijden vastleggen. De stopwatchmodus heeft geen begintijd, waarschuwingstijd, eindgeluid of tijdopties

### Naam

De naam die wordt getoond in de timerlijst, de keuzelijsten en Snelle tools.

### Begintijd

De starttijd van het aftellen, in uren, minuten en seconden. Het totaal in seconden staat ernaast.

### Waarschuwingstijd

Als de resterende tijd deze waarde bereikt, krijgt de timertekst de kleur **Waarschuwing** die is ingesteld onder **Weergave**. Laat dit op 0 staan voor geen waarschuwing.

### Geluid bij einde aftellen

Het geluid dat wordt afgespeeld als het aftellen 0 bereikt. Kies **Geen** of een van de ingebouwde geluiden (**Belletje**, **Munt**, **Bel**, **Plop**, **Fanfare**). Klik op **▶** om het te testen. Om je eigen bestand te gebruiken, klik je op **Geluid kiezen** en kies je er een uit het assetbeheer.

Het geluid wordt afgespeeld door de browserbron in OBS, dus zet **Audio bedienen via OBS** aan voor de timerbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source).

### Tijdopties

Tijdopties zijn de knoppen om tijd toe te voegen of af te trekken bij een afteltimer. Elke timer kan er maximaal 20 hebben.

Om er een toe te voegen, vul je het formulier **Tijdoptie toevoegen** in:

1. **Triggerbron**: kies wat deze optie automatisch toepast
   - **Handmatig**: wordt alleen toegepast als je op de knop klikt
   - **Volgen**: wordt toegepast bij elke nieuwe Twitch-volger
   - **Twitch Bits**: wordt toegepast bij cheers met Bits
   - **Nieuw Twitch-abonnement**: wordt toegepast bij Twitch-abonnementen
   - **Donatie**: wordt toegepast bij donaties. Kies met **Donatieplatform** welke van **YouTube**, **O'Pay**, **ECPay** en **PayPal** meetellen
2. Stel voor **Twitch Bits** en **Donatie** ook in:
   - **Triggerdrempel**: het aantal Bits of het donatiebedrag voor één stap
   - **Omrekenmethode**: **Trigger bij hele veelvouden** of **Proportioneel omrekenen** (zie het voorbeeld hieronder)
3. **Tijd toevoegen**: kies **＋** of **－** en stel daarna de uren, minuten en seconden in
4. Klik op **Toevoegen**

Om een optie te wijzigen, klik je op **Bewerken**, pas je het formulier aan en klik je op **Opslaan** (of **Annuleren**). Klik op **✕** om de optie te verwijderen. Opties met een automatische trigger zijn gemarkeerd met 🔗 en de naam van de trigger.

**Voorbeeld van omrekenen**: Triggerdrempel 100 bits, Tijd toevoegen +1 min, en een kijker cheert 250 bits:

- **Trigger bij hele veelvouden**: alleen volledige veelvouden van de drempel tellen → 2 × 1 min = **+2 min**
- **Proportioneel omrekenen**: 250 ÷ 100 × 1 min → **+2 min 30 sec**

Bij donaties wordt het bedrag eerst omgerekend naar de valuta die is gekozen in de Instellingen van de app, voordat het met de drempel wordt vergeleken.

:::note
- Automatische triggers werken alleen op afteltimers
- Tijdopties met een automatische trigger verschijnen nog steeds als knoppen in het bedieningspaneel, dus je kunt er ook zelf op klikken
- **Nieuw Twitch-abonnement** wordt één keer per abonnementsgebeurtenis toegepast: een cadeau van meerdere abonnementen past het één keer toe. Herabonnementen passen het alleen toe als **Herabonnementen meetellen** aan staat in [Twitch-doelbalk](./goal)
:::

### Bedieningssneltoetsen

Stel sneltoetsen in voor deze timer:

- **Starten/pauzeren**
- **Sneltoets voor ronde** (alleen stopwatch)
- **Sneltoets voor resetten**

Zie ook [Sneltoetsen](./hotkeys).

## Stap 3: Weergave

| Instelling | Beschrijving |
|---------|-------------|
| **Lettertype** | Lettertype van de tijdtekst |
| **Tekengrootte** | 12–300 px |
| **Tekstkleur** | **Normaal**: **Effen** of **Verloop** (twee kleuren en een **Hoek**). **Waarschuwing** (alleen aftellen): de kleur die wordt gebruikt zodra de waarschuwingstijd is bereikt |
| **Achtergrondkleur** | Achtergrond achter de tijd |
| **Rand** | Kleur, **Transparantie** en **Dikte** (0–20 px) van de omlijning |
| **Schaduw** | Schaduwkleur, **Transparantie**, **Vervaging** en X/Y-verschuiving |

## Stap 4: Kies een weergavemodus en voeg de OBS-bron toe

Ga naar het tabblad **Instellingen**. Kies onder **Bedieningspaneel** een **Weergavemodus**:

| Modus | Beschrijving | OBS-bron-URL |
|------|-------------|----------------|
| **Eén timer** | OBS toont alleen de gekozen timer. Wissel van timer met de keuzelijst **Huidige timer** | `http://127.0.0.1:7272/timer` |
| **Meerdere timers** | Elke timer heeft een eigen URL en kan apart aan OBS worden toegevoegd | `http://127.0.0.1:7272/timer/<timer ID>` |

Kies in de modus **Meerdere timers** timers bij **Aan weergave toevoegen**. Elke toegevoegde timer krijgt een eigen kaart met de bijbehorende **OBS-bron-URL**. Klik op **Kopiëren** om die te kopiëren. Klik op **✕** op een kaart om die uit de weergave te verwijderen.

Voeg de gekopieerde URL in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source).

:::tip
Zet ook de schakelaar naast **Timer** in de linkerzijbalk aan (**OBS-weergave inschakelen**). Zolang deze uit staat, is de timer in OBS verborgen.
:::

## Stap 5: Bedien de timer

Elke timerkaart op het tabblad **Instellingen** heeft:

- **Starten** / **Pauzeren**: bij een stopwatch heet de pauzeknop **Stoppen**. Een afteltimer die 0 heeft bereikt, kan pas weer worden gestart als je hem reset of tijd toevoegt
- **Ronde** (alleen stopwatch): legt tijdens het lopen een rondetijd vast. Rondetijden worden onder de kaart getoond met de tijd en het verschil met de vorige ronde
- **Resetten**: stopt de timer en zet hem terug op de begintijd (0 bij een stopwatch), en wist de rondetijden
- **Tijd toevoegen** (alleen aftellen): één knop voor elke tijdoptie

De lopende tijd wordt alleen in de OBS-overlay getoond, niet op de instellingenpagina. Je kunt timers ook bedienen vanuit het venster [Snelle tools](./quick-tools), dat ook de huidige tijd toont.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Beperkingen van de proefversie
Je kunt maar **1** timer maken. Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::
