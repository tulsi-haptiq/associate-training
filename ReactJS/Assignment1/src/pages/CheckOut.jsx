import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CheckOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePayment = () => {
    toast.success("Payment Successful");

    dispatch(clearCart());

    navigate("/");
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <button
        onClick={handlePayment}
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Pay Now
      </button>
    </div>
  );
}
