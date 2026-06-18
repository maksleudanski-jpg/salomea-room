import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "./hooks/useLenis";
import { useReveal } from "./hooks/useReveal";
import { GrainOverlay } from "./components/GrainOverlay";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MainSequenceSection } from "./components/MainSequenceSection";
import { WhySalomeaSection } from "./components/WhySalomeaSection";
import { WhyCollegeSection } from "./components/WhyCollegeSection";
import { ArchiveSequenceSection } from "./components/ArchiveSequenceSection";
import { StatueIdeaSection } from "./components/StatueIdeaSection";
import { PlacementSection } from "./components/PlacementSection";
import { InteractiveMapSection } from "./components/InteractiveMapSection";
import { BentoFeaturesSection } from "./components/BentoFeaturesSection";
import { FinalSection } from "./components/FinalSection";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useLenis();
  useReveal();

  return (
    <>
      <GrainOverlay />
      <Header />
      <main>
        <HeroSection />
        <MainSequenceSection />
        <WhySalomeaSection />
        <WhyCollegeSection />
        <ArchiveSequenceSection />
        <StatueIdeaSection />
        <PlacementSection />
        <InteractiveMapSection />
        <BentoFeaturesSection />
        <FinalSection />
      </main>
    </>
  );
}
