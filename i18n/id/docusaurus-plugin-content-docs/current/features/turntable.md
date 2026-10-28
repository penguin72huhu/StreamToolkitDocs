---
sidebar_position: 14
---

# Spin Wheel

Buat roda hadiah Anda sendiri dan putar di siaran. Anda dapat mengatur bobot setiap opsi, warna roda, dan apakah opsi yang terpilih dihapus setelahnya.

Halaman ini memiliki tiga tab: **Pengaturan**, **Buat roda putar**, dan **Riwayat**. Buat roda terlebih dahulu, lalu putar dari **Pengaturan**.

## Langkah 1: Buat Roda

1. Buka **Spin Wheel** di sidebar kiri dan beralih ke tab **Buat roda putar**
2. Di bawah **Roda putar saya**, klik **Tambah**. Roda baru bernama "Roda putar 1" (lalu "Roda putar 2" dan seterusnya) akan muncul
3. Klik kartu roda untuk mengeditnya. Klik **✕** pada kartu untuk menghapus roda tersebut

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Judul roda putar

Masukkan nama untuk roda. Nama ini digunakan di daftar roda, dropdown, dan riwayat.

### Isi roda putar

1. Klik **Edit isi**
2. Masukkan opsi, **satu per baris**
3. Klik **Konfirmasi**

### Bobot

Setelah roda memiliki opsi, setiap opsi mendapat kolom **Bobot** (minimal 1, default 1). Ukuran irisan dan peluang terpilih sebuah opsi sebanding dengan bobotnya. Misalnya, opsi dengan bobot 2 berpeluang terpilih dua kali lebih besar daripada opsi dengan bobot 1.

### Warna tema roda putar

- **Minimalis**: skema putih dan abu-abu bawaan
- **Kustom**: buat skema warna Anda sendiri. Masukkan **Nama**, pilih **Warna (3–5 warna)** dengan **＋** untuk menambah warna dan **✕** untuk menghapusnya, lalu klik **Tambah**

Untuk mengubah tema kustom, klik tombol **✎**. Untuk menghapusnya, klik **✕**. Tema kustom juga tersedia sebagai skema warna untuk animasi roda di [Giveaway](./lottery).

### Hapus opsi setelah diundi

Jika aktif, opsi yang terpilih dikeluarkan dari roda sebelum putaran berikutnya. Klik **Reset** untuk mengembalikan semua opsi.

## Langkah 2: Pilih Mode Tampilan dan Tambahkan Sumber OBS

Beralih ke tab **Pengaturan** dan pilih **Mode tampilan**:

| Mode | Keterangan | URL Sumber OBS |
|------|-------------|----------------|
| **Roda putar tunggal** | OBS hanya menampilkan roda yang dipilih. Ganti roda dengan dropdown **Roda putar yang digunakan saat ini** | `http://127.0.0.1:7272/turntable` |
| **Multi roda putar** | OBS dapat menampilkan beberapa roda sekaligus. Setiap roda memiliki URL sendiri | `http://127.0.0.1:7272/turntable/<wheel ID>` |

Dalam mode **Multi roda putar**, pilih roda dari **Tambah ke tampilan roda putar**. Setiap roda yang ditambahkan mendapat kartunya sendiri dengan **URL sumber OBS**-nya. Klik **Salin** untuk menyalinnya. Klik **✕** pada kartu untuk menghapus roda tersebut dari tampilan.

Tambahkan URL yang disalin ke OBS sebagai browser source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source). Spin Wheel tidak memutar suara, jadi Anda tidak perlu menyalakan "Kontrol Audio via OBS".

:::tip
Nyalakan juga sakelar di samping **Spin Wheel** pada sidebar kiri (**Aktifkan tampilan OBS**). Selama sakelar mati, overlay tetap tersembunyi.
:::

## Langkah 3: Putar

Pada setiap kartu roda di tab **Pengaturan**:

- **Putar**: memulai putaran. Saat animasi selesai, overlay menampilkan hasilnya. Tombol tidak dapat diklik selama roda tidak memiliki opsi atau masih berputar
- **Reset**: mengembalikan opsi yang dihapus, mereset roda, dan mengosongkan **Daftar pemenang** saat ini

**Daftar pemenang** pada kartu mengumpulkan setiap hasil sejak **Reset** terakhir.

Anda juga dapat menggunakan **Putar** dan **Reset** dari jendela [Alat cepat](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Riwayat

Tab **Riwayat** menyimpan satu catatan untuk setiap ronde, dari putaran pertama hingga **Reset** berikutnya. Catatan berisi waktu, judul roda, dan pemenang. Hanya riwayat roda 30 hari terakhir yang disimpan. Untuk menghapus catatan, klik 🗑 lalu **Konfirmasi hapus**.

:::info Batasan Versi Uji Coba
- Anda hanya dapat membuat **1** roda
- Overlay OBS menampilkan watermark

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::
