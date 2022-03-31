import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="absolute h-16 sm:h-20 lg:h-28  flex items-center justify-between  w-full top-0 left-0 right-0 px-8 md:px-16 lg:px-28 shadow-lg  bg-white">
      {/* Logo left side */}
      <div className="flex items-center space-x-2  lg:space-x-4 w-40 xl:w-64 ">
        <Image
          alt="logo Lazar soft"
          src="/logos/logo.svg"
          height={64}
          width={64}
          quality={100}
        />
        <div className="lg:mt-6">
          <Image
            alt="logo Lazar soft"
            src="/logos/logo-text.svg"
            height={24}
            width={150}
            quality={100}
          />
          <p className="text-xs lg:text-lg -mt-1 lg:-mt-2 font-normal">Tools</p>
        </div>
      </div>
      {/* Menu items */}
      <div className="flex items-center">
        <div className="invisible lg:visible lg:space-x-10 lg:text-xl">
          <a href="">Password Generator</a>
          <a href="">Lazar Soft</a>

          <a href="">Contact</a>
        </div>
        <div className="mt-2 lg:invisible lg:w-0">
          <Image
            alt="menu burger"
            src="/icons/menu.png"
            height={40}
            width={40}
            quality={100}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
