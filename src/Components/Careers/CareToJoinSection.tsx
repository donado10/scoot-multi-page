"use client";

import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";
import React from "react";
import Image from "next/image";

const CareToJoinSectionSmall = () => {
  const Template: React.FC<{
    image: string;
    title: string;
    text: string;
  }> = ({ image, title, text }) => {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="aspect-square w-[200px] overflow-hidden rounded-full">
          <Image src={image} alt="locate" width="300" height="300" />
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

        <button className="bg-scoot-yellow px-8 py-4 font-primary">
          <span className="text-white">Learn More</span>
        </button>
      </div>
    );
  };
  return (
    <section className="flex flex-col gap-16 p-8">
      <Template
        image="/assets/images/join-us.jpg"
        title="Care to join our mission?"
        text="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
      />
    </section>
  );
};

const CareToJoinSectionTablet = () => {
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

        <button className="bg-scoot-yellow px-8 py-4 font-primary">
          <span className="text-white">Learn More</span>
        </button>
      </div>
    );
  };

  return (
    <section className="flex flex-col gap-32 p-8">
      <Template
        image="/assets/images/join-us.jpg"
        title="Care to join our mission?"
        text="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
      />
    </section>
  );
};

const CareToJoinSectionBig = () => {
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

          <button className="w-fit bg-scoot-yellow px-8 py-4 font-primary">
            <span className="text-white">Learn More</span>
          </button>
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
        image="/assets/images/join-us.jpg"
        title="Care to join our mission?"
        text="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
      />
    </section>
  );
};

const CareToJoinSection = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);
  return (
    <>
      {mobileScreen && !tabletScreen && <CareToJoinSectionSmall />}
      {tabletScreen && !bigScreen && <CareToJoinSectionTablet />}
      {bigScreen && <CareToJoinSectionBig />}
    </>
  );
};

export default CareToJoinSection;
