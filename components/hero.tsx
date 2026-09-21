import Image from "next/image";
import { Clock } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { images } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              Weekly meal kits
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 font-display text-[clamp(3rem,7vw,5rem)] font-extrabold leading-[0.94] tracking-[-0.02em]">
              Real dinners.
              <br />
              <span className="text-accent">Zero guesswork.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-ink-soft">
              Chef-designed kits with pre-portioned produce. Twelve new dinners a
              week, on your table in 30 minutes.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#start"
                className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-2"
              >
                Get started
              </a>
              <a
                href="#menu"
                className="inline-flex h-12 items-center rounded-full border border-ink/25 px-7 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                See this week&apos;s menu
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.1} y={32}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-3 -top-3 size-full border border-ink/15"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-3 sm:aspect-[16/12] lg:aspect-[4/5]">
                <Image
                  src={images.hero}
                  alt="A chef spooning sauce over a plated dinner"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink backdrop-blur">
                <Clock size={13} weight="bold" />
                Ready in 30
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
