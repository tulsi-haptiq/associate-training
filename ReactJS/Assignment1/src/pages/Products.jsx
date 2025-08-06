import React, { useState, useEffect } from "react";
import ShadowBtn from "../components/ShadowBtn";
import Card from "../components/Card";

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/productdata.json")
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .catch((error) => console.log("Error fetching local Json file:", error));
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6 text-white">
      <ShadowBtn title="Our Products" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {Array.isArray(items) &&
          items.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-[#2b2b2b] to-[#3a1c71] rounded-2xl p-4 sm:p-5 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition duration-300 flex flex-col justify-between mb-4"
            >
              <Card item={item} />
            </div>
          ))}
      </div>
    </div>
  );
}
