# ASSETS.md — Juragan Aqiqah

Sales page ini sebagian besar berupa tumpukan gambar. Semua slot gambar diatur di
**`src/data/imageSlots.js`** (README lengkap ada di bagian atas file itu). Selama `src`
sebuah slot kosong, halaman menampilkan placeholder berlabel beserta ukuran yang disarankan.

## Cara mengganti gambar
1. Simpan file ke `public/assets/images/slots/` (mis. `slot-01-hero.webp`).
2. Di `src/data/imageSlots.js`, isi `src` slot terkait: `src: "/assets/images/slots/slot-01-hero.webp"`.
3. Isi `alt` dengan deskripsi singkat isi gambar.

## Ukuran yang disarankan
- Lebar **1080 px**, ukuran file **di bawah 300 KB**, format **WebP** (atau JPG).
- 4:5 → 1080 × 1350 px (default, feed Instagram) · 1:1 → 1080 × 1080 px · 16:9 → 1080 × 608 px.
- Gambar tampil utuh (tidak dipotong), jadi teks di dalam banner aman.

## Daftar slot default
| Slot | Isi | Rasio | Perilaku |
|---|---|---|---|
| 01 | Hero banner | 4:5 | Klik → WhatsApp |
| 02 | Banner promo / diskon | 4:5 | Klik → WhatsApp, CTA setelahnya |
| 03 | Ringkasan paket | 4:5 | — |
| 04–05 | Price list 1 & 2 | 4:5 | Ketuk untuk perbesar |
| 06 | Banner Paket Abah | 4:5 | Klik → WhatsApp |
| 07 | Isi paket | 4:5 | CTA setelahnya |
| 08 | Keunggulan / Sejak 1972 | 4:5 | — |
| 09 | Proses sesuai syariat | 4:5 | CTA setelahnya |
| 10 | Area layanan / peta | 4:5 | — |
| 11 | Cara pesan | 4:5 | CTA setelahnya |
| 12–14 | Testimoni (carousel) | 4:5 | Ketuk untuk perbesar |
| 15A–15F | Galeri dokumentasi (grid) | 1:1 | Ketuk untuk perbesar |
| 16 | Banner promo penutup (deadline) | 4:5 | Klik → WhatsApp |

## Aset lain
| File | Lokasi | Keterangan |
|---|---|---|
| `logo-juragan-aqiqah.svg` | `public/assets/images/logo/` | Placeholder — timpa dengan logo asli (nama file sama, rasio persegi) |
| `og-image.png` | `public/assets/images/` | Gambar pratinjau saat link dibagikan (600 × 600) |
| `favicon.svg` | `public/` | Ikon tab browser |
