"use client";

import Lenis from "lenis";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [active, setActive] = useState("/");

  const handleNav = (currentPage: string) => {
    if (pathname === currentPage) {
      setActive;
    }
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [menu, setMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const humberger = () => {
    setMenu(!menu);
  };

  const closeHumberger = () => {
    setMenu(false);
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const closeDropDown = () => {
    setDropDown(false);
  };

  return (
    <div className="z-30 fixed top-0 left-0 w-full flex justify-center">
      <nav className="relative w-full flex justify-center items-center border-y-[1px] border-white border-opacity-10 bg-black pl-[18px] pr-[18px] py-[8px]">
        <div className="flex w-full justify-between items-center max-w-[1880px]">
          {/* Logo */}
          <Link href={"/"} onClick={closeHumberger}>
            <span>
              <div
                onClick={closeDropDown}
                className="flex gap-[12px] items-center"
              >
                <div className="flex h-[26px]">
                  <svg
                    width="104"
                    height="26"
                    viewBox="0 0 127 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.43661 0.752872L4.43658 0.752855L4.43649 0.752807L4.43646 0.752786C4.389 0.727057 4.33615 0.698407 4.2753 0.664541L4.27379 1.13962C4.27379 1.76479 4.27245 2.39012 4.27112 3.01557V3.0159V3.01624V3.01657V3.0169V3.01724V3.01757C4.26845 4.27013 4.26577 5.52313 4.27379 6.77613C4.27719 6.90421 4.25412 7.03162 4.206 7.15037C4.15788 7.26911 4.08575 7.37666 3.99415 7.46624C0.630884 11.1467 -0.647068 15.4617 0.307635 20.3434C1.59461 26.9271 7.24766 31.5969 13.6539 31.9683C16.561 32.1621 19.458 31.464 21.9576 29.9672C24.3236 28.5699 26.245 26.5305 27.4989 24.0855C28.7528 21.6404 29.2879 18.89 29.042 16.1533C29.0239 15.9416 28.9924 15.7305 28.9606 15.5166C28.9447 15.4099 28.9287 15.3026 28.9142 15.1941H21.6975C20.8218 15.1941 19.9458 15.1952 19.0698 15.1964H19.0695H19.0692H19.0688H19.0685H19.0682H19.0678C17.3141 15.1987 15.56 15.2011 13.8058 15.1941C13.5186 15.1876 13.2386 15.2842 13.0165 15.4662C12.7141 15.7017 12.4691 16.0028 12.3001 16.3468C12.1311 16.6908 12.0425 17.0687 12.0409 17.452C12.0393 17.8353 12.1248 18.2139 12.2909 18.5593C12.4571 18.9047 12.6995 19.2079 12.9999 19.4459C13.2217 19.629 13.5017 19.7266 13.7893 19.721H23.8625H24.303C23.6686 22.9174 20.7533 26.7948 15.7768 27.4173C13.6718 27.6766 11.5388 27.2613 9.68485 26.2312C7.83088 25.2011 6.35157 23.6093 5.45985 21.6849C4.56812 19.7606 4.30997 17.6029 4.72256 15.5225C5.13515 13.4421 6.1972 11.5462 7.75583 10.1078C9.35636 8.59451 11.4242 7.67086 13.6194 7.48878C16.724 7.21815 19.4017 8.22399 21.6419 10.3574C21.6756 10.3401 21.7078 10.32 21.7381 10.2973C22.7229 9.30648 23.7031 8.32923 24.6909 7.35197C24.7479 7.29543 24.7918 7.2271 24.8196 7.15178C24.8474 7.07646 24.8584 6.99597 24.8518 6.91596V0.300694C24.8459 0.199896 24.8343 0.0995078 24.8172 0C24.6458 0.0932152 24.515 0.166884 24.3872 0.243561C22.6201 1.28797 20.8556 2.33688 19.0935 3.39031C19.0057 3.44807 18.906 3.48513 18.8018 3.49867C18.6976 3.51221 18.5917 3.5019 18.4921 3.4685C15.6539 2.66123 12.6361 2.74522 9.84717 3.70907C9.74548 3.75191 9.63468 3.76857 9.52489 3.75754C9.4151 3.74651 9.30983 3.70813 9.21871 3.64592C7.98141 2.88658 6.7381 2.13528 5.4945 1.3838L4.66019 0.879526C4.59301 0.837656 4.52392 0.800205 4.43661 0.752872ZM47.0114 17.6192H48.6156C48.5435 18.0152 48.3182 18.3668 47.9887 18.5979C46.9633 19.3451 45.0283 19.4384 43.9849 18.0236C43.1295 16.8659 43.1219 15.0933 43.9849 13.9432C44.3139 13.478 44.8015 13.1491 45.3561 13.0185C45.7647 12.9154 46.1906 12.9005 46.6054 12.9749C47.0202 13.0493 47.4144 13.2113 47.7617 13.45C47.8849 13.5327 48.0052 13.6244 48.124 13.7177C48.7675 14.2243 49.4516 14.2394 50.1627 13.877C50.5972 13.656 51.0272 13.4275 51.4587 13.1975C51.531 13.1519 51.6003 13.1017 51.6662 13.0471C51.651 13.0194 51.6387 12.9951 51.6275 12.9731C51.6133 12.9449 51.6008 12.9204 51.5865 12.8968C49.1644 9.12457 43.8195 8.82838 41.0456 12.2307C39.5271 14.092 39.1874 16.6765 40.3616 18.7753C41.5358 20.8742 43.3415 22.0409 45.7741 22.1536C47.0776 22.2138 48.324 21.9852 49.444 21.2861C51.5775 19.951 52.3623 17.959 52.2119 15.5188C52.2065 15.4413 52.1919 15.3638 52.1768 15.284L52.1676 15.2346C52.1648 15.2192 52.162 15.2037 52.1593 15.1881H45.3531C45.3531 15.3316 45.3481 15.4744 45.3432 15.6163L45.3432 15.6166C45.3323 15.9306 45.3216 16.2398 45.3651 16.5412C45.4463 17.099 45.8132 17.4523 46.3785 17.5605C46.5873 17.5988 46.7991 17.6184 47.0114 17.6192ZM65.5176 21.9567H65.0155H62.7603C61.9093 21.9567 61.2944 21.6064 60.9381 20.8231C60.8807 20.6979 60.8183 20.5743 60.7543 20.4475L60.7543 20.4473L60.7008 20.3412L60.6689 20.2773H56.6381L56.3209 20.9148C55.9947 21.5658 55.4685 21.9311 54.7423 21.9477C54.1248 21.9617 53.5066 21.957 52.8887 21.9523C52.5798 21.95 52.271 21.9477 51.9624 21.9477C51.9389 21.9434 51.9164 21.9347 51.8962 21.9221C51.8865 21.9135 51.8783 21.9034 51.8721 21.892C51.8677 21.8809 51.8677 21.8686 51.8721 21.8575C53.9048 18.0056 55.9375 14.1547 57.9702 10.3048C57.9962 10.2545 58.0262 10.2058 58.0562 10.1571L58.0562 10.157L58.0562 10.157C58.0782 10.1212 58.1002 10.0855 58.1206 10.0492H59.2031L65.5176 21.9567ZM59.618 17.7124L59.466 17.3448C59.1999 16.7015 58.9481 16.0928 58.6964 15.4767H58.6212L57.7041 17.7079L59.618 17.7124ZM85.162 21.9567H85.6581L79.3481 10.0492H78.2656C78.2444 10.087 78.2217 10.1242 78.199 10.1614L78.1987 10.1619C78.17 10.209 78.1412 10.2562 78.1152 10.3048C76.0815 14.1547 74.0493 18.0056 72.0186 21.8575C72.0161 21.8629 72.0148 21.8688 72.0148 21.8747C72.0148 21.878 72.0152 21.8812 72.0159 21.8843L72.0168 21.8874L72.0186 21.892C72.0222 21.8986 72.0265 21.9048 72.0313 21.9105C72.0348 21.9146 72.0386 21.9185 72.0427 21.9221C72.0629 21.9347 72.0854 21.9434 72.1089 21.9477C72.4173 21.9477 72.7259 21.95 73.0345 21.9523H73.0347H73.0349H73.035H73.0352C73.6532 21.957 74.2713 21.9617 74.8888 21.9477C75.615 21.9311 76.1427 21.5658 76.4674 20.9148C76.5283 20.794 76.5881 20.6732 76.6481 20.5521C76.6934 20.4607 76.7387 20.3691 76.7847 20.2773H80.8154C80.8444 20.3356 80.8735 20.393 80.9022 20.4497L80.9026 20.4505L80.9027 20.4505L80.9028 20.4508L80.9032 20.4516L80.9037 20.4526L80.9041 20.4533L80.9046 20.4542C80.9677 20.5786 81.0293 20.7002 81.0846 20.8231C81.4409 21.6064 82.0558 21.9567 82.9068 21.9567H85.162ZM78.7948 15.388L79.7495 17.7079H77.8416L78.7948 15.388ZM117.126 10.0672H117.506H122.167C122.705 10.0634 123.241 10.1389 123.758 10.2912C124.762 10.601 125.402 11.2625 125.628 12.2954C125.761 12.8194 125.775 13.3663 125.67 13.8966C125.46 14.8182 124.981 15.4917 123.909 15.7082C123.972 15.7306 124.024 15.7506 124.07 15.7683C124.149 15.7983 124.209 15.8215 124.272 15.8375C124.796 15.9755 125.263 16.2748 125.608 16.693C125.952 17.1112 126.157 17.6272 126.192 18.1679C126.238 18.6797 126.198 19.1958 126.071 19.6939C125.807 20.6381 125.184 21.238 124.288 21.5793C123.801 21.7765 123.281 21.8825 122.755 21.892C120.966 21.898 119.176 21.898 117.386 21.892C117.303 21.8883 117.22 21.8797 117.138 21.8665C117.051 21.5823 117.036 10.5032 117.126 10.0672ZM119.431 19.9599L119.431 19.9599C119.515 19.9688 119.591 19.9766 119.667 19.9766H122.143C122.33 19.9685 122.516 19.9484 122.701 19.9165C123.615 19.7932 124.091 19.1647 123.986 18.1875C123.973 17.9224 123.876 17.6682 123.711 17.4607C123.545 17.2533 123.319 17.1031 123.063 17.0313C122.753 16.9378 122.431 16.8872 122.107 16.881C121.469 16.8632 120.83 16.8659 120.191 16.8686H120.191H120.191H120.191C120.017 16.8694 119.842 16.8701 119.668 16.8704C119.291 16.8704 119.279 16.8855 119.277 17.2824V19.5722C119.277 19.6849 119.291 19.8052 119.309 19.948C119.352 19.9518 119.392 19.9559 119.43 19.9599L119.431 19.9599ZM119.298 14.8468C119.371 14.8788 119.447 14.9011 119.525 14.9129C119.761 14.9102 119.996 14.9089 120.231 14.9076C120.92 14.9037 121.609 14.8999 122.296 14.8618C123.048 14.8167 123.499 14.2815 123.517 13.5087C123.541 12.6923 123.174 12.2172 122.401 12.0714C122.291 12.0536 122.178 12.0455 122.066 12.0473H119.629C119.559 12.0473 119.49 12.0569 119.417 12.0669C119.378 12.0723 119.339 12.0777 119.298 12.0819V14.8468ZM101.026 21.8931C101.198 21.8903 101.376 21.8875 101.562 21.8875L101.572 21.4275V11.3226C101.575 11.1472 101.565 10.9717 101.541 10.7979C101.525 10.6469 101.463 10.5043 101.364 10.3888C101.266 10.2734 101.134 10.1907 100.988 10.1514C100.607 10.0444 100.222 10.0581 99.8217 10.0723C99.6821 10.0772 99.5406 10.0823 99.3968 10.0823V14.6318V14.9325C99.3818 15.1956 99.3577 15.2181 99.0811 15.2332H98.9683H93.8565C93.7725 15.2332 93.6866 15.2238 93.5921 15.2136C93.5395 15.2079 93.4842 15.2019 93.425 15.1971V11.3317V11.031C93.398 10.4852 93.1619 10.1725 92.6267 10.1093C92.1692 10.0801 91.7104 10.0766 91.2525 10.0988C91.2495 10.1476 91.2456 10.1952 91.2417 10.242V10.2421V10.2422C91.2342 10.3336 91.227 10.4218 91.227 10.5093V20.6908C91.2273 20.8929 91.2485 21.0944 91.2901 21.2921C91.313 21.4421 91.3841 21.5806 91.4925 21.6866C91.601 21.7926 91.7411 21.8605 91.8915 21.88C92.3988 21.9291 92.9093 21.9351 93.4175 21.898C93.4175 21.6231 93.4163 21.3528 93.4152 21.0857V21.085V21.0844V21.0828V21.0825C93.4128 20.5576 93.4106 20.0451 93.4175 19.5346C93.422 19.2086 93.4205 18.8827 93.4191 18.5553C93.417 18.1079 93.415 17.6578 93.4281 17.2012C93.4877 17.1967 93.5404 17.1913 93.5889 17.1863C93.6688 17.1781 93.7371 17.1711 93.8054 17.1711H98.9894C99.3743 17.1711 99.3863 17.1847 99.3863 17.5771V20.7704C99.3815 20.9079 99.3865 21.0456 99.4013 21.1824C99.4585 21.5658 99.7111 21.862 100.076 21.8875C100.385 21.9033 100.696 21.8984 101.026 21.8931ZM66.9234 21.9236V12.9689L65.3763 12.9599H63.8398C63.8398 12.7859 63.8328 12.6139 63.8259 12.4439V12.4438C63.808 12.0028 63.7906 11.5746 63.8969 11.1557C63.9776 10.8505 64.1534 10.5788 64.3989 10.3801C64.6443 10.1815 64.9467 10.0661 65.2621 10.0507H65.6003H73.6183C73.6357 10.1371 73.6483 10.2245 73.6559 10.3123C73.6559 10.429 73.6571 10.5459 73.6583 10.6628C73.6606 10.8969 73.6629 11.1311 73.6559 11.3647C73.6244 12.3585 73.0004 12.9629 72.0021 12.9689H70.5648V13.432V20.0788C70.5671 20.3038 70.5505 20.5287 70.5152 20.7509C70.4606 21.0417 70.3196 21.3092 70.1107 21.5187C69.9018 21.7281 69.6346 21.8697 69.344 21.9251C69.221 21.9486 69.0963 21.9617 68.9711 21.9642H67.206C67.1111 21.9558 67.0168 21.9423 66.9234 21.9236ZM114.363 10.2292C114.36 10.1795 114.356 10.1258 114.353 10.0672C114.291 10.0672 114.23 10.0674 114.169 10.0675C113.89 10.0682 113.626 10.0688 113.364 10.0552C112.364 10.0447 112.161 10.5273 112.161 11.2474C112.176 13.1868 112.169 15.1276 112.161 17.0669V17.0674C112.163 17.37 112.135 17.672 112.08 17.9695C111.97 18.5468 111.745 19.0851 111.274 19.4579C110.503 20.0668 109.629 20.3585 108.643 20.1134C107.535 19.8398 106.762 19.1993 106.526 18.0356C106.462 17.7169 106.428 17.3926 106.427 17.0674V11.3226C106.432 11.1722 106.428 11.0215 106.415 10.8716C106.374 10.5378 106.218 10.2627 105.887 10.1574C105.461 10.0226 105.027 10.0449 104.567 10.0684C104.453 10.0742 104.336 10.0802 104.218 10.0838V10.5649V16.5367C104.213 16.9884 104.232 17.4401 104.276 17.8898C104.491 19.8217 105.487 21.1643 107.332 21.8289C108.345 22.1726 109.43 22.2427 110.479 22.0319C112.121 21.7417 113.322 20.8471 113.985 19.294C114.259 18.6055 114.392 17.8686 114.374 17.1275V10.4807C114.374 10.4065 114.369 10.3251 114.363 10.2292Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </span>
          </Link>

          {/* Menu */}
          <div className="hidden lg:flex gap-[40px] lg2:gap-[64px]">
            <Link
              onClick={closeDropDown}
              href={"/ygata"}
              className={`text-${
                pathname === "/ygata" ? "white" : "gray"
              } h-fit py-[8px] transition-all duration-300 ease-in-out font-semibold hover:text-white text-[16px]`}
            >
              yGATA
            </Link>

            <Link
              onClick={closeDropDown}
              href={"/rollapp"}
              className={`h-fit py-[8px] transition-all duration-300 ease-in-out uppercase font-semibold hover:text-white text-[16px] text-${
                pathname === "/rollapp" ? "white" : "gray"
              }`}
            >
              RollApp
            </Link>

            <div
              className={`group flex gap-2 items-center justify-center h-fit py-[8px] transition-all duration-300 ease-in-out font-semibold hover:text-white text-[16px] cursor-pointer text-${
                dropDown ? "white" : "gray"
              } text-${pathname === "/infrastructure" ? "white" : "gray"}`}
              onClick={handleDropDown}
            >
              <div className="uppercase">Infrastructure</div>
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  className={`${dropDown ? "fill-white" : "fill-gray"} ${
                    pathname === "/infrastructure" ? "fill-white" : "fill-gray"
                  } group-hover:fill-white transition-all duration-300 ease-in-out ${
                    dropDown ? "rotate-[180deg]" : "rotate-[0deg]"
                  }`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.29289 5.29289C2.68342 4.90237 3.31658 4.90237 3.70711 5.29289L8 9.58579L12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071L2.29289 6.70711C1.90237 6.31658 1.90237 5.68342 2.29289 5.29289Z"
                    fill=""
                  />
                </svg>
              </div>
              {dropDown && (
                <div className="absolute top-[72px] flex flex-col bg-black rounded-[16px] border-[1px] border-white border-opacity-10 overflow-hidden">
                  <Link
                    href={"/infrastructure/validators"}
                    className={`flex gap-2 py-4 pl-4 pr-6 items-center bg-black hover:bg-dgray text-gray hover:text-white`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="16" cy="16" r="4" fill="white" />
                        <circle
                          cx="27"
                          cy="16"
                          r="2"
                          transform="rotate(90 27 16)"
                          fill="white"
                        />
                        <circle
                          cx="16"
                          cy="27"
                          r="2"
                          transform="rotate(-180 16 27)"
                          fill="white"
                        />
                        <circle
                          cx="5"
                          cy="16"
                          r="2"
                          transform="rotate(90 5 16)"
                          fill="white"
                        />
                        <circle
                          cx="16"
                          cy="5"
                          r="2"
                          transform="rotate(-180 16 5)"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Validators
                  </Link>

                  <Link
                    href={"/infrastructure/endpoints"}
                    className={`flex gap-2 py-4 pl-4 pr-6 items-center bg-black hover:bg-dgray text-gray hover:text-white`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="9" cy="9" r="5" fill="white" />
                        <circle cx="9" cy="9" r="5" fill="white" />
                        <circle cx="23" cy="23" r="5" fill="white" />
                        <circle cx="23" cy="23" r="5" fill="white" />
                        <circle cx="26" cy="6" r="2" fill="white" />
                        <circle cx="6" cy="26" r="2" fill="white" />
                        <path
                          d="M9 9L23 23"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="2 2"
                        />
                      </svg>
                    </div>
                    Endpoints
                  </Link>

                  <div
                    onClick={() =>
                      window.open(
                        "https://relayers.smartstake.io/relayer/44937E3DA9AA699A",
                        "_blank"
                      )
                    }
                    className={`group flex gap-2 py-4 pl-4 pr-5 items-center bg-black hover:bg-dgray text-gray hover:text-white`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill=""
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8ZM27 8C28.6569 8 30 6.65685 30 5C30 3.34315 28.6569 2 27 2C25.3431 2 24 3.34315 24 5C24 6.65685 25.3431 8 27 8ZM16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24ZM22.7026 22.0064C24.1311 20.4133 25 18.3081 25 16C25 13.6919 24.1311 11.5867 22.7026 9.99363C22.7264 9.97702 22.749 9.95811 22.7703 9.93689L24.6036 8.10356C24.7989 7.9083 24.7989 7.59172 24.6036 7.39645C24.4083 7.20119 24.0917 7.20119 23.8965 7.39645L22.0632 9.22979C22.0419 9.25101 22.023 9.27366 22.0064 9.29743C20.4134 7.86889 18.3082 7 16 7C13.6919 7 11.5867 7.86887 9.99363 9.29739C9.97703 9.27363 9.95813 9.25099 9.93692 9.22979L8.10359 7.39645C7.90833 7.20119 7.59175 7.20119 7.39648 7.39645C7.20122 7.59172 7.20122 7.9083 7.39648 8.10356L9.22982 9.93689C9.25102 9.9581 9.27366 9.977 9.29741 9.9936C7.86889 11.5866 7 13.6918 7 16C7 18.3082 7.86889 20.4134 9.29742 22.0064C9.27366 22.023 9.25103 22.0419 9.22982 22.0631L7.39648 23.8965C7.20122 24.0917 7.20122 24.4083 7.39648 24.6036C7.59175 24.7988 7.90833 24.7988 8.10359 24.6036L9.93692 22.7702C9.95813 22.749 9.97703 22.7264 9.99364 22.7026C11.5867 24.1311 13.6919 25 16 25C18.3082 25 20.4134 24.1311 22.0064 22.7026C22.023 22.7264 22.0419 22.749 22.0632 22.7702L23.8965 24.6036C24.0917 24.7988 24.4083 24.7988 24.6036 24.6036C24.7989 24.4083 24.7989 24.0917 24.6036 23.8965L22.7703 22.0631C22.749 22.0419 22.7264 22.023 22.7026 22.0064ZM19.1644 19.8715C18.3024 20.5768 17.2006 21 16 21C14.7994 21 13.6976 20.5768 12.8357 19.8715L11.7703 20.9369C11.575 21.1322 11.2584 21.1322 11.0632 20.9369C10.8679 20.7416 10.8679 20.425 11.0632 20.2298L12.1285 19.1644C11.4232 18.3025 11 17.2006 11 16C11 14.7994 11.4232 13.6976 12.1285 12.8356L11.0632 11.7702C10.8679 11.575 10.8679 11.2584 11.0632 11.0631C11.2584 10.8679 11.575 10.8679 11.7703 11.0631L12.8357 12.1285C13.6976 11.4232 14.7994 11 16 11C17.2006 11 18.3025 11.4232 19.1644 12.1285L20.2298 11.0631C20.4251 10.8679 20.7417 10.8679 20.9369 11.0631C21.1322 11.2584 21.1322 11.575 20.9369 11.7702L19.8715 12.8357C20.5768 13.6976 21 14.7994 21 16C21 17.2006 20.5768 18.3024 19.8715 19.1643L20.9369 20.2298C21.1322 20.425 21.1322 20.7416 20.9369 20.9369C20.7417 21.1322 20.4251 21.1322 20.2298 20.9369L19.1644 19.8715ZM30 27C30 28.6569 28.6569 30 27 30C25.3431 30 24 28.6569 24 27C24 25.3431 25.3431 24 27 24C28.6569 24 30 25.3431 30 27ZM8 27C8 28.6569 6.65685 30 5 30C3.34315 30 2 28.6569 2 27C2 25.3431 3.34315 24 5 24C6.65685 24 8 25.3431 8 27Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Relayers
                    <div className="ml-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-[#333333]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4783 3C13.4783 2.44772 13.926 2 14.4783 2H21C21.5523 2 22 2.44772 22 3V9.02007C22 9.57235 21.5523 10.0201 21 10.0201C20.4477 10.0201 20 9.57235 20 9.02007V5.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L18.5858 4H14.4783C13.926 4 13.4783 3.55228 13.4783 3Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 5C2 3.34315 3.34314 2 5 2H8.82353C9.37581 2 9.82353 2.44772 9.82353 3C9.82353 3.55228 9.37581 4 8.82353 4H5C4.44772 4 4 4.44771 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V14.6471C20 14.0948 20.4477 13.6471 21 13.6471C21.5523 13.6471 22 14.0948 22 14.6471V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z"
                          fill=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              onClick={closeDropDown}
              href={"/nft-collections"}
              className={`h-fit py-[8px] transition-all duration-300 ease-in-out uppercase font-semibold hover:text-white text-[16px] text-${
                pathname === "/nft-collections" ? "white" : "gray"
              }`}
            >
              NFT Collections
            </Link>

            <Link
              onClick={closeDropDown}
              href={"/roadmap"}
              className={`h-fit py-[8px] transition-all duration-300 ease-in-out uppercase font-semibold hover:text-white text-[16px] text-${
                pathname === "/roadmap" ? "white" : "gray"
              }`}
            >
              Roadmap
            </Link>

            <Link
              onClick={closeDropDown}
              href={"/rewards"}
              className={`h-fit py-[8px] transition-all duration-300 ease-in-out uppercase font-semibold hover:text-white text-[16px] text-${
                pathname === "/rewards" ? "white" : "gray"
              }`}
            >
              Rewards
            </Link>
          </div>
        </div>

        {/* Humberger */}
        <div
          className="flex lg:hidden flex-col justify-center items-center gap-[6px] w-[32px] h-[32px]"
          onClick={humberger}
        >
          <span
            className={`transition-all duration-300 ease-in-out w-[20px] h-[1px] bg-white rounded ${
              menu ? "rotate-[225deg] absolute" : "rotate-0 relative"
            }`}
          />
          <span
            className={`transition-all duration-300 ease-in-out w-[20px] h-[1px] bg-white rounded ${
              menu ? "opacity-0" : "opacity-1"
            }`}
          />
          <span
            className={`transition-all duration-300 ease-in-out w-[20px] h-[1px] bg-white rounded ${
              menu ? "rotate-[-225deg] absolute" : "rotate-0 relative"
            }`}
          />
        </div>

        {/* Listing */}
        <div
          className={`
          ${
            menu === true
              ? "opacity-100 transform scale-y-100 origin-top py-[16px] top-[48px] z-10"
              : "opacity-0 transform scale-y-0 origin-top py-0 top-12 z-[-1]"
          } flex flex-col gap-4 px-6 overflow-hidden absolute lg:hidden border-y-[1px] border-white border-opacity-10 right-0 w-full bg-black transition-all duration-600 ease-in-out`}
        >
          <div onClick={humberger}>
            <Link
              onClick={closeDropDown}
              className={`py-[16px] transition-all duration-300 ease-in-out font-semibold hover:text-white text-[16px] text-${
                pathname === "/ygata" ? "white" : "gray"
              }`}
              href={"/ygata"}
            >
              yGATA
            </Link>
          </div>

          <div onClick={humberger}>
            <Link
              onClick={closeDropDown}
              className={`py-[16px] transition-all duration-300 ease-in-out uppercase font-semibold hover:text-white text-[16px] text-${
                pathname === "rollapp" ? "white" : "gray"
              }`}
              href={"/rollapp"}
            >
              RollApp
            </Link>
          </div>

          <div
            className={`group w-fit flex gap-2 items-center justify-center h-fit py-[8px] transition-all duration-300 ease-in-out font-semibold hover:text-white text-[16px] cursor-pointer text-${
              dropDown ? "white" : "gray"
            } text-${pathname === "/infrastructure" ? "white" : "gray"}`}
            onClick={handleDropDown}
          >
            <div className="uppercase">Infrastructure</div>
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                className={`${dropDown ? "fill-white" : "fill-gray"} ${
                  pathname === "/infrastructure" ? "fill-white" : "fill-gray"
                } group-hover:fill-white transition-all duration-300 ease-in-out ${
                  dropDown ? "rotate-[180deg]" : "rotate-[0deg]"
                }`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.29289 5.29289C2.68342 4.90237 3.31658 4.90237 3.70711 5.29289L8 9.58579L12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071L2.29289 6.70711C1.90237 6.31658 1.90237 5.68342 2.29289 5.29289Z"
                  fill=""
                />
              </svg>
            </div>
            {dropDown && (
              <div className="absolute right-0 top-0 bottom-0 w-1/2 flex flex-col bg-black border-l-[1px] border-white border-opacity-10 overflow-hidden">
                <div onClick={humberger}>
                  <Link
                    href={"/infrastructure/validators"}
                    className={`flex gap-2 py-4 pl-4 pr-6 items-center bg-black hover:bg-dgray text-gray hover:text-white`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="16" cy="16" r="4" fill="white" />
                        <circle
                          cx="27"
                          cy="16"
                          r="2"
                          transform="rotate(90 27 16)"
                          fill="white"
                        />
                        <circle
                          cx="16"
                          cy="27"
                          r="2"
                          transform="rotate(-180 16 27)"
                          fill="white"
                        />
                        <circle
                          cx="5"
                          cy="16"
                          r="2"
                          transform="rotate(90 5 16)"
                          fill="white"
                        />
                        <circle
                          cx="16"
                          cy="5"
                          r="2"
                          transform="rotate(-180 16 5)"
                          fill="white"
                        />
                      </svg>
                    </div>
                    Validators
                  </Link>
                </div>

                <div onClick={humberger}>
                  <Link
                    href={"/infrastructure/endpoints"}
                    className={`flex gap-2 py-4 pl-4 pr-6 items-center bg-black hover:bg-dgray text-gray hover:text-white`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="9" cy="9" r="5" fill="white" />
                        <circle cx="9" cy="9" r="5" fill="white" />
                        <circle cx="23" cy="23" r="5" fill="white" />
                        <circle cx="23" cy="23" r="5" fill="white" />
                        <circle cx="26" cy="6" r="2" fill="white" />
                        <circle cx="6" cy="26" r="2" fill="white" />
                        <path
                          d="M9 9L23 23"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="2 2"
                        />
                      </svg>
                    </div>
                    Endpoints
                  </Link>
                </div>

                <div onClick={humberger}>
                  <div
                    onClick={() =>
                      window.open(
                        "https://relayers.smartstake.io/relayer/44937E3DA9AA699A",
                        "_blank"
                      )
                    }
                    className={`group flex gap-2 py-4 pl-4 pr-5 justify-between items-center bg-black hover:bg-dgray text-gray hover:text-white`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8ZM27 8C28.6569 8 30 6.65685 30 5C30 3.34315 28.6569 2 27 2C25.3431 2 24 3.34315 24 5C24 6.65685 25.3431 8 27 8ZM16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24ZM22.7026 22.0064C24.1311 20.4133 25 18.3081 25 16C25 13.6919 24.1311 11.5867 22.7026 9.99363C22.7264 9.97702 22.749 9.95811 22.7703 9.93689L24.6036 8.10356C24.7989 7.9083 24.7989 7.59172 24.6036 7.39645C24.4083 7.20119 24.0917 7.20119 23.8965 7.39645L22.0632 9.22979C22.0419 9.25101 22.023 9.27366 22.0064 9.29743C20.4134 7.86889 18.3082 7 16 7C13.6919 7 11.5867 7.86887 9.99363 9.29739C9.97703 9.27363 9.95813 9.25099 9.93692 9.22979L8.10359 7.39645C7.90833 7.20119 7.59175 7.20119 7.39648 7.39645C7.20122 7.59172 7.20122 7.9083 7.39648 8.10356L9.22982 9.93689C9.25102 9.9581 9.27366 9.977 9.29741 9.9936C7.86889 11.5866 7 13.6918 7 16C7 18.3082 7.86889 20.4134 9.29742 22.0064C9.27366 22.023 9.25103 22.0419 9.22982 22.0631L7.39648 23.8965C7.20122 24.0917 7.20122 24.4083 7.39648 24.6036C7.59175 24.7988 7.90833 24.7988 8.10359 24.6036L9.93692 22.7702C9.95813 22.749 9.97703 22.7264 9.99364 22.7026C11.5867 24.1311 13.6919 25 16 25C18.3082 25 20.4134 24.1311 22.0064 22.7026C22.023 22.7264 22.0419 22.749 22.0632 22.7702L23.8965 24.6036C24.0917 24.7988 24.4083 24.7988 24.6036 24.6036C24.7989 24.4083 24.7989 24.0917 24.6036 23.8965L22.7703 22.0631C22.749 22.0419 22.7264 22.023 22.7026 22.0064ZM19.1644 19.8715C18.3024 20.5768 17.2006 21 16 21C14.7994 21 13.6976 20.5768 12.8357 19.8715L11.7703 20.9369C11.575 21.1322 11.2584 21.1322 11.0632 20.9369C10.8679 20.7416 10.8679 20.425 11.0632 20.2298L12.1285 19.1644C11.4232 18.3025 11 17.2006 11 16C11 14.7994 11.4232 13.6976 12.1285 12.8356L11.0632 11.7702C10.8679 11.575 10.8679 11.2584 11.0632 11.0631C11.2584 10.8679 11.575 10.8679 11.7703 11.0631L12.8357 12.1285C13.6976 11.4232 14.7994 11 16 11C17.2006 11 18.3025 11.4232 19.1644 12.1285L20.2298 11.0631C20.4251 10.8679 20.7417 10.8679 20.9369 11.0631C21.1322 11.2584 21.1322 11.575 20.9369 11.7702L19.8715 12.8357C20.5768 13.6976 21 14.7994 21 16C21 17.2006 20.5768 18.3024 19.8715 19.1643L20.9369 20.2298C21.1322 20.425 21.1322 20.7416 20.9369 20.9369C20.7417 21.1322 20.4251 21.1322 20.2298 20.9369L19.1644 19.8715ZM30 27C30 28.6569 28.6569 30 27 30C25.3431 30 24 28.6569 24 27C24 25.3431 25.3431 24 27 24C28.6569 24 30 25.3431 30 27ZM8 27C8 28.6569 6.65685 30 5 30C3.34315 30 2 28.6569 2 27C2 25.3431 3.34315 24 5 24C6.65685 24 8 25.3431 8 27Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      Relayers
                    </div>
                    <div className="ml-6">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-[#333333]"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4783 3C13.4783 2.44772 13.926 2 14.4783 2H21C21.5523 2 22 2.44772 22 3V9.02007C22 9.57235 21.5523 10.0201 21 10.0201C20.4477 10.0201 20 9.57235 20 9.02007V5.41421L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L18.5858 4H14.4783C13.926 4 13.4783 3.55228 13.4783 3Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 5C2 3.34315 3.34314 2 5 2H8.82353C9.37581 2 9.82353 2.44772 9.82353 3C9.82353 3.55228 9.37581 4 8.82353 4H5C4.44772 4 4 4.44771 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V14.6471C20 14.0948 20.4477 13.6471 21 13.6471C21.5523 13.6471 22 14.0948 22 14.6471V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z"
                          fill=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div onClick={humberger}>
            <Link
              onClick={closeDropDown}
              className={`py-[16px] transition-all duration-300 ease-in-out uppercase font-semibold hover:text-white text-[16px] text-${
                pathname === "/nft-collections" ? "white" : "gray"
              }`}
              href={"/nft-collections"}
            >
              NFT Collections
            </Link>
          </div>

          <div onClick={humberger}>
            <Link
              onClick={closeDropDown}
              className={`py-[16px] transition-all duration-300 ease-in-out uppercase font-semibold hover:text-white text-[16px] text-${
                pathname === "/roadmap" ? "white" : "gray"
              }`}
              href={"/roadmap"}
            >
              Roadmap
            </Link>
          </div>

          <div onClick={humberger}>
            <Link
              onClick={closeDropDown}
              className={`py-[16px] transition-all duration-300 ease-in-out uppercase font-semibold hover:text-white text-[16px] text-${
                pathname === "/rewards" ? "white" : "gray"
              }`}
              href={"/rewards"}
            >
              Rewards
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
