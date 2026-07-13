---
sidebar_position: 3
---

# PayPal Settings

Stream Toolkit uses Webhooks to receive PayPal payment notifications, so there is no need to enter an API key.

## Step 1: Get the Webhook URL in Stream Toolkit

1. Open Stream Toolkit
2. Click **Settings** in the bottom left menu
3. Find **Donation Platform Integration** → **PayPal**
4. Click the **Get URL** button
5. Once the URL is generated, click the **Copy** button

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Warning
The Webhook URL contains a private token; please do not share it publicly. If you suspect it has been leaked, you can click **Regenerate URL** to issue a new one (the old URL will become invalid immediately).
:::

## Step 2: Log in to the PayPal Developer Dashboard

1. Go to [PayPal Developer](https://developer.paypal.com)
2. Click **Log in to Dashboard** in the top right corner and log in with your PayPal account
3. After logging in, click the **`</>`** button in the top right corner to enter the developer backend

![PayPal developer button at top right](./paypal-img/step2.png)

## Step 3: Switch to Live Mode

Make sure the mode switch above the left menu is set to **Live**. You only need to switch if it shows **Sandbox** (test mode):

1. Locate the toggle switch above the left menu
2. Click to switch to **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Step 4: Go to Webhooks Settings

1. Click **Apps & Credentials** in the left menu

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Locate the **Manage Webhooks** button on the page and click it to enter

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Scroll to the very bottom of the page and click **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Step 5: Add Webhook

1. Paste the URL you just copied from Stream Toolkit into the **Webhook URL** field
2. In **Event types**, find the **Payments & payouts** category and check:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Click **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Once the settings are complete, when viewers make payments through PayPal, Stream Toolkit will receive notifications in real time.

## FAQ

**Q: Can I test in Sandbox mode?**
Yes. You can also add a Webhook in Sandbox mode to test the payment process, but no real money will be received.

**Q: What should I do if the Webhook URL is regenerated?**
You need to return to the PayPal Dashboard and replace the old Webhook URL with the new one.
