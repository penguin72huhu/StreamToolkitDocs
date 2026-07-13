---
sidebar_position: 2
---

# ECPay Settings

This tutorial explains how to obtain the **HashKey** and **HashIV** from ECPay and enter them into Stream Toolkit.

## Step 1: Log in to the ECPay Merchant Dashboard

1. Go to the [ECPay official website](https://www.ecpay.com.tw/)
2. Click **Seller Login** → **Merchant Zone** in the top right corner

## Step 2: Enter System Integration Settings

1. Click **System Settings** in the left menu
2. Select **System Integration Settings**

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. Find **Integration Hash Key** and **Integration Hash IV**

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## Step 3: Enter in Stream Toolkit

1. Open Stream Toolkit
2. Click **Settings** in the bottom left menu
3. Find **ECPay** in **Donation Platform Integration**
4. Paste the **Integration HashKey** and **Integration HashIV** from **System Integration Settings** into the **Hash Key** and **Hash IV** fields, respectively
5. Click **Save**

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## Step 4: Set Notification URL

1. Copy the ECPay **Webhook URL**

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. In the ECPay Merchant Dashboard, find **Payment Tools** → **Streamer Payments**

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. Paste the **Webhook URL** into the **Payment Completion Notification Return URL** field

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. Click **Save Settings**

## FAQ

**Q: Can't see "System Settings" after logging in?**
Your account may not have finished the verification process. Please go to "Merchant Data Management" to check the status.

**Q: Can HashKey be made public?**
No. HashKey and HashIV are private keys; please do not share screenshots or post them in public.
