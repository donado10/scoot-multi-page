"use client";

import { useIsVisible } from "@/Hooks/useIsVisible";
import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const HeaderMobile = () => {
  const [isMenuEnable, setIsMenuEnable] = useState<Boolean>(false);
  const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const isVisible = useIsVisible(headerRef);
  const [classParent, setClassParent] = useState<string>(
    "flex  w-full flex-col",
  );

  useEffect(() => {
    if (isVisible) {
      setClassParent("flex  w-full flex-col");
      return;
    } else {
      setClassParent("fixed flex w-full flex-col");
      return;
    }
  }, [isVisible]);

  return (
    <div ref={headerRef}>
      <div
        className={`${classParent} ${isMenuEnable ? "fixed min-h-screen" : ""} `}
      >
        <div className="relative flex w-full items-center justify-center bg-white p-6">
          <div className="absolute inset-0 left-8 flex h-full w-fit items-center justify-center">
            <button
              className="h-fit w-fit"
              onClick={() => setIsMenuEnable((prev) => !prev)}
            >
              {isMenuEnable && (
                <IoCloseSharp className="h-16 w-16 text-scoot-yellow" />
              )}
              {!isMenuEnable && (
                <IoMenuSharp className="h-16 w-16 text-scoot-yellow" />
              )}
            </button>
          </div>

          <h1 className="font-primary text-3xl font-bold text-scoot-dark">
            scoot
          </h1>
        </div>
        {isMenuEnable && (
          <div
            className="flex h-full w-full flex-grow flex-col bg-black/45"
            onClick={() => setIsMenuEnable(false)}
          >
            <div className="flex w-3/4 flex-grow flex-col justify-between bg-scoot-dark p-10">
              <div className="flex flex-col gap-4 font-primary text-2xl font-bold text-scoot-dim">
                <div>
                  <Link href="/about">About</Link>
                </div>
                <div>
                  <Link href="/location">Location</Link>
                </div>
                <div>
                  <Link href="/careers">Careers</Link>
                </div>
              </div>
              <div>
                <button className="bg-scoot-yellow p-4 px-8 text-white">
                  Get Scootin
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HeaderTablet = () => {
  return (
    <div
      className={`fixed flex w-full items-center justify-between bg-white p-6`}
    >
      <div className="flex items-center gap-16">
        <h1 className="font-primary text-3xl font-bold text-scoot-dark">
          scoot
        </h1>
        <div className="flex items-center gap-4 font-primary text-xl font-semibold text-scoot-dim">
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/location">Location</Link>
          </div>
          <div>
            <Link href="/careers">Careers</Link>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-scoot-yellow p-4 px-8 text-white">
          Get Scootin
        </button>
      </div>
    </div>
  );
};

export const Header = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const tabletScreen = useMediaQuery(EMediaQuery.SMALL);

  return (
    <>
      {mobileScreen && !tabletScreen && <HeaderMobile />}
      {tabletScreen && <HeaderTablet />}
    </>
  );
};
