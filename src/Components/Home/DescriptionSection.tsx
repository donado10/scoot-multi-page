"use client";

import React, { ReactElement } from "react";
import Image from "next/image";
import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";
import LeftDownwordArrImg from "@/assets/patterns/left-downward-arrow.svg";
import CirclesImg from "@/assets/patterns/circle.svg";

const DescriptionSectionSmall = () => {
  const Template: React.FC<{
    image: string;
    title: string;
    text: string;
    element?: ReactElement;
  }> = ({ image, title, text, element }) => {
    return (
      <div className="flex w-full flex-col items-center gap-4">
        <div className="relative flex w-full items-center justify-center">
          <div className="aspect-square w-[400px] overflow-hidden rounded-full">
            <Image src={image} alt="locate" width="500" height="500" />
          </div>
          {element}
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
    <section className="-z-10 flex flex-col gap-16 p-8">
      <Template
        image="/assets/images/telemetry.jpg"
        title="Easy to use riding telemetry"
        text="The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app."
        element={
          <div className="absolute -right-[15rem] bottom-[15%]">
            <Image src={LeftDownwordArrImg} width={735} height={138} alt="" />
          </div>
        }
      />
      <Template
        image="/assets/images/near-you.jpg"
        title=" Coming to a city near you"
        text="Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year."
        element={
          <div className="absolute -left-[30rem] top-0 -scale-x-100">
            <Image src={LeftDownwordArrImg} width={735} height={138} alt="" />
          </div>
        }
      />
      <Template
        image="/assets/images/payments.jpg"
        title="Zero hassle payments"
        text="Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month."
        element={
          <div className="absolute -right-[30rem] top-0">
            <Image src={LeftDownwordArrImg} width={735} height={138} alt="" />
          </div>
        }
      />
    </section>
  );
};

const DescriptionSectionTablet = () => {
  const Template: React.FC<{
    image: any;
    title: string;
    text: string;
    element?: ReactElement;
  }> = ({ image, title, text, element }) => {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex w-full items-center justify-center">
          <div className="aspect-square w-[300px] overflow-hidden rounded-full">
            <Image src={image} alt="locate" width="400" height="400" />
          </div>
          {element}
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
    <section className="-z-10 flex flex-col gap-32 p-8">
      <Template
        image="/assets/images/telemetry.jpg"
        title="Easy to use riding telemetry"
        text="The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app."
        element={
          <>
            <div className="absolute -right-[5rem] bottom-0 z-10">
              <Image src={LeftDownwordArrImg} width={735} height={138} alt="" />
            </div>
            <div className="absolute -right-[15rem] top-0 z-0">
              <Image src={CirclesImg} width={300} height={300} alt="" />
            </div>
          </>
        }
      />
      <Template
        image="/assets/images/near-you.jpg"
        title="Coming to a city near you"
        text="Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year."
        element={
          <>
            <div className="absolute -left-[15rem] top-0 z-0">
              <Image src={CirclesImg} width={300} height={300} alt="" />
            </div>
            <div className="absolute -left-[30rem] top-0 -scale-x-100">
              <Image src={LeftDownwordArrImg} width={735} height={138} alt="" />
            </div>
          </>
        }
      />
      <Template
        image="/assets/images/payments.jpg"
        title="Zero hassle payments"
        text="Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month."
        element={
          <>
            <div className="absolute -right-[20rem] top-0">
              <Image src={LeftDownwordArrImg} width={735} height={138} alt="" />
            </div>
            <div className="absolute -right-[15rem] top-0 z-0">
              <Image src={CirclesImg} width={300} height={300} alt="" />
            </div>
          </>
        }
      />
    </section>
  );
};

const DescriptionSectionBig = () => {
  const Template: React.FC<{
    image: any;
    title: string;
    text: string;
    position: boolean;
    element?: ReactElement;
  }> = ({ image, title, text, position, element }) => {
    const ImageContainer = () => {
      return (
        <div className="relative flex w-full items-center justify-center">
          <div className="aspect-square w-[300px] overflow-hidden rounded-full">
            <Image src={image} alt="locate" width="400" height="400" />
          </div>
          {element}
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
        image="/assets/images/telemetry.jpg"
        title="Easy to use riding telemetry"
        text="The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app."
        element={
          <>
            <div className="absolute -right-[15rem] bottom-0 z-10">
              <Image src={LeftDownwordArrImg} width={735} height={138} alt="" />
            </div>
            <div className="absolute -right-[25rem] top-0 z-0">
              <Image src={CirclesImg} width={300} height={300} alt="" />
            </div>
          </>
        }
      />
      <Template
        position={true}
        image="/assets/images/near-you.jpg"
        title="Coming to a city near you"
        text="Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year."
        element={
          <>
            <div className="absolute -left-[25rem] top-0 z-0">
              <Image src={CirclesImg} width={300} height={300} alt="" />
            </div>
            <div className="absolute -left-[40rem] top-0 -scale-x-100">
              <Image src={LeftDownwordArrImg} width={735} height={138} alt="" />
            </div>
          </>
        }
      />
      <Template
        position={false}
        image="/assets/images/payments.jpg"
        title="Zero hassle payments"
        text="Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month."
        element={
          <>
            <div className="absolute -right-[30rem] top-0 z-10">
              <Image src={LeftDownwordArrImg} width={735} height={138} alt="" />
            </div>
            <div className="absolute -right-[25rem] top-0 z-0">
              <Image src={CirclesImg} width={300} height={300} alt="" />
            </div>
          </>
        }
      />
    </section>
  );
};

const DescriptionSection = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);
  return (
    <>
      {mobileScreen && !tabletScreen && <DescriptionSectionSmall />}
      {tabletScreen && !bigScreen && <DescriptionSectionTablet />}
      {bigScreen && <DescriptionSectionBig />}
    </>
  );
};

export default DescriptionSection;
