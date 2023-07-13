import React, { useReducer, useState } from "react";

const CartContext=React.createContext();
const CartProvider=(props)=>{
    
    const [CartData,setCartData]=useState([]);
    const UpdateCart=(item)=>{
        
        setCartData([...CartData,item])
        
    }
    // const [state,action]=useReducer(intialState);

    return(
        <CartContext.Provider value={{CartData,UpdateCart,setCartData}}>
            {props.children}
        </CartContext.Provider>
    )
}
export {CartContext,CartProvider}

