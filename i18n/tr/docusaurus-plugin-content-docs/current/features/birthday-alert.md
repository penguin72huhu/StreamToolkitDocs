---
sidebar_position: 8.2
---

# İzleyici doğum günleri

İzleyicilerinizin doğum günlerini bir listeye ekleyin. Listedeki bir izleyici doğum gününde veya kısa süre sonrasında yayınınız sırasında sohbete yazdığında, yayında bir doğum günü bildirimi açılır. Her izleyici her doğum gününde bir bildirim alır.

## OBS Kaynak Adresi

```
http://127.0.0.1:7272/birthday-alert
```

URL'yi **İzleyici doğum günleri ayarları** sayfasının üst kısmından kopyalayın ve OBS'e Tarayıcı Kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source).

:::warning
Bildirimler ses çalar. Tarayıcı kaynağı özelliklerinde **Sesi OBS üzerinden kontrol et** seçeneğini işaretleyin, aksi hâlde ses yayında duyulmaz.
:::

Sol kenar çubuğunda **İzleyici doğum günleri**'nin yanındaki anahtarı açın. Uygulama yalnızca bu anahtar açıkken sohbete bağlanır ve doğum günlerini kontrol eder. **Test bildirimi** ve **Tekrar oynat** düğmeleri anahtar kapalıyken de çalışır.

Sayfada üç sekme vardır: **Ayarlar**, **İzleyiciler** ve **Görünüm**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Nasıl Çalışır

- Listedeki bir izleyici, doğum gününden itibaren belirlediğiniz gün sayısı boyunca sohbete yazarsa bildirim alır. Doğum gününden önce hiçbir şey gösterilmez.
- Her izleyici her doğum gününde bir bildirim alır. 1/2'de duyurulan 12/28 tarihli bir doğum günü yine önceki yılın doğum günü sayılır.
- Bildirimler yalnızca izleyicinin yazdığı platform yayındayken tetiklenir. Yayında değilken veya uygulama yayında olup olmadığınızı henüz anlayamadığında, sohbete yazmak bildirimi tetiklemez ve kaydetmez; izleyici bir yayın sırasında tekrar yazdığında gösterilir.
- YouTube sohbeti bağlandığında yüklenen sohbet geçmişi sayılmaz; bu yüzden uygulamayı yeniden başlatmak, uygulama kapalıyken yazan kişileri duyurmaz.
- 2/29 doğum günü, artık yıl olmayan yıllarda 2/28'e denk gelir.

## Ayarlar Sekmesi

### Sohbet bağlantısı

Özellik açıkken gösterilir. Her platform, sohbetinin bağlı olup olmadığını gösterir:

- **Twitch**: kanal ayarlanmamışsa satırda **Twitch kanalı ayarlanmadı — önce Twitch’i bağla** ve **Ayarlara git** görünür. Önce Twitch'i bağlayın: [Twitch Ayarlar](../platforms/twitch).
- **YouTube**: sohbet bağlı değilse satırda **Otomatik bağlan** ve **Elle gir** (sizi Ayarlar'daki sohbet adresi alanına götürür) görünür. Otomatik bağlanmayı kullanıyor ve Google ile giriş yapmışsanız **Yayın başladıktan sonra bağlanmazsa Sohbet sayfasında Bağlan’a bas** gösterilir. Bkz. [YouTube Ayarlar](../platforms/youtube-settings) ve [Sohbet](./chat).

Bir platform bağlandığında ayrıca **Yayında**, **Yayında değil** veya **Yayında olup olmadığı bilinmiyor** gösterilir. Bildirimler yalnızca **Yayında** durumunda tetiklenir.

### Ayarlar

| Alan | Açıklama |
|-------|-------------|
| **Doğum gününden sonra kaç gün sayılsın** | 0–30. Varsayılan: 7. 0 = yalnızca doğum günü. |
| **Görüntüleme süresi** | Her bildirimin ekranda kalma süresi, saniye cinsinden (1–60). Varsayılan: 6. |

### Bildirimleri Test Etme

Bir test izleyicisi ve bugünün tarihiyle OBS'e örnek bir bildirim göndermek için **Test bildirimi**'ne tıklayın. Yalnızca OBS'te gösterilir ve hiçbir zaman kaydedilmez; sol kenar çubuğundaki anahtar kapalıyken de çalışır. Düğme kısa süreliğine **Gönderildi** olarak değişir.

## İzleyiciler Sekmesi

### İzleyici Ekleme

İzleyici eklemenin iki yolu vardır:

- **＋ Son sohbet edenlerden ekle**: yakın zamanda sohbete yazan birini seçin. Form; not olarak adı, hesabı zaten bağlanmış şekilde ve doğum günü olarak bugünün tarihiyle açılır.
- **＋ Adla ekle**: hesap adını kendiniz yazın.

**Son sohbet edenler**, sohbet bağlıyken yazan izleyicileri listeler (en fazla 200, 30 gün saklanır). Güncellemek için **Yenile**'ye tıklayın. Zaten listede olan izleyiciler **Eklendi** olarak gösterilir ve tekrar seçilemez. Liste uzun olduğunda bir arama kutusu görünür.

Formu doldurun:

1. **Not / takma ad**: onu tanıdığınız ad, ör. `Alex`. İsteğe bağlı.
2. **Doğum günü**: ay ve gün (yıl yok).
3. **Hesaplar**: en az bir hesap. Bir izleyicinin birden fazla hesabı olabilir, ör. hem Twitch hem YouTube.
   - **＋ Hesap yaz**: **Twitch** veya **YouTube**'u seçip adı yazın. Twitch için kullanıcı adını veya görünen adı; YouTube için @kullanıcı adını veya kanal adını kullanın.
   - **＋ Son sohbet edenlerden**: zaten bağlı olan bir hesap ekleyin.
   - **✕** bir hesabı kaldırır.
4. **Kaydet**'e tıklayın (veya Enter'a basın). **İptal** (veya Esc) formu kapatır.

