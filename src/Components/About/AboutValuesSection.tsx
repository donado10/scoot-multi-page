"use client";

import React from "react";
import Image from "next/image";
import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";

const AboutValueSectionSmall = () => {
  const Template: React.FC<{
    image: string;
    title: string;
    text: string;
  }> = ({ image, title, text }) => {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="aspect-square w-[300px] overflow-hidden rounded-full">
          <Image src={image} alt="locate" width="400" height="400" />
        </div>
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
      </div>
    );
  };
  return (
    <section className="flex flex-col gap-16 p-8">
      <div>
        <h1 className="text-center font-primary text-3xl font-bold text-scoot-dark">
          Our Values
        </h1>
      </div>
      <Template
        image="/assets/images/our-tech.jpg"
        title="Our tech"
        text="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
      />
      <Template
        image="/assets/images/our-integrity.jpg"
        title="Our integrity"
        text="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
      />
      <Template
        image="/assets/images/our-community.jpg"
        title="Our community"
        text="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
      />
    </section>
  );
};

const AboutValueSection = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);
  return <>{mobileScreen && !tabletScreen && <AboutValueSectionSmall />}</>;
};

export default AboutValueSection;
