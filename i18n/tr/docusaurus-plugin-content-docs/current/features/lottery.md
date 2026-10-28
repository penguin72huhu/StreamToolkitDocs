---
sidebar_position: 16
---

# Çekilişler

İzleyiciler Twitch veya YouTube sohbetine bir anahtar kelime yazarak katılır. Katılım kapandığında kazananları rastgele çekin; çekiliş animasyonu OBS overlay'inde oynatılır.

## OBS Kaynak Adresi

```
http://127.0.0.1:7272/lottery
```

Sayfanın üst kısmındaki **OBS kaynak adresi**'nin yanındaki **Kopyala**'ya tıklayın, ardından OBS'e tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source). Çekilişler ses çalmaz, bu yüzden "Sesi OBS üzerinden kontrol et" seçeneğini açmanıza gerek yoktur.

:::tip
Sol kenar çubuğunda **Çekilişler**'in yanındaki anahtarı da açın (**OBS görüntüsünü aç**). Kapalıyken overlay gizli kalır.
:::

Sayfada iki sekme vardır: **Ayarlar** ve **Geçmiş**.

## Ayarlar

### Oylama platformu

Hangi platformun sohbetinin katılabileceğini seçmek için **Twitch** veya **YouTube**'a tıklayın. İkisini birden seçebilirsiniz. Bağlı olmayan bir platform Twitch için **(Bağlı değil)**, YouTube için **Sohbet adresi bağlı değil** gösterir. Bağlamak için bkz. [Twitch Ayarlar](../platforms/twitch) ve [YouTube Ayarlar](../platforms/youtube-settings).

### Çekiliş anahtar kelimesi

Bu anahtar kelimeyi içeren bir sohbet mesajı izleyiciyi çekilişe katar. Her izleyici bir çekilişe yalnızca bir kez katılabilir. Anahtar kelime boşken **Toplamaya başla**'ya tıklanamaz.

### Çekiliş süresi

Katılımın ne kadar süre açık kalacağı, saniye cinsinden. Varsayılan 300, aralık 10–3600'dür.

### Maks. katılımcı

Bu kadar kişi katıldığında katılım erken kapanır. Sınır olmaması için `0` girin.

### Seçildikten sonra sil

Açıkken, bir kazanan bir sonraki çekilişten önce katılımcılardan çıkarılır; böylece o çekilişte tekrar çekilemez.

### İpucu metni

Katılım sırasında overlay'de gösterilen ve izleyicilere anahtar kelimeyi ve katılımcı sayısını bildiren ipucu. Yazı tipini, rengini ve boyutunu (px) ayarlayın.

### Çekiliş animasyonu

- **Hızlı ID döngüsü** (varsayılan): katılım açıkken katılımcıların adları ekranda süzülür, ardından çekiliş sırasında hızla döner
  - **Toplama ekranı yazı tipi**: yazı tipi, yazı boyutu ve ad etiketlerinin renkleri (en fazla 5)
  - **Çekiliş animasyonu yazı tipi**: çekiliş sırasında dönen adların yazı tipi ve yazı boyutu
  - **Varsayılana dön**: bu ayarları geri yükler
- **Çark animasyonu**: katılımcılar, kazananı seçmek için dönen bir çarka yerleştirilir. Bir renk şeması seçin: **Minimal** veya [Çark](./turntable)'ta oluşturduğunuz özel bir tema

Katılım açıkken platformları, anahtar kelimeyi, süreyi, maks. katılımcıyı, Seçildikten sonra sil'i veya animasyon türünü değiştiremezsiniz.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Çekiliş Yapma

1. **Toplamaya başla**'ya tıklayın. Panelde **Toplanıyor…**, kalan süre ve katılımcı sayısı gösterilir
2. Katılım açıkken **Katılımcı adını manuel girin** alanına bir ad yazıp **Ekle**'ye tıklayabilirsiniz (veya Enter'a basın). Listede zaten olan bir ad "Bu ID zaten listede" mesajını gösterir
3. Süre dolmadan katılımı kapatmak için **Toplamayı bitir**'e tıklayın. Katılım ayrıca süre dolduğunda veya **Maks. katılımcı**'ya ulaşıldığında kapanır. Ardından panelde **Süre doldu!** gösterilir
4. **Çekilişi başlat**'a tıklayın. Overlay animasyonu oynatır ve bittiğinde kazanan **Kazanan** altında görünür
5. Başka bir kazanan çekmek için **Yeniden çek**'e tıklayın

Herhangi bir aşamada tüm katılımcıları ve kazananları temizlemek için **Çekilişi iptal et**'e tıklayın; overlay bekleme durumuna döner.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Geçmiş

**Geçmiş** sekmesi her çekiliş için zaman, anahtar kelime ve katılımcı sayısını içeren bir kayıt tutar. Kazananları ve tam katılımcı listesini görmek için bir kaydı genişletin. Yalnızca son 30 günün çekiliş kayıtları saklanır. Bir kaydı silmek için 🗑'e, ardından **Silmeyi onayla**'ya tıklayın.

:::info Deneme Sürümü Sınırlamaları
OBS overlay'i bir filigran gösterir. Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
