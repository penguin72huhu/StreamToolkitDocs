---
sidebar_position: 6
---

# Stream Highlight Marker

Press a shortcut during your stream to record "how far into the stream" a highlight happened. Later you can use the list of times to find highlights in your VOD when editing.

Markers are saved in Stream Toolkit. This feature has no OBS overlay, so you don't need to add an OBS source.

The page has two tabs: **Settings** and **Highlight Log**.

:::tip
Turn on the switch next to **Stream Highlight Marker** in the left sidebar. While it is off, neither the shortcut nor the **MARK** button adds a marker.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Step 1: Choose the Source

**Source** decides how the stream time is worked out:

| Source | How the time is worked out | Requirement |
|--------|----------------------------|-------------|
| **Twitch** | Time since your current Twitch stream started | Twitch connected. See [Twitch Settings](../platforms/twitch.md) |
| **YouTube** | Time since your current YouTube live stream started | Google sign-in. See [YouTube Settings](../platforms/youtube-settings.md) |
| **Manual Alignment** (default) | The value of the manual timer on this page | None |

A dot next to **Twitch** and **YouTube** shows whether it is connected. If not, the option shows **(Not connected)** or **(not signed in with Google)**.

If you mark while you're not live (or, for **Manual Alignment**, while the timer is stopped), the time is recorded as **Not streaming**. With the **Twitch** source this result can take about 20 seconds to appear, because Stream Toolkit retries a few times in case Twitch hasn't registered a stream that just started.

### Manual Timer

When **Manual Alignment** is selected, a **Manual Timer** appears:

1. Enter the current stream time as `HH:MM:SS` (for example `00:00:00` right when you go live)
2. Click **Start Sync Timer**. The timer starts counting up from that value
3. Every marker uses the timer's current value
4. Click **Stop** to stop the timer

### Create Twitch clip when marking

This option appears only when the source is **Twitch**. When it is on, each marker also creates a Twitch clip.

- You must be live. The clip is about 30 seconds long
- Clips are saved in Creator Dashboard → Content → Clips
- After marking, the page shows **Twitch clip created**, or why it failed: **Not live — cannot create clip**, **Missing permission — please reconnect Twitch**, **Twitch not connected** or **Failed — please try again**

## Step 2: Set the Shortcut

The default shortcut is `Ctrl+Shift+M`. To change it:

1. Click the shortcut button
2. Press the key combination you want, then release it. Press **Esc** to cancel
3. To remove it, click **Clear**

If the combination is already used by another feature, the button shows **This shortcut is already in use** and the shortcut is not saved. The shortcut works even when Stream Toolkit is not the active window.

You can also click the **MARK** button below the shortcut. It does the same thing as the shortcut. The [Quick Tools](./quick-tools.md) window has a **MARK** button too.

## Step 3: Mark During the Stream

1. (Optional) Type a name in **Marker Name** before you mark. If you leave it blank, markers are numbered automatically (`精華標記_1`, `精華標記_2`, …)
2. Press the shortcut or click **MARK**

The name you typed is used for the next marker only, and the field is cleared afterwards.

## Highlight Log

The **Highlight Log** tab lists all markers, newest first. Each row shows the stream time, the name, the source and the date and time you marked it.

- **Copy**: copies the marker as text, in the format `[date] name 🎬 stream time (source)`
- **🗑️**: click it, then **Confirm Delete** to delete the marker
- **Open Twitch clip**: appears when a Twitch clip was created for this marker. Opens the clip on Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Trial version limits
**Create Twitch clip when marking** is not available. It is shown as "Available in the full version".

See [Trial / Full Version Comparison](../getting-started/trial-comparison.md) for details.
:::
