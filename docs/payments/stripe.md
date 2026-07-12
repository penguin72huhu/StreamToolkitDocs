---
sidebar_position: 3
---

# Stripe 設定

Stream Toolkit 透過 Webhook 接收 Stripe 付款通知。設定分為兩個部分：從 app 取得 Webhook 網址，以及在 Stripe 後台完成串接。

## 步驟一：在 Stream Toolkit 取得 Webhook 網址

1. 開啟 Stream Toolkit
2. 點選左側選單的 **全域設定** → **贊助平台串接** → **Stripe**（點擊展開）
3. 看到 **Webhook URL**，格式如下：
   ```
   https://<worker>/stripe/webhook/<你的userId>
   ```
4. 點擊 **複製** 按鈕，儲存這個網址備用

![取得 Webhook 網址](./stripe-img/step1.png)

## 步驟二：在 Stripe 後台新增 Webhook

1. 前往 [Stripe Dashboard](https://dashboard.stripe.com)，登入帳號
2. 點擊左下角 **開發人員** → **Webhook**

![Stripe Webhook 列表頁](./stripe-img/step2-1.png)

3. 點擊 **添加接收端**

![添加接收端](./stripe-img/step2-2.png)

4. 填寫以下資訊：
   - **事件**：搜尋並勾選 `checkout.session.completed`（只需這一個）

   ![選擇事件](./stripe-img/step2-3.png)

   - **接收端類型**：選擇 **Webhook 端點**

   ![選擇接收端類型](./stripe-img/step2-4.png)

   - **接收端名稱**：隨意填寫（例如 `Stream Toolkit`）
   - **端點 URL**：貼上步驟一複製的 Webhook 網址

   ![填入名稱與網址](./stripe-img/step2-5.png)

5. 點擊 **創建目的地**

## 步驟三：填入簽名密鑰

1. Webhook 建立完成後，頁面會顯示 **簽名密鑰**，格式為 `whsec_...`
2. 複製這串密鑰
3. 回到 Stream Toolkit 的 Stripe 設定區
4. 將密鑰貼入 **Webhook signing secret** 欄位
5. 點擊 **儲存**

連接狀態變為綠色即代表設定成功。

![填入簽名密鑰](./stripe-img/step3.png)

## 完成

設定完成後，觀眾透過你的 Stripe **Payment Link** 付款，Stream Toolkit 就會即時收到通知並顯示贊助。

## 常見問題

**Q：在哪裡建立 Payment Link？**
前往 Stripe Dashboard → **Payment Links** → **建立 Payment Link**，設定好金額後分享連結給觀眾即可。

**Q：連接狀態沒有變綠？**
確認 Webhook signing secret 有正確貼入並點擊儲存，且 Stripe 後台的端點 URL 與 app 顯示的完全一致。
