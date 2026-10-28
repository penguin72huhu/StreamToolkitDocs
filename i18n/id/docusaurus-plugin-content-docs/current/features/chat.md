---
sidebar_position: 3
---

# Chat

**Chat** menampilkan chat Twitch dan YouTube Anda bersama-sama dalam satu overlay, dengan terjemahan otomatis opsional. Chat juga dapat ditampilkan di jendela desktop transparan yang hanya dapat dilihat oleh Anda.

## URL Sumber OBS

```
http://127.0.0.1:7272/chat
```

Tambahkan sebagai browser source: [Cara Menambahkan Sumber di OBS](../getting-started/obs-source). Overlay ini tidak memiliki suara.

:::info
Pesan hanya dikirim ke overlay selama sakelar **Chat** di sidebar menyala. Chat tetap diterima saat sakelar mati, sehingga fitur yang membaca chat (polling, giveaway, permintaan lagu, dll.) tetap berfungsi.
:::

## Sebelum Memulai

Hubungkan platform yang ingin Anda tampilkan:

- [Pengaturan Twitch](../platforms/twitch)
- [Pengaturan YouTube](../platforms/youtube-settings)

Halaman pengaturan memiliki dua tab: **Pengaturan** dan **Tampilan**.

## Tab Pengaturan

### Platform

- **Tampilkan ikon platform (Twitch / YouTube)** — menampilkan ikon <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> di depan setiap pesan

Setiap platform memiliki kartunya sendiri. Titik di samping nama platform menyala hijau saat platform terhubung dan diaktifkan; **(Belum terhubung)** ditampilkan jika Twitch belum terhubung, dan **URL chat belum terhubung** jika chat YouTube belum ditautkan.

| Opsi | Keterangan |
|--------|-------------|
| **Aktifkan chat** | Tampilkan pesan dari platform ini |
| **Tampilkan avatar** | Tampilkan avatar penonton |
| **Tampilkan lencana** (Twitch) / **Tampilkan lencana (ikon anggota)** (YouTube) | Tampilkan lencana |
| **Tampilkan nama penonton alih-alih @handle** | Khusus YouTube. Nonaktif sampai Anda masuk dengan Google |

Saat chat YouTube diaktifkan tetapi belum ditautkan, dua tombol muncul di kartunya:

- **Hubungkan otomatis** — menemukan siaran Anda saat ini secara otomatis (memerlukan masuk dengan Google)
- **Isi manual** — membawa Anda ke halaman pengaturan untuk menempelkan URL chat

**Maks jumlah pesan**: berapa banyak pesan yang disimpan di layar (5–200, default 50).

### Terjemahan Otomatis

1. Centang **Aktifkan terjemahan**
2. **Bahasa target**: bahasa tujuan terjemahan pesan. Default-nya, **Ikuti bahasa antarmuka**, menggunakan bahasa antarmuka aplikasi
3. **Bahasa yang tidak diterjemahkan** (opsional): pesan dalam bahasa yang dicentang dibiarkan apa adanya. Bahasa Portugis PT-BR dan PT-PT tidak dapat dibedakan, jadi mencentang salah satunya akan melewati keduanya

**Layanan terjemahan** adalah **MyMemory**, yang tidak memerlukan API key.

- **Email (opsional)**: tanpa email, kuota harian adalah 5.000 karakter; masukkan email dan klik **Simpan** untuk menaikkannya menjadi 50.000 karakter (gratis, tidak perlu mendaftar di MyMemory)
- Bilah di bawahnya menunjukkan perkiraan jumlah yang telah digunakan hari ini. Bilah ini direset setiap hari pukul 08:00 UTC

### Uji

- **Kirim pesan uji** — mengirim contoh pesan acak ke overlay
- **Bersihkan** — menghapus semua pesan dari overlay

Jika muncul **Koneksi gagal — server mungkin tidak berjalan**, berarti server lokal Stream Toolkit tidak merespons.

### Jendela chat desktop

Menampilkan chat di jendela kecil transparan yang selalu berada di atas game Anda. Hanya Anda yang dapat melihatnya — praktis untuk streaming dengan satu monitor.

