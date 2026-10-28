---
sidebar_position: 20
---

# Themes

Share and download overlay looks through the Steam Workshop. A theme can include the appearance of these features:

- [Chat](./chat.md)
- [Donation Goal Bar](./donate.md)
- [Donation Alerts](./donate-alert.md)
- [New Follower Alerts](./fan-alert.md)
- [Viewer Birthday Alerts](./birthday-alert.md)
- [Donation Board](./sponsors.md)
- [Live Polls](./vote.md)
- [Clock](./clock.md)
- [Twitch Goal Bar](./goal.md): **Follower Goal**, **Subscription Goal**, **Bits Goal**

Open it from **🎨 Themes** at the bottom of the left menu. The page has two tabs: **My Themes** and **Downloaded Themes**. Steam must be running.

## Find and Apply a Theme on a Feature Page

On each feature listed above, open its **Custom CSS** section and click **Browse Workshop Themes**:

1. **Explore Themes** lists Workshop themes for this feature. Type in **Search theme name** and click **Search**, or use **Previous** / **Next** to page through
2. Click a thumbnail to view the preview image
3. Click **Apply**. The theme is subscribed, downloaded, and applied to this feature
4. **Subscribed** lists the themes you already subscribed to for this feature

While a theme is applied, the page shows **Active theme: (name)** and a **Restore** button, and the custom CSS is read-only. Click **Restore** to go back to your own settings.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Downloaded Themes

Lists every theme you subscribed to on Steam. Subscribed themes are not applied automatically — use the buttons on the card. OBS updates right away.

Each card shows the preview, name, **In use** if any feature uses it, and **Includes:** the features the theme covers (✓ marks features currently using it).

| Button | What it does |
|------|------|
| **Apply all** | Applies the theme to every feature it includes. If a feature is using another theme, you are asked to confirm the replacement |
| **Choose…** | Pick which features to apply it to |
| **Restore all** | Returns every feature using this theme to your own settings from before it was applied |
| **Restore…** | Pick which features to restore |
| **Unsubscribe** | Unsubscribes. If the theme is in use, those features are restored first |

After applying, a message at the bottom shows what changed for 30 seconds, with a **Restore** button to undo.

:::note
- Restoring returns to your own settings, not to a theme that was replaced
- Appearance changes made while a theme is applied are not kept after restoring
:::

- **Downloading…**: keep Steam running; you can apply it once the download finishes
- **Removed theme (#id)**: the theme is no longer in your Steam subscriptions but some features still use it. Images may not display, so restoring is recommended
- If Steam isn't running, start Steam and click **Refresh**

{/* TODO: 截圖 — 下載的主題 */}

## My Themes: Upload a Theme

1. Set up the appearance of the features you want to share on their own pages
2. In **My Themes**, click **Upload New Theme**
3. Fill in:
   - **Theme Name** (required)
   - **Theme Description**
   - **Included Features** (at least one)
   - **Preview Image** (required, up to 1MB): click **Choose Preview Image**
4. Check the box confirming you have the right to distribute every image, font, and sound in the theme. Assets licensed for personal or non-commercial use only may not be uploaded
5. Click **Upload Theme**

If you see "Please first accept the Steam Workshop terms in your browser", accept the terms so the theme can go public.

### Managing Your Uploaded Themes

Each uploaded theme has:

- **Download and Apply**: applies the published theme to your features. This overwrites your current appearance settings
- **Edit**: re-uploads your current appearance settings to the same theme. If you haven't downloaded the theme, the existing preview image won't carry over and you need to pick a new one
- **Manage on Steam**: opens the theme in Steam

:::info Trial Version Limits
Themes (Steam Workshop) are only available in the full version. In the trial, **🎨 Themes** cannot be opened and themes cannot be applied.

See [Trial / Full Version Comparison](../getting-started/trial-comparison.md).
:::
