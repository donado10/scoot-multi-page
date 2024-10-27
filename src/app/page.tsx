import DescriptionSection from "@/Components/Home/DescriptionSection";
import FooterSection from "@/Components/FooterSection";
import { Header } from "@/Components/Header";
import { Hero } from "@/Components/Home/Hero";
import HowToSection from "@/Components/Home/HowToSection";

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
