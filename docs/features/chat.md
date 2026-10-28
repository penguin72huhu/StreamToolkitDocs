---
sidebar_position: 3
---

# Chat

**Chat** shows your Twitch and YouTube chat together in one overlay, with optional auto-translation. It can also show chat in a transparent desktop window that only you can see.

## OBS Source URL

```
http://127.0.0.1:7272/chat
```

Add it as a browser source: [How to Add Sources in OBS](../getting-started/obs-source.md). This overlay has no sound.

:::info
Messages are only sent to the overlay while the **Chat** switch in the sidebar is on. Chat is still received while it is off, so features that read chat (polls, giveaways, song requests, etc.) keep working.
:::

## Before You Start

Connect the platforms you want to show:

- [Twitch Settings](../platforms/twitch.md)
- [YouTube Settings](../platforms/youtube-settings.md)

The settings page has two tabs: **Settings** and **Appearance**.

## Settings Tab

### Platforms

- **Show platform icon (Twitch / YouTube)** — shows the <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> icon in front of each message

Each platform has its own card. The dot next to the platform name lights up green when it is connected and enabled; **(Not connected)** is shown if Twitch isn't connected, and **Chat URL not connected** if YouTube chat isn't linked.

| Option | Description |
|--------|-------------|
| **Enable chat** | Show this platform's messages |
| **Show avatar** | Show the viewer's avatar |
| **Show badges** (Twitch) / **Show badges (member icons)** (YouTube) | Show badges |
| **Show viewer names instead of @handles** | YouTube only. Disabled until you sign in with Google |

When YouTube chat is enabled but not linked, two buttons appear on its card:

- **Auto-connect** — finds your current broadcast automatically (needs Google sign-in)
- **Enter manually** — takes you to the settings page to paste the chat URL

**Max Messages**: how many messages are kept on screen (5–200, default 50).

### Auto-translate

1. Tick **Enable translation**
2. **Target Language**: the language messages are translated into. The default, **Follow interface language**, uses the app's interface language
3. **Languages not to translate** (optional): messages in the ticked languages are left as they are. Portuguese PT-BR and PT-PT can't be told apart, so ticking either one skips both

**Translation Service** is **MyMemory**, which needs no API key.

- **Email (optional)**: without an email the daily quota is 5,000 characters; enter an email and click **Save** to raise it to 50,000 characters (free, no MyMemory registration needed)
- The bar below shows the approximate amount used today. It resets daily at 08:00 UTC

### Test

- **Send Test Message** — sends a random sample message to the overlay
- **Clear** — clears all messages from the overlay

If **Connection failed — the server may not be running** appears, Stream Toolkit's local server isn't responding.

### Desktop Chat Window

Shows chat in a small transparent, always-on-top window over your game. Only you can see it — handy for single-monitor streaming.

1. Click **Open Window** (or right-click the tray icon and choose **Open Desktop Chat**)
2. While unlocked, drag the top bar to move the window and drag its edges to resize it
3. Click **🔒 Lock** when it's in place. Clicks then pass through the window to your game. To unlock, move the mouse over the window and click the 🔓 that appears in the top-right corner, or click **🔓 Unlock** on the settings page

**Reset Position** moves the window back to its default position.

| Setting | Description |
|---------|-------------|
| **Style** | **Name + message only** (default) or **Same as OBS chat** |
| **Font Size** | 12–32 px, default 16. Only for **Name + message only** |
| **Text Opacity** | 10–100%, default 100% |
| **Background Opacity** | 0–100%, default 40% |
| **Fade Out Messages** | 0–120 seconds, default 0. Each message fades out after this many seconds, and faded messages can't be scrolled back to. At 0 nothing fades, and you can scroll up to earlier messages while unlocked (up to Max Messages) |
| **Hide from stream capture** | On by default. OBS Display Capture won't pick up the window, so viewers don't see chat twice. It also won't appear in screenshots or Discord screen sharing |

:::tip
If you can't see the window while your game is fullscreen, switch the game to Borderless Window or Windowed mode. Use **Send Test Message** to check the window's position and size.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Appearance Tab

### Preview

The top of the tab shows a live preview. The color picker next to **Preview** changes only the preview background. The **Avatar**, **Badges** and **Platform icon** checkboxes change only what the preview shows.

### Appearance Settings

**Reset to Default** restores the default appearance (or the applied theme's appearance, if a theme is applied).

- **Entry Direction**: **Top to Bottom**, **Bottom to Top** (default), **Left to Right**, **Right to Left**
- **Text** — set separately for **Username** and **Message**:
  - Font, size (px) and color. For the username you can choose **Original Color** (the viewer's platform color) or **Custom Color**
  - **Outline**: color, **Opacity**, **Width**
  - **Shadow**: color, **Opacity**, **Blur**, X / Y offset
- **Icon Size**: scale for **Platform icon**, **Avatar** and **Badges** (0.1–5x)
- **Color**: **Background Color** of each message

### Custom CSS

Expand **Custom CSS** to edit the overlay's CSS directly. Use **Manage Assets** to upload images to reference in CSS. **Reset to Default** restores the default CSS. See also [Themes](./themes.md).

:::tip
If your custom CSS sets one of the appearance fields with `!important`, that field is greyed out in the Appearance settings ("This setting is controlled by custom CSS"). When a theme is applied, the CSS is read-only — restore it before editing.
:::

## Trial Version Limits

:::info
- Turning on auto-translate adds a watermark to the chat overlay
- **Custom CSS** is only available in the full version
- The **Desktop Chat Window** is only available in the full version

See [Trial / Full Version Comparison](../getting-started/trial-comparison.md).
:::
