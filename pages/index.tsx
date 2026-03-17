import FeactureSection from "@/components/feacture-section";
import HeroSection from "@/components/hero-section";

export default function HomePage() {
  return (
    <>
      <article className="flex flex-col items-center">
        <HeroSection />
        <FeactureSection/>
      </article>
    </>
  );
}
