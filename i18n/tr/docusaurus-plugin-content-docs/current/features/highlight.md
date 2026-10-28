---
sidebar_position: 6
---

# Yayın öne çıkan an işaretleyicisi

Yayınınız sırasında bir öne çıkan anın "yayının kaçıncı dakikasında" gerçekleştiğini kaydetmek için bir kısayola basın. Daha sonra düzenleme yaparken VOD'unuzdaki öne çıkan anları bulmak için bu zaman listesini kullanabilirsiniz.

İşaretler Stream Toolkit'ta saklanır. Bu özelliğin OBS overlay'i yoktur, bu yüzden OBS kaynağı eklemeniz gerekmez.

Sayfada iki sekme vardır: **Ayarlar** ve **Öne çıkan kayıtlar**.

:::tip
Sol kenar çubuğunda **Yayın öne çıkan an işaretleyicisi**'nin yanındaki anahtarı açın. Kapalıyken ne kısayol ne de **MARK** düğmesi işaret ekler.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Adım 1: Kaynağı Seçin

**Kaynak**, yayın süresinin nasıl hesaplanacağını belirler:

| Kaynak | Sürenin hesaplanma şekli | Gereksinim |
|--------|----------------------------|-------------|
| **Twitch** | Mevcut Twitch yayınınızın başlangıcından bu yana geçen süre | Twitch bağlı olmalı. Bkz. [Twitch Ayarlar](../platforms/twitch) |
| **YouTube** | Mevcut YouTube canlı yayınınızın başlangıcından bu yana geçen süre | Google ile giriş. Bkz. [YouTube Ayarlar](../platforms/youtube-settings) |
| **Manuel hizalama** (varsayılan) | Bu sayfadaki manuel zamanlayıcının değeri | Yok |

**Twitch** ve **YouTube**'un yanındaki nokta bağlı olup olmadığını gösterir. Bağlı değilse seçenek **(Bağlı değil)** veya **(Google ile giriş yapılmadı)** gösterir.

Yayında değilken (veya **Manuel hizalama** için zamanlayıcı durmuşken) işaretlerseniz, süre **Yayın yok** olarak kaydedilir. **Twitch** kaynağında bu sonucun görünmesi yaklaşık 20 saniye sürebilir; çünkü Twitch yeni başlayan bir yayını henüz kaydetmemiş olabileceği için Stream Toolkit birkaç kez yeniden dener.

### Manuel zamanlayıcı

**Manuel hizalama** seçildiğinde bir **Manuel zamanlayıcı** görünür:

1. Mevcut yayın süresini `HH:MM:SS` olarak girin (örneğin yayına başladığınız anda `00:00:00`)
2. **Senkron sayaç başlat**'a tıklayın. Zamanlayıcı bu değerden ileri saymaya başlar
3. Her işaret zamanlayıcının o anki değerini kullanır
4. Zamanlayıcıyı durdurmak için **Durdur**'a tıklayın

### İşaretlerken Twitch klibi oluştur

Bu seçenek yalnızca kaynak **Twitch** olduğunda görünür. Açıkken her işaret ayrıca bir Twitch klibi oluşturur.

- Yayında olmalısınız. Klip yaklaşık 30 saniye uzunluğundadır
- Klipler Yayıncı Panosu → İçerik → Klipler bölümüne kaydedilir
- İşaretledikten sonra sayfada **Twitch klibi oluşturuldu** ya da başarısızlık nedeni gösterilir: **Yayında değilsiniz**, **İzin eksik; Twitch yeniden bağlayın**, **Twitch bağlı değil** veya **Başarısız; tekrar deneyin**

## Adım 2: Kısayolu Ayarlayın

Varsayılan kısayol `Ctrl+Shift+M`'dir. Değiştirmek için:

1. Kısayol düğmesine tıklayın
2. İstediğiniz tuş kombinasyonuna basıp bırakın. İptal etmek için **Esc**'e basın
3. Kaldırmak için **Temizle**'ye tıklayın

Kombinasyon başka bir özellik tarafından zaten kullanılıyorsa düğmede **Bu kısayol zaten kullanılmış** görünür ve kısayol kaydedilmez. Kısayol, Stream Toolkit etkin pencere değilken de çalışır.

Kısayolun altındaki **MARK** düğmesine de tıklayabilirsiniz. Kısayolla aynı işi yapar. [Hızlı araçlar](./quick-tools) penceresinde de bir **MARK** düğmesi vardır.

## Adım 3: Yayın Sırasında İşaretleyin

1. (İsteğe bağlı) İşaretlemeden önce **İşaret adı** alanına bir ad yazın. Boş bırakırsanız işaretler otomatik olarak numaralandırılır (`精華標記_1`, `精華標記_2`, …)
2. Kısayola basın veya **MARK**'a tıklayın

Yazdığınız ad yalnızca bir sonraki işaret için kullanılır ve ardından alan temizlenir.

## Öne çıkan kayıtlar

**Öne çıkan kayıtlar** sekmesi tüm işaretleri en yeniden başlayarak listeler. Her satır yayın süresini, adı, kaynağı ve işaretlediğiniz tarih ve saati gösterir.

- **Kopyala**: işareti `[date] name 🎬 stream time (source)` biçiminde metin olarak kopyalar
- **🗑️**: tıklayın, ardından işareti silmek için **Silmeyi onayla**'ya tıklayın
- **Twitch klibini aç**: bu işaret için bir Twitch klibi oluşturulduysa görünür. Klibi Twitch'te açar

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Deneme Sürümü Sınırlamaları
**İşaretlerken Twitch klibi oluştur** kullanılamaz. "Tam sürümde etkinleşir" olarak gösterilir.

Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
