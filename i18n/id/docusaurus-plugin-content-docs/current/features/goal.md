---
sidebar_position: 10
---

# Bilah Target Twitch

Tampilkan bilah progres di siaran untuk target pengikut, langganan, dan Bits Twitch Anda. Setiap jenis target memiliki bilah, pengaturan, dan URL OBS-nya sendiri.

:::note Sebelum Memulai
Bilah target menghitung event Twitch, jadi hubungkan akun Twitch Anda terlebih dahulu. Lihat [Pengaturan Twitch](../platforms/twitch).
:::

## Langkah 1: Pilih Jenis Target dan Tambahkan Sumber OBS

Di bagian atas halaman, pilih jenis target: **Follow**, **Langganan**, atau **Bits**. **URL OBS** di bawah tombol akan berubah sesuai pilihan. Klik **Salin** untuk menyalinnya.

| Jenis target | URL Sumber OBS |
|-----------|----------------|
| **Follow** | `http://127.0.0.1:7272/goal/follow` |
| **Langganan** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Tambahkan setiap bilah yang ingin ditampilkan ke OBS sebagai browser source terpisah. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source). Bilah target tidak memutar suara, jadi Anda tidak perlu menyalakan "Kontrol Audio via OBS".

:::tip
Nyalakan juga sakelar di samping **Bilah Target Twitch** pada sidebar kiri (**Aktifkan tampilan OBS**). Selama sakelar mati, bilah disembunyikan di OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Langkah 2: Atur Target

Semua pengaturan di bawah ini berlaku untuk jenis target yang Anda pilih di bagian atas.

- **Judul**: teks judul yang ditampilkan di bilah
- **Target**: angka target (bilangan bulat, 0 atau lebih)
- **Progres**: menampilkan jumlah saat ini, target, dan persentasenya

### Cara progres dihitung

| Jenis target | Yang menambah progres |
|-----------|----------------------|
| **Follow** | Setiap follow baru menambah 1. Selama Twitch terhubung, jumlahnya juga disinkronkan dengan total pengikut channel Anda dari Twitch setiap 30 detik. Klik **Sinkron** untuk langsung menyinkronkannya |
| **Langganan** | Langganan baru dan langganan hadiah (hadiah beberapa langganan menambah sebanyak jumlah langganan yang dihadiahkan). Langganan ulang hanya dihitung jika **Hitung langganan ulang** aktif |
| **Bits** | Setiap cheer menambah sebanyak jumlah Bits yang di-cheer |

### Opsi langganan

Hanya ditampilkan untuk **Langganan**:

- **Berbobot per Tier**: jika aktif, langganan tier lebih tinggi menambah progres lebih banyak. Jika nonaktif, setiap langganan menambah 1
- **Hitung langganan ulang**: jika aktif, pesan langganan ulang juga menambah progres

### Reset progres

**Langganan** dan **Bits** memiliki tombol **Reset progres**. Klik tombol tersebut, lalu klik **Ya, reset** untuk mengembalikan jumlah saat ini ke 0. Angka target tetap disimpan.

**Follow** tidak memiliki tombol reset, karena jumlahnya mengikuti total pengikut Twitch Anda.

## Langkah 3: Sesuaikan Tampilan

### Pratinjau

**Pratinjau** di bagian atas menampilkan bilah untuk jenis target yang dipilih. Gunakan kotak warna di sampingnya untuk mengubah latar pratinjau. Centang **Pratinjau tercapai** untuk melihat tampilan bilah setelah target tercapai.

### Pengaturan tampilan

| Pengaturan | Keterangan |
|---------|-------------|
| **Warna latar** | Latar bilah |
| **Warna bar progres** | Warna bagian yang terisi |
| **Warna saat tercapai** | Warna isian setelah target tercapai |
| **Teks judul** | Font, warna, dan ukuran (8–72 px) judul |
| **Teks target** | Font, warna, dan ukuran (8–72 px) angka |
| **Persentase** | Font, warna, dan ukuran (8–72 px) persentase |

Klik **Kembalikan default** untuk memulihkan tampilan jenis target yang dipilih.

### CSS Kustom

Klik **CSS Kustom** untuk membuka editor. Setiap jenis target memiliki CSS-nya sendiri. Gunakan CSS untuk tata letak dan struktur. Warna, font, dan ukuran diatur di pengaturan tampilan di atas.

- **Kembalikan default**: memulihkan CSS default
- **Kelola aset**: membuka pengelola aset untuk gambar yang digunakan di CSS Anda

Jika CSS Anda menimpa sebuah properti dengan `!important`, kontrol tampilan yang sesuai akan terkunci, karena CSS akan tetap menang.

:::info Batasan Versi Uji Coba
- **CSS Kustom** hanya tersedia di versi penuh
- Overlay OBS menampilkan watermark

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::
