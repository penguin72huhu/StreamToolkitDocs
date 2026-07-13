---
sidebar_position: 2
---

# ECPay 設定

このチュートリアルでは、ECPay から **HashKey** と **HashIV** を取得し、Stream Toolkit に入力する方法を説明します。

## ステップ 1：ECPay 加盟店管理画面にログイン

1. [ECPay 公式サイト](https://www.ecpay.com.tw/) にアクセスします
2. 右上の **セラーログイン** → **加盟店専用エリア** をクリックします

## ステップ 2：システム連携設定 に移動

1. 左側メニューの **システム設定** をクリックします
2. **システム連携設定** を選択します

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. **連携 Hash Key** と **連携 Hash IV** を探します

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## ステップ 3：Stream Toolkit に入力

1. Stream Toolkit を起動します
2. 左下のメニューの **設定** をクリックします
3. **サポートプラットフォーム連携** で **ECPay** を探します
4. **システム連携設定** にある **連携 HashKey** と **連携 HashIV** を、それぞれ **Hash Key** と **Hash IV** 欄に入力します
5. **保存** をクリックします

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## ステップ 4：通知 URL の設定

1. ECPay の **バックグラウンド通知 URL** をコピーします

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. ECPay 加盟店管理画面にて、**支払いツール** → **配信者向け支払い** を探します

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. **バックグラウンド通知 URL** を **支払い完了通知返信 URL** 欄に貼り付けます

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. **設定を保存** をクリックします

## よくある質問

**Q：ログイン後に「システム設定」が表示されませんか？**
アカウントの審査が完了していない可能性があります。「加盟店資料管理」にて審査状況を確認してください。

**Q：HashKey は公開しても大丈夫ですか？**
いいえ。HashKey と HashIV はプライベートキーです。スクリーンショットを共有したり、公開の場に投稿したりしないでください。
