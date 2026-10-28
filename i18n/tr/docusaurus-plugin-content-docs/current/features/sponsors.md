---
sidebar_position: 9
---

# Bağış panosu

Yayında son bağışların bir listesini gösterir: platform simgesi, bağışçı adı, tutar ve mesaj.

## OBS Kaynak Adresi

```
http://127.0.0.1:7272/sponsors
```

URL'yi **Bağış panosu ayarları** sayfasının üst kısmından kopyalayın ve OBS'e Tarayıcı Kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source).

Panoyu OBS'te göstermek veya gizlemek için sol kenar çubuğunda **Bağış panosu**'nun yanındaki anahtarı kullanın. Kapalıyken pano solarak kaybolur. Anahtar kapalıyken de bağışlar kaydedilmeye devam eder.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Ayarlar Sekmesi

### Entegrasyon platformu

Bağışları kaydedilecek platformları işaretleyin: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Yeşil nokta platformun bağlı olduğu anlamına gelir; aksi hâlde satırda **(Bağlı değil)** görünür. Bu onay kutuları yalnızca panoyu etkiler; Bağış çubuğunu veya Bağış bildirimlerini etkilemez.

**Twitch ⚙️** (Twitch bağlı ve işaretliyken gösterilir):

1. **Bits ve abonelikleri say**, **Yalnızca Bits say** veya **Yalnızca abonelikleri say** seçeneklerinden birini seçin
2. **Yeniden abonelikleri say**: yeniden aboneliklerin kaydedilip kaydedilmeyeceği (abonelikler sayılırken gösterilir)
3. **Şundan az [N] Bits hesaba katılmaz**: daha küçük cheer'ların kaydedilmemesi için işaretleyip bir alt sınır girin (Bits sayılırken gösterilir)
4. **Kaydet**'e tıklayın

**YouTube ⚙️**:

- **@kullanıcı adı yerine izleyici adını göster**: yalnızca Google ile giriş yaptıktan sonra kullanılabilir.
- **Sayılan olaylar**: **Super Chat**, **Super Sticker**, **Yeni üye**, **Üyelik yenileme**, **Hediye üyelik**, **Mücevherler**. **Mücevherler** için Google ile giriş gerekir. Mücevher hediyeleri, para tutarı yerine mücevher simgesi ve mücevher sayısıyla gösterilir.

YouTube canlı sohbeti bağlı değilse satırda **Sohbet adresi bağlı değil** ile birlikte **Otomatik bağlan** (Google ile giriş gerekir) ve **Elle gir** (sizi Ayarlar'daki sohbet adresi alanına götürür) görünür. Bir üyelik olayı işaretli ama üyelik fiyatı ayarlanmamışsa, ayarlamak için **⚠ Üyelik fiyatı yok**'a tıklayın. Bkz. [YouTube Ayarlar](../platforms/youtube-settings).

PayPal, Stripe, O'Pay veya ECPay'i bağlamak için bkz. [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) ve [ECPay](../payments/ecpay).

### Ayarlar

| Alan | Açıklama |
|-------|-------------|
| **Kendi para birimine otomatik çevir** | Varsayılan olarak açık. Tutarları, Ayarlar sayfasında belirlenen **Bağış para birimi**'ne çevrilmiş olarak gösterir. |
| **Maksimum gösterim** | Saklanacak kayıt sayısı (1–100). Varsayılan: 20. Bu sınırın ötesinde yeni bir bağış geldiğinde en eski kayıt kaldırılır. |

## Görünüm Sekmesi

### Önizleme

Önizleme arka planını değiştirmek için **Önizleme**'nin yanındaki renk seçiciyi kullanın. Giriş animasyonunu örnek bir kayıtla oynatmak için **Ekleme animasyonunu test et**'e tıklayın. Örnek kayıt geçmişe kaydedilmez.

Varsayılan görünümü geri yüklemek için **Varsayılana dön**'e tıklayın.

### Görüntü ayarları

- **Platform ikonunu göster**: her kayıtta platformun simgesini gösterir.
- **Giriş yönü**: **Yukarıdan aşağı** (varsayılan), **Aşağıdan yukarı**, **Soldan sağa** veya **Sağdan sola**.

### Yazı tipi

**Başlık** (bağışçı adı), **Gövde metni** (mesaj) ve **Tutar** için yazı tipi, renk ve boyutu (8–72 px) ayarlayın.

### Arka plan rengi

- **Varsayılan**: her kayıt için arka plan rengi.
- **+ Aralık ekle**: bir **Tutar** aralığıyla (**En düşük** ~ **En yüksek**) bir renk ekleyin. Tutarı bu aralığa düşen kayıtlar bunun yerine o rengi kullanır. O tarafta sınır olmaması için En düşük veya En yüksek'i boş bırakın. Bir aralığı kaldırmak için **✕**'e tıklayın.

**Kendi para birimine otomatik çevir** açıkken aralık, çevrilmiş tutarla karşılaştırılır.

### Özel CSS

Panonun CSS'ini düzenlemek için **Özel CSS**'i genişletin. **Varsayılana dön** varsayılan CSS'i geri yükler, **Materyalleri yönet** ise materyal yöneticisini açar. Steam Workshop temaları da burada uygulanabilir. Bir tema uygulanmışken CSS salt okunurdur. Bkz. [Tema stilleri](./themes).

## Geçmiş Sekmesi

### Manuel ekle (test için)

Bir platform seçin, **Ad**, **Tutar** ve isteğe bağlı **Mesaj (isteğe bağlı)** girin, ardından **Ekle**'ye tıklayın. Kayıt yalnızca o platform **Entegrasyon platformu** altında işaretliyse eklenir. Tutar, bağış para biriminiz olarak kabul edilir.

### Geçmiş kayıtları

Kaydedilen kayıtları kayıt sayısıyla birlikte listeler.

- Bir kaydı silmek için **🗑**'e, ardından **Silmeyi onayla**'ya tıklayın.
- Tüm kayıtları silmek için **Temizle**'ye tıklayın. Önce bir onay görünür. Bu işlem geri alınamaz.

:::info Deneme Sürümü
Özel CSS yalnızca tam sürümde kullanılabilir. Gerçek ödeme altyapıları (PayPal / Stripe / O'Pay / ECPay) ile YouTube üyelik olayları ve Mücevherler deneme sürümünde kullanılamaz; pano OBS'te bir filigran gösterir. Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::

## Sıkça Sorulan Sorular

**Q: Test bildirimleri panoda görünüyor.**
Ayarlar sayfasındaki **Test bildirimi** gerçek bir bağış gibi işlenir, bu yüzden o platform işaretliyse burada da kaydedilir. **Geçmiş** sekmesinden silin.
