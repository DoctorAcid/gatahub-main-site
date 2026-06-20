"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ExternalLinkIcon from "@/features/common/components/ExternalLinkIcon";
import PrimaryButton from "@/features/common/components/Buttons/PrimaryButton";
import SecondaryButton from "@/features/common/components/Buttons/SecondaryButton";
import gsap from "gsap";
import { motion } from "framer-motion";
import { reverse } from "dns";
import { symbol } from "framer-motion/client";

// --- API types ---

interface CollectionApiData {
  contractAddress: string;
  name: string;
  description: string;
  image: string;
  floorPrice: {
    amount: number;
    amountUsd: number;
    symbol: string;
  } | null;
  stats: {
    activeTokens: number;
    listedTokens: number;
    marketCap: {
      amount: number;
      amountUsd: number;
      symbol: string;
    };
    volumeTotal: {
      amount: number;
      amountUsd: number;
      symbol: string;
    };
  };
}

interface CacheEntry {
  data: CollectionApiData;
  timestamp: number;
}

// --- Cache ---

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, CacheEntry>();

// --- Fetch function ---

async function fetchCollectionData(
  addr: string,
  signal: AbortSignal,
): Promise<CollectionApiData> {
  const cached = cache.get(addr);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  const res = await fetch(
    `https://marketplace-api.cosmos.stargaze-apis.com/api/v1/collections/${addr}`,
    { signal },
  );

  if (!res.ok) {
    throw new Error(
      `Failed to fetch collection: ${res.status} ${res.statusText}`,
    );
  }

  const data: CollectionApiData = await res.json();
  cache.set(addr, { data, timestamp: Date.now() });
  return data;
}

// --- Hook ---

function useCollectionData(addr?: string) {
  const [data, setData] = useState<CollectionApiData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!addr) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchCollectionData(addr, controller.signal)
      .then(setData)
      .catch((err: unknown) => {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [addr]);

  const revalidate = () => {
    if (addr) cache.delete(addr);
    // trigger re-fetch by clearing data, which re-runs the effect via a key bump
    setData(null);
    setError(null);
  };

  return { data, loading, error, revalidate };
}

// --- Component props ---

interface Props {
  id: number;
  image: string;
  name: string;
  desc?: string;
  collection: string;
  href: string;
  details: string;
  rewardsUrl?: string;
  addr?: string;
  symbol?: boolean;
}

