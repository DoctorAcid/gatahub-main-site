"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import PrimaryButton from "@/features/common/components/Buttons/PrimaryButton";
import Bubble from "../common/components/Bubble";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StakeAssets = () => {
  const WHAT_YOU_EARN_DATA = [
    "Native network staking rewards",
    "Access to exclusive Discord roles",
    "Community events and raffles",
    "Whitelist opportunities",
    "Future ecosystem incentives",
  ];

  const HOW_IT_WORKS_DATA = [
    "Buy a supported asset",
    "Stake it with a GATA HUB validator",
    "Earn ongoing network rewards",
    "Participate in the community",
    "Unlock additional benefits over time",
  ];

  const SUPPORTED_NETWORKS_DATA = [
    {
      logo: "/images/validators/cosmos.png",
      title: "Atom",
    },
    {
      logo: "/images/validators/atomone.png",
      title: "Atone",
    },
    {
      logo: "/images/validators/osmosis.png",
      title: "Osmos",
    },
    {
      logo: "/images/validators/akt.png",
      title: "AKT",
    },
    {
      logo: "/images/validators/cosmos.png",
      title: "Photon",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mainImage = mainImageRef.current;

    if (!section || !mainImage) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mainImage,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stake-assets"
      ref={sectionRef}
      className="relative flex gap-12 w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
    >
      {/* STAKE ASSETS BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute right-0 top-0 bottom-0 w-full max-w-[1000px]">
          <Image
            fill
            className="object-containe object-right z-0"
            sizes="50vw"
            alt="stake_assets_main_image"
            src="/images/how-to-earn/stake-assets-bg.jpg"
            loading="lazy"
          />
        </div>

        <div
          ref={mainImageRef}
          className="w-full h-full flex justify-end py-12"
        >
          <div className="relative w-full max-w-[900px] aspect-[9/16]">
            <Image
              fill
              className="object-contain object-right z-1"
              sizes="50vw"
              alt="stake_assets_main_image"
              src="/images/how-to-earn/stake-assets-main.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* STAKE ASSETS SECTION */}
      <div className="z-10 flex flex-col gap-12 w-full max-w-[720px]">
        {/* HEADING,PARA & CTA */}
        <div className="flex flex-col gap-2">
          <p className="text-[14px] uppercase text-purple">option°01</p>
          <h1>Stake your assets.</h1>
          <p>
            Delegate supported assets to GATA HUB validators and start earning
            network staking rewards, while unlocking additional community
            benefits along the way.
          </p>
          <div className="mt-6">
            <PrimaryButton text="Stake with gata hub" href={""} width="full" />
          </div>
        </div>

        {/* WHAT YOU EARN POINTS */}
        <div className="flex flex-col gap-6">
          <p className="text-[14px] uppercase">What you earn</p>
          <div className="grid sm:grid-cols-2 w-full gap-x-8 gap-y-4">
            {/* POINT BUBBLES */}
            {WHAT_YOU_EARN_DATA.map((data, index) => (
              <Bubble data={data} key={index} />
            ))}
          </div>
        </div>

        {/* HOW IT WORKS POINTS */}
        <div className="flex flex-col gap-6">
          <p className="text-[14px] uppercase">How it works</p>
          <div className="flex flex-col divide-y divide-white/20 w-full">
            {/* POINT */}
            {HOW_IT_WORKS_DATA.map((data, index) => (
              <div
                key={index}
                className="group/how relative flex items-center justify-between py-6"
              >
                <span className="z-0 absolute w-full bg-white h-0 group-hover/how:h-full transition-all duration-300" />
                <div className="z-10 flex items-center justify-between gap-6 w-full px-0 group-hover/how:px-4 transition-all duration-300 mix-blend-difference">
                  <p className="text-white whitespace-nowrap">
                    Step °0{index + 1}
                  </p>
                  <h3 className="text-right">{data}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SUPPORTED NETWORKS */}
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="w-full uppercase text-white/20">Supported</h1>
            <h1 className="w-full text-center uppercase text-white/20">
              networks
            </h1>
          </div>

          <div className="flex flex-wrap -mt-6 gap-2">
            {SUPPORTED_NETWORKS_DATA.map((data, index) => (
              <div
                key={index}
                className="w-fit flex items-center gap-3 pl-4 pr-6 py-3 bg-black border border-white/10 rounded-lg"
              >
                <div className="relative flex w-12 aspect-square items-center justify-center">
                  <Image
                    fill
                    className="object-contain object-center"
                    src={data.logo}
                    alt="network-logo"
                    sizes="48px"
                    loading="lazy"
                  />
                </div>

                <h4>{data.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeAssets;
