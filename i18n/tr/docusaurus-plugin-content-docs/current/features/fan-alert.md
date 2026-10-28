---
sidebar_position: 8.1
---

# Yeni takipçi bildirimleri

Biri sizi Twitch'te takip ettiğinde veya YouTube kanalınıza abone olduğunda yayında bir bildirim açar.

## OBS Kaynak Adresi

```
http://127.0.0.1:7272/fan-alert
```

URL'yi **Yeni takipçi bildirimleri ayarları** sayfasının üst kısmından kopyalayın ve OBS'e Tarayıcı Kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source).

:::warning
Bildirimler ses çalar. Tarayıcı kaynağı özelliklerinde **Sesi OBS üzerinden kontrol et** seçeneğini işaretleyin, aksi hâlde ses yayında duyulmaz.
:::

Bildirimleri açıp kapatmak için sol kenar çubuğunda **Yeni takipçi bildirimleri**'nin yanındaki anahtarı kullanın. Kapalıyken yeni takipçiler ne gösterilir ne de kaydedilir; test düğmeleri de çalışmaz.

Birkaç takipçi art arda geldiğinde bildirimler sıraya alınır ve birbiri ardına gösterilir. Bu overlay'in kendi sırası vardır, bu yüzden hiçbir zaman [Bağış bildirimleri](./donate-alert)'ni beklemez.

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Ayarlar Sekmesi

### Entegrasyon platformu

Bildirim tetiklemesi gereken platformları işaretleyin: **Twitch** ve **YouTube** (varsayılan olarak ikisi de işaretli). Yeşil nokta platformun bağlı olduğu anlamına gelir; aksi hâlde satırda **Yetkilendirilmedi** görünür.

- **Twitch**: her yeni takip anında bir bildirim tetikler. Önce Twitch'i bağlayın: [Twitch Ayarlar](../platforms/twitch).
- **YouTube**: yeni aboneler. Önce Google ile giriş yapın: [YouTube Ayarlar](../platforms/youtube-settings).

YouTube abonelerinin nasıl bulunduğu:

- YouTube'un canlı bir "yeni abone" olayı yoktur; bu yüzden uygulama her 1,5 dakikada bir YouTube'dan en son abonelerinizi ister.
- Yalnızca yayındayken ve YouTube canlı sohbetiniz o canlı yayına bağlıyken kontrol eder. Bekleme odasında veya yayın bittikten sonra kontrol etmez.
- Yayın başlamadan önce (kontrol başlamadan yaklaşık 5 dakikadan daha önce) abone olan kişiler duyurulmaz.
- Sayfadaki ipucunda belirtildiği gibi: **YouTube yalnızca aboneliklerini herkese açık yapan izleyicileri bildirir; dakikalar ile saatler arası gecikme olabilir.**

### Ayarlar

| Alan | Açıklama |
|-------|-------------|
| **Görüntüleme süresi** | Her bildirimin ekranda kalma süresi, saniye cinsinden (1–60). Varsayılan: 5. |
| **Aynı izleyici için 24 saatte en fazla bir kez** | Varsayılan olarak kapalı. Açıkken, aynı izleyicinin 24 saat içinde tekrar takip etmesi (örneğin takibi bırakıp yeniden takip etmesi) gösterilmez ve kaydedilmez. |

### Bildirimleri Test Etme

OBS'e örnek bir bildirim göndermek için **Test bildirimi (Twitch)** veya **Test bildirimi (YouTube)**'a tıklayın. Test bildirimleri geçmişe eklenmez.

Yeni takipçi bildirimleri kapalıysa test oynatılmaz ve sayfada **Önce hızlı geçişlerden yeni takipçi bildirimlerini açın** görünür.

## Görünüm Sekmesi

### Önizleme

Önizleme, OBS kaynağıyla aynı sayfayı kullanır. Önizleme arka planını değiştirmek için **Önizleme**'nin yanındaki renk seçiciyi kullanın; bildirim animasyonunu tekrar oynatmak için **▶ Animasyonu yeniden oynat**'a tıklayın.

