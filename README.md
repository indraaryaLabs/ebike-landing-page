# eBike Landing Page

Sebuah prototipe landing page premium untuk produk e-bike yang futuristik dan ramah lingkungan. Didesain dengan gaya modern, palet warna gelap (dark mode), aksen hijau neon/lime, serta dilengkapi dengan interaktivitas halus melalui Tailwind CSS dan custom JavaScript.

## 📁 Struktur Direktori

Berikut adalah struktur file dan folder dari aplikasi web ini setelah dirapikan:

```
ebike-landing-page/
│
├── index.html          # File HTML utama (struktur web dan konten)
├── assets/             # Folder gambar-gambar statis (hero, fitur, dll)
│   ├── feat1_battery.png
│   ├── feat2_pedal.png
│   ├── feat3_weather.png
│   ├── hero_ebike.png
│   └── vid_thumb.png
├── css/                # Folder stylesheet (styling khusus di luar Tailwind)
│   └── style.css
├── js/                 # Folder JavaScript fungsionalitas UI
│   └── script.js
└── README.md           # File dokumentasi aplikasi (file ini)
```

## 🛠️ Teknologi yang Digunakan
1. **HTML5**: Struktur semantik dan kontainer komponen.
2. **Tailwind CSS (via CDN)**: Utility-first CSS untuk *styling*, warna kustom, konfigurasi animasi, dan responsivitas web dengan cepat. Konfigurasi diletakkan langsung di `<head>` dokumen.
3. **Vanilla JavaScript**: Membuat navigasi *mobile menu* yang interaktif serta membangun animasi scroll (menggunakan `IntersectionObserver`).
4. **Google Fonts**: Menggunakan '*Outfit*' untuk typography _Heading_ dan '*Inter*' untuk tipografi teks _body_.
5. **Phosphor Icons**: Ikonografi minimalis dan bersih di seluruh halaman.

## ✨ Fitur Utama
1. **Responsive Design**: Website otomatis menyesuaikan ke layar seluler, tablet, hingga desktop lebar (Mobile-First approach via Tailwind).
2. **Sticky Glassmorphism Navbar**: Bilah navigasi tetap berada di atas saat pengguna melewatinya dengan latar transparan yang elegan.
3. **Reveal on Scroll**: Elemen-elemen akan muncul melayang dari samping atau dari bawah (-up) secara estetik ketika bagian tersebut masuk ke dalam viewport (IntersectionObserver).
4. **Mobile Navigation Menu**: Dilengkapi *hamburger menu* yang tersembunyi halus di mobile.
5. **Image Loading**: Aset lokal tersusun rapi dengan gambar responsif beserta efek hover.

## 🚀 Cara Menjalankan Secara Lokal
Cukup jalankan server lokal pada folder proyek ini, misalnya menggunakan `npx serve`:
```bash
npx serve -p 8080
```
Lalu buka *link* yang diberikan pada browser (contoh: `http://localhost:8080`).

## ☁️ Deploy (misal ke Vercel)
Aplikasi ini sudah sepenuhnya diotimalkan sebagai halaman statik, menjadikannya sangat mudah untuk di-deploy ke Vercel atau Github Pages.

Jika folder proyek sudah tersambung dengan akun Vercel Anda, cukup jalankan:
```bash
npx vercel --prod
```
Pastikan `vercel login` sudah dilakukan sebelumnya.
