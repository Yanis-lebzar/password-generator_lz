import Image from "next/image";
import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import generator from "generate-password";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Generator() {
  const [passwordLength, setPasswordLength] = useState(50);
  const [maj, setMaj] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [similarCharacters, setSimilarCharacters] = useState(false);
  const [min, setMin] = useState(true);
  const [symboles, setSymboles] = useState(true);
  const [letters, setLetters] = useState(true);
  const [allcheck, setAllCheck] = useState(false);

  console.log(
    passwordLength,
    maj,
    numbers,
    similarCharacters,
    min,
    symboles,
    letters
  );

  // const password: string = generator({
  //   charsQty: passwordLength,
  //   isUppercase: maj,
  //   haveNumbers: numbers,
  //   haveString: letters,
  //   haveSymbols: symboles,
  // });

  const passGen = () => {
    // password generator from generate-password package
    const password = generator.generate({
      length: passwordLength,
      numbers: numbers,
      uppercase: maj,
      symbols: symboles,
      lowercase: min,
      excludeSimilarCharacters: similarCharacters,
    });

    // delete all characters if it is pressed

    if (!letters) {
      return password.replace(/\D/g, "");
    } else {
      return password;
    }
  };

  console.log(passGen());
  // useEffect(() => {
  //   if (!maj && !numbers && !min) {
  //     setAllCheck(true);
  //   } else {
  //     setAllCheck(false);
  //   }
  // }, [password]);
  return (
    <div className="mt-10 lg:mt-12 w-full">
      {/* Input */}
      <div className="relative lg:flex lg:justify-start lg:space-x-10  ">
        <div className=" lg:relative h-10 md:h-14 w-full lg:w-[687px] ">
          <input
            className="w-full h-full border-2 outline-none border-primary rounded-full focus:border-4 bg-white px-5 focus:shadow-lg  "
            type="text"
            name=""
            id=""
            value={passGen()}
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
            className="h-12 w-20 md:h-14 md:w-24 lg:w-28 mt-9 lg:mt-0 bg-white  border-red-600 border-2 rounded-3xl lg:rounded-full text-sm md:text-lg font-semibold text-red-600 cursor-pointer 
          uppercase hover:bg-red-600 hover:text-white
         transition-all ease-in-out duration-200"
          >
            Fort
          </button>
        </div>
      </div>

      {/* Functionnalities */}

      <div className="relative h-auto md:h-auto w-full lg:w-[1000px] bg-white rounded-xl mt-9 md:mt-12 lg:mt-14 px-7 py-6  shadow-primary shadow-func_box">
        <div
          className="w-full space-y-[16px] md:space-y-0   text-base md:text-lg text-secondary font-medium grid grid-cols-1 md:grid-cols-2 
        md:gap-8 md:row-auto"
        >
          <div className="switch_div relative">
            <p>Taille</p>
            <Slider
              className="absolute w-2/4 md:w-2/3 -top-2.5 right-2 md:flex md:top-0 md:right-2"
              defaultValue={50}
              aria-label="Default"
              valueLabelDisplay="auto"
              onChange={(event) => setPasswordLength(event.target.value)}
            />
          </div>

          <div className="switch_div">
            <p>Minuscule</p>
            <Switch
              {...label}
              defaultChecked
              color="primary"
              onChange={(event) => setMin(event.target.checked)}
            />
          </div>
          <div className="switch_div">
            <p>Majuscule</p>
            <Switch
              {...label}
              defaultChecked
              onChange={(event) => setMaj(event.target.checked)}
            />
          </div>

          <div className="switch_div">
            <p>Lettres</p>
            <Switch
              {...label}
              defaultChecked
              onChange={(event) => setLetters(event.target.checked)}
            />
          </div>
          <div className="switch_div">
            <p>Nombres</p>
            <Switch
              {...label}
              defaultChecked
              onChange={(event) => setNumbers(event.target.checked)}
            />
          </div>
          <div className="switch_div">
            <p>Symboles</p>
            <Switch
              {...label}
              defaultChecked
              onChange={(event) => setSymboles(event.target.checked)}
            />
          </div>
          <div className="switch_div">
            <p>Exclure des caractères similaires</p>
            <Switch
              defaultChecked={false}
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
