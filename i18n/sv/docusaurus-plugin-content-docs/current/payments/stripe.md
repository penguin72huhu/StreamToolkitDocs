---
sidebar_position: 3
---

# Stripe-inställningar

Stream Toolkit tar emot Stripe-betalingsaviseringar via Webhooks. Inställningen är uppdelad i två delar: att hämta Webhook-URL:en från appen och att slutföra kopplingen i Stripe-panelen.

## Steg 1: Hämta Webhook-URL:en i Stream Toolkit

1. Öppna Stream Toolkit
2. Klicka på **Inställningar** i den nedre vänstra menyn → **Donationsplattformar** → **Stripe** (Klicka för att fälla ut)
3. Du kommer att se **Webhook URL**, med följande format:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. Klicka på knappen **Kopiera** och spara denna URL-adress för senare bruk

![Get webhook URL](./stripe-img/step1.png)

## Steg 2: Lägg till en Webhook i Stripe-panelen

1. Gå till [Stripe Dashboard](https://dashboard.stripe.com) och logga in på ditt konto
2. Klicka på **Utvecklare** → **Webhooks** i det nedre vänstra hörnet

![Stripe webhook list page](./stripe-img/step2-1.png)

3. Klicka på **Lägg till slutpunkt**

![Add destination](./stripe-img/step2-2.png)

4. Fyll i följande information:
   - **Händelser**: Sök efter och bocka i `checkout.session.completed` (endast denna behövs)

   ![Select events](./stripe-img/step2-3.png)

   - **Slutpunkttyp**: Välj **Webhook-slutpunkt**

   ![Select destination type](./stripe-img/step2-4.png)

   - **Slutpunktsnamn**: Fyll i valfritt namn (t.ex. `Stream Toolkit`)
   - **Slutpunkts-URL**: Klistra in Webhook-URL:en som du kopierade i steg 1

   ![Enter name and URL](./stripe-img/step2-5.png)

5. Klicka på **Lägg till slutpunkt**

## Steg 3: Ange signeringsnyckel

1. När Webhooken har skapats visar sidan **signeringsnyckeln** i formatet `whsec_...`
2. Kopiera denna nyckel
3. Gå tillbaka till Stripe-inställningarna i Stream Toolkit
4. Klistra in nyckeln i fältet **Webhook-signeringsnyckel**
5. Klicka på **Spara**

När anslutningsstatusen blir grön är konfigurationen klar.

![Paste signing secret](./stripe-img/step3.png)

## Klart

När konfigurationen är klar och tittarna betalar via din Stripe-**Payment Link**, kommer Stream Toolkit att ta emot aviseringar i realtid och visa donationen.

## Vanliga frågor

**Q: Var kan jag skapa en Payment Link?**
Gå till Stripe Dashboard → **Payment Links** → **Skapa Payment Link**, ställ in beloppet och dela länken med dina tittare.

**Q: Anslutningsstatusen blev inte grön?**
Se till att Webhook-signeringsnyckel har klistrats in och sparats korrekt, och att slutpunkts-URL:en i Stripe-panelen exakt matchar den som visas i appen.
