---
sidebar_position: 8
---

# Donationsaviseringar

Visar en avisering med bild, ljud, donatorns namn, belopp och meddelande när någon donerar.

## OBS-källans URL

```
http://127.0.0.1:7272/donate-alert
```

Kopiera URL-en högst upp på sidan **Donationsaviseringar-inställningar** och lägg till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source).

:::warning
Aviseringar spelar upp ett ljud. Markera **Styr ljud via OBS** i webbläsarkällans egenskaper, annars hörs inte ljudet i sändningen.
:::

Använd reglaget bredvid **Donationsaviseringar** i vänstermenyn för att slå på eller av aviseringar. När det är av visas inga aviseringar (inte heller testaviseringar), men donationer registreras fortfarande på [Donationspanel](./sponsors).

När flera donationer kommer tätt efter varandra köas aviseringarna och visas en i taget.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Fliken Inställningar

### Anslut plattform

Markera de plattformar som ska utlösa en avisering: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. En grön punkt betyder att plattformen är ansluten; annars visar raden **(Ej ansluten)**. Dessa kryssrutor påverkar bara aviseringar, inte Donationsmålfält eller Donationspanel.

**Twitch ⚙️** (visas när Twitch är anslutet och markerat):

1. Välj **Räkna Bits och prenumerationer**, **Räkna endast Bits** eller **Räkna endast prenumerationer**
2. **Räkna återprenumerationer**: om återprenumerationer ska utlösa en avisering (visas när prenumerationer räknas)
3. **Under [N] Bits räknas inte**: markera och ange ett minimum så att mindre cheers inte utlöser en avisering (visas när Bits räknas)
4. Klicka på **Spara**

**YouTube ⚙️**:

- **Visa tittarnas namn i stället för @handtag**: finns bara när du har loggat in med Google.
- **Räknade händelser**: **Super Chat**, **Super Sticker**, **Ny medlem**, **Förnyat medlemskap**, **Skänkt medlemskap**, **Juveler**. **Juveler** kräver Google-inloggning.

Om YouTube-livechatten inte är länkad visar raden **Ingen chattadress ansluten** med **Anslut automatiskt** (kräver Google-inloggning) och **Ange manuellt** (tar dig till fältet för chatt-URL i Inställningar). Om en medlemshändelse är markerad men inga medlemspriser är angivna, klicka på **⚠ Inga medlemspriser** för att ange dem. Se [YouTube-inställningar](../platforms/youtube-settings).

För att ansluta PayPal, Stripe, O'Pay eller ECPay, se [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) och [ECPay](../payments/ecpay).

### Inställningar

| Fält | Beskrivning |
|-------|-------------|
| **Omvandla automatiskt till egen valuta** | På som standard. Visar beloppet omräknat till den **Donationsvaluta** som är angiven på sidan Inställningar. |
| **Visningstid** | Hur länge varje avisering visas på skärmen, i sekunder. Standard: 6. |

## Fliken Utseende

### Förhandsvisning

Förhandsvisningen använder samma sida som OBS-källan. Använd färgväljaren bredvid **Förhandsvisa** för att ändra förhandsvisningens bakgrund, och klicka på **▶ Spela upp animationen** för att spela upp aviseringsanimationen igen.

### Enhetlig stil / Separat per plattform

- **Enhetlig stil**: alla plattformar använder samma aviseringsstil.
- **Separat per plattform**: varje plattform har en egen stil. Välj plattform med knapparna nedanför (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) och redigera dess inställningar. När du byter första gången kopierar plattformar som du inte har anpassat den aktuella enhetliga stilen, var och en med sin egen färg på nedräkningsstapeln.

**Återställ standard** återställer standardstilen för den stil du redigerar.

### Bild

- **Välj bild**: välj en bild från resurshanteraren. Utan bild visas en hjärt-emoji. **Rensa** tar bort bilden.
- **Bildstorlek**: 1–400 px.
- **Bildposition**: **Vänster**, **Höger**, **Upptill** eller **Nedtill**.

### Ljud

Välj ett inbyggt ljud: **Inget**, **Klockspel** (standard), **Mynt**, **Klocka**, **Pop**, **Fanfar**. Klicka på **▶** för att lyssna. Klicka på **Välj ljud** för att använda en egen ljudfil från resurshanteraren.

### Textvisning

- **Standard**: belopp, donatorns namn och meddelande visas på separata rader.
- **Anpassad text**: skriv din egen rad. Använd `{name}` för donatorns namn och `{amount}` för beloppet, t.ex. `Tack {name} för donationen {amount}!`

### Text och färg

- **Text**: ställ in typsnitt, storlek och färg för **Belopp**, **Donatorns namn** och **Meddelande** (samt **Anpassad text** i läget Anpassad text).
- **Färg**: **Bakgrund**, **Skugga** och **Nedräkningsstapel**.

### Anpassad CSS

Expandera **Anpassad CSS** för att redigera CSS för den stil du redigerar (enhetlig eller den valda plattformen). **Återställ standard** återställer mallens CSS, och **Hantera resurser** öppnar resurshanteraren. Steam Workshop-teman kan också tillämpas här. Medan ett tema är tillämpat är CSS skrivskyddad. Se [Teman](./themes).

## Testa aviseringar

På sidan **Inställningar** klickar du på **Testavisering** bredvid **Donationsplattformar**:

1. Fyll i **Testnamn**, **Testmeddelande** och **Testbelopp** och välj en **Testplattform**
2. Klicka på **Skicka testavisering**

I avsnittet **Test av YouTube Super Chat** kan du ange en rå **Beloppssträng** (t.ex. `$5.00`, `¥500`, `NT$150`) och klicka på **Skicka test-Super Chat** för att testa tolkning av belopp och valutaomräkning.

:::note
En testavisering hanteras som en riktig donation: den läggs också till i [Donationsmålfält](./donate) och [Donationspanel](./sponsors) om plattformarna är markerade där.
:::

:::info Testversion
Anpassad CSS finns bara i fullversionen. Riktiga betalningslösningar (PayPal / Stripe / O'Pay / ECPay) samt YouTubes medlemshändelser och Juveler kan inte användas i testversionen, och aviseringen visar en vattenstämpel i OBS. Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::

## Vanliga frågor

**Q: Inget ljud i sändningen?**
Kontrollera att **Styr ljud via OBS** är markerat i webbläsarkällans egenskaper och att källan inte är ljudlös i OBS-mixern. Kontrollera också att **Ljud** inte är inställt på **Inget**.

**Q: Jag lade till OBS-källan sent. Spelas tidigare aviseringar upp igen?**
Nej. En nyöppnad källa visar bara aviseringar som kommer efter att den har anslutit.
