import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Sistem CRM & Monitoring',
    category: 'Enterprise Software',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    desc: 'Sistem manajemen hubungan pelanggan kustom yang dilengkapi dengan fitur pelacakan lead, sistem ticketing keluhan, dashboard analitik, dan pelaporan performa penjualan.',
    image: '/portfolio/01.png',
    color: 'from-orange-500/20 to-amber-500/5',
  },
  {
    id: 2,
    title: 'Company Profile Nusa Indo Technology',
    category: 'Company Profile',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    desc: 'Website profil perusahaan modern dengan desain premium, mengutamakan performa tinggi, animasi smooth scrolling, dan arsitektur informasi yang merepresentasikan identitas teknologi digital.',
    image: '/portfolio/02.png',
    color: 'from-blue-500/20 to-cyan-500/5',
  },
  {
    id: 3,
    title: 'Website Solusi Pajak Konsultan',
    category: 'Web Application',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    desc: 'Platform digital premium untuk agensi konsultan pajak yang menyediakan fitur penjadwalan konsultasi online, kalkulator simulasi pajak mandiri, serta manajemen konten edukasi finansial.',
    image: '/portfolio/03.png',
    color: 'from-purple-500/20 to-violet-500/5',
  },
  {
    id: 4,
    title: 'Landing Page Startup Edukasi Online',
    category: 'Landing Page',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    desc: 'Landing page high-conversion untuk platform pendidikan online dengan animasi menarik dan copywriting efektif.',
    image: '/portfolio/04.png',
    color: 'from-green-500/20 to-emerald-500/5',
  },
  {
    id: 5,
    title: 'Sistem ERP Manajemen Rantai Pasok',
    category: 'Enterprise Software',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
    desc: 'Sistem perencanaan sumber daya perusahaan terintegrasi untuk mengoptimalkan manajemen inventaris, pelacakan vendor, kontrol gudang, hingga otomatisasi alur distribusi barang secara real-time.',
    image: '/portfolio/05.png',
    color: 'from-red-500/20 to-rose-500/5',
  },
  {
    id: 6,
    title: 'Katalog Digital UMKM Warung Makan',
    category: 'Landing Page',
    tech: ['React', 'Tailwind CSS'],
    desc: 'Aplikasi katalog produk berbasis web untuk digitalisasi UMKM kuliner, mempermudah pelanggan menjelajahi menu, melihat ketersediaan stok, dan melakukan pemesanan instan terintegrasi WhatsApp.',
    image: '/portfolio/07.jpeg',
    color: 'from-yellow-500/20 to-orange-500/5',
  },
];

const testimonials = [
  {
    name: 'Budi Santoso',
    
    avatar: 'BS',
    content: 'WebInstan Studio benar-benar mengubah bisnis kami. Penjualan online meningkat 300% sejak website baru diluncurkan. Tim mereka sangat profesional dan responsif.',
    rating: 5,
  },
  {
    name: 'Gatot Wijaya',
    
    avatar: 'SD',
    content: 'Website kami sekarang jauh lebih profesional. Sistem booking online sangat membantu mengurangi antrian di loket. Sangat puas dengan hasilnya!',
    rating: 5,
  },
  {
    name: 'Rizky Pratama',
    
    avatar: 'RP',
    content: 'Landing page yang dibuat sangat efektif. Conversion rate kami meningkat signifikan. Mereka benar-benar mengerti apa yang bisnis kami butuhkan.',
    rating: 5,
  },
];

const categories = ['Semua', 'E-Commerce', 'Company Profile', 'Landing Page', 'Sistem Web', 'Portal Web'];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-accent/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase mb-4 block">Portofolio</span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-text-primary mb-6">
            Karya yang Kami Banggakan
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Setiap proyek adalah cerita sukses yang kami bangun bersama klien. Lihat bagaimana kami membantu bisnis bertumbuh melalui website yang tepat.
          </p>
        </div>
      </section>

      {/* Filter Tags */}


      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card-glass overflow-hidden hover:border-accent/30 hover:shadow-glow transition-all duration-300 group"
            >
              {/* Image */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.color}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-bg/70 backdrop-blur-sm text-accent-light text-xs font-medium border border-accent/20">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-text-primary text-lg mb-2 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-surface border border-border text-text-secondary text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-surface/20 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-medium tracking-widest uppercase mb-4 block">Testimoni</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary">
              Kata Mereka tentang Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, avatar, content, rating }) => (
              <div key={name} className="card-glass p-6 hover:border-accent/20 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">"{content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center text-white text-xs font-bold font-display">
                    {avatar}
                  </div>
                  <div>
                    <div className="text-text-primary text-sm font-semibold">{name}</div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-6">
          Proyek Anda Berikutnya?
        </h2>
        <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
          Bergabunglah dengan puluhan bisnis yang sudah kami bantu berkembang secara digital.
        </p>
        <Link
          href="/kontak"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-glow text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-200"
        >
          Diskusi Proyek Anda
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </>
  );
}
