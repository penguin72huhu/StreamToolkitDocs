---
sidebar_position: 17
---

# Şarkı istekleri

İzleyiciler bir sohbet komutuyla YouTube şarkıları ister ve şarkılar OBS'te art arda çalar. Şarkıları kendiniz de ekleyebilir ve istek olmadığında çalacak bir varsayılan çalma listesi ayarlayabilirsiniz.

## OBS Kaynak Adresi

```
http://127.0.0.1:7272/song-request
```

Sayfanın üst kısmındaki **OBS kaynak adresi**'nin yanındaki **Kopyala**'ya tıklayın, ardından OBS'e tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source).

:::warning
Şarkı istekleri ses çalar. Tarayıcı kaynağı özelliklerinde **Sesi OBS üzerinden kontrol et**'i işaretleyin, aksi hâlde müzik yayınınıza ulaşmaz.
:::

:::tip
Sol menüde **Şarkı istekleri**'nin yanındaki anahtarı da açın. Sohbet komutları yalnızca anahtar açıkken işlenir.
:::

Sayfada iki sekme vardır: **Ayarlar** ve **Çalma listesi**.

## Ayarlar Sekmesi

### Platform

Her platformun kendi kartı vardır:

- **Bu platformda şarkı isteğine izin ver**: o sohbetteki izleyicilerin şarkı istemesine izin verir
- **Sohbet botu yanıtını etkinleştir** (yalnızca Twitch, varsayılan olarak açık): bağlı Twitch hesabınızı kullanarak her komutun sonucunu Twitch sohbetinde yanıtlar. Yalnızca Twitch etkin ve bağlıyken gösterilir

Bağlı olmayan bir platform **(Bağlı değil)** (Twitch) veya **Sohbet adresi bağlı değil** (YouTube) gösterir. Önce bağlayın:

- [Twitch Ayarlar](../platforms/twitch)
- [YouTube Ayarlar](../platforms/youtube-settings)

### Sohbet komutları

| Alan | Varsayılan |
|------|--------|
| **Komut ön eki** | `!` (`! @ # $ % & ~` arasından seçin) |
| **Şarkı isteği komutu** | `sr` |
| **Şarkı isteği sil** | `remove` |
| **Şarkı isteği listesini gör** | `queue` |
| **Mevcut şarkıyı sorgula** | `song` |
| **Şarkı isteği bekleme süresi** | 3000 ms |

Bekleme süresi her izleyici için ayrı sayılır: başarılı bir istekten sonra aynı izleyici tekrar istemeden önce bu kadar beklemelidir.

### Ayarlar

- **Videoyu ekranda göster** (varsayılan olarak açık): kapalıyken video OBS'te gizlenir ancak ses çalmaya devam eder
- **Liste üst sınırı** (1–100, varsayılan 20): listedeki istenen şarkıların en fazla sayısı. Varsayılan çalma listesi şarkıları sayılmaz
- **Şarkı isteği bildirimini göster** (varsayılan olarak açık): bir izleyici şarkı istediğinde, kaldırdığında veya isteği başarısız olduğunda OBS'te bir bildirim kartı gösterir. Açıkken şunları ayarlayabilirsiniz:
  - **X** / **Y**: bildirimin sol üst köşeden konumu (px, varsayılan 16 / 16)
  - **Bildirim ölçeği**: boyut çarpanı (varsayılan 1.0)
  - **Bildirim görünümünü test et**: OBS'e bir test bildirimi gönderir

Her bildirim 5 saniye kalır; aynı anda en fazla 3 tane gösterilir.

{/* TODO: 截圖 — 點歌設定分頁 */}

## İzleyiciler Nasıl Kullanır

Varsayılan ayarlarla:

