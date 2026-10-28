---
sidebar_position: 20
---

# Gaya tema

Bagikan dan unduh tampilan overlay melalui Steam Workshop. Sebuah tema dapat mencakup tampilan fitur-fitur berikut:

- [Chat](./chat)
- [Bilah Target Donasi](./donate)
- [Notifikasi Donasi](./donate-alert)
- [Notifikasi pengikut baru](./fan-alert)
- [Notifikasi ulang tahun penonton](./birthday-alert)
- [Papan Donasi](./sponsors)
- [Polling Langsung](./vote)
- [Jam](./clock)
- [Bilah Target Twitch](./goal): **Target follower**, **Target langganan**, **Target Bits**

Buka dari **🎨 Gaya tema** di bagian bawah menu kiri. Halaman ini memiliki dua tab: **Tema saya** dan **Tema yang diunduh**. Steam harus sedang berjalan.

## Mencari dan Menerapkan Tema di Halaman Fitur

Di setiap fitur yang tercantum di atas, buka bagian **CSS Kustom** lalu klik **Jelajahi tema Workshop**:

1. **Jelajahi tema** menampilkan tema Workshop untuk fitur ini. Ketik di **Cari nama tema** dan klik **Cari**, atau gunakan **Halaman sebelumnya** / **Halaman berikutnya** untuk berpindah halaman
2. Klik thumbnail untuk melihat gambar pratinjau
3. Klik **Terapkan**. Tema akan dilanggan, diunduh, dan diterapkan ke fitur ini
4. **Sudah dilanggan** menampilkan tema yang sudah Anda langgan untuk fitur ini

Selama tema diterapkan, halaman menampilkan **Tema yang digunakan: (nama)** dan tombol **Pulihkan**, dan CSS kustom hanya dapat dibaca. Klik **Pulihkan** untuk kembali ke pengaturan Anda sendiri.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Tema yang diunduh

Menampilkan semua tema yang Anda langgan di Steam. Tema yang dilanggan tidak diterapkan secara otomatis — gunakan tombol pada kartu. OBS langsung diperbarui.

Setiap kartu menampilkan pratinjau, nama, **Digunakan** jika ada fitur yang menggunakannya, dan **Termasuk:** fitur-fitur yang dicakup tema (✓ menandai fitur yang sedang menggunakannya).

| Tombol | Fungsi |
|------|------|
| **Terapkan semua** | Menerapkan tema ke setiap fitur yang dicakupnya. Jika sebuah fitur sedang menggunakan tema lain, Anda akan diminta mengonfirmasi penggantiannya |
| **Pilih…** | Pilih fitur mana yang akan diterapkan |
| **Pulihkan semua** | Mengembalikan setiap fitur yang menggunakan tema ini ke pengaturan Anda sendiri sebelum tema diterapkan |
| **Pulihkan…** | Pilih fitur mana yang akan dipulihkan |
| **Berhenti berlangganan** | Berhenti berlangganan. Jika tema sedang digunakan, fitur-fitur tersebut dipulihkan terlebih dahulu |

Setelah diterapkan, pesan di bagian bawah menampilkan apa yang berubah selama 30 detik, dengan tombol **Pulihkan** untuk membatalkan.

:::note
- Pemulihan kembali ke pengaturan Anda sendiri, bukan ke tema yang telah diganti
- Perubahan tampilan yang dibuat selama tema diterapkan tidak disimpan setelah pemulihan
:::

- **Mengunduh…**: biarkan Steam tetap berjalan; Anda dapat menerapkannya setelah unduhan selesai
- **Tema yang dihapus (#id)**: tema tersebut sudah tidak ada di langganan Steam Anda, tetapi beberapa fitur masih menggunakannya. Gambar mungkin tidak tampil, jadi disarankan untuk memulihkannya
- Jika Steam tidak berjalan, jalankan Steam dan klik **Muat ulang**

{/* TODO: 截圖 — 下載的主題 */}

## Tema saya: Mengunggah Tema

1. Atur tampilan fitur yang ingin Anda bagikan di halamannya masing-masing
2. Di **Tema saya**, klik **Unggah tema baru**
3. Isi:
   - **Nama tema** (wajib)
   - **Deskripsi tema**
   - **Fitur yang disertakan** (minimal satu)
   - **Gambar pratinjau** (wajib, maksimal 1MB): klik **Pilih gambar pratinjau**
4. Centang kotak yang menyatakan bahwa Anda berhak mendistribusikan setiap gambar, font, dan suara di dalam tema. Aset yang hanya berlisensi untuk penggunaan pribadi atau non-komersial tidak boleh diunggah
5. Klik **Unggah tema**

Jika Anda melihat "Setujui dulu ketentuan Steam Workshop di browser agar tema Anda dipublikasikan", setujui ketentuan tersebut agar tema dapat dipublikasikan.

### Mengelola Tema yang Anda Unggah

Setiap tema yang diunggah memiliki:

- **Unduh dan terapkan**: menerapkan tema yang dipublikasikan ke fitur Anda. Ini akan menimpa pengaturan tampilan Anda saat ini
- **Edit**: mengunggah ulang pengaturan tampilan Anda saat ini ke tema yang sama. Jika Anda belum mengunduh tema tersebut, gambar pratinjau yang ada tidak akan terbawa dan Anda perlu memilih yang baru
- **Kelola di Steam**: membuka tema di Steam

:::info Batasan Versi Uji Coba
Gaya tema (Steam Workshop) hanya tersedia di versi penuh. Di versi uji coba, **🎨 Gaya tema** tidak dapat dibuka dan tema tidak dapat diterapkan.

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::
