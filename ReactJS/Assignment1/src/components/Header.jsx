import { useState } from "react";
import { FaShoppingCart, FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import UserMenu from "./UserMenu";

export default function Header() {
  const totalItem = useSelector((state) => state.cart.totalItem);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(""); // optional: clear input
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-lg px-4 sm:px-6 py-3 sm:py-4">
      <div className="container mx-auto flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl sm:text-3xl font-semibold">
          <IoGameController className="text-purple-500" />
          <Link to="/" className="hover:text-purple-400 transition">
            Tulsi
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-purple-400 transition">
            Products
          </Link>
          <Link to="/wishlist" className="hover:text-purple-400 transition">
            Wishlist
          </Link>
          <Link to="/cart" className="hover:text-purple-400 transition">
            Cart
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* <Link to="/checkout">
            <IoMdSearch size={24} className="sm:size-6 md:size-7" />
          </Link> */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-lg mx-auto flex items-center gap-x-2"
          >
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IoMdSearch />
              </div>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products, categories..."
                className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </form>

          <Link to="/cart" className="relative">
            <FaShoppingCart size={22} className="sm:size-6 md:size-7" />
            {totalItem > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                {totalItem}
              </span>
            )}
          </Link>
          {/* 
          <Link to="/signup">
            <FaRegUser size={22} className="sm:size-6 md:size-7" />
          </Link> */}
          <UserMenu />

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenuAlt3 size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 pt-4 pb-6 space-y-4 text-lg font-medium">
          <Link
            to="/"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/wishlist"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Wishlist
          </Link>
          <Link
            to="/cart"
            className="block hover:text-purple-400"
            onClick={() => setMenuOpen(false)}
          >
            Cart
          </Link>
        </div>
      )}
    </header>
  );
}
