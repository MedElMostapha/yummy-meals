import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { MenuGrid } from "@/components/menu-grid";
import { HowItWorks } from "@/components/how-it-works";
import { WhyBento } from "@/components/why-bento";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { SignupCta } from "@/components/signup-cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <MenuGrid />
        <HowItWorks />
        <WhyBento />
        <Testimonials />
        <Pricing />
        <SignupCta />
      </main>
      <SiteFooter />
    </>
  );
}
