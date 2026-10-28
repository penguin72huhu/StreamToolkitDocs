---
sidebar_position: 9
---

# Donationspanel

Visar en lista över de senaste donationerna i sändningen: plattformsikon, donatorns namn, belopp och meddelande.

## OBS-källans URL

```
http://127.0.0.1:7272/sponsors
```

Kopiera URL-en högst upp på sidan **Donationspanel-inställningar** och lägg till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source).

Använd reglaget bredvid **Donationspanel** i vänstermenyn för att visa eller dölja panelen i OBS. När det är av tonas panelen ut. Donationer registreras fortfarande när det är av.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Fliken Inställningar

### Anslut plattform

Markera de plattformar vars donationer ska registreras: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. En grön punkt betyder att plattformen är ansluten; annars visar raden **(Ej ansluten)**. Dessa kryssrutor påverkar bara panelen, inte Donationsmålfält eller Donationsaviseringar.

**Twitch ⚙️** (visas när Twitch är anslutet och markerat):

1. Välj **Räkna Bits och prenumerationer**, **Räkna endast Bits** eller **Räkna endast prenumerationer**
2. **Räkna återprenumerationer**: om återprenumerationer ska registreras (visas när prenumerationer räknas)
3. **Under [N] Bits räknas inte**: markera och ange ett minimum så att mindre cheers inte registreras (visas när Bits räknas)
4. Klicka på **Spara**

**YouTube ⚙️**:

- **Visa tittarnas namn i stället för @handtag**: finns bara när du har loggat in med Google.
- **Räknade händelser**: **Super Chat**, **Super Sticker**, **Ny medlem**, **Förnyat medlemskap**, **Skänkt medlemskap**, **Juveler**. **Juveler** kräver Google-inloggning. Juvelgåvor visas som en juvelikon med antalet juveler i stället för ett penningbelopp.

Om YouTube-livechatten inte är länkad visar raden **Ingen chattadress ansluten** med **Anslut automatiskt** (kräver Google-inloggning) och **Ange manuellt** (tar dig till fältet för chatt-URL i Inställningar). Om en medlemshändelse är markerad men inga medlemspriser är angivna, klicka på **⚠ Inga medlemspriser** för att ange dem. Se [YouTube-inställningar](../platforms/youtube-settings).

För att ansluta PayPal, Stripe, O'Pay eller ECPay, se [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) och [ECPay](../payments/ecpay).

### Inställningar

| Fält | Beskrivning |
|-------|-------------|
| **Omvandla automatiskt till egen valuta** | På som standard. Visar belopp omräknade till den **Donationsvaluta** som är angiven på sidan Inställningar. |
| **Visa högst** | Hur många poster som sparas (1–100). Standard: 20. När en ny donation kommer utöver gränsen tas den äldsta posten bort. |

## Fliken Utseende

### Förhandsvisning

Använd färgväljaren bredvid **Förhandsvisa** för att ändra förhandsvisningens bakgrund. Klicka på **Testa tilläggsanimation** för att spela upp inträdesanimationen med en exempelpost. Exemplet sparas inte i historiken.

Klicka på **Återställ standard** för att återställa standardutseendet.

### Visningsinställningar

- **Visa plattformsikon**: visa plattformens ikon på varje post.
- **Inträdesriktning**: **Uppifrån och ned** (standard), **Nedifrån och upp**, **Vänster till höger** eller **Höger till vänster**.

### Teckensnitt

Ställ in teckensnitt, färg och storlek (8–72 px) för **Titel** (donatorns namn), **Brödtext** (meddelande) och **Belopp**.

### Bakgrundsfärg

- **Standard**: bakgrundsfärg för alla poster.
- **+ Lägg till intervall**: lägg till en färg med ett intervall för **Belopp** (**Lägst** ~ **Högst**). Poster vars belopp ligger inom intervallet använder den färgen i stället. Lämna Lägst eller Högst tomt för ingen gräns åt det hållet. Klicka på **✕** för att ta bort ett intervall.

När **Omvandla automatiskt till egen valuta** är på jämförs intervallet med det omräknade beloppet.

### Anpassad CSS

Expandera **Anpassad CSS** för att redigera panelens CSS. **Återställ standard** återställer standard-CSS, och **Hantera resurser** öppnar resurshanteraren. Steam Workshop-teman kan också tillämpas här. Medan ett tema är tillämpat är CSS skrivskyddad. Se [Teman](./themes).

## Fliken Historik

### Lägg till manuellt (för test)

Välj en plattform, ange **Namn**, **Belopp** och ett valfritt **Meddelande (valfritt)** och klicka sedan på **Lägg till**. Posten läggs bara till om plattformen är markerad under **Anslut plattform**. Beloppet behandlas som din donationsvaluta.

### Historik

Listar de sparade posterna med antalet poster.

- Klicka på **🗑** och sedan på **Bekräfta borttagning** för att ta bort en post.
- Klicka på **Rensa** för att ta bort alla poster. En bekräftelse visas först. Det går inte att ångra.

:::info Testversion
Anpassad CSS finns bara i fullversionen. Riktiga betalningslösningar (PayPal / Stripe / O'Pay / ECPay) samt YouTubes medlemshändelser och Juveler kan inte användas i testversionen, och panelen visar en vattenstämpel i OBS. Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::

## Vanliga frågor

**Q: Testaviseringar visas på panelen.**
**Testavisering** på sidan Inställningar hanteras som en riktig donation, så den registreras även här om plattformen är markerad. Ta bort den på fliken **Historik**.
