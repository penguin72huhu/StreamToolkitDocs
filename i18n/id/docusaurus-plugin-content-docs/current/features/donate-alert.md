---
sidebar_position: 8
---

# Notifikasi Donasi

Menampilkan notifikasi berisi gambar, suara, nama donatur, jumlah, dan pesan saat seseorang berdonasi.

## URL Sumber OBS

```
http://127.0.0.1:7272/donate-alert
```

Salin URL dari bagian atas halaman **Pengaturan Notifikasi Donasi** dan tambahkan ke OBS sebagai Browser Source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source).

:::warning
Notifikasi memutar suara. Centang **Kontrol Audio via OBS** di properti browser source, jika tidak suara tidak akan terdengar di siaran.
:::

Gunakan sakelar di samping **Notifikasi Donasi** pada sidebar kiri untuk menyalakan atau mematikan notifikasi. Selama sakelar mati, tidak ada notifikasi yang ditampilkan (termasuk notifikasi uji), tetapi donasi tetap dicatat di [Papan Donasi](./sponsors).

Jika beberapa donasi masuk dalam waktu berdekatan, notifikasi akan diantrekan dan ditampilkan satu per satu.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Tab Pengaturan

### Platform integrasi

Centang platform yang akan memicu notifikasi: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Titik hijau berarti platform terhubung; jika tidak, baris tersebut menampilkan **(Belum terhubung)**. Kotak centang ini hanya memengaruhi notifikasi, tidak memengaruhi Bilah Target Donasi atau Papan Donasi.

**Twitch ⚙️** (ditampilkan saat Twitch terhubung dan dicentang):

1. Pilih **Hitung Bits dan langganan**, **Hitung Bits saja**, atau **Hitung langganan saja**
2. **Hitung langganan ulang**: apakah langganan ulang memicu notifikasi (ditampilkan saat langganan dihitung)
3. **Kurang dari [N] Bits tidak dihitung**: centang dan masukkan jumlah minimum agar cheer yang lebih kecil tidak memicu notifikasi (ditampilkan saat Bits dihitung)
4. Klik **Simpan**

**YouTube ⚙️**:

- **Tampilkan nama penonton alih-alih @handle**: hanya tersedia setelah Anda masuk dengan Google.
- **Event yang dihitung**: **Super Chat**, **Super Sticker**, **Member baru**, **Perpanjangan keanggotaan**, **Keanggotaan hadiah**, **Jewels**. **Jewels** memerlukan masuk dengan Google.

Jika live chat YouTube belum ditautkan, baris tersebut menampilkan **URL chat belum terhubung** beserta **Hubungkan otomatis** (memerlukan masuk dengan Google) dan **Isi manual** (membawa Anda ke kolom URL chat di Pengaturan). Jika ada event keanggotaan yang dicentang tetapi harga keanggotaan belum diatur, klik **⚠ Harga keanggotaan belum diatur** untuk mengaturnya. Lihat [Pengaturan YouTube](../platforms/youtube-settings).

Untuk menghubungkan PayPal, Stripe, O'Pay, atau ECPay, lihat [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay), dan [ECPay](../payments/ecpay).

### Pengaturan

| Kolom | Keterangan |
|-------|-------------|
| **Konversi otomatis ke mata uang sendiri** | Aktif secara default. Menampilkan jumlah yang telah dikonversi ke **Mata uang donasi** yang diatur di halaman Pengaturan. |
| **Durasi tampil** | Lama setiap notifikasi tampil di layar, dalam detik. Default: 6. |

## Tab Tampilan

### Pratinjau

Pratinjau menggunakan halaman yang sama dengan sumber OBS. Gunakan pemilih warna di samping **Pratinjau** untuk mengubah latar pratinjau, dan klik **▶ Putar ulang animasi** untuk memutar lagi animasi notifikasi.

### Gaya seragam / Terpisah per platform

