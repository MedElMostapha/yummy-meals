import { Reveal } from "./reveal";
import { reviews } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="reviews" className="border-y border-line bg-paper-2 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <figure>
            <blockquote className="font-display text-3xl font-bold leading-[1.12] tracking-[-0.02em] sm:text-4xl">
              &ldquo;I cancelled two other subscriptions in the first week. The
              recipes taste like something I would have ordered out.&rdquo;
            </blockquote>
            <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              Marguerite L. / Brooklyn
            </figcaption>
          </figure>
        </Reveal>

        <div className="flex flex-col divide-y divide-line lg:col-span-5">
          {reviews.map((review, index) => (
            <Reveal
              key={review.name}
              delay={index * 0.08}
              className="flex-1 py-8 first:pt-0 last:pb-0"
            >
              <figure className="flex h-full flex-col justify-between gap-6">
                <blockquote className="max-w-[42ch] text-lg leading-relaxed text-ink">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                  {review.name} / {review.place}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
