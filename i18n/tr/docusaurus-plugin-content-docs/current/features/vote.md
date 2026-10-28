---
sidebar_position: 15
---

# Canlı anketler

Yayında bir oylama yapın. İzleyiciler Twitch veya YouTube sohbetine bir seçenek numarası yazarak oy verir ve sonuçlar OBS overlay'inde canlı olarak güncellenir.

## OBS Kaynak Adresi

```
http://127.0.0.1:7272/vote
```

Sayfanın üst kısmındaki **OBS kaynak adresi**'nin yanındaki **Kopyala**'ya tıklayın, ardından OBS'e tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source). Canlı anketler ses çalmaz, bu yüzden "Sesi OBS üzerinden kontrol et" seçeneğini açmanıza gerek yoktur.

:::tip
Sol kenar çubuğunda **Canlı anketler**'in yanındaki anahtarı da açın (**OBS görüntüsünü aç**). Kapalıyken overlay gizli kalır.
:::

Sayfada üç sekme vardır: **Ayarlar**, **Görünüm** ve **Geçmiş**.

## Oylama Başlatma (Ayarlar sekmesi)

### Oylama platformu

Hangi platformun sohbetinin oy verebileceğini seçmek için **Twitch** veya **YouTube**'a tıklayın. İkisini birden seçebilirsiniz. Bağlı olmayan bir platform Twitch için **(Bağlı değil)**, YouTube için **Sohbet adresi bağlı değil** gösterir. Önce bağlayın:

- [Twitch Ayarlar](../platforms/twitch)
- [YouTube Ayarlar](../platforms/youtube-settings)

### Oylama başlığı

İsteğe bağlı. Örneğin: "Bu gece hangi oyunu oynayalım?"

### Oylama seçenekleri (2–10 adet)

- En az 2 seçenek girin. En fazla 10 seçeneğiniz olabilir
- **+ Seçenek ekle** bir satır ekler, **×** bir satırı siler
- **Geçmişi uygula**, en son 15 oylamanızdan birini seçip başlığını ve seçeneklerini doldurmanızı sağlar

Siz düzenlerken OBS overlay'i başlığı ve seçenekleri önizler.

### Oylama süresi

Saniye cinsinden oylama süresi. Varsayılan 60, en az 10'dur.

### Başlatma / Durdurma

- **Oylamayı başlat**: en az 2 doldurulmuş seçenek ve bağlı en az bir seçili platform gerektirir
- **Oylamayı durdur**: oylamayı erken bitirir. Aksi hâlde süre dolunca biter

Bir oylama sürerken platformları, başlığı, seçenekleri veya süreyi değiştiremezsiniz.

{/* TODO: 截圖 — 投票設定分頁 */}

## İzleyiciler Nasıl Oy Verir

Oylama sürerken overlay'de "Oy vermek için sohbete seçenek numarasını yazın (örn: 1)" gösterilir.

- Mesajın tamamı seçenek numarası olmalıdır, ör. `1` veya `1.`. Boşluklar yok sayılır. Başka metin içeren bir mesaj sayılmaz
- Her izleyicinin bir oyu vardır. Farklı bir numara gönderirse oyu yeni seçeneğe taşınır ve süre dolmadan önceki son oy sayılır

## Anlık Sonuçlar

Oylama sırasında ayarların altında kalan süre, her seçeneğin oy sayısı ve yüzdesi ile toplam oylarla birlikte **Anlık sonuçlar** görünür. Oylama bittikten sonra **Nihai sonuçlar** olarak değişir. Her seçeneğe kimin oy verdiğini Twitch ve YouTube'a göre gruplanmış olarak görmek için **Ayrıntı**'ya tıklayın.

## Görünüm

**Görünüm** sekmesinin üst kısmında bir **Önizleme** vardır. Yanındaki renk seçici OBS overlay'ini değil, yalnızca önizleme arka planını değiştirir.

- **Yazı tipi**: **Başlık**, **İpucu**, **Seçenek**, **Geri sayım saniyeleri** ve **Oy sayısı** için yazı tipi, renk ve **Boyut** (px) ayarlayın
- **İlerleme çubuğu rengi**: en fazla 5 renk; seçenek çubukları için sırayla kullanılır. Her biri **Düz renk** veya **Gradyan** olabilir. Gradyanların ayrıca bir **Açı**'sı vardır
- **Arka plan rengi**: oylama kartının arka planı
- **Varsayılana dön**: varsayılan görünümü geri yükler. Bir tema uygulanmışsa temanın görünümünü geri yükler

**Özel CSS** altında kendi stillerinizi yazabilirsiniz. Görünümleri paylaşmak veya indirmek için bkz. [Tema stilleri](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Geçmiş

**Geçmiş** sekmesi her oylamanın başlığını, zamanını, seçenek sayısını ve toplam oylarını listeler. Sonuçlarını, platform başına oy sayısını ve **Ayrıntı**'yı görmek için bir oylamayı genişletin. Yalnızca son 30 günün oylama kayıtları saklanır. Bir kaydı silmek için 🗑'e, ardından **Silmeyi onayla**'ya tıklayın.

:::info Deneme Sürümü Sınırlamaları
- **Özel CSS** yalnızca tam sürümde kullanılabilir
- OBS overlay'i bir filigran gösterir

Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
