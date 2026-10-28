---
sidebar_position: 8.1
---

# New Follower Alerts

Pops up an alert on stream when someone follows you on Twitch or subscribes to your YouTube channel.

## OBS Source URL

```
http://127.0.0.1:7272/fan-alert
```

Copy the URL from the top of the **New Follower Alerts Settings** page and add it to OBS as a Browser Source. See [How to Add Sources in OBS](../getting-started/obs-source.md).

:::warning
Alerts play a sound. Tick **Control audio via OBS** in the browser source properties, or the sound won't be heard on stream.
:::

Use the switch next to **New Follower Alerts** in the left sidebar to turn alerts on or off. While it is off, new followers are neither shown nor recorded, and the test buttons don't work either.

When several followers arrive close together, the alerts are queued and shown one after another. This overlay has its own queue, so it never waits behind [Donation Alerts](./donate-alert.md).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Settings Tab

### Integrated Platform

Tick the platforms that should trigger an alert: **Twitch** and **YouTube** (both ticked by default). A green dot means the platform is connected; otherwise the row shows **Not authorized**.

- **Twitch**: every new follow triggers an alert right away. Connect Twitch first: [Twitch Settings](../platforms/twitch.md).
- **YouTube**: new subscribers. Sign in with Google first: [YouTube Settings](../platforms/youtube-settings.md).

How YouTube subscribers are found:

- YouTube has no live "new subscriber" event, so the app asks YouTube for your most recent subscribers every 1.5 minutes.
- It only checks while you are live and your YouTube live chat is connected to that live broadcast. It doesn't check in the waiting room or after the stream has ended.
- People who subscribed before the stream started (more than about 5 minutes before checking began) are not announced.
- As the hint on the page says, **YouTube only alerts viewers whose subscriptions are public, and it can take minutes to hours.**

### Settings

| Field | Description |
|-------|-------------|
| **Display Duration** | How long each alert stays on screen, in seconds (1–60). Default: 5. |
| **Alert the same viewer at most once every 24 hours** | Off by default. When on, the same viewer following again within 24 hours (for example, unfollowing and following again) is not shown and not recorded. |

### Testing Alerts

Click **Test alert (Twitch)** or **Test alert (YouTube)** to send a sample alert to OBS. Test alerts are not added to the history.

If New Follower Alerts is turned off, the test doesn't play and the page shows **Turn on New Follower Alerts in Quick Toggles first**.

## Appearance Tab

### Preview

The preview uses the same page as the OBS source. Use the color picker next to **Preview** to change the preview background, and click **▶ Replay animation** to play the alert animation again.

### Unified Style / Per Platform

- **Unified Style**: Twitch and YouTube use the same alert style.
- **Per Platform**: each platform has its own style. Pick **Twitch** or **YouTube** with the buttons below and edit its settings. When you first switch, platforms you haven't customized copy the current unified style, each with its own countdown bar color.

**Reset to Default** restores the default style for the style you are editing.

### Image

- **Choose Image**: pick an image from the asset manager. Without one, a heart emoji is shown. **Clear** removes the image.
- **Image Size**: 1–400 px.
- **Image Position**: **Left**, **Right**, **Top** or **Bottom**.

### Sound

Pick a built-in sound: **None**, **Chime** (default), **Coin**, **Bell**, **Pop**, **Fanfare**. Click **▶** to listen. Click **Choose Sound** to use your own sound file from the asset manager.

### Custom Text

Write the line shown on the alert. Use `{name}` for the follower's name and `{platform}` for the platform name. Leave it empty to use the default text: `Welcome {name}, thanks for the follow!`

### Text and Color

- **Text**: set font, size and color for **Custom Text** and **Follower name**.
- **Color**: **Background**, **Shadow** and **Countdown Bar**.

### Custom CSS

Expand **Custom CSS** to edit the CSS of the style you are editing (unified or the selected platform). **Reset to Default** restores the template CSS, and **Manage Assets** opens the asset manager. Steam Workshop themes can also be applied here. While a theme is applied, the CSS is read-only. See [Themes](./themes.md).

## History Tab

Lists recent new followers from both platforms, newest first: platform, name and time. The history is only shown in the app, never on the overlay.

- Up to 100 followers are kept, and entries older than 30 days are removed automatically.
- Click **Clear** to empty the list.

:::info Trial Version
Custom CSS is only available in the full version, and the alert shows a watermark in OBS. See [Trial / Full Version Comparison](../getting-started/trial-comparison.md).
:::

## FAQ

**Q: No sound on stream?**
Check that **Control audio via OBS** is ticked in the browser source properties and that the source isn't muted in the OBS mixer. Also check that **Sound** isn't set to **None**.

**Q: A YouTube subscriber didn't get an alert.**
Only public subscriptions are reported, and YouTube can take minutes to hours to report them. The app also only checks while you are live with the YouTube live chat connected.

**Q: I added the OBS source late. Will it replay earlier alerts?**
No. A newly opened source only shows alerts that arrive after it connects. Earlier followers are still in the **History** tab.
