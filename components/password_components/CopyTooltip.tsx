import React from "react";
import { motion } from "framer-motion";

function CopyTooltip() {
  return (
    <motion.div
      className="absolute w-auto lg:w-20 text-center p-2 mt-0.5 top-0 md:-mt-1.5 lg:-mt-12  min-w-max right-[58%] md:left-56 lg:left-3.5 rounded-md shadow-md  text-white bg-gray-900 text-xs md:text-base font-bold transition-all ease-in-out duration-800 "
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0] }}
    >
      Copié !
    </motion.div>
  );
}

export default CopyTooltip;
