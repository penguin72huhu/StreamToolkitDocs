---
sidebar_position: 3
---

# PayPal-inställningar

Stream Toolkit använder Webhooks för att ta emot PayPal-betalningsaviseringar, så det finns inget behov av att ange en API-nyckel.

## Steg 1: Hämta Webhook-URL:en i Stream Toolkit

1. Öppna Stream Toolkit
2. Klicka på **Inställningar** i den nedre vänstra menyn
3. Hitta **Donationsplattformar** → **PayPal**
4. Klicka på knappen **Hämta adress**
5. När URL-adressen har skapats, klicka på knappen **Kopiera**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Varning
Webhook-URL:en innehåller ett exklusivt token, dela den inte offentligt. Om du misstänker att den har läckt ut kan du klicka på **Hämta ny adress** för att skapa en ny (den gamla URL:en blir ogiltig omedelbart).
:::

## Steg 2: Logga in på PayPal Developer Dashboard

1. Gå till [PayPal Developer](https://developer.paypal.com)
2. Klicka på **Log in to Dashboard** i det övre högra hörnet och logga in med ditt PayPal-konto
3. Efter inloggning, klicka på **`</>`**-knappen i det övre högra hörnet för att gå till utvecklarpanelen

![PayPal developer button at top right](./paypal-img/step2.png)

## Steg 3: Växla till Live-läge

Se till att lägesomkopplaren ovanför vänstermenyn är inställd på **Live**. Du behöver bara växla om den visar **Sandbox** (testläge):

1. Leta upp reglaget ovanför vänstermenyn
2. Klicka för att växla till **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Steg 4: Gå till Webhooks-inställningar

1. Klicka på **Apps & Credentials** i vänstermenyn

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Leta upp knappen **Manage Webhooks** på sidan och klicka på den

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Bläddra längst ner på sidan och klicka på **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Steg 5: Lägg till Webhook

1. Klistra in URL-adressen du just kopierade från Stream Toolkit i fältet **Webhook URL**
2. Under **Event types**, hitta kategorin **Payments & payouts** och bocka i:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Klicka på **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

När inställningarna är klara kommer Stream Toolkit att ta emot aviseringar i realtid när tittare betalar via PayPal.

## Vanliga frågor

**Q: Kan jag testa i Sandbox-läge?**
Ja. I Sandbox-läge kan du också lägga till en Webhook för att testa betalningsflödet, men inga riktiga pengar kommer att tas emot.

**Q: Vad gör jag om Webhook-URL:en har genererats på nytt?**
Du måste gå tillbaka till PayPal-panelen och ändra den gamla Webhook-URL:en till den nya.
