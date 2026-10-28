---
sidebar_position: 12
---

# Jam

Tampilkan waktu saat ini di siaran, dengan opsi tanggal dan hari.

## Langkah 1: Tambahkan Sumber OBS

Salin **URL sumber OBS** di bagian atas halaman:

```
http://127.0.0.1:7272/clock
```

Tambahkan ke OBS sebagai browser source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source). Jam tidak memutar suara, jadi Anda tidak perlu menyalakan "Kontrol Audio via OBS".

:::tip
Nyalakan juga sakelar di samping **Jam** pada sidebar kiri (**Aktifkan tampilan OBS**). Selama sakelar mati, jam disembunyikan di OBS.
:::

## Pratinjau

**Pratinjau** di bagian atas menampilkan overlay OBS yang sebenarnya dan diperbarui saat Anda mengubah pengaturan. Gunakan kotak warna di sampingnya untuk mengubah latar pratinjau.

Di bawah pratinjau terdapat tiga tab: **Tampilan**, **Format jam**, dan **Pengaturan tampilan**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Tampilan

| Pengaturan | Keterangan |
|---------|-------------|
| **Font** | Font untuk semua teks jam |
| **Gaya** | Cara waktu, tanggal, dan hari disusun: **Stack**, **Horizontal**, **One-Top-Two-Bottom**, atau **Two-Top-One-Bottom**. **Jarak baris** tersedia di semua tata letak kecuali **Horizontal**, dan **Jarak** di semua tata letak kecuali **Stack** (keduanya −200 hingga 200 px) |
| **Urutan** | Seret blok **Waktu**, **Tanggal**, dan **Hari** untuk mengubah urutannya |
| **Teks** | Atur **Waktu**, **Tanggal**, dan **Hari** secara terpisah: **Ukuran font**, warna (**Warna solid**, atau **Gradien** dengan dua warna dan **Sudut**), serta warna **Bingkai**, **Transparansi**, dan **Ketebalan** (0–7 px) |
| **Bayangan** | Warna bayangan, **Transparansi**, **Blur**, dan offset **X** / **Y**, berlaku untuk semua teks |

Tombol **Kembalikan default** ada di bagian atas tab.

### CSS Kustom

Klik **CSS Kustom** untuk membuka editor. CSS default mencantumkan selector untuk setiap bagian jam (waktu, tanggal, hari, dan container-nya) beserta komentar. Gunakan CSS untuk tata letak dan struktur. Warna, font, dan ukuran diatur di pengaturan tampilan di atas.

- **Kembalikan default**: memulihkan CSS default
- **Kelola aset**: membuka pengelola aset untuk gambar yang digunakan di CSS Anda

Jika CSS Anda menimpa sebuah properti dengan `!important`, kontrol tampilan yang sesuai akan terkunci, karena CSS akan tetap menang.

## Format jam

- **Format jam**: **24 jam**, atau salah satu dari dua opsi 12 jam: **12 jam (Pagi/Sore)** menampilkan penanda bahasa Tionghoa 上午 / 下午, sedangkan **12 jam (AM/PM)** menampilkan AM/PM
- **Zona waktu**: UTC−12 hingga UTC+14. Secara default, zona waktu mengikuti komputer Anda

## Pengaturan tampilan

- **Tampilkan detik**
- **Tampilkan tanggal**: saat dinyalakan, pilih format tanggal dari dropdown. Format yang bertanda **Tanpa tahun** tidak menampilkan tahun
  - **Tanggal dengan angka nol di depan**: menampilkan bulan dan tanggal satu digit dengan angka nol di depan (misalnya 2026/05/20)
  - **Format tahun**: ditampilkan untuk format yang diawali tahun. **Penuh (2026)** atau **Singkat (26)**

  Kedua opsi ini berlaku untuk format numerik (dengan `/` atau `-`). Format yang ditulis lengkap (misalnya "20 Mei 2026") mengikuti bahasa antarmuka aplikasi
- **Tampilkan hari**: saat dinyalakan, pilih cara penulisan hari (misalnya **Rabu**, **Wednesday**, **WED**, atau **Wed**)

:::info Batasan Versi Uji Coba
**CSS Kustom** hanya tersedia di versi penuh. Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::
