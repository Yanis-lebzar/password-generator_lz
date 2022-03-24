import React from "react";
import Generator from "./Generator";

function Password_generator() {
  return (
    <div className="px-8 md:px-16 lg:px-28 z-10">
      <div className="text-center  space-y-3 md:space-y-8 md:flex md:flex-col md:text-center  md:items-center lg:text-left lg:items-start">
        <h1 className="text-2xl md:text-[40px] md:leading-tight lg:w-[500px]  font-bold  mt-9 text-primary">
          Générateur de mot de passe aléatoire
        </h1>
        <p className="text-small_p text-sm md:text-xl md:w-[580px]">
          Générez des mots de passe sécurisés et aléatoires pour rester en
          sécurité en ligne.
        </p>
      </div>
      <Generator />
    </div>
  );
}

export default Password_generator;
