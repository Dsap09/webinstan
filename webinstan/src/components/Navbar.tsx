'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portofolio' },
  { href: '/produk', label: 'Produk' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          
          <span className="font-display font-bold text-xl text-text-primary">
            Web<span className="text-accent-light">Instan</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-lg" />
                  )}
                  <span className="relative">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/kontak"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-glow text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-glow hover:shadow-glow-lg"
        >
          Mulai Proyek
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-surface transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-72 border-b border-border' : 'max-h-0'
        } bg-bg/95 backdrop-blur-xl`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? 'bg-accent/10 text-text-primary border border-accent/20'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-3 bg-accent text-white text-sm font-medium rounded-xl"
            >
              Mulai Proyek
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
