"use client";

import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";
import React from "react";
import Image from "next/image";
import LeftDownwordArrImg from "@/assets/patterns/left-downward-arrow.svg";
import WhiteCirclesImg from "@/assets/patterns/white-circles.svg";
//import HeroImg from "@/assets/images/home-hero-mobile.jpg";

const HeroSmall = () => {
  return (
    <section className="relative -z-10 flex aspect-[1/1.7] w-full flex-col items-center justify-center gap-10 bg-[url('/assets/images/home-hero-mobile.jpg')] bg-cover bg-no-repeat p-4">
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

      <div className="absolute -left-[78%] bottom-[10%] w-full -scale-x-100">
        <Image src={LeftDownwordArrImg} alt="" />
      </div>
    </section>
  );
};

const HeroTablet = () => {
  return (
    <section className="relative -z-10 flex aspect-[1/1] w-full flex-col items-center justify-center gap-10 bg-[url('/assets/images/home-hero-tablet.jpg')] bg-cover bg-no-repeat p-8">
      <h1 className="text-center font-primary text-6xl font-bold text-white">
        Scooter sharing made simple
      </h1>
      <p className="w-3/5 text-center font-secondary text-sm leading-6 text-white">
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>

      <button className="bg-scoot-yellow p-4 px-8 text-white">
        Get Scootin
      </button>

      <div className="absolute -left-[65%] bottom-[10%] w-full -scale-x-100">
        <Image src={LeftDownwordArrImg} alt="" />
      </div>
      <div className="absolute bottom-[10%] right-0 w-full">
        <Image src={WhiteCirclesImg} className="ml-auto" alt="" />
      </div>
    </section>
  );
};

const HeroBig = () => {
  return (
    <section className="flex aspect-[1/0.5] w-full items-center justify-start gap-10 bg-[url('/assets/images/home-hero-desktop.jpg')] bg-cover bg-no-repeat p-8 px-64">
      <div className="flex w-[40rem] flex-col gap-16">
        <h1 className="font-primary text-6xl font-bold text-white">
          Scooter sharing made simple
        </h1>
        <div className="flex w-fit flex-col items-end gap-8 self-end">
          <p className="w-[25rem] text-justify font-secondary text-sm leading-6 text-white">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>

          <button className="w-fit self-start bg-scoot-yellow p-4 px-8 text-white">
            Get Scootin
          </button>
        </div>
      </div>
    </section>
  );
};

export const Hero = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);
  return (
    <>
      {mobileScreen && !tabletScreen && <HeroSmall />}
      {tabletScreen && !bigScreen && <HeroTablet />}
      {bigScreen && <HeroBig />}
    </>
  );
};
