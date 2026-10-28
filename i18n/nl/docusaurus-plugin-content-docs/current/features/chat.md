---
sidebar_position: 3
---

# Chat

**Chat** toont je Twitch- en YouTube-chat samen in één overlay, met optionele automatische vertaling. De chat kan ook worden getoond in een transparant bureaubladvenster dat alleen jij kunt zien.

## OBS-bron-URL

```
http://127.0.0.1:7272/chat
```

Voeg deze toe als browserbron: [Bronnen toevoegen in OBS](../getting-started/obs-source). Deze overlay heeft geen geluid.

:::info
Berichten worden alleen naar de overlay gestuurd zolang de schakelaar **Chat** in de zijbalk aan staat. De chat wordt ook ontvangen als deze uit staat, dus functies die de chat lezen (peilingen, weggeefacties, muziekverzoeken enz.) blijven werken.
:::

## Voordat je begint

Koppel de platforms die je wilt tonen:

- [Twitch-instellingen](../platforms/twitch)
- [YouTube-instellingen](../platforms/youtube-settings)

De instellingenpagina heeft twee tabbladen: **Instellingen** en **Weergave**.

## Tabblad Instellingen

### Platforms

- **Platformpictogram tonen (Twitch / YouTube)** — toont het pictogram <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> vóór elk bericht

Elk platform heeft een eigen kaart. Het bolletje naast de platformnaam licht groen op als het verbonden en ingeschakeld is; **(niet verbonden)** wordt getoond als Twitch niet verbonden is, en **Geen chat-URL verbonden** als de YouTube-chat niet gekoppeld is.

| Optie | Beschrijving |
|--------|-------------|
| **Chat inschakelen** | Berichten van dit platform tonen |
| **Avatar tonen** | De avatar van de kijker tonen |
| **Badges tonen** (Twitch) / **Badges tonen (ledenpictogram)** (YouTube) | Badges tonen |
| **Kijkersnamen tonen in plaats van @handles** | Alleen YouTube. Uitgeschakeld totdat je je aanmeldt met Google |

Als de YouTube-chat is ingeschakeld maar niet gekoppeld, verschijnen er twee knoppen op de kaart:

- **Automatisch verbinden** — zoekt automatisch je huidige uitzending (aanmelden met Google vereist)
- **Handmatig invoeren** — brengt je naar de instellingenpagina om de chat-URL te plakken

**Max. aantal berichten**: hoeveel berichten in beeld blijven (5–200, standaard 50).

### Automatisch vertalen

1. Vink **Vertaling inschakelen** aan
2. **Doeltaal**: de taal waarin berichten worden vertaald. De standaardoptie, **Volg interfacetaal**, gebruikt de interfacetaal van de app
3. **Niet te vertalen talen** (optioneel): berichten in de aangevinkte talen blijven zoals ze zijn. Portugees PT-BR en PT-PT zijn niet van elkaar te onderscheiden, dus als je een van beide aanvinkt, worden beide overgeslagen

**Vertaalservice** is **MyMemory**, waarvoor geen API-sleutel nodig is.

- **E-mail (optioneel)**: zonder e-mail is het dagelijkse quotum 5.000 tekens; vul een e-mailadres in en klik op **Opslaan** om dit te verhogen tot 50.000 tekens (gratis, geen registratie bij MyMemory nodig)
- De balk eronder toont ongeveer hoeveel er vandaag is gebruikt. Deze wordt dagelijks om 08:00 UTC gereset

### Testen

- **Testbericht versturen** — stuurt een willekeurig voorbeeldbericht naar de overlay
- **Wissen** — wist alle berichten uit de overlay

Verschijnt **Verbinding mislukt — de server draait mogelijk niet**, dan reageert de lokale server van Stream Toolkit niet.

### Bureaublad-chatvenster

Toont de chat in een klein, transparant venster dat altijd bovenop je game blijft. Alleen jij kunt het zien — handig als je met één monitor streamt.

