import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/app/sections/Hero";
import { TrustStrip } from "@/app/sections/TrustStrip";
import { HowItWorks } from "@/app/sections/HowItWorks";
import { InTheHand } from "@/app/sections/InTheHand";
import { SafetyFirst } from "@/app/sections/SafetyFirst";
import { BilingualShowcase } from "@/app/sections/BilingualShowcase";
import { AppShowcase } from "@/app/sections/AppShowcase";
import { FeatureGrid } from "@/app/sections/FeatureGrid";
import { Testimonials } from "@/app/sections/Testimonials";
import { CTAFooter } from "@/app/sections/CTAFooter";

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
        {/* <HowItWorks /> */}
        {/* <InTheHand /> */}
        {/* <SafetyFirst /> */}
        {/* <BilingualShowcase /> */}
        {/* <FeatureGrid /> */}
        {/* <Testimonials /> */}
        <CTAFooter />
      </main>
    </>
  );
}
