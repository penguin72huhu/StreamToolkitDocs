---
sidebar_position: 1
---

# 欧付宝设置

本教学说明如何取得欧付宝的 **HashKey** 与 **HashIV**，并填入 Stream Toolkit。

## 步骤一：登录欧付宝厂商后台

1. 前往 [欧付宝官网](https://www.opay.tw/) 并登录账号
2. 登录后点选右上角进入厂商后台

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
如果还没有欧付宝账号，需要先完成商店申请与身份验证。
:::

## 步骤二：进入系统开发管理

1. 左侧菜单找到 **系统开发管理**
2. 点击 **系统介接设置**

![System interface setup in system development menu](./opay-img/step2.png)

## 步骤三：填入 Stream Toolkit

1. 开启 Stream Toolkit
2. 点选左下菜单的 **设置**
3. **赞助平台对接** 找到 **欧付宝**
4. 将 **系统介接设置** 中的 **ALL IN ONE 介接 HashKey**、**ALL IN ONE 介接 HashIV**，分别贴入 **Hash Key** 和 **Hash IV** 栏位

   ![O'Pay interface info](./opay-img/step3-4.png)

5. 点击 **保存**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## 步骤四：设定通知网址

1. 复制 **欧付宝** 的 **幕后通知网址**

   ![Copy the notification URL](./opay-img/step4-1.png)

2. 回到 [欧付宝官网](https://www.opay.tw/)，点选 **我要收款** → **实况主收款设定**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. 将 **幕后通知网址** 贴到 **赞助付款成功通知网址** 栏位

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. 点击 **保存设置**

## 常见问题

**Q：找不到「系统开发管理」菜单？**
代表账号还未通过审核，或尚未开通相关收款功能。请联系欧付宝客服。

**Q：HashKey 可以公开吗？**
不行。HashKey 和 HashIV 属于私密密钥，请勿截图分享或贴到公开场合。
