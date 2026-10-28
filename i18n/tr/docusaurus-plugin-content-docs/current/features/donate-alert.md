---
sidebar_position: 8
---

# Bağış bildirimleri

Biri bağış yaptığında görsel, ses, bağışçı adı, tutar ve mesaj içeren bir bildirim açar.

## OBS Kaynak Adresi

```
http://127.0.0.1:7272/donate-alert
```

URL'yi **Bağış bildirimleri ayarları** sayfasının üst kısmından kopyalayın ve OBS'e Tarayıcı Kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source).

:::warning
Bildirimler ses çalar. Tarayıcı kaynağı özelliklerinde **Sesi OBS üzerinden kontrol et** seçeneğini işaretleyin, aksi hâlde ses yayında duyulmaz.
:::

Bildirimleri açıp kapatmak için sol kenar çubuğunda **Bağış bildirimleri**'nin yanındaki anahtarı kullanın. Kapalıyken hiçbir bildirim gösterilmez (test bildirimleri dahil), ancak bağışlar [Bağış panosu](./sponsors)'na kaydedilmeye devam eder.

Birkaç bağış art arda geldiğinde bildirimler sıraya alınır ve birbiri ardına gösterilir.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Ayarlar Sekmesi

### Entegrasyon platformu

Bildirim tetiklemesi gereken platformları işaretleyin: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Yeşil nokta platformun bağlı olduğu anlamına gelir; aksi hâlde satırda **(Bağlı değil)** görünür. Bu onay kutuları yalnızca bildirimleri etkiler; Bağış çubuğunu veya Bağış panosunu etkilemez.

**Twitch ⚙️** (Twitch bağlı ve işaretliyken gösterilir):

1. **Bits ve abonelikleri say**, **Yalnızca Bits say** veya **Yalnızca abonelikleri say** seçeneklerinden birini seçin
2. **Yeniden abonelikleri say**: yeniden aboneliklerin bildirim tetikleyip tetiklemeyeceği (abonelikler sayılırken gösterilir)
3. **Şundan az [N] Bits hesaba katılmaz**: daha küçük cheer'ların bildirim tetiklememesi için işaretleyip bir alt sınır girin (Bits sayılırken gösterilir)
4. **Kaydet**'e tıklayın

**YouTube ⚙️**:

- **@kullanıcı adı yerine izleyici adını göster**: yalnızca Google ile giriş yaptıktan sonra kullanılabilir.
- **Sayılan olaylar**: **Super Chat**, **Super Sticker**, **Yeni üye**, **Üyelik yenileme**, **Hediye üyelik**, **Mücevherler**. **Mücevherler** için Google ile giriş gerekir.

