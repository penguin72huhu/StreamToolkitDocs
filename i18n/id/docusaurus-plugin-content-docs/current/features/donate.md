---
sidebar_position: 7
---

# Bilah Target Donasi

Menampilkan bilah progres di siaran menuju target donasi. Donasi dari platform yang Anda pilih ditambahkan ke total secara otomatis.

## URL Sumber OBS

```
http://127.0.0.1:7272/donate
```

Salin URL dari bagian atas halaman **Pengaturan Bilah Target Donasi** dan tambahkan ke OBS sebagai Browser Source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source).

Gunakan sakelar di samping **Bilah Target Donasi** pada sidebar kiri untuk menampilkan atau menyembunyikan bilah di OBS. Saat sakelar mati, bilah disembunyikan.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Mata Uang

Bilah menggunakan **Mata uang donasi** yang diatur di halaman **Pengaturan**. Donasi dalam mata uang lain dikonversi ke mata uang ini sebelum ditambahkan. Jika mata uang sebuah donasi tidak dapat dikonversi, donasi tersebut tidak ditambahkan ke bilah (Notifikasi Donasi dan Papan Donasi tetap menampilkannya dalam mata uang aslinya).

## Tab Pengaturan

### Platform integrasi

Centang platform yang donasinya akan dihitung ke bilah:

- **Twitch** — Bits dan langganan
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Titik hijau berarti platform terhubung; jika tidak, baris tersebut menampilkan **(Belum terhubung)**. Kotak centang ini hanya menentukan apa yang dihitung oleh bilah. Kotak centang ini tidak memengaruhi Notifikasi Donasi atau Papan Donasi, yang memiliki daftar platformnya sendiri.

- **YouTube**: jika live chat belum ditautkan, baris tersebut menampilkan **URL chat belum terhubung** dengan dua tombol: **Hubungkan otomatis** (memerlukan masuk dengan Google) dan **Isi manual** (membawa Anda ke kolom URL chat di Pengaturan). Lihat [Pengaturan YouTube](../platforms/youtube-settings).
- **YouTube ⚙️**: pilih **Event yang dihitung** yang ditambahkan ke bilah: **Super Chat**, **Super Sticker**, **Member baru**, **Perpanjangan keanggotaan**, **Keanggotaan hadiah**, **Jewels**. **Jewels** memerlukan masuk dengan Google.
- Jika ada event keanggotaan yang dicentang tetapi harga keanggotaan belum diatur, akan muncul **⚠ Harga keanggotaan belum diatur**. Klik untuk membuka Pengaturan dan masukkan harga tiap tingkat di **Pengaturan konversi** YouTube.
- Nilai Bits dan langganan Twitch diatur di Pengaturan → Twitch → **Pengaturan konversi**. Lihat [Pengaturan Twitch](../platforms/twitch).
- Untuk menghubungkan PayPal, Stripe, O'Pay, atau ECPay, lihat [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay), dan [ECPay](../payments/ecpay).

### Progres Saat Ini

Menampilkan total saat ini, target, dan persentasenya.

| Kolom | Keterangan |
|-------|-------------|
| **Judul** | Opsional. Ditampilkan di atas bilah. |
| **Jumlah target** | Jumlah target, dalam mata uang donasi Anda. |
| **Tambah manual** | Masukkan jumlah dan klik **Tambah** (atau tekan Enter) untuk menambahkannya ke total. |
| **Nolkan** | Mengembalikan total saat ini ke nol. Konfirmasi akan muncul terlebih dahulu. Tindakan ini tidak dapat dibatalkan. |

## Tab Tampilan

### Pratinjau

Pratinjau menampilkan bilah dengan contoh jumlah. Gunakan pemilih warna di samping **Pratinjau** untuk mengubah latar pratinjau. Centang **Pratinjau tercapai** untuk melihat bilah dalam keadaan selesai.

### Font dan Warna

Klik **Kembalikan default** untuk memulihkan tampilan default.

- **Font**: atur font, warna, dan ukuran (8–72 px) untuk **Judul**, **Jumlah**, dan **Persentase**.
- **Warna**: atur **Latar**, **Bar target** (warna isian), dan **Bar target tercapai** (warna isian setelah target tercapai).

### CSS Kustom

Buka **CSS Kustom** untuk mengedit CSS bilah. **Kembalikan default** memulihkan CSS default, dan **Kelola aset** membuka pengelola aset untuk gambar yang ingin Anda gunakan di CSS. Tema Steam Workshop juga dapat diterapkan di sini. Selama tema diterapkan, CSS hanya dapat dibaca sampai Anda memulihkannya. Lihat [Gaya tema](./themes).

:::info Versi Uji Coba
CSS Kustom hanya tersedia di versi penuh. Gateway pembayaran sungguhan (PayPal / Stripe / O'Pay / ECPay) serta event keanggotaan YouTube dan Jewels tidak dapat digunakan di versi uji coba, dan overlay menampilkan watermark. Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::

## Pertanyaan Umum

**Q: Total bertambah setelah saya mengirim notifikasi uji.**
**Uji notifikasi** di halaman Pengaturan dihitung sebagai donasi sungguhan, sehingga ditambahkan ke bilah (jika platform tersebut dicentang). Setelah pengujian, klik **Nolkan** untuk mengembalikan total ke nol.
