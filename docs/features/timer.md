---
sidebar_position: 11
---

# Timer

Show countdown timers or stopwatches on stream. A countdown can gain or lose time from buttons you click, or automatically from Twitch follows, subs, Bits and donations.

The page has two tabs: **Settings** and **Create Timer**. Create a timer first, then control it from **Settings**.

## Step 1: Create a Timer

1. Open **Timer** in the left sidebar and switch to the **Create Timer** tab
2. Under **My Timers**, click **Add**. A new countdown timer is created with an initial time of 10 minutes and three time options (+30 sec, +1 min, +5 min)
3. Click a timer card to edit it. Click the **✕** on a card to delete that timer

The **Preview** shows how the selected timer looks. Use the color box next to it to change the preview background.

Below the preview, switch between **Timer Settings** and **Appearance**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Step 2: Timer Settings

### Timer Mode

- **Countdown**: counts down from the initial time
- **Stopwatch**: counts up from 0 and can record laps. Stopwatch mode has no initial time, warning time, end sound or time options

### Name

The name shown in the timer list, the dropdowns and Quick Tools.

### Initial Time

The countdown's starting time, in hours, minutes and seconds. The total in seconds is shown next to it.

### Warning Time

When the remaining time reaches this value, the timer text switches to the **Warning** color set under **Appearance**. Leave it at 0 for no warning.

### Countdown End Sound

The sound played when the countdown reaches 0. Choose **None** or one of the built-in sounds (**Chime**, **Coin**, **Bell**, **Pop**, **Fanfare**). Click **▶** to test it. To use your own file, click **Choose Sound** and pick one from the asset manager.

The sound is played by the OBS browser source, so turn on **Control audio via OBS** for the timer source. See [How to Add Sources in OBS](../getting-started/obs-source.md).

### Time Options

Time options are the add/subtract time buttons for a countdown. Each timer can have up to 20.

To add one, fill in the **Add Time Option** form:

1. **Trigger Source**: choose what applies this option automatically
   - **Manual**: only applied when you click the button
   - **Follow**: applied on each new Twitch follow
   - **Twitch Bits**: applied on Bits cheers
   - **Twitch New Sub**: applied on Twitch subscriptions
   - **Donation**: applied on donations. Use **Donation Platforms** to choose which of **YouTube**, **O'Pay**, **ECPay** and **PayPal** count
2. For **Twitch Bits** and **Donation**, also set:
   - **Trigger Threshold**: the Bits or donation amount for one step
   - **Conversion Method**: **Trigger on integer multiples** or **Convert proportionally** (see the example below)
3. **Add Time**: pick **＋** or **－**, then set the hours, minutes and seconds
4. Click **Add**

To change an option, click its **Edit**, change the form, then click **Save** (or **Cancel**). Click **✕** to delete it. Options with an automatic trigger are marked with 🔗 and the trigger name.

**Conversion example**: Trigger Threshold 100 bits, Add Time +1 min, and a viewer cheers 250 bits:

- **Trigger on integer multiples**: only full multiples of the threshold count → 2 × 1 min = **+2 min**
- **Convert proportionally**: 250 ÷ 100 × 1 min → **+2 min 30 sec**

For donations, the amount is converted to the currency selected in the app's Settings before it is compared with the threshold.

:::note
- Automatic triggers only affect countdown timers
- Time options with an automatic trigger still appear as buttons in the control panel, so you can also click them by hand
- **Twitch New Sub** applies once per subscription event: a gift of several subs applies it once. Resubscriptions apply it only when **Count Resubscriptions** is on in [Twitch Goal Bar](./goal.md)
:::

### Control Shortcuts

Set keyboard shortcuts for this timer:

- **Start / Pause**
- **Lap Shortcut** (stopwatch only)
- **Reset Shortcut**

See also [Hotkeys](./hotkeys.md).

## Step 3: Appearance

| Setting | Description |
|---------|-------------|
| **Font** | Font of the time text |
| **Font Size** | 12–300 px |
| **Text Color** | **Normal**: **Solid** or **Gradient** (two colors and an **Angle**). **Warning** (countdown only): the color used once the warning time is reached |
| **Background Color** | Background behind the time |
| **Border** | Outline color, **Opacity** and **Width** (0–20 px) |
| **Shadow** | Shadow color, **Opacity**, **Blur** and **X** / **Y** offset |

## Step 4: Choose a Display Mode and Add the OBS Source

Switch to the **Settings** tab. Under **Control Panel**, pick a **Display Mode**:

| Mode | Description | OBS Source URL |
|------|-------------|----------------|
| **Single Timer** | OBS shows only the selected timer. Switch timers with the **Current Timer** dropdown | `http://127.0.0.1:7272/timer` |
| **Multiple Timers** | Each timer has its own URL and can be added to OBS separately | `http://127.0.0.1:7272/timer/<timer ID>` |

In **Multiple Timers** mode, choose timers from **Add to Display**. Each added timer gets its own card with its **OBS Source URL**. Click **Copy** to copy it. Click **✕** on a card to remove it from the display.

Add the copied URL to OBS as a browser source. See [How to Add Sources in OBS](../getting-started/obs-source.md).

:::tip
Also turn on the switch next to **Timer** in the left sidebar (**Turn on OBS output**). While it is off, the timer is hidden in OBS.
:::

## Step 5: Control the Timer

Each timer card in the **Settings** tab has:

- **Start** / **Pause**: for a stopwatch, the pause button reads **Stop**. A countdown that has reached 0 can't be started until you reset it or add time
- **Lap** (stopwatch only): records a lap while running. Laps are listed under the card with the time and the difference from the previous lap
- **Reset**: stops the timer and returns it to the initial time (0 for a stopwatch), clearing laps
- **Add Time** (countdown only): one button for each time option

The running time is shown only in the OBS overlay, not on the settings page. You can also control timers from the [Quick Tools](./quick-tools.md) window, which shows the current time as well.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Trial version limits
You can create only **1** timer. See [Trial vs. Full Version](../getting-started/trial-comparison.md) for details.
:::
