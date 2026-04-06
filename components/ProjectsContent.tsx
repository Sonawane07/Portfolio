'use client';

import { useMemo, useState } from 'react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { PROJECTS } from '@/lib/content';

export default function ProjectsContent() {
  const [tag, setTag] = useState<string>('All');

  const allTags = useMemo(() => {
    const t = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((x) => t.add(x)));
    return ['All', ...Array.from(t).sort()];
  }, []);

  const visible = useMemo(() => {
    if (tag === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(tag));
  }, [tag]);

  return (
    <main className="py-12">
      <Container>
        <Reveal>
          <SectionHeading title="Projects" kicker={<span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90">Selected work</span>} />
        </Reveal>

        <Reveal delay={0.08} className="mt-6">
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTag(t)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  tag === t
                    ? 'border-amber-400/60 bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/15'
                    : 'border-slate-700/70 bg-slate-900/80 text-slate-300 hover:border-amber-400/50 hover:text-white'
                }`}
                aria-pressed={tag === t}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={tag} className="mt-8 grid gap-6">
          {visible.map((p) => (
            <Reveal key={`${tag}-${p.id}`}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
          {!visible.length ? (
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 text-sm text-slate-300">
              No projects found for this filter.
            </div>
          ) : null}
        </div>
      </Container>
    </main>
  );
}
