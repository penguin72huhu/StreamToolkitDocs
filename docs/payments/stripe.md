---
sidebar_position: 3
---

# Stripe Settings

Stream Toolkit receives Stripe payment notifications via Webhooks. The setup consists of two parts: obtaining the Webhook URL from the app, and completing the integration in the Stripe Dashboard.

## Step 1: Get the Webhook URL in Stream Toolkit

1. Open Stream Toolkit
2. Click **Settings** in the bottom left menu → **Donation Platform Integration** → **Stripe** (Click to expand)
3. You will see the **Webhook URL**, formatted as follows:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. Click the **Copy** button and save this URL for later use

![Get webhook URL](./stripe-img/step1.png)

## Step 2: Add a Webhook in the Stripe Dashboard

1. Go to [Stripe Dashboard](https://dashboard.stripe.com) and log in to your account
2. Click **Developers** → **Webhooks** in the bottom left corner

![Stripe webhook list page](./stripe-img/step2-1.png)

3. Click **Add endpoint**

![Add destination](./stripe-img/step2-2.png)

4. Fill in the following information:
   - **Events**: Search for and check `checkout.session.completed` (only this one is needed)

   ![Select events](./stripe-img/step2-3.png)

   - **Endpoint type**: Select **Webhook endpoint**

   ![Select destination type](./stripe-img/step2-4.png)

   - **Endpoint name**: Fill in anything you like (e.g., `Stream Toolkit`)
   - **Endpoint URL**: Paste the Webhook URL copied from Step 1

   ![Enter name and URL](./stripe-img/step2-5.png)

5. Click **Add endpoint**

## Step 3: Enter the Signing Secret

1. Once the Webhook is created, the page will display the **Signing Secret** in the format `whsec_...`
2. Copy this secret
3. Return to the Stripe settings section in Stream Toolkit
4. Paste the secret into the **Webhook Signing Secret** field
5. Click **Save**

The setup is successful when the connection status turns green.

![Paste signing secret](./stripe-img/step3.png)

## Done

Once the setup is complete, when viewers make payments through your Stripe **Payment Link**, Stream Toolkit will receive real-time notifications and display the donation.

## FAQ

**Q: Where can I create a Payment Link?**
Go to Stripe Dashboard → **Payment Links** → **Create Payment Link**, set the amount, and share the link with your viewers.

**Q: Why is the connection status not green?**
Ensure the Webhook Signing Secret is correctly pasted and saved, and that the endpoint URL in the Stripe Dashboard exactly matches the one displayed in the app.
