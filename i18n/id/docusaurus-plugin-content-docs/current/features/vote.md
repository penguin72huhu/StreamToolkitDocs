---
sidebar_position: 15
---

# Polling Langsung

Jalankan polling di siaran. Penonton memilih dengan mengetik nomor opsi di chat Twitch atau YouTube, dan hasilnya diperbarui secara langsung di overlay OBS.

## URL Sumber OBS

```
http://127.0.0.1:7272/vote
```

Klik **Salin** di samping **URL sumber OBS** di bagian atas halaman, lalu tambahkan ke OBS sebagai browser source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source). Polling Langsung tidak memutar suara, jadi Anda tidak perlu menyalakan "Kontrol Audio via OBS".

:::tip
Nyalakan juga sakelar di samping **Polling Langsung** pada sidebar kiri (**Aktifkan tampilan OBS**). Selama sakelar mati, overlay tetap tersembunyi.
:::

Halaman ini memiliki tiga tab: **Pengaturan**, **Tampilan**, dan **Riwayat**.

## Memulai Polling (tab Pengaturan)

### Platform voting

Klik **Twitch** atau **YouTube** untuk memilih chat platform mana yang dapat memilih. Anda dapat memilih keduanya. Platform yang belum terhubung menampilkan **(Belum terhubung)** untuk Twitch atau **URL chat belum terhubung** untuk YouTube. Hubungkan terlebih dahulu:

- [Pengaturan Twitch](../platforms/twitch)
- [Pengaturan YouTube](../platforms/youtube-settings)

### Judul voting

Opsional. Contoh: "Main game apa malam ini?"

### Opsi voting (2–10 item)

- Masukkan minimal 2 opsi. Anda dapat memiliki hingga 10
- **+ Tambah opsi** menambahkan baris dan **×** menghapusnya
- **Terapkan riwayat** memungkinkan Anda memilih salah satu dari 15 polling terbaru dan mengisi judul serta opsinya

Selama Anda mengedit, overlay OBS menampilkan pratinjau judul dan opsi.

### Durasi voting

Lama polling dalam detik. Default-nya 60 dan minimal 10.

### Mulai / Hentikan

- **Mulai voting**: memerlukan minimal 2 opsi yang terisi dan minimal satu platform terpilih yang terhubung
- **Hentikan voting**: mengakhiri polling lebih awal. Jika tidak, polling berakhir saat waktu habis

Selama polling berjalan, Anda tidak dapat mengubah platform, judul, opsi, atau durasi.

{/* TODO: 截圖 — 投票設定分頁 */}

## Cara Penonton Memilih

Selama polling berjalan, overlay menampilkan "Ketik nomor opsi di chat untuk memilih (contoh: 1)".

- Seluruh pesan harus berupa nomor opsi, seperti `1` atau `1.`. Spasi diabaikan. Pesan yang berisi teks lain tidak dihitung
- Setiap penonton mendapat satu suara. Jika mereka mengirim nomor yang berbeda, suaranya berpindah ke opsi yang baru, dan suara terakhir sebelum waktu habis yang dihitung

## Hasil Langsung

Selama polling, **Hasil langsung** muncul di bawah pengaturan dengan sisa waktu, jumlah suara dan persentase untuk setiap opsi, serta total suara. Setelah polling berakhir, bagian ini berubah menjadi **Hasil akhir**. Klik **Detail** untuk melihat siapa yang memilih setiap opsi, dikelompokkan berdasarkan Twitch dan YouTube.

## Tampilan

Tab **Tampilan** memiliki **Pratinjau** di bagian atas. Pemilih warna di sampingnya hanya mengubah latar pratinjau, bukan overlay OBS.

- **Font**: atur font, warna, dan **Ukuran** (px) untuk **Judul**, **Tips**, **Opsi**, **Detik hitung mundur**, dan **Jumlah suara**
- **Warna bar progres**: hingga 5 warna, digunakan untuk bar opsi secara berurutan. Masing-masing dapat berupa **Warna solid** atau **Gradien**. Gradien juga memiliki **Sudut**
- **Warna latar**: latar kartu polling
- **Kembalikan default**: memulihkan tampilan default. Jika ada tema yang diterapkan, tampilan tema tersebut yang dipulihkan

Di bawah **CSS Kustom** Anda dapat menulis gaya Anda sendiri. Untuk membagikan atau mengunduh tampilan, lihat [Gaya tema](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Riwayat

Tab **Riwayat** menampilkan judul, waktu, jumlah opsi, dan total suara setiap polling. Buka sebuah polling untuk melihat hasilnya, jumlah suara per platform, dan **Detail**. Hanya riwayat polling 30 hari terakhir yang disimpan. Untuk menghapus catatan, klik 🗑 lalu **Konfirmasi hapus**.

:::info Batasan Versi Uji Coba
- **CSS Kustom** hanya tersedia di versi penuh
- Overlay OBS menampilkan watermark

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::
