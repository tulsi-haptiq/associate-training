import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import ShadowBtn from "../components/ShadowBtn";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { cartItems, totalItem, totalPrice } = useSelector(
    (state) => state.cart
  );

  const handleCheckout = () => {
    if (!user) {
      // If not logged in, redirect to Sign In
      navigate("/signup?mode=signin");
    } else {
      // If logged in, proceed to Checkout
      navigate("/checkout"); // or your actual checkout route
    }
  };

  return (
    <div className="p-4 sm:p-6 container mx-auto max-w-7xl ">
      <ShadowBtn title="My Cart" />

      {cartItems.length === 0 ? (
        <p className="text-white text-lg text-center mt-10">
          Your cart is empty.
        </p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-5 flex flex-col transition-transform hover:scale-[1.02] duration-300"
              >
                <Card
                  item={item}
                  showAddToCart={false}
                  showRemoveButton={true}
                />
                <div className="pt-3 text-sm text-gray-300">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Right: Cart Summary */}
            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-2xl text-white shadow-2xl w-full lg:w-[400px] self-start">
              <h3 className="text-2xl font-extrabold mb-4 border-b border-white pb-2">
                🧾 Cart Summary
              </h3>

              <h4 className="text-lg sm:text-xl mb-2 font-semibold text-gray-200">
                Your Products
              </h4>

              <ul className="space-y-2 mb-4 text-sm text-gray-100 border-b border-white pb-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-none">
                    <span className="capitalize font-medium bg-amber-300 text-black px-2 py-1 rounded-full text-xs mr-2">
                      {item.category}
                    </span>
                    {item.name} × {item.quantity} = ₹
                    {(item.quantity * item.price).toLocaleString("en-IN")}
                  </li>
                ))}
              </ul>

              <div className="text-sm sm:text-base space-y-2">
                <p>
                  🛍️ <span className="font-semibold">Total Items:</span>{" "}
                  {totalItem}
                </p>
                <p>
                  💰 <span className="font-semibold">Total Price:</span> ₹
                  {totalPrice?.toLocaleString("en-IN")}
                </p>
                <button
                  onClick={handleCheckout}
                  className="mt-3 w-full bg-yellow-400 hover:bg-yellow-300 text-black py-2.5 rounded-md font-semibold transition-all"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
