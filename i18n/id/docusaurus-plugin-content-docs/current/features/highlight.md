---
sidebar_position: 6
---

# Penanda Sorotan Stream

Tekan pintasan selama siaran untuk mencatat "di menit ke berapa dalam siaran" sebuah momen sorotan terjadi. Nantinya Anda dapat menggunakan daftar waktu tersebut untuk menemukan momen sorotan di VOD saat mengedit.

Penanda disimpan di Stream Toolkit. Fitur ini tidak memiliki overlay OBS, jadi Anda tidak perlu menambahkan sumber OBS.

Halaman ini memiliki dua tab: **Pengaturan** dan **Riwayat sorotan**.

:::tip
Nyalakan sakelar di samping **Penanda Sorotan Stream** pada sidebar kiri. Selama sakelar mati, baik pintasan maupun tombol **MARK** tidak menambahkan penanda.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Langkah 1: Pilih Sumber

**Sumber** menentukan cara waktu siaran dihitung:

| Sumber | Cara waktu dihitung | Persyaratan |
|--------|----------------------------|-------------|
| **Twitch** | Waktu sejak siaran Twitch Anda saat ini dimulai | Twitch terhubung. Lihat [Pengaturan Twitch](../platforms/twitch) |
| **YouTube** | Waktu sejak siaran live YouTube Anda saat ini dimulai | Masuk dengan Google. Lihat [Pengaturan YouTube](../platforms/youtube-settings) |
| **Selaraskan manual** (default) | Nilai timer manual di halaman ini | Tidak ada |

Titik di samping **Twitch** dan **YouTube** menunjukkan apakah platform tersebut terhubung. Jika tidak, opsi tersebut menampilkan **(Belum terhubung)** atau **(belum masuk Google)**.

Jika Anda menandai saat tidak sedang live (atau, untuk **Selaraskan manual**, saat timer berhenti), waktunya dicatat sebagai **Tidak sedang siaran**. Dengan sumber **Twitch**, hasil ini bisa memerlukan sekitar 20 detik untuk muncul, karena Stream Toolkit mencoba ulang beberapa kali untuk berjaga-jaga jika Twitch belum mendaftarkan siaran yang baru dimulai.

### Timer manual

Saat **Selaraskan manual** dipilih, **Timer manual** akan muncul:

1. Masukkan waktu siaran saat ini dalam format `HH:MM:SS` (misalnya `00:00:00` tepat saat Anda mulai live)
2. Klik **Mulai sinkronisasi waktu**. Timer mulai menghitung naik dari nilai tersebut
3. Setiap penanda menggunakan nilai timer saat ini
4. Klik **Hentikan** untuk menghentikan timer

### Buat klip Twitch saat menandai

Opsi ini hanya muncul jika sumbernya **Twitch**. Jika aktif, setiap penanda juga membuat klip Twitch.

- Anda harus sedang live. Panjang klip sekitar 30 detik
- Klip disimpan di Creator Dashboard → Konten → Klip
- Setelah menandai, halaman menampilkan **Klip Twitch dibuat**, atau alasan kegagalannya: **Tidak sedang live**, **Izin kurang; sambungkan ulang Twitch**, **Twitch belum terhubung**, atau **Gagal; coba lagi**

## Langkah 2: Atur Pintasan

Pintasan default adalah `Ctrl+Shift+M`. Untuk mengubahnya:

1. Klik tombol pintasan
2. Tekan kombinasi tombol yang Anda inginkan, lalu lepaskan. Tekan **Esc** untuk membatalkan
3. Untuk menghapusnya, klik **Bersihkan**

Jika kombinasi tersebut sudah digunakan oleh fitur lain, tombol akan menampilkan **Pintasan ini sudah digunakan** dan pintasan tidak disimpan. Pintasan tetap berfungsi meskipun Stream Toolkit bukan jendela yang aktif.

Anda juga dapat mengklik tombol **MARK** di bawah pintasan. Fungsinya sama dengan pintasan. Jendela [Alat cepat](./quick-tools) juga memiliki tombol **MARK**.

## Langkah 3: Tandai Selama Siaran

1. (Opsional) Ketik nama di **Nama penanda** sebelum menandai. Jika dibiarkan kosong, penanda diberi nomor secara otomatis (`精華標記_1`, `精華標記_2`, …)
2. Tekan pintasan atau klik **MARK**

Nama yang Anda ketik hanya digunakan untuk penanda berikutnya, dan kolom tersebut dikosongkan setelahnya.

## Riwayat sorotan

Tab **Riwayat sorotan** menampilkan semua penanda, yang terbaru di atas. Setiap baris menampilkan waktu siaran, nama, sumber, serta tanggal dan waktu Anda menandainya.

- **Salin**: menyalin penanda sebagai teks, dengan format `[date] name 🎬 stream time (source)`
- **🗑️**: klik, lalu **Konfirmasi hapus** untuk menghapus penanda
- **Buka klip Twitch**: muncul jika klip Twitch dibuat untuk penanda ini. Membuka klip di Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Batasan Versi Uji Coba
**Buat klip Twitch saat menandai** tidak tersedia. Opsi ini ditampilkan sebagai "Aktif di versi penuh".

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::
