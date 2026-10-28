---
sidebar_position: 11
---

# Zamanlayıcı

Yayında geri sayım zamanlayıcıları veya kronometreler gösterin. Bir geri sayıma tıkladığınız düğmelerle ya da Twitch takipleri, abonelikleri, Bits ve bağışlarla otomatik olarak süre eklenebilir veya süre düşülebilir.

Sayfada iki sekme vardır: **Ayarlar** ve **Zamanlayıcı oluştur**. Önce bir zamanlayıcı oluşturun, ardından onu **Ayarlar**'dan kontrol edin.

## Adım 1: Zamanlayıcı Oluşturma

1. Sol kenar çubuğunda **Zamanlayıcı**'yı açın ve **Zamanlayıcı oluştur** sekmesine geçin
2. **Zamanlayıcılarım** altında **Ekle**'ye tıklayın. Başlangıç süresi 10 dakika olan ve üç süre seçeneği (+30 sn, +1 dk, +5 dk) içeren yeni bir geri sayım zamanlayıcısı oluşturulur
3. Düzenlemek için bir zamanlayıcı kartına tıklayın. O zamanlayıcıyı silmek için karttaki **✕**'e tıklayın

**Önizleme**, seçili zamanlayıcının nasıl göründüğünü gösterir. Önizleme arka planını değiştirmek için yanındaki renk kutusunu kullanın.

Önizlemenin altında **Zamanlayıcı ayarları** ile **Görünüm** arasında geçiş yapın.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Adım 2: Zamanlayıcı Ayarları

### Zamanlama modu

- **Geri sayım**: başlangıç süresinden geriye doğru sayar
- **Kronometre**: 0'dan ileri sayar ve tur kaydedebilir. Kronometre modunda başlangıç süresi, uyarı süresi, bitiş sesi veya süre seçenekleri yoktur

### Ad

Zamanlayıcı listesinde, açılır menülerde ve Hızlı araçlar'da gösterilen ad.

### Başlangıç süresi

Geri sayımın başlangıç süresi; saat, dakika ve saniye olarak. Saniye cinsinden toplam yanında gösterilir.

### Uyarı süresi

Kalan süre bu değere ulaştığında zamanlayıcı metni, **Görünüm** altında ayarlanan **Uyarı** rengine geçer. Uyarı istemiyorsanız 0 olarak bırakın.

### Geri sayım bitiş sesi

Geri sayım 0'a ulaştığında çalınan ses. **Yok** veya yerleşik seslerden birini seçin (**Çınlama**, **Bozuk para**, **Çan**, **Pop**, **Fanfar**). Test etmek için **▶**'e tıklayın. Kendi dosyanızı kullanmak için **Ses seç**'e tıklayıp materyal yöneticisinden bir tane seçin.

Ses OBS tarayıcı kaynağı tarafından çalınır; bu yüzden zamanlayıcı kaynağı için **Sesi OBS üzerinden kontrol et**'i açın. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source).

### Süre seçenekleri

Süre seçenekleri, bir geri sayım için süre ekleme/çıkarma düğmeleridir. Her zamanlayıcıda en fazla 20 tane olabilir.

Eklemek için **Süre seçeneği ekle** formunu doldurun:

1. **Tetikleyici kaynak**: bu seçeneği neyin otomatik olarak uygulayacağını seçin
   - **Manuel**: yalnızca düğmeye tıkladığınızda uygulanır
   - **Takip**: her yeni Twitch takibinde uygulanır
   - **Twitch Bits**: Bits cheer'larında uygulanır
   - **Twitch yeni abonelik**: Twitch aboneliklerinde uygulanır
   - **Bağış**: bağışlarda uygulanır. **YouTube**, **O'Pay**, **ECPay** ve **PayPal**'dan hangilerinin sayılacağını seçmek için **Bağış platformu**'nu kullanın
2. **Twitch Bits** ve **Bağış** için ayrıca şunları ayarlayın:
   - **Tetikleme eşiği**: bir adım için Bits veya bağış miktarı
   - **Dönüşüm yöntemi**: **Tam kat tetikleme** veya **Orantılı dönüşüm** (aşağıdaki örneğe bakın)
3. **Süre ekle**: **＋** veya **－** seçin, ardından saat, dakika ve saniyeyi ayarlayın
4. **Ekle**'ye tıklayın

