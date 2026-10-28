---
sidebar_position: 8.2
---

# Notifikasi ulang tahun penonton

Tambahkan tanggal ulang tahun penonton Anda ke dalam daftar. Saat penonton yang ada di daftar mengobrol di chat selama siaran pada hari ulang tahunnya atau tidak lama setelahnya, notifikasi ulang tahun akan muncul di siaran. Setiap penonton mendapat satu notifikasi per ulang tahun.

## URL Sumber OBS

```
http://127.0.0.1:7272/birthday-alert
```

Salin URL dari bagian atas halaman **Pengaturan Notifikasi ulang tahun penonton** dan tambahkan ke OBS sebagai Browser Source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source).

:::warning
Notifikasi memutar suara. Centang **Kontrol Audio via OBS** di properti browser source, jika tidak suara tidak akan terdengar di siaran.
:::

Nyalakan sakelar di samping **Notifikasi ulang tahun penonton** pada sidebar kiri. Aplikasi hanya terhubung ke chat dan memeriksa ulang tahun selama sakelar ini menyala. Tombol **Uji notifikasi** dan **Putar ulang** tetap berfungsi meskipun sakelar mati.

Halaman ini memiliki tiga tab: **Pengaturan**, **Penonton**, dan **Tampilan**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Cara Kerja

- Penonton di daftar yang mengobrol mulai dari hari ulang tahunnya hingga jumlah hari yang Anda tetapkan setelahnya akan mendapat notifikasi. Tidak ada yang ditampilkan sebelum hari ulang tahun.
- Setiap penonton mendapat satu notifikasi per ulang tahun. Ulang tahun tanggal 12/28 yang diumumkan pada 1/2 tetap dihitung sebagai ulang tahun tahun sebelumnya.
- Notifikasi hanya muncul saat platform tempat penonton mengobrol sedang live. Saat Anda offline, atau saat aplikasi belum bisa memastikan apakah Anda sedang live, mengobrol tidak akan memicu maupun mencatat notifikasi; notifikasi akan muncul saat penonton tersebut mengobrol lagi selama siaran berikutnya.
- Riwayat chat yang dimuat saat chat YouTube terhubung tidak dihitung, jadi memulai ulang aplikasi tidak akan mengumumkan orang yang mengobrol ketika aplikasi ditutup.
- Ulang tahun 2/29 jatuh pada 2/28 di tahun yang bukan kabisat.

## Tab Pengaturan

### Koneksi chat

Ditampilkan saat fitur dinyalakan. Setiap platform menampilkan apakah chat-nya sudah terhubung:

- **Twitch**: jika belum ada kanal yang diatur, baris ini menampilkan **Kanal Twitch belum diatur — hubungkan Twitch dulu** beserta **Buka pengaturan**. Hubungkan Twitch terlebih dahulu: [Pengaturan Twitch](../platforms/twitch).
- **YouTube**: jika chat belum terhubung, baris ini menampilkan **Hubungkan otomatis** dan **Isi manual** (membawa Anda ke kolom URL chat di Pengaturan). Jika Anda menggunakan hubungkan otomatis dan sudah masuk dengan Google, akan ditampilkan **Jika belum terhubung saat sudah live, tekan Hubungkan di halaman Chat**. Lihat [Pengaturan YouTube](../platforms/youtube-settings) dan [Chat](./chat).

Setelah platform terhubung, status **Sedang live**, **Tidak live**, atau **Tidak bisa memastikan sedang live** juga ditampilkan. Notifikasi hanya muncul saat status **Sedang live**.

### Pengaturan

| Kolom | Keterangan |
|-------|-------------|
| **Berapa hari setelah ulang tahun masih dihitung** | 0–30. Default: 7. 0 = hanya pada hari ulang tahun. |
| **Durasi tampil** | Lama setiap notifikasi tampil di layar, dalam detik (1–60). Default: 6. |

### Menguji Notifikasi

Klik **Uji notifikasi** untuk mengirim contoh notifikasi ke OBS, menggunakan penonton uji dan tanggal hari ini. Notifikasi ini hanya tampil di OBS dan tidak pernah dicatat, serta tetap berfungsi meskipun sakelar di sidebar kiri mati. Tombol akan berubah sebentar menjadi **Terkirim**.

## Tab Penonton

