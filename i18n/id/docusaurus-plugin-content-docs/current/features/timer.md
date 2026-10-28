---
sidebar_position: 11
---

# Timer

Tampilkan timer hitung mundur atau stopwatch di siaran. Hitung mundur dapat bertambah atau berkurang waktunya melalui tombol yang Anda klik, atau secara otomatis dari follow, langganan, Bits Twitch, dan donasi.

Halaman ini memiliki dua tab: **Pengaturan** dan **Buat timer**. Buat timer terlebih dahulu, lalu kendalikan dari **Pengaturan**.

## Langkah 1: Buat Timer

1. Buka **Timer** di sidebar kiri dan beralih ke tab **Buat timer**
2. Di bawah **Timer saya**, klik **Tambah**. Timer hitung mundur baru dibuat dengan waktu awal 10 menit dan tiga opsi waktu (+30 detik, +1 menit, +5 menit)
3. Klik kartu timer untuk mengeditnya. Klik **✕** pada kartu untuk menghapus timer tersebut

**Pratinjau** menunjukkan tampilan timer yang dipilih. Gunakan kotak warna di sampingnya untuk mengubah latar pratinjau.

Di bawah pratinjau, beralih antara **Pengaturan timer** dan **Tampilan**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Langkah 2: Pengaturan timer

### Mode timer

- **Hitung mundur**: menghitung mundur dari waktu awal
- **Stopwatch**: menghitung naik dari 0 dan dapat mencatat lap. Mode stopwatch tidak memiliki waktu awal, waktu peringatan, suara akhir, maupun opsi waktu

### Nama

Nama yang ditampilkan di daftar timer, dropdown, dan Alat cepat.

### Waktu awal

Waktu awal hitung mundur, dalam jam, menit, dan detik. Total dalam detik ditampilkan di sampingnya.

### Waktu peringatan

Saat sisa waktu mencapai nilai ini, teks timer berubah ke warna **Peringatan** yang diatur di **Tampilan**. Biarkan 0 untuk tanpa peringatan.

### Efek suara akhir hitung mundur

Suara yang diputar saat hitung mundur mencapai 0. Pilih **Tanpa** atau salah satu suara bawaan (**Lonceng**, **Koin**, **Bel**, **Pop**, **Fanfare**). Klik **▶** untuk mengujinya. Untuk menggunakan file Anda sendiri, klik **Pilih efek suara** dan pilih dari pengelola aset.

Suara diputar oleh browser source OBS, jadi nyalakan **Kontrol Audio via OBS** untuk sumber timer. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source).

### Opsi waktu

Opsi waktu adalah tombol tambah/kurangi waktu untuk hitung mundur. Setiap timer dapat memiliki hingga 20 opsi.

Untuk menambahkan, isi formulir **Tambah opsi waktu**:

1. **Sumber pemicu**: pilih apa yang menerapkan opsi ini secara otomatis
   - **Manual**: hanya diterapkan saat Anda mengklik tombol
   - **Follow**: diterapkan pada setiap follow Twitch baru
   - **Twitch Bits**: diterapkan pada cheer Bits
   - **Langganan baru Twitch**: diterapkan pada langganan Twitch
   - **Donasi**: diterapkan pada donasi. Gunakan **Platform donasi** untuk memilih mana dari **YouTube**, **O'Pay**, **ECPay**, dan **PayPal** yang dihitung
2. Untuk **Twitch Bits** dan **Donasi**, atur juga:
   - **Ambang pemicu**: jumlah Bits atau donasi untuk satu langkah
   - **Metode konversi**: **Pemicu kelipatan bulat** atau **Konversi proporsional** (lihat contoh di bawah)
3. **Tambah waktu**: pilih **＋** atau **－**, lalu atur jam, menit, dan detik
4. Klik **Tambah**

Untuk mengubah opsi, klik **Edit**, ubah formulirnya, lalu klik **Simpan** (atau **Batal**). Klik **✕** untuk menghapusnya. Opsi dengan pemicu otomatis ditandai dengan 🔗 dan nama pemicunya.

**Contoh konversi**: Ambang pemicu 100 bits, Tambah waktu +1 menit, dan seorang penonton melakukan cheer 250 bits:

