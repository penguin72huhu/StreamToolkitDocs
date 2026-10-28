---
sidebar_position: 15
---

# Live Polls

Run a poll on stream. Viewers vote by typing an option number in Twitch or YouTube chat, and the results update live on the OBS overlay.

## OBS Source URL

```
http://127.0.0.1:7272/vote
```

Click **Copy** next to **OBS Source URL** at the top of the page, then add it to OBS as a browser source. See [How to Add Sources in OBS](../getting-started/obs-source.md). Live Polls plays no sound, so you don't need to turn on "Control audio via OBS".

:::tip
Also turn on the switch next to **Live Polls** in the left sidebar (**Turn on OBS output**). While it is off, the overlay stays hidden.
:::

The page has three tabs: **Settings**, **Appearance** and **History**.

## Starting a Poll (Settings tab)

### Poll Platform

Click **Twitch** or **YouTube** to choose which platform's chat can vote. You can pick both. A platform that isn't connected shows **(Not connected)** for Twitch or **Chat URL not connected** for YouTube. Connect it first:

- [Twitch Settings](../platforms/twitch.md)
- [YouTube Settings](../platforms/youtube-settings.md)

### Poll Title

Optional. For example: "Which game tonight?"

### Poll Options (2–10)

- Enter at least 2 options. You can have up to 10
- **+ Add Option** adds a row and **×** deletes one
- **Apply History** lets you pick one of your 15 most recent polls and fill in its title and options

While you edit, the OBS overlay previews the title and options.

### Poll Duration

The poll length in seconds. The default is 60 and the minimum is 10.

### Start / Stop

- **Start Poll**: needs at least 2 filled-in options and at least one selected platform that is connected
- **Stop Poll**: ends the poll early. Otherwise it ends when time runs out

While a poll is running, you can't change the platforms, title, options or duration.

{/* TODO: 截圖 — 投票設定分頁 */}

## How Viewers Vote

While the poll is running, the overlay shows "Type the option number in chat to vote (e.g. 1)".

- The whole message must be the option number, such as `1` or `1.`. Spaces are ignored. A message with any other text doesn't count
- Each viewer gets one vote. If they send a different number, their vote moves to the new option, and the last vote before time runs out counts

## Live Results

During the poll, **Live Results** appears below the settings with the time left, the vote count and percentage for each option, and the total votes. After the poll ends it changes to **Final Results**. Click **Details** to see who voted for each option, grouped by Twitch and YouTube.

## Appearance

The **Appearance** tab has a **Preview** at the top. The color picker next to it only changes the preview background, not the OBS overlay.

- **Font**: set the font, color and **Size** (px) for **Title**, **Hint**, **Option**, **Countdown** and **Vote Count**
- **Progress Bar Color**: up to 5 colors, used for the option bars in order. Each one can be **Solid** or **Gradient**. Gradients also have an **Angle**
- **Background Color**: the background of the poll card
- **Reset to Default**: restores the default appearance. If a theme is applied, it restores the theme's appearance

Under **Custom CSS** you can write your own styles. To share or download looks, see [Themes](./themes.md).

{/* TODO: 截圖 — 投票外觀分頁 */}

## History

The **History** tab lists each poll's title, time, number of options and total votes. Expand a poll to see its results, the vote count per platform, and **Details**. Only the last 30 days of poll history is kept. To delete a record, click 🗑 and then **Confirm Delete**.

:::info Trial version limits
- **Custom CSS** is only available in the full version
- The OBS overlay shows a watermark

See [Trial / Full Version Comparison](../getting-started/trial-comparison.md) for details.
:::
