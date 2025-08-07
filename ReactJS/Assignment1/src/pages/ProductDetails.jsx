import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import AddToCart from "../components/AddToCart";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/productdata.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.items.find((item) => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="p-10">Loading product...</p>;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10 items-center max-w-5xl mx-auto bg-gradient-to-br from-[#2b2b2b] to-[#3a1c71] p-6 lg:p-10 rounded-2xl shadow-xl">
        
       

        {/* Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between ">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">{product.name}</h2>


            <p className="text-purple-300 font-semibold mb-5 capitalize">{product.category}</p>
            <p className="text-xl text-yellow-400 mb-5">₹ {product.price}</p>
            <p className="text-sm text-gray-300 mb-5">{product.description}</p>

            {(product.bestseller || product.ratings >= 4.5) && (
              <span className="inline-block bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full mb-5">
                🔥 Best Seller
              </span>
            )}
            {/* ⭐ Rating with stars */}
            <div className="mb-5 text-sm text-white">
              Rating: ⭐ {product.ratings}
              <span className="text-yellow-300">
                {/* {"⭐".repeat(Math.floor(product.ratings))}
                {"☆".repeat(5 - Math.floor(product.ratings))} */}
              </span>
            </div>
          {/* Add to Cart + View Less */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <AddToCart item={product} />
            
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-sm text-blue-300 underline self-start mt-1 bg-transparent border-none p-0 cursor-pointer"
            >
              View Less
            </button>
          </div>
          </div>

        </div>

         {/* Product Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain max-h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
