import React from "react";
import TitlePage from "@/Components/TitlePage";
import AboutDescriptionSection from "@/Components/About/AboutDescriptionSection";
import AboutValueSection from "@/Components/About/AboutValuesSection";
import AboutFAQSection from "@/Components/About/AboutFAQSection";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col gap-8">
        <TitlePage title="About" />
        <AboutDescriptionSection />
        <AboutValueSection />
        <AboutFAQSection />
      </div>
    </div>
  );
}
