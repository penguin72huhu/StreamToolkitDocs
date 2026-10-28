---
sidebar_position: 19
---

# Ayarlar

Sol menünün altındaki **⚙️ Ayarlar**'a tıklayın. Bu sayfa uygulama genelindeki seçenekleri, platform bağlantılarını ve bağış ödeme altyapılarını içerir.

## Genel

| Seçenek | Ne yapar | Varsayılan |
|------|------|------|
| **Tema** | Arayüz görüntü modu: **Loş** veya **Aydınlık** | Loş |
| **Dil** | Arayüz dili; hemen değişir | — |
| **X'e basınca görev çubuğuna küçült** | Pencereyi kapatmak, uygulamadan çıkmak yerine onu tepsiye küçültür | Açık |
| **Bağış para birimi** | Bağış çubuğu, bildirimler ve diğer tüm tutar görünümleri tarafından kullanılan genel para birimi | İlk açılışta sistem dilinize göre ayarlanır (ör. Geleneksel Çince (Tayvan) → TWD, Japonca → JPY, diğer → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Platform bağlantısı

### Twitch

**Hesabı bağla**'ya tıklayın ve tarayıcıda yetkilendirin. Bağlandıktan sonra **Bağlandı @kullanıcı-adınız** ve bir **Bağlantıyı kes** düğmesi gösterilir. Tüm adımlar: [Twitch Ayarlar](../platforms/twitch).

Bağlandıktan sonra **▸ Dönüşüm ayarları**, Bits ve aboneliklerin bağış para biriminizde ne kadar değerli olduğunu belirler:

- **Gelir paylaşımı**: **50 / 50** veya **70 / 30**
- **Her 100 Bits**, **Tier 1 abonelik**, **Tier 2 abonelik**, **Tier 3 abonelik**
- **Kaydet** değerleri mevcut para birimi için saklar; **Varsayılana dön** o para birimi için yerleşik değerleri doldurur

### YouTube

1. **Hesabı bağla**'ya tıklayın ve Google ile giriş yapın. Adım adım: [YouTube Ayarlar](../platforms/youtube-settings)
2. Bağlandıktan sonra **Bağlandı: kanal adı** gösterilir. **Bağlantıyı kes** hesabın bağlantısını kaldırır
3. Canlı sohbetin nasıl bulunacağını seçin:
   - **Mevcut yayını otomatik bul**: Google ile giriş gerekir. Kanalınızda mevcut veya yaklaşan yayını aramak için **Bağlan**'a tıklayın. Birden fazla varsa listeden birini seçin
   - **URL'yi elle gir**: **Sohbet adresi**'ni yapıştırın
4. **Program her açıldığında sohbet adresi girmemi iste**: isteğe bağlı

YouTube altındaki **▸ Dönüşüm ayarları**, üyeliklerin ne kadar değerli olduğunu belirler (YouTube üyelikler için tutar göndermez):

- **Üyelik seviyesi ayarları**: her seviye adını ve değerini ekleyin. Seviye adları YouTube kanalınızdakilerle birebir aynı olmalıdır
- **Listede olmayan seviyeler**: tabloda olmayan bir seviye için kullanılan değer
- **Hediye üyelik seviyesi**: hediye üyeliklerin hangi seviye olarak sayılacağı
- Olaylarda görülen ancak tabloda bulunmayan seviyeler **Tabloya ekle** / **Yoksay** ile listelenir

## Bağış platformu entegrasyonu

Genişletmek için bir ödeme altyapısına tıklayın. Her birinde kurulum kılavuzuna giden bir **Eğitim için tıklayın** bağlantısı vardır:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Test bildirimi

Başlığın yanındaki **Test bildirimi** düğmesi bir test penceresi açar:

- **Test adı**, **Test mesajı**, **Test tutarı** alanlarını doldurun, **Test platformu**'nu seçin, ardından **Test bildirimi gönder**'e tıklayın
- **YouTube Super Chat testi**: `$5.00` veya `NT$150` gibi bir **Tutar dizesi** girin ve tutar ayrıştırmayı ve para birimi dönüşümünü test etmek için **Test Super Chat gönder**'e tıklayın

## Hakkında

Sürümü, yazarı ve resmi belgelere giden bir bağlantıyı görmek için sol menünün üst kısmındaki "Stream Toolkit"in yanındaki **i** düğmesine tıklayın.

:::info Deneme Sürümü Sınırlamaları
- **Bağış platformu entegrasyonu** yalnızca tam sürümde kullanılabilir
- YouTube üyeliği **Dönüşüm ayarları** yalnızca tam sürümde kullanılabilir

Bkz. [Deneme / Tam Sürüm Karşılaştırması](../getting-started/trial-comparison).
:::
