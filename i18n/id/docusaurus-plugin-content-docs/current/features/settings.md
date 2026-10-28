---
sidebar_position: 19
---

# Pengaturan

Klik **⚙️ Pengaturan** di bagian bawah menu kiri. Halaman ini berisi opsi untuk seluruh aplikasi, koneksi platform, dan gateway pembayaran donasi.

## Umum

| Opsi | Fungsi | Default |
|------|------|------|
| **Tema** | Mode tampilan antarmuka: **Abu gelap** atau **Terang** | Abu gelap |
| **Bahasa** | Bahasa antarmuka; langsung berganti | — |
| **Kecilkan ke taskbar saat tekan X** | Menutup jendela akan memperkecilnya ke tray, bukan keluar dari aplikasi | Aktif |
| **Mata uang donasi** | Satuan mata uang global, digunakan oleh bilah donasi, notifikasi, dan semua tampilan jumlah lainnya | Diatur saat pertama kali dijalankan berdasarkan bahasa sistem Anda (misalnya Tionghoa Tradisional (Taiwan) → TWD, Jepang → JPY, lainnya → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Koneksi platform

### Twitch

Klik **Hubungkan akun** dan berikan otorisasi di browser. Setelah terhubung, akan ditampilkan **Terhubung @nama-anda** dan tombol **Putuskan**. Langkah lengkap: [Pengaturan Twitch](../platforms/twitch).

Setelah terhubung, **▸ Pengaturan konversi** mengatur nilai Bits dan langganan dalam mata uang donasi Anda:

- **Mekanisme bagi hasil**: **50 / 50** atau **70 / 30**
- **Per 100 Bits**, **Langganan Tier 1**, **Langganan Tier 2**, **Langganan Tier 3**
- **Simpan** menyimpan nilai untuk mata uang saat ini; **Kembalikan default** mengisi nilai bawaan untuk mata uang tersebut

### YouTube

1. Klik **Hubungkan akun** dan masuk dengan Google. Langkah demi langkah: [Pengaturan YouTube](../platforms/youtube-settings)
2. Setelah terhubung, akan ditampilkan **Terhubung: nama channel**. **Putuskan** melepas tautan akun
3. Pilih cara menemukan live chat:
   - **Deteksi siaran saat ini**: memerlukan masuk dengan Google. Klik **Hubungkan** untuk mencari siaran saat ini atau yang akan datang di channel Anda. Jika ada beberapa, pilih salah satu dari daftar
   - **Masukkan URL secara manual**: tempel **URL chat**
4. **Minta masukkan URL chat setiap kali program dibuka**: opsional

**▸ Pengaturan konversi** di bawah YouTube mengatur nilai keanggotaan (YouTube tidak mengirimkan jumlah untuk keanggotaan):

- **Pengaturan level keanggotaan**: tambahkan nama setiap tingkat beserta nilainya. Nama tingkat harus sama persis dengan channel YouTube Anda
- **Tingkat tidak terdaftar**: nilai yang digunakan untuk tingkat yang tidak ada di tabel
- **Tingkat keanggotaan hadiah**: tingkat yang digunakan untuk menghitung keanggotaan hadiah
- Tingkat yang terlihat di event tetapi tidak ada di tabel akan ditampilkan dengan **Tambah ke tabel** / **Abaikan**

## Integrasi platform donasi

Klik sebuah gateway untuk membukanya. Masing-masing memiliki tautan **Klik untuk tutorial** ke panduan pengaturannya:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Uji notifikasi

Tombol **Uji notifikasi** di samping judul membuka jendela uji:

- Isi **Nama uji**, **Pesan uji**, **Jumlah uji**, pilih **Platform uji**, lalu klik **Kirim notifikasi uji**
- **Uji Super Chat YouTube**: masukkan **String jumlah** seperti `$5.00` atau `NT$150` lalu klik **Kirim uji Super Chat** untuk menguji penguraian jumlah dan konversi mata uang

## Tentang

Klik tombol **i** di samping "Stream Toolkit" di bagian atas menu kiri untuk melihat versi, pembuat, dan tautan ke dokumentasi resmi.

:::info Batasan Versi Uji Coba
- **Integrasi platform donasi** hanya tersedia di versi penuh
- **Pengaturan konversi** keanggotaan YouTube hanya tersedia di versi penuh

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::
