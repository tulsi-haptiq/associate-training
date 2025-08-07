import React from "react";
import { Link } from "react-router-dom";
import ShopNow from "./ShopNow";

export default function HeroSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Text */}
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
          Refine Your Gaming
          <br /> Experience with Gear
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
          Experience for uncompromising performance and immersive, lifelike
          surround sound.
        </p>

        {/* shop now */}
        <ShopNow/>

      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="/headset.png"
          alt="Gaming Hero"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl"
        />
      </div>
    </section>
  );
}
