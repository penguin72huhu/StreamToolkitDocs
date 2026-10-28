---
sidebar_position: 4
---

# Terjemahan suara

Tahan pintasan dan berbicaralah. Stream Toolkit mengubah ucapan Anda menjadi teks, menerjemahkannya, dan menampilkan kedua baris sebagai subtitle di OBS.

Pengenalan suara berjalan di komputer Anda sendiri dengan model Whisper. Teks kemudian diterjemahkan dengan MyMemory.

Halaman ini memiliki dua tab: **Pengaturan** dan **Tampilan**.

## Langkah 1: Tambahkan Sumber OBS

URL sumber OBS ditampilkan di bagian atas halaman:

```
http://127.0.0.1:7272/voice-translate
```

Klik **Salin** dan tambahkan ke OBS sebagai browser source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source). Terjemahan suara tidak memutar suara, jadi Anda tidak perlu menyalakan "Kontrol Audio via OBS".

Subtitle muncul di bagian bawah sumber: teks asli di atas dan terjemahan di bawahnya. Subtitle memudar setelah **Durasi tampil subtitle**.

:::tip
Nyalakan sakelar di samping **Terjemahan suara** pada sidebar kiri (**Aktifkan tampilan OBS**). Pintasan hanya berfungsi selama sakelar menyala.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Langkah 2: Atur Pintasan

Di bawah **Pintasan (tahan untuk rekam, lepas untuk kenali)**:

1. Klik **Klik untuk atur pintasan**
2. Tekan kombinasi tombol yang Anda inginkan, lalu lepaskan. Tekan **Esc** untuk membatalkan
3. Untuk menghapus pintasan, klik **Bersihkan**

Jika kombinasi tersebut sudah digunakan oleh fitur lain, tombol menampilkan **Pintasan bentrok** dan pintasan tidak disimpan.

Pintasan tetap berfungsi meskipun Stream Toolkit bukan jendela yang aktif. **Tahan** pintasan selama Anda berbicara, lalu **lepaskan** untuk mengenali dan menerjemahkan. Perekaman berhenti secara otomatis setelah 15 detik.

Anda juga dapat menahan tombol **REC** di bawah pintasan dengan mouse. Cara kerjanya sama: tekan untuk merekam, lepaskan untuk menerjemahkan. Jendela [Alat cepat](./quick-tools) memiliki tombol **REC** yang sama.

## Langkah 3: Pengaturan Pengenalan

| Kolom | Keterangan |
|-------|-------------|
| **Status model** | Menampilkan **Memuat xx%**, **Siap**, atau **Gagal memuat model**. Anda dapat merekam setelah status menampilkan **Siap** |
| **Model Whisper** | **Tiny (tercepat, sekitar 40MB)**, **Base (disarankan, sekitar 75MB)** (default), atau **Small (terakurat, sekitar 245MB)**. Model diunduh saat pertama kali digunakan. Mengganti model akan memuatnya ulang |
| **Bahasa suara** | Bahasa yang Anda ucapkan. Default-nya Tionghoa Tradisional |
| **Mikrofon** | Mikrofon yang digunakan untuk merekam. **Default sistem** menggunakan perangkat input default Windows |

## Langkah 4: Pengaturan Terjemahan

| Kolom | Keterangan |
|-------|-------------|
| **Durasi tampil subtitle** | Lama subtitle tampil di layar, 1–30 detik. Default-nya 5 |
| **Bahasa target** | Bahasa tujuan terjemahan. Default-nya Inggris |
| **Gunakan terjemahan Whisper saat target terjemahan English** | Saat bahasa target adalah Inggris, Whisper yang menerjemahkan, bukan MyMemory. (Gratis tanpa kuota, tetapi latensinya lebih tinggi.) Tidak berpengaruh untuk bahasa target lainnya |
| **Layanan terjemahan** | MyMemory |

### Email (opsional)

MyMemory gratis. Kuota hariannya bergantung pada apakah Anda memasukkan email:

- Tanpa email: 5.000 karakter/hari
- Dengan email: 50.000 karakter/hari (gratis, tidak perlu mendaftar di MyMemory)

Masukkan email Anda dan klik **Simpan**. Email ini **Berbagi dengan terjemahan chat**.

Bilah di bawahnya menampilkan **Terpakai hari ini (perkiraan, direset setiap hari pukul 08.00 UTC)**. Saat kuota habis, akan ditampilkan **Kuota penuh**.

## Langkah 5: Tampilan

Di tab **Tampilan**, Anda dapat mengubah tampilan subtitle. Perubahan langsung disimpan.

- **Pratinjau**: menampilkan contoh subtitle. Kotak warna di sampingnya hanya mengubah latar pratinjau
- **Perataan**: **Rata kiri** (default), **Rata tengah**, atau **Rata kanan**
- **Font**: satu baris untuk **Bahasa asli** (teks asli) dan satu untuk **Bahasa target** (terjemahan). Setiap baris memiliki font, warna, dan ukuran (8–120 px). Default-nya 14 px untuk teks asli dan 22 px untuk terjemahan
- **Bayangan**: warna bayangan teks
- **Kembalikan default**: memulihkan tampilan default

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Batasan Versi Uji Coba
**Bahasa target** tetap Inggris. Halaman menampilkan "Demo hanya mendukung terjemahan ke Inggris".

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::

## Pertanyaan Umum

**Q: Saya menahan pintasan tetapi tidak terjadi apa-apa.**
Pastikan sakelar di samping **Terjemahan suara** pada sidebar kiri menyala, dan **Status model** menampilkan **Siap**.

**Q: Perekaman berfungsi, tetapi tidak ada subtitle yang muncul di OBS.**
Jika MyMemory tidak dapat menerjemahkan (misalnya kuota harian habis), subtitle tidak ditampilkan. Periksa bilah **Terpakai hari ini**. Memasukkan email akan menaikkan kuota. Jika bahasa target Anda Inggris, Anda juga dapat menyalakan **Gunakan terjemahan Whisper saat target terjemahan English**, yang tidak memiliki kuota.
