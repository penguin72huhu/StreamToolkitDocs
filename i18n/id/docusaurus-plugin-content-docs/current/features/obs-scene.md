---
sidebar_position: 2
---

# Kontrol Scene OBS

**Kontrol Scene OBS** memungkinkan Anda mengganti scene dan menampilkan/menyembunyikan sumber di software streaming Anda dengan pintasan global atau dari [Alat cepat](./quick-tools). Fitur ini mendukung **OBS Studio**, **Streamlabs**, dan **Meld Studio**.

Fitur ini tidak memiliki overlay, jadi tidak ada yang perlu ditambahkan di OBS sebagai browser source.

:::info
Pintasan hanya berfungsi selama sakelar **Kontrol Scene OBS** di sidebar menyala. Pintasan tetap berfungsi meskipun jendela Stream Toolkit diperkecil ke tray.
:::

Halaman pengaturan memiliki dua tab: **Koneksi** dan **Pintasan**.

## Tab Koneksi

### Langkah 1: Pilih Software Anda

Di bawah **Software**, pilih **OBS Studio**, **Streamlabs**, atau **Meld Studio**. Pilihan ini hanya dapat diubah saat tidak terhubung.

Setiap software menyimpan pintasan dan daftar scene-nya sendiri, jadi berganti software akan menampilkan pengaturan milik software tersebut.

### Langkah 2: Siapkan Software

#### OBS Studio

1. Di OBS, buka **Tools → WebSocket Server Settings**
2. Centang **Enable WebSocket server**
3. Klik **Show Connect Info** untuk melihat kata sandi
4. Di Stream Toolkit, isi **Host** (default `localhost`), **Port** (default `4455`), dan **Kata sandi**

#### Streamlabs / Meld Studio

Tidak perlu pengaturan — cukup jalankan programnya.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Langkah 3: Hubungkan

Klik **Hubungkan**. **Status** berubah menjadi **Terhubung** (untuk OBS dan Meld, nomor versinya juga ditampilkan). Klik **Putuskan** untuk memutuskan koneksi.

**Hubungkan saat mulai** (aktif secara default): terhubung secara otomatis saat Stream Toolkit dimulai dan saat Anda menyalakan sakelar fitur. Mematikan sakelar fitur akan memutuskan koneksi.

### Scene

Bagian **Scene** menampilkan daftar scene Anda dan jumlah sumber di masing-masing scene; scene saat ini disorot. Klik **Muat ulang** untuk mengambil daftar terbaru setelah mengubah scene di software Anda.

Saat tidak terhubung, daftar yang terakhir diambil tetap ditampilkan.

## Tab Pintasan

Untuk mengatur pintasan, klik **Klik untuk atur pintasan**, lalu tekan kombinasi tombol. Tekan `Esc` untuk membatalkan. Jika kombinasi tersebut sudah digunakan oleh fitur lain, **Pintasan bentrok** ditampilkan dan pintasan tidak disimpan. Klik **✕** di samping pintasan untuk menghapusnya.

### Ganti Scene

1. Klik **Tambah**
2. Atur pintasan
3. Pilih scene tujuan

Klik **✕** di ujung baris untuk menghapusnya.

### Alihkan Sumber

Satu pintasan dapat mengontrol beberapa sumber dalam scene yang sama sekaligus.

1. Klik **Tambah**
2. Atur pintasan
3. Masukkan **Nama** (opsional — digunakan sebagai label tombol di Alat cepat; nama scene digunakan jika kosong)
4. Pilih scene tempat sumber-sumber tersebut berada
5. Klik **Tambah sumber**, pilih sumber, lalu pilih **Tampilkan**, **Sembunyikan**, atau **Alihkan** (default **Alihkan**)
6. Ulangi langkah 5 untuk sumber lainnya

Mengubah scene sebuah entri akan mengosongkan daftar sumbernya.

:::tip
Scene atau sumber yang sudah tidak ada lagi di software Anda ditandai dengan warna merah. Pilih lagi dari dropdown.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Menggunakannya dari Alat cepat

Saat fitur menyala dan setidaknya ada satu entri pintasan, [Alat cepat](./quick-tools) menampilkan kartu **Kontrol Scene OBS** dengan tombol untuk setiap entri. Mengklik tombol sama dengan menekan pintasannya.

## Pesan Galat

Saat pintasan atau tombol digunakan, pesan-pesan berikut dapat muncul:

| Pesan | Arti |
|---------|---------|
| **Tidak terhubung ke OBS** | Tidak terhubung — buka tab **Koneksi** dan klik **Hubungkan** |
| **Scene “…” tidak ditemukan** | Scene telah diganti namanya atau dihapus di software Anda |
| **Sumber tidak ditemukan: …** | Sumber-sumber tersebut sudah tidak ada lagi di scene |

## Batasan Versi Uji Coba

:::info
Versi uji coba hanya mengizinkan total **1** entri pintasan (Ganti Scene dan Alihkan Sumber digabungkan). Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::

## Pertanyaan Umum

**Q: Muncul pesan tidak dapat menjangkau OBS, dan tidak mencoba lagi setelah saya membuka OBS.**
Jika upaya koneksi pertama gagal (misalnya OBS belum berjalan), Stream Toolkit tidak terus mencoba ulang. Buka software streaming Anda, lalu klik **Hubungkan**. Setelah koneksi pernah berhasil, aplikasi akan tersambung kembali secara otomatis jika koneksi terputus.
