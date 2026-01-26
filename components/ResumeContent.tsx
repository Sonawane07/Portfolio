'use client';

import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import Badge from '@/components/Badge';
import useTrack from '@/components/useTrack';
import { EDUCATION, EXPERIENCE, SITE, TRACKS } from '@/lib/content';

export default function ResumeContent() {
  const track = useTrack();
  const t = TRACKS[track];
  const experience = EXPERIENCE.filter((item) => item.tracks.includes(track));

  return (
    <main className="py-12">
      <Container>
        <SectionHeading title="Resume" kicker={<span>Download the {t.label} version</span>} />

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={t.resumePath}
            className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            target="_blank"
            rel="noreferrer"
          >
            Download {t.label} resume (PDF)
          </a>
          <a
            href={track === 'aiml' ? TRACKS.sde.resumePath : TRACKS.aiml.resumePath}
            className="rounded-full border border-slate-700/70 bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Download {track === 'aiml' ? 'SDE' : 'AI/ML'} version
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full border border-slate-700/70 bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
          >
            Email
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-100">Summary</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{t.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.primarySkills.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-100">Quick metrics</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>1K+ users live topic-based video chats (React Native + AWS + MySQL).</li>
              <li>85% unit test coverage (Jest + Pytest); 30% fewer runtime bugs.</li>
              <li>CSE Demo Day: 2nd place out of 95 projects.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-100">Experience</div>
            <div className="mt-4 space-y-5">
              {experience.map((e) => (
                <div key={e.company} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-sm font-medium text-slate-100">{e.role} · {e.company}</div>
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
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-100">Education</div>
            <div className="mt-4 space-y-5">
              {EDUCATION.map((ed) => (
                <div key={ed.school} className="space-y-1">
                  <div className="text-sm font-medium text-slate-100">{ed.degree}</div>
                  <div className="text-sm text-slate-300">{ed.school}</div>
                  <div className="text-xs text-slate-400">{ed.timeframe} · {ed.meta}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {ed.coursework.map((c) => (
                      <Badge key={c}>{c}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
          <div className="text-sm font-semibold text-slate-100">Tip for reviewers</div>
          <p className="mt-2 text-sm text-slate-300">
            Everything on this site is role‑filtered. Use the toggle (AI/ML vs SDE) and the projects page tag filter to quickly spot the most relevant work.
          </p>
        </div>
      </Container>
    </main>
  );
}
