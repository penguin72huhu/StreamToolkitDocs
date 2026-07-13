---
sidebar_position: 1
---

# Pengaturan YouTube API

Tutorial ini menjelaskan cara mendapatkan **API Key** dan **ID Saluran** untuk YouTube Data API, yang digunakan untuk fitur `Penanda Sorotan Stream`.

## YouTube Data API

### Langkah 1: Buka Google Cloud Console

1. Buka [Google Cloud Console](https://console.cloud.google.com)
2. Masuk dengan akun Google Anda

### Langkah 2: Aktifkan YouTube Data API v3

1. Cari `YouTube Data API v3` di bilah pencarian atas

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. Klik hasil pencarian
3. Klik **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### Langkah 3: Buat Kunci API

1. Klik **Credentials** di sebelah kiri

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. Pilih **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### Langkah 4: Konfigurasi Kunci API

1. **Name** bebas diisi (misalnya: `StreamToolkit`)
2. Di **Select API restrictions**, centang `YouTube Data API v3` lalu klik **OK**

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. **Authenticate API calls through a service account** jangan dicentang
4. Pilih **None** untuk **Application restrictions**

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. Klik **Create**

### Langkah 5: Masukkan ke App

1. Tempel API Key yang diperoleh ke dalam kolom **YouTube API** di App

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## ID Saluran

### Langkah 1: Buka Pengaturan YouTube

1. Buka [YouTube](https://www.youtube.com)
2. Klik foto profil Anda di pojok kanan atas
3. Pilih **Pengaturan**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### Langkah 2: Dapatkan ID Saluran

1. Pilih **Setelan lanjutan** di menu sebelah kiri

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. Salin **ID Saluran** lalu tempel kembali ke App

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## Pertanyaan Umum

**Q: Apakah ada batasan penggunaan untuk Kunci API?**
Ya. YouTube Data API v3 memiliki kuota harian gratis sebesar 10.000 unit. Penggunaan streaming biasa tidak akan melebihi batas tersebut.

**Q: Muncul galat "API Key tidak valid"?**
Pastikan YouTube Data API v3 telah diaktifkan, dan Anda menggunakan kunci dari proyek yang benar.

**Q: Apakah kunci boleh dipublikasikan?**
Tidak disarankan. Jika kunci Anda bocor dan disalahgunakan, kuota harian Anda akan habis dengan cepat.
