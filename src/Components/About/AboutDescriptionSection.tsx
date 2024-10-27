"use client";

import React from "react";
import Image from "next/image";
import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";

const AboutDescriptionSectionSmall = () => {
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
      <Template
        image="/assets/images/digital-era.jpg"
        title="Mobility for the digital era"
        text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
      />
      <Template
        image="/assets/images/better-living.jpg"
        title="Better urban living"
        text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
      />
    </section>
  );
};

const AboutDescriptionSectionTablet = () => {
  const Template: React.FC<{
    image: any;
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
    <section className="flex flex-col gap-32 p-8">
      <Template
        image="/assets/images/digital-era.jpg"
        title="Mobility for the digital era"
        text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
      />
      <Template
        image="/assets/images/better-living.jpg"
        title="Better urban living"
        text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
      />
    </section>
  );
};

const AboutDescriptionSectionBig = () => {
  const Template: React.FC<{
    image: any;
    title: string;
    text: string;
    position: boolean;
  }> = ({ image, title, text, position }) => {
    const ImageContainer = () => {
      return (
        <div className="aspect-square w-[300px] overflow-hidden rounded-full">
          <Image src={image} alt="locate" width="400" height="400" />
        </div>
      );
    };
    const DescriptionContainer = () => {
      return (
        <div className="flex w-2/4 flex-col gap-4">
          <div>
            <h1 className="font-primary text-3xl font-bold text-scoot-dark">
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
      <div className="flex items-center justify-between">
        {position && (
          <>
            <ImageContainer />
            <DescriptionContainer />
          </>
        )}
        {!position && (
          <>
            <DescriptionContainer />
            <ImageContainer />
          </>
        )}
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-32 p-16 px-64">
      <Template
        position={false}
        image="/assets/images/digital-era.jpg"
        title="Mobility for the digital era"
        text="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
      />
      <Template
        position={true}
        image="/assets/images/better-living.jpg"
        title="Better urban living"
        text="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
      />
    </section>
  );
};

const AboutDescriptionSection = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);
  return (
    <>
      {mobileScreen && !tabletScreen && <AboutDescriptionSectionSmall />}
      {tabletScreen && !bigScreen && <AboutDescriptionSectionTablet />}
      {bigScreen && <AboutDescriptionSectionBig />}
    </>
  );
};

export default AboutDescriptionSection;
