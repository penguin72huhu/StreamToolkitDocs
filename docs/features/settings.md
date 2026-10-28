---
sidebar_position: 19
---

# Settings

Click **⚙️ Settings** at the bottom of the left menu. This page holds app-wide options, platform connections, and donation payment gateways.

## General

| Option | What it does | Default |
|------|------|------|
| **Theme** | Interface display mode: **Dim** or **Light** | Dim |
| **Language** | Interface language; switches immediately | — |
| **Minimize to tray on X** | Closing the window minimizes it to the tray instead of quitting | On |
| **Donation Currency** | Global currency unit, used by the donation bar, alerts, and all other amount displays | Set on first launch from your system language (e.g. Traditional Chinese (Taiwan) → TWD, Japanese → JPY, other → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Platform Connections

### Twitch

Click **Connect Account** and authorize in the browser. Once connected it shows **Connected @your-name** and a **Disconnect** button. Full steps: [Twitch Settings](../platforms/twitch).

After connecting, **▸ Conversion Settings** sets what Bits and subs are worth in your donation currency:

- **Revenue Share**: **50 / 50** or **70 / 30**
- **Per 100 Bits**, **Tier 1 Sub**, **Tier 2 Sub**, **Tier 3 Sub**
- **Save** stores the values for the current currency; **Reset to Default** fills in the built-in values for that currency

### YouTube

1. Click **Connect Account** and sign in with Google. Step by step: [YouTube Settings](../platforms/youtube-settings)
2. Once connected, it shows **Connected: channel name**. **Disconnect** unlinks the account
3. Choose how to find the live chat:
   - **Detect the current stream**: needs Google sign-in. Click **Connect** to search your channel for the current or upcoming stream. If there are several, pick one from the list
   - **Enter a URL manually**: paste the **Chat URL**
4. **Prompt for the chat URL each time the app starts**: optional

**▸ Conversion Settings** under YouTube sets what memberships are worth (YouTube does not send an amount for memberships):

- **Membership tiers**: add each tier name and its value. Tier names must match your YouTube channel exactly
- **Unlisted tiers**: value used for a tier not in the table
- **Gifted membership tier**: which tier gifted memberships count as
- Tiers seen in events but missing from the table are listed with **Add to table** / **Ignore**

## Donation Platform Integration

Click a gateway to expand it. Each has a **Tutorial here** link to its setup guide:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Test Alert

The **Test Alert** button next to the heading opens a test window:

- Fill in **Test Name**, **Test Message**, **Test Amount**, choose **Test Platform**, then click **Send Test Alert**
- **YouTube Super Chat Test**: enter an **Amount String** such as `$5.00` or `NT$150` and click **Send Test Super Chat** to test amount parsing and currency conversion

## About

Click the **i** button next to "Stream Toolkit" at the top of the left menu to see the version, author, and a link to the official docs.

:::info Trial Version Limits
- **Donation Platform Integration** is only available in the full version
- YouTube membership **Conversion Settings** are only available in the full version

See [Trial / Full Version Comparison](../getting-started/trial-comparison).
:::
