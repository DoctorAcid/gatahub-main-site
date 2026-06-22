import type { Metadata } from "next";
import { Space_Mono, Titillium_Web } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "../features/common/components/Nav";
import Footer from "@/features/common/components/Footer";
import TransitionProvider from "@/providers/TransitionProvider";
import InitialLoader from "@/features/common/components/loader/InitialLoader";

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
  display: "swap",
});

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-titillium",
  display: "swap",
});

const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gata Hub",
  description: "GATA Yield Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative min-h-[100dvh] flex flex-col items-center w-full bg-black text-white ${titillium.variable} ${clashDisplay.variable}`}
      >
        <InitialLoader />
        <TransitionProvider>
          <Nav />
          <div className="mt-[50px] lg:mt-[58px] max-w-[1920px] w-full">
            {children}
          </div>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
