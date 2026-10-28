---
sidebar_position: 12
---

# Clock

Show the current time on stream, optionally with the date and weekday.

## Step 1: Add the OBS Source

Copy the **OBS Source URL** at the top of the page:

```
http://127.0.0.1:7272/clock
```

Add it to OBS as a browser source. See [How to Add Sources in OBS](../getting-started/obs-source). The clock plays no sound, so you don't need to turn on "Control audio via OBS".

:::tip
Also turn on the switch next to **Clock** in the left sidebar (**Turn on OBS output**). While it is off, the clock is hidden in OBS.
:::

## Preview

The **Preview** at the top shows the actual OBS overlay and updates as you change settings. Use the color box next to it to change the preview background.

Below the preview are three tabs: **Appearance**, **Clock Format** and **Display Settings**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Appearance

| Setting | Description |
|---------|-------------|
| **Font** | Font for all clock text |
| **Layout** | How the time, date and weekday are arranged: **Stack**, **Horizontal**, **One-Top-Two-Bottom** or **Two-Top-One-Bottom**. **Line Spacing** is available in every layout except **Horizontal**, and **Item Spacing** in every layout except **Stack** (both −200 to 200 px) |
| **Order** | Drag the **Time**, **Date** and **Weekday** blocks to change their order |
| **Text** | Set **Time**, **Date** and **Weekday** separately: **Font Size**, color (**Solid**, or **Gradient** with two colors and an **Angle**), and **Border** color, **Opacity** and **Width** (0–7 px) |
| **Shadow** | Shadow color, **Opacity**, **Blur** and **X** / **Y** offset, shared by all text |

The **Reset to Default** button is at the top of the tab.

### Custom CSS

Click **Custom CSS** to expand the editor. The default CSS lists the selectors for each part of the clock (time, date, weekday and their containers) with comments. Use it for layout and structure. Colors, fonts and sizes are set in the appearance settings above.

- **Reset to Default**: restores the default CSS
- **Manage Assets**: opens the asset manager for images used in your CSS

If your CSS overrides a property with `!important`, the matching appearance control is locked, because the CSS would win anyway.

## Clock Format

- **Clock Format**: **24-hour**, or one of two 12-hour options. In the English interface both 12-hour options read **12-hour (AM/PM)**: the second one shows AM/PM, while the first one shows the Chinese markers 上午 / 下午
- **Time Zone**: UTC−12 to UTC+14. By default, the time zone matches your computer's

## Display Settings

- **Show seconds**
- **Show date**: when on, pick a date format from the dropdown. Formats marked **No year** leave out the year
  - **Pad date with zeros**: shows single-digit months and days with a leading zero (for example 2026/05/20)
  - **Year Format**: shown for formats that start with the year. **Full (2026)** or **Short (26)**

  These two options apply to the numeric formats (with `/` or `-`). The written-out formats (for example "May 20, 2026") follow the app's interface language instead
- **Show weekday**: when on, pick how the weekday is written (for example **Wednesday**, **WED** or **Wed**)

:::info Trial version limits
**Custom CSS** is available in the full version only. See [Trial vs. Full Version](../getting-started/trial-comparison) for details.
:::
