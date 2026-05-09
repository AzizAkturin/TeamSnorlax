import LandingNav from "@/components/LandingNav";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FaqAccordion from "@/components/FaqAccordion";
import LandingFooter from "@/components/LandingFooter";

export default function LandingPage() {
  return (
    <>
      <LandingNav />
      <main className="flex-1">
        <HeroSection />
        <FeatureCards />
        <Testimonials />
        <PricingSection />
        <FaqAccordion />
      </main>
      <LandingFooter />
    </>
  );
}
