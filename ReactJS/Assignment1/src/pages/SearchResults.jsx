import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card"; // your product card component

export default function SearchResults() {
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("/data/productdata.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.items || []);
      })
      .catch((err) => console.error("Error loading product data:", err));
  }, []);

  useEffect(() => {
    const results = products.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    setFiltered(results);
  }, [searchQuery, products]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
      {filtered.length === 0 ? (
        <p>No matching products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
