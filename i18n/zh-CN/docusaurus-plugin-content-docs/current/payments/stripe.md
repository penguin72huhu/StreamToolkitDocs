---
sidebar_position: 3
---

# Stripe 设置

Stream Toolkit 透过 Webhook 接收 Stripe 付款通知。设定分为两个部分：从 app 取得 Webhook 网址，以及在 Stripe 后台完成串接。

## 步骤一：在 Stream Toolkit 取得 Webhook 网址

1. 开启 Stream Toolkit
2. 点选左下菜单的 **设置** → **赞助平台对接** → **Stripe**（点击展开）
3. 看到 **Webhook URL**，格式如下：
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. 点击 **复制** 按钮，储存这个网址备用

![Get webhook URL](./stripe-img/step1.png)

## 步骤二：在 Stripe 后台新增 Webhook

1. 前往 [Stripe Dashboard](https://dashboard.stripe.com)，登录账号
2. 点击左下角 **开发人员** → **Webhook**

![Stripe webhook list page](./stripe-img/step2-1.png)

3. 点击 **添加接收端**

![Add destination](./stripe-img/step2-2.png)

4. 填写以下资讯：
   - **事件**：搜寻并勾选 `checkout.session.completed`（只需这一个）

   ![Select events](./stripe-img/step2-3.png)

   - **接收端类型**：选择 **Webhook 端点**

   ![Select destination type](./stripe-img/step2-4.png)

   - **接收端名称**：随意填写（例如 `Stream Toolkit`）
   - **端点 URL**：贴上步骤一复制的 Webhook 网址

   ![Enter name and URL](./stripe-img/step2-5.png)

5. 点击 **创建目的地**

## 步骤三：填入签名密钥

1. Webhook 建立完成后，页面会显示 **签名密钥**，格式为 `whsec_...`
2. 复制这串密钥
3. 回到 Stream Toolkit 的 Stripe 设置区
4. 将密钥贴入 **Webhook 签名密钥** 栏位
5. 点击 **保存**

连接状态变为绿色即代表设置成功。

![Paste signing secret](./stripe-img/step3.png)

## 完成

设置完成后，观众透过你的 Stripe **Payment Link** 付款，Stream Toolkit 就会即时收到通知并显示赞助。

## 常见问题

**Q：在哪里建立 Payment Link？**
前往 Stripe Dashboard → **Payment Links** → **建立 Payment Link**，设定好金额后分享链接给观众即可。

**Q：连接状态没有变绿？**
确认 Webhook 签名密钥 有正确贴入并点击保存，且 Stripe 后台的端点 URL 与 app 显示的完全一致。
