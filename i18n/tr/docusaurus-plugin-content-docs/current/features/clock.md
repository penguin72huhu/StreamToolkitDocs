---
sidebar_position: 12
---

# Saat

Yayında geçerli saati, isteğe bağlı olarak tarih ve haftanın günüyle birlikte gösterin.

## Adım 1: OBS Kaynağını Ekleyin

Sayfanın üst kısmındaki **OBS kaynak adresi**'ni kopyalayın:

```
http://127.0.0.1:7272/clock
```

Bunu OBS'e tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source). Saat ses çalmaz, bu yüzden "Sesi OBS üzerinden kontrol et" seçeneğini açmanıza gerek yoktur.

:::tip
Sol kenar çubuğunda **Saat**'in yanındaki anahtarı da açın (**OBS görüntüsünü aç**). Kapalıyken saat OBS'te gizlenir.
:::

## Önizleme

Üstteki **Önizleme**, gerçek OBS overlay'ini gösterir ve ayarları değiştirdikçe güncellenir. Önizleme arka planını değiştirmek için yanındaki renk kutusunu kullanın.

Önizlemenin altında üç sekme vardır: **Görünüm**, **Saat formatı** ve **Görüntü ayarları**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Görünüm

| Ayar | Açıklama |
|---------|-------------|
| **Yazı tipi** | Tüm saat metinleri için yazı tipi |
| **Stil** | Saat, tarih ve günün nasıl düzenleneceği: **Stack**, **Horizontal**, **One-Top-Two-Bottom** veya **Two-Top-One-Bottom**. **Satır aralığı** **Horizontal** dışındaki her düzende, **Boşluk** ise **Stack** dışındaki her düzende kullanılabilir (ikisi de −200 ile 200 px arası) |
| **Sıra** | Sıralarını değiştirmek için **Saat**, **Tarih** ve **Gün** bloklarını sürükleyin |
| **Metin** | **Saat**, **Tarih** ve **Gün** için ayrı ayrı ayarlayın: **Yazı boyutu**, renk (**Düz renk** veya iki renk ve bir **Açı** ile **Gradyan**) ve **Kenarlık** rengi, **Saydamlık** ve **Kalınlık** (0–7 px) |
| **Gölge** | Tüm metinler için ortak gölge rengi, **Saydamlık**, **Bulanıklık** ve **X** / **Y** kayması |

**Varsayılana dön** düğmesi sekmenin üst kısmındadır.

### Özel CSS

Düzenleyiciyi genişletmek için **Özel CSS**'e tıklayın. Varsayılan CSS, saatin her parçası (saat, tarih, gün ve kapsayıcıları) için seçicileri yorumlarla birlikte listeler. Bunu düzen ve yapı için kullanın. Renkler, yazı tipleri ve boyutlar yukarıdaki görünüm ayarlarında belirlenir.

- **Varsayılana dön**: varsayılan CSS'i geri yükler
- **Materyalleri yönet**: CSS'inizde kullanılan görseller için materyal yöneticisini açar

CSS'iniz bir özelliği `!important` ile geçersiz kılıyorsa, CSS zaten baskın geleceği için ilgili görünüm kontrolü kilitlenir.

## Saat formatı

- **Saat sistemi**: **24 saat** veya iki 12 saat seçeneğinden biri. **12 saat (AM/PM)** AM/PM gösterir; **12 saat (ÖÖ/ÖS)** ise Çince 上午 / 下午 işaretlerini gösterir
- **Saat dilimi**: UTC−12 ile UTC+14 arası. Varsayılan olarak saat dilimi bilgisayarınızınkiyle aynıdır

## Görüntü ayarları

- **Saniyeleri göster**
- **Tarihi göster**: açıkken açılır menüden bir tarih biçimi seçin. **Yıl yok** ile işaretlenen biçimler yılı göstermez
  - **Tarihte sıfır ekle**: tek haneli ay ve günleri başına sıfır ekleyerek gösterir (örneğin 2026/05/20)
  - **Yıl formatı**: yılla başlayan biçimlerde gösterilir. **Tam (2026)** veya **Kısaltılmış (26)**

  Bu iki seçenek sayısal biçimlere (`/` veya `-` içeren) uygulanır. Yazıyla yazılan biçimler (örneğin "20 Mayıs 2026") bunun yerine uygulamanın arayüz dilini izler
- **Günü göster**: açıkken günün nasıl yazılacağını seçin (örneğin **Çarşamba**, **Wednesday**, **WED** veya **Wed**)

:::info Deneme Sürümü Sınırlamaları
**Özel CSS** yalnızca tam sürümde kullanılabilir. Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
