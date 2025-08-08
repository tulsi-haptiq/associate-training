import React from "react";

export default function FeatureComponent({ data }) {
  return (
    <section className="container mx-auto px-4 sm:px-6 md:px-8 mb-20">
      <div className="flex justify-center">
        <div className="w-full  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 text-center">
          <div className="text-teal-400 mb-4">
            {data.Icon && <data.Icon size={34} />}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
            {data.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  );
}
