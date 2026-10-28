---
sidebar_position: 13
---

# Emoji duvarı

İzleyiciler sohbette emote kullandığında, emote'lar yayınınızın üzerinde süzülerek geçer.

:::note Başlamadan önce
Emoji duvarı emote'ları sohbetten okur, bu yüzden önce kullandığınız platformları bağlayın. Bkz. [Twitch Ayarlar](../platforms/twitch) ve [YouTube Ayarlar](../platforms/youtube-settings).
:::

## Adım 1: OBS Kaynağını Ekleyin

Sayfanın üst kısmındaki **OBS kaynak adresi**'ni kopyalayın:

```
http://127.0.0.1:7272/emote-wall
```

Bunu OBS'e tarayıcı kaynağı olarak ekleyin. Bkz. [OBS'e Kaynak Ekleme](../getting-started/obs-source). Emoji duvarı ses çalmaz, bu yüzden "Sesi OBS üzerinden kontrol et" seçeneğini açmanıza gerek yoktur.

:::tip
Sol kenar çubuğunda **Emoji duvarı**'nın yanındaki anahtarı da açın (**OBS görüntüsünü aç**). Kapalıyken sohbetteki emote'lar overlay'e gönderilmez.
:::

## Adım 2: Kaynakları Seçin

**Kaynak** altında **Twitch** ve **YouTube** için birer kart bulunur. Her kart bağlantı durumunu gösterir:

- Twitch hesabınız bağlı değilse Twitch **(Bağlı değil)** gösterir
- YouTube sohbeti bağlı değilse YouTube **Sohbet adresi bağlı değil** gösterir

O platformun sohbetindeki emote'ları göstermek için karttaki **Emote duvarını etkinleştir** seçeneğini işaretleyin. O platformu yok saymak için işareti kaldırın.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Adım 3: Animasyon Ayarları

| Ayar | Açıklama |
|---------|-------------|
| **Emote boyutu** | Her emote'un boyutu, 16–256 px |
| **Mesaj başına maksimum emote sayısı** | Bir sohbet mesajından en fazla bu kadar emote alınır (1–20) |
| **Süzülme süresi** | Her emote'un ne kadar süre süzüleceği, 1–30 saniye |
| **Süzülme hızı** | 50–500 px/s |

Dört değerin tümünü geri yüklemek için bölüm başlığının yanındaki **Varsayılana dön** düğmesine tıklayın.

## Adım 4: Test

Mevcut ayarlarınızla overlay'e örnek Twitch emote'ları göndermek için **Test (OBS'de göster)** düğmesine tıklayın. Test emote'larının sayısı **Mesaj başına maksimum emote sayısı** değerine göre belirlenir.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Deneme Sürümü Sınırlamaları
Emote'lar ekrandayken OBS overlay'inde bir filigran görünür. Ayrıntılar için bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
