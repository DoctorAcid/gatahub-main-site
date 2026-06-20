"use client";

import React, { useEffect, useRef, useState } from "react";
import NftCard from "../../features/nft-collection/components/NftCard";
import Template from "../template";
import Image from "next/image";
import nftData from "../../features/nft-collection/data/nfts.json";
import { NFTCollection } from "@/types";
import Tab from "@/features/common/components/Tab";
import GridDistortion from "@/features/landing-page/components/GridDistortion";
import NftCardV2 from "@/features/nft-collection/components/NftCardV2";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NftCollection = () => {
  const initialNFTs: NFTCollection[] = nftData;

  const [nfts, setNfts] = useState<NFTCollection[]>(initialNFTs);
  const [usd, setUsd] = useState(false);
  const collectionTads: string[] = [
    // "all",
    // "Genesis GATA collection",
    "Yield Series",
    "Souvenirs collection",
  ];
  const [tab, setTab] = useState<number>(0);

  // const handleCollection = (collectionName: string) => {
  //   let updatedNFTs: NFTCollection[];

  //   if (collectionName === "all") {
  //     updatedNFTs = nfts.map((nft) => ({ ...nft, active: true }));
  //   } else {
  //     updatedNFTs = nfts.map((nft) =>
  //       nft.collection != collectionName
  //         ? { ...nft, active: false }
  //         : { ...nft, active: true }
  //     );
  //   }

  //   setNfts(updatedNFTs);
  // };

  useEffect(() => {
    const selectedCollection = collectionTads[tab];

    let updatedNFTs: NFTCollection[];

    if (selectedCollection === "all") {
      updatedNFTs = nftData.map((nft) => ({ ...nft, active: true }));
    } else {
      updatedNFTs = nftData.filter(
        (nft) => nft.collection === selectedCollection,
      );
    }

    console.log("Selected NFT's: ", updatedNFTs.length);

    setNfts(updatedNFTs);
  }, [tab]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    if (!section || !heading) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading,
        {
          y: 0,
        },
        {
          y: -200,
          scrollTrigger: {
            trigger: section,
            start: "top 10%",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="z-10 flex flex-col w-full items-center">
      <div className="relative flex w-full h-[620px] items-end ">
        <div className="absolute w-full h-full overflow-hidden flex justify-center">
          <div className="z-10 absolute bottom-0 right-0 left-0 w-full h-[128px] bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative w-[1920px] h-[960px] aspect-[16/9] flex items-center justify-center z-0 pointer-events-auto">
            <GridDistortion
              imageSrc="/images/headers/nftCollBg.jpg"
              grid={15}
              mouse={0.1}
              strength={0.15}
              relaxation={0.8}
              className="custom-class"
            />
          </div>
          {/* <Image
            style={{
              minWidth: "1920px",
            }}
            src="/images/headers/nftCollBg.jpg"
            // width={1920}
            // height={960}
            fill
            objectFit="cover"
            objectPosition="center"
            quality={100}
            alt=""
          /> */}
        </div>
        <div
          ref={headingRef}
          className="w-full max-w-[1920px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 z-10 px-8 lg:px-16 pb-20"
        >
          <div className="max-w-[800px] flex flex-col gap-2">
            <h1>Be The part of GATA HUB Yield.</h1>
          </div>

          <div className="relative flex flex-col shrink-0 items-start md:items-end gap-1 py-4 px-6 rounded-lg bg-white/10 border border-white/5 overflow-hidden backdrop-blur-lg">
            {/* <span className="absolute inset-0 rounded-lg border-2 border-white/20 blur-sm" /> */}
            <h3 className="text-white">{initialNFTs.length}°N</h3>
            <h6 className="text-white/40">Collections</h6>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1920px] flex flex-col gap-20 sm:gap-32 md:gap-48 lg:gap-64 mt-24">
        <section className="mx-4 md:mx-8 lg:mx-16 flex flex-col gap-[64px] items-center">
          <div className="flex flex-col gap-[16px] items-center max-w-[1024px] text-center">
            <Image
              alt=""
              width={222}
              height={32}
              src="/images/common/title-decor.svg"
              loading="lazy"
            />
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 lg:gap-8">
              <h2 className="font-bold">
                NFT{" "}
                <span className="font-space font-light text-gray">
                  Collections
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-center max-w-[600px] px-12">
              <p className="text-gray">
                Some pay revenue share to the holders, some generate DeFi Yield
                and some are memorial
              </p>
            </div>
          </div>

          {/* Tab Section */}

          <Tab
            setCurrentTab={setTab}
            currentTab={tab}
            tabs={[
              // "All NFT's",
              // "GATA Series",
              "Yield Series",
              "Other NFTs",
            ]}
          />

          {/* NFT Collections */}

          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h6 className="text-white/40">Showing : </h6>
                <h6 className="text-white ml-1">{nfts.length}°N</h6>
              </div>
              <div className="flex items-center">
                <div
                  onClick={() => setUsd(true)}
                  className={`text-[14px] uppercase font-semibold flex items-center justify-center px-3 py-1 rounded-full cursor-pointer transition-all duration-300 ${usd ? "bg-dgray border border-white/10 text-white" : "bg-transparent border-transparent text-gray hover:bg-purple hover:text-white"}`}
                >
                  USD
                </div>
                <div
                  onClick={() => setUsd(false)}
                  className={`text-[14px] uppercase font-semibold flex items-center justify-center px-3 py-1 rounded-full cursor-pointer transition-all duration-300 ${!usd ? "bg-dgray border border-white/10 text-white" : "bg-transparent border-transparent text-gray hover:bg-purple hover:text-white"}`}
                >
                  Atom
                </div>
              </div>
            </div>
            {/* <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg2:grid-cols-5 3xl:grid-cols-6 gap-4"> */}
            <div className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {nfts.map((nft, i) => {
                if (nft.active) {
                  return (
                    <Template key={i}>
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
                        symbol={usd}
                      />
                    </Template>
                  );
                }
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NftCollection;
