import Image from 'next/image';
import Link from 'next/link';

// ─────────────────────────────────────────────
//  DATA PROYEK — tambah/edit di sini
//  Letakkan gambar di folder /public/
//  lalu isi image: '/nama-file.webp'
// ─────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'Shell Indonesia — Company Profile',
    category: 'Company Profile',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'Redesign website company profile Shell Indonesia dengan tampilan modern, navigasi multi-level, dan halaman About Us yang informatif.',
    image: '/shell-company-profile.webp',
    accent: 'from-yellow-500/30 to-orange-600/10',
  },
  // ── Tambahkan proyek Anda di sini ──────────
  // {
  //   id: 2,
  //   title: 'Nama Proyek 2',
  //   category: 'E-Commerce',          // pilih: E-Commerce | Company Profile | Landing Page | Sistem Web | Portal Web
  //   tech: ['React', 'Node.js'],
  //   desc: 'Deskripsi singkat proyek Anda.',
  //   image: '/nama-gambar-2.webp',    // letakkan file di folder /public/
  //   accent: 'from-blue-500/30 to-cyan-600/10',
  // },
  // {
  //   id: 3,
  //   title: 'Nama Proyek 3',
  //   category: 'Landing Page',
  //   tech: ['Next.js', 'Tailwind CSS'],
  //   desc: 'Deskripsi singkat proyek Anda.',
  //   image: '/nama-gambar-3.webp',
  //   accent: 'from-purple-500/30 to-violet-600/10',
  // },
];

// ─────────────────────────────────────────────
//  TESTIMONI — tambah/edit di sini
// ─────────────────────────────────────────────
const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO, Batik Nusantara',
    avatar: 'BS',
    content: 'WebCraft Studio benar-benar mengubah bisnis kami. Penjualan online meningkat 300% sejak website baru diluncurkan. Tim mereka sangat profesional dan responsif.',
    rating: 5,
  },
  {
    name: 'dr. Sari Dewi',
    role: 'Direktur, RS Medika Prima',
    avatar: 'SD',
    content: 'Website kami sekarang jauh lebih profesional. Sistem booking online sangat membantu mengurangi antrian di loket. Sangat puas dengan hasilnya!',
    rating: 5,
  },
  {
    name: 'Rizky Pratama',
    role: 'Founder, EduLearn.id',
    avatar: 'RP',
    content: 'Landing page yang dibuat sangat efektif. Conversion rate kami meningkat signifikan. Mereka benar-benar mengerti apa yang bisnis kami butuhkan.',
    rating: 5,
  },
];

// Daftar kategori filter (sesuaikan jika menambah kategori baru)
const categories = ['Semua', 'E-Commerce', 'Company Profile', 'Landing Page', 'Sistem Web', 'Portal Web'];

// ─────────────────────────────────────────────
export default function PortfolioPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 rounded-full blur-[100px]"
          style={{ background: 'rgba(99,102,241,0.08)' }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-sm font-medium tracking-widest uppercase mb-4 block"
            style={{ color: 'var(--color-accent-light)' }}>
            Portofolio
          </span>
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6"
            style={{ color: 'var(--color-text-primary)' }}>
            Karya yang Kami Banggakan
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Setiap proyek adalah cerita sukses yang kami bangun bersama klien. Lihat bagaimana kami
            membantu bisnis bertumbuh melalui website yang tepat.
          </p>
        </div>
      </section>

      {/* ── Filter Tags ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200"
              style={
                i === 0
                  ? {
                      background: 'var(--color-accent)',
                      color: '#fff',
                      borderColor: 'var(--color-accent)',
                      boxShadow: 'var(--shadow-glow)',
                    }
                  : {
                      background: 'var(--color-surface)',
                      color: 'var(--color-text-secondary)',
                      borderColor: 'var(--color-border)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        {projects.length === 0 ? (
          /* Empty state */
          <div className="card-glass text-center py-24 px-8">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
              <svg className="w-8 h-8" style={{ color: 'var(--color-accent-light)' }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12h.008v.008H13.5V12zm-3 6.75h9a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 8.25v10.5a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <p className="font-display font-semibold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>
              Belum ada proyek
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Tambahkan proyek Anda di array <code className="px-1.5 py-0.5 rounded"
                style={{ background: 'var(--color-border)', color: 'var(--color-accent-light)' }}>
                projects
              </code> di file ini.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="card-glass overflow-hidden group transition-all duration-300"
                style={{ '--tw-border-opacity': '1' } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.3)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-glow)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Thumbnail */}
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* overlay gradient bottom */}
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(15,15,26,0.75) 0%, transparent 60%)' }} />
                  {/* category badge */}
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                    style={{
                      background: 'rgba(5,5,10,0.65)',
                      color: 'var(--color-accent-light)',
                      border: '1px solid rgba(99,102,241,0.25)',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="font-display font-semibold text-lg mb-2 transition-colors duration-200 group-hover:text-[var(--color-accent-light)]"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md text-xs"
                        style={{
                          background: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── Testimoni ── */}
      <section className="border-t py-24" style={{ borderColor: 'var(--color-border)', background: 'rgba(15,15,26,0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: 'var(--color-accent-light)' }}>
              Testimoni
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl"
              style={{ color: 'var(--color-text-primary)' }}>
              Kata Mereka tentang Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, content, rating }) => (
              <div
                key={name}
                className="card-glass p-6 transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.25)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'var(--color-text-secondary)' }}>
                  "{content}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold font-display flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))' }}
                  >
                    {avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{name}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6"
          style={{ color: 'var(--color-text-primary)' }}>
          Proyek Anda Berikutnya?
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
          Bergabunglah dengan puluhan bisnis yang sudah kami bantu berkembang secara digital.
        </p>
        <Link
          href="/kontak"
          className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium rounded-xl transition-all duration-200"
          style={{ background: 'var(--color-accent)', boxShadow: 'var(--shadow-glow)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent-glow)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-glow-lg)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'var(--shadow-glow)';
          }}
        >
          Diskusi Proyek Anda
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </>
  );
}
