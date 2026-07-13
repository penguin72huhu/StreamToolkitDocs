---
sidebar_position: 2
---

# 绿界设置

本教学说明如何取得绿界的 **HashKey** 与 **HashIV**，并填入 Stream Toolkit。

## 步骤一：登录绿界厂商后台

1. 前往 [绿界官网](https://www.ecpay.com.tw/)
2. 点击右上角 **卖家登录** → **厂商专区**

## 步骤二：进入系统介接设置

1. 点击左侧菜单的 **系统设置**
2. 选择 **系统介接设置**

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. 找到 **介接Hash Key** 和 **介接Hash IV**

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## 步骤三：填入 Stream Toolkit

1. 开启 Stream Toolkit
2. 点选左下菜单的 **设置**
3. **赞助平台对接** 找到 **绿界**
4. 将 **系统介接设置** 中的 **介接 HashKey**、**介接 HashIV**，分别贴入 **Hash Key** 和 **Hash IV** 栏位
5. 点击 **保存**

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## 步骤四：设定通知网址

1. 复制 **绿界** 的 **幕后通知网址**

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. 在绿界厂商专区里找到 **收款工具** → **实況主收款**

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. 将 **幕后通知网址** 贴到 **付款完成通知回传网址** 栏位

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. 点击 **保存设置**

## 常见问题

**Q：登录后看不到「系统设置」？**
账号可能尚未完成审核。请至「厂商资料管理」确认审核状态。

**Q：HashKey 可以公开吗？**
不行。HashKey 和 HashIV 属于私密密钥，请勿截图分享或贴到公开场合。
