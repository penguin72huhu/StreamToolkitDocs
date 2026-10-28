---
sidebar_position: 14
---

# Çark

Kendi ödül çarklarınızı oluşturun ve yayında çevirin. Her seçeneğin ağırlığını, çark renklerini ve çekilen bir seçeneğin sonrasında kaldırılıp kaldırılmayacağını ayarlayabilirsiniz.

Sayfada üç sekme vardır: **Ayarlar**, **Çark oluştur** ve **Geçmiş**. Önce bir çark oluşturun, ardından onu **Ayarlar**'dan çevirin.

## Adım 1: Çark Oluşturma

1. Sol kenar çubuğunda **Çark**'ı açın ve **Çark oluştur** sekmesine geçin
2. **Çarklarım** altında **Ekle**'ye tıklayın. "Çark 1" (sonra "Çark 2" vb.) adlı yeni bir çark görünür
3. Düzenlemek için bir çark kartına tıklayın. O çarkı silmek için karttaki **✕**'e tıklayın

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Çark başlığı

Çark için bir ad girin. Çark listesinde, açılır menülerde ve geçmişte kullanılır.

### Çark içeriği

1. **İçeriği düzenle**'ye tıklayın
2. Seçenekleri **her satıra bir tane** olacak şekilde girin
3. **Onayla**'ya tıklayın

### Ağırlık

Çarkta seçenekler olduğunda her birine bir **Ağırlık** alanı eklenir (en az 1, varsayılan 1). Bir seçeneğin dilim boyutu ve çekilme olasılığı ağırlığıyla orantılıdır. Örneğin ağırlığı 2 olan bir seçeneğin çekilme olasılığı, ağırlığı 1 olan bir seçeneğin iki katıdır.

### Çark tema rengi

- **Minimal**: yerleşik beyaz ve gri şema
- **Özel**: kendi renk şemanızı oluşturun. Bir **Ad** girin, **Renkler (3–5 renk)** seçin (renk eklemek için **＋**, kaldırmak için **✕**), ardından **Ekle**'ye tıklayın

Özel bir temayı değiştirmek için **✎** düğmesine tıklayın. Silmek için **✕**'e tıklayın. Özel temalar, [Çekilişler](./lottery)'deki çark animasyonu için de renk şeması olarak sunulur.

### Seçildikten sonra sil

Açıkken, çekilen bir seçenek bir sonraki çevirmeden önce çarktan çıkarılır. Tüm seçenekleri geri getirmek için **Sıfırla**'ya tıklayın.

## Adım 2: Görüntüleme Modunu Seçme ve OBS Kaynağını Ekleme

**Ayarlar** sekmesine geçin ve bir **Görüntüleme modu** seçin:

| Mod | Açıklama | OBS Kaynak Adresi |
|------|-------------|----------------|
| **Tek çark** | OBS yalnızca seçili çarkı gösterir. Çarklar arasında **Kullanılan çark** açılır menüsüyle geçiş yapın | `http://127.0.0.1:7272/turntable` |
| **Çoklu çark** | OBS aynı anda birden fazla çark gösterebilir. Her çarkın kendi URL'si vardır | `http://127.0.0.1:7272/turntable/<wheel ID>` |

**Çoklu çark** modunda, çarkları **Çark görüntüsüne ekle**'den seçin. Eklenen her çark, **OBS kaynak adresi** ile kendi kartını alır. Kopyalamak için **Kopyala**'ya tıklayın. O çarkı görüntüden kaldırmak için karttaki **✕**'e tıklayın.

Kopyalanan URL'yi OBS'e tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source). Çark ses çalmaz, bu yüzden "Sesi OBS üzerinden kontrol et" seçeneğini açmanıza gerek yoktur.

:::tip
Sol kenar çubuğunda **Çark**'ın yanındaki anahtarı da açın (**OBS görüntüsünü aç**). Kapalıyken overlay gizli kalır.
:::

## Adım 3: Çevirme

**Ayarlar** sekmesindeki her çark kartında:

- **Başlat**: çevirmeyi başlatır. Animasyon bittiğinde overlay sonucu gösterir. Çarkta seçenek yokken veya çark hâlâ dönerken düğmeye tıklanamaz
- **Sıfırla**: kaldırılan seçenekleri geri getirir, çarkı sıfırlar ve mevcut **Kazananlar listesi**'ni temizler

Kartın **Kazananlar listesi**, son **Sıfırla**'dan bu yana tüm sonuçları toplar.

**Başlat** ve **Sıfırla**'yı [Hızlı araçlar](./quick-tools) penceresinden de kullanabilirsiniz.

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Geçmiş

**Geçmiş** sekmesi, ilk çevirmeden bir sonraki **Sıfırla**'ya kadar her tur için bir kayıt tutar. Zamanı, çark başlığını ve kazananları listeler. Yalnızca son 30 günün çark kayıtları saklanır. Bir kaydı silmek için 🗑'e, ardından **Silmeyi onayla**'ya tıklayın.

:::info Deneme Sürümü Sınırlamaları
- Yalnızca **1** çark oluşturabilirsiniz
- OBS overlay'i bir filigran gösterir

Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
