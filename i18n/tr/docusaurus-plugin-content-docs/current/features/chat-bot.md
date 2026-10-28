---
sidebar_position: 18
---

# Sohbet Botu

Sohbetinize otomatik olarak mesaj gönderir: belirli aralıklarla zamanlı mesajlar ve bir izleyici komut yazdığında anahtar kelime yanıtları. Bot, mesajları kendi hesabınızdan gönderir.

Sohbet botunun OBS overlay'i yoktur, bu yüzden eklenecek bir URL yoktur.

:::tip
Sol menüde **Sohbet Botu**'nun yanındaki anahtarı açın. Kapalıyken bot hiçbir şey göndermez.
:::

Sayfada üç sekme vardır: **Ayarlar**, **Zamanlı Mesajlar** ve **Anahtar Kelime Yanıtları**.

## Ayarlar Sekmesi

**Platformlar** altında, açmak için **Twitch**'e tıklayın (kapatmak için tekrar tıklayın). Twitch bağlıyken yanındaki nokta yanar; aksi hâlde **(Bağlı değil)** gösterir. Önce Twitch'i bağlayın: [Twitch Ayarlar](../platforms/twitch).

**YouTube** **Yakında** olarak gösterilir ve henüz açılamaz.

Hiçbir platform bağlı değilse diğer iki sekmede "Bağlı platform yok, bu yüzden bot hiçbir şey göndermeyecek." mesajı ve bir **Ayarlara git** düğmesi görünür.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Zamanlı Mesajlar

Yayındayken belirli aralıklarla bir mesaj gönderir.

1. **+ Ekle**'ye tıklayın
2. Şunları doldurun:
   - **Mesaj**: gönderilecek metin (Twitch'te en fazla 500 karakter). Her zaman tek satırdır: Enter hiçbir şey yapmaz ve yapıştırılan satır sonları boşluğa dönüşür
   - **Aralık**: gönderimler arasındaki dakika (5–240, varsayılan 15)
   - **En az satır**: tekrar göndermeden önce son gönderimden beri gereken yeni sohbet satırı sayısı (0–100, varsayılan 2); böylece boş bir sohbete sürekli mesaj göndermez
   - **Platformlar**: nereye gönderileceği
3. **Kaydet**'e tıklayın

Nasıl gönderir:

- Yalnızca yayınınız canlıyken. İlk gönderim, yayın başladığı anda değil, yayına geçtikten bir tam aralık sonra yapılır
- Birden fazla zamanlı mesajın zamanı aynı anda gelirse, hepsi birlikte gönderilmek yerine zamana yayılır

## Anahtar Kelime Yanıtları

Bir izleyicinin mesajı bir komutla başladığında yanıt verir.

1. **+ Ekle**'ye tıklayın
2. Şunları doldurun:
   - **Komut**: ön eki seçin (`! @ # $ % & ~`), ardından boşluksuz tek bir kelime yazın, ör. `!dc`. Büyük/küçük harf fark etmeksizin bir sohbet mesajının ilk kelimesiyle eşleştirilir
   - **Yanıt**: gönderilecek metin. `{user}`, komutu kullanan izleyicinin adıyla değiştirilir
   - **Bekleme**: aynı komutun tekrar yanıt verebilmesi için geçmesi gereken saniye (0–3600, varsayılan 5)
   - **Platformlar**: nerede yanıt verileceği
3. **Kaydet**'e tıklayın

Anahtar kelime yanıtları, yayında olsanız da olmasanız da her zaman çalışır.

Bir komut, başka bir anahtar kelime yanıtıyla veya [Şarkı istekleri](./song-request) ya da [Çekilişler](./lottery) anahtar kelimesi tarafından zaten kullanılan bir komutla aynı olamaz.

## Listeyi Yönetme

Her iki sekmede de her öğede şunlar bulunur:

- Öğeyi silmeden açıp kapatmak için solda bir onay kutusu
- Platform etiketleri; soluk bir etiket, o platformun Ayarlar sekmesinde kapalı olduğu anlamına gelir
- **Düzenle** ve **Sil**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Deneme Sürümü Sınırlamaları
- 1 zamanlı mesaj ve 1 anahtar kelime yanıtı
- Her mesajın sonuna ` (by StreamToolkit)` eklenir, bu yüzden maksimum mesaj uzunluğu daha kısadır

Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
