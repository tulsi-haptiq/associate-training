import React from "react";
import { featuresInfo } from "../utils/featuresInfo";
import FeatureComponent from "./FeatureComponent";
import ShadowBtn from "./ShadowBtn";

export default function FeatureSection() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ShadowBtn title="Features" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresInfo?.map((info, idx) => (
          <FeatureComponent key={idx} data={info} />
        ))}
      </div>
    </div>
  );
}
