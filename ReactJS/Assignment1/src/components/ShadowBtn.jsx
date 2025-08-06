import React from "react";

export default function ShadowBtn({ title }) {
  return (
    <div>
      <h3 className="w-fit mx-auto text-white text-2xl font-semibold text-center mb-[50px] px-6 py-2 rounded-full shadow-lg shadow-fuchsia-600">
        {title}
      </h3>
    </div>
  );
}
