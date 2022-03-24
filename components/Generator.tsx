import Image from "next/image";
import React from "react";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Generator() {
  return (
    <div className="mt-10 lg:mt-12 w-full">
      {/* Input */}
      <div className="relative lg:flex lg:justify-start lg:space-x-10  ">
        <div className=" lg:relative h-10 md:h-14 w-full lg:w-[687px] ">
          <input
            className="w-full h-full outline outline-primary rounded-full outline-3 focus:outline-4  bg-white px-5 focus:shadow-lg"
            type="text"
            name=""
            id=""
          />
          <div className="absolute top-2 right-3 md:top-2.5 md:right-4 w-6 h-6 md:w-9 md:h-9   ">
            <Image
              className="cursor-pointer "
              alt="bouton pour rafraichir"
              src="/icons/refresh.svg"
              layout="fill"
              quality={100}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="relative space-x-6 lg:space-x-10 flex items-center justify-center md:mt-2 lg:mt-0 lg:items-center ">
          {/* Bouton Copier */}
          <button
            className="h-12 w-20 md:h-14 md:w-24 lg:w-28 mt-9 lg:mt-0 bg-primary rounded-3xl lg:rounded-full text-sm md:text-lg uppercase font-semibold text-white
       hover:bg-secondary transition-all ease-in-out 
        duration-200"
          >
            Copier
          </button>

          {/* Sûreté du mot de passe */}
          <button
            className="h-10 w-20 md:h-12 md:w-24 lg:w-28 mt-9 lg:mt-0 bg-white outline outline-red-600 outline-3 rounded-3xl text-sm md:text-lg font-semibold text-red-600 cursor-pointer 
          uppercase
        hover:bg-red-600 hover:text-white transition-all ease-in-out duration-200"
          >
            Fort
          </button>
        </div>
      </div>

      {/* Functionnalities */}

      <div className="relative h-auto md:h-auto w-full lg:w-[1000px] bg-white rounded-xl mt-9 md:mt-12 lg:mt-14 px-7 py-6 overflow-hidden shadow-primary shadow-func_box">
        <div
          className="w-full space-y-[16px] md:space-y-0   text-base md:text-lg text-secondary font-medium grid grid-cols-1 md:grid-cols-2 
        md:gap-8 md:row-auto"
        >
          <div className="switch_div relative ">
            <p>Taille</p>
            <Slider
              className="absolute w-2/4 md:w-2/3 top-4 right-8 md:flex md:top-0 md:right-2"
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
            />
          </div>

          <div className="switch_div">
            <p>Minuscule</p>
            <Switch {...label} defaultChecked color="primary" />
          </div>
          <div className="switch_div">
            <p>Majuscule</p>
            <Switch {...label} defaultChecked />
          </div>

          <div className="switch_div">
            <p>Lettres</p>
            <Switch {...label} defaultChecked />
          </div>
          <div className="switch_div">
            <p>Nombres</p>
            <Switch {...label} defaultChecked />
          </div>
          <div className="switch_div">
            <p>Symboles</p>
            <Switch {...label} defaultChecked />
          </div>
          <div className="switch_div">
            <p>Exclure des caractères similaires</p>
            <Switch {...label} defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
