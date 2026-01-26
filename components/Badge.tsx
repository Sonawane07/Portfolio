import type { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-300">
      {children}
    </span>
  );
}