const NftCardV2 = ({
  id,
  image,
  name,
  desc,
  collection,
  href,
  details,
  rewardsUrl,
  addr,
  symbol,
}: Props) => {
  const { data } = useCollectionData(addr);
  const detailsRef = useRef<HTMLDivElement>(null);

  console.log("data is", data);
  useEffect(() => {
    gsap.set(detailsRef.current, {
      opacity: 0,
      yPercent: 100,
      autoAlpha: 0,
    });
  }, []);

  const mouseEnterAnimation = () => {
    gsap.to(detailsRef.current, {
      opacity: 1,
      yPercent: 0,
      autoAlpha: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const mouseLeaveAnimation = () => {
    gsap.to(detailsRef.current, {
      opacity: 0,
      yPercent: 100,
      autoAlpha: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      onMouseEnter={mouseEnterAnimation}
      onMouseLeave={mouseLeaveAnimation}
      className="group/nft w-full aspect-[5/6] md:aspect-[6/5] border border-white/10 relative rounded-lg overflow-hidden"
    >
      <div className="absolute z-10 top-4 left-4 flex w-[fit-content] gap-2 items-center mix-blend-difference">
        <p className="w-full text-white">0{id + 1}°</p>
      </div>
      <div className="absolute z-10 top-2 right-2 flex w-[fit-content] gap-2 items-center border-[1px] border-white/10 rounded-full bg-black/20 backdrop-blur-[8px] pl-[8px] pr-[16px] py-[4px]">
        <Image
          width={16}
          height={16}
          src="/images/common/nft-collection-icon.svg"
          loading="lazy"
          alt=""
        />
        <p className="w-full text-white">{collection}</p>
      </div>
      {image ? (
        <div className="w-full h-full relative group-hover/nft:scale-110 transition-all ease-out duration-500">
          <Image
            fill
            className="object-cover object-center"
            sizes="(max-width: 852px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="NFT image"
            src={image}
            priority={true}
            loading="eager"
          />
        </div>
      ) : (
        <div className="w-[384px] h-[390px] bg-lgray"></div>
      )}

      <div className="absolute w-full bottom-0 left-0 right-0 flex flex-col gap-6 p-6 bg-gradient-to-t from-black via-black/60 to-black-0 transition-all ease-out duration-500">
        <div className="absolute top-2 right-6 w-fill flex md:hidden items-center justify-between gap-4">
          <div
            onClick={() => window.open(details, "_blank")}
            className="p-2 cursor-pointer bg-white/10 group-hover:bg-purple/5 rounded-md flex items-center justify-center backdrop-blur-sm transition-all duration-300"
          >
            <ExternalLinkIcon fill="white" size={18} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="line-clamp-1">{name}</h3>
          <p className="line-clamp-1">{desc}</p>
        </div>
        {data ? (
          <div className="flex flex-wrap gap-4 justify-between">
            {data?.floorPrice && (
              <div className="flex flex-col gap-2">
                <p className="text-[14px] text-purple uppercase">Floor Price</p>
                <div className="flex items-end gap-2">
                  <h4>
                    {symbol
                      ? data.floorPrice.amountUsd.toFixed(2)
                      : (data.floorPrice.amount / 1000000).toFixed(2)}
                  </h4>
                  <h4 className="text-white/40">
                    {" "}
                    {symbol ? "USD" : data.floorPrice.symbol}
                  </h4>
                </div>
              </div>
            )}

            {data?.stats.volumeTotal && (
              <div className="flex flex-col gap-2">
                <p className="text-[14px] text-purple uppercase">Volume</p>
                <div className="flex items-end gap-2">
                  <h4>
                    {symbol
                      ? data.stats.volumeTotal.amountUsd.toFixed(2)
                      : (data.stats.volumeTotal.amount / 1000000).toFixed(
                          2,
                        )}{" "}
                  </h4>
                  <h4 className="text-white/40">
                    {" "}
                    {symbol ? "USD" : data.stats.volumeTotal.symbol}
                  </h4>
                </div>
              </div>
            )}

            {data?.stats && (
              <div className="flex flex-col items-end gap-2">
                <p className="text-[14px] text-purple uppercase">
                  Listed Tokens
                </p>
                <div className="flex items-end gap-2">
                  <h4>{data.stats.listedTokens} /</h4>
                  <h4 className="text-white/40"> {data.stats.activeTokens}</h4>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-12 h-4 rounded-sm bg-lgray"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-20 h-3 rounded-sm bg-lgray"
              />
            </div>
            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-12 h-4 rounded-sm bg-lgray"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-20 h-3 rounded-sm bg-lgray"
              />
            </div>
            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-12 h-4 rounded-sm bg-lgray"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-20 h-3 rounded-sm bg-lgray"
              />
            </div>
          </div>
        )}

        <div className="z-10 pt-4 w-full flex md:hidden flex-col md:flex-row items-center gap-2">
          <PrimaryButton text="Collect" href={href} width="full" />
          {rewardsUrl ? (
            <SecondaryButton
              text="stake"
              width="full"
              href={rewardsUrl}
            ></SecondaryButton>
          ) : null}
        </div>
      </div>
      <div
        ref={detailsRef}
        className="z-10 absolute left-0 right-0 bottom-0 w-full h-full hidden md:flex flex-col justify-between gap-4 p-6 bg-black/60 backdrop-blur-xl"
      >
        <div className="absolute bottom-2 -right-4 opacity-10 flex w-[fit-content] gap-2 items-center mix-blend-difference">
          <h1 className="w-full text-white text-[200px]">0{id + 1}°N</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3>{name}</h3>
            <p className="">{desc}</p>
          </div>
          <div className="flex w-[fit-content] gap-2 items-center border-[1px] border-white/10 rounded-full bg-white pl-[8px] pr-[16px] py-[4px]">
            <Image
              width={16}
              height={16}
              src="/images/common/nft-collection-icon.svg"
              loading="lazy"
              alt=""
              className="invert"
            />
            <p className="w-full text-black">{collection}</p>
          </div>
          {details && (
            <div className="group w-full flex items-center justify-between">
              <div
                onClick={() => window.open(details, "_blank")}
                className="w-full pl-6 p-4 cursor-pointer bg-white/5 group-hover:bg-purple/5 rounded-lg flex items-center justify-between transition-all duration-300"
              >
                <h4>
                  Gitbook{" "}
                  <span className="text-white/40 text-[14px]">
                    : For More Details
                  </span>
                </h4>
                <ExternalLinkIcon size={16} />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-8">
          {data ? (
            <div className="flex flex-wrap gap-4 justify-between">
              {data?.floorPrice && (
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-purple uppercase">
                    Floor Price
                  </p>
                  <div className="flex items-end gap-2">
                    <h4>
                      {symbol
                        ? data.floorPrice.amountUsd.toFixed(2)
                        : (data.floorPrice.amount / 1000000).toFixed(2)}
                    </h4>
                    <h4 className="text-white/40">
                      {" "}
                      {symbol ? "USD" : data.floorPrice.symbol}
                    </h4>
                  </div>
                </div>
              )}

              {data?.stats.volumeTotal && (
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] text-purple uppercase">Volume</p>
                  <div className="flex items-end gap-2">
                    <h4>
                      {symbol
                        ? data.stats.volumeTotal.amountUsd.toFixed(2)
                        : (data.stats.volumeTotal.amount / 1000000).toFixed(
                            2,
                          )}{" "}
                    </h4>
                    <h4 className="text-white/40">
                      {" "}
                      {symbol ? "USD" : data.stats.volumeTotal.symbol}
                    </h4>
                  </div>
                </div>
              )}

              {data?.stats && (
                <div className="flex flex-col items-end gap-2">
                  <p className="text-[14px] text-purple uppercase">
                    Listed Tokens
                  </p>
                  <div className="flex items-end gap-2">
                    <h4>{data.stats.listedTokens} /</h4>
                    <h4 className="text-white/40">
                      {" "}
                      {data.stats.activeTokens}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-12 h-4 rounded-sm bg-lgray"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-20 h-3 rounded-sm bg-lgray"
                />
              </div>
              <div className="flex flex-col gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-12 h-4 rounded-sm bg-lgray"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-20 h-3 rounded-sm bg-lgray"
                />
              </div>
              <div className="flex flex-col gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-12 h-4 rounded-sm bg-lgray"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-20 h-3 rounded-sm bg-lgray"
                />
              </div>
            </div>
          )}
          <div className="z-10 w-full flex flex-col md:flex-row items-center gap-2">
            <PrimaryButton text="Collect" href={href} width="full" />
            {rewardsUrl ? (
              <SecondaryButton
                text="stake"
                width="full"
                href={rewardsUrl}
              ></SecondaryButton>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCardV2;
