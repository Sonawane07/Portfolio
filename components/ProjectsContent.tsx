'use client';

import { useMemo, useState } from 'react';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import useTrack from '@/components/useTrack';
import { PROJECTS, TRACKS } from '@/lib/content';

export default function ProjectsContent() {
  const track = useTrack();
  const [tag, setTag] = useState<string>('All');

  const allTags = useMemo(() => {
    const t = new Set<string>();
    PROJECTS.filter((p) => p.tracks.includes(track)).forEach((p) => p.tags.forEach((x) => t.add(x)));
    return ['All', ...Array.from(t).sort()];
  }, [track]);

  const visible = useMemo(() => {
    const base = PROJECTS.filter((p) => p.tracks.includes(track));
    if (tag === 'All') return base;
    return base.filter((p) => p.tags.includes(tag));
  }, [track, tag]);

  return (
    <main className="py-12">
      <Container>
        <SectionHeading
          title="Projects"
          kicker={<span>Showing: <strong>{TRACKS[track].label}</strong> view</span>}
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                tag === t
                  ? 'border-cyan-400/60 bg-cyan-400 text-slate-950'
                  : 'border-slate-700/70 bg-slate-900/80 text-slate-300 hover:border-cyan-400/60 hover:text-white'
              }`}
              aria-pressed={tag === t}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </Container>
    </main>
  );
}
