'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import Badge from '@/components/Badge';
import Container from '@/components/Container';
import HeroBackdrop from '@/components/HeroBackdrop';
import ProjectCard from '@/components/ProjectCard';
import SectionHeading from '@/components/SectionHeading';
import { Reveal, RevealItem, RevealStagger } from '@/components/Reveal';
import {
  ABOUT,
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  HERO,
  PROJECTS,
  SITE,
  SKILL_CATEGORIES,
} from '@/lib/content';

const heroEase = [0.22, 1, 0.36, 1] as const;

export default function HomeContent() {
  const reduce = useReducedMotion();

  return (
    <main>
      <section className="relative flex min-h-[calc(100dvh-5.5rem)] items-center overflow-hidden py-14 sm:py-20">
        <HeroBackdrop />
        <Container>
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-16">
            <div className="order-2 flex flex-col gap-6 lg:order-1">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: heroEase }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/95 sm:text-sm">Hi there</p>
              </motion.div>

              <motion.h1
                className="font-display text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06, ease: heroEase }}
              >
                <span className="block">Darshan Sunil</span>
                <span className="block bg-gradient-to-r from-amber-200 via-orange-300 to-rose-300 bg-clip-text text-transparent">
                  Sonawane
                </span>
              </motion.h1>

              <motion.p
                className="max-w-xl font-display text-lg font-semibold text-slate-200 sm:text-xl"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: heroEase }}
              >
                {HERO.headline}
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18, ease: heroEase }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">I am</p>
                <p className="font-display mt-1 text-2xl font-bold text-white sm:text-3xl">
                  {SITE.shortName}
                  <span className="text-amber-400">*</span>
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{HERO.summary}</p>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400"
                initial={reduce ? false : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.24, ease: heroEase }}
              >
                <span>{SITE.location}</span>
                <span className="hidden text-slate-600 sm:inline">·</span>
                <span className="text-slate-300">Open to opportunities</span>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28, ease: heroEase }}
              >
                <Link
                  href="/projects"
                  className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition hover:opacity-95 hover:shadow-orange-500/35"
                >
                  View projects
                </Link>
                <Link
                  href="/resume"
                  className="rounded-full border border-slate-600/80 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-amber-400/50 hover:text-white"
                >
                  Resume
                </Link>
                <a
                  href={`mailto:${SITE.email}`}
                  className="rounded-full border border-slate-600/80 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur transition hover:border-amber-400/50 hover:text-white"
                >
                  Email
                </a>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2"
                initial={reduce ? false : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.34, ease: heroEase }}
              >
                {HERO.skillChips.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </motion.div>

              <motion.p
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-500"
                initial={reduce ? false : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: heroEase }}
              >
                <span className={reduce ? '' : 'animate-scroll-hint inline-flex items-center gap-2'}>
                  Scroll for more <span className="text-amber-500/80">✦</span>
                </span>
              </motion.p>
            </div>

            <motion.div
              className="order-1 flex justify-center lg:order-2 lg:justify-end"
              initial={reduce ? false : { opacity: 0, scale: 0.94, x: 24 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: heroEase }}
            >
              <div className={`relative w-full max-w-md lg:max-w-none ${reduce ? '' : 'animate-profile-float'}`}>
                <motion.div
                  className="absolute -inset-px rounded-[1.85rem] bg-gradient-to-br from-amber-400/80 via-orange-500/50 to-blue-600/60 opacity-70 blur-[2px]"
                  aria-hidden
                  animate={
                    reduce
                      ? undefined
                      : {
                          opacity: [0.55, 0.85, 0.55],
                        }
                  }
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/40 shadow-2xl shadow-orange-950/20 ring-1 ring-white/5">
                  <Image
                    src="/profile.png"
                    alt={`${SITE.name}, profile photo`}
                    width={960}
                    height={640}
                    className="aspect-[4/3] w-full object-cover object-[center_20%]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060912]/80 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-slate-800/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="About me"
              kicker={<span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90">Story</span>}
            />
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <RevealStagger className="space-y-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              {ABOUT.paragraphs.map((p) => (
                <RevealItem key={p}>
                  <p>{p}</p>
                </RevealItem>
              ))}
            </RevealStagger>
            <Reveal delay={0.1} className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-sm">
              <div className="text-sm font-semibold text-slate-100">Education</div>
              <div className="mt-5 space-y-6">
                {EDUCATION.map((ed) => (
                  <div key={ed.school} className="space-y-2">
                    <div className="text-sm font-medium text-white">{ed.degree}</div>
                    <div className="text-sm text-slate-300">{ed.school}</div>
                    <div className="text-xs text-slate-500">
                      {ed.timeframe} · {ed.meta}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {ed.coursework.map((c) => (
                        <Badge key={c}>{c}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-slate-800/80 pt-6">
                <div className="text-sm font-semibold text-slate-100">Links</div>
                <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
                  <a className="transition hover:text-amber-300" href={SITE.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className="transition hover:text-amber-300" href={SITE.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="transition hover:text-amber-300" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="Skills"
              kicker={
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90">Technical depth</span>
              }
            />
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 max-w-2xl text-sm text-slate-400">
              From research ML and GenAI to mobile apps, APIs, and cloud infrastructure—one stack, many surfaces.
            </p>
          </Reveal>
          <RevealStagger className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {SKILL_CATEGORIES.map((cat) => (
              <RevealItem key={cat.title}>
                <div className="group h-full rounded-2xl border border-slate-800/80 bg-slate-900/45 p-6 transition duration-300 hover:border-amber-500/30 hover:bg-slate-900/65 hover:shadow-lg hover:shadow-amber-500/5">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-amber-400/90">{cat.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <li key={item}>
                        <span className="inline-flex rounded-lg border border-slate-700/60 bg-slate-950/40 px-2.5 py-1 text-xs font-medium text-slate-200 transition group-hover:border-slate-600/80">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section id="experience" className="scroll-mt-24 border-t border-slate-800/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="Work experience"
              kicker={
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90">Professional journey</span>
              }
            />
          </Reveal>
          <div className="mt-10 space-y-8">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={`${e.company}-${e.timeframe}`} delay={i * 0.06}>
                <article className="rounded-2xl border border-slate-800/80 bg-slate-900/45 p-6 transition duration-300 hover:border-amber-500/20 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{e.role}</h3>
                      <p className="text-sm font-medium text-amber-400/90">{e.company}</p>
                      {e.location ? <p className="text-xs text-slate-500">{e.location}</p> : null}
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-right">{e.timeframe}</p>
                  </div>
                  <ul className="mt-5 list-none space-y-3 text-sm leading-relaxed text-slate-300">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-500/80" aria-hidden />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHeading
                title="Projects"
                kicker={
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90">Highlights</span>
                }
              />
            </Reveal>
            <Reveal delay={0.05}>
              <Link
                href="/projects"
                className="text-sm font-medium text-amber-400 underline decoration-amber-500/40 underline-offset-4 transition hover:text-amber-300"
              >
                Browse all
              </Link>
            </Reveal>
          </div>
          <RevealStagger className="mt-10 grid gap-6">
            {PROJECTS.map((p) => (
              <RevealItem key={p.id}>
                <ProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-slate-800/60 py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              title="Contact"
              kicker={
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90">Let&apos;s work together</span>
              }
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 rounded-2xl border border-slate-800/80 bg-slate-900/45 p-8 transition hover:border-amber-500/20">
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{CONTACT.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
                >
                  Email me
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-600/80 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-amber-400/50"
                >
                  LinkedIn
                </a>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-600/80 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-amber-400/50"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
