"use client";

import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";
import React from "react";

const TitlePageMobile: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => {
  return (
    <div
      className={`flex aspect-[1/0.4] w-full items-center justify-center bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-center font-primary text-6xl font-bold text-white">
        {title}
      </h1>
    </div>
  );
};
const TitlePageTablet: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => {
  return (
    <div
      className={`flex aspect-[1/0.2] w-full items-center justify-start bg-cover bg-no-repeat px-44`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-center font-primary text-6xl font-bold text-white">
        {title}
      </h1>
    </div>
  );
};
const TitlePageBig: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => {
  return (
    <div
      className={`flex aspect-[1/0.1] w-full items-center justify-start bg-cover bg-no-repeat px-44`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-center font-primary text-6xl font-bold text-white">
        {title}
      </h1>
    </div>
  );
};

const TitlePage: React.FC<{
  title: string;
  image: { small: string; tablet: string; big: string };
}> = ({ title, image }) => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);

  return (
    <>
      {mobileScreen && !tabletScreen && (
        <TitlePageMobile title={title} image={image.small} />
      )}
      {tabletScreen && !bigScreen && (
        <TitlePageTablet title={title} image={image.tablet} />
      )}
      {bigScreen && <TitlePageBig title={title} image={image.big} />}
    </>
  );
};

export default TitlePage;
