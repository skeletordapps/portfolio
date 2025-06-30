"use client";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Typed from "typed.js";
import { useRef, useEffect, useContext, useState } from "react";
import Link from "next/link";
import { StateContext } from "@/app/context/state";
import NewTestimonialButton from "./newTestimonialButton";
import { SOCIALS } from "@/app/utils/conts";
import Nav from "../nav";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Header() {
  const { setTestimonialBoxIsOpen } = useContext(StateContext);
  const el = useRef(null); // Create reference to store the DOM element containing the animation

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web3 Tech", "Blockchain", "De-Fi Space", "NFT Collections"],
      typeSpeed: 100,
      loop: true,
      fadeOutDelay: 300,
      backSpeed: 100,
      cursorChar: "|",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full bg-space bg-no-repeat bg-cover bg-left-top relative">
      <Nav />
      <div className="flex flex-col z-20 bg-gradient-to-b from-transparent via-black/30 to-black rounded-t-[40px] mt-24 md:mt-40">
        <div className="flex flex-col z-20 py-12 px-8 xl:px-14 rounded-t-[40px]">
          <div className="flex flex-col md:flex-row items-center mt-[-120px] pb-24 text-center md:text-start">
            <div
              className={`w-full h-[220px] font-extrabold text-white text-5xl md:text-6xl lg:text-[66px] leading-tight ${jakarta.className}`}
            >
              <p className="max-w-[700px]">
                Dedicated to build the Future of the
              </p>
              <span
                ref={el}
                className="bg-gradient-to-br from-[#9C74F1] via-[#987FFF] to-[#3600A8] text-transparent bg-clip-text"
              />
            </div>

            <div className="hidden md:block relative min-w-[240px] min-h-[240px] mt-[-55px] opacity-90 transition-all animate-pulse duration-1000">
              <Image
                src="/logo2.svg"
                width={230}
                height={230}
                alt="logo"
                className="absolute top-3 right-[-30px] !w-[240px] !h-[240px] self-center transition-opacity duration-1000 delay-500 ease-in-out"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10  xl:flex-row xl:gap-0 items-center justify-between">
            <div className="text-3xl w-max py-2 px-1 font-sans rounded-lg text-center xl:text-start">
              <p>Hello stranger! 👋</p>
              <p className="text-2xl text-white/80">
                I'm Lucas! AKA -{" "}
                <span className="text-violet-500">Skeletor</span>
              </p>
            </div>
            <div className="hidden xl:flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {SOCIALS.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="blank"
                    className="text-violet-200 hover:text-white hover:scale-105"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
