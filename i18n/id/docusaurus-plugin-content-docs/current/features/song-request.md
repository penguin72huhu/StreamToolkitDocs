---
sidebar_position: 17
---

# Permintaan Lagu

Penonton meminta lagu YouTube dengan perintah chat, dan lagu-lagu tersebut diputar di OBS satu per satu. Anda juga dapat menambahkan lagu sendiri dan mengatur playlist default yang diputar saat tidak ada permintaan.

## URL Sumber OBS

```
http://127.0.0.1:7272/song-request
```

Klik **Salin** di samping **URL sumber OBS** di bagian atas halaman, lalu tambahkan ke OBS sebagai browser source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source).

:::warning
Permintaan lagu memutar suara. Di properti browser source, centang **Kontrol Audio via OBS**, jika tidak musik tidak akan sampai ke siaran Anda.
:::

:::tip
Nyalakan juga sakelar di samping **Permintaan Lagu** pada menu kiri. Perintah chat hanya diproses selama sakelar menyala.
:::

Halaman ini memiliki dua tab: **Pengaturan** dan **Playlist**.

## Tab Pengaturan

### Platform

Setiap platform memiliki kartunya sendiri:

- **Buka request lagu untuk platform ini**: memungkinkan penonton di chat tersebut meminta lagu
- **Aktifkan balasan chatbot** (khusus Twitch, aktif secara default): membalas di chat Twitch dengan hasil setiap perintah, menggunakan akun Twitch Anda yang terhubung. Hanya ditampilkan saat Twitch diaktifkan dan terhubung

Platform yang belum terhubung menampilkan **(Belum terhubung)** (Twitch) atau **URL chat belum terhubung** (YouTube). Hubungkan terlebih dahulu:

- [Pengaturan Twitch](../platforms/twitch)
- [Pengaturan YouTube](../platforms/youtube-settings)

### Perintah chat

| Kolom | Default |
|------|--------|
| **Prefiks perintah** | `!` (pilih dari `! @ # $ % & ~`) |
| **Perintah request lagu** | `sr` |
| **Hapus request lagu** | `remove` |
| **Lihat daftar request lagu** | `queue` |
| **Cek lagu saat ini** | `song` |
| **Waktu jeda request lagu** | 3000 ms |

Jeda dihitung per penonton: setelah permintaan berhasil, penonton yang sama harus menunggu selama waktu ini sebelum meminta lagi.

### Pengaturan

- **Tampilkan video di layar** (aktif secara default): jika nonaktif, video disembunyikan di OBS tetapi audio tetap diputar
- **Batas daftar** (1–100, default 20): jumlah maksimal lagu permintaan di daftar. Lagu dari playlist default tidak dihitung
- **Tampilkan notifikasi request lagu** (aktif secara default): menampilkan kartu notifikasi di OBS saat penonton meminta, menghapus, atau gagal meminta lagu. Jika aktif, Anda dapat mengatur:
  - **X** / **Y**: posisi notifikasi dari pojok kiri atas (px, default 16 / 16)
  - **Skala notifikasi**: pengali ukuran (default 1.0)
  - **Uji tampilan notifikasi**: mengirim notifikasi uji ke OBS

Setiap notifikasi tampil selama 5 detik; maksimal 3 ditampilkan sekaligus.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Cara Penonton Menggunakannya

Dengan pengaturan default:

| Perintah | Fungsi |
|------|------|
| `!sr <YouTube link>` | Meminta video tersebut |
| `!sr <search words>` | Mencari di YouTube dan meminta hasil pertama |
| `!remove` | Menghapus permintaan terbaru penonton tersebut (bukan lagu yang sedang diputar) |
| `!queue` | Membalas dengan 3 lagu permintaan berikutnya |
| `!song` | Membalas dengan lagu yang sedang diputar |

- Tautan yang diterima: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…`, atau ID video 11 karakter
- Tautan playlist tidak diterima
- Permintaan gagal jika daftar sudah mencapai **Batas daftar**
- Permintaan baru diantrekan setelah permintaan penonton lain, di depan lagu dari playlist default
- `!queue` dan `!song` hanya berfungsi di chat Twitch dengan **Aktifkan balasan chatbot** dinyalakan

## Tab Playlist

### Kontrol Pemutaran

Baris teratas menampilkan siapa yang meminta lagu saat ini beserta judulnya. Tombol:

- **Putar** / **Jeda**: jika tidak ada yang diputar, dimulai dari lagu pertama di daftar
- **Hentikan**: menghentikan pemutaran
- **Berikutnya**: melompat ke lagu berikutnya

Saat lagu diputar, bilah progres akan muncul; seret untuk melompat ke posisi tertentu. Saat lagu selesai, lagu berikutnya dimulai secara otomatis.

:::note
Tidak ada yang diputar secara otomatis saat aplikasi dimulai. Tekan **Putar** untuk memulai.
:::

### Playlist default

Tempel URL playlist YouTube dan pilih **Putar berurutan** atau **Putar acak**. Saat daftar habis, sebuah lagu dari playlist ini ditambahkan dan diputar secara otomatis. Lagu-lagu ini ditampilkan sebagai **Daftar default** di daftar.

Playlist default dibaca melalui akun YouTube Anda, jadi Anda harus masuk dengan Google terlebih dahulu di [Pengaturan YouTube](../platforms/youtube-settings).

### Request lagu manual

Tempel URL video YouTube dan klik **Tambah ke daftar** (atau tekan Enter). Request manual tidak mendukung kata pencarian.

### Daftar

**Daftar (n)** menampilkan semua lagu: platform, peminta, judul, dan ID video (klik untuk membuka di YouTube). Klik **Hapus** untuk menghapus lagu; menghapus lagu yang sedang diputar akan melompat ke lagu berikutnya. **Kosongkan** mengosongkan seluruh daftar.

{/* TODO: 截圖 — 播放清單分頁 */}

## Pertanyaan Umum

**Q: Penonton mengetik perintah tetapi tidak terjadi apa-apa?**
Periksa bahwa:
- Sakelar **Permintaan Lagu** di menu kiri menyala
- **Buka request lagu untuk platform ini** dicentang untuk platform tersebut
- Untuk Twitch: chat Twitch dibaca oleh fitur [Chat](./chat). Jika Anda mematikan Twitch di halaman Chat (dan [Bot Obrolan](./chat-bot) tidak menggunakan Twitch), perintah Twitch tidak akan diterima

**Q: Playlist default tidak diputar?**
Pastikan Anda sudah masuk dengan Google di Pengaturan dan URL tersebut adalah tautan playlist (berisi `list=`).

:::info Batasan Versi Uji Coba
- Permintaan lagu dari chat penonton hanya tersedia di versi penuh. Di versi uji coba, permintaan dari chat gagal dengan pesan "Permintaan lagu tidak tersedia di versi uji coba". **Request lagu manual** dan playlist default tetap berfungsi
- Overlay OBS menampilkan watermark

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::
