import React, { useState, useEffect } from "react";

import Card from "../components/Card";

export default function Products() {
  const [items, setItems] = useState([]); //array to store

  useEffect(() => {
    fetch("/data/productdata.json")
      .then((res) => res.json()) //promise return = convert to json
      .then((data) => setItems(data.items)) //data set data
      .catch((error) => console.log("Error fetching local Json file:", error));
  }, []);
 

  return (
    <div className="container mx-auto max-w-7xl text-white">
     <h3 className="w-fit  mx-auto text-white  text-2xl font-semibold  mb-[50px] px-6 py-2 rounded-full shadow-lg shadow-fuchsia-600 ">Our Products</h3>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-4">
        {Array.isArray(items) &&
          items.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-[#2b2b2b] to-[#3a1c71] rounded-2xl p-5 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <Card item={item}/>
              
            </div>
          ))}
      </div>

    </div>
  );
}
