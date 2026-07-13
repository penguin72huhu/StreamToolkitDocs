---
sidebar_position: 1
---

# O'Pay-instellingen

Deze handleiding legt uit hoe u de **HashKey** en **HashIV** van O'Pay kunt verkrijgen en invoeren in Stream Toolkit.

## Stap 1: Inloggen op het O'Pay Merchant Dashboard

1. Ga naar de [officiële O'Pay-website](https://www.opay.tw/) en log in
2. Klik na het inloggen rechtsboven om naar het merchant-dashboard te gaan

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
Als u nog geen O'Pay-account heeft, moet u eerst de winkelaanvraag en identiteitsverificatie voltooien.
:::

## ขั้นตอนที่ 2: การจัดการการพัฒนาระบบ

1. Zoek **Systeemontwikkelingsbeheer** in het linkermenu
2. Klik op **Systeemintegratie-instellingen**

![System interface setup in system development menu](./opay-img/step2.png)

## Stap 3: Invoeren in Stream Toolkit

1. Open Stream Toolkit
2. Klik op **Instellingen** in het menu linksonder
3. Zoek **O'Pay** bij **Donatieplatformkoppeling**
4. Plak de **ALL IN ONE Integratie-HashKey** en **ALL IN ONE Integratie-HashIV** uit de **Systeemintegratie-instellingen** in de velden **Hash Key** en **Hash IV**

   ![O'Pay interface info](./opay-img/step3-4.png)

5. Klik op **Opslaan**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## Stap 4: Instellen notificatie-URL

1. Kopieer de **Notificatie-URL (achtergrond)** van O'Pay

   ![Copy the notification URL](./opay-img/step4-1.png)

2. Ga terug naar de [officiële O'Pay-website](https://www.opay.tw/) en klik op **Betalingen ontvangen** → **Streamer-betalingsinstellingen**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. Plak de **Notificatie-URL (achtergrond)** in het veld **URL voor melding van geslaagde donatiebetaling**

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. Klik op **Instellingen opslaan**

## Veelgestelde vragen

**Q: Kan het menu "Systeemontwikkelingsbeheer" niet vinden?**
Dit betekent dat uw account nog niet is goedgekeurd of dat de relevante betalingsfuncties nog niet zijn ingeschakeld. Neem contact op met de klantenservice van O'Pay.

**Q: Kan de HashKey openbaar worden gemaakt?**
Nee. HashKey en HashIV zijn privésleutels; deel geen schermafbeeldingen en plaats ze niet op openbare plaatsen.
