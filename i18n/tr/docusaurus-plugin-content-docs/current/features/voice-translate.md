---
sidebar_position: 4
---

# Sesli çeviri

Bir kısayolu basılı tutun ve konuşun. Stream Toolkit konuşmanızı metne dönüştürür, çevirir ve her iki satırı OBS'te altyazı olarak gösterir.

Konuşma tanıma, bir Whisper modeliyle kendi bilgisayarınızda çalışır. Metin daha sonra MyMemory ile çevrilir.

Sayfada iki sekme vardır: **Ayarlar** ve **Görünüm**.

## Adım 1: OBS Kaynağını Ekleyin

OBS kaynak adresi sayfanın üst kısmında gösterilir:

```
http://127.0.0.1:7272/voice-translate
```

**Kopyala**'ya tıklayın ve OBS'e tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source). Sesli çeviri ses çalmaz, bu yüzden "Sesi OBS üzerinden kontrol et" seçeneğini açmanıza gerek yoktur.

Altyazılar kaynağın alt kısmında görünür: üstte orijinal metin, altta çeviri. **Altyazı görüntüleme süresi** sonunda solarak kaybolurlar.

:::tip
Sol kenar çubuğunda **Sesli çeviri**'nin yanındaki anahtarı açın (**OBS görüntüsünü aç**). Kısayol yalnızca anahtar açıkken çalışır.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Adım 2: Kısayolu Ayarlayın

**Kısayol (basılı tutunca kaydeder, bırakınca tanır)** altında:

1. **Kısayol ayarlamak için tıklayın**'a tıklayın
2. İstediğiniz tuş kombinasyonuna basıp bırakın. İptal etmek için **Esc**'e basın
3. Kısayolu kaldırmak için **Temizle**'ye tıklayın

Kombinasyon başka bir özellik tarafından zaten kullanılıyorsa düğmede **Kısayol çakışması** görünür ve kısayol kaydedilmez.

Kısayol, Stream Toolkit etkin pencere değilken de çalışır. Konuşurken **basılı tutun**, ardından tanıma ve çeviri için **bırakın**. Kayıt 15 saniye sonra otomatik olarak durur.

Kısayolun altındaki **REC** düğmesini fareyle de basılı tutabilirsiniz. Aynı şekilde çalışır: kaydetmek için basın, çevirmek için bırakın. [Hızlı araçlar](./quick-tools) penceresinde de aynı **REC** düğmesi vardır.

## Adım 3: Tanıma ayarları

| Alan | Açıklama |
|-------|-------------|
| **Model durumu** | **Yükleniyor xx%**, **Hazır** veya **Model yüklenemedi** gösterir. **Hazır** gösterdiğinde kayıt yapabilirsiniz |
| **Whisper modeli** | **Tiny (en hızlı, ~40MB)**, **Base (önerilen, ~75MB)** (varsayılan) veya **Small (en doğru, ~245MB)**. Model ilk kullanımda indirilir. Modeli değiştirmek onu yeniden yükler |
| **Konuşma dili** | Konuştuğunuz dil. Varsayılan Geleneksel Çince'dir |
| **Mikrofon** | Kayıt yapılacak mikrofon. **Sistem varsayılanı**, Windows'un varsayılan giriş aygıtını kullanır |

## Adım 4: Çeviri ayarları

| Alan | Açıklama |
|-------|-------------|
| **Altyazı görüntüleme süresi** | Altyazıların ekranda kalma süresi, 1–30 saniye. Varsayılan 5'tir |
| **Hedef dil** | Çevrilecek dil. Varsayılan İngilizce'dir |
| **Hedef dil English olduğunda Whisper çevirisini kullan** | Hedef dil İngilizce olduğunda MyMemory yerine Whisper çevirir. (Ücretsiz ve kotasız, ancak gecikme daha yüksek.) Diğer hedef dillerde etkisi yoktur |
| **Çeviri hizmeti** | MyMemory |

### E-posta (isteğe bağlı)

MyMemory ücretsizdir. Günlük kotası e-posta girip girmediğinize bağlıdır:

- E-posta olmadan: günlük 5.000 karakter
- E-posta ile: günlük 50.000 karakter (ücretsiz, MyMemory'ye kayıt gerekmez)

E-postanızı girip **Kaydet**'e tıklayın. Bu e-posta **Sohbet çevirisiyle ortak** kullanılır.

Alttaki çubuk **Bugün kullanılan (kabaca, her gün UTC 08:00'de sıfırlanır)** değerini gösterir. Kota dolduğunda **Doldu** gösterir.

## Adım 5: Görünüm

**Görünüm** sekmesinde altyazıların nasıl görüneceğini değiştirebilirsiniz. Değişiklikler hemen kaydedilir.

- **Önizleme**: örnek altyazılar gösterir. Yanındaki renk kutusu yalnızca önizleme arka planını değiştirir
- **Hizalama**: **Sola** (varsayılan), **Ortaya** veya **Sağa**
- **Yazı tipi**: **Orijinal dil** (orijinal metin) için bir satır ve **Hedef dil** (çeviri) için bir satır. Her satırda bir yazı tipi, bir renk ve bir boyut (8–120 px) bulunur. Varsayılanlar orijinal için 14 px, çeviri için 22 px'tir
- **Gölge**: metin gölgesi rengi
- **Varsayılana dön**: varsayılan görünümü geri yükler

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Deneme Sürümü Sınırlamaları
**Hedef dil** İngilizce olarak sabittir. Sayfada "Demo yalnızca İngilizceye çeviriyi destekler" gösterilir.

Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::

## Sıkça Sorulan Sorular

**Q: Kısayolu basılı tutuyorum ama hiçbir şey olmuyor.**
Sol kenar çubuğunda **Sesli çeviri**'nin yanındaki anahtarın açık olduğunu ve **Model durumu**'nun **Hazır** gösterdiğini kontrol edin.

**Q: Kayıt çalışıyor ama OBS'te altyazı görünmüyor.**
MyMemory çeviri yapamazsa (örneğin günlük kota dolmuşsa) altyazı gösterilmez. **Bugün kullanılan** çubuğunu kontrol edin. E-posta girmek kotayı artırır. Hedef diliniz İngilizce ise kotası olmayan **Hedef dil English olduğunda Whisper çevirisini kullan** seçeneğini de açabilirsiniz.
