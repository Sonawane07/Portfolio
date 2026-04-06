'use client';

import { useId, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/lib/content';

function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-md border border-slate-600/80 bg-slate-800/80 px-2 py-1 text-[11px] font-medium text-slate-200">
      {children}
    </span>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const num = String(index + 1).padStart(2, '0');

  const gradient =
    project.heroGradient ?? 'from-slate-700/50 via-slate-800/40 to-slate-950/90';

  return (
    <motion.article
      layout
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              transition: { type: 'spring', stiffness: 420, damping: 30 },
            }
      }
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/40 shadow-lg shadow-black/20"
    >
      <div className={`relative h-36 shrink-0 bg-gradient-to-br ${gradient} sm:h-40`}>
        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/30 font-display text-sm font-bold text-white backdrop-blur-sm">
          {num}
        </div>
        {project.heroEmoji ? (
          <div className="flex h-full items-center justify-center text-5xl opacity-90 drop-shadow-md sm:text-6xl">
            {project.heroEmoji}
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col border-t border-slate-800/80 bg-[#0a0f1a]/95 p-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-lg font-semibold leading-snug text-white">{project.title}</h3>
          <p className="text-xs text-slate-400">
            {project.timeframe}
            {project.category ? (
              <>
                {' '}
                <span className="text-slate-600">•</span> {project.category}
              </>
            ) : null}
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-slate-300">{project.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <TechPill key={t}>{t}</TechPill>
          ))}
          {project.tech.length > 5 ? <TechPill>+{project.tech.length - 5}</TechPill> : null}
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-xl border border-fuchsia-500/50 bg-transparent py-2.5 text-sm font-semibold text-fuchsia-300 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/10 hover:text-fuchsia-200"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Hide details' : 'View details'}
        </button>

        {open ? (
          <div id={panelId} className="mt-4 space-y-4 border-t border-slate-800/80 pt-4">
            <p className="text-sm leading-relaxed text-slate-300">{project.detailDescription}</p>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Technologies used</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <TechPill key={t}>{t}</TechPill>
                ))}
              </div>
            </div>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-fuchsia-600 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-900/30 transition hover:bg-fuchsia-500"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.05 1.765 2.805 1.26 3.495.945.105-.75.42-1.26.765-1.56-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            ) : (
              <p className="text-center text-xs text-slate-500">Public repository link coming soon. Reach out for access.</p>
            )}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
