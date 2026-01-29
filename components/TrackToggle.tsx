'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Track } from '@/lib/content';
import { TRACKS } from '@/lib/content';

function normalizeTrack(v: string | null): Track {
  return v === 'sde' ? 'sde' : 'aiml';
}

export default function TrackToggle({ className = '' }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();

  // derive initial track WITHOUT search params
  const initial = useMemo<Track>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('track');
      if (stored === 'sde' || stored === 'aiml') return stored;
    }
    return 'aiml';
  }, []);

  const [track, setTrack] = useState<Track>(initial);

  useEffect(() => {
    try {
      window.localStorage.setItem('track', track);
    } catch {
      // ignore
    }
  }, [track]);

  function set(t: Track) {
    setTrack(t);
    router.replace(`${pathname}?track=${t}`, { scroll: false });
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/80 p-1 text-xs ${className}`}
    >
      {(['aiml', 'sde'] as Track[]).map((t) => (
        <button
          key={t}
          onClick={() => set(t)}
          className={`rounded-full px-3 py-1.5 font-medium transition ${
            track === t
              ? 'bg-cyan-400 text-slate-950'
              : 'text-slate-300 hover:bg-slate-800'
          }`}
          aria-pressed={track === t}
        >
          {TRACKS[t].label}
        </button>
      ))}
    </div>
  );
}
