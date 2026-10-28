---
sidebar_position: 18
---

# Bot Obrolan

Mengirim pesan ke chat Anda secara otomatis: pesan terjadwal pada interval tertentu, dan balasan kata kunci saat penonton mengetik sebuah perintah. Bot mengirim pesan dari akun Anda sendiri.

Bot obrolan tidak memiliki overlay OBS, jadi tidak ada URL yang perlu ditambahkan.

:::tip
Nyalakan sakelar di samping **Bot Obrolan** pada menu kiri. Selama sakelar mati, bot tidak mengirim apa pun.
:::

Halaman ini memiliki tiga tab: **Pengaturan**, **Pesan Terjadwal**, dan **Balasan Kata Kunci**.

## Tab Pengaturan

Di bawah **Platform**, klik **Twitch** untuk menyalakannya (klik lagi untuk mematikannya). Titik di sampingnya menyala saat Twitch terhubung; jika tidak, akan ditampilkan **(Belum terhubung)**. Hubungkan Twitch terlebih dahulu: [Pengaturan Twitch](../platforms/twitch).

**YouTube** ditampilkan sebagai **Segera hadir** dan belum dapat dinyalakan.

Jika tidak ada platform yang terhubung, dua tab lainnya menampilkan "Belum ada platform yang terhubung, jadi bot tidak akan mengirim apa pun." beserta tombol **Buka pengaturan**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Pesan Terjadwal

Mengirim pesan secara berkala selama Anda live.

1. Klik **+ Tambah**
2. Isi:
   - **Pesan**: teks yang akan dikirim (maksimal 500 karakter di Twitch). Pesan selalu satu baris: Enter tidak berfungsi dan baris baru yang ditempel diubah menjadi spasi
   - **Interval**: jarak menit antar pengiriman (5–240, default 15)
   - **Min. pesan**: berapa banyak baris chat baru yang diperlukan sejak pengiriman terakhir sebelum pesan dikirim lagi (0–100, default 2), agar bot tidak terus mengirim ke chat yang sepi
   - **Platform**: tempat pesan dikirim
3. Klik **Simpan**

Cara pengirimannya:

- Hanya selama siaran Anda live. Pengiriman pertama dilakukan satu interval penuh setelah Anda mulai live, bukan saat siaran dimulai
- Jika beberapa pesan terjadwal jatuh tempo bersamaan, pesan-pesan tersebut akan dikirim berselang, tidak sekaligus

## Balasan Kata Kunci

Membalas saat pesan penonton diawali dengan sebuah perintah.

1. Klik **+ Tambah**
2. Isi:
   - **Perintah**: pilih awalan (`! @ # $ % & ~`), lalu ketik satu kata tanpa spasi, misalnya `!dc`. Perintah dicocokkan dengan kata pertama pesan chat, tanpa membedakan huruf besar/kecil
   - **Balasan**: teks yang akan dikirim. `{user}` diganti dengan nama penonton yang menggunakan perintah tersebut
   - **Jeda**: detik sebelum perintah yang sama dapat membalas lagi (0–3600, default 5)
   - **Platform**: tempat balasan dikirim
3. Klik **Simpan**

Balasan kata kunci berfungsi kapan saja, baik saat live maupun tidak.

Sebuah perintah tidak boleh sama dengan balasan kata kunci lain, atau dengan perintah yang sudah digunakan oleh [Permintaan Lagu](./song-request) atau kata kunci [Giveaway](./lottery).

## Mengelola Daftar

Di kedua tab, setiap item memiliki:

- Kotak centang di sebelah kiri untuk menyalakan atau mematikan item tanpa menghapusnya
- Tag platform; tag yang redup berarti platform tersebut dimatikan di tab Pengaturan
- **Edit** dan **Hapus**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Batasan Versi Uji Coba
- 1 pesan terjadwal dan 1 balasan kata kunci
- Setiap pesan diakhiri dengan ` (by StreamToolkit)`, sehingga panjang pesan maksimal menjadi lebih pendek

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::
