---
sidebar_position: 2
---

# OBS Sahne Kontrolü

**OBS Sahne Kontrolü**, genel kısayollarla veya [Hızlı araçlar](./quick-tools)'dan yayın yazılımınızda sahne değiştirmenizi ve kaynakları gösterip gizlemenizi sağlar. **OBS Studio**, **Streamlabs** ve **Meld Studio** ile çalışır.

Bu özelliğin overlay'i yoktur, bu yüzden OBS'e tarayıcı kaynağı olarak eklenecek bir şey yoktur.

:::info
Kısayollar yalnızca kenar çubuğundaki **OBS Sahne Kontrolü** anahtarı açıkken çalışır. Stream Toolkit penceresi sistem tepsisine küçültülmüşken de çalışırlar.
:::

Ayarlar sayfasında iki sekme vardır: **Bağlantı** ve **Kısayollar**.

## Bağlantı Sekmesi

### Adım 1: Yazılımınızı Seçin

**Yayın yazılımı** altında **OBS Studio**, **Streamlabs** veya **Meld Studio**'yu seçin. Bu yalnızca bağlantı kesikken değiştirilebilir.

Her yazılım kendi kısayollarını ve sahne listesini saklar; bu yüzden yazılım değiştirmek o yazılımın kendi ayarlarını gösterir.

### Adım 2: Yazılımı Hazırlayın

#### OBS Studio

1. OBS'te **Araçlar → WebSocket Sunucu Ayarları**'nı açın
2. **WebSocket sunucusunu etkinleştir**'i işaretleyin
3. Parolayı görmek için **Bağlantı Bilgilerini Göster**'e tıklayın
4. Stream Toolkit'ta **Sunucu** (varsayılan `localhost`), **Bağlantı noktası** (varsayılan `4455`) ve **Parola** alanlarını doldurun

#### Streamlabs / Meld Studio

Kurulum gerekmez — programın açık olması yeterlidir.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Adım 3: Bağlanın

**Bağlan**'a tıklayın. **Durum** **Bağlandı** olarak değişir (OBS ve Meld için sürüm numarası da gösterilir). Bağlantıyı kesmek için **Bağlantıyı kes**'e tıklayın.

**Başlangıçta bağlan** (varsayılan olarak açık): Stream Toolkit başladığında ve özellik anahtarını açtığınızda otomatik olarak bağlanır. Özellik anahtarını kapatmak bağlantıyı keser.

### Sahneler

**Sahneler** bölümü sahnelerinizi ve her birinin kaç kaynağı olduğunu listeler; mevcut sahne vurgulanır. Yazılımınızda sahneleri değiştirdikten sonra en son listeyi almak için **Yenile**'ye tıklayın.

Bağlantı kesikken en son alınan liste gösterilmeye devam eder.

## Kısayollar Sekmesi

Bir kısayol ayarlamak için **Kısayol ayarlamak için tıklayın**'a tıklayın, ardından tuş kombinasyonuna basın. İptal etmek için `Esc`'e basın. Kombinasyon başka bir özellik tarafından zaten kullanılıyorsa **Kısayol çakışması** gösterilir ve kaydedilmez. Bir kısayolu temizlemek için yanındaki **✕**'e tıklayın.

### Sahne değiştir

1. **Ekle**'ye tıklayın
2. Bir kısayol ayarlayın
3. Geçilecek sahneyi seçin

Silmek için satırın sonundaki **✕**'e tıklayın.

### Kaynakları değiştir

Tek bir kısayol aynı sahnedeki birden çok kaynağı aynı anda kontrol edebilir.

1. **Ekle**'ye tıklayın
2. Bir kısayol ayarlayın
3. Bir **Ad** girin (isteğe bağlı — Hızlı araçlar'da düğme etiketi olarak kullanılır; boşsa sahne adı kullanılır)
4. Kaynakların ait olduğu sahneyi seçin
5. **Kaynak ekle**'ye tıklayın, bir kaynak seçin ve **Göster**, **Gizle** veya **Değiştir**'i seçin (varsayılan **Değiştir**)
6. Daha fazla kaynak için 5. adımı tekrarlayın

Bir girdinin sahnesini değiştirmek kaynak listesini temizler.

:::tip
Yazılımınızda artık bulunmayan bir sahne veya kaynak kırmızıyla işaretlenir. Açılır menüden yeniden seçin.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Hızlı araçlar'dan Kullanma

Özellik açıkken ve en az bir kısayol girdisi varken, [Hızlı araçlar](./quick-tools) her girdi için bir düğme içeren bir **OBS Sahne Kontrolü** kartı gösterir. Bir düğmeye tıklamak, kısayoluna basmakla aynı işi yapar.

## Hata Mesajları

Bir kısayol veya düğme kullanıldığında şu mesajlar açılabilir:

| Mesaj | Anlamı |
|---------|---------|
| **OBS’e bağlı değil** | Bağlı değil — **Bağlantı** sekmesine gidip **Bağlan**'a tıklayın |
| **“…” sahnesi bulunamadı** | Sahne yazılımınızda yeniden adlandırılmış veya silinmiş |
| **Kaynaklar bulunamadı: …** | Bu kaynaklar artık sahnede yok |

## Deneme Sürümü Sınırlamaları

:::info
Deneme sürümü toplamda **1** kısayol girdisine izin verir (Sahne değiştir ve Kaynakları değiştir birlikte). Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::

## Sıkça Sorulan Sorular

**Q: OBS'e ulaşılamadığını söyledi ve OBS'i açtıktan sonra yeniden denemedi.**
İlk bağlantı denemesi başarısız olursa (örneğin OBS henüz çalışmıyorsa) Stream Toolkit yeniden denemeye devam etmez. Yayın yazılımınızı açın, ardından **Bağlan**'a tıklayın. Bir bağlantı başarılı olduktan sonra, bağlantı koparsa otomatik olarak yeniden bağlanır.
