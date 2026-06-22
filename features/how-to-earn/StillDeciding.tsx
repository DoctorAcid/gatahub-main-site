"use client";

import React, { useEffect, useRef } from "react";
import PrimaryButton from "../common/components/Buttons/PrimaryButton";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StillDeciding = () => {
  const DECIDING_DATA = [
    {
      eyebrow: "NEW USER",
      heading: "Start by staking assets with GATA HUB validators.",
      linkText: "Stake Now",
      href: "/nft-collection",
    },
    {
      eyebrow: "NFT Enthusiast",
      heading: "Explore Yield NFTs and reward-bearing collections.",
      linkText: "Explore Nfts",
      href: "/nft-collection",
    },
    {
      eyebrow: "Community Member",
      heading: "Join Discord and discover ongoing opportunities.",
      linkText: "join community ",
      href: "/nft-collection",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        background,
        { y: -50 },
        {
          y: 50,
          duration: 1,
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
      ref={sectionRef}
      className="relative flex flex-col items-center gap-12 w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div
        ref={backgroundRef}
        className="absolute bottom-0 w-full h-full min-w-[1000px]"
      >
        <Image
          fill
          className="object-contain object-center rotate-180"
          src="/images/how-to-earn/divider-gradient.jpg"
          alt="gatahub_how_to_earn_divider_gradient"
          sizes="100vw"
        />
      </div>
      <div className="z-10 flex flex-col gap-4 max-w-[800px] text-center items-center pt-40">
        <p className="text-[14px] uppercase text-purple">Still deciding?</p>
        <h1>Not sure where to start?</h1>
      </div>

      <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {DECIDING_DATA.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-8 rounded-lg bg-black/10 border border-white/10 backdrop-blur-lg"
          >
            <p className="text-[14px] uppercase text-white/40">
              {data.eyebrow}
            </p>
            <h3 className="max-w-[500px]">{data.heading}</h3>
            <div className="mt-6">
              <PrimaryButton text={data.linkText} href={data.href} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StillDeciding;
