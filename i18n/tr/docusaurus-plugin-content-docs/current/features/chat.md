---
sidebar_position: 3
---

# Sohbet

**Sohbet**, Twitch ve YouTube sohbetinizi isteğe bağlı otomatik çeviriyle tek bir overlay'de birlikte gösterir. Ayrıca sohbeti yalnızca sizin görebildiğiniz şeffaf bir masaüstü penceresinde de gösterebilir.

## OBS Kaynak Adresi

```
http://127.0.0.1:7272/chat
```

Tarayıcı kaynağı olarak ekleyin: [OBS'e Kaynak Ekleme](../getting-started/obs-source). Bu overlay'in sesi yoktur.

:::info
Mesajlar yalnızca kenar çubuğundaki **Sohbet** anahtarı açıkken overlay'e gönderilir. Anahtar kapalıyken sohbet yine alınır; bu yüzden sohbeti okuyan özellikler (anketler, çekilişler, şarkı istekleri vb.) çalışmaya devam eder.
:::

## Başlamadan Önce

Göstermek istediğiniz platformları bağlayın:

- [Twitch Ayarlar](../platforms/twitch)
- [YouTube Ayarlar](../platforms/youtube-settings)

Ayarlar sayfasında iki sekme vardır: **Ayarlar** ve **Görünüm**.

## Ayarlar Sekmesi

### Platform

- **Platform ikonunu göster (Twitch / YouTube)** — her mesajın önünde <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> simgesini gösterir

Her platformun kendi kartı vardır. Platform adının yanındaki nokta, platform bağlı ve etkinken yeşil yanar; Twitch bağlı değilse **(Bağlı değil)**, YouTube sohbeti bağlı değilse **Sohbet adresi bağlı değil** gösterilir.

| Seçenek | Açıklama |
|--------|-------------|
| **Sohbeti etkinleştir** | Bu platformun mesajlarını göster |
| **Avatarı göster** | İzleyicinin avatarını göster |
| **Rozetleri göster** (Twitch) / **Rozetleri göster (üye simgesi)** (YouTube) | Rozetleri göster |
| **@kullanıcı adı yerine izleyici adını göster** | Yalnızca YouTube. Google ile giriş yapana kadar devre dışıdır |

YouTube sohbeti etkin ama bağlı değilken kartında iki düğme görünür:

- **Otomatik bağlan** — mevcut yayınınızı otomatik olarak bulur (Google ile giriş gerekir)
- **Elle gir** — sohbet adresini yapıştırmanız için sizi ayarlar sayfasına götürür

**Maksimum mesaj sayısı**: ekranda tutulacak mesaj sayısı (5–200, varsayılan 50).

### Otomatik çeviri

1. **Çeviriyi etkinleştir**'i işaretleyin
2. **Hedef dil**: mesajların çevrileceği dil. Varsayılan olan **Arayüz dilini takip et**, uygulamanın arayüz dilini kullanır
3. **Çevrilmeyecek diller** (isteğe bağlı): işaretli dillerdeki mesajlar olduğu gibi bırakılır. Portekizce PT-BR ve PT-PT ayırt edilemez; bu yüzden birini işaretlemek ikisini de atlar

**Çeviri hizmeti** **MyMemory**'dir ve API anahtarı gerektirmez.

- **E-posta (isteğe bağlı)**: e-posta olmadan günlük kota 5.000 karakterdir; bir e-posta girip **Kaydet**'e tıklayarak 50.000 karaktere çıkarın (ücretsiz, MyMemory'ye kayıt gerekmez)
- Alttaki çubuk bugün kullanılan yaklaşık miktarı gösterir. Her gün UTC 08:00'de sıfırlanır

### Test

- **Test mesajı gönder** — overlay'e rastgele bir örnek mesaj gönderir
- **Temizle** — overlay'deki tüm mesajları temizler

**Bağlantı başarısız — sunucu çalışmıyor olabilir** görünürse, Stream Toolkit'ın yerel sunucusu yanıt vermiyordur.

### Masaüstü sohbet penceresi

Sohbeti oyununuzun üzerinde, şeffaf ve her zaman üstte duran küçük bir pencerede gösterir. Yalnızca siz görürsünüz; tek monitörle yayın için kullanışlıdır.

