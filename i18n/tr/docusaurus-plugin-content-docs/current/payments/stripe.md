---
sidebar_position: 3
---

# Stripe Ayarları

Stream Toolkit, Stripe ödeme bildirimlerini Webhook aracılığıyla alır. Kurulum iki bölümden oluşur: app üzerinden Webhook URL'sini almak ve Stripe panelinde entegrasyonu tamamlamak.

## Adım 1: Stream Toolkit'te Webhook URL'sini Alın

1. Stream Toolkit'ı açın
2. Sol alt menüdeki **Ayarlar** → **Bağış platformu entegrasyonu** → **Stripe** seçeneğine tıklayın (Genişletmek için tıklayın)
3. Aşağıdaki biçimde bir **Webhook URL** göreceksiniz:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. **Kopyala** butonuna tıklayın ve bu URL'yi daha sonra kullanmak üzere kaydedin

![Get webhook URL](./stripe-img/step1.png)

## Adım 2: Stripe Panelinde Webhook Ekle

1. [Stripe Dashboard](https://dashboard.stripe.com) adresine gidin ve hesabınıza giriş yapın
2. Sol alt köşedeki **Geliştiriciler** → **Webhook** seçeneğine tıklayın

![Stripe webhook list page](./stripe-img/step2-1.png)

3. **Uç nokta ekle** butonuna tıklayın

![Add destination](./stripe-img/step2-2.png)

4. Aşağıdaki bilgileri doldurun:
   - **Etkinlikler**: `checkout.session.completed` etkinliğini arayın ve işaretleyin (yalnızca bu yeterlidir)

   ![Select events](./stripe-img/step2-3.png)

   - **Uç nokta türü**: **Webhook uç noktası** seçeneğini belirleyin

   ![Select destination type](./stripe-img/step2-4.png)

   - **Uç nokta adı**: İstediğiniz bir isim yazın (örneğin, `Stream Toolkit`)
   - **Uç nokta URL'si**: Adım 1'de kopyaladığınız Webhook URL'sini yapıştırın

   ![Enter name and URL](./stripe-img/step2-5.png)

5. **Uç nokta ekle** butonuna tıklayın

## Adım 3: İmza Gizli Anahtarını Girin

1. Webhook oluşturulduktan sonra sayfada `whsec_...` biçiminde **imza gizli anahtarı** gösterilecektir
2. Bu gizli anahtarı kopyalayın
3. Stream Toolkit uygulamasındaki Stripe ayarları bölümüne geri dönün
4. Gizli anahtarı **Webhook imza gizli anahtarı** alanına yapıştırın
5. **Kaydet** butonuna tıklayın

Bağlantı durumu yeşile döndüğünde kurulum başarıyla tamamlanmış demektir.

![Paste signing secret](./stripe-img/step3.png)

## Tamamlandı

Kurulum tamamlandıktan sonra izleyiciler Stripe **Payment Link** bağlantınız üzerinden ödeme yaptığında, Stream Toolkit gerçek zamanlı olarak bildirim alacak ve bağışı gösterecektir.

## Sıkça Sorulan Sorular

**Q: Payment Link nereden oluşturulur?**
Stripe Dashboard → **Payment Links** → **Payment Link oluştur** sayfasına gidin, tutarı ayarlayın ve bağlantıyı izleyicilerinizle paylaşın.

**Q: Bağlantı durumu yeşile dönmedi mi?**
Webhook imza gizli anahtarı bilgisinin doğru yapıştırılıp kaydedildiğinden ve Stripe panelindeki uç nokta URL'sinin app üzerinde gösterilenle tamamen aynı olduğundan emin olun.
