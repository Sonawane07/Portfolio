'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Badge from '@/components/Badge';
import type { Project } from '@/lib/content';

export default function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      whileHover={
        reduce
          ? undefined
          : {
              y: -6,
              transition: { type: 'spring', stiffness: 420, damping: 28 },
            }
      }
      className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-sm transition-[box-shadow] duration-300 hover:border-amber-500/25 hover:shadow-lg hover:shadow-amber-500/5"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
        style={{
          background:
            'linear-gradient(115deg, transparent 40%, rgba(251, 191, 36, 0.06) 50%, transparent 60%)',
        }}
      />
      <div className="relative flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-slate-100">{project.title}</h3>
          <div className="text-xs text-slate-400">{project.timeframe}</div>
        </div>
        <p className="text-sm text-slate-300">{project.subtitle}</p>
      </div>

      <ul className="relative mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {project.links?.length ? (
        <div className="relative mt-4 flex flex-wrap gap-3 text-sm">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 underline underline-offset-4 hover:text-amber-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}