### Yazılan Adlar ve Bağlama

Yazılan ad, o izleyici ilk kez sohbete yazdığında hesaba bağlanır. Eşleştirme büyük/küçük harfi ve baştaki `@` işaretini yok sayar. Adlar aynı olabilir; bu yüzden son sohbet edenlerden seçmek daha güvenlidir.

YouTube için @kullanıcı adını yazın: Sohbet sayfasında **@kullanıcı adı yerine izleyici adını göster** açık değilse, kanal adı hiç eşleşmeyebilir.

Listedeki her hesap şunlardan birini gösterir:

- **Bağlandı: [ad]**: hesap bağlı.
- **“[ad]” yazmayı bekliyor**: henüz bağlanmamış, yazılmış bir ad.
- **Yeni bağlandı**: izleyici sohbete yazdığında uygulama bu hesabı otomatik olarak bağladı. Gerçekten o kişi olduğunu kontrol edin, ardından **✓ Doğru**'ya tıklayın; değilse **Bağlantıyı kaldır**'a tıklayın.
- **Bu hesap zaten “[ad]” kaydında**: yazılan ad, listedeki başka bir izleyiciye ait bir hesapla eşleşti. Bir hesap yalnızca bir izleyiciye ait olabilir; bu yüzden buradaki adı değiştirin veya ikisinden birini silin.

**Bağlantıyı kaldır**, hesabın altında bir kutu açar. Bağlantı kaldırıldıktan sonra bunun yerine kutudaki ad aranır (değiştirebilirsiniz) ve izleyici bir sonraki kez yazdığında hesap yeniden bağlanır.

### Liste

Doğum günü bildirimi zamanı gelmiş izleyiciler önce, ardından yaklaşan doğum günleri gelir. 5'ten fazla izleyici olduğunda bir arama kutusu görünür. Her izleyici şunları gösterir:

- **Yazmasını bekliyor**: doğum günü dönemi; sohbete yazdığı anda bildirim gösterilir.
- **🎂 [tarih] gösterildi**: bu doğum gününün bildirimi zaten gösterildi.
- **▶ Tekrar oynat**: bu izleyicinin bildirimini OBS'te tekrar gösterir. Her zaman çalışır ve hiçbir zaman kaydedilmez.
- **Düzenle**: notu, doğum gününü veya hesapları değiştirin. Doğum gününü değiştirmek, bildirimin yeni tarih için tekrar tetiklenmesini sağlar.
- **Sil**: **Sil**'e, ardından **Silmeyi onayla**'ya tıklayın.

## Görünüm Sekmesi

### Önizleme

Önizleme, OBS kaynağıyla aynı sayfayı kullanır. Önizleme arka planını değiştirmek için **Önizleme**'nin yanındaki renk seçiciyi kullanın; bildirim animasyonunu tekrar oynatmak için **▶ Animasyonu yeniden oynat**'a tıklayın.

