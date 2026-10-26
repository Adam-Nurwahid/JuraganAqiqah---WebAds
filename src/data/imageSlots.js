/**
 * ============================================================
 * README — SLOT GAMBAR SALES PAGE JURAGAN AQIQAH
 * ============================================================
 * Halaman ini sebagian besar berupa tumpukan gambar (banner promo, price
 * list, paket, testimoni, dll.). Semua slot diatur di array `imageSlots`
 * di bawah. Halaman otomatis merender ulang sesuai isi array ini.
 *
 * 1) MENGGANTI GAMBAR
 *    - Simpan file ke folder `public/assets/images/slots/`
 *      (contoh: public/assets/images/slots/slot-01-hero.webp)
 *    - Isi `src` slot terkait dengan path TANPA kata "public":
 *        src: "/assets/images/slots/slot-01-hero.webp"
 *    - Selama `src` kosong (""), slot tampil sebagai placeholder berlabel.
 *    - Isi juga `alt` dengan deskripsi singkat isi gambar (penting untuk SEO
 *      dan pembaca layar).
 *
 * 2) MENAMBAH / MENGHAPUS / MENGURUTKAN SLOT
 *    - Tambah : salin satu objek slot, ganti `id` & `label` (lihat contoh
 *               "ADD NEW SLOT HERE" di bawah).
 *    - Hapus  : hapus objek slot dari array.
 *    - Urutkan: pindahkan posisi objek di dalam array. Urutan array = urutan
 *               tampil di halaman.
 *
 * 3) UKURAN GAMBAR YANG DISARANKAN
 *    - Lebar 1080 px, ukuran file di bawah 300 KB, format WebP (atau JPG).
 *    - 4:5  → 1080 x 1350 px (default, sama dengan feed Instagram)
 *    - 1:1  → 1080 x 1080 px
 *    - 16:9 → 1080 x 608 px
 *    - "auto" → tinggi bebas; isi `width` & `height` sesuai ukuran asli file.
 *    Gambar ditampilkan utuh selebar kolom (tidak dipotong), jadi teks di
 *    dalam banner aman.
 *
 * FIELD SETIAP SLOT
 *   id          : penanda unik (dipakai juga untuk tracking)
 *   label       : nama slot yang tampil di placeholder
 *   src         : path gambar; "" = tampilkan placeholder
 *   youtube     : opsional. ID video YouTube vertikal (mis. "qZmNT9meMBU");
 *                 jika diisi, slot tampil sebagai video 9:16 (src diabaikan)
 *   alt         : teks alternatif gambar
 *   aspectRatio : "4:5" | "1:1" | "16:9" | "auto"
 *   width/height: opsional, wajib untuk "auto" (ukuran asli file)
 *   link        : opsional. "whatsapp" = gambar bisa diklik ke WhatsApp,
 *                 atau URL biasa (mis. "#paket")
 *   waMessage   : opsional, pesan WhatsApp khusus untuk slot ini
 *   zoom        : opsional. true = ketuk untuk memperbesar (lightbox)
 *   ctaAfter    : opsional. true = tombol CTA emas default di bawah slot,
 *                 atau { label, message } untuk teks & pesan khusus
 *   intro       : opsional { eyebrow, title, text } — judul pendek di atas slot
 *   group       : opsional. Slot berurutan dengan group yang sama digabung
 *   display     : untuk group: "carousel" (geser) | "grid" (galeri 2 kolom) | "stack"
 *   autoScroll  : untuk carousel: true (3500 ms) atau jeda dalam ms, mis. 3500
 *   priority    : opsional. true = dimuat lebih dulu (untuk slot paling atas)
 */

/** Ukuran default per rasio (dipakai untuk placeholder & atribut width/height) */
export const slotSizes = {
  '4:5': { width: 1080, height: 1350 },
  '1:1': { width: 1080, height: 1080 },
  '16:9': { width: 1080, height: 608 },
  auto: { width: 1080, height: 1350 }
};

