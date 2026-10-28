---
sidebar_position: 7
---

# Bağış çubuğu

Yayında bir bağış hedefine doğru ilerleme çubuğu gösterir. Seçtiğiniz platformlardan gelen bağışlar toplama otomatik olarak eklenir.

## OBS Kaynak Adresi

```
http://127.0.0.1:7272/donate
```

URL'yi **Bağış çubuğu ayarları** sayfasının üst kısmından kopyalayın ve OBS'e Tarayıcı Kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source).

Çubuğu OBS'te göstermek veya gizlemek için sol kenar çubuğunda **Bağış çubuğu**'nun yanındaki anahtarı kullanın. Kapalıyken çubuk gizlenir.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Para Birimi

Çubuk, **Ayarlar** sayfasında belirlenen **Bağış para birimi**'ni kullanır. Diğer para birimlerindeki bağışlar eklenmeden önce bu para birimine çevrilir. Bir bağışın para birimi çevrilemezse çubuğa eklenmez (Bağış bildirimleri ve Bağış panosu onu yine orijinal para biriminde gösterir).

## Ayarlar Sekmesi

### Entegrasyon platformu

Bağışları çubuğa sayılacak platformları işaretleyin:

- **Twitch** — Bits ve abonelikler
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Yeşil nokta platformun bağlı olduğu anlamına gelir; aksi hâlde satırda **(Bağlı değil)** görünür. Bu onay kutuları yalnızca çubuğun neyi sayacağını belirler. Kendi platform listeleri olan Bağış bildirimlerini veya Bağış panosunu etkilemez.

- **YouTube**: canlı sohbet bağlı değilse satırda **Sohbet adresi bağlı değil** ile birlikte iki düğme görünür: **Otomatik bağlan** (Google ile giriş gerekir) ve **Elle gir** (sizi Ayarlar'daki sohbet adresi alanına götürür). Bkz. [YouTube Ayarlar](../platforms/youtube-settings).
- **YouTube ⚙️**: çubuğa hangi **Sayılan olaylar**'ın ekleneceğini seçin: **Super Chat**, **Super Sticker**, **Yeni üye**, **Üyelik yenileme**, **Hediye üyelik**, **Mücevherler**. **Mücevherler** için Google ile giriş gerekir.
- Herhangi bir üyelik olayı işaretli ama üyelik fiyatı ayarlanmamışsa **⚠ Üyelik fiyatı yok** görünür. Ayarlar'a gidip YouTube **Dönüşüm ayarları** altında seviye fiyatlarını girmek için tıklayın.
- Twitch Bits ve aboneliklerinin değeri Ayarlar → Twitch → **Dönüşüm ayarları**'nda belirlenir. Bkz. [Twitch Ayarlar](../platforms/twitch).
- PayPal, Stripe, O'Pay veya ECPay'i bağlamak için bkz. [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) ve [ECPay](../payments/ecpay).

### Mevcut ilerleme

Mevcut toplamı, hedefi ve yüzdeyi gösterir.

| Alan | Açıklama |
|-------|-------------|
| **Başlık** | İsteğe bağlı. Çubuğun üstünde gösterilir. |
| **Hedef tutar** | Bağış para biriminizde hedef tutar. |
| **Manuel ekle** | Toplama eklemek için bir tutar girip **Ekle**'ye tıklayın (veya Enter'a basın). |
| **Sıfırla** | Mevcut toplamı sıfıra döndürür. Önce bir onay görünür. Bu işlem geri alınamaz. |

## Görünüm Sekmesi

### Önizleme

Önizleme, çubuğu örnek tutarlarla gösterir. Önizleme arka planını değiştirmek için **Önizleme**'nin yanındaki renk seçiciyi kullanın. Çubuğu tamamlanmış hâliyle görmek için **Önizleme tamamlandı**'yı işaretleyin.

### Yazı Tipi ve Renk

Varsayılan görünümü geri yüklemek için **Varsayılana dön**'e tıklayın.

- **Yazı tipi**: **Başlık**, **Tutar** ve **Yüzde** için yazı tipi, renk ve boyutu (8–72 px) ayarlayın.
- **Renk**: **Arka plan**, **Hedef çubuğu** (dolgu rengi) ve **Hedef çubuğu tamamlandı** (hedefe ulaşıldığında dolgu rengi) ayarlayın.

### Özel CSS

Çubuğun CSS'ini düzenlemek için **Özel CSS**'i genişletin. **Varsayılana dön** varsayılan CSS'i geri yükler, **Materyalleri yönet** ise CSS'inizde kullanmak istediğiniz görseller için materyal yöneticisini açar. Steam Workshop temaları da burada uygulanabilir. Bir tema uygulanmışken CSS, geri yükleyene kadar salt okunurdur. Bkz. [Tema stilleri](./themes).

:::info Deneme Sürümü
Özel CSS yalnızca tam sürümde kullanılabilir. Gerçek ödeme altyapıları (PayPal / Stripe / O'Pay / ECPay) ile YouTube üyelik olayları ve Mücevherler deneme sürümünde kullanılamaz; overlay bir filigran gösterir. Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::

## Sıkça Sorulan Sorular

**Q: Test bildirimi gönderdikten sonra toplam arttı.**
Ayarlar sayfasındaki **Test bildirimi** gerçek bir bağış olarak sayılır, bu yüzden çubuğa eklenir (o platform işaretliyse). Testten sonra toplamı sıfıra döndürmek için **Sıfırla**'ya tıklayın.
