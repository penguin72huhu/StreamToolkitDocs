---
sidebar_position: 16
---

# Giveaway

Penonton ikut serta dengan mengetik kata kunci di chat Twitch atau YouTube. Setelah pendaftaran ditutup, undi pemenang secara acak, dan animasi undian diputar di overlay OBS.

## URL Sumber OBS

```
http://127.0.0.1:7272/lottery
```

Klik **Salin** di samping **URL sumber OBS** di bagian atas halaman, lalu tambahkan ke OBS sebagai browser source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source). Giveaway tidak memutar suara, jadi Anda tidak perlu menyalakan "Kontrol Audio via OBS".

:::tip
Nyalakan juga sakelar di samping **Giveaway** pada sidebar kiri (**Aktifkan tampilan OBS**). Selama sakelar mati, overlay tetap tersembunyi.
:::

Halaman ini memiliki dua tab: **Pengaturan** dan **Riwayat**.

## Pengaturan

### Platform voting

Klik **Twitch** atau **YouTube** untuk memilih chat platform mana yang dapat ikut serta. Anda dapat memilih keduanya. Platform yang belum terhubung menampilkan **(Belum terhubung)** untuk Twitch atau **URL chat belum terhubung** untuk YouTube. Untuk menghubungkan, lihat [Pengaturan Twitch](../platforms/twitch) dan [Pengaturan YouTube](../platforms/youtube-settings).

### Kata kunci undian

Pesan chat yang berisi kata kunci ini akan mendaftarkan penonton. Setiap penonton hanya dapat ikut satu kali per giveaway. **Mulai kumpulkan** tidak dapat diklik selama kata kunci kosong.

### Durasi undian

Lama pendaftaran dibuka, dalam detik. Default-nya 300 dan rentangnya 10–3600.

### Maks. peserta

Pendaftaran ditutup lebih awal setelah jumlah orang ini tercapai. Masukkan `0` untuk tanpa batas.

### Hapus opsi setelah diundi

Jika aktif, pemenang dihapus dari daftar peserta sebelum undian berikutnya, sehingga tidak dapat terpilih lagi dalam giveaway tersebut.

### Teks petunjuk

Petunjuk yang ditampilkan di overlay selama pendaftaran, yang memberi tahu penonton kata kunci dan jumlah peserta. Atur font, warna, dan ukurannya (px).

### Animasi undian

- **Pergantian ID cepat** (default): nama peserta mengambang di layar selama pendaftaran dibuka, lalu berganti dengan cepat saat undian
  - **Font layar pengumpulan**: font, ukuran font, dan warna chip nama (hingga 5)
  - **Font animasi undian**: font dan ukuran font nama yang berganti saat undian
  - **Kembalikan default**: memulihkan pengaturan ini
- **Animasi roda putar**: peserta ditempatkan di roda yang berputar untuk memilih pemenang. Pilih skema warna: **Minimalis** atau tema kustom yang Anda buat di [Spin Wheel](./turntable)

Selama pendaftaran dibuka, Anda tidak dapat mengubah platform, kata kunci, durasi, jumlah maksimal peserta, Hapus opsi setelah diundi, atau jenis animasi.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Menjalankan Giveaway

1. Klik **Mulai kumpulkan**. Panel menampilkan **Mengumpulkan…**, sisa waktu, dan jumlah peserta
2. Selama pendaftaran dibuka, Anda dapat mengetik nama di **Masukkan nama peserta secara manual** lalu klik **Tambah** (atau tekan Enter). Nama yang sudah ada di daftar akan menampilkan "ID ini sudah ada dalam daftar"
3. Untuk menutup pendaftaran sebelum waktu habis, klik **Akhiri pengumpulan**. Pendaftaran juga ditutup saat waktu habis atau **Maks. peserta** tercapai. Panel kemudian menampilkan **Waktu habis!**
4. Klik **Mulai undi**. Overlay memutar animasi, dan setelah selesai pemenang muncul di bawah **Pemenang**
5. Untuk mengundi pemenang lain, klik **Undi ulang**

Klik **Batalkan undian** kapan saja untuk menghapus semua peserta dan pemenang, dan overlay kembali ke keadaan menunggu.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Riwayat

Tab **Riwayat** menyimpan satu catatan per giveaway berisi waktu, kata kunci, dan jumlah peserta. Buka sebuah catatan untuk melihat pemenang dan daftar lengkap peserta. Hanya riwayat giveaway 30 hari terakhir yang disimpan. Untuk menghapus catatan, klik 🗑 lalu **Konfirmasi hapus**.

:::info Batasan Versi Uji Coba
Overlay OBS menampilkan watermark. Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::
