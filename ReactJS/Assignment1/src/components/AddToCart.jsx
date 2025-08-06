import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../redux/slice/cartSlice";

export default function AddToCart({item}) {

    const dispatch = useDispatch();

  const handleAddToCart = () => {
    toast.success("Added to cart");
    dispatch(addToCart(item));
  };
  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="mt-auto bg-fuchsia-500 hover:bg-fuchsia-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
}
