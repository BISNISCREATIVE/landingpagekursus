# privator.id Landing Page

Landing page modern, responsif, dan SEO friendly untuk privator.id menggunakan Next.js, TailwindCSS, dan React.

## Fitur
- Hero section dengan gambar proporsional
- Video training (placeholder jika belum ada video)
- Price range Rp.25.000 - Rp.100.000
- Testimoni peserta
- Call to Action
- Footer dengan identitas & link sosial media (ikon interaktif)
- Fungsionalitas login, signup, profile (dummy)
- Form pendaftaran: kirim data ke WhatsApp, email, lynk.id, dan tampilkan invoice
- Animasi hover pada gambar hero

## Struktur Folder
```
public/
  images/privator.jpeg   # Gambar utama hero
  videos/               # (Opsional) Video training
src/
  components/           # Komponen modular (Header, Hero, Footer, dsb)
  data/                 # Data dummy (users, prices, testimonials)
  pages/                # Halaman Next.js (index, login, signup, profile, daftar)
  styles/globals.css    # Global TailwindCSS
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
- Jika gambar tidak muncul, pastikan nama file dan ekstensi benar, lalu restart server.
- Jika error 404 pada video, upload file atau biarkan kosong untuk placeholder.
- Untuk efek animasi, pastikan TailwindCSS sudah terpasang dengan benar.

## Warna Dasar
- Biru (`primary` di Tailwind config)

---

Optimasi ringan, responsif, dan SEO friendly. Untuk pertanyaan lebih lanjut, hubungi admin privator.id. 