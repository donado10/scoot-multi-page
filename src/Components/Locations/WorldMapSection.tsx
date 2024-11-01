"use client";

import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";
import React from "react";
import Image from "next/image";

const WorldMapSectionSmall = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/world-map-mobile.png"
          width="312"
          height="154"
          alt="world map"
        />
      </div>
      <div>
        <ul className="flex w-full flex-col items-center justify-center gap-4 p-4 font-primary text-xl font-semibold text-scoot-dark">
          <li className="w-full bg-scoot-yellow/15 py-4 text-center">
            <span>New York</span>{" "}
          </li>
          <li className="w-full bg-scoot-yellow/15 py-4 text-center">
            <span>London</span>{" "}
          </li>
          <li className="w-full bg-scoot-yellow/15 py-4 text-center">
            <span>Jakarta</span>{" "}
          </li>
          <li className="w-full bg-scoot-yellow/15 py-4 text-center">
            <span>Yokohama</span>{" "}
          </li>
        </ul>
      </div>
    </section>
  );
};
const WorldMapSectionTablet = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/world-map-tablet.png"
          width="689"
          height="337"
          alt="world map"
        />
      </div>
    </section>
  );
};
const WorldMapSectionDesktop = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/world-map-desktop.png"
          width="1110"
          height="543"
          alt="world map"
        />
      </div>
    </section>
  );
};

const WorldMapSection = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);
  return (
    <>
      {mobileScreen && !tabletScreen && <WorldMapSectionSmall />}
      {tabletScreen && !bigScreen && <WorldMapSectionTablet />}
      {bigScreen && <WorldMapSectionDesktop />}
    </>
  );
};

export default WorldMapSection;
