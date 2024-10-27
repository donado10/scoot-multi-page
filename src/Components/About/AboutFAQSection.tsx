"use client";

import React, { useState } from "react";
import Image from "next/image";
import ChevronImg from "@/assets/icons/chevron.svg";
import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";

const AboutFAQSectionSmall = () => {
  const Template: React.FC<{ title: string; description: string }> = ({
    title,
    description,
  }) => {
    const [toggleResponse, setToggleResponse] = useState<boolean>(false);

    return (
      <div className="flex h-fit w-full flex-col items-center justify-center gap-6 bg-scoot-light px-4 py-8">
        <div className="flex w-full items-center justify-between gap-8">
          <h3 className="font-primary text-xl font-semibold text-scoot-dark">
            {title}
          </h3>
          <button onClick={() => setToggleResponse((prev) => !prev)}>
            <span>
              <Image src={ChevronImg} alt="chevron" />
            </span>
          </button>
        </div>
        {toggleResponse && (
          <div>
            <p className="font-secondary text-base text-scoot-dark">
              {description}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="my-8 flex flex-col gap-8">
      <div>
        <h1 className="text-center font-primary text-3xl font-bold text-scoot-dark">
          FAQs
        </h1>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-primary text-2xl font-bold text-scoot-dark">
            How it works
          </h2>
          <div className="flex flex-col items-center gap-4 px-8">
            <Template
              title="How do I download the app?"
              description="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
            />
            <Template title="Can I find a nearby Scoots?" description="" />
            <Template title="Do I need a license to ride?" description="" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-primary text-2xl font-bold text-scoot-dark">
            Safe driving
          </h2>
          <div className="flex flex-col items-center gap-4 px-8">
            <Template
              title="Should I wear an helmet?"
              description="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
            />
            <Template
              title="How about the rules and regulations?"
              description=""
            />
            <Template title="What if I damage my scoot?" description="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutFAQSection = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);

  return <>{mobileScreen && !tabletScreen && <AboutFAQSectionSmall />}</>;
};

export default AboutFAQSection;
