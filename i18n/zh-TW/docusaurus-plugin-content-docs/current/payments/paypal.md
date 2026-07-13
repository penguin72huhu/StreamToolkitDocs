---
sidebar_position: 3
---

# PayPal 設定

Stream Toolkit 使用 Webhook 接收 PayPal 付款通知，不需要填入 API 金鑰。

## 步驟一：在 Stream Toolkit 取得 Webhook 網址

1. 開啟 Stream Toolkit
2. 點選左下選單的 **設定**
3. 找到 **贊助平台串接** → **PayPal**
4. 點擊 **取得網址** 按鈕
5. 網址產生後，點擊 **複製** 按鈕

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning 注意
Webhook 網址含有專屬 token，請勿公開分享。若懷疑外洩，可點擊**重新取得網址**換發新網址（舊網址會立即失效）。
:::

## 步驟二：登入 PayPal 開發者後台

1. 前往 [PayPal Developer](https://developer.paypal.com)
2. 點擊右上角 **Log in to Dashboard**，用 PayPal 帳號登入
3. 登入後點擊右上角的 **`</>`** 按鈕進入開發者後台

![PayPal developer button at top right](./paypal-img/step2.png)

## 步驟三：切換到 Live 模式

確認左側選單上方的模式開關是 **Live**。如果顯示為 **Sandbox**（測試模式），才需要切換：

1. 找到左側選單上方的切換開關
2. 點擊切換為 **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## 步驟四：前往 Webhooks 設定

1. 左側選單點擊 **Apps & Credentials**

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. 頁面中找到 **Manage Webhooks** 按鈕，點擊進入

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. 滑到頁面最下方，點擊 **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## 步驟五：新增 Webhook

1. 在 **Webhook URL** 欄位貼上剛才從 Stream Toolkit 複製的網址
2. 在 **Event types** 找到 **Payments & payouts** 分類，勾選：
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. 點擊 **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

設定完成後，觀眾透過 PayPal 付款，Stream Toolkit 就會即時收到通知。

## 常見問題

**Q：Sandbox 模式可以測試嗎？**
可以。在 Sandbox 模式下同樣可以新增 Webhook，用於測試付款流程，但不會收到真實款項。

**Q：Webhook 網址重新產生後怎麼辦？**
需要回到 PayPal 後台，把舊的 Webhook 網址改成新的。
