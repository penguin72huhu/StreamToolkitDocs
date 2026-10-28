---
sidebar_position: 5
---

# Media Board

Bir tıklama veya kısayolla yayında görsel gösterin, video oynatın ve ses efektleri çalın.

Sayfada üç sekme vardır: **Görsel**, **Video** ve **Ses efekti**. Her sekmenin kendi OBS kaynak adresi vardır.

| Sekme | OBS Kaynak Adresi | Sesi OBS üzerinden kontrol et |
|-----|----------------|-----------------------|
| **Görsel** | `http://127.0.0.1:7272/imageboard` | Gerekmez |
| **Video** | `http://127.0.0.1:7272/videoboard` | Gerekli |
| **Ses efekti** | `http://127.0.0.1:7272/soundboard` | Gerekli |

Her URL'nin yanındaki **Kopyala**'ya tıklayın ve OBS'e tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source). Videolar ve sesler Stream Toolkit içinde değil OBS kaynağında çalar; bu yüzden bu iki kaynak için **Sesi OBS üzerinden kontrol et**'i açmanız gerekir, aksi hâlde izleyiciler duymaz.

:::tip
Sol kenar çubuğunda **Media Board**'un yanındaki anahtarı açın (**OBS görüntüsünü aç**). Kapalıyken, düğmeleri veya kısayolları kullansanız da görseller gösterilemez, videolar ve sesler çalmaz.
:::

## Ortak Kontroller

Görseller, videolar ve sesler kart olarak listelenir:

- Ayarlarını genişletmek veya daraltmak için bir karta tıklayın
- Kartın sağındaki onay kutusu: işaretliyken öğe [Hızlı araçlar](./quick-tools)'ın başlatma araçlarında görünür. Yeni öğeler varsayılan olarak işaretlidir
- **✕** öğeyi siler
- Yerel bir dosya taşınmış veya silinmişse kartta **Dosya bulunamadı** görünür

### Kısayollar

Her öğenin kendi kısayolu olabilir:

1. Kartı genişletin ve kısayol düğmesine tıklayın
2. İstediğiniz tuş kombinasyonuna basıp bırakın. İptal etmek için **Esc**'e basın
3. Kısayolu kaldırmak için **Temizle**'ye tıklayın

Kombinasyon başka bir özellik tarafından zaten kullanılıyorsa kaydedilmez ve düğmede bir çakışma mesajı görünür. Kısayol, Stream Toolkit etkin pencere değilken de çalışır. Tüm kısayollar [Kısayollar](./hotkeys) sayfasında da listelenir.

## Görsel

{/* TODO: 截圖 — 圖片分頁 */}

### Görsel Ekleme

1. **Görsel ekle**'ye tıklayın
2. Bir dosya seçin (jpg, jpeg, png veya gif). Dosya adı görsel adı olur

Kartı genişletmek bir küçük resim ve şu ayarları gösterir:

- **Ad**: görselin adı
- **Dosya yolu**: başka bir dosya seçmek için **Yeniden seç**'e tıklayın
- **Kısayol**: görseli göstermek için bir kez basın, gizlemek için tekrar basın
- **Konum ve boyut ayarla**: aşağıya bakın
- **Görseli sil**: görseli siler

### Gösterme ve Gizleme

Görseli OBS'te göstermek için karttaki **○** düğmesine tıklayın. Düğme **◉**'e dönüşür. Görseli gizlemek için tekrar tıklayın.

### Görüntü ayarları

**Aynı anda birden fazla görsel göstermeye izin ver** varsayılan olarak kapalıdır. Kapalıyken bir görseli göstermek, o anda gösterilen görseli gizler. Aynı anda birkaç görsel göstermek için açın.

### Konum ve boyut ayarla

