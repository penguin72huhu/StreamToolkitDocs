---
sidebar_position: 17
---

# Song Requests

Viewers request YouTube songs with a chat command, and the songs play in OBS one after another. You can also add songs yourself and set a default playlist that plays when there are no requests.

## OBS Source URL

```
http://127.0.0.1:7272/song-request
```

Click **Copy** next to **OBS Source URL** at the top of the page, then add it to OBS as a browser source. See [How to Add Sources in OBS](../getting-started/obs-source.md).

:::warning
Song requests play sound. In the browser source properties, check **Control audio via OBS**, or the music will not reach your stream.
:::

:::tip
Also turn on the switch next to **Song Requests** in the left menu. Chat commands are only handled while the switch is on.
:::

The page has two tabs: **Settings** and **Playlist**.

## Settings Tab

### Platform

Each platform has its own card:

- **Allow requests from this platform**: lets viewers in that chat request songs
- **Enable chat bot replies** (Twitch only, on by default): replies in Twitch chat with the result of each command, using your connected Twitch account. Shown only when Twitch is enabled and connected

A platform that is not connected shows **(Not connected)** (Twitch) or **Chat URL not connected** (YouTube). Connect it first:

- [Twitch Settings](../platforms/twitch.md)
- [YouTube Settings](../platforms/youtube-settings.md)

### Chat Commands

| Field | Default |
|------|--------|
| **Command Prefix** | `!` (choose from `! @ # $ % & ~`) |
| **Request Command** | `sr` |
| **Remove Request** | `remove` |
| **View Request List** | `queue` |
| **Check Current Song** | `song` |
| **Request Cooldown** | 3000 ms |

The cooldown is counted per viewer: after a successful request, the same viewer has to wait this long before requesting again.

### Settings

- **Show video on screen** (on by default): when off, the video is hidden in OBS but the audio still plays
- **List Limit** (1–100, default 20): the maximum number of requested songs in the list. Default-playlist songs do not count
- **Show request notification** (on by default): shows a notification card in OBS when a viewer requests, removes, or fails to request a song. When on, you can set:
  - **X** / **Y**: position of the notification from the top-left corner (px, default 16 / 16)
  - **Notification Scale**: size multiplier (default 1.0)
  - **Test Notification Appearance**: sends a test notification to OBS

Each notification stays for 5 seconds; up to 3 are shown at once.

{/* TODO: 截圖 — 點歌設定分頁 */}

## How Viewers Use It

With the default settings:

| Command | What it does |
|------|------|
| `!sr <YouTube link>` | Requests that video |
| `!sr <search words>` | Searches YouTube and requests the first result |
| `!remove` | Removes the viewer's most recent request (not the song that is playing) |
| `!queue` | Replies with the next 3 requested songs |
| `!song` | Replies with the song that is playing |

- Accepted links: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…`, or an 11-character video ID
- Playlist links are not accepted
- A request fails when the list has reached **List Limit**
- New requests are queued after the other viewers' requests, ahead of default-playlist songs
- `!queue` and `!song` only work in Twitch chat with **Enable chat bot replies** on

## Playlist Tab

### Playback Controls

The top line shows who requested the current song and its title. Buttons:

- **Play** / **Pause**: if nothing is playing, starts from the first song in the list
- **Stop**: stops playback
- **Next**: skips to the next song

While a song plays, a progress bar appears; drag it to jump to a position. When a song ends, the next one starts automatically.

:::note
Nothing plays automatically when the app starts. Press **Play** to begin.
:::

### Default Playlist

Paste a YouTube playlist URL and choose **Loop** or **Shuffle**. When the list runs out, a song from this playlist is added and played automatically. These songs show as **Default List** in the list.

The default playlist is read through your YouTube account, so you must first sign in with Google in [YouTube Settings](../platforms/youtube-settings.md).

### Manual Request

Paste a YouTube video URL and click **Add to List** (or press Enter). Manual requests do not support search words.

### List

**List (n)** shows every song: platform, requester, title, and video ID (click to open on YouTube). Click **Delete** to remove a song; deleting the song that is playing skips to the next one. **Clear** empties the whole list.

{/* TODO: 截圖 — 播放清單分頁 */}

## FAQ

**Q: Viewers type the command but nothing happens?**
Check that:
- The **Song Requests** switch in the left menu is on
- **Allow requests from this platform** is checked for that platform
- For Twitch: Twitch chat is read by the [Chat](./chat.md) feature. If you turned Twitch off on the Chat page (and the [Chat Bot](./chat-bot.md) is not using Twitch), Twitch commands are not received

**Q: The default playlist doesn't play?**
Make sure you are signed in with Google in Settings and the URL is a playlist link (it contains `list=`).

:::info Trial Version Limits
- Viewer chat requests are only available in the full version. In the trial, a request from chat fails with the message "Viewer song requests aren't available in the trial". **Manual Request** and the default playlist still work
- The OBS overlay shows a watermark

See [Trial / Full Version Comparison](../getting-started/trial-comparison.md).
:::
