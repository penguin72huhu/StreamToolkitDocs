---
sidebar_position: 3
---

# Pengaturan PayPal

Stream Toolkit menggunakan Webhook untuk menerima notifikasi pembayaran PayPal, sehingga tidak perlu memasukkan kunci API.

## Langkah 1: Dapatkan URL Webhook di Stream Toolkit

1. Buka Stream Toolkit
2. Klik **Pengaturan** pada menu kiri bawah
3. Temukan **Integrasi platform donasi** → **PayPal**
4. Klik tombol **Dapatkan URL**
5. Setelah URL dibuat, klik tombol **Salin**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Peringatan
URL Webhook berisi token eksklusif, jangan dibagikan secara publik. Jika menduga adanya kebocoran, Anda dapat mengeklik **Dapatkan URL ulang** untuk menerbitkan URL baru (URL lama akan segera tidak valid).
:::

## Langkah 2: Login ke Dasbor Developer PayPal

1. Buka [PayPal Developer](https://developer.paypal.com)
2. Klik **Log in to Dashboard** di pojok kanan atas, lalu login menggunakan akun PayPal
3. Setelah login, klik tombol **`</>`** di pojok kanan atas để masuk ke dasbor developer

![PayPal developer button at top right](./paypal-img/step2.png)

## Langkah 3: Alihkan ke Mode Live

Pastikan sakelar mode di atas menu sebelah kiri diatur ke **Live**. Anda hanya perlu mengalihkannya jika menampilkan **Sandbox** (mode pengujian):

1. Temukan sakelar pengalih di atas menu sebelah kiri
2. Klik untuk mengalihkan ke **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Langkah 4: Buka Pengaturan Webhooks

1. Klik **Apps & Credentials** pada menu sebelah kiri

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Temukan tombol **Manage Webhooks** di halaman tersebut, lalu klik untuk masuk

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Gulir hingga ke bagian paling bawah halaman, lalu klik **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Langkah 5: Tambah Webhook

1. Tempel URL yang baru saja disalin dari Stream Toolkit ke dalam kolom **Webhook URL**
2. Di **Event types**, temukan kategori **Payments & payouts** lalu centang:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Klik **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Setelah pengaturan selesai, saat penonton melakukan pembayaran melalui PayPal, Stream Toolkit akan menerima notifikasi secara real-time.

## Pertanyaan Umum

**Q: Apakah bisa menguji dalam mode Sandbox?**
Ya. Dalam mode Sandbox, Anda juga dapat menambahkan Webhook untuk menguji alur pembayaran, tetapi tidak akan menerima dana sungguhan.

**Q: Apa yang harus dilakukan setelah URL Webhook dibuat ulang?**
Anda harus kembali ke dasbor PayPal, lalu mengubah URL Webhook lama menjadi yang baru.
