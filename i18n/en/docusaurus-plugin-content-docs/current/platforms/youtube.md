---
sidebar_position: 1
---

# YouTube API Settings

This tutorial explains how to obtain the **API Key** and **Channel ID** for the YouTube Data API, used for the `Stream Highlight Marker` feature.

## YouTube Data API

### Step 1: Open Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Log in with your Google account

### Step 2: Enable YouTube Data API v3

1. Search for `YouTube Data API v3` in the top search bar

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. Click on the search result
3. Click **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### Step 3: Create API Key

1. Click **Credentials** on the left

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. Click **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### Step 4: Configure API Key

1. Enter any **Name** (e.g., `StreamToolkit`)
2. Under **Select API restrictions**, check `YouTube Data API v3` and click **OK**

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. Leave **Authenticate API calls through a service account** unchecked
4. Select **None** for **Application restrictions**

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. Click **Create**

### Step 5: Fill into the App

1. Paste the obtained API Key into the **YouTube API** field in the App

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## Channel ID

### Step 1: Open YouTube Settings

1. Go to [YouTube](https://www.youtube.com)
2. Click your profile picture in the top right corner
3. Select **Settings**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### Step 2: Get Channel ID

1. Select **Advanced settings** from the left menu

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. Copy the **Channel ID** and paste it back into the App

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## FAQ

**Q: Are there usage limits for the API Key?**
Yes. The YouTube Data API v3 has a free daily quota of 10,000 units. Normal streaming usage will not exceed this limit.

**Q: Getting an "Invalid API Key" error?**
Make sure that the YouTube Data API v3 is enabled and that you are using the key from the correct project.

**Q: Can the key be made public?**
Not recommended. If your key is leaked and abused, your daily quota will be depleted quickly.