- **Gaya seragam**: semua platform menggunakan gaya notifikasi yang sama.
- **Terpisah per platform**: setiap platform memiliki gayanya sendiri. Pilih platform dengan tombol di bawahnya (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) dan edit pengaturannya. Saat pertama kali beralih, platform yang belum Anda kustomisasi akan menyalin gaya seragam saat ini, masing-masing dengan warna bar hitung mundurnya sendiri.

**Kembalikan default** memulihkan gaya default untuk gaya yang sedang Anda edit.

### Gambar

- **Pilih gambar**: pilih gambar dari pengelola aset. Tanpa gambar, emoji hati yang ditampilkan. **Bersihkan** menghapus gambar.
- **Ukuran gambar**: 1–400 px.
- **Posisi gambar**: **Kiri**, **Kanan**, **Atas**, atau **Bawah**.

### Efek suara

Pilih suara bawaan: **Tanpa**, **Lonceng** (default), **Koin**, **Bel**, **Pop**, **Fanfare**. Klik **▶** untuk mendengarkan. Klik **Pilih efek suara** untuk menggunakan file suara Anda sendiri dari pengelola aset.

### Tampilan teks

- **Default**: jumlah, nama donatur, dan pesan ditampilkan di baris terpisah.
- **Teks kustom**: tulis kalimat Anda sendiri. Gunakan `{name}` untuk nama donatur dan `{amount}` untuk jumlah, misalnya `Terima kasih {name} atas donasi {amount}!`

### Teks dan Warna

- **Teks**: atur font, ukuran, dan warna untuk **Jumlah**, **Nama donatur**, dan **Pesan** (ditambah **Teks kustom** dalam mode Teks kustom).
- **Warna**: **Latar**, **Bayangan**, dan **Bar hitung mundur**.

### CSS Kustom

Buka **CSS Kustom** untuk mengedit CSS dari gaya yang sedang Anda edit (seragam atau platform yang dipilih). **Kembalikan default** memulihkan CSS template, dan **Kelola aset** membuka pengelola aset. Tema Steam Workshop juga dapat diterapkan di sini. Selama tema diterapkan, CSS hanya dapat dibaca. Lihat [Gaya tema](./themes).

## Menguji Notifikasi

Di halaman **Pengaturan**, klik **Uji notifikasi** di samping **Integrasi platform donasi**:

1. Isi **Nama uji**, **Pesan uji**, dan **Jumlah uji**, lalu pilih **Platform uji**
2. Klik **Kirim notifikasi uji**

Bagian **Uji Super Chat YouTube** memungkinkan Anda memasukkan **String jumlah** mentah (misalnya `$5.00`, `¥500`, `NT$150`) dan mengklik **Kirim uji Super Chat** untuk menguji penguraian jumlah dan konversi mata uang.

:::note
Notifikasi uji diperlakukan seperti donasi sungguhan: notifikasi ini juga ditambahkan ke [Bilah Target Donasi](./donate) dan [Papan Donasi](./sponsors) jika platform tersebut dicentang di sana.
:::

:::info Versi Uji Coba
CSS Kustom hanya tersedia di versi penuh. Gateway pembayaran sungguhan (PayPal / Stripe / O'Pay / ECPay) serta event keanggotaan YouTube dan Jewels tidak dapat digunakan di versi uji coba, dan notifikasi menampilkan watermark di OBS. Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::

## Pertanyaan Umum

**Q: Tidak ada suara di siaran?**
Pastikan **Kontrol Audio via OBS** sudah dicentang di properti browser source dan sumber tersebut tidak dibisukan di mixer OBS. Periksa juga bahwa **Efek suara** tidak diatur ke **Tanpa**.

**Q: Saya menambahkan sumber OBS terlambat. Apakah notifikasi sebelumnya akan diputar ulang?**
Tidak. Sumber yang baru dibuka hanya menampilkan notifikasi yang masuk setelah terhubung.
