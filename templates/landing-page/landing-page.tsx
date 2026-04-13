import CallToAction from "./sections/call-to-action";
import CustumerStorySection from "./sections/custumer-story-section";
import FeactureSection from "./sections/feacture-section";
import HeroSection from "./sections/hero-section";
import SupportSection from "./sections/suport-section";

export function LandingPage() {
  return (
    <article className="flex flex-col items-center">
      <HeroSection />
      <FeactureSection />
      <SupportSection />
      <CustumerStorySection />
      <CallToAction />
    </article>
  );
}
