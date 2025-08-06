import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

export default function Cart() {
  const { cartItems, totalItem, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="p-4 sm:p-6 container mx-auto max-w-7xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-white text-lg">Your cart is empty.</p>
      ) : (
        <>
          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-5 text-white">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col transition hover:scale-105 duration-300"
              >
                <Card item={item} showAddToCart={false} showRemoveButton={true} />
                <div className="py-2 sm:py-3 text-sm sm:text-base">Quantity: {item.quantity}</div>
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-4 sm:p-6 rounded-2xl text-white shadow-xl w-full max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">🧾 Cart Summary</h3>

            <div className="mb-4 text-sm sm:text-base">
              <p className="mb-1">🛍️ <span className="font-semibold">Total Items:</span> {totalItem}</p>
              <p>💰 <span className="font-semibold">Total Price:</span> ₹{totalPrice?.toLocaleString("en-IN")}</p>
            </div>

            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-xs sm:text-sm text-gray-200">
              {cartItems.map((item) => (
                <li className="list-none" key={item.id}>
                  <span className="capitalize font-bold border px-2 mx-1 sm:mx-3 border-amber-300 rounded-full text-xs sm:text-sm">
                    {item.category}
                  </span>
                  {item.name} × {item.quantity} = ₹{(item.quantity * item.price).toLocaleString("en-IN")}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