YouTube canlı sohbeti bağlı değilse satırda **Sohbet adresi bağlı değil** ile birlikte **Otomatik bağlan** (Google ile giriş gerekir) ve **Elle gir** (sizi Ayarlar'daki sohbet adresi alanına götürür) görünür. Bir üyelik olayı işaretli ama üyelik fiyatı ayarlanmamışsa, ayarlamak için **⚠ Üyelik fiyatı yok**'a tıklayın. Bkz. [YouTube Ayarlar](../platforms/youtube-settings).

PayPal, Stripe, O'Pay veya ECPay'i bağlamak için bkz. [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) ve [ECPay](../payments/ecpay).

### Ayarlar

| Alan | Açıklama |
|-------|-------------|
| **Kendi para birimine otomatik çevir** | Varsayılan olarak açık. Tutarı, Ayarlar sayfasında belirlenen **Bağış para birimi**'ne çevrilmiş olarak gösterir. |
| **Görüntüleme süresi** | Her bildirimin ekranda kalma süresi, saniye cinsinden. Varsayılan: 6. |

## Görünüm Sekmesi

### Önizleme

Önizleme, OBS kaynağıyla aynı sayfayı kullanır. Önizleme arka planını değiştirmek için **Önizleme**'nin yanındaki renk seçiciyi kullanın; bildirim animasyonunu tekrar oynatmak için **▶ Animasyonu yeniden oynat**'a tıklayın.

### Ortak stil / Her platform ayrı

- **Ortak stil**: tüm platformlar aynı bildirim stilini kullanır.
- **Her platform ayrı**: her platformun kendi stili vardır. Aşağıdaki düğmelerle platformu seçin (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) ve ayarlarını düzenleyin. İlk geçişte, özelleştirmediğiniz platformlar mevcut ortak stili kopyalar; her birinin kendi geri sayım çubuğu rengi olur.

**Varsayılana dön**, düzenlediğiniz stil için varsayılan stili geri yükler.

### Görsel

- **Görsel seç**: materyal yöneticisinden bir görsel seçin. Görsel yoksa bir kalp emojisi gösterilir. **Temizle** görseli kaldırır.
- **Görsel boyutu**: 1–400 px.
- **Görsel konumu**: **Sol**, **Sağ**, **Üst** veya **Alt**.

### Ses efekti

Yerleşik bir ses seçin: **Yok**, **Çınlama** (varsayılan), **Bozuk para**, **Çan**, **Pop**, **Fanfar**. Dinlemek için **▶**'e tıklayın. Materyal yöneticisinden kendi ses dosyanızı kullanmak için **Ses seç**'e tıklayın.

### Metin görünümü

- **Varsayılan**: tutar, bağışçı adı ve mesaj ayrı satırlarda gösterilir.
- **Özel metin**: kendi satırınızı yazın. Bağışçı adı için `{name}`, tutar için `{amount}` kullanın, ör. `{name} teşekkürler, {amount} bağış!`

### Metin ve Renk

- **Metin**: **Tutar**, **Bağışçı adı** ve **Mesaj** için yazı tipi, boyut ve renk ayarlayın (Özel metin modunda ayrıca **Özel metin**).
- **Renk**: **Arka plan**, **Gölge** ve **Geri sayım çubuğu**.

### Özel CSS

Düzenlediğiniz stilin (ortak veya seçili platform) CSS'ini düzenlemek için **Özel CSS**'i genişletin. **Varsayılana dön** şablon CSS'i geri yükler, **Materyalleri yönet** ise materyal yöneticisini açar. Steam Workshop temaları da burada uygulanabilir. Bir tema uygulanmışken CSS salt okunurdur. Bkz. [Tema stilleri](./themes).

## Bildirimleri Test Etme

**Ayarlar** sayfasında, **Bağış platformu entegrasyonu**'nun yanındaki **Test bildirimi**'ne tıklayın:

1. **Test adı**, **Test mesajı** ve **Test tutarı** alanlarını doldurun, bir **Test platformu** seçin
2. **Test bildirimi gönder**'e tıklayın

**YouTube Super Chat testi** bölümü, ham bir **Tutar dizesi** (ör. `$5.00`, `¥500`, `NT$150`) girip tutar ayrıştırmayı ve para birimi dönüşümünü test etmek için **Test Super Chat gönder**'e tıklamanızı sağlar.

:::note
Test bildirimi gerçek bir bağış gibi işlenir: o platformlar orada işaretliyse [Bağış çubuğu](./donate) ve [Bağış panosu](./sponsors)'na da eklenir.
:::

:::info Deneme Sürümü
Özel CSS yalnızca tam sürümde kullanılabilir. Gerçek ödeme altyapıları (PayPal / Stripe / O'Pay / ECPay) ile YouTube üyelik olayları ve Mücevherler deneme sürümünde kullanılamaz; bildirim OBS'te bir filigran gösterir. Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::

## Sıkça Sorulan Sorular

**Q: Yayında ses yok mu?**
Tarayıcı kaynağı özelliklerinde **Sesi OBS üzerinden kontrol et** seçeneğinin işaretli olduğunu ve kaynağın OBS ses karıştırıcısında sessize alınmadığını kontrol edin. Ayrıca **Ses efekti**'nin **Yok** olarak ayarlanmadığını kontrol edin.

**Q: OBS kaynağını geç ekledim. Önceki bildirimleri tekrar oynatır mı?**
Hayır. Yeni açılan bir kaynak yalnızca bağlandıktan sonra gelen bildirimleri gösterir.
