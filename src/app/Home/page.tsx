import DescriptionSection from "@/Components/DescriptionSection";
import FooterSection from "@/Components/FooterSection";
import { Header } from "@/Components/Header";
import { Hero } from "@/Components/Hero";
import HowToSection from "@/Components/HowToSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col gap-8">
        <Hero />
        <HowToSection />
        <DescriptionSection />
      </div>
    </div>
  );
}
