import DescriptionSection from "@/Components/Home/DescriptionSection";
import { Hero } from "@/Components/Home/Hero";
import HowToSection from "@/Components/Home/HowToSection";

export default function Home() {
  return (
    <div className="flex w-screen flex-col">
      <div className="flex w-screen flex-col gap-8">
        <Hero />
        <HowToSection />
        <DescriptionSection />
      </div>
    </div>
  );
}