Bir seçeneği değiştirmek için **Düzenle**'ye tıklayın, formu değiştirin, ardından **Kaydet**'e (veya **İptal**'e) tıklayın. Silmek için **✕**'e tıklayın. Otomatik tetikleyicisi olan seçenekler 🔗 ve tetikleyici adıyla işaretlenir.

**Dönüşüm örneği**: Tetikleme eşiği 100 bits, Süre ekle +1 dk ve bir izleyici 250 bits cheer ediyor:

- **Tam kat tetikleme**: yalnızca eşiğin tam katları sayılır → 2 × 1 dk = **+2 dk**
- **Orantılı dönüşüm**: 250 ÷ 100 × 1 dk → **+2 dk 30 sn**

Bağışlarda tutar, eşikle karşılaştırılmadan önce uygulamanın Ayarlar'ında seçilen para birimine çevrilir.

:::note
- Otomatik tetikleyiciler yalnızca geri sayım zamanlayıcılarını etkiler
- Otomatik tetikleyicisi olan süre seçenekleri kontrol panelinde yine düğme olarak görünür, bu yüzden bunlara elle de tıklayabilirsiniz
- **Twitch yeni abonelik** her abonelik olayında bir kez uygulanır: birden fazla aboneliğin hediye edilmesi bir kez uygular. Yeniden abonelikler yalnızca [Twitch hedef çubuğu](./goal)'nda **Yeniden abonelikleri say** açıkken uygulanır
:::

### Kontrol kısayolları

Bu zamanlayıcı için klavye kısayolları ayarlayın:

- **Başlat / Duraklat**
- **Tur kısayolu** (yalnızca kronometre)
- **Sıfırlama kısayolu**

Ayrıca bkz. [Kısayollar](./hotkeys).

## Adım 3: Görünüm

| Ayar | Açıklama |
|---------|-------------|
| **Yazı tipi** | Süre metninin yazı tipi |
| **Yazı boyutu** | 12–300 px |
| **Yazı rengi** | **Normal**: **Düz renk** veya **Gradyan** (iki renk ve bir **Açı**). **Uyarı** (yalnızca geri sayım): uyarı süresine ulaşıldığında kullanılan renk |
| **Arka plan rengi** | Sürenin arkasındaki arka plan |
| **Kenarlık** | Kenar çizgisi rengi, **Saydamlık** ve **Kalınlık** (0–20 px) |
| **Gölge** | Gölge rengi, **Saydamlık**, **Bulanıklık** ve **X** / **Y** kayması |

## Adım 4: Görüntüleme Modunu Seçme ve OBS Kaynağını Ekleme

**Ayarlar** sekmesine geçin. **Kontrol paneli** altında bir **Görüntüleme modu** seçin:

| Mod | Açıklama | OBS Kaynak Adresi |
|------|-------------|----------------|
| **Tek zamanlayıcı** | OBS yalnızca seçili zamanlayıcıyı gösterir. Zamanlayıcılar arasında **Mevcut zamanlayıcı** açılır menüsüyle geçiş yapın | `http://127.0.0.1:7272/timer` |
| **Çoklu zamanlayıcı** | Her zamanlayıcının kendi URL'si vardır ve OBS'e ayrı ayrı eklenebilir | `http://127.0.0.1:7272/timer/<timer ID>` |

**Çoklu zamanlayıcı** modunda, zamanlayıcıları **Görüntüye ekle**'den seçin. Eklenen her zamanlayıcı, **OBS kaynak adresi** ile kendi kartını alır. Kopyalamak için **Kopyala**'ya tıklayın. Bir kartı görüntüden kaldırmak için karttaki **✕**'e tıklayın.

Kopyalanan URL'yi OBS'e tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source).

:::tip
Sol kenar çubuğunda **Zamanlayıcı**'nın yanındaki anahtarı da açın (**OBS görüntüsünü aç**). Kapalıyken zamanlayıcı OBS'te gizlenir.
:::

## Adım 5: Zamanlayıcıyı Kontrol Etme

**Ayarlar** sekmesindeki her zamanlayıcı kartında şunlar bulunur:

- **Başlat** / **Duraklat**: kronometrede duraklatma düğmesi **Durdur** olarak görünür. 0'a ulaşmış bir geri sayım, sıfırlayana veya süre ekleyene kadar başlatılamaz
- **Tur** (yalnızca kronometre): çalışırken bir tur kaydeder. Turlar kartın altında süre ve önceki turla fark ile listelenir
- **Sıfırla**: zamanlayıcıyı durdurur ve başlangıç süresine (kronometre için 0) döndürür, turları temizler
- **Süre ekle** (yalnızca geri sayım): her süre seçeneği için bir düğme

Çalışan süre ayarlar sayfasında değil, yalnızca OBS overlay'inde gösterilir. Zamanlayıcıları, mevcut süreyi de gösteren [Hızlı araçlar](./quick-tools) penceresinden de kontrol edebilirsiniz.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Deneme Sürümü Sınırlamaları
Yalnızca **1** zamanlayıcı oluşturabilirsiniz. Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
