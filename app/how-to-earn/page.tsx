"use client";

import ComparePath from "@/features/how-to-earn/ComparePath";
import DividerSection from "@/features/how-to-earn/DividerSection";
import HeroSection from "@/features/how-to-earn/HeroSection";
import NavigationSection from "@/features/how-to-earn/NavigationSection";
import OwnNft from "@/features/how-to-earn/OwnNft";
import PremiumNft from "@/features/how-to-earn/PremiumNft";
import StakeAssets from "@/features/how-to-earn/StakeAssets";
import StillDeciding from "@/features/how-to-earn/StillDeciding";
import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-col w-full max-w-[1920px] mx-auto">
      <HeroSection />
      <NavigationSection />
      <StakeAssets />
      <DividerSection />
      <OwnNft />
      <PremiumNft />
      <ComparePath />
      <StillDeciding />
    </main>
  );
};

export default page;
