import {
  InstagramLogo,
  PinterestLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const explore = [
  { label: "This week's menu", href: "#menu" },
  { label: "How it works", href: "#how" },
  { label: "Plans", href: "#plans" },
  { label: "Reviews", href: "#reviews" },
];

const socials = [
  { label: "Yummy on Instagram", href: "https://instagram.com", Icon: InstagramLogo },
  { label: "Yummy on Pinterest", href: "https://pinterest.com", Icon: PinterestLogo },
  { label: "Yummy on YouTube", href: "https://youtube.com", Icon: YoutubeLogo },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-forest-2 bg-forest text-on-forest">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <p className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            yummy<span className="text-flare">.</span>
          </p>
          <a
            href="#start"
            className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-2"
          >
            Get started
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-forest-2 pt-12 md:grid-cols-4">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-forest-soft">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-on-forest transition-colors hover:text-flare"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-forest-soft">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@yummy.example"
                  className="transition-colors hover:text-flare"
                >
                  hello@yummy.example
                </a>
              </li>
              <li className="text-on-forest-soft">
                Help centre, seven days a week.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-forest-soft">
              Follow
            </h2>
            <ul className="mt-5 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-on-forest/25 transition-colors hover:border-flare hover:text-flare"
                  >
                    <Icon size={18} weight="bold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-forest-soft">
              Every box
            </h2>
            <p className="mt-5 max-w-[26ch] text-sm text-on-forest-soft">
              Chef-designed kits with pre-portioned, farm-direct produce.
              Delivered chilled.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-forest-2">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-on-forest-soft md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Yummy</p>
          <p>A fictional brand, built as a design concept.</p>
        </div>
      </div>
    </footer>
  );
}
