"use client";

import React from "react";

import AppStoreImg from "@/assets/icons/app-store.svg";
import GooglePlayImg from "@/assets/icons/google-play.svg";
import FacebookImg from "@/assets/icons/facebook.svg";
import TwitterImg from "@/assets/icons/twitter.svg";
import InstagramImg from "@/assets/icons/instagram.svg";

import Image from "next/image";
import Link from "next/link";
import useMediaQuery, { EMediaQuery } from "@/Hooks/useMediaQuery";

const FooterSectionSmall = () => {
  return (
    <>
      <div className="flex flex-col gap-8 bg-scoot-dark p-4 py-28">
        <div>
          <h1 className="text-center font-primary text-4xl font-bold text-scoot-light">
            Sign up and Scoot off today
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="aspect-[1/0.3] w-28">
            <Image
              src={AppStoreImg}
              alt="App Store"
              className="h-full w-full"
            />
          </button>
          <button className="aspect-[1/0.3] w-28">
            <Image
              src={GooglePlayImg}
              alt="Google Play "
              className="h-full w-full"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-4 bg-[#333A44] p-4 xs:flex-col xs:py-28 md:flex-row md:items-center md:justify-center md:py-10">
        <div>
          <Link href="/">
            <h1 className="text-center font-primary text-3xl font-bold text-scoot-light">
              scoot
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 p-8 font-primary text-base font-bold text-scoot-dim xs:flex-col md:flex-row">
          <Link href={"/About"}>About</Link>
          <Link href={"/Location"}>Location</Link>
          <Link href={"/Careers"}>Careers</Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div>
            <Image src={FacebookImg} alt="facebook logo" />
          </div>
          <div>
            <Image src={TwitterImg} alt="twitter logo" />
          </div>
          <div>
            <Image src={InstagramImg} alt="instagram logo" />
          </div>
        </div>
      </div>
    </>
  );
};
const FooterSectionBig = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-8 bg-scoot-dark p-4 py-28">
        <div>
          <h1 className="text-center font-primary text-4xl font-bold text-scoot-light">
            Sign up and Scoot off today
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button className="aspect-[1/0.3] w-28">
            <Image
              src={AppStoreImg}
              alt="App Store"
              className="h-full w-full"
            />
          </button>
          <button className="aspect-[1/0.3] w-28">
            <Image
              src={GooglePlayImg}
              alt="Google Play "
              className="h-full w-full"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 bg-[#333A44] p-4 py-10">
        <div className="flex items-center gap-16">
          <Link href="/">
            <h1 className="text-center font-primary text-3xl font-bold text-scoot-light">
              scoot
            </h1>
          </Link>
          <div className="flex flex-row items-center justify-center gap-4 p-8 font-primary text-base font-bold text-scoot-dim">
            <Link href={"/about"}>About</Link>
            <Link href={"/location"}>Location</Link>
            <Link href={"/careers"}>Careers</Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div>
            <Image src={FacebookImg} alt="facebook logo" />
          </div>
          <div>
            <Image src={TwitterImg} alt="twitter logo" />
          </div>
          <div>
            <Image src={InstagramImg} alt="instagram logo" />
          </div>
        </div>
      </div>
    </>
  );
};

const FooterSection = () => {
  const mobileScreen = useMediaQuery(EMediaQuery.MOBILE);
  const bigScreen = useMediaQuery(EMediaQuery.BIG);
  return (
    <footer>
      {mobileScreen && !bigScreen && <FooterSectionSmall />}
      {bigScreen && <FooterSectionBig />}
    </footer>
  );
};

export default FooterSection;