1. **Pencereyi aç**'a tıklayın (veya tepsi simgesine sağ tıklayıp **Masaüstü sohbeti aç**'ı seçin)
2. Kilit açıkken pencereyi taşımak için üst çubuğu, yeniden boyutlandırmak için kenarlarını sürükleyin
3. Yerine oturduğunda **🔒 Kilitle**'ye tıklayın. Tıklamalar artık pencereden geçip oyununuza ulaşır. Kilidi açmak için fareyi pencerenin üzerine getirip sağ üst köşede beliren 🔓'e tıklayın veya ayarlar sayfasında **🔓 Kilidi aç**'a tıklayın

**Konumu sıfırla**, pencereyi varsayılan konumuna geri taşır.

| Ayar | Açıklama |
|---------|-------------|
| **Stil** | **Yalnızca ad ve mesaj** (varsayılan) veya **OBS sohbetiyle aynı** |
| **Yazı boyutu** | 12–32 px, varsayılan 16. Yalnızca **Yalnızca ad ve mesaj** için |
| **Metin opaklığı** | %10–100, varsayılan %100 |
| **Arka plan opaklığı** | %0–100, varsayılan %40 |
| **Mesajları soldur** | 0–120 saniye, varsayılan 0. Her mesaj bu kadar saniye sonra solar ve solan mesajlara geri kaydırılamaz. 0'da hiçbir şey solmaz ve kilit açıkken önceki mesajlara yukarı kaydırabilirsiniz (maksimum mesaj sayısına kadar) |
| **Yayın yakalamasında gizle** | Varsayılan olarak açık. OBS Ekran Yakalama pencereyi görmez, böylece izleyiciler sohbeti iki kez görmez. Ekran görüntülerinde ve Discord ekran paylaşımında da görünmez |

:::tip
Oyununuz tam ekrandayken pencereyi göremiyorsanız oyunu Kenarlıksız Pencere veya Pencere moduna alın. Pencerenin konumunu ve boyutunu kontrol etmek için **Test mesajı gönder**'i kullanın.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Görünüm Sekmesi

### Önizleme

Sekmenin üst kısmında canlı bir önizleme gösterilir. **Önizleme**'nin yanındaki renk seçici yalnızca önizleme arka planını değiştirir. **Avatar**, **Rozet** ve **Platform ikonu** onay kutuları yalnızca önizlemede gösterilenleri değiştirir.

### Görünüm Ayarları

**Varsayılana dön**, varsayılan görünümü (tema uygulanmışsa uygulanan temanın görünümünü) geri yükler.

- **Giriş yönü**: **Yukarıdan aşağıya**, **Aşağıdan yukarıya** (varsayılan), **Soldan sağa**, **Sağdan sola**
- **Metin** — **Takma ad** ve **Mesaj** için ayrı ayrı ayarlanır:
  - Yazı tipi, boyut (px) ve renk. Kullanıcı adı için **Orijinal renk** (izleyicinin platform rengi) veya **Özel renk** seçebilirsiniz
  - **Kenar çizgisi**: renk, **Saydamlık**, **Kalınlık**
  - **Gölge**: renk, **Saydamlık**, **Bulanıklık**, X / Y kayması
- **Simge boyutu**: **Platform ikonu**, **Avatar** ve **Rozet** için ölçek (0.1–5x)
- **Renk**: her mesajın **Arka plan rengi**

### Özel CSS

Overlay'in CSS'ini doğrudan düzenlemek için **Özel CSS**'i genişletin. CSS'te kullanılacak görselleri yüklemek için **Materyalleri yönet**'i kullanın. **Varsayılana dön** varsayılan CSS'i geri yükler. Ayrıca bkz. [Tema stilleri](./themes).

:::tip
Özel CSS'iniz görünüm alanlarından birini `!important` ile ayarlıyorsa, o alan Görünüm ayarlarında gri görünür ("Bu ayar özel CSS tarafından denetleniyor"). Bir tema uygulandığında CSS salt okunurdur — düzenlemeden önce geri yükleyin.
:::

## Deneme Sürümü Sınırlamaları

:::info
- Otomatik çeviriyi açmak sohbet overlay'ine bir filigran ekler
- **Özel CSS** yalnızca tam sürümde kullanılabilir
- **Masaüstü sohbet penceresi** yalnızca tam sürümde kullanılabilir

Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
