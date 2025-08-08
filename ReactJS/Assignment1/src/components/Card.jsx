import { IoIosHeart } from "react-icons/io";
import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

export default function Card({
  item,
  showAddToCart = true,
  showRemoveButton = false,
}) {
  const { toggleWishlist, isInwishlist } = useContext(WishlistContext);
  const isWished = isInwishlist(item.id);

  const dispatch = useDispatch();

  return (
    <>
      <div className="text-sm text-purple-300 font-semibold mb-2 capitalize">
        {item.category}
      </div>

      <div className="text-lg font-bold mb-2 text-white">{item.name}</div>

      <div className="text-sm text-gray-300 mb-3 line-clamp-2">
        {item.description}
      </div>

      <div className="text-base text-yellow-400 font-semibold mb-4">
        ₹ {item.price}
      </div>

      <div className="w-full h-48 flex items-center justify-center bg-black/10 rounded-lg mb-4 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="object-contain max-h-full"
        />
      </div>

      <div className="flex items-center justify-between gap-3 mt-auto">
        {showAddToCart && <AddToCart item={item} />}

        {showRemoveButton && (
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-amber-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-lg font-semibold transition"
          >
            Remove
          </button>
        )}

        <Link
          to={`/product/${item.id}`}
          className="text-xs text-blue-400 mt-2 underline"
        >
          View More
        </Link>

        <button onClick={() => toggleWishlist(item)}>
          <IoIosHeart color={isWished ? "red" : "gray"} size={22} />
        </button>
      </div>
    </>
  );
}
