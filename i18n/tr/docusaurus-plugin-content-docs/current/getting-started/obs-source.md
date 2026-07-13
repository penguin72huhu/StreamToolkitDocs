---
sidebar_position: 2
---

# OBS'e Kaynak Ekleme

Stream Toolkit'ın çoğu özelliğinin canlı yayında gösterilebilmesi için OBS'e bir "Tarayıcı Kaynağı" eklenmesi gerekir.

## Adım 1: Özellik URL'sini Kopyalayın

Stream Toolkit'ta, her özellik sayfası şu biçimde karşılık gelen yerel URL'sini görüntüler:

```
http://127.0.0.1:7272/feature-name
```

Eklemek istediğiniz özelliğin URL'sini kopyalayın.

## Adım 2: OBS'e Tarayıcı Kaynağı Ekleme

1. OBS'in **Kaynaklar** bölümünde, alttaki **+** düğmesine tıklayın
2. **Tarayıcı**'yı seçin
3. **Yeni oluştur**'u seçin, kaynak için bir isim girin (örneğin "Bağış çubuğu") ve **Tamam**'a tıklayın
4. Adım 1'de kopyaladığınız URL'yi **URL** alanına yapıştırın
5. İhtiyacınıza göre **Genişlik** ve **Yükseklik** değerlerini ayarlayın
6. **Tamam**'a tıklayın

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Aşağıdaki özellikler için "Sesi OBS üzerinden kontrol et" seçeneğinin işaretlenmesi gerekir

Ses çıkışı içerir; sesin canlı yayında düzgün şekilde çıkması için tarayıcı kaynağı ayarlarında **Sesi OBS üzerinden kontrol et** seçeneğinin işaretlenmesi gerekir:

- **Media Board** — Video, Ses efekti
- **Bağış bildirimleri**
- **Şarkı istekleri**

İşaretleme yöntemi:
1. OBS kaynak listesinde, ilgili tarayıcı kaynağına sağ tıklayın
2. **Özellikler**'i seçin
3. **Sesi OBS üzerinden kontrol et** seçeneğini bulun ve işaretleyin
4. **Tamam**'a tıklayın

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
İşaretledikten sonra hala ses gelmiyorsa, OBS ses karıştırıcısında ilgili kaynağın sessize alınmadığından emin olun.
:::
