// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import AddToCart from "../components/AddToCart";
// import { addToCart } from "../redux/slice/cartSlice";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
// const dispatch = useDispatch();
//   const handleAddToCart = () => {
//     toast.success("Added to cart");
//     dispatch(addToCart(product));
//   };

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
    <div className="h-screen">
      <div className="flex flex-row my-16 justify-content align-item-center p-10 max-w-3xl mx-auto text-white bg-gradient-to-br from-[#2b2b2b] to-[#3a1c71] rounded-2xl shadow-xl">
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>

          {/* ⭐ Best Seller Badge (Optional logic: flag or rating based) */}
          {(product.bestseller || product.ratings >= 4.5) && (
            <span className="inline-block bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full mb-2">
              🔥 Best Seller
            </span>
          )}

          <p className="text-purple-300 font-semibold mb-2">
            {product.category}
          </p>
          <p className="text-xl text-yellow-400 mb-4">₹ {product.price}</p>
          <p className="text-sm text-gray-300 mb-6">{product.description}</p>

          {/* ⭐ Rating as stars */}
          <div className="mb-4">
            <span className="text-sm  text-white">
              Rating : {product.ratings}
              {/* {" " + "⭐".repeat(Math.floor(product.ratings))}
              {"☆".repeat(5 - Math.floor(product.ratings))}  */}
            </span>
          </div>

          <div className="flex flex-row gap-5">
            <AddToCart item={product}/>
          <Link
            onClick={() => navigate(-1)}
            className="  text-2xs text-blue-400 mt-2 underline"
          >
            View Less
          </Link>
          </div>

        </div>

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-96 object-contain rounded mb-4"
          />
        </div>
      </div>
    </div>
  );
}
