---
sidebar_position: 3
---

# PayPal-instellingen

Stream Toolkit gebruikt Webhooks om PayPal-betalingsmeldingen te ontvangen, dus het is nie nodig om een API-sleutel in te vullen.

## Stap 1: De Webhook-URL ophalen in Stream Toolkit

1. Open Stream Toolkit
2. Klik op **Instellingen** in het menu linksonder
3. Zoek naar **Donatieplatformkoppeling** → **PayPal**
4. Klik op de knop **URL ophalen**
5. Klik na het genereren van de URL op de knop **Kopiëren**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Waarschuwing
De Webhook-URL bevat een exclusief token, deel deze niet openbaar. Als u vermoedt dat deze is gelekt, kunt u op **URL opnieuw ophalen** klikken om een nieuwe aan te vragen (de oude URL vervalt onmiddellijk).
:::

## Stap 2: Inloggen op het PayPal Developer Dashboard

1. Ga naar [PayPal Developer](https://developer.paypal.com)
2. Klik rechtsboven op **Log in to Dashboard** en log in met uw PayPal-account
3. Klik na het inloggen op de knop **`</>`** rechtsboven om naar de ontwikkelaarsomgeving te gaan

![PayPal developer button at top right](./paypal-img/step2.png)

## Stap 3: Overschakelen naar Live-modus

Zorg ervoor dat de modusschakelaar boven het linkermenu op **Live** staat. U hoeft alleen over te schakelen als er **Sandbox** (testmodus) staat:

1. Zoek de schakelaar boven het linkermenu
2. Klik om over te schakelen naar **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Stap 4: Ga naar Webhooks-instellingen

1. Klik op **Apps & Credentials** in het linkermenu

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Zoek de knop **Manage Webhooks** op de pagina en klik erop om deze te openen

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Scroll naar beneden en klik op **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Stap 5: Webhook toevoegen

1. Plak de URL die u zojuist uit Stream Toolkit hebt gekopiëerd in het veld **Webhook URL**
2. Zoek in **Event types** naar de categorie **Payments & payouts** vink het volgende aan:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Klik op **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Zodra de instellingen zijn voltooid, ontvangt Stream Toolkit realtime meldingen wanneer kijkers via PayPal betalen.

## Veelgestelde vragen

**Q: Kan ik testen in de Sandbox-modus?**
Ja. In de Sandbox-modus kunt u ook een Webhook toevoegen om het betalingsproces te testen, maar u ontvangt geen echt geld.

**Q: Wat te doen als de Webhook-URL opnieuw is gegenereerd?**
U moet teruggaan naar het PayPal-dashboard en de oude Webhook-URL vervangen door de nieuwe.
