"use client";

import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";
import React from "react";
//import Image from "next/image";
//import HeroImg from "@/assets/images/home-hero-mobile.jpg";

const HeroSmall = () => {
  return (
    <section className="flex aspect-[1/1.7] w-full flex-col items-center justify-center gap-10 bg-[url('/assets/images/home-hero-mobile.jpg')] bg-cover bg-no-repeat p-4">
      <h1 className="text-center font-primary text-4xl font-bold text-white">
        Scooter sharing made simple
      </h1>
      <p className="text-center font-secondary text-sm leading-6 text-white">
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>

      <button className="bg-scoot-yellow p-4 px-8 text-white">
        Get Scootin
      </button>
    </section>
  );
};

const HeroTablet = () => {
  return (
    <section className="flex aspect-[1/1] w-full flex-col items-center justify-center gap-10 bg-[url('/assets/images/home-hero-tablet.jpg')] bg-cover bg-no-repeat p-4">
      <h1 className="text-center font-primary text-4xl font-bold text-white">
        Scooter sharing made simple
      </h1>
      <p className="text-center font-secondary text-sm leading-6 text-white">
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>

      <button className="bg-scoot-yellow p-4 px-8 text-white">
        Get Scootin
      </button>
    </section>
  );
};

export const Hero = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  return (
    <>
      {mobileScreen && !tabletScreen && <HeroSmall />}
      {tabletScreen && <HeroTablet />}
    </>
  );
};
