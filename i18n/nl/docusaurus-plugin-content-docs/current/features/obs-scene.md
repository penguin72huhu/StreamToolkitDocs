---
sidebar_position: 2
---

# OBS-scènebediening

Met **OBS-scènebediening** wissel je scènes en toon/verberg je bronnen in je streamingsoftware via globale sneltoetsen of vanuit [Snelle tools](./quick-tools). Het werkt met **OBS Studio**, **Streamlabs** en **Meld Studio**.

Deze functie heeft geen overlay, dus er hoeft niets als browserbron in OBS te worden toegevoegd.

:::info
Sneltoetsen werken alleen zolang de schakelaar **OBS-scènebediening** in de zijbalk aan staat. Ze werken ook als het venster van Stream Toolkit is geminimaliseerd naar het systeemvak.
:::

De instellingenpagina heeft twee tabbladen: **Verbinding** en **Sneltoetsen**.

## Tabblad Verbinding

### Stap 1: Kies je software

Kies onder **Software** voor **OBS Studio**, **Streamlabs** of **Meld Studio**. Dit kan alleen worden gewijzigd als er geen verbinding is.

Elke software heeft eigen sneltoetsen en een eigen scènelijst, dus als je van software wisselt, zie je de instellingen van die software.

### Stap 2: Bereid de software voor

#### OBS Studio

1. Open in OBS **Tools → WebSocket Server Settings**
2. Vink **Enable WebSocket server** aan
3. Klik op **Show Connect Info** om het wachtwoord te zien
4. Vul in Stream Toolkit **Host** (standaard `localhost`), **Poort** (standaard `4455`) en **Wachtwoord** in

#### Streamlabs / Meld Studio

Er is geen voorbereiding nodig — zorg alleen dat het programma draait.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Stap 3: Verbinden

Klik op **Verbinden**. **Status** verandert in **Verbonden** (voor OBS en Meld wordt ook het versienummer getoond). Klik op **Verbinding verbreken** om de verbinding te verbreken.

**Verbinden bij opstarten** (standaard aan): maakt automatisch verbinding als Stream Toolkit opstart en als je de functieschakelaar aanzet. Als je de functieschakelaar uitzet, wordt de verbinding verbroken.

### Scènes

Het gedeelte **Scènes** toont je scènes en hoeveel bronnen elke scène heeft; de huidige scène is gemarkeerd. Klik op **Vernieuwen** om de nieuwste lijst op te halen nadat je scènes in je software hebt gewijzigd.

Als er geen verbinding is, wordt de laatst opgehaalde lijst nog steeds getoond.

## Tabblad Sneltoetsen

Om een sneltoets in te stellen klik je op **Klik om sneltoets in te stellen** en druk je daarna op de toetscombinatie. Druk op `Esc` om te annuleren. Wordt de combinatie al door een andere functie gebruikt, dan wordt **Sneltoetsconflict** getoond en wordt deze niet opgeslagen. Klik op **✕** naast een sneltoets om die te wissen.

### Scène wisselen

1. Klik op **Toevoegen**
2. Stel een sneltoets in
3. Kies de scène waarnaar moet worden gewisseld

Klik op **✕** aan het eind van de rij om deze te verwijderen.

### Bronnen schakelen

Eén sneltoets kan meerdere bronnen in dezelfde scène tegelijk bedienen.

1. Klik op **Toevoegen**
2. Stel een sneltoets in
3. Vul een **Naam** in (optioneel — wordt gebruikt als knoplabel in Snelle tools; is het leeg, dan wordt de scènenaam gebruikt)
4. Kies de scène waartoe de bronnen behoren
5. Klik op **Bron toevoegen**, kies een bron en kies **Tonen**, **Verbergen** of **Schakelen** (standaard **Schakelen**)
6. Herhaal stap 5 voor meer bronnen

Als je de scène van een item wijzigt, wordt de bronnenlijst ervan gewist.

:::tip
Een scène of bron die niet meer in je software bestaat, wordt rood gemarkeerd. Kies deze opnieuw in de keuzelijst.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Gebruiken vanuit Snelle tools

Als de functie aan staat en er minstens één sneltoetsitem bestaat, toont [Snelle tools](./quick-tools) een kaart **OBS-scènebediening** met een knop voor elk item. Klikken op een knop doet hetzelfde als op de bijbehorende sneltoets drukken.

## Foutmeldingen

Bij het gebruik van een sneltoets of knop kunnen deze meldingen verschijnen:

| Melding | Betekenis |
|---------|---------|
| **Niet verbonden met OBS** | Geen verbinding — ga naar het tabblad **Verbinding** en klik op **Verbinden** |
| **Scène “…” niet gevonden** | De scène is in je software hernoemd of verwijderd |
| **Bronnen niet gevonden: …** | Die bronnen bestaan niet meer in de scène |

## Beperkingen van de proefversie

:::info
De proefversie staat in totaal **1** sneltoetsitem toe (Scène wisselen en Bronnen schakelen samen). Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::

## Veelgestelde vragen

**Q: Er stond dat OBS niet bereikbaar was, en het werd niet opnieuw geprobeerd nadat ik OBS had geopend.**
Als de allereerste verbindingspoging mislukt (bijvoorbeeld omdat OBS nog niet draaide), blijft Stream Toolkit het niet opnieuw proberen. Open je streamingsoftware en klik dan op **Verbinden**. Is er eenmaal verbinding geweest, dan wordt automatisch opnieuw verbonden als de verbinding wegvalt.
