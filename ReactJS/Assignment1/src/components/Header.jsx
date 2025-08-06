// import { FaShoppingCart, FaRegUser } from "react-icons/fa";
// import { IoMdSearch } from "react-icons/io";
// import { IoGameController } from "react-icons/io5";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const totalItem = useSelector((state) => state.cart.totalItem);

//   return (
//     <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-lg px-4 sm:px-6 py-3 sm:py-4">
//       <div className="container mx-auto flex items-center justify-between text-white flex-wrap gap-4 sm:gap-0">
//         {/* Logo */}
//         <div className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
//           <IoGameController className="text-purple-500" />
//           <Link to="/" className="hover:text-purple-400 transition duration-200">
//             Tulsi
//           </Link>
//         </div>

//         {/* Nav Links */}
//         <nav className="w-full md:w-auto">
//           <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-lg sm:text-xl md:text-2xl font-medium justify-center md:justify-start">
//             <li>
//               <Link to="/" className="hover:text-purple-400 transition duration-200">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/products" className="hover:text-purple-400 transition duration-200">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/wishlist" className="hover:text-purple-400 transition duration-200">
//                 Wishlist
//               </Link>
//             </li>
//             <li>
//               <Link to="/cart" className="hover:text-purple-400 transition duration-200">
//                 Cart
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Icons */}
//         <div className="flex items-center gap-3 sm:gap-4">
//           <Link to="/">
//             <IoMdSearch size={28} className="sm:size-[32px] md:size-[40px]" />
//           </Link>

//           <Link to="/cart" className="relative">
//             <FaShoppingCart size={24} className="sm:size-[28px] md:size-[35px]" />
//             {totalItem > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
//                 {totalItem}
//               </span>
//             )}
//           </Link>

//           <Link to="/signup">
//             <FaRegUser size={24} className="sm:size-[28px] md:size-[35px]" />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }  ,
import { useState } from "react";
import { FaShoppingCart, FaRegUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { setSearchQuery } from "../redux/slice/searchSlice";

export default function Header() {
  const totalItem = useSelector((state) => state.cart.totalItem);
  const [menuOpen, setMenuOpen] = useState(false);

  // Inside Header component
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    dispatch(setSearchQuery(query));
    navigate("/search");
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
          {/* <Link to="/">
            <IoMdSearch size={24} className="sm:size-6 md:size-7" />
          </Link> */}
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="px-2 py-1 rounded text-black text-sm sm:text-base"
            />
            <button type="submit">
              <IoMdSearch size={24} className="text-white" />
            </button>
          </form>

          <Link to="/cart" className="relative">
            <FaShoppingCart size={22} className="sm:size-6 md:size-7" />
            {totalItem > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                {totalItem}
              </span>
            )}
          </Link>

          <Link to="/signup">
            <FaRegUser size={22} className="sm:size-6 md:size-7" />
          </Link>

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
