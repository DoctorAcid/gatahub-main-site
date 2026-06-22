"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const DividerSection = () => {
  return (
    <section className="relative flex flex-col h-[620px] items-center justify-center gap-12 w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="flex items-center w-full max-w-[1024px] text-center z-10">
        <h1>Looking for a more passive, NFT-based way to earn?</h1>
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute bottom-0 w-full max-w-[952px] h-full scale-110">
          <Image
            fill
            className="object-cover object-bottom"
            src="/images/how-to-earn/divider-gradient.jpg"
            alt="gatahub_how_to_earn_divider_gradient"
            sizes="100vw"
          />
        </div>
        <Image
          fill
          className="object-contain object-center mix-blend-lighten"
          src="/images/how-to-earn/divider-lineart.jpg"
          alt="gatahub_how_to_earn_divider_lineart"
          sizes="100vw"
        />
        {/* TOP RIGHT STAR */}
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
          className="absolute top-[5%] right-[10%] aspect-square w-[80px] flex"
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

        {/* TOP CENTER STAR */}
        <motion.div
          initial={{ scale: 0.3, rotate: 0 }}
          animate={{ scale: [0.3, 1, 0.3], rotate: [0, -90, -180] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            ease: "backInOut",
          }}
          className="absolute -top-10 left-[20%] aspect-square w-[80px] flex"
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
            delay: 1,
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

export default DividerSection;
