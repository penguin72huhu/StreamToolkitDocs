---
sidebar_position: 7
---

# Donationsmålfält

Visar en förloppsstapel i sändningen mot ett donationsmål. Donationer från de plattformar du väljer läggs automatiskt till totalen.

## OBS-källans URL

```
http://127.0.0.1:7272/donate
```

Kopiera URL-en högst upp på sidan **Donationsmålfält-inställningar** och lägg till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source).

Använd reglaget bredvid **Donationsmålfält** i vänstermenyn för att visa eller dölja stapeln i OBS. När det är av är stapeln dold.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Valuta

Stapeln använder den **Donationsvaluta** som är angiven på sidan **Inställningar**. Donationer i andra valutor räknas om till den här valutan innan de läggs till. Om en donations valuta inte kan räknas om läggs den inte till i stapeln (Donationsaviseringar och Donationspanel visar den ändå i originalvalutan).

## Fliken Inställningar

### Anslut plattform

Markera de plattformar vars donationer ska räknas in i stapeln:

- **Twitch** — Bits och prenumerationer
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

En grön punkt betyder att plattformen är ansluten; annars visar raden **(Ej ansluten)**. Dessa kryssrutor avgör bara vad stapeln räknar. De påverkar inte Donationsaviseringar eller Donationspanel, som har egna plattformslistor.

- **YouTube**: om livechatten inte är länkad visar raden **Ingen chattadress ansluten** med två knappar: **Anslut automatiskt** (kräver Google-inloggning) och **Ange manuellt** (tar dig till fältet för chatt-URL i Inställningar). Se [YouTube-inställningar](../platforms/youtube-settings).
- **YouTube ⚙️**: välj vilka **Räknade händelser** som läggs till i stapeln: **Super Chat**, **Super Sticker**, **Ny medlem**, **Förnyat medlemskap**, **Skänkt medlemskap**, **Juveler**. **Juveler** kräver Google-inloggning.
- Om någon medlemshändelse är markerad men inga medlemspriser är angivna visas **⚠ Inga medlemspriser**. Klicka på den för att gå till Inställningar och ange nivåpriserna under YouTube **Omräkningsinställningar**.
- Hur mycket Twitch Bits och prenumerationer är värda ställs in under Inställningar → Twitch → **Omräkningsinställningar**. Se [Twitch Inställningar](../platforms/twitch).
- För att ansluta PayPal, Stripe, O'Pay eller ECPay, se [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) och [ECPay](../payments/ecpay).

### Aktuell status

Visar aktuell total, målet och procentsatsen.

| Fält | Beskrivning |
|-------|-------------|
| **Titel** | Valfritt. Visas ovanför stapeln. |
| **Målbelopp** | Målbeloppet, i din donationsvaluta. |
| **Lägg till manuellt** | Ange ett belopp och klicka på **Lägg till** (eller tryck på Enter) för att lägga till det i totalen. |
| **Nollställ** | Sätter tillbaka den aktuella totalen till noll. En bekräftelse visas först. Det går inte att ångra. |

## Fliken Utseende

### Förhandsvisning

Förhandsvisningen visar stapeln med exempelbelopp. Använd färgväljaren bredvid **Förhandsvisa** för att ändra förhandsvisningens bakgrund. Markera **Förhandsvisa uppnått** för att se stapeln i uppnått läge.

### Teckensnitt och färg

Klicka på **Återställ standard** för att återställa standardutseendet.

- **Teckensnitt**: ställ in teckensnitt, färg och storlek (8–72 px) för **Titel**, **Belopp** och **Procent**.
- **Färg**: ställ in **Bakgrund**, **Målstapel** (fyllningsfärg) och **Målstapel uppnådd** (fyllningsfärg när målet är nått).

### Anpassad CSS

Expandera **Anpassad CSS** för att redigera stapelns CSS. **Återställ standard** återställer standard-CSS, och **Hantera resurser** öppnar resurshanteraren för bilder du vill använda i din CSS. Steam Workshop-teman kan också tillämpas här. Medan ett tema är tillämpat är CSS skrivskyddad tills du återställer den. Se [Teman](./themes).

:::info Testversion
Anpassad CSS finns bara i fullversionen. Riktiga betalningslösningar (PayPal / Stripe / O'Pay / ECPay) samt YouTubes medlemshändelser och Juveler kan inte användas i testversionen, och overlayen visar en vattenstämpel. Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::

## Vanliga frågor

**Q: Totalen ökade efter att jag skickade en testavisering.**
**Testavisering** på sidan Inställningar räknas som en riktig donation, så den läggs till i stapeln (om plattformen är markerad). Klicka på **Nollställ** efter testet för att sätta tillbaka totalen till noll.
