import Link from 'next/link';

const packages = [
  {
    name: 'Basic',
    tagline: 'Cocok untuk bisnis yang baru memulai.',
    price: '100.000',
    priceNote: 'sekali bayar',
    duration: '5–7 hari kerja',
    color: 'border-border',
    badge: null,
    features: [
      'Landing page 1 halaman',
      'Desain responsif mobile & desktop',
      'Hingga 5 section konten',
      'Formulir kontak',
      'Integrasi Google Maps',
      'SEO dasar (meta, sitemap)',
      'Free revisi hingga 3x',
      'Support via WhatsApp 30 hari',
    ],
    notIncluded: ['CMS / panel admin', 'Integrasi pembayaran', 'Multi bahasa'],
  },
  {
    name: 'Pro',
    tagline: 'Solusi lengkap untuk bisnis berkembang.',
    price: '500.000',
    priceNote: 'sekali bayar',
    duration: '10–14 hari kerja',
    color: 'border-accent',
    badge: 'Paling Populer',
    features: [
      'Website multi-halaman (hingga 8 halaman)',
      'Desain custom premium',
      'Panel CMS untuk kelola konten',
      'Blog / artikel',
      'Galeri foto & portofolio',
      'Integrasi WhatsApp Business',
      'SEO lanjutan + Google Analytics',
      'Free revisi hingga 5x',
      'Support 3 bulan via WhatsApp',
    ],
    notIncluded: ['Integrasi pembayaran', 'Fitur kustom kompleks'],
  },
  {
    name: 'Enterprise',
    tagline: 'Sistem web kompleks untuk skala besar.',
    price: 'Custom',
    priceNote: 'Tergantung kebutuhan',
    duration: '30–60 hari kerja',
    color: 'border-border',
    badge: null,
    features: [
      'Aplikasi web full-stack custom',
      'Sistem e-commerce lengkap',
      'Dashboard admin & manajemen data',
      'Multi-role user & autentikasi',
      'Integrasi API pihak ketiga',
      'Optimasi performa & skalabilitas',
      'CI/CD pipeline deployment',
      'Testing & QA menyeluruh',
      'Free revisi unlimited',
      'Support & maintenance 6 bulan',
      'Training penggunaan sistem',
    ],
    notIncluded: [],
  },
];

const addons = [
  { name: 'Maintenance Bulanan', price: 'Rp 300.000/bln', desc: 'Update konten, backup, monitoring keamanan.' },
  { name: 'SEO Premium', price: 'Rp 1.500.000/bln', desc: 'Optimasi kata kunci, link building, laporan bulanan.' },
  { name: 'Tambah Halaman', price: 'Rp 500.000/halaman', desc: 'Penambahan halaman baru ke website yang sudah ada.' },
  { name: 'Integrasi Pembayaran', price: 'Rp 2.000.000', desc: 'Setup Midtrans atau Xendit beserta testing.' },
  { name: 'Multi Bahasa', price: 'Rp 1.000.000', desc: 'Penambahan bahasa (ID/EN) ke website existing.' },
  { name: 'Copywriting', price: 'Rp 800.000', desc: 'Penulisan konten profesional per 1000 kata.' },
];

const faqs = [
  {
    q: 'Berapa lama proses pengembangan website?',
    a: 'Tergantung paket yang dipilih. Basic: 5–7 hari kerja, Pro: 10–14 hari kerja, Enterprise: 30–60 hari kerja. Estimasi ini berlaku setelah semua materi konten dari klien tersedia.',
  },
  {
    q: 'Apakah saya bisa request desain custom?',
    a: 'Ya! Kami selalu menyesuaikan desain dengan brand identity Anda. Di awal proyek, kami akan melakukan sesi konsultasi untuk memahami visi dan preferensi Anda.',
  },
  {
    q: 'Apa metode pembayaran yang diterima?',
    a: 'Kami menerima transfer bank (BCA, Mandiri, BNI, BRI), GoPay, OVO, dan QRIS. Pembayaran dilakukan 50% di awal dan 50% setelah website selesai.',
  },
  {
    q: 'Apakah website bisa dikelola sendiri setelah jadi?',
    a: 'Untuk paket Pro dan Enterprise, kami menyediakan panel CMS yang mudah digunakan. Kami juga memberikan training penggunaan dan dokumentasi yang lengkap.',
  },
  {
    q: 'Bagaimana jika saya tidak puas dengan hasilnya?',
    a: 'Kami memberikan garansi revisi sesuai paket yang dipilih. Kepuasan Anda adalah prioritas kami, dan kami akan terus berkolaborasi hingga hasilnya sesuai ekspektasi.',
  },
];

export default function ProdukPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-accent/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase mb-4 block">Produk & Harga</span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-text-primary mb-6">
            Paket yang Tepat <br />
            untuk Bisnis Anda
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Harga transparan, kualitas premium. Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => {
            const isPopular = !!pkg.badge;
            return (
              <div
                key={pkg.name}
                className={`relative card-glass border-2 ${pkg.color} ${isPopular ? 'shadow-glow' : ''} p-8 rounded-2xl`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-accent text-white text-xs font-semibold rounded-full shadow-glow">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-2xl text-text-primary mb-1">{pkg.name}</h3>
                  <p className="text-text-secondary text-sm">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  {pkg.price === 'Custom' ? (
                    <div className="font-display font-bold text-4xl text-text-primary">Custom</div>
                  ) : (
                    <div className="font-display font-bold text-4xl text-text-primary">
                      <span className="text-lg font-medium text-text-secondary">Rp</span> {pkg.price}
                    </div>
                  )}
                  <p className="text-text-secondary text-xs mt-1">{pkg.priceNote}</p>
                </div>

                <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border">
                  <svg className="w-4 h-4 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                  </svg>
                  <span className="text-text-secondary text-xs">{pkg.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <svg className="w-4 h-4 text-accent-light mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm opacity-40">
                      <svg className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontak"
                  className={`block text-center py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isPopular
                      ? 'bg-accent hover:bg-accent-glow text-white shadow-glow hover:shadow-glow-lg'
                      : 'bg-surface hover:bg-border text-text-primary border border-border hover:border-accent/30'
                  }`}
                >
                  {pkg.price === 'Custom' ? 'Minta Penawaran' : 'Pesan Sekarang'}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Add-ons */}


      {/* FAQ */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase mb-4 block">FAQ</span>
          <h2 className="font-display font-bold text-4xl text-text-primary">Pertanyaan yang Sering Ditanyakan</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="card-glass p-6 group open:border-accent/20 transition-all duration-200 cursor-pointer"
            >
              <summary className="flex items-center justify-between gap-4 list-none font-semibold text-text-primary text-sm select-none">
                <span>{q}</span>
                <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center flex-shrink-0 text-text-secondary group-open:rotate-45 group-open:border-accent/30 group-open:text-accent-light transition-all duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-text-secondary text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-bg p-12 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-accent/15 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
              Butuh Paket Custom?
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Ceritakan kebutuhan Anda dan kami akan menyiapkan penawaran yang sesuai.
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-glow text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-200"
            >
              Konsultasi Gratis
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
