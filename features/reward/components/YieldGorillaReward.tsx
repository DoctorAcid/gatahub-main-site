"use client";
import React from "react";
import { PrimaryButton } from "../../../features/common/components/Button";
import YGRewardCard from "./YGRewardCard";
import Image from "next/image";

interface Nfts {
  icon: string;
  title: string;
}

interface Reward {
  nfts: Nfts[];
  reward: number;
  revenue: number;
}

interface Props {
  title: string;
  date: string;
  href: string;
  rewards: Reward[];
}

const YieldGorillaReward = ({ title, date, rewards, href }: Props) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3>{title}</h3>
          <div className="flex h-fit w-fit gap-[8px] pl-1 pr-3 py-1 items-center rounded-full bg-dgray border-[1px] border-white border-opacity-10">
            <Image
              width={20}
              height={20}
              alt=""
              src="/images/common/date.svg"
              loading="lazy"
            />
            <p className="text-[14px]">{date}</p>
          </div>
        </div>
        <PrimaryButton href={href}>Learn more</PrimaryButton>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        {rewards.map((reward, i) => {
          return (
            <YGRewardCard
              key={i}
              nfts={reward.nfts}
              reward={reward.reward}
              revenue={reward.revenue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default YieldGorillaReward;
