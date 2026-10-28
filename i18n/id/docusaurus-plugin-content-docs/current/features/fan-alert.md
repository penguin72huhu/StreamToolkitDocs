---
sidebar_position: 8.1
---

# Notifikasi pengikut baru

Menampilkan notifikasi di siaran saat seseorang mengikuti Anda di Twitch atau berlangganan channel YouTube Anda.

## URL Sumber OBS

```
http://127.0.0.1:7272/fan-alert
```

Salin URL dari bagian atas halaman **Pengaturan Notifikasi pengikut baru** dan tambahkan ke OBS sebagai Browser Source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source).

:::warning
Notifikasi memutar suara. Centang **Kontrol Audio via OBS** di properti browser source, jika tidak suara tidak akan terdengar di siaran.
:::

Gunakan sakelar di samping **Notifikasi pengikut baru** pada sidebar kiri untuk menyalakan atau mematikan notifikasi. Selama sakelar mati, pengikut baru tidak ditampilkan maupun dicatat, dan tombol uji juga tidak berfungsi.

Jika beberapa pengikut masuk dalam waktu berdekatan, notifikasi akan diantrekan dan ditampilkan satu per satu. Overlay ini memiliki antreannya sendiri, sehingga tidak pernah menunggu di belakang [Notifikasi Donasi](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Tab Pengaturan

### Platform integrasi

Centang platform yang akan memicu notifikasi: **Twitch** dan **YouTube** (keduanya dicentang secara default). Titik hijau berarti platform terhubung; jika tidak, baris tersebut menampilkan **Belum diotorisasi**.

- **Twitch**: setiap follow baru langsung memicu notifikasi. Hubungkan Twitch terlebih dahulu: [Pengaturan Twitch](../platforms/twitch).
- **YouTube**: subscriber baru. Masuk dengan Google terlebih dahulu: [Pengaturan YouTube](../platforms/youtube-settings).

Cara subscriber YouTube ditemukan:

- YouTube tidak memiliki event "subscriber baru" secara langsung, jadi aplikasi meminta daftar subscriber terbaru Anda ke YouTube setiap 1,5 menit.
- Pemeriksaan hanya dilakukan saat Anda live dan live chat YouTube Anda terhubung ke siaran live tersebut. Pemeriksaan tidak dilakukan di ruang tunggu atau setelah siaran berakhir.
- Orang yang berlangganan sebelum siaran dimulai (lebih dari sekitar 5 menit sebelum pemeriksaan dimulai) tidak diumumkan.
- Seperti yang tertulis di petunjuk pada halaman, **YouTube hanya memberi notifikasi untuk penonton dengan langganan publik, dan bisa tertunda beberapa menit hingga jam.**

### Pengaturan

| Kolom | Keterangan |
|-------|-------------|
| **Durasi tampil** | Lama setiap notifikasi tampil di layar, dalam detik (1–60). Default: 5. |
| **Penonton yang sama maksimal sekali tiap 24 jam** | Nonaktif secara default. Jika aktif, penonton yang sama yang mengikuti lagi dalam 24 jam (misalnya berhenti mengikuti lalu mengikuti lagi) tidak ditampilkan dan tidak dicatat. |

### Menguji Notifikasi

Klik **Uji notifikasi (Twitch)** atau **Uji notifikasi (YouTube)** untuk mengirim contoh notifikasi ke OBS. Notifikasi uji tidak ditambahkan ke riwayat.

Jika Notifikasi pengikut baru dimatikan, uji tidak diputar dan halaman menampilkan **Aktifkan dulu Notifikasi pengikut baru di sakelar cepat**.

## Tab Tampilan

### Pratinjau

Pratinjau menggunakan halaman yang sama dengan sumber OBS. Gunakan pemilih warna di samping **Pratinjau** untuk mengubah latar pratinjau, dan klik **▶ Putar ulang animasi** untuk memutar lagi animasi notifikasi.

### Gaya seragam / Terpisah per platform

- **Gaya seragam**: Twitch dan YouTube menggunakan gaya notifikasi yang sama.
- **Terpisah per platform**: setiap platform memiliki gayanya sendiri. Pilih **Twitch** atau **YouTube** dengan tombol di bawahnya dan edit pengaturannya. Saat pertama kali beralih, platform yang belum Anda kustomisasi akan menyalin gaya seragam saat ini, masing-masing dengan warna bar hitung mundurnya sendiri.

**Kembalikan default** memulihkan gaya default untuk gaya yang sedang Anda edit.

### Gambar

- **Pilih gambar**: pilih gambar dari pengelola aset. Tanpa gambar, emoji hati yang ditampilkan. **Bersihkan** menghapus gambar.
- **Ukuran gambar**: 1–400 px.
- **Posisi gambar**: **Kiri**, **Kanan**, **Atas**, atau **Bawah**.

### Efek suara

Pilih suara bawaan: **Tanpa**, **Lonceng** (default), **Koin**, **Bel**, **Pop**, **Fanfare**. Klik **▶** untuk mendengarkan. Klik **Pilih efek suara** untuk menggunakan file suara Anda sendiri dari pengelola aset.

### Teks kustom

Tulis kalimat yang ditampilkan pada notifikasi. Gunakan `{name}` untuk nama pengikut dan `{platform}` untuk nama platform. Biarkan kosong untuk menggunakan teks default: `Selamat datang {name}, terima kasih sudah mengikuti!`

### Teks dan Warna

- **Teks**: atur font, ukuran, dan warna untuk **Teks kustom** dan **Nama pengikut**.
- **Warna**: **Latar**, **Bayangan**, dan **Bar hitung mundur**.

### CSS Kustom

Buka **CSS Kustom** untuk mengedit CSS dari gaya yang sedang Anda edit (seragam atau platform yang dipilih). **Kembalikan default** memulihkan CSS template, dan **Kelola aset** membuka pengelola aset. Tema Steam Workshop juga dapat diterapkan di sini. Selama tema diterapkan, CSS hanya dapat dibaca. Lihat [Gaya tema](./themes).

## Tab Riwayat

Menampilkan daftar pengikut baru terbaru dari kedua platform, yang terbaru di atas: platform, nama, dan waktu. Riwayat hanya ditampilkan di aplikasi, tidak pernah di overlay.

- Maksimal 100 pengikut disimpan, dan entri yang lebih lama dari 30 hari dihapus secara otomatis.
- Klik **Bersihkan** untuk mengosongkan daftar.

:::info Versi Uji Coba
CSS Kustom hanya tersedia di versi penuh, dan notifikasi menampilkan watermark di OBS. Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::

## Pertanyaan Umum

**Q: Tidak ada suara di siaran?**
Pastikan **Kontrol Audio via OBS** sudah dicentang di properti browser source dan sumber tersebut tidak dibisukan di mixer OBS. Periksa juga bahwa **Efek suara** tidak diatur ke **Tanpa**.

**Q: Subscriber YouTube tidak mendapat notifikasi.**
Hanya langganan publik yang dilaporkan, dan YouTube bisa memerlukan waktu beberapa menit hingga beberapa jam untuk melaporkannya. Aplikasi juga hanya memeriksa saat Anda live dengan live chat YouTube terhubung.

**Q: Saya menambahkan sumber OBS terlambat. Apakah notifikasi sebelumnya akan diputar ulang?**
Tidak. Sumber yang baru dibuka hanya menampilkan notifikasi yang masuk setelah terhubung. Pengikut sebelumnya tetap ada di tab **Riwayat**.
