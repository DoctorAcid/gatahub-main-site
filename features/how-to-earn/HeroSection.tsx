"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col w-full h-[calc(100vh-58px)] items-center justify-between overflow-hidden">
      {/* TEXT : HEADING */}
      <div className="z-20 flex flex-col gap-0 md:gap-8 lg:gap-12 w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        <h1 className="heading">Start earning</h1>
        <h1 className="text-right heading">with GATA HUB.</h1>
      </div>

      {/* TEXT : PARA */}
      <div className="z-50 flex w-full items-end px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="max-w-[600px]">
          <p>
            Choose the path that fits you. Whether you're a token holder, an NFT
            collector, or a long-term ecosystem supporter, GATA HUB offers more
            than one way to participate and earn.
          </p>
        </div>
      </div>

      {/* BOTTOM FILTER */}
      <div className="z-40 absolute bottom-0 w-full h-[30%] bg-gradient-to-b from-black/0 to-black" />

      {/* FOREGROUND IMAGE */}
      <div className="absolute bottom-0 aspect-[2/1] min-w-[800px] xsm:min-w-[1000px] lg:min-w-[60%] w-[60%] z-30 flex items-start justify-center overflow-hidden">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-full aspect-square z-1"
        >
          <Image
            fill
            className="object-contain object-top"
            alt="gatahub_how_to_earn_hero_coins"
            src="/images/how-to-earn/hero-coins.svg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
          />
        </motion.div>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="z-0 absolute inset-0 flex items-center justify-center">
        {/* BACKGROUND LINE ART  */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            fill
            className="object-cover object-center"
            sizes="100vw"
            alt="gatahub_how_to_earn_hero_lineart"
            src="/images/how-to-earn/hero-lineart.jpg"
          />
        </div>

        {/* BACKGROUND GRADIENT */}
        <div className="absolute inset-0 flex items-center justify-center mix-blend-lighten">
          <Image
            fill
            className="object-contain object-bottom"
            sizes="100vw"
            alt="gatahub_how_to_earn_hero_gradient"
            src="/images/how-to-earn/hero-gradient.jpg"
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
        <div className="absolute -top-10 left-[20%] aspect-square w-[80px] flex">
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

        {/* TOP LEFT STAR */}
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
          className="absolute top-[30%] left-[5%] aspect-square w-[80px] flex"
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

        {/* BOTTOM CENTER STAR */}
        <div className="absolute bottom-[20%] left-[40%] aspect-square w-[80px] flex">
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

        {/* CENTER RIGHT STAR */}
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
          className="absolute bottom-[40%] right-[20%] aspect-square w-[80px] flex"
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
      </div>
    </section>
  );
};

export default HeroSection;