1. Klik op **Venster openen** (of klik met de rechtermuisknop op het pictogram in het systeemvak en kies **Bureaublad-chat openen**)
2. Zolang het ontgrendeld is, sleep je de bovenste balk om het venster te verplaatsen en sleep je de randen om het formaat te wijzigen
3. Klik op **🔒 Vergrendelen** als het op zijn plek staat. Klikken gaan dan door het venster heen naar je game. Om te ontgrendelen beweeg je de muis over het venster en klik je op de 🔓 die rechtsboven verschijnt, of klik je op **🔓 Ontgrendelen** op de instellingenpagina

**Positie herstellen** zet het venster terug op de standaardpositie.

| Instelling | Beschrijving |
|---------|-------------|
| **Stijl** | **Alleen naam en bericht** (standaard) of **Zelfde als OBS-chat** |
| **Lettergrootte** | 12–32 px, standaard 16. Alleen voor **Alleen naam en bericht** |
| **Tekstdekking** | 10–100%, standaard 100% |
| **Achtergronddekking** | 0–100%, standaard 40% |
| **Berichten laten vervagen** | 0–120 seconden, standaard 0. Elk bericht vervaagt na dit aantal seconden, en naar vervaagde berichten kun je niet terugscrollen. Bij 0 vervaagt er niets en kun je in ontgrendelde stand omhoog scrollen naar eerdere berichten (tot het max. aantal berichten) |
| **Verbergen in streamopname** | Standaard aan. OBS-schermopname neemt het venster niet op, zodat kijkers de chat niet dubbel zien. Het verschijnt ook niet in schermafbeeldingen of bij scherm delen in Discord |

:::tip
Zie je het venster niet terwijl je game op volledig scherm draait, zet de game dan in de modus Randloos venster of Venster. Gebruik **Testbericht versturen** om de positie en grootte van het venster te controleren.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Tabblad Weergave

### Voorbeeld

Bovenaan het tabblad staat een live voorbeeld. De kleurkiezer naast **Voorbeeld** wijzigt alleen de achtergrond van het voorbeeld. De selectievakjes **Avatar**, **Badges** en **Platformpictogram** wijzigen alleen wat het voorbeeld toont.

### Weergave-instellingen

**Standaard herstellen** zet de standaardweergave terug (of de weergave van het toegepaste thema, als er een thema is toegepast).

- **Invoegrichting**: **Van boven naar beneden**, **Van beneden naar boven** (standaard), **Van links naar rechts**, **Van rechts naar links**
- **Tekst** — apart in te stellen voor **Bijnaam** en **Bericht**:
  - Lettertype, grootte (px) en kleur. Voor de bijnaam kun je kiezen uit **Oorspronkelijke kleur** (de platformkleur van de kijker) of **Aangepaste kleur**
  - **Omlijning**: kleur, **Transparantie**, **Dikte**
  - **Schaduw**: kleur, **Transparantie**, **Vervaging**, X/Y-verschuiving
- **Pictogramgrootte**: schaal voor **Platformpictogram**, **Avatar** en **Badges** (0.1–5x)
- **Kleur**: **Achtergrondkleur** van elk bericht

### Aangepaste CSS

Klap **Aangepaste CSS** uit om de CSS van de overlay direct te bewerken. Gebruik **Assets beheren** om afbeeldingen te uploaden waarnaar je in de CSS verwijst. **Standaard herstellen** zet de standaard-CSS terug. Zie ook [Thema's](./themes).

:::tip
Als je aangepaste CSS een van de weergavevelden instelt met `!important`, wordt dat veld grijs weergegeven in de weergave-instellingen ("Deze instelling wordt aangestuurd door aangepaste CSS"). Als er een thema is toegepast, is de CSS alleen-lezen — herstel deze voordat je gaat bewerken.
:::

## Beperkingen van de proefversie

:::info
- Als je automatisch vertalen aanzet, krijgt de chatoverlay een watermerk
- **Aangepaste CSS** is alleen beschikbaar in de volledige versie
- Het **Bureaublad-chatvenster** is alleen beschikbaar in de volledige versie

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::
