import CityNotListedSection from "@/Components/Locations/CityNotListedSection";
import WorldMapSection from "@/Components/Locations/WorldMapSection";
import TitlePage from "@/Components/TitlePage";

export default function Location() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col gap-8">
        <TitlePage
          title="Locations"
          image={{
            small: "assets/images/careers-location-hero-mobile.jpg",
            tablet: "assets/images/careers-locations-hero-tablet.jpg",
            big: "assets/images/careers-locations-hero-desktop.jpg",
          }}
        />
        <WorldMapSection />
        <CityNotListedSection />
      </div>
    </div>
  );
}
