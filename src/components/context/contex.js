import React, { useState } from "react";

const CartContext=React.createContext();
const CartProvider=(props)=>{
    
    const [CartData,setCartData]=useState([]);
    const UpdateCart=(item)=>{
        
        setCartData([...CartData,item])
        
    }

    return(
        <CartContext.Provider value={{CartData,UpdateCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
export {CartContext,CartProvider}

