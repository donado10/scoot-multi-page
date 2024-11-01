import React from "react";
import TitlePage from "@/Components/TitlePage";
import AboutDescriptionSection from "@/Components/About/AboutDescriptionSection";
import AboutValueSection from "@/Components/About/AboutValuesSection";
import AboutFAQSection from "@/Components/About/AboutFAQSection";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col gap-8">
        <TitlePage
          title="About"
          image={{
            small: "assets/images/about-hero-mobile.jpg",
            tablet: "assets/images/about-hero-tablet.jpg",
            big: "assets/images/about-hero-desktop.jpg",
          }}
        />
        <AboutDescriptionSection />
        <AboutValueSection />
        <AboutFAQSection />
      </div>
    </div>
  );
}
