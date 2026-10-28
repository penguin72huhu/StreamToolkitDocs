---
sidebar_position: 13
---

# Emote Wall

When viewers use emotes in chat, the emotes float across your stream.

:::note Before you start
The Emote Wall reads emotes from chat, so connect the platforms you use first. See [Twitch Settings](../platforms/twitch.md) and [YouTube Settings](../platforms/youtube-settings.md).
:::

## Step 1: Add the OBS Source

Copy the **OBS Source URL** at the top of the page:

```
http://127.0.0.1:7272/emote-wall
```

Add it to OBS as a browser source. See [How to Add Sources in OBS](../getting-started/obs-source.md). The Emote Wall plays no sound, so you don't need to turn on "Control audio via OBS".

:::tip
Also turn on the switch next to **Emote Wall** in the left sidebar (**Turn on OBS output**). While it is off, emotes from chat are not sent to the overlay.
:::

## Step 2: Choose Sources

Under **Source** there is a card for **Twitch** and one for **YouTube**. Each card shows the connection status:

- Twitch shows **(Not connected)** when your Twitch account isn't connected
- YouTube shows **Chat URL not connected** when YouTube chat isn't connected

Check **Enable Emote Wall** on a card to show emotes from that platform's chat. Uncheck it to ignore that platform.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Step 3: Animation Settings

| Setting | Description |
|---------|-------------|
| **Emote Size** | Size of each emote, 16–256 px |
| **Max emotes per message** | Up to this many emotes are taken from one chat message (1–20) |
| **Float Duration** | How long each emote floats, 1–30 seconds |
| **Float Speed** | 50–500 px/s |

Click **Reset to Default** next to the section title to restore all four values.

## Step 4: Test

Click **Test (show in OBS)** to send sample Twitch emotes to the overlay with your current settings. The number of test emotes follows **Max emotes per message**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Trial version limits
The OBS overlay shows a watermark while emotes are on screen. See [Trial vs. Full Version](../getting-started/trial-comparison.md) for details.
:::
