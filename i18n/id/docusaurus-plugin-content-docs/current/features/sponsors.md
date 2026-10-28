---
sidebar_position: 9
---

# Papan Donasi

Menampilkan daftar donasi terbaru di siaran: ikon platform, nama donatur, jumlah, dan pesan.

## URL Sumber OBS

```
http://127.0.0.1:7272/sponsors
```

Salin URL dari bagian atas halaman **Pengaturan Papan Donasi** dan tambahkan ke OBS sebagai Browser Source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source).

Gunakan sakelar di samping **Papan Donasi** pada sidebar kiri untuk menampilkan atau menyembunyikan papan di OBS. Saat sakelar mati, papan memudar. Donasi tetap dicatat selama sakelar mati.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Tab Pengaturan

### Platform integrasi

Centang platform yang donasinya akan dicatat: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Titik hijau berarti platform terhubung; jika tidak, baris tersebut menampilkan **(Belum terhubung)**. Kotak centang ini hanya memengaruhi papan, tidak memengaruhi Bilah Target Donasi atau Notifikasi Donasi.

**Twitch ⚙️** (ditampilkan saat Twitch terhubung dan dicentang):

1. Pilih **Hitung Bits dan langganan**, **Hitung Bits saja**, atau **Hitung langganan saja**
2. **Hitung langganan ulang**: apakah langganan ulang dicatat (ditampilkan saat langganan dihitung)
3. **Kurang dari [N] Bits tidak dihitung**: centang dan masukkan jumlah minimum agar cheer yang lebih kecil tidak dicatat (ditampilkan saat Bits dihitung)
4. Klik **Simpan**

**YouTube ⚙️**:

- **Tampilkan nama penonton alih-alih @handle**: hanya tersedia setelah Anda masuk dengan Google.
- **Event yang dihitung**: **Super Chat**, **Super Sticker**, **Member baru**, **Perpanjangan keanggotaan**, **Keanggotaan hadiah**, **Jewels**. **Jewels** memerlukan masuk dengan Google. Hadiah Jewels ditampilkan sebagai ikon permata dengan jumlah jewels, bukan jumlah uang.

Jika live chat YouTube belum ditautkan, baris tersebut menampilkan **URL chat belum terhubung** beserta **Hubungkan otomatis** (memerlukan masuk dengan Google) dan **Isi manual** (membawa Anda ke kolom URL chat di Pengaturan). Jika ada event keanggotaan yang dicentang tetapi harga keanggotaan belum diatur, klik **⚠ Harga keanggotaan belum diatur** untuk mengaturnya. Lihat [Pengaturan YouTube](../platforms/youtube-settings).

Untuk menghubungkan PayPal, Stripe, O'Pay, atau ECPay, lihat [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay), dan [ECPay](../payments/ecpay).

### Pengaturan

| Kolom | Keterangan |
|-------|-------------|
| **Konversi otomatis ke mata uang sendiri** | Aktif secara default. Menampilkan jumlah yang telah dikonversi ke **Mata uang donasi** yang diatur di halaman Pengaturan. |
| **Maks tampil** | Jumlah catatan yang disimpan (1–100). Default: 20. Saat donasi baru masuk melebihi batas ini, catatan terlama akan dihapus. |

## Tab Tampilan

### Pratinjau

Gunakan pemilih warna di samping **Pratinjau** untuk mengubah latar pratinjau. Klik **Uji animasi tambah** untuk memutar animasi masuk dengan contoh catatan. Contoh tersebut tidak disimpan ke riwayat.

Klik **Kembalikan default** untuk memulihkan tampilan default.

### Pengaturan Tampilan

- **Tampilkan ikon platform**: tampilkan ikon platform pada setiap catatan.
- **Arah muncul**: **Atas ke bawah** (default), **Bawah ke atas**, **Kiri ke kanan**, atau **Kanan ke kiri**.

### Font

Atur font, warna, dan ukuran (8–72 px) untuk **Judul** (nama donatur), **Isi teks** (pesan), dan **Jumlah**.

### Warna Latar

- **Default**: warna latar untuk setiap catatan.
- **+ Tambah rentang**: tambahkan warna dengan rentang **Jumlah** (**Minimum** ~ **Maksimum**). Catatan yang jumlahnya berada dalam rentang tersebut menggunakan warna itu. Biarkan Minimum atau Maksimum kosong agar sisi tersebut tidak dibatasi. Klik **✕** untuk menghapus rentang.

Saat **Konversi otomatis ke mata uang sendiri** aktif, rentang dibandingkan dengan jumlah yang telah dikonversi.

### CSS Kustom

Buka **CSS Kustom** untuk mengedit CSS papan. **Kembalikan default** memulihkan CSS default, dan **Kelola aset** membuka pengelola aset. Tema Steam Workshop juga dapat diterapkan di sini. Selama tema diterapkan, CSS hanya dapat dibaca. Lihat [Gaya tema](./themes).

## Tab Riwayat

### Tambah manual (untuk uji)

Pilih platform, masukkan **Nama**, **Jumlah**, dan **Pesan (opsional)**, lalu klik **Tambah**. Catatan hanya ditambahkan jika platform tersebut dicentang di bawah **Platform integrasi**. Jumlah diperlakukan sebagai mata uang donasi Anda.

### Riwayat

Menampilkan catatan yang tersimpan beserta jumlah catatannya.

- Klik **🗑** lalu **Konfirmasi hapus** untuk menghapus satu catatan.
- Klik **Bersihkan** untuk menghapus semua catatan. Konfirmasi akan muncul terlebih dahulu. Tindakan ini tidak dapat dibatalkan.

:::info Versi Uji Coba
CSS Kustom hanya tersedia di versi penuh. Gateway pembayaran sungguhan (PayPal / Stripe / O'Pay / ECPay) serta event keanggotaan YouTube dan Jewels tidak dapat digunakan di versi uji coba, dan papan menampilkan watermark di OBS. Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::

## Pertanyaan Umum

**Q: Notifikasi uji muncul di papan.**
**Uji notifikasi** di halaman Pengaturan diperlakukan seperti donasi sungguhan, sehingga juga dicatat di sini jika platform tersebut dicentang. Hapus di tab **Riwayat**.
