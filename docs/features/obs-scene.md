---
sidebar_position: 2
---

# OBS Scene Control

**OBS Scene Control** lets you switch scenes and show/hide sources in your streaming software with global hotkeys or from [Quick Tools](./quick-tools). It works with **OBS Studio**, **Streamlabs** and **Meld Studio**.

This feature has no overlay, so there is nothing to add in OBS as a browser source.

:::info
Hotkeys only work while the **OBS Scene Control** switch in the sidebar is on. They work even when the Stream Toolkit window is minimized to the tray.
:::

The settings page has two tabs: **Connection** and **Hotkeys**.

## Connection Tab

### Step 1: Choose Your Software

Under **Software**, pick **OBS Studio**, **Streamlabs** or **Meld Studio**. This can only be changed while disconnected.

Each software keeps its own hotkeys and scene list, so switching software shows that software's own settings.

### Step 2: Prepare the Software

#### OBS Studio

1. In OBS, open **Tools → WebSocket Server Settings**
2. Tick **Enable WebSocket server**
3. Click **Show Connect Info** to see the password
4. In Stream Toolkit, fill in **Host** (default `localhost`), **Port** (default `4455`) and **Password**

#### Streamlabs / Meld Studio

No setup is needed — just have the program running.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Step 3: Connect

Click **Connect**. **Status** changes to **Connected** (for OBS and Meld the version number is shown as well). Click **Disconnect** to drop the connection.

**Connect on startup** (on by default): connects automatically when Stream Toolkit starts and when you turn the feature switch on. Turning the feature switch off disconnects.

### Scenes

The **Scenes** section lists your scenes and how many sources each has; the current scene is highlighted. Click **Refresh** to fetch the latest list after changing scenes in your software.

When disconnected, the last fetched list is still shown.

## Hotkeys Tab

To set a hotkey, click **Click to set a shortcut**, then press the key combination. Press `Esc` to cancel. If the combination is already used by another feature, **Shortcut conflict** is shown and it is not saved. Click **✕** next to a hotkey to clear it.

### Switch Scene

1. Click **Add**
2. Set a hotkey
3. Pick the scene to switch to

Click **✕** at the end of the row to delete it.

### Toggle Sources

One hotkey can control several sources in the same scene at once.

1. Click **Add**
2. Set a hotkey
3. Enter a **Name** (optional — used as the button label in Quick Tools; the scene name is used if empty)
4. Pick the scene the sources belong to
5. Click **Add source**, pick a source and choose **Show**, **Hide** or **Toggle** (default **Toggle**)
6. Repeat step 5 for more sources

Changing the scene of an entry clears its source list.

:::tip
A scene or source that no longer exists in your software is marked in red. Pick it again from the dropdown.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Using It from Quick Tools

When the feature is on and at least one hotkey entry exists, [Quick Tools](./quick-tools) shows an **OBS Scene Control** card with a button for each entry. Clicking a button does the same as pressing its hotkey.

## Error Messages

When a hotkey or button is used, these messages may pop up:

| Message | Meaning |
|---------|---------|
| **Not connected to OBS** | Not connected — go to the **Connection** tab and click **Connect** |
| **Scene "…" not found** | The scene was renamed or deleted in your software |
| **Sources not found: …** | Those sources no longer exist in the scene |

## Trial Version Limits

:::info
The trial version allows **1** hotkey entry in total (Switch Scene and Toggle Sources combined). See [Trial / Full Version Comparison](../getting-started/trial-comparison).
:::

## FAQ

**Q: It said it can't reach OBS, and it didn't retry after I opened OBS.**
If the very first connection attempt fails (for example, OBS wasn't running yet), Stream Toolkit does not keep retrying. Open your streaming software, then click **Connect**. Once a connection has succeeded, it reconnects automatically if the connection drops.
