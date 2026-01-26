import type { ReactNode } from 'react';

export default function SectionHeading({ title, kicker }: { title: string; kicker?: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      {kicker ? <div className="text-sm text-slate-400">{kicker}</div> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
    </div>
  );
}
