---
sidebar_position: 10
---

# Twitch hedef çubuğu

Twitch takipçi, abonelik ve Bits hedefleriniz için yayında ilerleme çubukları gösterin. Her hedef türünün kendi çubuğu, kendi ayarları ve kendi OBS adresi vardır.

:::note Başlamadan önce
Hedef çubukları Twitch olaylarını sayar, bu yüzden önce Twitch hesabınızı bağlayın. Bkz. [Twitch Ayarlar](../platforms/twitch).
:::

## Adım 1: Hedef Türünü Seçin ve OBS Kaynağını Ekleyin

Sayfanın üst kısmında bir hedef türü seçin: **Takip**, **Abonelik** veya **Bits**. Düğmelerin altındaki **OBS adresi** buna göre değişir. Kopyalamak için **Kopyala**'ya tıklayın.

| Hedef türü | OBS Kaynak Adresi |
|-----------|----------------|
| **Takip** | `http://127.0.0.1:7272/goal/follow` |
| **Abonelik** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Göstermek istediğiniz her çubuğu OBS'e ayrı bir tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source). Hedef çubukları ses çalmaz, bu yüzden "Sesi OBS üzerinden kontrol et" seçeneğini açmanıza gerek yoktur.

:::tip
Sol kenar çubuğunda **Twitch hedef çubuğu**'nun yanındaki anahtarı da açın (**OBS görüntüsünü aç**). Kapalıyken çubuklar OBS'te gizlenir.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Adım 2: Hedefi Ayarlayın

Aşağıdaki tüm ayarlar üstte seçtiğiniz hedef türü için geçerlidir.

- **Başlık**: çubukta gösterilen başlık metni
- **Hedef**: hedef sayı (tam sayılar, 0 veya daha fazla)
- **İlerleme**: mevcut sayıyı, hedefi ve yüzdeyi gösterir

### İlerleme nasıl sayılır

| Hedef türü | İlerlemeye ne ekler |
|-----------|----------------------|
| **Takip** | Her yeni takip 1 ekler. Twitch bağlıyken sayı ayrıca her 30 saniyede bir Twitch'teki kanalınızın toplam takipçi sayısıyla senkronize edilir. Hemen senkronize etmek için **Senkronize et**'e tıklayın |
| **Abonelik** | Yeni abonelikler ve hediye abonelikler (birden fazla aboneliğin hediye edilmesi, hediye edilen abonelik sayısı kadar ekler). Yeniden abonelikler yalnızca **Yeniden abonelikleri say** açıkken sayılır |
| **Bits** | Her cheer, gönderilen Bits sayısı kadar ekler |

### Abonelik seçenekleri

Yalnızca **Abonelik** için gösterilir:

- **Tier'a göre ağırlıklı**: açıkken daha yüksek seviyeli abonelikler ilerlemeye daha fazla ekler. Kapalıyken her abonelik 1 ekler
- **Yeniden abonelikleri say**: açıkken yeniden abonelik mesajları da ilerlemeye eklenir

### İlerlemeyi sıfırlama

**Abonelik** ve **Bits**'te bir **İlerlemeyi sıfırla** düğmesi vardır. Mevcut sayıyı 0'a döndürmek için tıklayın, ardından **Sıfırlamayı onayla**'ya tıklayın. Hedef sayısı korunur.

**Takip**'te sıfırlama düğmesi yoktur, çünkü sayısı Twitch takipçi toplamınızı izler.

## Adım 3: Görünümü Ayarlayın

### Önizleme

Üstteki **Önizleme**, seçili hedef türü için çubuğu gösterir. Önizleme arka planını değiştirmek için yanındaki renk kutusunu kullanın. Hedefe ulaşıldığında çubuğun nasıl göründüğünü görmek için **Önizleme tamamlandı**'yı işaretleyin.

### Görünüm ayarları

| Ayar | Açıklama |
|---------|-------------|
| **Arka plan rengi** | Çubuğun arka planı |
| **İlerleme çubuğu rengi** | Dolu kısmın rengi |
| **Hedefe ulaşınca renk** | Hedefe ulaşıldığında dolgu rengi |
| **Başlık yazısı** | Başlığın yazı tipi, rengi ve boyutu (8–72 px) |
| **Hedef yazısı** | Sayıların yazı tipi, rengi ve boyutu (8–72 px) |
| **Yüzde** | Yüzdenin yazı tipi, rengi ve boyutu (8–72 px) |

Seçili hedef türünün görünümünü geri yüklemek için **Varsayılana dön**'e tıklayın.

### Özel CSS

Düzenleyiciyi genişletmek için **Özel CSS**'e tıklayın. Her hedef türünün kendi CSS'i vardır. Bunu düzen ve yapı için kullanın. Renkler, yazı tipleri ve boyutlar yukarıdaki görünüm ayarlarında belirlenir.

- **Varsayılana dön**: varsayılan CSS'i geri yükler
- **Materyalleri yönet**: CSS'inizde kullanılan görseller için materyal yöneticisini açar

CSS'iniz bir özelliği `!important` ile geçersiz kılıyorsa, CSS zaten baskın geleceği için ilgili görünüm kontrolü kilitlenir.

:::info Deneme Sürümü Sınırlamaları
- **Özel CSS** yalnızca tam sürümde kullanılabilir
- OBS overlay'i bir filigran gösterir

Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