### Ortak stil / Her platform ayrı

- **Ortak stil**: Twitch ve YouTube aynı bildirim stilini kullanır.
- **Her platform ayrı**: her platformun kendi stili vardır. Aşağıdaki düğmelerle **Twitch** veya **YouTube**'u seçip ayarlarını düzenleyin. İlk geçişte, özelleştirmediğiniz platformlar mevcut ortak stili kopyalar; her birinin kendi geri sayım çubuğu rengi olur.

**Varsayılana dön**, düzenlediğiniz stil için varsayılan stili geri yükler.

### Görsel

- **Görsel seç**: materyal yöneticisinden bir görsel seçin. Görsel yoksa bir pasta emojisi gösterilir. **Temizle** görseli kaldırır.
- **Görsel boyutu**: 1–400 px.
- **Görsel konumu**: **Sol**, **Sağ**, **Üst** veya **Alt**.

### Ses efekti

Yerleşik bir ses seçin: **Yok**, **Çınlama** (varsayılan), **Bozuk para**, **Çan**, **Pop**, **Fanfar**. Dinlemek için **▶**'e tıklayın. Materyal yöneticisinden kendi ses dosyanızı kullanmak için **Ses seç**'e tıklayın.

### Özel metin

Bildirimde gösterilecek satırı yazın. Varsayılan metni kullanmak için boş bırakın: `Doğum günün kutlu olsun, {name}!` Şunları kullanabilirsiniz:

| Yer tutucu | Yerine gelen |
|-------------|---------------|
| `{name}` | İzleyicinin sohbetteki adı |
| `{label}` | Notunuz / takma ad (not boşsa sohbet adı) |
| `{birthday}` | Doğum günü, ör. `10/20` |
| `{MM}` `{DD}` | İki haneli ay ve gün; kendi biçiminizi oluşturmak için, ör. `{DD}/{MM}` |
| `{date}` | Overlay dilinde doğum günü |
| `{platform}` | Platform adı |

### Metin ve Renk

- **Metin**: **Özel metin** ve **İzleyici adı** için yazı tipi, boyut ve renk ayarlayın.
- **Renk**: **Arka plan**, **Gölge** ve **Geri sayım çubuğu**.

### Özel CSS

Düzenlediğiniz stilin (ortak veya seçili platform) CSS'ini düzenlemek için **Özel CSS**'i genişletin. **Varsayılana dön** şablon CSS'i geri yükler, **Materyalleri yönet** ise materyal yöneticisini açar. Steam Workshop temaları da burada uygulanabilir. Bir tema uygulanmışken CSS salt okunurdur. Bkz. [Tema stilleri](./themes).

:::info Deneme Sürümü
- Listede en fazla 3 izleyici. Liste daha fazlasını içeriyorsa (ör. tam sürüm kaydından), fazla izleyiciler kilitli 🔒 gösterilir: hiçbir zaman bildirim tetiklemezler, düzenlenemez ve tekrar oynatılamazlar.
- Özel CSS yalnızca tam sürümde kullanılabilir.
- Bildirim OBS'te bir filigran gösterir.

Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::

## Sıkça Sorulan Sorular

**Q: Yayında ses yok mu?**
Tarayıcı kaynağı özelliklerinde **Sesi OBS üzerinden kontrol et** seçeneğinin işaretli olduğunu ve kaynağın OBS ses karıştırıcısında sessize alınmadığını kontrol edin. Ayrıca **Ses efekti**'nin **Yok** olarak ayarlanmadığını kontrol edin.

**Q: Bir izleyici doğum gününde sohbete yazdı ama bildirim gösterilmedi.**
Sol kenar çubuğundaki anahtarın açık olduğunu, **Ayarlar** sekmesindeki **Sohbet bağlantısı**'nın o platform için **Yayında** gösterdiğini ve listedeki hesabın **Bağlandı** gösterdiğini ya da yazılan adın sohbet adıyla eşleştiğini kontrol edin. OBS açık değilken gösterildiyse **▶ Tekrar oynat**'ı kullanın.

**Q: OBS kaynağını geç ekledim. Önceki bildirimleri tekrar oynatır mı?**
Hayır. Yeni açılan bir kaynak yalnızca bağlandıktan sonra gelen bildirimleri gösterir. Birini tekrar göstermek için **İzleyiciler** sekmesinde **▶ Tekrar oynat**'ı kullanın.
