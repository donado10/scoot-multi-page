"use client";

import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";
import React from "react";

const CityNotListedSectionSmall = () => {
  const Template: React.FC<{
    title: string;
    text: string;
  }> = ({ title, text }) => {
    return (
      <div className="flex flex-col items-center gap-4">
        <div>
          <h1 className="text-center font-primary text-3xl font-bold text-scoot-dark">
            {title}
          </h1>
        </div>
        <div>
          <p className="text-center font-secondary text-base font-normal leading-7 text-scoot-dim">
            {text}
          </p>
        </div>
        <div>
          <button className="w-fit bg-scoot-yellow px-8 py-4 font-primary">
            <span className="text-white">Message Us</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-16 p-8">
      <Template
        title="Your City Not Listed?"
        text="If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social."
      />
    </section>
  );
};
const CityNotListedSectionBig = () => {
  const Template: React.FC<{
    title: string;
    text: string;
  }> = ({ title, text }) => {
    return (
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text font-primary text-3xl font-bold text-scoot-dark">
            {title}
          </h1>
        </div>
        <div>
          <p className="text font-secondary text-base font-normal leading-7 text-scoot-dim">
            {text}
          </p>
        </div>
        <div>
          <button className="w-fit bg-scoot-yellow px-8 py-4 font-primary">
            <span className="text-white">Message Us</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-16 p-8">
      <Template
        title="Your City Not Listed?"
        text="If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social."
      />
    </section>
  );
};

const CityNotListedSection = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);
  return (
    <>
      {mobileScreen && !bigScreen && <CityNotListedSectionSmall />}
      {bigScreen && <CityNotListedSectionBig />}
    </>
  );
};

export default CityNotListedSection;
