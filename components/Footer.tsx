import Container from '@/components/Container';
import { SITE } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {SITE.name} · {SITE.repoNote}
          </div>
          <div className="flex gap-4">
            <a className="hover:text-slate-900" href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hover:text-slate-900" href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-slate-900" href={`mailto:${SITE.email}`}>
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
