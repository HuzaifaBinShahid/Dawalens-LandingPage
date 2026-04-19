import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/app/sections/Hero";
import { TrustStrip } from "@/app/sections/TrustStrip";
import { AppShowcase } from "@/app/sections/AppShowcase";
import { Waitlist } from "@/app/sections/Waitlist";
import { SiteFooter } from "@/app/sections/CTAFooter";

// Unused sections kept for future re-enable:
// import { Features } from "@/app/sections/Features";
// import { InTheHand } from "@/app/sections/InTheHand";
// import { HowItWorks } from "@/app/sections/HowItWorks";
// import { SafetyFirst } from "@/app/sections/SafetyFirst";
// import { Testimonials } from "@/app/sections/Testimonials";
// import { BilingualShowcase } from "@/app/sections/BilingualShowcase";

export default function Page() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <TrustStrip />
        <AppShowcase />
        {/* <Features /> */}
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  );
}
