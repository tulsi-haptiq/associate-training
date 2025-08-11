import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../redux/slice/cartSlice";
import { WishlistContext } from "../context/WishlistContext";

export default function AddToCart({ item, isWishlistPage = false }) {
  const dispatch = useDispatch();
  const { toggleWishlist, isInwishlist } = useContext(WishlistContext);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success("Added to cart");

    if (isWishlistPage && isInwishlist(item.id)) {
      toggleWishlist(item); // removes from wishlist
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-auto bg-fuchsia-500 hover:bg-fuchsia-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-200"
    >
      Add to Cart
    </button>
  );
}
