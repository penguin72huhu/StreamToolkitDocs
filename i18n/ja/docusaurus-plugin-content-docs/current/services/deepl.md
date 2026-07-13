---
sidebar_position: 1
---

# DeepL API Key の取得

DeepL API Key は、以下の機能の自動翻訳に使用されます：
- **音声翻訳** — 音声をテキストに変換した後、自動翻訳します
- **チャット** — 視聴者のメッセージを自動翻訳します

## ステップ 1：DeepL アカウントにログイン

[DeepL](https://www.deepl.com) にアクセスしてアカウントにログインします。まだアカウントをお持ちでない場合は、先に登録が必要です。

## ステップ 2：Account 設定に移動

右上の **アイコン** をクリックし、**Account** を選択します。

![Open Account settings](./deepl-api-img/step2.png)

## ステップ 3：API Keys & limits タブに切り替え

**API Keys & limits** タブをクリックします。

![API Keys & limits tab](./deepl-api-img/step3.png)

## ステップ 4：新しい API Key を作成

1. **Create key +** をクリックします
2. **Name your key**：任意の名前を入力します（例：`Stream Toolkit`）
3. **Permissions**：**All access** を選択します
4. **Create Key** をクリックします

![Create API Key](./deepl-api-img/step4.png)

![API Key created](./deepl-api-img/step4-1.png)

## ステップ 5：コピーして App に貼り付け

1. 生成された API Key をコピーします
2. Stream Toolkit に戻り、対応する **DeepL API Key** 欄に貼り付けます

![Paste API Key](./deepl-api-img/step5.png)

## よくある質問

**Q：DeepL の無料トライアルには使用制限がありますか？**
はい。無料トライアルでは 1,000,000 文字の割り当てがあり、1ヶ月以内の使用に限られます。高品質な翻訳を継続して使用するには、DeepL の有料プランに登録してください。

**Q：API Key が漏洩した場合はどうすればよいですか？**
DeepL Account → API Keys & limits に戻り、古い Key を削除して新しく作成します。
