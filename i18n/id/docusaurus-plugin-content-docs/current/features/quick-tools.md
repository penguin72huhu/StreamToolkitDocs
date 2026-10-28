---
sidebar_position: 1
---

# Alat cepat

**Alat cepat** adalah jendela kontrol kecil yang dapat Anda biarkan terbuka di samping game atau OBS. Jendela ini memungkinkan Anda menyalakan dan mematikan fitur serta menggunakan kontrol yang paling sering dipakai tanpa harus kembali ke jendela utama.

## Membuka Alat cepat

Gunakan salah satu cara berikut:

- Klik **⚡ Alat cepat** di bagian atas sidebar kiri pada jendela utama
- Klik kanan ikon tray Stream Toolkit dan pilih **Buka alat cepat**

Jika jendela sudah terbuka, jendela tersebut akan dibawa ke depan alih-alih membuka jendela kedua.

{/* TODO: 截圖 — 快速工具視窗 */}

## Jendela

- **Memindahkan**: seret bilah judul
- **📌 Sematkan / Lepas sematan**: menjaga jendela tetap di atas jendela lain. Sematan aktif saat jendela dibuka
- **✕**: menutup jendela

Jendela ini mengikuti tema dan bahasa antarmuka aplikasi.

## Panel Sakelar cepat

Klik panah **›** di tepi kiri untuk menggeser keluar panel **Sakelar cepat**. Panel ini menampilkan semua fitur:

- Sakelar menyalakan atau mematikan fitur (sama dengan sakelar di samping setiap fitur pada sidebar utama)
- **⚙** (**Buka pengaturan**) membuka jendela utama di halaman pengaturan fitur tersebut

Klik di luar panel atau klik panah lagi untuk menutupnya.

Fitur ditampilkan dalam urutan yang sama dengan sidebar utama. Untuk mengubah urutan, seret pegangan **⠿** di samping fitur pada sidebar jendela utama.

## Kartu Fitur

Setiap fitur aktif yang memiliki kontrol ditampilkan sebagai kartu. Kartu awalnya tertutup — klik judul kartu untuk membuka atau menutupnya. Jika tidak ada satu pun fitur ini yang menyala, jendela menampilkan **Belum ada fitur yang diaktifkan**.

| Fitur | Isi kartu |
|---------|---------------------|
| [Kontrol Scene OBS](./obs-scene) | Status koneksi, ditambah satu tombol untuk setiap ganti scene atau alihkan sumber yang dikonfigurasi (scene saat ini disorot). Tombol nonaktif saat tidak terhubung. Kartu hanya muncul jika setidaknya ada satu entri pintasan |
| [Terjemahan suara](./voice-translate) | Tombol **REC** — tahan untuk merekam, lepaskan untuk menerjemahkan |
| [Penanda Sorotan Stream](./highlight) | Tombol **MARK**. Setelah menandai, ikon platform dan cap waktu ditampilkan selama 5 detik |
| [Bilah Target Donasi](./donate) | Jumlah saat ini / target dengan bilah progres, kolom **Tambah jumlah manual** dengan **Tambah**, serta **Nolkan** |
| [Timer](./timer) | Untuk setiap timer yang ditampilkan: nama, waktu, **Mulai** / **Jeda**, **Reset**, dan tombol tambah waktu yang Anda konfigurasi. Stopwatch menampilkan **Hentikan** dan **Lap tunggal** sebagai gantinya |
| [Spin Wheel](./turntable) | Untuk setiap roda yang ditampilkan: **Putar** dan **Reset** |
| [Media Board](./multimedia) | Tombol untuk gambar yang disematkan (tampilkan / sembunyikan), video yang disematkan (putar), dan efek suara yang disematkan (putar) |
| [Permintaan Lagu](./song-request) | **Putar** / **Jeda**, **Hentikan**, **Berikutnya** |

Jika sebuah kontrol memiliki pintasan, pintasan tersebut ditampilkan pada tombolnya.

Fitur yang tidak memiliki kontrol di sini (Chat, Bilah Target Twitch, Notifikasi Donasi, Papan Donasi, Jam, Dinding Emote, Polling Langsung, Giveaway, Bot Obrolan) hanya memiliki sakelar nyala/mati di panel Sakelar cepat.

:::tip
**Nolkan** pada kartu Bilah Target Donasi memerlukan dua klik: klik pertama mengubah tombol menjadi **Ya, nolkan**, dan klik kedua dalam 10 detik akan mengembalikan jumlah ke nol.
:::

:::info
Timer dan roda mengikuti **Mode tampilan** masing-masing fitur: dengan **Timer tunggal** / **Roda putar tunggal** hanya yang sedang dipilih yang ditampilkan; dengan **Multi timer** / **Multi roda putar** hanya yang Anda tambahkan yang ditampilkan. Jika tidak ada, kartu menampilkan **Belum ada timer** / **Belum ada roda putar**.
:::
