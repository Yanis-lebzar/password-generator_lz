import React from "react";
import Password_generator from "./Password_generator";

function Hero_section() {
  return (
    <div className="h-screen overflow-x-hidden bg-[url('/backgrounds/bg.jpg')] bg-cover before:bg-white ">
      <Password_generator />
    </div>
  );
}

export default Hero_section;
