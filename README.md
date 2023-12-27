# Vitalitas Medical
  Website Vitalitas Medical merupakan website yang difungsikan untuk proses penjadwalan pasien dan konsultasi secara online. 

## Instalasi
Jika Anda baru di project ini, silakan ikuti langkah-langkah instalasi berikut:
1. Clone project dari github ke local
    ```bash
    git clone https://github.com/anggernuramin/vitalitas-medical-vocasia-fe4.git
    ```

2. Install Node.js 
    [Node.js](https://nodejs.org/en/download)

3. Pasang Dependency
    ```bash
    npm install
    ```
4. Jalankan Project
    ```bash
    npm run dev
    ```

## Cara Berkontribusi
### Peringatan Penting
Jangan push langsung ke branch "main" (branch haram). 
Sebagai gantinya kita akan collaborasi di branch "develop"

### Ikuti langkah-langkah berikut untuk berkontribusi pada project ini.

1. Cara Branching
- Jika Anda ingin melakukan perbaikan atau pembaruan:
```bash
git checkout -b "improvement/apa-yang-di-improve"
```
- Jika Anda ingin melakukan Bug Fixing
```bash
git checkout -b "bugfix/apa-yang-di-fix"
```
- Jika Anda ingin menambahkan fitur
```bash
git checkout -b "feature/fitur-apa-yang-di-buat"
```
2. Cara Commit
- Jika Anda ingin melakukan perbaikan atau pembaruan:
```bash
git commit -m "improvement: apa yang di improve"
```
- Jika Anda ingin melakukan Bug Fixing
```bash
git commit -m "bugfix: apa yang di fix"
```
- Jika Anda ingin menambahkan fitur
```bash
git commit -m "feature: fitur apa yang di buat"
```
3. Mendapatkan Perubahan Terbaru dari Branch "develop"

   Jika seorang teman telah melakukan push ke branch "develop" dan Anda sedang mengerjakan sesuatu di branch lokal yang berbeda, 
   ikuti langkah-langkah ini untuk mendapatkan perubahan terbaru tanpa kehilangan kode yang Anda kerjakan di branch lokal Anda.

- Stash Pekerjaan Lokal Anda
  simpan perubahan kerja Anda di branch lokal menggunakan perintah `git stash`.
  Ini akan menyimpan perubahan Anda dan membersihkan working directory.
   ```bash
   git stash
   ```
- Pull Perubahan dari Branch "develop":
  Dapatkan perubahan terbaru dari branch "develop".
  Jika teman Anda sudah melakukan push, ini akan mengambil perubahan terbaru.
   ```bash
   git pull origin develop
   ```
- Kembalikan Pekerjaan yang Tersimpan (Stashed):
  Setelah Anda mendapatkan perubahan terbaru dari branch "develop",
  kembalikan perubahan kerja yang Anda simpan sebelumnya.
  ```bash
   git stash pop
  ```
  Ini akan menerapkan perubahan Anda ke working directory kembali.

4. Cara Mengatasi Konflik
- Pindah dulu ke Branch develop
  ```bash
   git checkout develop
  ```
- Kemudian pull perubahan terbaru dari branch develop
   ```bash
   git pull
  ```
- Kemudian Pindah lagi ke branch yang sedang kamu kerjakan
  ```bash
   git checkout <branch mu>
  ```
- Selanjutnya kita perlu merge perubahan terbaru dari branch develop
  ```bash
   git merge origin develop
  ```


