---
sidebar_position: 8
---

# Donatiemeldingen

Toont een melding met afbeelding, geluid, naam van de donateur, bedrag en bericht wanneer iemand doneert.

## OBS-bron-URL

```
http://127.0.0.1:7272/donate-alert
```

Kopieer de URL bovenaan de pagina **Instellingen voor Donatiemeldingen** en voeg deze in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source).

:::warning
Meldingen spelen een geluid af. Vink **Audio bedienen via OBS** aan in de eigenschappen van de browserbron, anders is het geluid niet te horen op de stream.
:::

Gebruik de schakelaar naast **Donatiemeldingen** in de linkerzijbalk om meldingen aan of uit te zetten. Zolang deze uit staat, worden er geen meldingen getoond (ook geen testmeldingen), maar donaties worden nog wel vastgelegd op het [Donatiebord](./sponsors).

Komen er meerdere donaties kort na elkaar binnen, dan worden de meldingen in een wachtrij gezet en na elkaar getoond.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Tabblad Instellingen

### Platform koppelen

Vink de platforms aan die een melding moeten activeren: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Een groen bolletje betekent dat het platform verbonden is; anders toont de rij **(niet verbonden)**. Deze selectievakjes gelden alleen voor meldingen, niet voor de Donatiebalk of het Donatiebord.

**Twitch ⚙️** (wordt getoond als Twitch verbonden en aangevinkt is):

1. Kies **Bits en abonnementen meetellen**, **Alleen Bits meetellen** of **Alleen abonnementen meetellen**
2. **Herabonnementen meetellen**: of herabonnementen een melding activeren (wordt getoond als abonnementen worden meegeteld)
3. **Minder dan [N] Bits worden niet meegeteld**: vink dit aan en vul een minimum in, zodat kleinere cheers geen melding activeren (wordt getoond als Bits worden meegeteld)
4. Klik op **Opslaan**

**YouTube ⚙️**:

- **Kijkersnamen tonen in plaats van @handles**: alleen beschikbaar nadat je je hebt aangemeld met Google.
- **Meegetelde gebeurtenissen**: **Super Chat**, **Super Sticker**, **Nieuw lid**, **Lidmaatschapsverlenging**, **Cadeaulidmaatschap**, **Juwelen**. Voor **Juwelen** is aanmelden met Google vereist.

Als de YouTube-livechat niet gekoppeld is, toont de rij **Geen chat-URL verbonden** met **Automatisch verbinden** (aanmelden met Google vereist) en **Handmatig invoeren** (brengt je naar het veld voor de chat-URL in Instellingen). Is er een lidmaatschapsgebeurtenis aangevinkt maar zijn er geen lidmaatschapsprijzen ingesteld, klik dan op **⚠ Geen lidmaatschapsprijzen** om ze in te stellen. Zie [YouTube-instellingen](../platforms/youtube-settings).

Zie [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) en [ECPay](../payments/ecpay) om PayPal, Stripe, O'Pay of ECPay te koppelen.

### Instellingen

| Veld | Beschrijving |
|-------|-------------|
| **Automatisch omrekenen naar eigen valuta** | Standaard aan. Toont het bedrag omgerekend naar de **Donatievaluta** die is ingesteld op de pagina Instellingen. |
| **Weergaveduur** | Hoe lang elke melding in beeld blijft, in seconden. Standaard: 6. |

## Tabblad Weergave

### Voorbeeld

Het voorbeeld gebruikt dezelfde pagina als de OBS-bron. Gebruik de kleurkiezer naast **Voorbeeld** om de achtergrond van het voorbeeld te wijzigen en klik op **▶ Animatie opnieuw** om de meldingsanimatie opnieuw af te spelen.

### Uniforme stijl / Per platform apart

- **Uniforme stijl**: alle platforms gebruiken dezelfde meldingsstijl.
- **Per platform apart**: elk platform heeft een eigen stijl. Kies het platform met de knoppen eronder (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) en bewerk de instellingen. Bij de eerste keer overschakelen nemen platforms die je nog niet hebt aangepast de huidige uniforme stijl over, elk met een eigen kleur voor de aftelbalk.

**Standaard herstellen** zet de stijl die je bewerkt terug naar de standaardstijl.

### Afbeelding

- **Afbeelding kiezen**: kies een afbeelding uit het assetbeheer. Zonder afbeelding wordt een hartje-emoji getoond. **Wissen** verwijdert de afbeelding.
- **Afbeeldingsgrootte**: 1–400 px.
- **Afbeeldingspositie**: **Links**, **Rechts**, **Boven** of **Onder**.

### Geluid

Kies een ingebouwd geluid: **Geen**, **Belletje** (standaard), **Munt**, **Bel**, **Plop**, **Fanfare**. Klik op **▶** om te luisteren. Klik op **Geluid kiezen** om je eigen geluidsbestand uit het assetbeheer te gebruiken.

### Tekstweergave

- **Standaard**: bedrag, naam van de donateur en bericht worden op aparte regels getoond.
- **Aangepaste tekst**: schrijf je eigen regel. Gebruik `{name}` voor de naam van de donateur en `{amount}` voor het bedrag, bijv. `Bedankt {name} voor je donatie van {amount}!`

### Tekst en kleur

- **Tekst**: stel lettertype, grootte en kleur in voor **Bedrag**, **Naam van donateur** en **Bericht** (plus **Aangepaste tekst** in de modus Aangepaste tekst).
- **Kleur**: **Achtergrond**, **Schaduw** en **Aftelbalk**.

### Aangepaste CSS

Klap **Aangepaste CSS** uit om de CSS te bewerken van de stijl die je bewerkt (uniform of het gekozen platform). **Standaard herstellen** zet de sjabloon-CSS terug en **Assets beheren** opent het assetbeheer. Hier kun je ook Steam Workshop-thema's toepassen. Zolang een thema is toegepast, is de CSS alleen-lezen. Zie [Thema's](./themes).

## Meldingen testen

Klik op de pagina **Instellingen** op **Testmelding** naast **Donatieplatformkoppeling**:

1. Vul **Testnaam**, **Testbericht** en **Testbedrag** in en kies een **Testplatform**
2. Klik op **Testmelding versturen**

In het gedeelte **YouTube Super Chat-test** kun je een ruwe **Bedragtekst** invullen (bijv. `$5.00`, `¥500`, `NT$150`) en op **Test-Super Chat versturen** klikken om het verwerken van bedragen en het omrekenen van valuta te testen.

:::note
Een testmelding wordt behandeld als een echte donatie: deze wordt ook toegevoegd aan de [Donatiebalk](./donate) en het [Donatiebord](./sponsors) als die platforms daar zijn aangevinkt.
:::

:::info Proefversie
Aangepaste CSS is alleen beschikbaar in de volledige versie. Echte betaaldiensten (PayPal / Stripe / O'Pay / ECPay) en de YouTube-lidmaatschapsgebeurtenissen en Juwelen kunnen niet worden gebruikt in de proefversie, en de melding toont een watermerk in OBS. Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::

## Veelgestelde vragen

**Q: Geen geluid op de stream?**
Controleer of **Audio bedienen via OBS** is aangevinkt in de eigenschappen van de browserbron en of de bron niet is gedempt in de OBS-mixer. Controleer ook of **Geluid** niet op **Geen** staat.

**Q: Ik heb de OBS-bron later toegevoegd. Worden eerdere meldingen opnieuw afgespeeld?**
Nee. Een nieuw geopende bron toont alleen meldingen die binnenkomen nadat hij verbinding heeft gemaakt.
