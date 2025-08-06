import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

export default function SearchResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("q") || "";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/productdata.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items)) {
          setItems(data.items);
        } else {
          console.error("Invalid data format:", data);
          setItems([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setItems([]);
        setLoading(false);
      });
  }, []);

  // Safely filter items using optional chaining (?.) to avoid undefined errors
  const filteredItems = items.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item?.name?.toLowerCase().includes(term) ||
      item?.title?.toLowerCase().includes(term) ||
      item?.category?.toLowerCase().includes(term) ||
      item?.description?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 text-white">
      {/* <h2 className="text-xl font-bold mb-4">
        Search Results for <span className="text-pink-500">"{searchTerm}"</span>
      </h2> */}

      {loading ? (
        <p>Loading...</p>
      ) : filteredItems.length === 0 ? (
        <p className="text-pink-400 font-semibold">No products found for "{searchTerm}"</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-[#2b2b2b] to-[#3a1c71] rounded-2xl p-4 sm:p-5 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition duration-300 flex flex-col justify-between"
            >
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
