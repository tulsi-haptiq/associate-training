import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function CategoryProducts() {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/productdata.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch product data:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  const noProducts = !loading && filteredProducts.length === 0;

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6 text-white min-h-screen">
      {!noProducts && !loading && (
        <h3 className="w-fit mx-auto text-lg sm:text-xl md:text-2xl font-semibold mb-8 px-4 sm:px-6 py-2 rounded-full shadow-lg shadow-fuchsia-600 capitalize">
          {category} Products
        </h3>
      )}

      {loading ? (
        <div className="text-center text-gray-300 text-lg sm:text-xl font-medium mt-10">
          Loading...
        </div>
      ) : noProducts ? (
        <div className="text-center text-gray-300 text-lg sm:text-xl font-medium mt-10">
          No products found for{" "}
          <span className="capitalize text-pink-400">{category} Category</span>.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-[#2b2b2b] to-[#3a1c71] rounded-2xl p-4 sm:p-5 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <Card item={item} />
            </div>
          ))}
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import productData from "../../public/data/productdata.json";
import Card from "../components/Card";

export default function CategoryProducts() {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/data/productdata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);

  const filteredProducts = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  const noProducts = !loading && filteredProducts.length === 0;

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6 text-white min-h-screen">
      {loading ? (
        <div className="text-center text-gray-300 text-lg sm:text-xl font-medium mt-10">
          Loading products...
        </div>
      ) : error ? (
        <div className="text-center text-red-400 text-lg sm:text-xl font-medium mt-10">
          Error loading products: {error}
        </div>
      ) : (
        <>
          {!noProducts && (
            <h3 className="w-fit mx-auto text-lg sm:text-xl md:text-2xl font-semibold mb-8 px-4 sm:px-6 py-2 rounded-full shadow-lg shadow-fuchsia-600 capitalize">
              {category} Products
            </h3>
          )}

          {noProducts ? (
            <div className="text-center text-gray-300 text-lg sm:text-xl font-medium mt-10">
              No products found for{" "}
              <span className="capitalize text-pink-400">{category} Category</span>.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-[#2b2b2b] to-[#3a1c71] rounded-2xl p-4 sm:p-5 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition duration-300 flex flex-col justify-between"
                >
                  <Card item={item} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
