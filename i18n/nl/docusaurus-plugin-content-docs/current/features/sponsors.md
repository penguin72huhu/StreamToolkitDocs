---
sidebar_position: 9
---

# Donatiebord

Toont op de stream een lijst met recente donaties: platformpictogram, naam van de donateur, bedrag en bericht.

## OBS-bron-URL

```
http://127.0.0.1:7272/sponsors
```

Kopieer de URL bovenaan de pagina **Instellingen voor Donatiebord** en voeg deze in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source).

Gebruik de schakelaar naast **Donatiebord** in de linkerzijbalk om het bord in OBS te tonen of te verbergen. Als deze uit staat, vervaagt het bord. Donaties worden ook vastgelegd als de schakelaar uit staat.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Tabblad Instellingen

### Platform koppelen

Vink de platforms aan waarvan de donaties moeten worden vastgelegd: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Een groen bolletje betekent dat het platform verbonden is; anders toont de rij **(niet verbonden)**. Deze selectievakjes gelden alleen voor het bord, niet voor de Donatiebalk of Donatiemeldingen.

**Twitch ⚙️** (wordt getoond als Twitch verbonden en aangevinkt is):

1. Kies **Bits en abonnementen meetellen**, **Alleen Bits meetellen** of **Alleen abonnementen meetellen**
2. **Herabonnementen meetellen**: of herabonnementen worden vastgelegd (wordt getoond als abonnementen worden meegeteld)
3. **Minder dan [N] Bits worden niet meegeteld**: vink dit aan en vul een minimum in, zodat kleinere cheers niet worden vastgelegd (wordt getoond als Bits worden meegeteld)
4. Klik op **Opslaan**

**YouTube ⚙️**:

- **Kijkersnamen tonen in plaats van @handles**: alleen beschikbaar nadat je je hebt aangemeld met Google.
- **Meegetelde gebeurtenissen**: **Super Chat**, **Super Sticker**, **Nieuw lid**, **Lidmaatschapsverlenging**, **Cadeaulidmaatschap**, **Juwelen**. Voor **Juwelen** is aanmelden met Google vereist. Cadeaus in juwelen worden getoond als een juweelpictogram met het aantal juwelen in plaats van een geldbedrag.

Als de YouTube-livechat niet gekoppeld is, toont de rij **Geen chat-URL verbonden** met **Automatisch verbinden** (aanmelden met Google vereist) en **Handmatig invoeren** (brengt je naar het veld voor de chat-URL in Instellingen). Is er een lidmaatschapsgebeurtenis aangevinkt maar zijn er geen lidmaatschapsprijzen ingesteld, klik dan op **⚠ Geen lidmaatschapsprijzen** om ze in te stellen. Zie [YouTube-instellingen](../platforms/youtube-settings).

Zie [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) en [ECPay](../payments/ecpay) om PayPal, Stripe, O'Pay of ECPay te koppelen.

### Instellingen

| Veld | Beschrijving |
|-------|-------------|
| **Automatisch omrekenen naar eigen valuta** | Standaard aan. Toont bedragen omgerekend naar de **Donatievaluta** die is ingesteld op de pagina Instellingen. |
| **Max. weergave** | Hoeveel records er worden bewaard (1–100). Standaard: 20. Komt er boven deze limiet een nieuwe donatie binnen, dan wordt het oudste record verwijderd. |

## Tabblad Weergave

### Voorbeeld

Gebruik de kleurkiezer naast **Voorbeeld** om de achtergrond van het voorbeeld te wijzigen. Klik op **Toevoeganimatie testen** om de verschijnanimatie af te spelen met een voorbeeldrecord. Het voorbeeld wordt niet in de geschiedenis opgeslagen.

Klik op **Standaard herstellen** om de standaardweergave terug te zetten.

### Weergave-instellingen

- **Platformpictogram tonen**: toont het pictogram van het platform bij elk record.
- **Verschijnrichting**: **Van boven naar beneden** (standaard), **Van beneden naar boven**, **Van links naar rechts** of **Van rechts naar links**.

### Lettertype

Stel lettertype, kleur en grootte (8–72 px) in voor **Titel** (naam van de donateur), **Hoofdtekst** (bericht) en **Bedrag**.

### Achtergrondkleur

- **Standaard**: achtergrondkleur voor elk record.
- **+ Bereik toevoegen**: voeg een kleur toe met een **Bedrag**-bereik (**Minimum** ~ **Maximum**). Records waarvan het bedrag binnen het bereik valt, gebruiken in plaats daarvan die kleur. Laat Minimum of Maximum leeg voor geen limiet aan die kant. Klik op **✕** om een bereik te verwijderen.

Als **Automatisch omrekenen naar eigen valuta** aan staat, wordt het bereik vergeleken met het omgerekende bedrag.

### Aangepaste CSS

Klap **Aangepaste CSS** uit om de CSS van het bord te bewerken. **Standaard herstellen** zet de standaard-CSS terug en **Assets beheren** opent het assetbeheer. Hier kun je ook Steam Workshop-thema's toepassen. Zolang een thema is toegepast, is de CSS alleen-lezen. Zie [Thema's](./themes).

## Tabblad Geschiedenis

### Handmatig toevoegen (voor testen)

Kies een platform, vul **Naam**, **Bedrag** en eventueel **Bericht (optioneel)** in en klik op **Toevoegen**. Het record wordt alleen toegevoegd als dat platform is aangevinkt onder **Platform koppelen**. Het bedrag wordt behandeld als je donatievaluta.

### Geschiedenis

Toont de opgeslagen records met het aantal records.

- Klik op **🗑** en daarna op **Verwijderen bevestigen** om één record te verwijderen.
- Klik op **Wissen** om alle records te verwijderen. Er verschijnt eerst een bevestiging. Dit kan niet ongedaan worden gemaakt.

:::info Proefversie
Aangepaste CSS is alleen beschikbaar in de volledige versie. Echte betaaldiensten (PayPal / Stripe / O'Pay / ECPay) en de YouTube-lidmaatschapsgebeurtenissen en Juwelen kunnen niet worden gebruikt in de proefversie, en het bord toont een watermerk in OBS. Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::

## Veelgestelde vragen

**Q: Testmeldingen verschijnen op het bord.**
De **Testmelding** op de pagina Instellingen wordt behandeld als een echte donatie en wordt dus ook hier vastgelegd als dat platform is aangevinkt. Verwijder deze op het tabblad **Geschiedenis**.
