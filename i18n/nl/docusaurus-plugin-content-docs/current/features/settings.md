---
sidebar_position: 19
---

# Instellingen

Klik op **⚙️ Instellingen** onderaan het linkermenu. Op deze pagina staan opties voor de hele app, platformkoppelingen en betaaldiensten voor donaties.

## Algemeen

| Optie | Wat het doet | Standaard |
|------|------|------|
| **Thema** | Weergavemodus van de interface: **Gedimd** of **Licht** | Gedimd |
| **Taal** | Interfacetaal; wordt direct gewijzigd | — |
| **Minimaliseren naar systeemvak bij X** | Als je het venster sluit, wordt het geminimaliseerd naar het systeemvak in plaats van afgesloten | Aan |
| **Donatievaluta** | Algemene valuta-eenheid, gebruikt door de donatiebalk, meldingen en alle andere bedragweergaven | Bij de eerste start ingesteld op basis van je systeemtaal (bijv. Traditioneel Chinees (Taiwan) → TWD, Japans → JPY, overige → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Platformkoppeling

### Twitch

Klik op **Account koppelen** en geef toestemming in de browser. Zodra de koppeling is gemaakt, staat er **Verbonden @je-naam** en een knop **Verbinding verbreken**. Volledige stappen: [Twitch-instellingen](../platforms/twitch).

Na het koppelen stel je bij **▸ Omrekeninstellingen** in hoeveel Bits en abonnementen waard zijn in je donatievaluta:

- **Verdeelmechanisme**: **50 / 50** of **70 / 30**
- **Per 100 Bits**, **Tier 1-abonnement**, **Tier 2-abonnement**, **Tier 3-abonnement**
- **Opslaan** bewaart de waarden voor de huidige valuta; **Standaard herstellen** vult de ingebouwde waarden voor die valuta in

### YouTube

1. Klik op **Account koppelen** en meld je aan met Google. Stap voor stap: [YouTube-instellingen](../platforms/youtube-settings)
2. Zodra de koppeling is gemaakt, staat er **Verbonden: kanaalnaam**. **Verbinding verbreken** ontkoppelt het account
3. Kies hoe de livechat wordt gevonden:
   - **Huidige stream detecteren**: aanmelden met Google vereist. Klik op **Verbinden** om je kanaal te doorzoeken op de huidige of komende stream. Zijn er meerdere, kies er dan een uit de lijst
   - **Handmatig een URL invoeren**: plak de **Chat-URL**
4. **Vraag bij elke start om de chat-URL in te voeren**: optioneel

**▸ Omrekeninstellingen** onder YouTube bepaalt hoeveel lidmaatschappen waard zijn (YouTube stuurt geen bedrag mee voor lidmaatschappen):

- **Lidmaatschapsniveaus**: voeg elke niveaunaam en de waarde ervan toe. Niveaunamen moeten exact overeenkomen met je YouTube-kanaal
- **Niet-vermelde niveaus**: waarde die wordt gebruikt voor een niveau dat niet in de tabel staat
- **Niveau van cadeaulidmaatschappen**: als welk niveau cadeaulidmaatschappen tellen
- Niveaus die in gebeurtenissen voorkwamen maar ontbreken in de tabel, worden getoond met **Toevoegen aan tabel** / **Negeren**

## Donatieplatformkoppeling

Klik op een betaaldienst om deze uit te klappen. Elke dienst heeft een link **Klik hier voor uitleg** naar de installatiehandleiding:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Testmelding

De knop **Testmelding** naast de kop opent een testvenster:

- Vul **Testnaam**, **Testbericht** en **Testbedrag** in, kies een **Testplatform** en klik op **Testmelding versturen**
- **YouTube Super Chat-test**: vul een **Bedragtekst** in, zoals `$5.00` of `NT$150`, en klik op **Test-Super Chat versturen** om het verwerken van bedragen en het omrekenen van valuta te testen

## Over

Klik op de knop **i** naast "Stream Toolkit" bovenaan het linkermenu om de versie, de auteur en een link naar de officiële documentatie te zien.

:::info Beperkingen van de proefversie
- **Donatieplatformkoppeling** is alleen beschikbaar in de volledige versie
- **Omrekeninstellingen** voor YouTube-lidmaatschappen zijn alleen beschikbaar in de volledige versie

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::
