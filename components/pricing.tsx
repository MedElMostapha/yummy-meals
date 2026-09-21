import { Reveal } from "./reveal";
import { plans } from "@/lib/content";

export function Pricing() {
  return (
    <section id="plans" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 className="max-w-[18ch] font-display text-4xl font-extrabold tracking-[-0.02em] sm:text-5xl">
          Pricing that flexes with your week
        </h2>
        <p className="mt-4 max-w-[54ch] text-ink-soft">
          Choose how many dinners you want. Change the size, skip a week or stop
          entirely whenever you like.
        </p>

        <div className="mt-12 border-t border-line">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.05}>
              <div className="grid grid-cols-1 items-center gap-5 border-b border-line py-7 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{plan.blurb}</p>
                </div>

                <div className="flex items-center gap-3 md:col-span-4">
                  <span className="font-display text-3xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                    / serving
                  </span>
                  {plan.tag && (
                    <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-ink">
                      {plan.tag}
                    </span>
                  )}
                </div>

                <div className="md:col-span-3 md:text-right">
                  <a
                    href="#start"
                    className="inline-flex h-11 items-center rounded-full border border-ink/25 px-6 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    Choose plan
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
          Example pricing for this concept. Final price is set at checkout.
        </p>
      </div>
    </section>
  );
}