### Menambahkan Penonton

Ada dua cara untuk menambahkan penonton:

- **+ Tambah dari yang baru mengobrol**: pilih seseorang yang baru saja mengobrol. Formulir terbuka dengan nama mereka sebagai catatan, akun mereka sudah tertaut, dan tanggal hari ini sebagai tanggal ulang tahun.
- **+ Tambah dengan nama**: ketik sendiri nama akunnya.

**Yang baru mengobrol** berisi daftar penonton yang mengobrol saat chat terhubung (hingga 200 orang, disimpan selama 30 hari). Klik **Muat ulang** untuk memperbaruinya. Penonton yang sudah ada di daftar menampilkan **Sudah ditambahkan** dan tidak dapat dipilih lagi. Kotak pencarian akan muncul jika daftarnya panjang.

Isi formulir:

1. **Catatan / panggilan**: nama yang Anda gunakan untuk mengenal mereka, misalnya `Alex`. Opsional.
2. **Ulang tahun**: bulan dan tanggal (tanpa tahun).
3. **Akun**: minimal satu akun. Satu penonton dapat memiliki beberapa akun, misalnya Twitch dan YouTube sekaligus.
   - **＋ Ketik akun**: pilih **Twitch** atau **YouTube** lalu ketik namanya. Untuk Twitch, gunakan nama login atau nama tampilan; untuk YouTube, gunakan @handle atau nama channel.
   - **＋ Dari yang baru mengobrol**: tambahkan akun yang sudah tertaut.
   - **✕** menghapus sebuah akun.
4. Klik **Simpan** (atau tekan Enter). **Batal** (atau Esc) menutup formulir.

### Nama yang Diketik dan Penautan

Nama yang diketik akan ditautkan ke akun saat penonton tersebut pertama kali mengobrol. Pencocokan mengabaikan huruf besar/kecil dan tanda `@` di awal. Nama bisa sama dengan orang lain, jadi memilih dari daftar yang baru mengobrol lebih aman.

Untuk YouTube, ketik @handle: kecuali **Tampilkan nama penonton alih-alih @handle** dinyalakan di halaman Chat, nama channel mungkin tidak akan pernah cocok.

Setiap akun di daftar menampilkan:

- **Tertaut: [nama]**: akun sudah tertaut.
- **Menunggu “[nama]” mengobrol**: nama yang diketik dan belum tertaut.
- **Baru ditautkan**: aplikasi menautkan akun ini secara otomatis saat penonton mengobrol. Periksa apakah benar orang tersebut, lalu klik **✓ Sudah benar**, atau klik **Lepas tautan** jika bukan.
- **Akun ini sudah ada di “[nama]”**: nama yang diketik cocok dengan akun milik penonton lain di daftar. Satu akun hanya bisa dimiliki oleh satu penonton, jadi ubah nama di sini atau hapus salah satu dari keduanya.

**Lepas tautan** membuka sebuah kotak di bawah akun. Setelah tautan dilepas, nama di kotak tersebut yang akan dicocokkan (Anda dapat mengubahnya), dan akun akan tertaut kembali saat penonton tersebut mengobrol lagi.

### Daftar

Penonton yang notifikasi ulang tahunnya sedang berlaku ditampilkan paling atas, diikuti ulang tahun berikutnya yang akan datang. Kotak pencarian muncul jika ada lebih dari 5 penonton. Setiap penonton menampilkan:

- **Menunggu chat**: sedang dalam periode ulang tahunnya; notifikasi akan tampil begitu mereka mengobrol.
- **🎂 Ditampilkan [tanggal]**: notifikasi untuk ulang tahun ini sudah ditampilkan.
- **▶ Putar ulang**: tampilkan lagi notifikasi penonton ini di OBS. Dapat digunakan kapan saja dan tidak pernah dicatat.
- **Edit**: ubah catatan, tanggal ulang tahun, atau akun. Mengubah tanggal ulang tahun memungkinkan notifikasi muncul lagi untuk tanggal yang baru.
- **Hapus**: klik **Hapus**, lalu **Konfirmasi hapus**.

## Tab Tampilan

### Pratinjau

Pratinjau menggunakan halaman yang sama dengan sumber OBS. Gunakan pemilih warna di samping **Pratinjau** untuk mengubah latar pratinjau, dan klik **▶ Putar ulang animasi** untuk memutar lagi animasi notifikasi.

