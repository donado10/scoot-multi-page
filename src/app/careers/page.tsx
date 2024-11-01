import ApplySection from "@/Components/Careers/ApplySection";
import CareToJoinSection from "@/Components/Careers/CareToJoinSection";
import WhyJoinUsSection from "@/Components/Careers/WhyJoinUsSection";
import TitlePage from "@/Components/TitlePage";

export default function Careers() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col gap-8">
        <TitlePage
          title="Careers"
          image={{
            small: "assets/images/careers-location-hero-mobile.jpg",
            tablet: "assets/images/careers-locations-hero-tablet.jpg",
            big: "assets/images/careers-locations-hero-desktop.jpg",
          }}
        />
        <CareToJoinSection />
        <WhyJoinUsSection />
        <ApplySection />
      </div>
    </div>
  );
}
