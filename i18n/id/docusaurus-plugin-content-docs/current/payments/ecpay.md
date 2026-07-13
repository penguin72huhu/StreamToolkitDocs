---
sidebar_position: 2
---

# Pengaturan ECPay

Tutorial ini menjelaskan cara mendapatkan **HashKey** dan **HashIV** dari ECPay dan memasukkannya ke dalam Stream Toolkit.

## Langkah 1: Login ke dasbor merchant ECPay

1. Buka [situs resmi ECPay](https://www.ecpay.com.tw/)
2. Klik di pojok kanan atas **Login Penjual** → **Area Merchant**

## Langkah 2: Masuk ke Pengaturan Integrasi Sistem

1. Klik **Pengaturan Sistem** di menu sebelah kiri
2. Pilih **Pengaturan Integrasi Sistem**

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. Temukan **Hash Key Integrasi** dan **Hash IV Integrasi**

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## Langkah 3: Masukkan ke Stream Toolkit

1. Buka Stream Toolkit
2. Klik **Pengaturan** pada menu kiri bawah
3. Temukan **ECPay** di **Integrasi platform donasi**
4. Tempel **HashKey Integrasi** dan **HashIV Integrasi** dari **Pengaturan Integrasi Sistem** ke kolom **Hash Key** dan **Hash IV** masing-masing
5. Klik **Simpan**

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## Langkah 4: Atur URL Notifikasi

1. Salin **URL notifikasi latar** ECPay

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. Di dasbor merchant ECPay, temukan **Alat Pembayaran** → **Pembayaran Streamer**

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. Tempel **URL notifikasi latar** ke kolom **URL pengembalian notifikasi pembayaran selesai**

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. Klik **Simpan Pengaturan**

## Pertanyaan Umum

**Q: Tidak dapat melihat "Pengaturan Sistem" setelah login?**
Akun Anda mungkin belum menyelesaikan proses verifikasi. Silakan buka "Manajemen Data Merchant" untuk memeriksa statusnya.

**Q: Bisakah HashKey dipublikasikan?**
Tidak. HashKey dan HashIV adalah kunci pribadi; mohon jangan bagikan tangkapan layar atau mempostingnya di tempat umum.
