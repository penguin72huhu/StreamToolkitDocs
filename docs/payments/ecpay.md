---
sidebar_position: 2
---

# 綠界設定

本教學說明如何取得綠界的 **HashKey** 與 **HashIV**，並填入 Stream Toolkit。

## 步驟一：登入綠界廠商後台

1. 前往 [綠界官網](https://www.ecpay.com.tw/)
2. 點擊右上角 **賣家登入** > **廠商專區**

## 步驟二：進入系統介接設定

1. 點選左側選單的 **系統設定**
2. 選擇 **系統介接設定**

   ![系統設定選單中的系統介接設定](./ecpay-img/step2-2.png)

3. 找到 **介接Hash Key** 和 **介接Hash IV**

   ![介接 HashKey 與介接 HashIV](./ecpay-img/step2-3.png)

## 步驟三：填入 Stream Toolkit

1. 開啟 Stream Toolkit
2. 點選左下選單的 **設定**
3. **贊助平台串接** 找到 **綠界**
4. 將 **系統介接設定** 中的 **介接 HashKey**、**介接 HashIV**，分別貼入 **Hash Key** 和 **Hash IV** 欄位
5. 點擊 **儲存**

![Stream Toolkit 綠界設定欄位](./ecpay-img/step3.png)

## 步驟四：設定通知網址

1. 複製 **綠界** 的 **幕後通知網址**

   ![複製幕後通知網址](./ecpay-img/step4-1.png)

2. 綠界廠商專區裡找到 **收款工具** > **實況主收款**

   ![收款工具選單中的實況主收款](./ecpay-img/step4-2.png)

3. 將 **幕後通知網址** 貼到 **付款完成通知回傳網址** 欄位

   ![付款完成通知回傳網址欄位](./ecpay-img/step4-3.png)

4. 點擊 **儲存設定**

## 常見問題

**Q：登入後看不到「系統設定」？**
帳號可能尚未完成審核。請至「廠商資料管理」確認審核狀態。

**Q：HashKey 可以公開嗎？**
不行。HashKey 和 HashIV 屬於私密金鑰，請勿截圖分享或貼到公開場合。
