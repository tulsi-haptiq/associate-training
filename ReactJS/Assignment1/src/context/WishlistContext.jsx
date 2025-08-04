// import React, { createContext, useState, useEffect } from "react";

// export const WishlistContext = createContext();

// export default function WishlistProvider({ children }) {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(stored);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   const toggleWishlist = (product) => {
//     const exists = wishlist.find((item) => item.id === product.id);
//     if (exists) {
//       setWishlist(wishlist.filter((item) => item.id !== product.id));
//     } else {
//       setWishlist([...wishlist, product]);
//     }
//   };

//   const isInWishlist = (id) => wishlist.some((item) => item.id === id);

//   return (
//     <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// }
