import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

export default function SearchResults() {
  const location = useLocation();
  const query =
    new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/productdata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded data:", data);
        setItems(data.items || []); // fallback if data.items is undefined
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load items:", err);
        setLoading(false);
      });
  }, []);

  const filteredItems = items.filter((item) => {
    const lowerQuery = query.toLowerCase();
    return (
      item?.name?.toLowerCase().includes(lowerQuery) ||
      item?.category?.toLowerCase().includes(lowerQuery) ||
      item?.description?.toLowerCase().includes(lowerQuery)
    );
  });

  if (loading) return <p className="p-10">Loading items...</p>;

  return (
    <div className="container mx-auto max-w-7xl p-10 ">
      <h2 className="text-xl font-semibold mb-6 text-white">
        Search Results for: <span className="text-teal-600">{query}</span>
      </h2>
      {filteredItems.length === 0 ? (
        <p className="text-fuchsia-500 text-center">No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
