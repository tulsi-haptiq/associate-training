// import React, { useContext } from "react";
// import { WishlistContext } from "../context/WishlistContext";
import Card from "../components/Card";

export default function Wishlist() {
  // const { wishlist } = useContext(WishlistContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
        {/* {wishlist.length === 0 ? (
          <p className="text-gray-400">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        )} */}
    </div>
  );
}
