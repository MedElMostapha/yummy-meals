import Image from "next/image";
import { Leaf } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./reveal";
import { images } from "@/lib/content";

export function WhyBento() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 className="max-w-[20ch] font-display text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
          A box that respects your week
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal className="lg:row-span-2">
            <div className="relative h-full min-h-[340px] overflow-hidden bg-forest">
              <Image
                src={images.produce}
                alt="Crates of fresh cauliflower, broccoli, radishes and onions at a market"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-on-forest md:p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  Straight from the farm
                </h3>
                <p className="mt-2 max-w-[42ch] text-sm text-on-forest-soft">
                  Produce picked within the week and packed the morning it ships
                  to you.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal className="h-full">
              <div className="relative h-full min-h-[220px] overflow-hidden bg-forest">
                <Image
                  src={images.prep}
                  alt="Avocado, tomatoes, eggs and mushrooms laid out for cooking"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-bold text-on-forest">
                  Everything pre-portioned
                </p>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={0.06}>
              <div className="flex h-full min-h-[220px] flex-col justify-between bg-accent p-6 text-accent-ink">
                <span className="font-display text-6xl font-extrabold leading-none">
                  12
                </span>
                <p className="mt-10 max-w-[22ch] text-sm font-medium">
                  new recipes land every Wednesday
                </p>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={0.12}>
              <div className="flex h-full min-h-[220px] flex-col justify-between border border-line bg-paper-2 p-6">
                <Leaf size={28} weight="bold" className="text-accent" />
                <p className="mt-10 max-w-[24ch] text-sm">
                  Skip, pause or cancel any week. No lock-in, ever.
                </p>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={0.18}>
              <div className="flex h-full min-h-[220px] flex-col justify-between border border-line bg-paper-2 p-6">
                <span className="font-display text-6xl font-extrabold leading-none">
                  30
                </span>
                <p className="mt-10 max-w-[22ch] text-sm">
                  minutes, average start to plate
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
