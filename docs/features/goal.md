---
sidebar_position: 10
---

# Twitch Goal Bar

Show progress bars on stream for your Twitch follower, subscription and Bits goals. Each goal type has its own bar, its own settings and its own OBS URL.

:::note Before you start
The goal bars count Twitch events, so connect your Twitch account first. See [Twitch Settings](../platforms/twitch).
:::

## Step 1: Pick a Goal Type and Add the OBS Source

At the top of the page, pick a goal type: **Follow**, **Subscriptions** or **Bits**. The **OBS URL** below the buttons changes to match. Click **Copy** to copy it.

| Goal type | OBS Source URL |
|-----------|----------------|
| **Follow** | `http://127.0.0.1:7272/goal/follow` |
| **Subscriptions** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Add each bar you want to show to OBS as a separate browser source. See [How to Add Sources in OBS](../getting-started/obs-source). The goal bars play no sound, so you don't need to turn on "Control audio via OBS".

:::tip
Also turn on the switch next to **Twitch Goal Bar** in the left sidebar (**Turn on OBS output**). While it is off, the bars are hidden in OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Step 2: Set the Goal

All the settings below apply to the goal type you picked at the top.

- **Title**: the title text shown on the bar
- **Goal**: the target number (whole numbers, 0 or more)
- **Progress**: shows the current count, the goal and the percentage

### How progress is counted

| Goal type | What adds to progress |
|-----------|----------------------|
| **Follow** | Each new follow adds 1. While Twitch is connected, the count is also synced with your channel's total follower count from Twitch every 30 seconds. Click **Sync** to sync it right away |
| **Subscriptions** | New subscriptions and gifted subscriptions (a gift of several subs adds the number of subs gifted). Resubscriptions count only when **Count Resubscriptions** is on |
| **Bits** | Each cheer adds the number of Bits cheered |

### Subscription options

Only shown for **Subscriptions**:

- **Weighted by Tier**: when on, higher-tier subs add more to the progress. When off, every sub adds 1
- **Count Resubscriptions**: when on, resub messages also add to the progress

### Reset progress

**Subscriptions** and **Bits** have a **Reset Progress** button. Click it, then click **Confirm Reset** to set the current count back to 0. The goal number is kept.

**Follow** has no reset button, because its count follows your Twitch follower total.

## Step 3: Adjust the Appearance

### Preview

The **Preview** at the top shows the bar for the selected goal type. Use the color box next to it to change the preview background. Check **Preview Reached** to see how the bar looks once the goal is reached.

### Appearance settings

| Setting | Description |
|---------|-------------|
| **Background Color** | Background of the bar |
| **Progress Bar Color** | Color of the filled part |
| **Completed Color** | Fill color once the goal is reached |
| **Title Text** | Font, color and size (8–72 px) of the title |
| **Goal Text** | Font, color and size (8–72 px) of the numbers |
| **Percentage** | Font, color and size (8–72 px) of the percentage |

Click **Reset to Default** to restore the appearance of the selected goal type.

### Custom CSS

Click **Custom CSS** to expand the editor. Each goal type has its own CSS. Use it for layout and structure. Colors, fonts and sizes are set in the appearance settings above.

- **Reset to Default**: restores the default CSS
- **Manage Assets**: opens the asset manager for images used in your CSS

If your CSS overrides a property with `!important`, the matching appearance control is locked, because the CSS would win anyway.

:::info Trial version limits
- **Custom CSS** is available in the full version only
- The OBS overlay shows a watermark

See [Trial vs. Full Version](../getting-started/trial-comparison) for details.
:::
