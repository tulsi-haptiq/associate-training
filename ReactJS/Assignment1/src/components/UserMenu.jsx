// components/UserMenu.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slice/cartSlice"; 
import { logout } from "../redux/slice/authSlice";
// import { WishlistContext } from "../context/WishlistContext";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { clearWishlist } = useContext(WishlistContext); 
  // const {} = useContext(WishlistContext); 

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());            // clears user and localStorage
    dispatch(clearCart());         // ✅ clears cart state
    // clearWishlist();               // ✅ clears wishlist state (if using context)
    localStorage.removeItem("wishlist"); // ✅ also remove from LS if needed

    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setOpen(!open)}>
        <FaRegUser size={22} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-lg z-50">
          {!user ? (
            <>
              <button
                onClick={() => {
                  navigate("/auth?mode=signin");
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  navigate("/auth?mode=signup");
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <div className="px-4 py-2 font-semibold border-b">{user.name}</div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
