---
sidebar_position: 8
---

# Donation Alerts

Pops up an alert with an image, sound, donor name, amount and message when someone donates.

## OBS Source URL

```
http://127.0.0.1:7272/donate-alert
```

Copy the URL from the top of the **Donation Alerts Settings** page and add it to OBS as a Browser Source. See [How to Add Sources in OBS](../getting-started/obs-source.md).

:::warning
Alerts play a sound. Tick **Control audio via OBS** in the browser source properties, or the sound won't be heard on stream.
:::

Use the switch next to **Donation Alerts** in the left sidebar to turn alerts on or off. While it is off, no alerts are shown (test alerts included), but donations are still recorded on the [Donation Board](./sponsors.md).

When several donations arrive close together, the alerts are queued and shown one after another.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Settings Tab

### Integrated Platform

Tick the platforms that should trigger an alert: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. A green dot means the platform is connected; otherwise the row shows **(Not connected)**. These checkboxes only affect alerts, not the Donation Goal Bar or Donation Board.

**Twitch ⚙️** (shown when Twitch is connected and ticked):

1. Choose **Count Bits and subscriptions**, **Count Bits only** or **Count subscriptions only**
2. **Count Resubscriptions**: whether resubscriptions trigger an alert (shown when subscriptions are counted)
3. **Below [N] Bits are not counted**: tick it and enter a minimum so smaller cheers don't trigger an alert (shown when Bits are counted)
4. Click **Save**

**YouTube ⚙️**:

- **Show viewer names instead of @handles**: only available once you sign in with Google.
- **Counted events**: **Super Chat**, **Super Sticker**, **New member**, **Membership renewal**, **Gifted membership**, **Jewels**. **Jewels** needs Google sign-in.

If the YouTube live chat is not linked, the row shows **Chat URL not connected** with **Auto-connect** (needs Google sign-in) and **Enter manually** (takes you to the chat URL field in Settings). If a membership event is ticked but no membership prices are set, click **⚠ No membership prices** to go set them. See [YouTube Settings](../platforms/youtube-settings.md).

To connect PayPal, Stripe, O'Pay or ECPay, see [PayPal](../payments/paypal.md), [Stripe](../payments/stripe.md), [O'Pay](../payments/opay.md) and [ECPay](../payments/ecpay.md).

### Settings

| Field | Description |
|-------|-------------|
| **Auto-convert to my currency** | On by default. Shows the amount converted to the **Donation Currency** set on the Settings page. |
| **Display Duration** | How long each alert stays on screen, in seconds. Default: 6. |

## Appearance Tab

### Preview

The preview uses the same page as the OBS source. Use the color picker next to **Preview** to change the preview background, and click **▶ Replay animation** to play the alert animation again.

### Unified Style / Per Platform

- **Unified Style**: all platforms use the same alert style.
- **Per Platform**: each platform has its own style. Pick the platform with the buttons below (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) and edit its settings. When you first switch, platforms you haven't customized copy the current unified style, each with its own countdown bar color.

**Reset to Default** restores the default style for the style you are editing.

### Image

- **Choose Image**: pick an image from the asset manager. Without one, a heart emoji is shown. **Clear** removes the image.
- **Image Size**: 1–400 px.
- **Image Position**: **Left**, **Right**, **Top** or **Bottom**.

### Sound

Pick a built-in sound: **None**, **Chime** (default), **Coin**, **Bell**, **Pop**, **Fanfare**. Click **▶** to listen. Click **Choose Sound** to use your own sound file from the asset manager.

### Text Display

- **Default**: amount, donor name and message are shown on separate lines.
- **Custom Text**: write your own line. Use `{name}` for the donor name and `{amount}` for the amount, e.g. `Thanks {name} for donating {amount}!`

### Text and Color

- **Text**: set font, size and color for **Amount**, **Donor Name** and **Message** (plus **Custom Text** in Custom Text mode).
- **Color**: **Background**, **Shadow** and **Countdown Bar**.

### Custom CSS

Expand **Custom CSS** to edit the CSS of the style you are editing (unified or the selected platform). **Reset to Default** restores the template CSS, and **Manage Assets** opens the asset manager. Steam Workshop themes can also be applied here. While a theme is applied, the CSS is read-only. See [Themes](./themes.md).

## Testing Alerts

On the **Settings** page, click **Test Alert** next to **Donation Platform Integration**:

1. Fill in **Test Name**, **Test Message** and **Test Amount**, choose a **Test Platform**
2. Click **Send Test Alert**

The **YouTube Super Chat Test** section lets you enter a raw **Amount String** (e.g. `$5.00`, `¥500`, `NT$150`) and click **Send Test Super Chat** to test amount parsing and currency conversion.

:::note
A test alert is handled like a real donation: it is also added to the [Donation Goal Bar](./donate.md) and the [Donation Board](./sponsors.md) if those platforms are ticked there.
:::

:::info Trial Version
Custom CSS is only available in the full version. Real payment gateways (PayPal / Stripe / O'Pay / ECPay) and the YouTube membership events and Jewels can't be used in the trial, and the alert shows a watermark in OBS. See [Trial / Full Version Comparison](../getting-started/trial-comparison.md).
:::

## FAQ

**Q: No sound on stream?**
Check that **Control audio via OBS** is ticked in the browser source properties and that the source isn't muted in the OBS mixer. Also check that **Sound** isn't set to **None**.

**Q: I added the OBS source late. Will it replay earlier alerts?**
No. A newly opened source only shows alerts that arrive after it connects.
