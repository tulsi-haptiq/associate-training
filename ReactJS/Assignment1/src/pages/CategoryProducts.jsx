import React from "react";
import { useParams } from "react-router-dom";
import { IoIosHeart } from "react-icons/io"; // Wishlist icon
import productData from "../../public/data/productdata.json"; // Adjust if needed
import Card from "../components/Card";

export default function CategoryProducts() {
  const { category } = useParams();
  const items = productData.items;

  const filteredProducts = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6 text-white min-h-screen">
      <h3 className="w-fit mx-auto text-lg sm:text-xl md:text-2xl font-semibold mb-8 px-4 sm:px-6 py-2 rounded-full shadow-lg shadow-fuchsia-600 capitalize">
        {category} Products
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-[#2b2b2b] to-[#3a1c71] rounded-2xl p-4 sm:p-5 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition duration-300 flex flex-col justify-between"
          >
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
