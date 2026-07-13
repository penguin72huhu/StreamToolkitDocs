---
sidebar_position: 2
---

# ECPay-inställningar

Denna handledning förklarar hur du hämtar **HashKey** och **HashIV** från ECPay och anger dem i Stream Toolkit.

## Steg 1: Logga in på ECPay Merchant Dashboard

1. Gå till [ECPay:s officiella webbplats](https://www.ecpay.com.tw/)
2. Klicka i det övre högra hörnet på **Säljarinloggning** → **Handlarzon**

## Steg 2: Gå till Systemintegrationsinställningar

1. Klicka på **Systeminställningar** i vänstermenyn
2. Välj **Systemintegrationsinställningar**

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. Hitta **Integrations-Hash Key** och **Integrations-Hash IV**

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## Steg 3: Ange i Stream Toolkit

1. Öppna Stream Toolkit
2. Klicka på **Inställningar** i den nedre vänstra menyn
3. Hitta **ECPay** under **Donationsplattformar**
4. Klistra in **Integrations-HashKey** och **Integrations-HashIV** från **Systemintegrationsinställningar** i fälten **Hash Key** respektive **Hash IV**
5. Klicka på **Spara**

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## Steg 4: Ställ in aviserings-URL

1. Kopiera ECPay:s **Bakgrundsaviseringsadress**

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. I ECPay Merchant Dashboard, hitta **Betalningsverktyg** → **Streamer-betalningar**

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. Klistra in **Bakgrundsaviseringsadress** i fältet **URL för återkoppling om slutförd betalning**

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. Klicka på **Spara inställningar**

## Vanliga frågor

**Q: Kan inte se "Systeminställningar" efter inloggning?**
Ditt konto kanske inte har slutfört verifieringsprocessen ännu. Gå till "Handlardatahantering" för att kontrollera status.

**Q: Kan HashKey göras offentlig?**
Nej. HashKey och HashIV är privata nycklar; vänligen dela inte skärmdumpar eller publicera dem offentligt.
