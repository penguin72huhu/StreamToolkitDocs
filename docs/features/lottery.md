---
sidebar_position: 16
---

# Giveaways

Viewers join by typing a keyword in Twitch or YouTube chat. When entry closes, draw winners at random, and the draw animation plays on the OBS overlay.

## OBS Source URL

```
http://127.0.0.1:7272/lottery
```

Click **Copy** next to **OBS Source URL** at the top of the page, then add it to OBS as a browser source. See [How to Add Sources in OBS](../getting-started/obs-source.md). Giveaways plays no sound, so you don't need to turn on "Control audio via OBS".

:::tip
Also turn on the switch next to **Giveaways** in the left sidebar (**Turn on OBS output**). While it is off, the overlay stays hidden.
:::

The page has two tabs: **Settings** and **History**.

## Settings

### Poll Platform

Click **Twitch** or **YouTube** to choose which platform's chat can enter. You can pick both. A platform that isn't connected shows **(Not connected)** for Twitch or **Chat URL not connected** for YouTube. To connect, see [Twitch Settings](../platforms/twitch.md) and [YouTube Settings](../platforms/youtube-settings.md).

### Giveaway Keyword

A chat message that contains this keyword enters the viewer. Each viewer can enter only once per giveaway. **Start Collecting** can't be clicked while the keyword is empty.

### Giveaway Duration

How long entry stays open, in seconds. The default is 300 and the range is 10–3600.

### Max Participants

Entry closes early once this many people have joined. Enter `0` for no limit.

### Remove option after draw

When this is on, a winner is removed from the entrants before the next draw, so they can't be drawn again in that giveaway.

### Hint Text

The hint shown on the overlay during entry, which tells viewers the keyword and the entrant count. Set its font, color and size (px).

### Giveaway Animation

- **Rapid ID Shuffle** (default): entrants' names float on screen while entry is open, then cycle quickly during the draw
  - **Collection Screen Font**: font, font size, and the colors of the name chips (up to 5)
  - **Draw Animation Font**: font and font size of the name cycling during the draw
  - **Reset to Default**: restores these settings
- **Wheel Animation**: entrants are placed on a wheel that spins to pick the winner. Choose a color scheme: **Minimal** or a custom theme you made in [Spin Wheel](./turntable.md)

While entry is open, you can't change the platforms, keyword, duration, max participants, Remove option after draw, or animation type.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Running a Giveaway

1. Click **Start Collecting**. The panel shows **Collecting…**, the time left and the number of entrants
2. While entry is open, you can type a name in **Manually enter entrant name** and click **Add** (or press Enter). A name that is already on the list shows "This ID is already in the list"
3. To close entry before time runs out, click **End Collecting**. Entry also closes when time runs out or **Max Participants** is reached. The panel then shows **Time's up!**
4. Click **Draw**. The overlay plays the animation, and when it ends the winner appears under **Winner**
5. To draw another winner, click **Draw Again**

Click **Cancel Giveaway** at any stage to clear all entrants and winners, and the overlay goes back to waiting.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## History

The **History** tab keeps one record per giveaway with the time, keyword and number of entrants. Expand a record to see the winners and the full entrant list. Only the last 30 days of giveaway history is kept. To delete a record, click 🗑 and then **Confirm Delete**.

:::info Trial version limits
The OBS overlay shows a watermark. See [Trial / Full Version Comparison](../getting-started/trial-comparison.md) for details.
:::
