'use client';

/**
 * Soft animated orbs + grid for the hero; pure CSS-driven for light GPU use.
 */
export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-orb hero-orb-a absolute -left-1/4 top-0 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-orange-500/20 blur-[100px]" />
      <div className="hero-orb hero-orb-b absolute -right-1/4 top-1/4 h-[min(60vw,440px)] w-[min(60vw,440px)] rounded-full bg-blue-600/15 blur-[90px]" />
      <div className="hero-orb hero-orb-c absolute bottom-0 left-1/3 h-[min(50vw,360px)] w-[min(50vw,360px)] rounded-full bg-amber-400/10 blur-[80px]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%)',
        }}
      />
    </div>
  );
}
