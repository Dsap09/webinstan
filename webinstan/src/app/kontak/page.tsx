'use client';

import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+6285233483939',
    sublabel: 'Respon cepat, Senin–Sabtu 08.00–21.00 WIB',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    hoverBorder: 'hover:border-green-500/40',
    
    ctaColor: 'bg-green-500 hover:bg-green-600',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'webinstan_cihuy@gmail.com',
    sublabel: 'Untuk pertanyaan detail dan pengiriman brief proyek.',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    hoverBorder: 'hover:border-accent/40',
    
    
  },
];

const serviceOptions = [
  'Landing Page',
  'Company Profile',
  'Toko Online (E-Commerce)',
  'Sistem Manajemen Web',
  'Portal / Blog',
  'Lainnya',
];

export default function KontakPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const msg = `Halo WebCraft Studio! 👋\n\nSaya ingin konsultasi mengenai proyek website.\n\n*Nama:* ${form.name}\n*Email:* ${form.email}\n*No. HP:* ${form.phone}\n*Layanan:* ${form.service}\n*Budget:* ${form.budget}\n*Detail Proyek:*\n${form.message}`;
    window.open(`https://wa.me/6285233483939?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-accent/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-accent-light text-sm font-medium tracking-widest uppercase mb-4 block">Kontak</span>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-text-primary mb-6">
            Mari Bicara tentang <br />
            Proyek Anda
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Konsultasi gratis, tanpa komitmen. Kami siap membantu mewujudkan website impian Anda.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-text-primary mb-2">Hubungi Kami Langsung</h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Pilih metode yang paling nyaman untuk Anda. Kami berkomitmen untuk merespons dalam waktu kurang dari 2 jam di jam kerja.
              </p>
            </div>

            {contactInfo.map(({ icon, label, value, sublabel, bg, border, hoverBorder, ctaColor }) => (
              <div key={label} className={`card-glass border ${border} ${hoverBorder} p-6 transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0`}>
                    {icon}
                  </div>
                  <div>
                    <div className="text-text-primary font-semibold text-sm">{label}</div>
                    <div className="text-accent-light text-sm font-medium">{value}</div>
                  </div>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed mb-4">{sublabel}</p>
              </div>
            ))}

            {/* Jam Kerja */}
            <div className="card-glass p-6">
              <h3 className="font-semibold text-text-primary text-sm mb-4">Jam Operasional</h3>
              <ul className="space-y-2.5">
                {[
                  { day: 'Senin – Jumat', time: '08.00 – 21.00 WIB' },
                  { day: 'Sabtu', time: '09.00 – 17.00 WIB' },
                  { day: 'Minggu', time: 'Emergency only' },
                ].map(({ day, time }) => (
                  <li key={day} className="flex justify-between text-sm">
                    <span className="text-text-secondary">{day}</span>
                    <span className="text-text-primary font-medium">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div className="card-glass p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm mb-1">Lokasi</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Surabaya, Jawa Timur, Indonesia
                  </p>
                  <p className="text-text-secondary text-xs mt-1 opacity-70">
                    (Melayani klien seluruh Indonesia secara remote)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="card-glass p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-text-primary mb-2">Pesan Terkirim!</h3>
                  <p className="text-text-secondary text-sm max-w-xs">
                    WhatsApp kami akan terbuka. Jika tidak, silakan hubungi kami langsung di nomor yang tersedia.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display font-bold text-2xl text-text-primary mb-1">Formulir Konsultasi</h2>
                    <p className="text-text-secondary text-sm">Isi form ini dan kami akan segera menghubungi Anda.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-text-secondary text-xs font-medium mb-2">Nama Lengkap *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Budi Santoso"
                        className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-text-secondary text-xs font-medium mb-2">Alamat Email *</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="budi@gmail.com"
                        type="email"
                        className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-text-secondary text-xs font-medium mb-2">Nomor WhatsApp *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="08xxxxxxxxxx"
                        className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-text-secondary text-xs font-medium mb-2">Layanan yang Dibutuhkan</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors appearance-none"
                      >
                        <option value="" className="text-muted">Pilih layanan...</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} className="bg-bg">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-text-secondary text-xs font-medium mb-2">Estimasi Budget</label>
                    <div className="flex flex-wrap gap-2">
                      {['< Rp 1 juta', 'Rp 1–5 juta', '> Rp 5–10 juta', '> Rp 10 juta', 'Belum tahu'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-150 ${
                            form.budget === b
                              ? 'bg-accent/15 border-accent/40 text-accent-light'
                              : 'bg-surface border-border text-text-secondary hover:border-accent/20 hover:text-text-primary'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-text-secondary text-xs font-medium mb-2">Detail Proyek *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Ceritakan tentang bisnis Anda, tujuan website, fitur yang diinginkan, atau pertanyaan yang ingin Anda ajukan..."
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-text-primary text-sm placeholder-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!form.name || !form.email || !form.phone || !form.message}
                    className="w-full py-4 bg-accent hover:bg-accent-glow text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Kirim via WhatsApp
                  </button>

                  <p className="text-center text-text-secondary text-xs">
                    Form ini akan membuka WhatsApp dengan pesan yang sudah terisi otomatis.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
