import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { meals } from "@/lib/content";

export function MenuGrid() {
  return (
    <section id="menu" className="border-t border-line bg-paper-2 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
              This week&apos;s menu
            </h2>
            <p className="mt-3 max-w-[52ch] text-ink-soft">
              Four of the twelve dinners in this week&apos;s box. Swap any of them
              until Wednesday night.
            </p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            Updated every Wednesday
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {meals.map((meal, index) => (
            <Reveal
              key={meal.name}
              delay={index * 0.06}
              className={index % 2 === 1 ? "lg:mt-14" : undefined}
            >
              <a href="#start" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-3">
                  <Image
                    src={meal.image}
                    alt={meal.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink backdrop-blur">
                    {meal.diet}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {meal.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                      {meal.time} min / {meal.kcal} kcal
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <span className="font-display text-lg font-bold">
                      {meal.price}
                    </span>
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