### Ortak stil / Her platform ayrı

- **Ortak stil**: Twitch ve YouTube aynı bildirim stilini kullanır.
- **Her platform ayrı**: her platformun kendi stili vardır. Aşağıdaki düğmelerle **Twitch** veya **YouTube**'u seçip ayarlarını düzenleyin. İlk geçişte, özelleştirmediğiniz platformlar mevcut ortak stili kopyalar; her birinin kendi geri sayım çubuğu rengi olur.

**Varsayılana dön**, düzenlediğiniz stil için varsayılan stili geri yükler.

### Görsel

- **Görsel seç**: materyal yöneticisinden bir görsel seçin. Görsel yoksa bir kalp emojisi gösterilir. **Temizle** görseli kaldırır.
- **Görsel boyutu**: 1–400 px.
- **Görsel konumu**: **Sol**, **Sağ**, **Üst** veya **Alt**.

### Ses efekti

Yerleşik bir ses seçin: **Yok**, **Çınlama** (varsayılan), **Bozuk para**, **Çan**, **Pop**, **Fanfar**. Dinlemek için **▶**'e tıklayın. Materyal yöneticisinden kendi ses dosyanızı kullanmak için **Ses seç**'e tıklayın.

### Özel metin

Bildirimde gösterilecek satırı yazın. Takipçinin adı için `{name}`, platform adı için `{platform}` kullanın. Varsayılan metni kullanmak için boş bırakın: `Hoş geldin {name}, takip ettiğin için teşekkürler!`

### Metin ve Renk

- **Metin**: **Özel metin** ve **Takipçi adı** için yazı tipi, boyut ve renk ayarlayın.
- **Renk**: **Arka plan**, **Gölge** ve **Geri sayım çubuğu**.

### Özel CSS

Düzenlediğiniz stilin (ortak veya seçili platform) CSS'ini düzenlemek için **Özel CSS**'i genişletin. **Varsayılana dön** şablon CSS'i geri yükler, **Materyalleri yönet** ise materyal yöneticisini açar. Steam Workshop temaları da burada uygulanabilir. Bir tema uygulanmışken CSS salt okunurdur. Bkz. [Tema stilleri](./themes).

## Geçmiş Sekmesi

Her iki platformdaki son yeni takipçileri en yeniden başlayarak listeler: platform, ad ve zaman. Geçmiş yalnızca uygulamada gösterilir, overlay'de asla gösterilmez.

- En fazla 100 takipçi saklanır ve 30 günden eski kayıtlar otomatik olarak silinir.
- Listeyi boşaltmak için **Temizle**'ye tıklayın.

:::info Deneme Sürümü
Özel CSS yalnızca tam sürümde kullanılabilir ve bildirim OBS'te bir filigran gösterir. Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::

## Sıkça Sorulan Sorular

**Q: Yayında ses yok mu?**
Tarayıcı kaynağı özelliklerinde **Sesi OBS üzerinden kontrol et** seçeneğinin işaretli olduğunu ve kaynağın OBS ses karıştırıcısında sessize alınmadığını kontrol edin. Ayrıca **Ses efekti**'nin **Yok** olarak ayarlanmadığını kontrol edin.

**Q: Bir YouTube abonesi için bildirim gelmedi.**
Yalnızca herkese açık abonelikler bildirilir ve YouTube'un bunları bildirmesi dakikalar ile saatler arası sürebilir. Uygulama ayrıca yalnızca YouTube canlı sohbeti bağlıyken yayındayken kontrol eder.

**Q: OBS kaynağını geç ekledim. Önceki bildirimleri tekrar oynatır mı?**
Hayır. Yeni açılan bir kaynak yalnızca bağlandıktan sonra gelen bildirimleri gösterir. Önceki takipçiler hâlâ **Geçmiş** sekmesindedir.
