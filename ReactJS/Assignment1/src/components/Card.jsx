import { IoIosHeart } from "react-icons/io";
import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";
import { toast } from "react-toastify";

export default function Card({
  item,
  showAddToCart = true,
  showRemoveButton = false,
}) {
  const { toggleWishlist, isInwishlist } = useContext(WishlistContext);
  const isWished = isInwishlist(item.id);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // console.log("Adding to cart:", item);
    toast.success("Added to cart");
    dispatch(addToCart(item));
  };

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
        {showAddToCart && (
          <button
            onClick={handleAddToCart}
            className="mt-auto bg-fuchsia-500 hover:bg-fuchsia-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-200"
          >
            Add to Cart
          </button>
        )}

        {showRemoveButton && (
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-amber-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-lg font-semibold transition"
          >
            Remove
          </button>
        )}

        {/* <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-pink-500 hover:text-pink-400 transition duration-200">
          <IoIosHeart size={20} strokeWidth={2} />
        </button> */}

        <button onClick={() => toggleWishlist(item)}>
          <IoIosHeart color={isWished ? "red" : "gray"} size={22} />
        </button>
      </div>
    </>
  );
}
