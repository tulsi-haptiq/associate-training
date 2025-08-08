import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function CategoryComponent({ data }) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="text-center">
        <Link to={`/category/${data.category}`}>
          <div className="flex flex-col justify-between items-center p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 w-full max-w-sm mx-auto h-[330px]">
            <div className="w-full mb-4">
              <img
                src={data.image}
                alt={data.title}
                className="object-contain w-full max-h-48"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {data.title}
              </h3>
              <div className="flex gap-2 text-xs text-gray-400 mt-1 hover:text-purple-400 transition-colors duration-200 cursor-pointer">
                <span>shop now</span>
                <MdOutlineArrowOutward className="mt-[2px]" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
