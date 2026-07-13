---
sidebar_position: 2
---

# Cara Menambahkan Sumber di OBS

Sebagian besar fitur Stream Toolkit memerlukan penambahan "Browser Source" di OBS agar dapat ditampilkan pada siaran langsung.

## Langkah 1: Salin URL Fitur

Di Stream Toolkit, setiap halaman fitur menampilkan URL lokal yang sesuai, dengan format:

```
http://127.0.0.1:7272/feature-name
```

Salin URL fitur yang ingin Anda tambahkan.

## Langkah 2: Tambahkan Browser Source di OBS

1. Di bagian **Sumber** pada OBS, klik tombol **+** di bagian bawah
2. Pilih **Browser**
3. Pilih **Buat baru**, masukkan nama sumber (misalnya "Bilah Target Donasi"), dan klik **OK**
4. Tempel URL yang disalin dari Langkah 1 ke dalam kolom **URL**
5. Sesuaikan **Lebar** dan **Tinggi** sesuai kebutuhan
6. Klik **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Fitur-fitur berikut memerlukan mencentang "Kontrol Audio via OBS"

Termasuk output audio; Anda harus mencentang **Kontrol Audio via OBS** pada pengaturan browser source agar suara dapat muncul dengan benar di siaran langsung:

- **Media Board** — Video, Efek suara
- **Notifikasi Donasi**
- **Permintaan Lagu**

Cara mencentang:
1. Di daftar sumber OBS, klik kanan pada browser source tersebut
2. Pilih **Properti**
3. Temukan **Kontrol Audio via OBS** dan centang
4. Klik **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Jika masih tidak ada suara setelah dicentang, pastikan sumber tersebut tidak dibisukan di mixer audio OBS.
:::
