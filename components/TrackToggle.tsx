'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { Track } from '@/lib/content';
import { TRACKS } from '@/lib/content';

function normalizeTrack(v: string | null): Track {
  return v === 'sde' ? 'sde' : 'aiml';
}

export default function TrackToggle({ className = '' }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initial = useMemo(() => {
    const fromUrl = searchParams.get('track');
    if (fromUrl) return normalizeTrack(fromUrl);

    // fallback to localStorage if present
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('track');
      if (stored === 'sde' || stored === 'aiml') return stored;
    }
    return 'aiml';
  }, [searchParams]);

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
    const params = new URLSearchParams(searchParams.toString());
    params.set('track', t);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={`inline-flex items-center rounded-full border border-slate-200 bg-white p-1 text-xs ${className}`}>
      {(['aiml', 'sde'] as Track[]).map((t) => (
        <button
          key={t}
          onClick={() => set(t)}
          className={`rounded-full px-3 py-1.5 font-medium transition ${
            track === t ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
          }`}
          aria-pressed={track === t}
        >
          {TRACKS[t].label}
        </button>
      ))}
    </div>
  );
}
