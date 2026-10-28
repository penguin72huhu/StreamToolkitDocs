---
sidebar_position: 7
---

# Donatiebalk

Toont op de stream een voortgangsbalk naar een donatiedoel. Donaties van de platforms die je kiest worden automatisch bij het totaal opgeteld.

## OBS-bron-URL

```
http://127.0.0.1:7272/donate
```

Kopieer de URL bovenaan de pagina **Instellingen voor Donatiebalk** en voeg deze in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source).

Gebruik de schakelaar naast **Donatiebalk** in de linkerzijbalk om de balk in OBS te tonen of te verbergen. Als deze uit staat, is de balk verborgen.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Valuta

De balk gebruikt de **Donatievaluta** die is ingesteld op de pagina **Instellingen**. Donaties in andere valuta worden eerst naar deze valuta omgerekend voordat ze worden opgeteld. Kan de valuta van een donatie niet worden omgerekend, dan wordt deze niet bij de balk opgeteld (Donatiemeldingen en het Donatiebord tonen hem nog wel in de oorspronkelijke valuta).

## Tabblad Instellingen

### Platform koppelen

Vink de platforms aan waarvan de donaties voor de balk moeten meetellen:

- **Twitch** — Bits en abonnementen
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Een groen bolletje betekent dat het platform verbonden is; anders toont de rij **(niet verbonden)**. Deze selectievakjes bepalen alleen wat de balk meetelt. Ze hebben geen invloed op Donatiemeldingen of het Donatiebord, die elk hun eigen platformlijst hebben.

- **YouTube**: als de livechat niet gekoppeld is, toont de rij **Geen chat-URL verbonden** met twee knoppen: **Automatisch verbinden** (aanmelden met Google vereist) en **Handmatig invoeren** (brengt je naar het veld voor de chat-URL in Instellingen). Zie [YouTube-instellingen](../platforms/youtube-settings).
- **YouTube ⚙️**: kies welke **Meegetelde gebeurtenissen** bij de balk worden opgeteld: **Super Chat**, **Super Sticker**, **Nieuw lid**, **Lidmaatschapsverlenging**, **Cadeaulidmaatschap**, **Juwelen**. Voor **Juwelen** is aanmelden met Google vereist.
- Is er een lidmaatschapsgebeurtenis aangevinkt maar zijn er geen lidmaatschapsprijzen ingesteld, dan verschijnt **⚠ Geen lidmaatschapsprijzen**. Klik erop om naar Instellingen te gaan en vul de prijzen per niveau in onder YouTube **Omrekeninstellingen**.
- Hoeveel Twitch-Bits en -abonnementen waard zijn, stel je in bij Instellingen → Twitch → **Omrekeninstellingen**. Zie [Twitch-instellingen](../platforms/twitch).
- Zie [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) en [ECPay](../payments/ecpay) om PayPal, Stripe, O'Pay of ECPay te koppelen.

### Huidige voortgang

Toont het huidige totaal, het doel en het percentage.

| Veld | Beschrijving |
|-------|-------------|
| **Titel** | Optioneel. Wordt boven de balk getoond. |
| **Doelbedrag** | Het doelbedrag, in je donatievaluta. |
| **Handmatig toevoegen** | Vul een bedrag in en klik op **Toevoegen** (of druk op Enter) om het bij het totaal op te tellen. |
| **Op nul zetten** | Zet het huidige totaal terug op nul. Er verschijnt eerst een bevestiging. Dit kan niet ongedaan worden gemaakt. |

## Tabblad Weergave

### Voorbeeld

Het voorbeeld toont de balk met voorbeeldbedragen. Gebruik de kleurkiezer naast **Voorbeeld** om de achtergrond van het voorbeeld te wijzigen. Vink **Voorbeeld bereikt** aan om de balk te zien zoals hij eruitziet als het doel is bereikt.

### Lettertype en kleur

Klik op **Standaard herstellen** om de standaardweergave terug te zetten.

- **Lettertype**: stel lettertype, kleur en grootte (8–72 px) in voor **Titel**, **Bedrag** en **Percentage**.
- **Kleur**: stel **Achtergrond**, **Doelbalk** (vulkleur) en **Doelbalk bereikt** (vulkleur zodra het doel is bereikt) in.

### Aangepaste CSS

Klap **Aangepaste CSS** uit om de CSS van de balk te bewerken. **Standaard herstellen** zet de standaard-CSS terug en **Assets beheren** opent het assetbeheer voor afbeeldingen die je in je CSS wilt gebruiken. Hier kun je ook Steam Workshop-thema's toepassen. Zolang een thema is toegepast, is de CSS alleen-lezen totdat je deze herstelt. Zie [Thema's](./themes).

:::info Proefversie
Aangepaste CSS is alleen beschikbaar in de volledige versie. Echte betaaldiensten (PayPal / Stripe / O'Pay / ECPay) en de YouTube-lidmaatschapsgebeurtenissen en Juwelen kunnen niet worden gebruikt in de proefversie, en de overlay toont een watermerk. Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::

## Veelgestelde vragen

**Q: Het totaal ging omhoog nadat ik een testmelding had verstuurd.**
De **Testmelding** op de pagina Instellingen telt als een echte donatie en wordt dus bij de balk opgeteld (als dat platform is aangevinkt). Klik na het testen op **Op nul zetten** om het totaal terug op nul te zetten.
