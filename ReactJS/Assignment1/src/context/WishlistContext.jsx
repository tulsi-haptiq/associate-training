import React, { useEffect, useState } from "react";
import { createContext } from "react";
// import { toast } from "react-toastify";


// eslint-disable-next-line react-refresh/only-export-components
export const  WishlistContext= createContext();



export function WishlistProvider({ children}){
    const [wishlist, setWishlist]= useState([]);//set and get the wishlist

    //read for local storage
    useEffect(() => {
        const stored=JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(stored);
    },[]);

    //write into local storage
    useEffect( () =>{
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
    },[wishlist]);


    //to add /remove the wishlist product
    const toggleWishlist= (item) =>{
        const exists= wishlist.find((product)=> product.id === item.id);
        if(exists){    
            // if exists the remove
            setWishlist(wishlist.filter((product)=> product.id!==item.id));

        }
        else{
            // add
            setWishlist([...wishlist,item]);
            // toast.success
        }
    };

    //check if the product is in wL
    const isInwishlist =(id) =>{
        return wishlist.some((item) => item.id === id);
    };

    // provide the context to children
    return(
        <WishlistContext.Provider value={{ wishlist, toggleWishlist,isInwishlist}}>
            {children}
        </WishlistContext.Provider>
    );

}