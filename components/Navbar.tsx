import Link from 'next/link';
import Container from '@/components/Container';
import { SITE } from '@/lib/content';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#060912]/85 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <Link href="/" className="truncate text-sm font-semibold tracking-tight text-slate-100">
              {SITE.name}
            </Link>
            <div className="text-xs text-slate-400">{SITE.location}</div>
          </div>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/80 hover:text-amber-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 transition hover:border-amber-400/50 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pb-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-xs text-slate-300 transition hover:border-amber-400/50 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}
