"use client";

import React from "react";
import Image from "next/image";
import LocateImg from "@/assets/icons/locate.svg";
import ScooterImg from "@/assets/icons/scooter.svg";
import RideImg from "@/assets/icons/ride.svg";
import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";
import PathPatternImg from "@/assets/patterns/Path.svg";
import Path2PatternImg from "@/assets/patterns/Path2.svg";

const HowToSectionSmall = () => {
  return (
    <section className="flex flex-col gap-8 p-8">
      <div className="flex flex-col items-center gap-4">
        <div>
          <Image src={LocateImg.src} alt="locate" width="64" height="64" />
        </div>
        <div>
          <h1 className="font-primary text-xl font-bold text-scoot-dark">
            Locate with app
          </h1>
        </div>
        <div>
          <p className="text-center font-secondary text-base font-normal leading-7 text-scoot-dim">
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div>
          <Image src={ScooterImg.src} alt="locate" width="64" height="64" />
        </div>
        <div>
          <h1 className="font-primary text-xl font-bold text-scoot-dark">
            Pick your scooter
          </h1>
        </div>
        <div>
          <p className="text-center font-secondary text-base font-normal leading-7 text-scoot-dim">
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div>
          <Image src={RideImg.src} alt="locate" width="64" height="64" />
        </div>
        <div>
          <h1 className="font-primary text-xl font-bold text-scoot-dark">
            Enjoy the ride
          </h1>
        </div>
        <div>
          <p className="text-center font-secondary text-base font-normal leading-7 text-scoot-dim">
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </p>
        </div>
      </div>
    </section>
  );
};

const HowToSectionTablet = () => {
  const Template: React.FC<{ image: any; title: string; text: string }> = ({
    image,
    title,
    text,
  }) => {
    return (
      <div className="flex gap-16 px-32">
        <div>
          <Image src={image} alt="locate" width="160" height="160" />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-primary text-xl font-bold text-scoot-dark">
              {title}
            </h1>
          </div>
          <div>
            <p className="font-secondary text-base font-normal leading-7 text-scoot-dim">
              {text}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative -z-20 flex flex-col gap-8 p-8">
      <div className="absolute -top-20 left-[181px] -z-30 border-2">
        <Image src={PathPatternImg} alt="" />
      </div>
      <Template
        image={LocateImg}
        title="Locate with app"
        text="Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away."
      />
      <Template
        image={ScooterImg}
        title="Pick your scooter"
        text="We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost."
      />
      <Template
        image={RideImg}
        title="Enjoy the ride"
        text="Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps."
      />
    </section>
  );
};
const HowToSectionBig = () => {
  const Template: React.FC<{ image: any; title: string; text: string }> = ({
    image,
    title,
    text,
  }) => {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <Image src={image} alt="locate" width="128" height="128" />
        </div>

        <div>
          <h1 className="font-primary text-xl font-bold text-scoot-dark">
            {title}
          </h1>
        </div>
        <div>
          <p className="font-secondary text-base font-normal leading-7 text-scoot-dim">
            {text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="flex gap-8 p-8">
      <div className="absolute -left-[200px] -z-30 translate-y-12 border-2">
        <Image src={Path2PatternImg} width={1300} alt="" />
      </div>
      <Template
        image={LocateImg}
        title="Locate with app"
        text="Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away."
      />
      <Template
        image={ScooterImg}
        title="Pick your scooter"
        text="We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost."
      />
      <Template
        image={RideImg}
        title="Enjoy the ride"
        text="Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps."
      />
    </section>
  );
};

const HowToSection = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);
  return (
    <>
      {mobileScreen && !tabletScreen && <HowToSectionSmall />}
      {tabletScreen && !bigScreen && <HowToSectionTablet />}
      {bigScreen && <HowToSectionBig />}
    </>
  );
};

export default HowToSection;
