import Image from "next/image";
import React from "react";
import Password_generator from "./Password_generator";

function Hero_section() {
  return (
    <div className="h-screen  w-full relative  pt-16 lg:pt-28  before:-z-10  before:content-[''] before:absolute before:top-0  before:right-0 before:left-0 before:bottom-0 before:bg-[url('/backgrounds/bg-mobile.jpg')] md:before:bg-bottom before:bg-right lg:before:bg-top lg:before:bg-[url('/backgrounds/bg.jpg')] before:bg-cover lg:before:opacity-60 ">
      <div className="absolute  md:w-[520px] md:h-[382px]  md:right-10 md:z-0 md:-bottom-40 lg:w-[796px] lg:h-[586px]  lg:-right-20 lg:-bottom-4">
        <Image
          alt="illustration mobile sécurisé"
          src="/assets/mobile-Illustration.svg"
          layout="fill"
          quality={100}
        />
      </div>

      <Password_generator />
    </div>
  );
}

export default Hero_section;
