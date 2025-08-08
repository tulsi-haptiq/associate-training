import React from "react";
import { Link } from "react-router-dom";
export default function ShopNow() {
  return (
    <Link
      to={"/products"}
      className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg"
    >
      SHOP NOW
    </Link>
  );
}
