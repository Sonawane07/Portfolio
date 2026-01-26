'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Track } from '@/lib/content';

export default function useTrack(): Track {
  const params = useSearchParams();
  return useMemo(() => {
    const fromUrl = params.get('track');
    if (fromUrl === 'sde' || fromUrl === 'aiml') return fromUrl;
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('track');
      if (stored === 'sde' || stored === 'aiml') return stored;
    }
    return 'aiml';
  }, [params]);
}
