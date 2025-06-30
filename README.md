# privator.id Landing Page

Landing page modern, responsif, dan SEO friendly untuk privator.id menggunakan Next.js, TailwindCSS, dan React.

![Next.js](https://img.shields.io/badge/Next.js-15-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-blue) ![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)

## Demo

Akses demo (jika sudah dideploy):  
<https://privator-id.vercel.app>  
*(Ganti link sesuai domain deploy Anda)*

## Fitur
- Hero section dengan gambar proporsional & animasi hover
- Video training (placeholder jika belum ada video)
- Price range Rp.25.000 - Rp.100.000
- Testimoni peserta
- Call to Action
- Footer dengan identitas & link sosial media (ikon interaktif)
- Fungsionalitas login, signup, profile (dummy)
- Form pendaftaran: kirim data ke WhatsApp, email, lynk.id, dan tampilkan invoice
- SEO friendly, ringan, dan responsif

## Struktur Folder
```
public/
  images/privator.jpeg   # Gambar utama hero
  videos/                # (Opsional) Video training
src/
  components/            # Komponen modular (Header, Hero, Footer, dsb)
  data/                  # Data dummy (users, prices, testimonials)
  pages/                 # Halaman Next.js (index, login, signup, profile, daftar)
  styles/globals.css     # Global TailwindCSS
```

## Instalasi & Menjalankan
```bash
npm install
npm run dev
```
Akses di browser: [http://localhost:3000](http://localhost:3000)

## Upload Gambar/Video
- Hero: upload gambar ke `public/images/privator.jpeg`
- Video: upload ke `public/videos/training.mp4` (atau biarkan kosong untuk placeholder)

## Troubleshooting
- **Gambar tidak muncul:** Pastikan nama file dan ekstensi benar, lalu restart server.
- **Error 404 pada video:** Upload file atau biarkan kosong untuk placeholder.
- **Build error di Vercel:** Pastikan setiap file page TypeScript mengandung ekspor (misal: `export {}` di akhir file).
- **Animasi tidak jalan:** Pastikan TailwindCSS sudah terpasang dan tidak ada error di console.

## Warna Dasar
- Biru (`primary` di Tailwind config)

---

Optimasi ringan, responsif, dan SEO friendly.  
Untuk pertanyaan lebih lanjut, hubungi admin privator.id. 