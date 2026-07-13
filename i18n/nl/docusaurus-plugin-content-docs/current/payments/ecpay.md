---
sidebar_position: 2
---

# ECPay-instellingen

Deze handleiding legt uit hoe u de **HashKey** en **HashIV** van ECPay kunt verkrijgen en invoeren in Stream Toolkit.

## Stap 1: Inloggen op het ECPay Merchant Dashboard

1. Ga naar de [officiële ECPay-website](https://www.ecpay.com.tw/)
2. Klik rechtsboven op **Verkoperslogin** → **Merchant-zone**

## Stap 2: Ga naar Systeemintegratie-instellingen

1. Klik op **Systeeminstellingen** in het linkermenu
2. Selecteer **Systeemintegratie-instellingen**

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. Zoek de **Integratie-Hash Key** en **Integratie-Hash IV**

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## Stap 3: Invoeren in Stream Toolkit

1. Open Stream Toolkit
2. Klik op **Instellingen** in het menu linksonder
3. Zoek **ECPay** bij **Donatieplatformkoppeling**
4. Plak de **Integratie-HashKey** en **Integratie-HashIV** uit de **Systeemintegratie-instellingen** in de velden **Hash Key** en **Hash IV**
5. Klik op **Opslaan**

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## Stap 4: Instellen notificatie-URL

1. Kopieer de **Notificatie-URL (achtergrond)** van ECPay

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. Zoek in het ECPay Merchant Dashboard naar **Betalingstools** → **Streamer-betalingen**

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. Plak de **Notificatie-URL (achtergrond)** in het veld **URL voor retourmelding van voltooide betaling**

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. Klik op **Instellingen opslaan**

## Veelgestelde vragen

**Q: "Systeeminstellingen" niet zichtbaar na inloggen?**
Uw account heeft het verificatieproces mogelijk nog niet voltooid. Ga naar "Merchant-gegevensbeheer" om de status te controleren.

**Q: Kan de HashKey openbaar worden gemaakt?**
Nee. HashKey en HashIV zijn privésleutels; deel geen schermafbeeldingen en plaats ze niet op openbare plaatsen.
