---
sidebar_position: 1
---

# YouTube API 设置

本教学说明如何取得 YouTube Data API 的 **API Key** 和**频道 ID**，用于`实况精彩标记`功能。

## YouTube Data API

### 步骤一：开启 Google Cloud Console

1. 前往 [Google Cloud Console](https://console.cloud.google.com)
2. 用你的 Google 账号登录

### 步骤二：启用 YouTube Data API v3

1. 在上方搜寻栏搜寻 `YouTube Data API v3`

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. 点击搜寻结果
3. 点击 **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### 步骤三：建立 API 金钥

1. 点击左方 **Credentials**

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. 点选 **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### 步骤四：设置 API 金钥

1. **Name** 随意填（例如：`StreamToolkit`）
2. **Select API restrictions** 勾选 `YouTube Data API v3` 后按 **OK**

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. **Authenticate API calls through a service account** 不勾选
4. **Application restrictions** 选 **None**

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. 点击 **Create**

### 步骤五：填入 App

1. 将得到的 API Key 贴入 App 中 **YouTube API** 栏位

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## 频道 ID

### 步骤一：开启 YouTube 设置

1. 前往 [YouTube](https://www.youtube.com)
2. 点选右上角头像
3. 选择 **设置**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### 步骤二：取得 频道 ID

1. 左侧栏位选择 **高级设置**

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. 将 **频道 ID** 复制后贴回 App

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## 常见问题

**Q：API 金钥有使用量限制吗？**
有。YouTube Data API v3 每天免费额度为 10,000 单位。一般直播用量不会超过。

**Q：出现「API Key 无效」错误？**
确认 YouTube Data API v3 已启用，且使用的是正确专案的金钥。

**Q：金钥可以公开吗？**
不建议。若金钥外泄被滥用，你的每日配额会被快速耗尽。
