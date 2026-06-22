"use client";

import React, { useEffect, useRef } from "react";
import latestNfts from "@/features/how-to-earn/data/latestNfts.json";
import NftCardV2 from "../nft-collection/components/NftCardV2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OwnNft = () => {
  const initialNFTs = latestNfts;

  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const grid1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      const grid1 = grid1Ref.current;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      gsap.set(cards, {
        y: isMobile ? 200 : 400,
        x: isMobile ? 20 : 100,
      });

      cards.forEach((card, i) => {
        gsap.to(card, {
          y: 0,
          x: 0,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top bottom",
            end: "center 50%",
            scrub: 1.5,
          },
          // delay: i * 0.2,
          stagger: 0.2,
        });
      });

      if (!isMobile && grid1) {
        gsap.set(grid1, { y: 400 });

        gsap.to(grid1, {
          y: 0,
          scrollTrigger: {
            trigger: grid1,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="own-nft"
      ref={sectionRef}
      className="relative flex flex-col gap-12 w-full py-12 md:py-16 lg:py-20"
    >
      <div className="relative md:sticky top-28 flex flex-col gap-4 w-full max-w-[1024px] px-4 md:px-8 lg:px-16">
        <p className="text-[14px] uppercase text-purple">OPTION°02</p>
        <h1>Own NFTs. Receive monthly rewards.</h1>
        <p>
          GATA HUB's NFT ecosystem distributes rewards across multiple
          collections, so holders can take part in several different reward
          streams at once.
        </p>
      </div>

      <div className="w-full flex justify-end px-4 md:px-8 lg:px-16 overflow-hidden">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-[80%]"
        >
          <div className="flex flex-col gap-6 col-span-1">
            {initialNFTs.map((nft, i) => {
              if (i % 2 === 0) {
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                  >
                    <NftCardV2
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
                  </div>
                );
              }
            })}
          </div>

          <div
            ref={grid1Ref}
            className="flex flex-col gap-6 col-span-1 mt-0 md:mt-20"
          >
            {initialNFTs.map((nft, i) => {
              if (i % 2 === 1) {
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                  >
                    <NftCardV2
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
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnNft;