- **Pemicu kelipatan bulat**: hanya kelipatan penuh dari ambang yang dihitung → 2 × 1 menit = **+2 menit**
- **Konversi proporsional**: 250 ÷ 100 × 1 menit → **+2 menit 30 detik**

Untuk donasi, jumlahnya dikonversi ke mata uang yang dipilih di Pengaturan aplikasi sebelum dibandingkan dengan ambang.

:::note
- Pemicu otomatis hanya memengaruhi timer hitung mundur
- Opsi waktu dengan pemicu otomatis tetap muncul sebagai tombol di panel kontrol, jadi Anda juga dapat mengkliknya secara manual
- **Langganan baru Twitch** diterapkan sekali per event langganan: hadiah beberapa langganan menerapkannya sekali. Langganan ulang hanya menerapkannya jika **Hitung langganan ulang** aktif di [Bilah Target Twitch](./goal)
:::

### Pintasan kontrol

Atur pintasan keyboard untuk timer ini:

- **Mulai / Jeda**
- **Pintasan lap** (khusus stopwatch)
- **Pintasan reset**

Lihat juga [Pintasan](./hotkeys).

## Langkah 3: Tampilan

| Pengaturan | Keterangan |
|---------|-------------|
| **Font** | Font teks waktu |
| **Ukuran font** | 12–300 px |
| **Warna teks** | **Normal**: **Warna solid** atau **Gradien** (dua warna dan **Sudut**). **Peringatan** (khusus hitung mundur): warna yang digunakan setelah waktu peringatan tercapai |
| **Warna latar** | Latar di belakang waktu |
| **Bingkai** | Warna garis tepi, **Transparansi**, dan **Ketebalan** (0–20 px) |
| **Bayangan** | Warna bayangan, **Transparansi**, **Blur**, dan offset **X** / **Y** |

## Langkah 4: Pilih Mode Tampilan dan Tambahkan Sumber OBS

Beralih ke tab **Pengaturan**. Di bawah **Panel kontrol**, pilih **Mode tampilan**:

| Mode | Keterangan | URL Sumber OBS |
|------|-------------|----------------|
| **Timer tunggal** | OBS hanya menampilkan timer yang dipilih. Ganti timer dengan dropdown **Timer saat ini** | `http://127.0.0.1:7272/timer` |
| **Multi timer** | Setiap timer memiliki URL sendiri dan dapat ditambahkan ke OBS secara terpisah | `http://127.0.0.1:7272/timer/<timer ID>` |

Dalam mode **Multi timer**, pilih timer dari **Tambah ke tampilan**. Setiap timer yang ditambahkan mendapat kartunya sendiri dengan **URL sumber OBS**-nya. Klik **Salin** untuk menyalinnya. Klik **✕** pada kartu untuk menghapusnya dari tampilan.

Tambahkan URL yang disalin ke OBS sebagai browser source. Lihat [Cara Menambahkan Sumber di OBS](../getting-started/obs-source).

:::tip
Nyalakan juga sakelar di samping **Timer** pada sidebar kiri (**Aktifkan tampilan OBS**). Selama sakelar mati, timer disembunyikan di OBS.
:::

## Langkah 5: Kendalikan Timer

Setiap kartu timer di tab **Pengaturan** memiliki:

- **Mulai** / **Jeda**: untuk stopwatch, tombol jeda bertuliskan **Hentikan**. Hitung mundur yang sudah mencapai 0 tidak dapat dimulai sampai Anda meresetnya atau menambah waktu
- **Lap** (khusus stopwatch): mencatat lap saat berjalan. Lap ditampilkan di bawah kartu beserta waktu dan selisihnya dari lap sebelumnya
- **Reset**: menghentikan timer dan mengembalikannya ke waktu awal (0 untuk stopwatch), serta menghapus lap
- **Tambah waktu** (khusus hitung mundur): satu tombol untuk setiap opsi waktu

Waktu yang berjalan hanya ditampilkan di overlay OBS, tidak di halaman pengaturan. Anda juga dapat mengendalikan timer dari jendela [Alat cepat](./quick-tools), yang juga menampilkan waktu saat ini.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Batasan Versi Uji Coba
Anda hanya dapat membuat **1** timer. Lihat [Perbandingan Versi Uji Coba / Versi Penuh](../getting-started/trial-comparison) untuk detailnya.
:::