/**
 * Foto makanan di Hero (tepat di bawah tagline "Sempurnakan Ibadah dengan yang Terbaik").
 * Ukuran disarankan 1080 x 1080 px (1:1). Ganti `aspectRatio` ke "4:5" jika ingin lebih tinggi.
 */
export const heroFoodSlot = {
  id: 'slot-hero-food',
  label: 'SLOT HERO: Foto Makanan',
  src: '/assets/images/foto-makanan.webp',
  alt: 'Hidangan aqiqah Juragan Aqiqah: nasi kebuli, gulai, tongseng, sate, ayam panggang, telur balado, acar, dan kerupuk tersaji hangat di meja',
  aspectRatio: 'auto',
  width: 1080,
  height: 589,
  priority: true
};

export const imageSlots = [
  {
    id: 'slot-01',
    label: 'SLOT 01: Hero Banner',
    src: '',
    alt: 'Banner utama promo aqiqah Juragan Aqiqah',
    aspectRatio: '4:5',
    link: 'whatsapp'
  },
  {
    id: 'slot-02',
    label: 'SLOT 02: Banner Promo / Diskon',
    src: '',
    alt: 'Pengumuman promo dan diskon aqiqah bulan ini',
    aspectRatio: '4:5',
    link: 'whatsapp',
    waMessage: 'Assalamualaikum Juragan Aqiqah, saya ingin klaim promo aqiqah bulan ini.'
  },
  // Informasi paket: carousel geser otomatis. Gambar 800 x 1132 px di public/assets/images/paket/
  // (spasi di nama file ditulis %20). Tambah/hapus paket cukup dengan menambah/menghapus objek di bawah.
  {
    id: 'paket-amanah',
    label: 'SLOT PAKET: Paket Amanah',
    src: '/assets/images/paket/Paket%20Amanah.webp',
    alt: 'Informasi Paket Amanah Juragan Aqiqah: foto menu dan isi paket',
    aspectRatio: 'auto',
    width: 800,
    height: 1132,
    zoom: true,
    group: 'paket',
    display: 'carousel',
    autoScroll: 3500, // geser otomatis tiap 3,5 detik (hapus baris ini untuk mematikan)
    intro: {
      eyebrow: 'Paket Aqiqah',
      title: 'Pilih Paket Aqiqah Anda',
      text: 'Semua paket sudah termasuk penyembelihan sesuai syariat dan masakan siap saji.'
    }
  },
  {
    id: 'paket-abah',
    label: 'SLOT PAKET: Paket Abah',
    src: '/assets/images/paket/Paket%20Abah.webp',
    alt: 'Informasi Paket Abah Juragan Aqiqah: menu olahan daging, gulai, tongseng, dan isi paket lengkap',
    aspectRatio: 'auto',
    width: 800,
    height: 1132,
    zoom: true,
    group: 'paket'
  },
  {
    id: 'paket-dimasakin-umi',
    label: 'SLOT PAKET: Paket Dimasakin Umi',
    src: '/assets/images/paket/Paket%20Dimasakin%20Umi.webp',
    alt: 'Informasi Paket Dimasakin Umi Juragan Aqiqah: foto menu dan isi paket',
    aspectRatio: 'auto',
    width: 800,
    height: 1132,
    zoom: true,
    group: 'paket'
  },
  {
    id: 'paket-sultan',
    label: 'SLOT PAKET: Paket Sultan',
    src: '/assets/images/paket/Paket%20Sultan.webp',
    alt: 'Informasi Paket Sultan Juragan Aqiqah: foto menu dan isi paket',
    aspectRatio: 'auto',
    width: 800,
    height: 1132,
    zoom: true,
    group: 'paket'
  },
  {
    id: 'paket-sultan-kambing-goreng',
    label: 'SLOT PAKET: Paket Sultan Kambing Goreng',
    src: '/assets/images/paket/Paket%20Sultan%20Kambing%20Goreng.webp',
    alt: 'Informasi Paket Sultan Kambing Goreng Juragan Aqiqah: foto menu dan isi paket',
    aspectRatio: 'auto',
    width: 800,
    height: 1132,
    zoom: true,
    group: 'paket'
  },
  {
    id: 'slot-07',
    label: 'SLOT 07: Isi Paket / Yang Anda Dapatkan',
    // Margin transparan sudah dipotong agar gambar tampil penuh selebar kolom
    src: '/assets/images/Benefit.webp',
    alt: 'Benefit paket aqiqah: thinwall & belt ucapan, minuman pilihan, sertifikat & bingkai, free undangan digital, free dokumentasi, alat makan, boneka, kerupuk, dan pengiriman',
    aspectRatio: 'auto',
    width: 761,
    height: 783,
    zoom: true
  },
  {
    id: 'slot-08',
    label: 'SLOT 08: Keunggulan Juragan Aqiqah (Sejak 1972)',
    src: '/assets/images/keunggulan.webp',
    alt: 'Kenapa pilih Juragan Aqiqah: sesuai syariat dengan juru sembelih bersertifikat, makanan enak oleh chef profesional, kemasan food-grade, proses transparan, gratis ongkir DKI Jakarta sampai 20 km, dan dipercaya lebih dari 50.000 keluarga',
    aspectRatio: 'auto',
    width: 928,
    height: 1152,
    intro: {
      eyebrow: 'Mengapa Juragan Aqiqah',
      title: 'Amanah Sejak 1972',
      text: 'Alhamdulillah, lebih dari setengah abad menemani keluarga Indonesia menunaikan aqiqah.'
    }
  },
  {
    id: 'slot-09',
    label: 'SLOT 09: Proses Sesuai Syariat',
    src: '/assets/images/sesuai-syariat.webp',
    alt: 'Proses aqiqah sesuai syariat di Juragan Aqiqah: juru sembelih bersertifikat BNSP dan JULEHA, penyembelihan halal dan higienis, bisa disaksikan langsung, daging diproses terpisah per shohibul aqiqah, dimasak chef profesional dan dikemas food-grade',
    aspectRatio: 'auto',
    width: 928,
    height: 1152
  },
  {
    id: 'slot-sertifikat',
    label: 'SLOT 09B: Sertifikat Halal & Juleha',
    src: '/assets/images/Sertifikat.png',
    alt: 'Sertifikat Halal MUI dapur higienis, Sertifikat Juleha (Juru Sembelih Halal), dan Sertifikat Halal MUI Rumah Potong Hewan (RPH)',
    aspectRatio: 'auto',
    width: 800,
    height: 407,
    zoom: true,
    intro: {
      eyebrow: 'Bersertifikat Resmi',
      title: 'Halal & Sesuai Syariat, Terjamin',
      text: 'Dapur dan rumah potong hewan kami bersertifikat Halal MUI, dan penyembelihan dilakukan oleh juru sembelih halal bersertifikat.'
    }
  },
  {
    id: 'slot-10',
    label: 'SLOT 10: Area Layanan / Peta',
    src: '/assets/images/area-layanan.webp',
    alt: 'Peta area layanan Juragan Aqiqah di seluruh Jabodetabek: Jakarta, Tangerang, Bekasi, Depok, dan Bogor',
    aspectRatio: '1:1'
  },
  {
    id: 'slot-11',
    label: 'SLOT 11: Cara Pesan',
    src: '/assets/images/cara-pesan.webp',
    alt: 'Cara pesan aqiqah di Juragan Aqiqah dalam 5 langkah: hubungi CS via WhatsApp, pilih paket dan domba, penyembelihan sesuai syariat, proses masak oleh katering profesional, dan pengiriman ke rumah',
    aspectRatio: 'auto',
    width: 928,
    height: 1152
  },

  // Kolase foto pelanggan bersama sertifikat & merchandise Juragan Aqiqah
  {
    id: 'slot-testimoni-foto',
    label: 'SLOT 11B: Foto Pelanggan (Kolase)',
    src: '/assets/images/Testimoni.webp',
    alt: 'Kolase foto pelanggan Juragan Aqiqah berpose dengan sertifikat aqiqah dan souvenir boneka, dengan rating bintang lima',
    aspectRatio: '1:1',
    width: 800,
    height: 800,
    zoom: true,
    intro: {
      eyebrow: 'Testimoni',
      title: 'Kata Mereka',
      text: 'Alhamdulillah, kepercayaan Ayah & Bunda adalah amanah yang terus kami jaga.'
    }
  },

  // Video YouTube vertikal (testimoni & paket): tiga slot digabung menjadi carousel geser.
  // Ganti video: isi `youtube` dengan ID video (bagian setelah "v=" atau "/shorts/" di link YouTube).
  {
    id: 'slot-12',
    label: 'SLOT 12: Video Testimoni 1',
    youtube: 'qZmNT9meMBU',
    alt: 'Testimoni Customer Juragan Aqiqah',
    group: 'testimoni',
    display: 'carousel'
  },
  { id: 'slot-13', label: 'SLOT 13: Video Paket Baru', youtube: 'iwIxC11SZIc', alt: 'Paket Baru Juragan Aqiqah', group: 'testimoni' },
  { id: 'slot-14', label: 'SLOT 14: Video Testimoni 2', youtube: 'P3tmjQEJz_0', alt: 'Testimoni Customer Juragan Aqiqah', group: 'testimoni' },

  // Galeri dokumentasi: grid 2 kolom, rasio 1:1
  {
    id: 'slot-15a',
    label: 'SLOT 15A: Galeri',
    src: '',
    alt: 'Dokumentasi acara aqiqah pelanggan',
    aspectRatio: '1:1',
    zoom: true,
    group: 'galeri',
    display: 'grid',
    intro: { eyebrow: 'Dokumentasi', title: 'Momen Aqiqah Bersama Kami' }
  },
  { id: 'slot-15b', label: 'SLOT 15B: Galeri', src: '', alt: 'Dokumentasi acara aqiqah pelanggan', aspectRatio: '1:1', zoom: true, group: 'galeri' },
  { id: 'slot-15c', label: 'SLOT 15C: Galeri', src: '', alt: 'Dokumentasi acara aqiqah pelanggan', aspectRatio: '1:1', zoom: true, group: 'galeri' },
  { id: 'slot-15d', label: 'SLOT 15D: Galeri', src: '', alt: 'Dokumentasi acara aqiqah pelanggan', aspectRatio: '1:1', zoom: true, group: 'galeri' },
  { id: 'slot-15e', label: 'SLOT 15E: Galeri', src: '', alt: 'Dokumentasi acara aqiqah pelanggan', aspectRatio: '1:1', zoom: true, group: 'galeri' },
  { id: 'slot-15f', label: 'SLOT 15F: Galeri', src: '', alt: 'Dokumentasi acara aqiqah pelanggan', aspectRatio: '1:1', zoom: true, group: 'galeri' },

  {
    id: 'slot-16',
    label: 'SLOT 16: Banner Promo Penutup (Deadline)',
    src: '',
    alt: 'Banner penutup promo aqiqah dengan batas waktu',
    aspectRatio: '4:5',
    link: 'whatsapp',
    waMessage: 'Assalamualaikum Juragan Aqiqah, saya ingin memesan sebelum promo berakhir.'
  }

  // ============================================================
  // ADD NEW SLOT HERE — salin contoh di bawah, hapus tanda komentar,
  // lalu pindahkan ke posisi yang diinginkan di dalam array.
  // (Jangan lupa tambahkan koma setelah slot sebelumnya.)
  // ============================================================
  // {
  //   id: 'slot-17',
  //   label: 'SLOT 17: Nama Banner Baru',
  //   src: '/assets/images/slots/slot-17.webp',
  //   alt: 'Deskripsi singkat isi banner',
  //   aspectRatio: '4:5',      // "4:5" | "1:1" | "16:9" | "auto"
  //   link: 'whatsapp',        // opsional: gambar bisa diklik ke WhatsApp
  //   zoom: false,             // opsional: ketuk untuk memperbesar
  //   ctaAfter: true           // opsional: tombol CTA emas di bawah slot
  // }
];
