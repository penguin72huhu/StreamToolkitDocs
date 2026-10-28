---
sidebar_position: 14
---

# Spin Wheel

Create your own prize wheels and spin them on stream. You can set each option's weight, the wheel colors, and whether a drawn option is removed afterward.

The page has three tabs: **Settings**, **Create Wheel** and **History**. Create a wheel first, then spin it from **Settings**.

## Step 1: Create a Wheel

1. Open **Spin Wheel** in the left sidebar and switch to the **Create Wheel** tab
2. Under **My Wheels**, click **Add**. A new wheel named "Wheel 1" (then "Wheel 2" and so on) appears
3. Click a wheel card to edit it. Click the **✕** on a card to delete that wheel

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Wheel Title

Enter a name for the wheel. It is used in the wheel list, the dropdowns and the history.

### Wheel Content

1. Click **Edit Content**
2. Enter the options, **one per line**
3. Click **Confirm**

### Weight

Once the wheel has options, each one gets a **Weight** field (minimum 1, default 1). An option's slice size and its chance of being drawn both scale with its weight. For example, an option with weight 2 is twice as likely to be drawn as an option with weight 1.

### Wheel Theme Color

- **Minimal**: the built-in white and gray scheme
- **Custom**: create your own color scheme. Enter a **Name**, pick **Colors (3–5)** with **＋** to add a color and **✕** to remove one, then click **Add**

To change a custom theme, click its **✎** button. To delete it, click **✕**. Custom themes are also offered as color schemes for the wheel animation in [Giveaways](./lottery).

### Remove option after draw

When this is on, a drawn option is taken off the wheel before the next spin. Click **Reset** to put all options back.

## Step 2: Choose a Display Mode and Add the OBS Source

Switch to the **Settings** tab and pick a **Display Mode**:

| Mode | Description | OBS Source URL |
|------|-------------|----------------|
| **Single Wheel** | OBS shows only the selected wheel. Switch wheels with the **Current Wheel** dropdown | `http://127.0.0.1:7272/turntable` |
| **Multiple Wheels** | OBS can show several wheels at once. Each wheel has its own URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

In **Multiple Wheels** mode, choose wheels from **Add to Wheel Display**. Each added wheel gets its own card with its **OBS Source URL**. Click **Copy** to copy it. Click **✕** on a card to remove that wheel from the display.

Add the copied URL to OBS as a browser source. See [How to Add Sources in OBS](../getting-started/obs-source). The Spin Wheel plays no sound, so you don't need to turn on "Control audio via OBS".

:::tip
Also turn on the switch next to **Spin Wheel** in the left sidebar (**Turn on OBS output**). While it is off, the overlay stays hidden.
:::

## Step 3: Spin

On each wheel card in the **Settings** tab:

- **Spin**: starts the spin. When the animation ends, the overlay shows the result. The button can't be clicked while the wheel has no options or is still spinning
- **Reset**: brings back removed options, resets the wheel and clears the current **Winners** list

The card's **Winners** list collects every result since the last **Reset**.

You can also use **Spin** and **Reset** from the [Quick Tools](./quick-tools) window.

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## History

The **History** tab keeps one record for each round, from the first spin up to the next **Reset**. It lists the time, the wheel title and the winners. Only the last 30 days of wheel history is kept. To delete a record, click 🗑 and then **Confirm Delete**.

:::info Trial version limits
- You can create only **1** wheel
- The OBS overlay shows a watermark

See [Trial / Full Version Comparison](../getting-started/trial-comparison) for details.
:::
