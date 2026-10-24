/**
 * ============================================================
 * KONFIGURASI TEKS SALES PAGE — JURAGAN AQIQAH
 * ============================================================
 * Teks, nomor WhatsApp, dan kontak diatur di sini.
 * Slot gambar (banner, price list, testimoni, galeri) diatur di
 * `src/data/imageSlots.js` — lihat README di bagian atas file itu.
 * Yang bertanda "GANTI" masih placeholder dan wajib diisi data asli.
 */

export const siteData = {
  brandName: "Juragan Aqiqah",
  tagline: "Sempurnakan Ibadah dengan yang Terbaik",
  since: "1972",

  // GANTI dengan nomor WhatsApp CS asli (format 62xxx, tanpa + dan spasi).
  // Lebih dari satu nomor akan dirotasi otomatis (round-robin).
  whatsappNumbers: ["6281234567890"],

  // Pesan WhatsApp yang terisi otomatis. Bisa diubah per tombol / per slot.
  waMessages: {
    default: "Assalamualaikum Juragan Aqiqah, saya ingin tahu info paket aqiqah dan promo bulan ini.",
    promo: "Assalamualaikum Juragan Aqiqah, saya ingin klaim promo aqiqah bulan ini. Mohon info lengkapnya.",
    closing: "Assalamualaikum Juragan Aqiqah, saya ingin memesan aqiqah untuk buah hati sebelum promo berakhir."
  },

  hero: {
    headline: "Aqiqah Tuntas, Tinggal Terima Beres",
    intro:
      "Baru menyambut buah hati dan tak sempat mengurus aqiqah? Serahkan kepada kami. Dari kambing, penyembelihan sesuai syariat, hingga hidangan siap saji, semuanya kami tunaikan dengan amanah."
  },

  hadith: {
    text: "Setiap anak tergadai dengan aqiqahnya, disembelihkan (kambing) untuknya pada hari ketujuh, dicukur rambutnya, dan diberi nama.",
    source: "HR. Abu Dawud no. 2838 dan At-Tirmidzi no. 1522"
  },

  // Masalah yang sering dirasakan orang tua baru
  painPoints: [
    "Bingung harus mulai dari mana mengurus aqiqah",
    "Khawatir prosesnya belum sesuai syariat",
    "Tidak ada waktu untuk belanja, memasak, dan membagikan"
  ],

  closing: {
    title: "Tunaikan Aqiqah Buah Hati Tanpa Repot",
    text: "Insya Allah kami bantu sampai tuntas. Ayah & Bunda cukup fokus menyambut kebahagiaan.",
    // GANTI periode promo
    urgency: "Promo berlaku hingga 30 November 2026 dan slot penyembelihan di tanggal favorit cepat penuh. Amankan jadwal Anda sekarang."
  },

  ctaLabel: "Hubungi CS Kami Sebelum Promo Habis",
  ctaNote: "Respon cepat • Konsultasi gratis • Tanpa kewajiban memesan",

  // GANTI dengan data bisnis asli
  serviceAreas: ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"],
  address: "Jl. Contoh Alamat No. 1, Jakarta Selatan",
  phoneDisplay: "+62 812-3456-7890",
  email: "halo@juraganaqiqah.com",
  operationalHours: "Setiap hari, 07.00 – 21.00 WIB",

  images: {
    // SLOT LOGO — GANTI file ini dengan logo asli (nama file sama).
    logo: "/assets/images/logo/logo-juragan-aqiqah.svg",
    ogImage: "/assets/images/og-image.png",
    ogImageWidth: 600,
    ogImageHeight: 600
  },

  seo: {
    title: "Juragan Aqiqah | Aqiqah Tuntas, Tinggal Terima Beres",
    description:
      "Layanan aqiqah amanah dan sesuai syariat sejak 1972. Kambing sehat, masakan segar, dokumentasi lengkap, diantar tepat waktu. Promo bulan ini, hubungi CS kami.",
    // GANTI dengan domain asli.
    canonicalUrl: "https://juraganaqiqah.com/",
    themeColor: "#5A2E1F",
    keywords: "aqiqah, paket aqiqah, aqiqah jakarta, aqiqah depok, aqiqah bekasi, juragan aqiqah",
    ogImageAlt: "Juragan Aqiqah — Sempurnakan Ibadah dengan yang Terbaik"
  }
};

// Helper link WhatsApp (format wa.me + pesan terisi otomatis)
export const waLink = (message = siteData.waMessages.default) =>
  `https://wa.me/${siteData.whatsappNumbers[0]}?text=${encodeURIComponent(message)}`;
