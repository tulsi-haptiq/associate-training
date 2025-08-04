import React from "react";
import { useParams } from "react-router-dom";
import { IoIosHeart } from "react-icons/io"; // Wishlist icon
import productData from "../../public/data/productdata.json"; // Adjust if needed

export default function CategoryProducts() {
  const { category } = useParams();
  const items = productData.items;

  const filteredProducts = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container mx-auto max-w-7xl text-white">
      <h3 className="w-fit mx-auto text-white text-2xl font-semibold mb-[50px] px-6 py-2 rounded-full shadow-lg shadow-fuchsia-600 capitalize">
        {category} Products
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-[#2b2b2b] to-[#3a1c71] rounded-2xl p-5 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition duration-300 flex flex-col justify-between"
          >
            <div className="text-sm text-purple-300 font-semibold mb-2 capitalize">
              {item.category}
            </div>

            <div className="text-lg font-bold mb-2 text-white">
              {item.name}
            </div>

            <div className="text-sm text-gray-300 mb-3 line-clamp-2">
              {item.description}
            </div>

            <div className="text-base text-yellow-400 font-semibold mb-4">
              {item.price}
            </div>

            <div className="w-full h-48 flex items-center justify-center bg-black/10 rounded-lg mb-4 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain max-h-full"
              />
            </div>

            <div className="flex items-center justify-between gap-3 mt-auto">
              <button className="mt-auto bg-fuchsia-500 hover:bg-fuchsia-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-200">
                Add to Cart
              </button>

              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-pink-500 hover:text-pink-400 transition duration-200">
                <IoIosHeart size={20} strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
