import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import Card from "../components/Card";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg text-center sm:text-left">
          My Wishlist
        </h2>

        {wishlist.length === 0 ? (
          <div className="text-center text-gray-400 text-base sm:text-lg mt-10">
            Your wishlist is empty.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col transition hover:scale-105 duration-300"
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
