import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import generator from "generate-password";
import { motion } from "framer-motion";
import CopyTooltip from "./CopyTooltip";
import { AppContext } from "../../AppContext";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Generator() {
  // const sliderDefaultValue = 16;

  // const [passwordLength, setPasswordLength] = useState(sliderDefaultValue);

  const [passwordLength, setPasswordLength, sliderDefaultValue] =
    useContext(AppContext);

  const [maj, setMaj] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [similarCharacters, setSimilarCharacters] = useState(false);
  const [min, setMin] = useState(true);
  const [symboles, setSymboles] = useState(true);
  const [letters, setLetters] = useState(true);
  // const [allcheck, setAllCheck] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordSecurity, setPasswordSecurity] = useState("");

  const [showTooltip, setShowTooltip] = useState(false);

  console.log(
    passwordLength,
    maj,
    numbers,
    similarCharacters,
    min,
    symboles,
    letters
  );

  // let borderCss = "border-600-green";
  useEffect(() => {
    let password = "";

    try {
      // password generator from generate-password package
      password = generator.generate({
        length: passwordLength,
        numbers: numbers,
        uppercase: maj,
        symbols: symboles,
        lowercase: min,
        excludeSimilarCharacters: similarCharacters,
        strict: refresh,
      });
    } catch (error) {
      console.log(error);
    }

    // button color "fort" "faible"
    const securityLevel = () => {
      if (passwordLength > 28) {
        setPasswordSecurity("très fort");
      } else if (passwordLength > 6) {
        setPasswordSecurity("fort");
      } else {
        setPasswordSecurity("faible");
      }

      return passwordSecurity;
    };

    securityLevel();

    let uri = "https://ptarradas0.wixsite.com";

    window.postMessage(password, "*");
    // delete all characters if it is pressed

    if (!letters) {
      setMin(false);
      setMaj(false);
      setPasswordValue(password?.replace(/[A-Za-z]/g, ""));
    } else {
      return setPasswordValue(password);
    }
  }, [
    maj,
    numbers,
    letters,
    symboles,
    refresh,
    min,
    similarCharacters,
    passwordLength,
    passwordSecurity,
  ]);

  const iframeCopy = () => {
    return document.addEventListener("copy", (e) => {
      return console.log("e =>", e);
    });
  };

  return (
    <div className="mt-10 lg:mt-12 w-full z-20 relative">
      {/* Input */}
      <div className="relative lg:flex lg:justify-start lg:space-x-10  ">
        <div className=" lg:relative h-10 md:h-14 w-full lg:w-[687px] ">
          <input
            className="w-full h-full border-2 outline-none border-primary rounded-full focus:border-4 bg-white pr-10 pl-5 md:pr-14 md:pl-6 lg:pr-16 lg:pl-6 focus:shadow-lg text-center font-bold md:text-xl lg:text-2xl selection:bg-primary selection:text-white "
            type="text"
            name=""
            id=""
            value={passwordValue}
          />
          {/* Refresh Icon */}
          <div className="absolute top-2 right-3 md:top-2.5 md:right-4 w-6 h-6 md:w-9 md:h-9  hover:animate-spin transition-all duration-300">
            <Image
              className="cursor-pointer "
              alt="bouton pour rafraichir"
              src="/icons/refresh.svg"
              layout="fill"
              quality={100}
              onClick={() => setRefresh(!refresh)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="relative space-x-6 lg:space-x-10 flex items-center justify-center md:mt-2 lg:mt-0 lg:items-center ">
          {/* Bouton Copier */}
          <div className="group">
            <button
              className="h-12 w-20 md:h-14 md:w-24 lg:w-28 mt-9 lg:mt-0 bg-primary rounded-3xl lg:rounded-full text-sm md:text-lg uppercase font-semibold text-white
       hover:bg-secondary transition-all ease-in-out  shadow-2xl
        duration-200 "
              onClick={() => {
                navigator.clipboard.writeText(passwordValue);
                iframeCopy();
                setShowTooltip(true);
                setTimeout(() => {
                  setShowTooltip(false);
                }, 2500);
              }}
            >
              Copier
            </button>
            {showTooltip && <CopyTooltip />}
          </div>

          {/* Sûreté du mot de passe */}
          <button
            className={`h-12 w-20 md:h-14 md:w-24 lg:w-28 mt-9 lg:mt-0   border-2 rounded-3xl lg:rounded-full text-sm md:text-lg md:leading-6 font-semibold cursor-pointer 
          uppercase  text-white
         transition-all ease-in-out duration-200 shadow-2xl
         ${
           passwordLength > 6
             ? "border-blue-500 bg-blue-500 "
             : "border-red-600  bg-red-600"
         }

         `}
          >
            {passwordSecurity}
            {/* {passwordLength > 7 ? "Très Fort" : " Faible "} */}
          </button>
        </div>
      </div>

      {/* Functionnalities */}

      <div className="relative h-auto md:h-auto w-full lg:w-[1000px] bg-white rounded-xl mt-9 md:mt-12 lg:mt-14 px-7 py-6  shadow-primary shadow-func_box">
        <div
          className="w-full space-y-[16px] md:space-y-0   text-base md:text-lg text-secondary font-bold grid grid-cols-1 md:grid-cols-2 
        md:gap-8 md:row-auto "
        >
          <div className="switch_div relative">
            <p className="">
              Taille <span className="font-medium">( {passwordLength} ) </span>
            </p>
            <Slider
              className="absolute w-2/4 md:w-2/4 lg:w-2/3 -top-2 right-2 md:flex md:top-0 lg:top-[18%] md:right-2"
              defaultValue={sliderDefaultValue}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={(event) =>
                setPasswordLength((event.target as HTMLTextAreaElement).value)
              }
              max={50}
            />
          </div>

          <div className="switch_div">
            <p>Minuscule</p>
            <Switch
              checked={min}
              {...label}
              color="primary"
              onChange={(event) => setMin(event.target.checked)}
            />
          </div>
          <div className="switch_div">
            <p>Majuscule</p>
            <Switch
              checked={maj}
              {...label}
              onChange={(event) => setMaj(event.target.checked)}
            />
          </div>

          <div className="switch_div">
            <p>Lettres</p>
            <Switch
              checked={letters}
              {...label}
              onChange={(event) => setLetters(event.target.checked)}
            />
          </div>
          <div className="switch_div">
            <p>Nombres</p>
            <Switch
              checked={numbers}
              {...label}
              onChange={(event) => setNumbers(event.target.checked)}
            />
          </div>
          <div className="switch_div">
            <p>Symboles</p>
            <Switch
              checked={symboles}
              {...label}
              onChange={(event) => setSymboles(event.target.checked)}
            />
          </div>
          <div className="switch_div">
            <p>Exclure des caractères similaires</p>
            <Switch
              checked={similarCharacters}
              {...label}
              onChange={(event) => setSimilarCharacters(event.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