### Gaya seragam / Terpisah per platform

- **Gaya seragam**: Twitch dan YouTube menggunakan gaya notifikasi yang sama.
- **Terpisah per platform**: setiap platform memiliki gayanya sendiri. Pilih **Twitch** atau **YouTube** dengan tombol di bawahnya dan edit pengaturannya. Saat pertama kali beralih, platform yang belum Anda kustomisasi akan menyalin gaya seragam saat ini, masing-masing dengan warna bar hitung mundurnya sendiri.

**Kembalikan default** memulihkan gaya default untuk gaya yang sedang Anda edit.

### Gambar

- **Pilih gambar**: pilih gambar dari pengelola aset. Tanpa gambar, emoji kue yang ditampilkan. **Bersihkan** menghapus gambar.
- **Ukuran gambar**: 1–400 px.
- **Posisi gambar**: **Kiri**, **Kanan**, **Atas**, atau **Bawah**.

### Efek suara

Pilih suara bawaan: **Tanpa**, **Lonceng** (default), **Koin**, **Bel**, **Pop**, **Fanfare**. Klik **▶** untuk mendengarkan. Klik **Pilih efek suara** untuk menggunakan file suara Anda sendiri dari pengelola aset.

### Teks kustom

Tulis kalimat yang ditampilkan pada notifikasi. Biarkan kosong untuk menggunakan teks default: `Selamat ulang tahun, {name}!` Anda dapat menggunakan:

| Placeholder | Diganti dengan |
|-------------|---------------|
| `{name}` | Nama penonton di chat |
| `{label}` | Catatan / panggilan Anda (nama chat jika catatan kosong) |
| `{birthday}` | Tanggal ulang tahun, misalnya `10/20` |
| `{MM}` `{DD}` | Bulan dan tanggal dua digit, untuk menyusun format sendiri, misalnya `{DD}/{MM}` |
| `{date}` | Tanggal ulang tahun dalam bahasa overlay |
| `{platform}` | Nama platform |

### Teks dan Warna

- **Teks**: atur font, ukuran, dan warna untuk **Teks kustom** dan **Nama penonton**.
- **Warna**: **Latar**, **Bayangan**, dan **Bar hitung mundur**.

### CSS Kustom

Buka **CSS Kustom** untuk mengedit CSS dari gaya yang sedang Anda edit (seragam atau platform yang dipilih). **Kembalikan default** memulihkan CSS template, dan **Kelola aset** membuka pengelola aset. Tema Steam Workshop juga dapat diterapkan di sini. Selama tema diterapkan, CSS hanya dapat dibaca. Lihat [Gaya tema](./themes).

:::info Versi Uji Coba
- Maksimal 3 penonton di daftar. Jika daftar berisi lebih banyak (misalnya dari data simpanan versi penuh), penonton tambahan ditampilkan terkunci 🔒: mereka tidak pernah memicu notifikasi dan tidak dapat diedit atau diputar ulang.
- CSS Kustom hanya tersedia di versi penuh.
- Notifikasi menampilkan watermark di OBS.

Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison).
:::

## Pertanyaan Umum

**Q: Tidak ada suara di siaran?**
Pastikan **Kontrol Audio via OBS** sudah dicentang di properti browser source dan sumber tersebut tidak dibisukan di mixer OBS. Periksa juga bahwa **Efek suara** tidak diatur ke **Tanpa**.

**Q: Penonton mengobrol pada hari ulang tahunnya tetapi notifikasi tidak muncul.**
Pastikan sakelar di sidebar kiri menyala, **Koneksi chat** di tab **Pengaturan** menampilkan **Sedang live** untuk platform tersebut, dan akun di daftar menampilkan **Tertaut** atau nama yang diketik cocok dengan nama chat mereka. Jika notifikasi sudah tampil saat OBS tidak terbuka, gunakan **▶ Putar ulang**.

**Q: Saya menambahkan sumber OBS terlambat. Apakah notifikasi sebelumnya akan diputar ulang?**
Tidak. Sumber yang baru dibuka hanya menampilkan notifikasi yang masuk setelah terhubung. Gunakan **▶ Putar ulang** di tab **Penonton** untuk menampilkannya lagi.
