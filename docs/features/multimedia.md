---
sidebar_position: 5
---

# Media Board

Show images, play videos and play sound effects on stream with a click or a shortcut.

The page has three tabs: **Image**, **Video** and **Sound**. Each tab has its own OBS source URL.

| Tab | OBS Source URL | Control audio via OBS |
|-----|----------------|-----------------------|
| **Image** | `http://127.0.0.1:7272/imageboard` | Not needed |
| **Video** | `http://127.0.0.1:7272/videoboard` | Required |
| **Sound** | `http://127.0.0.1:7272/soundboard` | Required |

Click **Copy** next to each URL and add it to OBS as a browser source. See [How to Add Sources in OBS](../getting-started/obs-source). Videos and sounds play in the OBS source, not inside Stream Toolkit, so you must turn on **Control audio via OBS** for those two sources, or viewers won't hear them.

:::tip
Turn on the switch next to **Media Board** in the left sidebar (**Turn on OBS output**). While it is off, images can't be shown and videos and sounds don't play, whether you use the buttons or the shortcuts.
:::

## Common Controls

Images, videos and sounds are all listed as cards:

- Click a card to expand or collapse its settings
- The checkbox on the right of a card: when checked, the item appears in the launch tools of [Quick Tools](./quick-tools). New items are checked by default
- **✕** deletes the item
- If a local file has been moved or deleted, the card shows **File not found**

### Shortcuts

Each item can have its own shortcut:

1. Expand the card and click the shortcut button
2. Press the key combination you want, then release it. Press **Esc** to cancel
3. To remove the shortcut, click **Clear**

If the combination is already used by another feature, it is not saved and the button shows a conflict message. The shortcut works even when Stream Toolkit is not the active window. All shortcuts are also listed on the [Hotkeys](./hotkeys) page.

## Image

{/* TODO: 截圖 — 圖片分頁 */}

### Add an Image

1. Click **Add Image**
2. Choose a file (jpg, jpeg, png or gif). The file name becomes the image name

Expanding the card shows a thumbnail and these settings:

- **Name**: the image name
- **File Path**: click **Reselect** to pick another file
- **Shortcut**: press it once to show the image, press again to hide it
- **Set Position & Size**: see below
- **Delete Image**: deletes the image

### Show and Hide

Click the **○** button on a card to show the image in OBS. It turns into **◉**. Click it again to hide the image.

### Display Settings

**Allow showing multiple images at once** is off by default. While it is off, showing an image hides the one currently shown. Turn it on to show several images at the same time.

### Set Position & Size

- **X Position** / **Y Position**: in px. 0/0 is the center of the source. Positive values move right/down, negative values move left/up
- **Width** / **Height**: in % of the original size. 100 = original size. The 🔗 button locks the aspect ratio (on by default). Click it to scale freely
- While the image is shown, changes are previewed live in OBS
- **Save** keeps the changes, **Reset** goes back to the values from when you opened the window, **Cancel** closes without saving

## Video

{/* TODO: 截圖 — 影片分頁 */}

Click **Add Video** to add a card, then expand it:

- **Video Name**: the name shown on the card
- **Source**: **YouTube** or **Local**
  - **YouTube**: paste the video link into **YouTube URL**. Click **Test Resolve** to check it. On success it shows "Resolved, applied automatically on playback"
  - **Local**: click **Choose File** to pick an mp4, webm or ogg file. The size limit is 200MB, and larger files mean more latency. For a transparent background, use a WebM (VP9 Alpha) video
- **Loop**: repeats the video
- **Playback Time**: set **From** and **To** (hours, minutes, seconds, ms). Leave **To** at 00:00 to play to the end
- **Volume**: 0–100%
- **Shortcut**: press it to play the video. Press it again while the video is playing to stop it
- **Set Position & Size**: the same position and size fields as for images. Click **Preview Loop** to play the video on a loop in OBS while you adjust it, and **Stop Preview** to stop. Click **Save** or **Cancel** when done

Click **▶** on a card to play the video in OBS. Click **■** to stop it.

## Sound

{/* TODO: 截圖 — 音效分頁 */}

Click **Add Sound** to add a card, then expand it:

- **Sound Name**: the name shown on the card
- **Source**: **YouTube URL** or **Local File**
  - **YouTube URL**: paste the link and click **Test Resolve** to check it
  - **Local File**: click **Choose File** to pick an mp3, wav, ogg, flac, m4a, aac or opus file
- **Playback Time**: set **From** and **To**. Leave **To** at 00:00 to play to the end
- **Volume**: 0–100%
- **Shortcut**: press it to play the sound

Click **▶** on a card to play the sound in OBS. Click **■** to stop it. Only one sound plays at a time. Starting another sound stops the current one.

:::info Trial version limits
- You can add only **1** image, **1** video and **1** sound
- The image and video overlays show a watermark

See [Trial / Full Version Comparison](../getting-started/trial-comparison) for details.
:::

## FAQ

**Q: Videos or sounds play, but there is no sound on stream.**
Make sure **Control audio via OBS** is checked for the `/videoboard` and `/soundboard` sources, and that the sources are not muted in the OBS mixer.

**Q: I can't choose my video file.**
Only mp4, webm and ogg files can be chosen, up to 200MB. If a file is larger, a message shows the limit and the file is not added.
