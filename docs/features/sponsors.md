---
sidebar_position: 9
---

# Donation Board

Shows a list of recent donations on stream: platform icon, donor name, amount and message.

## OBS Source URL

```
http://127.0.0.1:7272/sponsors
```

Copy the URL from the top of the **Donation Board Settings** page and add it to OBS as a Browser Source. See [How to Add Sources in OBS](../getting-started/obs-source.md).

Use the switch next to **Donation Board** in the left sidebar to show or hide the board in OBS. When it is off, the board fades out. Donations are still recorded while it is off.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Settings Tab

### Integrated Platform

Tick the platforms whose donations should be recorded: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. A green dot means the platform is connected; otherwise the row shows **(Not connected)**. These checkboxes only affect the board, not the Donation Goal Bar or Donation Alerts.

**Twitch ⚙️** (shown when Twitch is connected and ticked):

1. Choose **Count Bits and subscriptions**, **Count Bits only** or **Count subscriptions only**
2. **Count Resubscriptions**: whether resubscriptions are recorded (shown when subscriptions are counted)
3. **Below [N] Bits are not counted**: tick it and enter a minimum so smaller cheers aren't recorded (shown when Bits are counted)
4. Click **Save**

**YouTube ⚙️**:

- **Show viewer names instead of @handles**: only available once you sign in with Google.
- **Counted events**: **Super Chat**, **Super Sticker**, **New member**, **Membership renewal**, **Gifted membership**, **Jewels**. **Jewels** needs Google sign-in. Jewels gifts are shown as a jewel icon with the number of jewels instead of a money amount.

If the YouTube live chat is not linked, the row shows **Chat URL not connected** with **Auto-connect** (needs Google sign-in) and **Enter manually** (takes you to the chat URL field in Settings). If a membership event is ticked but no membership prices are set, click **⚠ No membership prices** to go set them. See [YouTube Settings](../platforms/youtube-settings.md).

To connect PayPal, Stripe, O'Pay or ECPay, see [PayPal](../payments/paypal.md), [Stripe](../payments/stripe.md), [O'Pay](../payments/opay.md) and [ECPay](../payments/ecpay.md).

### Settings

| Field | Description |
|-------|-------------|
| **Auto-convert to my currency** | On by default. Shows amounts converted to the **Donation Currency** set on the Settings page. |
| **Max Display** | How many records to keep (1–100). Default: 20. When a new donation arrives beyond this limit, the oldest record is removed. |

## Appearance Tab

### Preview

Use the color picker next to **Preview** to change the preview background. Click **Test Add Animation** to play the entry animation with a sample record. The sample is not saved to the history.

Click **Reset to Default** to restore the default appearance.

### Display Settings

- **Show platform icon**: show the platform's icon on each record.
- **Entry Direction**: **Top to Bottom** (default), **Bottom to Top**, **Left to Right** or **Right to Left**.

### Font

Set the font, color and size (8–72 px) for **Title** (donor name), **Body** (message) and **Amount**.

### Background Color

- **Default**: background color for every record.
- **+ Add Range**: add a color with an **Amount** range (**Min** ~ **Max**). Records whose amount falls in the range use that color instead. Leave Min or Max empty for no limit on that side. Click **✕** to remove a range.

When **Auto-convert to my currency** is on, the range is compared against the converted amount.

### Custom CSS

Expand **Custom CSS** to edit the board's CSS. **Reset to Default** restores the default CSS, and **Manage Assets** opens the asset manager. Steam Workshop themes can also be applied here. While a theme is applied, the CSS is read-only. See [Themes](./themes.md).

## History Tab

### Manual Add (for testing)

Choose a platform, enter **Name**, **Amount** and an optional **Message (optional)**, then click **Add**. The record is only added if that platform is ticked under **Integrated Platform**. The amount is treated as your donation currency.

### History

Lists the saved records with the record count.

- Click **🗑** and then **Confirm Delete** to delete one record.
- Click **Clear** to delete all records. A confirmation appears first. This cannot be undone.

:::info Trial Version
Custom CSS is only available in the full version. Real payment gateways (PayPal / Stripe / O'Pay / ECPay) and the YouTube membership events and Jewels can't be used in the trial, and the board shows a watermark in OBS. See [Trial / Full Version Comparison](../getting-started/trial-comparison.md).
:::

## FAQ

**Q: Test alerts show up on the board.**
The **Test Alert** on the Settings page is handled like a real donation, so it is also recorded here if that platform is ticked. Delete it in the **History** tab.
