import React from "react";
import { Link } from "react-router-dom";

export default function CategoryComponent({ data }) {
 
  return (
    <section className="container mx-auto px-4 mb-20">
      <div className=" gap-8 text-center">
        
        <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
          <div className="text-teal-400 mb-4">
            <img src={data.image} alt={data.title}
            className="object-contain max-h-full"/>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{data.title}</h3>
          <Link  to={`/category/${data.category}`}  className="relative z-10 text-center text-xs text-gray-400 mt-1 hover:text-purple-400 transition-colors duration-200 cursor-pointer">
        Shop Now
      </Link>
        </div>
      </div>
    </section>
  );
}
