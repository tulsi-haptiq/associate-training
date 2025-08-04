// import React,{useSelector} from "react";
import { FaSearch, FaShoppingCart, FaRegUser } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {

// const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-lg px-6 py-4">
      <div className="container mx-auto flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <IoGameController className="text-purple-500" />
          <Link
            to="/"
            className="hover:text-purple-400 transition duration-200"
          >
            Tulsi
          </Link>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-purple-400 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-purple-400 transition duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="hover:text-purple-400 transition duration-200"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="hover:text-purple-400 transition duration-200"
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div>
          <ul className="flex items-center gap-4 text-lg">
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition duration-200"
              >
                <FaSearch />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition duration-200"
              >
                <FaShoppingCart />
              </a>
              {/* <Link to="/cart">
                <FaShoppingCart/>
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link> */}
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition duration-200"
              >
                <FaRegUser />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