- **X konumu** / **Y konumu**: px cinsinden. 0/0 kaynağın merkezidir. Pozitif değerler sağa/aşağı, negatif değerler sola/yukarı taşır
- **Genişlik** / **Yükseklik**: orijinal boyutun %'si olarak. 100 = orijinal boyut. 🔗 düğmesi en-boy oranını kilitler (varsayılan olarak açık). Serbestçe ölçeklemek için tıklayın
- Görsel gösterilirken değişiklikler OBS'te canlı olarak önizlenir
- **Kaydet** değişiklikleri korur, **Sıfırla** pencereyi açtığınız andaki değerlere döner, **İptal** kaydetmeden kapatır

## Video

{/* TODO: 截圖 — 影片分頁 */}

Bir kart eklemek için **Video ekle**'ye tıklayın, ardından genişletin:

- **Video adı**: kartta gösterilen ad
- **Kaynak**: **YouTube** veya **Yerel**
  - **YouTube**: video bağlantısını **YouTube adresi**'ne yapıştırın. Kontrol etmek için **Çözümlemeyi test et**'e tıklayın. Başarılı olursa "Çözümlendi, oynatılırken otomatik uygulanır" gösterilir
  - **Yerel**: bir mp4, webm veya ogg dosyası seçmek için **Dosya seç**'e tıklayın. Boyut sınırı 200MB'dir ve dosya büyüdükçe gecikme artar. Saydam arka plan için WebM (VP9 Alpha) video kullanın
- **Döngüsel çalma**: videoyu tekrarlar
- **Oynatma süresi**: **Başlangıç** ve **Bitiş**'i ayarlayın (saat, dakika, saniye, ms). Sona kadar oynatmak için **Bitiş**'i 00:00'da bırakın
- **Ses**: %0–100
- **Kısayol**: videoyu oynatmak için basın. Video oynarken tekrar basmak onu durdurur
- **Konum ve boyut ayarla**: görsellerdekiyle aynı konum ve boyut alanları. Ayarlarken videoyu OBS'te döngüde oynatmak için **Önizleme döngüsü**'ne, durdurmak için **Önizlemeyi durdur**'a tıklayın. Bitince **Kaydet** veya **İptal**'e tıklayın

Videoyu OBS'te oynatmak için karttaki **▶**'e tıklayın. Durdurmak için **■**'e tıklayın.

## Ses efekti

{/* TODO: 截圖 — 音效分頁 */}

Bir kart eklemek için **Ses ekle**'ye tıklayın, ardından genişletin:

- **Ses adı**: kartta gösterilen ad
- **Kaynak**: **YouTube adresi** veya **Yerel dosya**
  - **YouTube adresi**: bağlantıyı yapıştırın ve kontrol etmek için **Çözümlemeyi test et**'e tıklayın
  - **Yerel dosya**: bir mp3, wav, ogg, flac, m4a, aac veya opus dosyası seçmek için **Dosya seç**'e tıklayın
- **Oynatma süresi**: **Başlangıç** ve **Bitiş**'i ayarlayın. Sona kadar oynatmak için **Bitiş**'i 00:00'da bırakın
- **Ses**: %0–100
- **Kısayol**: sesi çalmak için basın

Sesi OBS'te çalmak için karttaki **▶**'e tıklayın. Durdurmak için **■**'e tıklayın. Aynı anda yalnızca bir ses çalar. Başka bir sesi başlatmak mevcut sesi durdurur.

:::info Deneme Sürümü Sınırlamaları
- Yalnızca **1** görsel, **1** video ve **1** ses ekleyebilirsiniz
- Görsel ve video overlay'leri bir filigran gösterir

Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::

## Sıkça Sorulan Sorular

**Q: Videolar veya sesler oynuyor ama yayında ses yok.**
`/videoboard` ve `/soundboard` kaynakları için **Sesi OBS üzerinden kontrol et**'in işaretli olduğundan ve kaynakların OBS ses karıştırıcısında sessize alınmadığından emin olun.

**Q: Video dosyamı seçemiyorum.**
Yalnızca en fazla 200MB olan mp4, webm ve ogg dosyaları seçilebilir. Dosya daha büyükse sınırı belirten bir mesaj gösterilir ve dosya eklenmez.
