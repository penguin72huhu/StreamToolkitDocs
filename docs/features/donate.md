---
sidebar_position: 7
---

# Donation Goal Bar

Shows a progress bar on stream toward a donation goal. Donations from the platforms you choose are added to the total automatically.

## OBS Source URL

```
http://127.0.0.1:7272/donate
```

Copy the URL from the top of the **Donation Goal Bar Settings** page and add it to OBS as a Browser Source. See [How to Add Sources in OBS](../getting-started/obs-source).

Use the switch next to **Donation Goal Bar** in the left sidebar to show or hide the bar in OBS. When it is off, the bar is hidden.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Currency

The bar uses the **Donation Currency** set on the **Settings** page. Donations in other currencies are converted to this currency before they are added. If a donation's currency cannot be converted, it is not added to the bar (Donation Alerts and the Donation Board still show it in its original currency).

## Settings Tab

### Integrated Platform

Tick the platforms whose donations should count toward the bar:

- **Twitch** — Bits and subscriptions
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

A green dot means the platform is connected; otherwise the row shows **(Not connected)**. These checkboxes only decide what the bar counts. They do not affect Donation Alerts or the Donation Board, which have their own platform lists.

- **YouTube**: if the live chat is not linked, the row shows **Chat URL not connected** with two buttons: **Auto-connect** (needs Google sign-in) and **Enter manually** (takes you to the chat URL field in Settings). See [YouTube Settings](../platforms/youtube-settings).
- **YouTube ⚙️**: choose which **Counted events** are added to the bar: **Super Chat**, **Super Sticker**, **New member**, **Membership renewal**, **Gifted membership**, **Jewels**. **Jewels** needs Google sign-in.
- If any membership event is ticked but no membership prices are set, **⚠ No membership prices** appears. Click it to go to Settings and enter the tier prices under YouTube **Conversion Settings**.
- How much Twitch Bits and subscriptions are worth is set in Settings → Twitch → **Conversion Settings**. See [Twitch Settings](../platforms/twitch).
- To connect PayPal, Stripe, O'Pay or ECPay, see [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) and [ECPay](../payments/ecpay).

### Current Progress

Shows the current total, the goal and the percentage.

| Field | Description |
|-------|-------------|
| **Title** | Optional. Shown above the bar. |
| **Goal Amount** | The target amount, in your donation currency. |
| **Manual Add** | Enter an amount and click **Add** (or press Enter) to add it to the total. |
| **Reset** | Sets the current total back to zero. A confirmation appears first. This cannot be undone. |

## Appearance Tab

### Preview

The preview shows the bar with sample amounts. Use the color picker next to **Preview** to change the preview background. Tick **Preview Reached** to see the bar in its completed state.

### Font and Color

Click **Reset to Default** to restore the default appearance.

- **Font**: set the font, color and size (8–72 px) for **Title**, **Amount** and **Percentage**.
- **Color**: set **Background**, **Goal Bar** (fill color) and **Goal Bar Complete** (fill color once the goal is reached).

### Custom CSS

Expand **Custom CSS** to edit the bar's CSS. **Reset to Default** restores the default CSS, and **Manage Assets** opens the asset manager for images you want to use in your CSS. Steam Workshop themes can also be applied here. While a theme is applied, the CSS is read-only until you restore it. See [Themes](./themes).

:::info Trial Version
Custom CSS is only available in the full version. Real payment gateways (PayPal / Stripe / O'Pay / ECPay) and the YouTube membership events and Jewels can't be used in the trial, and the overlay shows a watermark. See [Trial / Full Version Comparison](../getting-started/trial-comparison).
:::

## FAQ

**Q: The total went up after I sent a test alert.**
The **Test Alert** on the Settings page counts as a real donation, so it is added to the bar (if that platform is ticked). After testing, click **Reset** to set the total back to zero.