| Komut | Ne yapar |
|------|------|
| `!sr <YouTube link>` | O videoyu ister |
| `!sr <search words>` | YouTube'da arar ve ilk sonucu ister |
| `!remove` | İzleyicinin en son isteğini kaldırır (çalan şarkıyı değil) |
| `!queue` | Sıradaki 3 istenen şarkıyla yanıt verir |
| `!song` | Çalan şarkıyla yanıt verir |

- Kabul edilen bağlantılar: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…` veya 11 karakterli bir video ID'si
- Çalma listesi bağlantıları kabul edilmez
- Liste **Liste üst sınırı**'na ulaştığında istek başarısız olur
- Yeni istekler diğer izleyicilerin isteklerinden sonra, varsayılan çalma listesi şarkılarından önce sıraya alınır
- `!queue` ve `!song` yalnızca Twitch sohbetinde ve **Sohbet botu yanıtını etkinleştir** açıkken çalışır

## Çalma listesi Sekmesi

### Oynatma Kontrolleri

Üst satır, mevcut şarkıyı kimin istediğini ve başlığını gösterir. Düğmeler:

- **Oynat** / **Duraklat**: hiçbir şey çalmıyorsa listedeki ilk şarkıdan başlar
- **Durdur**: oynatmayı durdurur
- **Sonraki şarkı**: sonraki şarkıya geçer

Bir şarkı çalarken bir ilerleme çubuğu görünür; bir konuma atlamak için sürükleyin. Bir şarkı bittiğinde sonraki otomatik olarak başlar.

:::note
Uygulama başladığında hiçbir şey otomatik olarak çalmaz. Başlamak için **Oynat**'a basın.
:::

### Varsayılan çalma listesi

Bir YouTube çalma listesi adresini yapıştırın ve **Döngüsel çalma** veya **Rastgele çalma**'yı seçin. Liste bittiğinde bu çalma listesinden bir şarkı otomatik olarak eklenir ve çalınır. Bu şarkılar listede **Varsayılan liste** olarak görünür.

Varsayılan çalma listesi YouTube hesabınız üzerinden okunur; bu yüzden önce [YouTube Ayarlar](../platforms/youtube-settings)'da Google ile giriş yapmanız gerekir.

### Manuel şarkı isteği

Bir YouTube video adresini yapıştırın ve **Listeye ekle**'ye tıklayın (veya Enter'a basın). Manuel isteklerde arama kelimeleri desteklenmez.

### Liste

**Liste (n)** her şarkıyı gösterir: platform, isteyen, başlık ve video ID'si (YouTube'da açmak için tıklayın). Bir şarkıyı kaldırmak için **Sil**'e tıklayın; çalan şarkıyı silmek sonrakine geçer. **Temizle** tüm listeyi boşaltır.

{/* TODO: 截圖 — 播放清單分頁 */}

## Sıkça Sorulan Sorular

**Q: İzleyiciler komutu yazıyor ama hiçbir şey olmuyor?**
Şunları kontrol edin:
- Sol menüdeki **Şarkı istekleri** anahtarı açık
- O platform için **Bu platformda şarkı isteğine izin ver** işaretli
- Twitch için: Twitch sohbeti [Sohbet](./chat) özelliği tarafından okunur. Sohbet sayfasında Twitch'i kapattıysanız (ve [Sohbet Botu](./chat-bot) Twitch kullanmıyorsa) Twitch komutları alınmaz

**Q: Varsayılan çalma listesi çalmıyor?**
Ayarlar'da Google ile giriş yaptığınızdan ve URL'nin bir çalma listesi bağlantısı olduğundan (`list=` içerir) emin olun.

:::info Deneme Sürümü Sınırlamaları
- İzleyicilerin sohbetten şarkı istemesi yalnızca tam sürümde kullanılabilir. Deneme sürümünde sohbetten gelen istek "Deneme sürümünde şarkı isteği yok" mesajıyla başarısız olur. **Manuel şarkı isteği** ve varsayılan çalma listesi yine çalışır
- OBS overlay'i bir filigran gösterir

Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
