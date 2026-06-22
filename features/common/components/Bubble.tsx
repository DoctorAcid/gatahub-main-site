"use client";

import React from "react";

interface BubbleProps {
  data: string;
  className?: string;
}

const Bubble = ({ data, className }: BubbleProps) => {
  return (
    <div
      className={`group w-fit flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-white text-black ${className}`}
    >
      <div className="flex items-center justify-center w-4 h-4 shrink-0">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:rotate-180 rotate-0 transition-transform duration-5000"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.6 0H6.4V4.13726L3.47452 1.21178L1.21178 3.47451L4.13726 6.4H0V9.6H4.13726L1.21178 12.5254L3.47452 14.7882L6.4 11.8627V16H9.6V11.8627L12.5255 14.7882L14.7882 12.5255L11.8627 9.6H16V6.4H11.8627L14.7882 3.47451L12.5255 1.21177L9.6 4.13726V0Z"
            fill="black"
          />
        </svg>
      </div>

      <h5>{data}</h5>
    </div>
  );
};

export default Bubble;
