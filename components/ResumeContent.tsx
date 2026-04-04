'use client';

import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Badge from '@/components/Badge';
import { Reveal } from '@/components/Reveal';
import { EDUCATION, EXPERIENCE, HERO, RESUMES, SITE } from '@/lib/content';

export default function ResumeContent() {
  return (
    <main className="py-12">
      <Container>
        <Reveal>
          <SectionHeading
            title="Resume"
            kicker={<span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90">Downloads & snapshot</span>}
          />
        </Reveal>

        <Reveal delay={0.06} className="mt-6 flex flex-wrap gap-3">
          {RESUMES.map((r) => (
            <a
              key={r.path}
              href={r.path}
              className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-orange-500/20 transition hover:opacity-95"
              target="_blank"
              rel="noreferrer"
            >
              {r.label}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full border border-slate-700/70 bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-amber-400/50 hover:text-white"
          >
            Email
          </a>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-100">Summary</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{HERO.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {HERO.skillChips.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-100">Quick metrics</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>1K+ users on live topic-based video chats (React Native + AWS + MySQL).</li>
              <li>85% unit test coverage (Jest + Pytest); ~30% fewer runtime bugs on core flows.</li>
              <li>RAG platform with 10+ isolated agents; diffusion & HOI research pipelines in PyTorch.</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-100">Experience</div>
            <div className="mt-4 space-y-5">
              {EXPERIENCE.map((e) => (
                <div key={`${e.company}-${e.timeframe}`} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-sm font-medium text-slate-100">
                      {e.role} · {e.company}
                    </div>
                    <div className="text-xs text-slate-400">{e.timeframe}</div>
                  </div>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-100">Education</div>
            <div className="mt-4 space-y-5">
              {EDUCATION.map((ed) => (
                <div key={ed.school} className="space-y-1">
                  <div className="text-sm font-medium text-slate-100">{ed.degree}</div>
                  <div className="text-sm text-slate-300">{ed.school}</div>
                  <div className="text-xs text-slate-400">
                    {ed.timeframe} · {ed.meta}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {ed.coursework.map((c) => (
                      <Badge key={c}>{c}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
