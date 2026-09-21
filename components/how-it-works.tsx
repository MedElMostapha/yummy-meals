import Image from "next/image";
import { Reveal } from "./reveal";
import { images, steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how" className="bg-forest py-20 text-on-forest md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="max-w-[16ch] font-display text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
            Dinner, three steps away
          </h2>
          <p className="mt-4 max-w-[50ch] text-on-forest-soft">
            No shopping lists, no half-used bunches of herbs, no six o&apos;clock
            panic.
          </p>

          <ol className="mt-12">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-forest-2 py-8 last:border-b"
              >
                <span className="font-display text-3xl font-extrabold leading-none text-flare">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[46ch] text-on-forest-soft">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-5">
          <Reveal y={32}>
            <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-24">
              <Image
                src={images.how}
                alt="Hands slicing vegetables beside plates of prepared ingredients"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
