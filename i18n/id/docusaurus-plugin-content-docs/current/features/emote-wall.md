---
sidebar_position: 13
---

# Dinding Emote

Saat penonton menggunakan emote di chat, emote tersebut akan mengambang melintasi siaran Anda.

:::note Sebelum Memulai
Dinding Emote membaca emote dari chat, jadi hubungkan terlebih dahulu platform yang Anda gunakan. Lihat [Pengaturan Twitch](../platforms/twitch) dan [Pengaturan YouTube](../platforms/youtube-settings).
:::

## Langkah 1: Tambahkan Sumber OBS

Salin **URL sumber OBS** di bagian atas halaman:

```
http://127.0.0.1:7272/emote-wall
```

Tambahkan ke OBS sebagai browser source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source). Dinding Emote tidak memutar suara, jadi Anda tidak perlu menyalakan "Kontrol Audio via OBS".

:::tip
Nyalakan juga sakelar di samping **Dinding Emote** pada sidebar kiri (**Aktifkan tampilan OBS**). Selama sakelar mati, emote dari chat tidak dikirim ke overlay.
:::

## Langkah 2: Pilih Sumber

Di bawah **Sumber** terdapat kartu untuk **Twitch** dan satu untuk **YouTube**. Setiap kartu menampilkan status koneksi:

- Twitch menampilkan **(Belum terhubung)** jika akun Twitch Anda belum terhubung
- YouTube menampilkan **URL chat belum terhubung** jika chat YouTube belum terhubung

Centang **Aktifkan dinding emote** pada sebuah kartu untuk menampilkan emote dari chat platform tersebut. Hapus centang untuk mengabaikan platform tersebut.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Langkah 3: Pengaturan Animasi

| Pengaturan | Keterangan |
|---------|-------------|
| **Ukuran emote** | Ukuran setiap emote, 16–256 px |
| **Maks emote per pesan** | Jumlah emote maksimal yang diambil dari satu pesan chat (1–20) |
| **Durasi mengambang** | Lama setiap emote mengambang, 1–30 detik |
| **Kecepatan mengambang** | 50–500 px/s |

Klik **Kembalikan default** di samping judul bagian untuk memulihkan keempat nilai tersebut.

## Langkah 4: Uji

Klik **Uji (tampilkan di OBS)** untuk mengirim contoh emote Twitch ke overlay dengan pengaturan Anda saat ini. Jumlah emote uji mengikuti **Maks emote per pesan**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Batasan Versi Uji Coba
Overlay OBS menampilkan watermark selama emote tampil di layar. Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::
