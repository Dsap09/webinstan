import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: 'Landing Page',
    desc: 'Halaman konversi tinggi yang dirancang untuk menarik perhatian dan mengubah pengunjung menjadi pelanggan.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: 'Company Profile',
    desc: 'Website profesional yang merepresentasikan identitas bisnis Anda dengan desain yang elegan dan modern.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: 'Toko Online',
    desc: 'Platform e-commerce lengkap dengan manajemen produk, keranjang belanja, dan sistem pembayaran terintegrasi.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3" />
      </svg>
    ),
    title: 'Sistem Manajemen',
    desc: 'Aplikasi web custom untuk mengelola operasional bisnis Anda secara efisien dan terorganisir.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
    title: 'SEO & Performa',
    desc: 'Optimasi mesin pencari dan kecepatan loading untuk memastikan website Anda mudah ditemukan.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Maintenance',
    desc: 'Layanan pemeliharaan dan update rutin agar website Anda selalu berjalan optimal dan aman.',
  },
];

const process = [
  { step: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan dan tujuan website Anda secara mendalam.' },
  { step: '02', title: 'Desain', desc: 'Mockup dan wireframe yang disesuaikan dengan brand identity Anda.' },
  { step: '03', title: 'Development', desc: 'Pengembangan website dengan teknologi terkini dan best practices.' },
  { step: '04', title: 'Launch', desc: 'Testing menyeluruh, deployment, dan website Anda siap online.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-glow/8 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent-light text-xs font-medium mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
              Studio Web Profesional · Berbasis di Indonesia
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] mb-8 animate-fade-up animate-delay-100">
              Website yang{' '}
              <span className="relative">
                <span className="text-gradient">Menggerakkan</span>
              </span>
              <br />
              Bisnis Anda
            </h1>

            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-12 animate-fade-up animate-delay-200">
              Kami membangun website modern, cepat, dan elegan yang dirancang khusus untuk kebutuhan bisnis Anda — dari landing page sederhana hingga platform web enterprise yang kompleks.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-7 py-4 bg-accent hover:bg-accent-glow text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-200 text-sm"
              >
                Mulai Proyek Sekarang
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-4 bg-surface hover:bg-border text-text-primary font-medium rounded-xl border border-border hover:border-accent/30 transition-all duration-200 text-sm"
              >
                Lihat Portofolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}


      {/* ── About ── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent-light text-sm font-medium tracking-widest uppercase mb-4 block">Tentang Kami</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6 text-text-primary">
              Kami Bukan Sekadar Pembuat Website
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              WebInstan Studio adalah tim developer dan desainer berpengalaman yang berdedikasi untuk menciptakan pengalaman digital yang bermakna. Kami percaya bahwa website yang baik bukan hanya soal tampilan — tapi tentang bagaimana ia bekerja untuk bisnis Anda.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Dengan lebih dari 3 tahun pengalaman dan 50+ proyek yang berhasil, kami memahami apa yang dibutuhkan bisnis Indonesia untuk berkembang di era digital. Setiap proyek kami tangani dengan penuh perhatian dan komitmen terhadap kualitas.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-surface border border-border text-text-secondary text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative card-glass p-8 space-y-4">
              {['UI/UX Design', 'Frontend Dev', 'Backend Dev', 'SEO Optimization'].map((item, i) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-text-primary">{item}</span>
                      <span className="text-xs text-accent-light">{[98, 95, 92, 88][i]}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                        style={{ width: `${[98, 95, 92, 88][i]}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-pad bg-surface/20 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-medium tracking-widest uppercase mb-4 block">Layanan</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
              Apa yang Kami Kerjakan
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card-glass p-6 hover:border-accent/30 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light mb-4 group-hover:bg-accent/15 transition-colors">
                  {icon}
                </div>
                <h3 className="font-display font-semibold text-text-primary text-lg mb-2">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase mb-4 block">Proses Kerja</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
            Dari Ide ke Realita
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map(({ step, title, desc }, i) => (
            <div key={step} className="relative">
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-10" />
              )}
              <div className="card-glass p-6">
                <div className="font-display font-bold text-5xl text-accent/15 mb-4">{step}</div>
                <h3 className="font-display font-semibold text-text-primary text-lg mb-2">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface to-bg p-12 md:p-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent/15 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-6">
                Siap Memulai Proyek Anda?
              </h2>
              <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10">
                Konsultasikan kebutuhan website Anda bersama kami. Gratis, tanpa komitmen.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-glow text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-200"
                >
                  Hubungi Kami
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/produk"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-surface text-text-primary font-medium rounded-xl border border-border hover:border-accent/30 transition-all duration-200"
                >
                  Lihat Paket Harga
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
