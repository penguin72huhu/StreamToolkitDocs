---
sidebar_position: 5
---

# Media Board

Tampilkan gambar, putar video, dan putar efek suara di siaran dengan sekali klik atau pintasan.

Halaman ini memiliki tiga tab: **Gambar**, **Video**, dan **Efek suara**. Setiap tab memiliki URL sumber OBS-nya sendiri.

| Tab | URL Sumber OBS | Kontrol Audio via OBS |
|-----|----------------|-----------------------|
| **Gambar** | `http://127.0.0.1:7272/imageboard` | Tidak perlu |
| **Video** | `http://127.0.0.1:7272/videoboard` | Wajib |
| **Efek suara** | `http://127.0.0.1:7272/soundboard` | Wajib |

Klik **Salin** di samping setiap URL dan tambahkan ke OBS sebagai browser source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source). Video dan suara diputar di sumber OBS, bukan di dalam Stream Toolkit, jadi Anda harus menyalakan **Kontrol Audio via OBS** untuk kedua sumber tersebut, jika tidak penonton tidak akan mendengarnya.

:::tip
Nyalakan sakelar di samping **Media Board** pada sidebar kiri (**Aktifkan tampilan OBS**). Selama sakelar mati, gambar tidak dapat ditampilkan serta video dan suara tidak diputar, baik melalui tombol maupun pintasan.
:::

## Kontrol Umum

Gambar, video, dan suara semuanya ditampilkan sebagai kartu:

- Klik sebuah kartu untuk membuka atau menutup pengaturannya
- Kotak centang di sebelah kanan kartu: jika dicentang, item tersebut muncul di alat peluncur [Alat cepat](./quick-tools). Item baru dicentang secara default
- **✕** menghapus item
- Jika file lokal telah dipindahkan atau dihapus, kartu menampilkan **File tidak ditemukan**

### Pintasan

Setiap item dapat memiliki pintasannya sendiri:

1. Buka kartu dan klik tombol pintasan
2. Tekan kombinasi tombol yang Anda inginkan, lalu lepaskan. Tekan **Esc** untuk membatalkan
3. Untuk menghapus pintasan, klik **Bersihkan**

Jika kombinasi tersebut sudah digunakan oleh fitur lain, pintasan tidak disimpan dan tombol menampilkan pesan konflik. Pintasan tetap berfungsi meskipun Stream Toolkit bukan jendela yang aktif. Semua pintasan juga ditampilkan di halaman [Pintasan](./hotkeys).

## Gambar

{/* TODO: 截圖 — 圖片分頁 */}

### Menambahkan Gambar

1. Klik **Tambah gambar**
2. Pilih file (jpg, jpeg, png, atau gif). Nama file menjadi nama gambar

Membuka kartu akan menampilkan thumbnail dan pengaturan berikut:

- **Nama**: nama gambar
- **Path file**: klik **Pilih ulang** untuk memilih file lain
- **Pintasan**: tekan sekali untuk menampilkan gambar, tekan lagi untuk menyembunyikannya
- **Atur posisi dan ukuran**: lihat di bawah
- **Hapus gambar**: menghapus gambar

### Menampilkan dan Menyembunyikan

Klik tombol **○** pada kartu untuk menampilkan gambar di OBS. Tombol berubah menjadi **◉**. Klik lagi untuk menyembunyikan gambar.

### Pengaturan tampilan

**Izinkan menampilkan beberapa gambar sekaligus** nonaktif secara default. Selama nonaktif, menampilkan sebuah gambar akan menyembunyikan gambar yang sedang tampil. Nyalakan untuk menampilkan beberapa gambar sekaligus.

### Atur posisi dan ukuran

- **Posisi X** / **Posisi Y**: dalam px. 0/0 adalah tengah sumber. Nilai positif bergeser ke kanan/bawah, nilai negatif ke kiri/atas
- **Lebar** / **Tinggi**: dalam % dari ukuran asli. 100 = ukuran asli. Tombol 🔗 mengunci rasio aspek (aktif secara default). Klik untuk mengubah skala secara bebas
- Selama gambar ditampilkan, perubahan dipratinjau langsung di OBS
- **Simpan** menyimpan perubahan, **Reset** kembali ke nilai saat Anda membuka jendela, **Batal** menutup tanpa menyimpan

## Video

{/* TODO: 截圖 — 影片分頁 */}

Klik **Tambah video** untuk menambahkan kartu, lalu buka kartunya:

- **Nama video**: nama yang ditampilkan di kartu
- **Sumber**: **YouTube** atau **Lokal**
  - **YouTube**: tempel tautan video ke **URL YouTube**. Klik **Uji proses** untuk memeriksanya. Jika berhasil, akan ditampilkan "Berhasil diproses, otomatis diterapkan saat diputar"
  - **Lokal**: klik **Pilih file** untuk memilih file mp4, webm, atau ogg. Batas ukurannya 200MB, dan file yang lebih besar berarti latensi lebih tinggi. Untuk latar transparan, gunakan video WebM (VP9 Alpha)
- **Putar berurutan**: mengulang video
- **Waktu pemutaran**: atur **Dari** dan **Sampai** (jam, menit, detik, ms). Biarkan **Sampai** di 00:00 untuk memutar sampai akhir
- **Volume**: 0–100%
- **Pintasan**: tekan untuk memutar video. Tekan lagi saat video sedang diputar untuk menghentikannya
- **Atur posisi dan ukuran**: kolom posisi dan ukuran yang sama seperti untuk gambar. Klik **Ulang pratinjau** untuk memutar video secara berulang di OBS selama Anda menyesuaikannya, dan **Hentikan pratinjau** untuk berhenti. Klik **Simpan** atau **Batal** setelah selesai

Klik **▶** pada kartu untuk memutar video di OBS. Klik **■** untuk menghentikannya.

## Efek suara

{/* TODO: 截圖 — 音效分頁 */}

Klik **Tambah efek suara** untuk menambahkan kartu, lalu buka kartunya:

- **Nama efek suara**: nama yang ditampilkan di kartu
- **Sumber**: **URL YouTube** atau **File lokal**
  - **URL YouTube**: tempel tautan dan klik **Uji proses** untuk memeriksanya
  - **File lokal**: klik **Pilih file** untuk memilih file mp3, wav, ogg, flac, m4a, aac, atau opus
- **Waktu pemutaran**: atur **Dari** dan **Sampai**. Biarkan **Sampai** di 00:00 untuk memutar sampai akhir
- **Volume**: 0–100%
- **Pintasan**: tekan untuk memutar suara

Klik **▶** pada kartu untuk memutar suara di OBS. Klik **■** untuk menghentikannya. Hanya satu suara yang diputar dalam satu waktu. Memutar suara lain akan menghentikan suara yang sedang diputar.

:::info Batasan Versi Uji Coba
- Anda hanya dapat menambahkan **1** gambar, **1** video, dan **1** efek suara
- Overlay gambar dan video menampilkan watermark

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::

## Pertanyaan Umum

**Q: Video atau suara diputar, tetapi tidak ada suara di siaran.**
Pastikan **Kontrol Audio via OBS** dicentang untuk sumber `/videoboard` dan `/soundboard`, dan sumber tersebut tidak dibisukan di mixer OBS.

**Q: Saya tidak dapat memilih file video saya.**
Hanya file mp4, webm, dan ogg yang dapat dipilih, maksimal 200MB. Jika file lebih besar, pesan akan menampilkan batasnya dan file tidak ditambahkan.
