import React from "react";

const CartContext=React.createContext();
const CartProvider=(props)=>{
    return(
        <cartContext.Provider>
            {props.children}
        </cartContext.Provider>
    )
}
export {CartContext,CartProvider}

