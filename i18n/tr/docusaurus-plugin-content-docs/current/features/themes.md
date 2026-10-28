---
sidebar_position: 20
---

# Tema stilleri

Overlay görünümlerini Steam Workshop üzerinden paylaşın ve indirin. Bir tema şu özelliklerin görünümünü içerebilir:

- [Sohbet](./chat)
- [Bağış çubuğu](./donate)
- [Bağış bildirimleri](./donate-alert)
- [Yeni takipçi bildirimleri](./fan-alert)
- [İzleyici doğum günleri](./birthday-alert)
- [Bağış panosu](./sponsors)
- [Canlı anketler](./vote)
- [Saat](./clock)
- [Twitch hedef çubuğu](./goal): **Takip hedefi**, **Abonelik hedefi**, **Bits hedefi**

Sol menünün altındaki **🎨 Tema stilleri**'nden açın. Sayfada iki sekme vardır: **Temalarım** ve **İndirilen temalar**. Steam'in çalışıyor olması gerekir.

## Özellik Sayfasında Tema Bulma ve Uygulama

Yukarıda listelenen her özellikte **Özel CSS** bölümünü açın ve **Workshop temalarına göz at**'a tıklayın:

1. **Temaları keşfet**, bu özellik için Workshop temalarını listeler. **Tema adı ara** alanına yazıp **Ara**'ya tıklayın veya sayfalar arasında gezinmek için **Önceki sayfa** / **Sonraki sayfa**'yı kullanın
2. Önizleme görselini görmek için bir küçük resme tıklayın
3. **Uygula**'ya tıklayın. Temaya abone olunur, tema indirilir ve bu özelliğe uygulanır
4. **Abone olunanlar**, bu özellik için zaten abone olduğunuz temaları listeler

Bir tema uygulanmışken sayfada **Kullanılan tema: (ad)** ve bir **Geri yükle** düğmesi gösterilir; özel CSS salt okunurdur. Kendi ayarlarınıza dönmek için **Geri yükle**'ye tıklayın.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## İndirilen temalar

Steam'de abone olduğunuz her temayı listeler. Abone olunan temalar otomatik olarak uygulanmaz — karttaki düğmeleri kullanın. OBS hemen güncellenir.

Her kart önizlemeyi, adı, herhangi bir özellik kullanıyorsa **Kullanımda** ifadesini ve **İçerir:** altında temanın kapsadığı özellikleri gösterir (✓ şu anda onu kullanan özellikleri işaretler).

| Düğme | Ne yapar |
|------|------|
| **Tümünü uygula** | Temayı içerdiği her özelliğe uygular. Bir özellik başka bir tema kullanıyorsa değiştirmeyi onaylamanız istenir |
| **Seç…** | Hangi özelliklere uygulanacağını seçin |
| **Tümünü geri yükle** | Bu temayı kullanan her özelliği, tema uygulanmadan önceki kendi ayarlarınıza döndürür |
| **Geri yükle…** | Hangi özelliklerin geri yükleneceğini seçin |
| **Aboneliği iptal et** | Aboneliği iptal eder. Tema kullanımdaysa önce o özellikler geri yüklenir |

Uyguladıktan sonra altta 30 saniye boyunca neyin değiştiğini gösteren bir mesaj ve geri almak için bir **Geri yükle** düğmesi görünür.

:::note
- Geri yükleme, değiştirilen bir temaya değil kendi ayarlarınıza döner
- Bir tema uygulanmışken yapılan görünüm değişiklikleri geri yüklemeden sonra korunmaz
:::

- **İndiriliyor…**: Steam'i açık tutun; indirme bitince uygulayabilirsiniz
- **Kaldırılan tema (#id)**: tema artık Steam aboneliklerinizde değil ancak bazı özellikler onu hâlâ kullanıyor. Görseller görünmeyebilir, bu yüzden geri yüklemeniz önerilir
- Steam çalışmıyorsa Steam'i başlatıp **Yenile**'ye tıklayın

{/* TODO: 截圖 — 下載的主題 */}

## Temalarım: Tema Yükleme

1. Paylaşmak istediğiniz özelliklerin görünümünü kendi sayfalarında ayarlayın
2. **Temalarım**'da **Yeni tema yükle**'ye tıklayın
3. Şunları doldurun:
   - **Tema adı** (zorunlu)
   - **Tema açıklaması**
   - **İçerdiği özellikler** (en az bir tane)
   - **Önizleme görseli** (zorunlu, en fazla 1MB): **Önizleme görseli seç**'e tıklayın
4. Temadaki tüm görselleri, yazı tiplerini ve sesleri dağıtma hakkına sahip olduğunuzu onaylayan kutuyu işaretleyin. Yalnızca kişisel veya ticari olmayan kullanım için lisanslanmış içerikler yüklenemez
5. **Temayı yükle**'ye tıklayın

"Temanızın herkese açık olması için önce tarayıcıda Steam Workshop koşullarını kabul edin" mesajını görürseniz, temanın herkese açık olabilmesi için koşulları kabul edin.

### Yüklediğiniz Temaları Yönetme

Yüklenen her temada şunlar bulunur:

- **İndir ve uygula**: yayınlanan temayı özelliklerinize uygular. Bu, mevcut görünüm ayarlarınızın üzerine yazar
- **Düzenle**: mevcut görünüm ayarlarınızı aynı temaya yeniden yükler. Temayı indirmediyseniz mevcut önizleme görseli aktarılmaz ve yenisini seçmeniz gerekir
- **Steam'de yönet**: temayı Steam'de açar

:::info Deneme Sürümü Sınırlamaları
Tema stilleri (Steam Workshop) yalnızca tam sürümde kullanılabilir. Deneme sürümünde **🎨 Tema stilleri** açılamaz ve temalar uygulanamaz.

Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
