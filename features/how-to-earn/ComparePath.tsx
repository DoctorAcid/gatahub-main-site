"use client";

import React from "react";

const ComparePath = () => {
  const TABLE_DATA = [
    {
      title: "Validator Staking",
      requirement: "Tokens",
      rewards: "Network staking rewards",
      bestFor: "Long-term token holders",
    },
    {
      title: "Yield NFTs",
      requirement: "NFT ownership",
      rewards: "Collection-specific rewards",
      bestFor: "NFT collectors",
    },
    {
      title: "Colonial Cats & Voyager Cats",
      requirement: "NFT ownership + staking",
      rewards: "Monthly PHOTON rewards",
      bestFor: "Ecosystem supporters",
    },
  ];
  return (
    <section className="relative flex flex-col gap-12 w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col gap-4 max-w-[600px]">
        <p className="text-[14px] uppercase text-purple">Compare Paths</p>
        <h1>Which path fits you?</h1>
      </div>

      <div className="flex flex-col divide-y divide-white/20">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-4 gap-4 w-full py-6">
          <div className="">
            <p className="uppercase text-white/40">Path</p>
          </div>

          <div className="">
            <p className="uppercase text-white/40">Initial requirement</p>
          </div>

          <div className="">
            <p className="uppercase text-white/40">Rewards</p>
          </div>

          <div className="">
            <p className="uppercase text-white/40">Best for</p>
          </div>
        </div>

        {/* TABLE COLOUMNs  */}
        {TABLE_DATA.map((data, index) => (
          <div key={index} className="group relative">
            <span className="z-0 absolute w-full bg-white h-0 group-hover:h-full transition-all duration-300" />
            <div className="z-1 grid grid-cols-4 gap-4 w-full py-8 group-hover:px-6 mix-blend-difference transition-all duration-300">
              <div className="flex items-start gap-2">
                <p className="text-purple">0{index + 1}°</p>
                <h4>{data.title}</h4>
              </div>

              <div className="">
                <h5 className="text-white/80">{data.requirement}</h5>
              </div>

              <div className="">
                <h5 className="text-white/80">{data.rewards}</h5>
              </div>

              <div className="">
                <h5 className="text-white/80">{data.bestFor}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparePath;
