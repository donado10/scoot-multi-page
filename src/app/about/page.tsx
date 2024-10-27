import React from "react";
import TitlePage from "@/Components/TitlePage";
import AboutDescriptionSection from "@/Components/About/AboutDescriptionSection";
import AboutValueSection from "@/Components/About/AboutValuesSection";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col gap-8">
        <TitlePage title="About" />
        <AboutDescriptionSection />
        <AboutValueSection />
      </div>
    </div>
  );
}
