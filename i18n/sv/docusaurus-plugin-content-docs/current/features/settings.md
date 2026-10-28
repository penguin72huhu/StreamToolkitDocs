---
sidebar_position: 19
---

# Inställningar

Klicka på **⚙️ Inställningar** längst ner i vänstermenyn. Den här sidan innehåller appövergripande alternativ, plattformsanslutningar och betalningslösningar för donationer.

## Allmänt

| Alternativ | Vad det gör | Standard |
|------|------|------|
| **Tema** | Gränssnittets visningsläge: **Dämpad** eller **Ljus** | Dämpad |
| **Språk** | Gränssnittsspråk; byts direkt | — |
| **Minimera till aktivitetsfältet vid X** | När du stänger fönstret minimeras det till systemfältet i stället för att avslutas | På |
| **Donationsvaluta** | Global valutaenhet, används av donationsstapeln, aviseringar och alla andra beloppsvisningar | Ställs in vid första start utifrån systemets språk (t.ex. traditionell kinesiska (Taiwan) → TWD, japanska → JPY, övriga → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Plattformsanslutning

### Twitch

Klicka på **Anslut konto** och auktorisera i webbläsaren. När anslutningen är klar visas **Ansluten @ditt-namn** och knappen **Koppla från**. Fullständiga steg: [Twitch Inställningar](../platforms/twitch).

Efter anslutningen ställer du under **▸ Omräkningsinställningar** in vad Bits och prenumerationer är värda i din donationsvaluta:

- **Intäktsdelning**: **50 / 50** eller **70 / 30**
- **Per 100 Bits**, **Tier 1-prenumeration**, **Tier 2-prenumeration**, **Tier 3-prenumeration**
- **Spara** sparar värdena för den aktuella valutan; **Återställ standard** fyller i de inbyggda värdena för den valutan

### YouTube

1. Klicka på **Anslut konto** och logga in med Google. Steg för steg: [YouTube-inställningar](../platforms/youtube-settings)
2. När anslutningen är klar visas **Ansluten: kanalnamn**. **Koppla från** kopplar bort kontot
3. Välj hur livechatten ska hittas:
   - **Hitta den pågående sändningen**: kräver Google-inloggning. Klicka på **Anslut** för att söka i din kanal efter den pågående eller kommande sändningen. Om det finns flera, välj en i listan
   - **Ange en URL manuellt**: klistra in **Chattadress**
4. **Fråga efter chattadress varje gång programmet startar**: valfritt

**▸ Omräkningsinställningar** under YouTube ställer in vad medlemskap är värda (YouTube skickar inget belopp för medlemskap):

- **Medlemsnivåer**: lägg till varje nivås namn och dess värde. Nivånamnen måste exakt matcha din YouTube-kanal
- **Ej listade nivåer**: värde som används för en nivå som inte finns i tabellen
- **Nivå för skänkta medlemskap**: vilken nivå skänkta medlemskap räknas som
- Nivåer som har förekommit i händelser men saknas i tabellen listas med **Lägg till i tabellen** / **Ignorera**

## Donationsplattformar

Klicka på en betalningslösning för att expandera den. Var och en har länken **Klicka här för guide** till sin installationsguide:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Testavisering

Knappen **Testavisering** bredvid rubriken öppnar ett testfönster:

- Fyll i **Testnamn**, **Testmeddelande**, **Testbelopp**, välj **Testplattform** och klicka sedan på **Skicka testavisering**
- **Test av YouTube Super Chat**: ange en **Beloppssträng** som `$5.00` eller `NT$150` och klicka på **Skicka test-Super Chat** för att testa tolkning av belopp och valutaomräkning

## Om

Klicka på knappen **i** bredvid ”Stream Toolkit” högst upp i vänstermenyn för att se version, upphovsperson och en länk till den officiella dokumentationen.

:::info Begränsningar i testversionen
- **Donationsplattformar** finns bara i fullversionen
- **Omräkningsinställningar** för YouTube-medlemskap finns bara i fullversionen

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::
