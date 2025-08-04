import React from "react";
import { featuresInfo } from "../utils/featuresInfo";
import FeatureComponent from "./FeatureComponent";

export default function FeatureSection() {
  return (
    <>
      <div className="container mx-auto max-w-7xl ">
        <h3 className="w-fit mx-auto text-white text-2xl font-semibold text-center mb-[50px] px-6 py-2 rounded-full shadow-lg shadow-fuchsia-600">
          Features
        </h3>
        <div className="flex flex-row gap-0">
          {featuresInfo?.map((info, idx) => (
            <FeatureComponent key={idx}  data={info} />
          ))}
        </div>
      </div>
    </>
  );
}
