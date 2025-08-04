import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="container mx-auto max-w-7xl flex items-center justify-between  align-items-center ">
      <div className="text-left  mb-[50px]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4  text-[#fff]">
          Refine Your Gaming
          <br /> Experience with Gear
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-md">
          Experience for uncompromising performance and immersive, lifelike
          surround sound.
        </p>

        <Link  to={"/products"} className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg">
          SHOP NOW
        </Link>
      </div>

      {/* hero img */}
      <div>
        <div>
          <img src="/heroimg.png" alt="imgjkkgkggk" />
        </div>
      </div>
    </section>
  );
}
