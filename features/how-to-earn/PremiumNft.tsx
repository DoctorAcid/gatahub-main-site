"use client";

import React, { useEffect, useRef } from "react";
import premiumNfts from "./data/premiumNfts.json";
import NftCardV2 from "../nft-collection/components/NftCardV2";
import Bubble from "../common/components/Bubble";
import PrimaryButton from "../common/components/Buttons/PrimaryButton";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PremiumNft = () => {
  const BENEFIT_DATA = [
    "DAO participation",
    "Community governance",
    "Ecosystem perks",
    "Future reward campaigns",
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        background,
        { y: 0 },
        {
          y: 100,
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
      className="relative flex flex-col gap-12 w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
    >
      <div className="z-10 flex flex-col gap-8 items-center w-full max-w-[1240px] mx-auto py-40">
        <div className="flex flex-col gap-4 items-center text-center">
          <p className="text-[14px] uppercase text-purple">Premium NFT Path</p>
          <h1>Stake Colonial Cats & Voyager Cats.</h1>
          <p>
            The original GATA HUB collections. Stake either to receive monthly
            PHOTON distributions and take part in the broader ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {premiumNfts.map((nft, i) => (
            <NftCardV2
              key={i}
              id={i}
              image={nft.image}
              name={nft.name}
              desc={nft.desc}
              collection={nft.collection}
              href={nft.href}
              details={nft.details}
              rewardsUrl={nft.rewardsUrl}
              addr={nft.addr}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 w-full justify-between">
          {BENEFIT_DATA.map((benefit, i) => (
            <Bubble data={benefit} key={i} className="w-full justify-center" />
          ))}
        </div>

        <PrimaryButton text="Stake with gata hub" href={""} width="full" />
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div
          ref={backgroundRef}
          className="absolute bottom-0 w-full h-full min-w-[1000px]"
        >
          <Image
            fill
            className="object-contain object-top"
            src="/images/how-to-earn/divider-gradient.jpg"
            alt="gatahub_how_to_earn_divider_gradient"
            sizes="100vw"
          />
        </div>
        {/* TOP RIGHT STAR */}
        <div className="absolute top-[5%] right-[10%] aspect-square w-[80px] flex">
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 0L48.3392 31.3154C48.672 39.0961 54.9039 45.328 62.6846 45.6608L94 47L62.6846 48.3392C54.9039 48.672 48.672 54.9039 48.3392 62.6846L47 94L45.6608 62.6846C45.328 54.9039 39.0961 48.672 31.3154 48.3392L0 47L31.3154 45.6608C39.0961 45.328 45.328 39.0961 45.6608 31.3154L47 0Z"
              fill="white"
            />
          </svg>
        </div>

        {/* TOP CENTER STAR */}
        <motion.div
          initial={{ scale: 0.3, rotate: 0 }}
          animate={{ scale: [0.3, 1, 0.3], rotate: [0, -90, -180] }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            ease: "backInOut",
          }}
          className="absolute top-10 left-[20%] aspect-square w-[80px] flex"
        >
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 0L48.3392 31.3154C48.672 39.0961 54.9039 45.328 62.6846 45.6608L94 47L62.6846 48.3392C54.9039 48.672 48.672 54.9039 48.3392 62.6846L47 94L45.6608 62.6846C45.328 54.9039 39.0961 48.672 31.3154 48.3392L0 47L31.3154 45.6608C39.0961 45.328 45.328 39.0961 45.6608 31.3154L47 0Z"
              fill="url(#paint0_linear_1248_7608)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1248_7608"
                x1="47"
                y1="0"
                x2="47"
                y2="94"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF4874" />
                <stop offset="1" stopColor="#7B5AFF" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* TOP LEFT STAR */}
        <div className="absolute top-[30%] left-[5%] aspect-square w-[80px] flex">
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 0L48.3392 31.3154C48.672 39.0961 54.9039 45.328 62.6846 45.6608L94 47L62.6846 48.3392C54.9039 48.672 48.672 54.9039 48.3392 62.6846L47 94L45.6608 62.6846C45.328 54.9039 39.0961 48.672 31.3154 48.3392L0 47L31.3154 45.6608C39.0961 45.328 45.328 39.0961 45.6608 31.3154L47 0Z"
              fill="url(#paint0_linear_1248_7608)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1248_7608"
                x1="47"
                y1="0"
                x2="47"
                y2="94"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF4874" />
                <stop offset="1" stopColor="#7B5AFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* BOTTOM CENTER STAR */}
        <motion.div
          initial={{ scale: 0.3, rotate: 0 }}
          animate={{ scale: [0.3, 1, 0.3], rotate: [0, 90, 180] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            ease: "backInOut",
          }}
          className="absolute bottom-[10%] left-[40%] aspect-square w-[80px] flex"
        >
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 0L48.3392 31.3154C48.672 39.0961 54.9039 45.328 62.6846 45.6608L94 47L62.6846 48.3392C54.9039 48.672 48.672 54.9039 48.3392 62.6846L47 94L45.6608 62.6846C45.328 54.9039 39.0961 48.672 31.3154 48.3392L0 47L31.3154 45.6608C39.0961 45.328 45.328 39.0961 45.6608 31.3154L47 0Z"
              fill="white"
            />
          </svg>
        </motion.div>

        {/* CENTER RIGHT STAR */}
        <div className="absolute bottom-[40%] right-[20%] aspect-square w-[80px] flex">
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47 0L48.3392 31.3154C48.672 39.0961 54.9039 45.328 62.6846 45.6608L94 47L62.6846 48.3392C54.9039 48.672 48.672 54.9039 48.3392 62.6846L47 94L45.6608 62.6846C45.328 54.9039 39.0961 48.672 31.3154 48.3392L0 47L31.3154 45.6608C39.0961 45.328 45.328 39.0961 45.6608 31.3154L47 0Z"
              fill="url(#paint0_linear_1248_7608)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1248_7608"
                x1="47"
                y1="0"
                x2="47"
                y2="94"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF4874" />
                <stop offset="1" stopColor="#7B5AFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PremiumNft;
