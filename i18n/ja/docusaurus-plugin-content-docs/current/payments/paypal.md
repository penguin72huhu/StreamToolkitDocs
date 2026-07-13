---
sidebar_position: 3
---

# PayPal 設定

Stream Toolkit は Webhook を使用して PayPal の決済通知を受信するため、API キーを入力する必要はありません。

## ステップ 1：Stream Toolkit で Webhook URL を取得

1. Stream Toolkit を起動します
2. 左下のメニューの **設定** をクリックします
3. **サポートプラットフォーム連携** → **PayPal** を見つけます
4. **URL を取得** ボタンをクリックします
5. URL が生成されたら、**コピー** ボタンをクリックします

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning 注意
Webhook URL には専用の token が含まれているため、公開しないでください。漏洩の疑いがある場合は、**URL を再取得** をクリックして新しい URL を発行できます（古い URL はすぐに無効になります）。
:::

## ステップ 2：PayPal デベロッパーダッシュボードにログイン

1. [PayPal Developer](https://developer.paypal.com) に移動します
2. 右上の **Log in to Dashboard** をクリックし、PayPal アカウントでログインします
3. ログイン後、右上の **`</>`** ボタンをクリックしてデベロッパーダッシュボードに入ります

![PayPal developer button at top right](./paypal-img/step2.png)

## ステップ 3：Live モードに切り替える

左側メニューの上部にあるモードスイッチが **Live** になっていることを確認します。**Sandbox**（テストモード）と表示されている場合のみ、切り替える必要があります。

1. 左側メニューの上部にある切り替えスイッチを見つけます
2. クリックして **Live** に切り替えます

![Sandbox/Live toggle](./paypal-img/step3.png)

## ステップ 4：Webhooks の設定移動する

1. 左側メニューの **Apps & Credentials** をクリックします

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. ページ内にある **Manage Webhooks** ボタンを見つけ、クリックして入ります

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. ページの一番下までスクロールし、**Add Webhook** をクリックします

   ![Add Webhook button](./paypal-img/step4-3.png)

## ステップ 5：Webhook を追加

1. 先ほど Stream Toolkit からコピーした URL を **Webhook URL** 欄に貼り付けます
2. **Event types** で **Payments & payouts** カテゴリを見つけ、以下にチェックを入れます：
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. **Save** をクリックします

{/* TODO: 截圖 — Add Webhook 設定頁 */}

設定が完了すると、視聴者が PayPal で決済した際に Stream Toolkit がリアルタイムで通知を受信します。

## よくある質問

**Q：Sandbox モードでテストはできますか？**
はい、可能です。Sandbox モードでも同様に Webhook を追加して決済フローをテストできますが、実際の売上金は発生しません。

**Q：Webhook URL を再取得した後はどうすればよいですか？**
PayPal のダッシュボードに戻り、古い Webhook URL を新しいものに変更する必要があります。
