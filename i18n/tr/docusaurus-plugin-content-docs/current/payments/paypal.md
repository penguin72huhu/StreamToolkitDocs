---
sidebar_position: 3
---

# PayPal Ayarları

Stream Toolkit, PayPal ödeme bildirimlerini almak için Webhook kullanır, bu nedenle bir API anahtarı girmeniz gerekmez.

## Adım 1: Stream Toolkit'te Webhook URL'sini Alın

1. Stream Toolkit'ı açın
2. Sol alt menüdeki **Ayarlar** seçeneğine tıklayın
3. **Bağış platformu entegrasyonu** → **PayPal** seçeneğini bulun
4. **Adresi al** butonuna tıklayın
5. URL oluşturulduktan sonra **Kopyala** butonuna tıklayın

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Uyarı
Webhook URL'si size özel bir token içerir, lütfen herkese açık olarak paylaşmayın. Sızdırıldığından şüpheleniyorsanız, yeni bir URL oluşturmak için **Adresi yeniden al** butonuna tıklayabilirsiniz (eski URL anında geçersiz olacaktır).
:::

## Adım 2: PayPal Geliştirici Panelinde Oturum Açın

1. [PayPal Developer](https://developer.paypal.com) adresine gidin
2. Sağ üst köşedeki **Log in to Dashboard** butonuna tıklayın ve PayPal hesabınızla giriş yapın
3. Giriş yaptıktan sonra geliştirici paneline geçmek için sağ üst köşedeki **`</>`** butonuna tıklayın

![PayPal developer button at top right](./paypal-img/step2.png)

## Adım 3: Live Moduna Geçin

Sol menünün üzerindeki mod anahtarının **Live** olarak ayarlandığından emin olun. Yalnızca **Sandbox** (test modu) olarak görünüyorsa değiştirmeniz gerekir:

1. Sol menünün üzerindeki geçiş anahtarını bulun
2. **Live** moduna geçmek için tıklayın

![Sandbox/Live toggle](./paypal-img/step3.png)

## Adım 4: Webhooks Ayarlarına Gidin

1. Sol menüdeki **Apps & Credentials** seçeneğine tıklayın

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Sayfadaki **Manage Webhooks** butonunu bulun ve giriş yapmak için tıklayın

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Sayfanın en altına kaydırın ve **Add Webhook** butonuna tıklayın

   ![Add Webhook button](./paypal-img/step4-3.png)

## Adım 5: Webhook Ekle

1. Az önce Stream Toolkit'ten kopyaladığınız URL'yi **Webhook URL** alanına yapıştırın
2. **Event types** altında **Payments & payouts** kategorisini bulun ve işaretleyin:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. **Save** butonuna tıklayın

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Ayarlar tamamlandıktan sonra, izleyiciler PayPal üzerinden ödeme yaptığında Stream Toolkit anlık olarak bildirim alacaktır.

## Sıkça Sorulan Sorular

**Q: Sandbox modunda test yapılabilir mi?**
Evet. Ödeme sürecini test etmek için Sandbox modunda da bir Webhook ekleyebilirsiniz ancak gerçek para almazsınız.

**Q: Webhook URL'si yeniden oluşturulduktan sonra ne yapılmalı?**
PayPal paneline geri dönmeniz ve eski Webhook URL'sini yenisiyle değiştirmeniz gerekir.