1. Klik **Buka jendela** (atau klik kanan ikon tray dan pilih **Buka chat desktop**)
2. Selama tidak terkunci, seret bilah atas untuk memindahkan jendela dan seret tepinya untuk mengubah ukuran
3. Klik **🔒 Kunci** setelah posisinya pas. Klik kemudian akan tembus melalui jendela ke game Anda. Untuk membuka kunci, arahkan mouse ke jendela dan klik 🔓 yang muncul di pojok kanan atas, atau klik **🔓 Buka kunci** di halaman pengaturan

**Atur ulang posisi** mengembalikan jendela ke posisi default-nya.

| Pengaturan | Keterangan |
|---------|-------------|
| **Gaya** | **Hanya nama dan pesan** (default) atau **Sama seperti chat OBS** |
| **Ukuran font** | 12–32 px, default 16. Hanya untuk **Hanya nama dan pesan** |
| **Opasitas teks** | 10–100%, default 100% |
| **Opasitas latar** | 0–100%, default 40% |
| **Pudarkan pesan** | 0–120 detik, default 0. Setiap pesan memudar setelah sekian detik, dan pesan yang sudah memudar tidak dapat digulir kembali. Pada 0 tidak ada yang memudar, dan Anda dapat menggulir ke atas ke pesan sebelumnya saat tidak terkunci (hingga Maks jumlah pesan) |
| **Sembunyikan dari tangkapan stream** | Aktif secara default. Display Capture OBS tidak akan menangkap jendela ini, sehingga penonton tidak melihat chat dua kali. Jendela ini juga tidak akan muncul di tangkapan layar atau berbagi layar Discord |

:::tip
Jika Anda tidak dapat melihat jendela saat game dalam mode layar penuh, ubah game ke mode Borderless Window atau Windowed. Gunakan **Kirim pesan uji** untuk memeriksa posisi dan ukuran jendela.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Tab Tampilan

### Pratinjau

Bagian atas tab menampilkan pratinjau langsung. Pemilih warna di samping **Pratinjau** hanya mengubah latar pratinjau. Kotak centang **Avatar**, **Lencana**, dan **Ikon platform** hanya mengubah apa yang ditampilkan di pratinjau.

### Pengaturan Tampilan

**Kembalikan default** memulihkan tampilan default (atau tampilan dari tema yang diterapkan, jika ada tema yang diterapkan).

- **Arah masuk**: **Dari atas ke bawah**, **Dari bawah ke atas** (default), **Dari kiri ke kanan**, **Dari kanan ke kiri**
- **Teks** — diatur terpisah untuk **Nama panggilan** dan **Pesan**:
  - Font, ukuran (px), dan warna. Untuk nama panggilan, Anda dapat memilih **Warna asli** (warna penonton di platform) atau **Warna kustom**
  - **Bingkai**: warna, **Transparansi**, **Ketebalan**
  - **Bayangan**: warna, **Transparansi**, **Blur**, offset X / Y
- **Ukuran ikon**: skala untuk **Ikon platform**, **Avatar**, dan **Lencana** (0.1–5x)
- **Warna**: **Warna latar** setiap pesan

### CSS Kustom

Buka **CSS Kustom** untuk mengedit CSS overlay secara langsung. Gunakan **Kelola aset** untuk mengunggah gambar yang dapat dirujuk di CSS. **Kembalikan default** memulihkan CSS default. Lihat juga [Gaya tema](./themes).

:::tip
Jika CSS kustom Anda mengatur salah satu kolom tampilan dengan `!important`, kolom tersebut menjadi abu-abu di pengaturan Tampilan ("Pengaturan ini dikendalikan oleh CSS kustom"). Saat tema diterapkan, CSS hanya dapat dibaca — pulihkan terlebih dahulu sebelum mengedit.
:::

## Batasan Versi Uji Coba

:::info
- Menyalakan terjemahan otomatis akan menambahkan watermark ke overlay chat
- **CSS Kustom** hanya tersedia di versi penuh
- **Jendela chat desktop** hanya tersedia di versi penuh

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::
