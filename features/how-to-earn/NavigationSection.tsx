"use client";

import React from "react";
import Image from "next/image";
import router from "next/router";
import Link from "next/link";

const NavigationSection = () => {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
      {/* STAKE ASSETS & OWN NFTS NAVIGATION CARDS */}
      <div className="">
        {/* STAKE ASSETS CARD */}
        <Link href="#stake-assets">
          <div className="group/stake w-full h-fit flex flex-col border border-white/10 rounded-lg cursor-pointer">
            {/* CARD IMAGE */}
            <div className="relative w-full aspect-[2/1] overflow-hidden">
              <Image
                fill
                className="object-cover object-center group-hover/stake:scale-110 transition-transform duration-300"
                alt="gatahub_stake_assets_card_image"
                src="/images/how-to-earn/stake-assets.jpg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />

              {/* BOTTOM FILTER */}
              <div className="z-40 absolute bottom-0 w-full h-[30%] bg-gradient-to-b from-black/0 to-black" />
            </div>
            {/* CARD TEXT: HEADING, PARA, EYEBROW AND ARROW */}
            <div className="flex items-end justify-between gap-6 p-8">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] uppercase text-purple">P°01</p>
                <h2>Stake assets</h2>
                <p>
                  Delegate supported tokens to GATA HUB validators and earn
                  network rewards.
                </p>
              </div>

              <div className="group-hover/stake:rotate-0 -rotate-90 transition-transform duration-300 shrink-0 flex items-center justify-center w-16 h-16 aspect-square">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 18C43.1046 18 44 18.8954 44 20V45.5C44 46.8807 45.1193 48 46.5 48C47.0704 48 47.594 47.806 48.0146 47.4844L54.5 41V49L40.5 63L26.5 49V41L32.9844 47.4844C33.4051 47.8063 33.9293 48 34.5 48C35.8807 48 37 46.8807 37 45.5V20C37 18.8954 37.8954 18 39 18H42Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* OWN NFTS CARD */}
      <Link href="#own-nft">
        <div className="md:mt-[20%] group/nft w-full h-fit flex flex-col border border-white/10 rounded-lg cursor-pointer">
          {/* CARD IMAGE */}
          <div className="relative w-full aspect-[2/1] overflow-hidden">
            <Image
              fill
              className="object-cover object-center group-hover/nft:scale-110 transition-transform duration-300"
              alt="gatahub_stake_assets_card_image"
              src="/images/how-to-earn/own-nfts.jpg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />

            {/* BOTTOM FILTER */}
            <div className="z-40 absolute bottom-0 w-full h-[30%] bg-gradient-to-b from-black/0 to-black" />
          </div>
          {/* CARD TEXT: HEADING, PARA, EYEBROW AND ARROW */}
          <div className="flex items-end justify-between gap-6 p-8">
            <div className="flex flex-col gap-2">
              <p className="text-[14px] uppercase text-purple">P°02</p>
              <h2>Own NFTs</h2>
              <p>
                Hold reward-bearing collections and receive ongoing
                distributions.
              </p>
            </div>

            <div className="group-hover/nft:rotate-0 -rotate-90 transition-transform duration-300 shrink-0 flex items-center justify-center w-16 h-16 aspect-square">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42 18C43.1046 18 44 18.8954 44 20V45.5C44 46.8807 45.1193 48 46.5 48C47.0704 48 47.594 47.806 48.0146 47.4844L54.5 41V49L40.5 63L26.5 49V41L32.9844 47.4844C33.4051 47.8063 33.9293 48 34.5 48C35.8807 48 37 46.8807 37 45.5V20C37 18.8954 37.8954 18 39 18H42Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default NavigationSection;
