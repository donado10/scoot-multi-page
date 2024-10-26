"use client";

import React from "react";
import Image from "next/image";
import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";

const DescriptionSectionSmall = () => {
  return (
    <section className="flex flex-col gap-16 p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="aspect-square w-[200px] overflow-hidden rounded-full">
          <Image
            src={`/assets/images/telemetry.jpg`}
            alt="locate"
            width="300"
            height="300"
          />
        </div>
        <div>
          <h1 className="text-center font-primary text-3xl font-bold text-scoot-dark">
            Easy to use riding telemetry
          </h1>
        </div>
        <div>
          <p className="text-center font-secondary text-base font-normal leading-7 text-scoot-dim">
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app.
          </p>
        </div>

        <button className="bg-scoot-yellow px-8 py-4 font-primary">
          <span className="text-white">Learn More</span>
        </button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="aspect-square w-[200px] overflow-hidden rounded-full">
          <Image
            src={`/assets/images/near-you.jpg`}
            alt="locate"
            width="300"
            height="300"
          />
        </div>
        <div>
          <h1 className="text-center font-primary text-3xl font-bold text-scoot-dark">
            Coming to a city near you
          </h1>
        </div>
        <div>
          <p className="text-center font-secondary text-base font-normal leading-7 text-scoot-dim">
            Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year.
          </p>
        </div>

        <button className="bg-scoot-yellow px-8 py-4 font-primary">
          <span className="text-white">Learn More</span>
        </button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="aspect-square w-[200px] overflow-hidden rounded-full">
          <Image
            src={`/assets/images/payments.jpg`}
            alt="locate"
            width="300"
            height="300"
          />
        </div>
        <div>
          <h1 className="text-center font-primary text-3xl font-bold text-scoot-dark">
            Zero hassle payments
          </h1>
        </div>
        <div>
          <p className="text-center font-secondary text-base font-normal leading-7 text-scoot-dim">
            Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month.
          </p>
        </div>

        <button className="bg-scoot-yellow px-8 py-4 font-primary">
          <span className="text-white">Learn More</span>
        </button>
      </div>
    </section>
  );
};

const DescriptionSectionTablet = () => {
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
        image="/assets/images/telemetry.jpg"
        title="Easy to use riding telemetry"
        text="The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app."
      />
      <Template
        image="/assets/images/near-you.jpg"
        title="Coming to a city near you"
        text="Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year."
      />
      <Template
        image="/assets/images/payments.jpg"
        title="Zero hassle payments"
        text="Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month."
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
        image="/assets/images/telemetry.jpg"
        title="Easy to use riding telemetry"
        text="The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you've been using the scooter,
            your traveling distance, and many more things all in an easy to use
            app."
      />
      <Template
        position={true}
        image="/assets/images/near-you.jpg"
        title="Coming to a city near you"
        text="Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year."
      />
      <Template
        position={false}
        image="/assets/images/payments.jpg"
        title="Zero hassle payments"
        text="Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month."
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
