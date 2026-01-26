import Badge from '@/components/Badge';
import type { Project } from '@/lib/content';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">{project.title}</h3>
          <div className="text-xs text-slate-600">{project.timeframe}</div>
        </div>
        <p className="text-sm text-slate-700">{project.subtitle}</p>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-800">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      {project.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-slate-900 underline underline-offset-4 hover:opacity-70">
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
