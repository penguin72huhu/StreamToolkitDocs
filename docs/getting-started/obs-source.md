---
sidebar_position: 2
---

# How to Add Sources in OBS

Most features of Stream Toolkit require adding a "Browser Source" in OBS to display on your live stream.

## Step 1: Copy the Feature URL

In Stream Toolkit, each feature page displays its corresponding local URL, formatted as:

```
http://127.0.0.1:7272/feature-name
```

Copy the feature URL you want to add.

## Step 2: Add a Browser Source in OBS

1. In the **Sources** section of OBS, click the **+** button at the bottom
2. Select **Browser**
3. Select **Create new**, enter a name for the source (e.g., "Donation Goal Bar"), and click **OK**
4. Paste the URL copied from Step 1 into the **URL** field
5. Adjust the **Width** and **Height** as needed
6. Click **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Features that Require Checking "Control Audio via OBS" below

Includes audio output; you must check **Control Audio via OBS** in the browser source settings for the sound to properly appear in the live stream:

- **Media Board** — Video, Sound
- **Donation Alerts**
- **Song Requests**

How to check:
1. In the OBS sources list, right-click the browser source
2. Select **Properties**
3. Find **Control Audio via OBS** and check it
4. Click **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
If there is still no sound after checking, confirm that the source is not muted in the OBS mixer.
:::
