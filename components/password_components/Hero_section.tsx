import Image from "next/image";
import React from "react";
import Password_generator from "./Password_generator";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

function Hero_section() {
  const [passwordLength] = useContext(AppContext);
  return (
    <div className="h-screen  w-full relative  pt-16 lg:pt-28  before:-z-10  before:content-[''] before:absolute before:top-0  before:right-0 before:left-0 before:bottom-0 before:bg-[url('/backgrounds/bg-mobile.jpg')] md:before:bg-bottom before:bg-right lg:before:bg-top lg:before:bg-[url('/backgrounds/bg.jpg')] before:bg-cover lg:before:opacity-60 ">
      <div
        className={`absolute overflow-hidden ${
          passwordLength < 7 ? "tel" : ""
        }   md:w-[320px] md:h-[382px]  md:right-[25%] md:z-0 md:bottom-[-10%] lg:w-[736px] lg:h-[596px]  lg:-right-2 lg:-bottom-2 lg:top-[34%]`}
      >
        <Image
          alt="illustration mobile sécurisé"
          src="/assets/mobile-alone.svg"
          layout="fill"
          quality={100}
        />
      </div>
      <motion.div
        className={`absolute md:w-[50px] md:h-[60px] ${
          passwordLength < 7 ? "modules" : ""
        }   md:-z-10 lg:w-[121px] lg:h-[151px]  md:right-[55%] md:bottom-[10%]  lg:right-[31%] lg:bottom-[46%]`}
        animate={{ y: [0, 50, -50, 50, 0] }}
        transition={{
          type: "spring",
          duration: 16,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          alt="illustration mobile sécurisé"
          src="/assets/module-1.svg"
          layout="fill"
          quality={100}
        />
      </motion.div>
      <motion.div
        className={`absolute md:w-[80px] md:h-[382px]   ${
          passwordLength < 7 ? "modules" : ""
        } md:z-0 md:right-[15%] md:bottom-[-5%]  lg:w-[121px] lg:h-[151px]  lg:right-[7%] lg:bottom-[4%]`}
        animate={{ y: [0, 30, -50, 30, 0] }}
        transition={{
          type: "spring",
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",

          delay: 3,
        }}
      >
        <Image
          alt="illustration mobile sécurisé"
          src="/assets/module-2.svg"
          layout="fill"
          quality={100}
        />
      </motion.div>

      <motion.div
        className={` absolute   md:z-0 lg:w-[121px] lg:h-[151px]  ${
          passwordLength < 7 ? "modules" : ""
        } lg:right-[-4%] lg:bottom-[6%] `}
        animate={{ x: [0, -50, 50, 0] }}
        transition={{
          type: "spring",
          duration: 20,
          repeat: Infinity,
          delay: 5,
        }}
      >
        <Image
          alt="illustration mobile sécurisé"
          src="/assets/module-3.svg"
          layout="fill"
          quality={100}
        />
      </motion.div>
      <motion.div
        className={` absolute md:w-[78px] md:h-[103px] md:right-[47%] md:bottom-[5%] lockDefault   md:z-10 lg:w-[178px] lg:h-[353px]  lg:right-[22%] lg:bottom-[25%]  ${
          passwordLength < 7 ? "locker" : ""
        } `}
        animate={{ rotate: [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0] }}
        transition={{
          type: "spring",
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 10,
          delay: 5,
        }}
      >
        <Image
          alt="illustration mobile sécurisé"
          src="/assets/locker.svg"
          layout="fill"
          quality={100}
        />
      </motion.div>
      <motion.div
        className={`absolute md:w-[58px] md:h-[103px] md:right-[49%] lock_shadowDefault  md:bottom-[0%] md:z-0 lg:w-[178px] lg:h-[353px]  lg:right-[22%] lg:bottom-[8%]  ${
          passwordLength < 7 ? "locker_shadow" : ""
        } `}
        animate={{ rotate: [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0] }}
        transition={{
          type: "spring",
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 10,
          delay: 5,
        }}
      >
        <Image
          alt="illustration mobile sécurisé"
          src="/assets/locker-shadow.svg"
          layout="fill"
          quality={100}
        />
      </motion.div>
      <Password_generator />
    </div>
  );
}

export default Hero_section;
