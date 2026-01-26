'use client';

import Link from 'next/link';
import Badge from '@/components/Badge';
import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import useTrack from '@/components/useTrack';
import { CONTACT, EDUCATION, EXPERIENCE, PROJECTS, SITE, TRACKS } from '@/lib/content';

export default function HomeContent() {
  const track = useTrack();
  const t = TRACKS[track];
  const featured = PROJECTS.filter((p) => p.tracks.includes(track)).slice(0, 3);

  return (
    <main>
      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{t.label} focus</Badge>
                <Badge>{SITE.location}</Badge>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                {t.headline}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">{t.summary}</p>

              <div className="mt-2 flex flex-wrap gap-3">
                <Link
                  href={`/projects?track=${track}`}
                  className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                >
                  View projects
                </Link>
                <Link
                  href={`/resume?track=${track}`}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  Resume
                </Link>
                <a
                  href={`mailto:${SITE.email}`}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  Contact
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {t.primarySkills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-medium text-slate-600">Highlight</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">1K+ live users</div>
                <div className="mt-1 text-sm text-slate-700">React Native video chat app on AWS + MySQL.</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-medium text-slate-600">Quality</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">85% test coverage</div>
                <div className="mt-1 text-sm text-slate-700">Jest + Pytest for critical modules.</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-medium text-slate-600">Recognition</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">2nd / 95</div>
                <div className="mt-1 text-sm text-slate-700">CSE Demo Day project showcase.</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="scroll-mt-24 py-12">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-6">
              <SectionHeading title="About" kicker={<span>Quick context</span>} />
              <div className="space-y-4 text-sm leading-relaxed text-slate-700">
                <p>
                  I’m a CS Master’s student at the University at Buffalo with experience across mobile, backend, and applied ML.
                  I like shipping end‑to‑end projects: clean APIs, measurable metrics, and production deployment.
                </p>
                <p>
                  This site has two views—<strong>AI/ML</strong> and <strong>SDE</strong>. Use the toggle in the navbar so recruiters can
                  quickly see the version that matches the role.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Experience</div>
                <div className="mt-4 space-y-4">
                  {EXPERIENCE.map((e) => (
                    <div key={e.company} className="space-y-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="text-sm font-medium text-slate-900">{e.role} · {e.company}</div>
                        <div className="text-xs text-slate-600">{e.timeframe}</div>
                      </div>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                        {e.highlights.slice(0, 2).map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Education</div>
                <div className="mt-4 space-y-4">
                  {EDUCATION.map((ed) => (
                    <div key={ed.school} className="space-y-1">
                      <div className="text-sm font-medium text-slate-900">{ed.degree}</div>
                      <div className="text-sm text-slate-700">{ed.school}</div>
                      <div className="text-xs text-slate-600">{ed.timeframe} · {ed.meta}</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {ed.coursework.map((c) => (
                          <Badge key={c}>{c}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900">Links</div>
                <div className="mt-3 space-y-2 text-sm">
                  <a className="block underline underline-offset-4" href={SITE.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className="block underline underline-offset-4" href={SITE.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="block underline underline-offset-4" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="skills" className="scroll-mt-24 py-12">
        <Container>
          <SectionHeading title="Skills" kicker={<span>Role‑aligned</span>} />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Primary (this track)</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {TRACKS[track].primarySkills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Also comfortable with</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {track === 'aiml'
                  ? ['TypeScript', 'React Native', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD'].map((s) => <Badge key={s}>{s}</Badge>)
                  : ['PyTorch', 'Transformers', 'RAG', 'Vector Search', 'FastAPI'].map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <SectionHeading title="Featured projects" kicker={<span>{t.label} view</span>} />
            <Link
              href={`/projects?track=${track}`}
              className="text-sm font-medium text-slate-900 underline underline-offset-4 hover:opacity-70"
            >
              See all
            </Link>
          </div>

          <div className="mt-6 grid gap-6">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-24 py-12">
        <Container>
          <SectionHeading title="Contact" kicker={<span>Let’s talk</span>} />
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-700">{CONTACT.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Email
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                LinkedIn
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
