---
sidebar_position: 4
---

# Voice Translation

Hold a shortcut and speak. Stream Toolkit turns your speech into text, translates it, and shows both lines as subtitles in OBS.

Speech recognition runs on your own computer with a Whisper model. The text is then translated with MyMemory.

The page has two tabs: **Settings** and **Appearance**.

## Step 1: Add the OBS Source

The OBS source URL is shown at the top of the page:

```
http://127.0.0.1:7272/voice-translate
```

Click **Copy** and add it to OBS as a browser source. See [How to Add Sources in OBS](../getting-started/obs-source). Voice Translation plays no sound, so you don't need to turn on "Control audio via OBS".

The subtitles appear at the bottom of the source: the original text on top and the translation below. They fade out after the **Subtitle Display Duration**.

:::tip
Turn on the switch next to **Voice Translation** in the left sidebar (**Turn on OBS output**). The shortcut only works while it is on.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Step 2: Set the Shortcut

Under **Shortcut (hold to record, release to recognize)**:

1. Click **Click to set a shortcut**
2. Press the key combination you want, then release it. Press **Esc** to cancel
3. To remove the shortcut, click **Clear**

If the combination is already used by another feature, the button shows **Shortcut conflict** and the shortcut is not saved.

The shortcut works even when Stream Toolkit is not the active window. **Hold** it while you speak, then **release** it to recognize and translate. A recording stops automatically after 15 seconds.

You can also hold the **REC** button below the shortcut with the mouse. It works the same way: press to record, release to translate. The [Quick Tools](./quick-tools) window has the same **REC** button.

## Step 3: Recognition Settings

| Field | Description |
|-------|-------------|
| **Model Status** | Shows **Loading xx%**, **Ready** or **Model failed to load**. You can record once it shows **Ready** |
| **Whisper Model** | **Tiny (fastest, ~40MB)**, **Base (recommended, ~75MB)** (default) or **Small (most accurate, ~245MB)**. The model is downloaded the first time you use it. Changing the model reloads it |
| **Speech Language** | The language you speak. Default is Traditional Chinese |
| **Microphone** | The microphone to record from. **System Default** uses Windows' default input device |

## Step 4: Translation Settings

| Field | Description |
|-------|-------------|
| **Subtitle Display Duration** | How long the subtitles stay on screen, 1–30 seconds. Default is 5 |
| **Target Language** | The language to translate into. Default is English |
| **Use Whisper translation when the target is English** | When the target language is English, Whisper translates instead of MyMemory. (Free with no quota, but higher latency.) It has no effect for other target languages |
| **Translation Service** | MyMemory |

### Email (optional)

MyMemory is free. Its daily quota depends on whether you enter an email:

- No email: 5,000 characters/day
- With email: 50,000 characters/day (free, no MyMemory registration needed)

Enter your email and click **Save**. This email is **Shared with chat translation**.

The bar below shows **Used today (approximate, resets daily at 08:00 UTC)**. When the quota is used up, it shows **Quota full**.

## Step 5: Appearance

On the **Appearance** tab you can change how the subtitles look. Changes are saved right away.

- **Preview**: shows sample subtitles. The color box next to it changes only the preview background
- **Alignment**: **Left** (default), **Center** or **Right**
- **Font**: one row for **Source Language** (the original text) and one for **Target Language** (the translation). Each row has a font, a color and a size (8–120 px). Defaults are 14 px for the original and 22 px for the translation
- **Shadow**: the text shadow color
- **Reset to Default**: restores the default appearance

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Trial version limits
The **Target Language** is fixed to English. The page shows "The demo only supports translating to English".

See [Trial / Full Version Comparison](../getting-started/trial-comparison) for details.
:::

## FAQ

**Q: I hold the shortcut but nothing happens.**
Check that the switch next to **Voice Translation** in the left sidebar is on, and that **Model Status** shows **Ready**.

**Q: Recording works, but no subtitles appear in OBS.**
If MyMemory can't translate (for example, the daily quota is used up), no subtitles are shown. Check the **Used today** bar. Entering an email raises the quota. If your target language is English, you can also turn on **Use Whisper translation when the target is English**, which has no quota.
