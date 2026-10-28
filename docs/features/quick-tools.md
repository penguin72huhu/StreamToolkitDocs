---
sidebar_position: 1
---

# Quick Tools

**Quick Tools** is a small control window you can keep open next to your game or OBS. It lets you turn features on and off and use their most common controls without switching back to the main window.

## Opening Quick Tools

Use either of these:

- Click **⚡ Quick Tools** at the top of the left sidebar in the main window
- Right-click the Stream Toolkit tray icon and choose **Open Quick Tools**

If the window is already open, it comes to the front instead of opening a second one.

{/* TODO: 截圖 — 快速工具視窗 */}

## The Window

- **Move it**: drag the title bar
- **📌 Pin / Unpin**: keeps the window on top of other windows. Pinning is on when the window opens
- **✕**: closes the window

The window follows the app's theme and interface language.

## Quick Toggle Panel

Click the **›** arrow on the left edge to slide out the **Quick Toggle** panel. It lists every feature:

- The switch turns the feature on or off (same as the switch next to each feature in the main sidebar)
- **⚙** (**Open Settings**) brings up the main window on that feature's settings page

Click outside the panel or click the arrow again to close it.

The features are listed in the same order as the main sidebar. To change the order, drag the **⠿** handle next to a feature in the main window's sidebar.

## Feature Cards

Each enabled feature that has controls appears as a card. Cards start collapsed — click a card's title to expand or collapse it. If none of these features is on, the window shows **No features enabled yet**.

| Feature | What the card offers |
|---------|---------------------|
| [OBS Scene Control](./obs-scene) | Connection status, plus one button per configured scene switch or source toggle (the current scene is highlighted). Buttons are disabled while not connected. The card only appears once at least one hotkey entry exists |
| [Voice Translation](./voice-translate) | **REC** button — hold to record, release to translate |
| [Stream Highlight Marker](./highlight) | **MARK** button. After a mark, the platform icon and timestamp are shown for 5 seconds |
| [Donation Goal Bar](./donate) | Current / goal amount with a progress bar, a **Manually add amount** field with **Add**, and **Reset** |
| [Timer](./timer) | For each displayed timer: name, time, **Start** / **Pause**, **Reset**, and the add-time buttons you configured. Stopwatches show **Stop** and **Lap** instead |
| [Spin Wheel](./turntable) | For each displayed wheel: **Spin** and **Reset** |
| [Media Board](./multimedia) | Buttons for pinned images (show / hide), pinned videos (play) and pinned sounds (play) |
| [Song Requests](./song-request) | **Play** / **Pause**, **Stop**, **Next** |

If a control has a hotkey assigned, the hotkey is shown on its button.

Features with nothing to operate here (Chat, Twitch Goal Bar, Donation Alerts, Donation Board, Clock, Emote Wall, Live Polls, Giveaways, Chat Bot) only have their on/off switch in the Quick Toggle panel.

:::tip
**Reset** on the Donation Goal Bar card needs two clicks: the first click changes the button to **Confirm Reset**, and a second click within 10 seconds sets the amount to zero.
:::

:::info
Timers and wheels follow each feature's **Display Mode**: with **Single Timer** / **Single Wheel** only the currently selected one is shown; with **Multiple Timers** / **Multiple Wheels** only the ones you added are shown. If there are none, the card shows **No timer yet** / **No wheel yet**.
:::
