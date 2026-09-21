import { tickerWords } from "@/lib/content";

export function Ticker() {
  return (
    <section
      aria-label="What comes with every box"
      className="border-y border-forest-2 bg-forest py-4 text-on-forest"
    >
      <div className="pause-on-hover marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex items-center"
            >
              {tickerWords.map((word) => (
                <li
                  key={word}
                  className="flex items-center gap-6 whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.2em]"
                >
                  {word}
                  <span className="inline-block size-1.5 rounded-full bg-flare" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
