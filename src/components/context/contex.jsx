import React from "react";

const cartContext=React.createContext();
const cartProvider=(props)=>{
    return(
        <cartContext.Provider>
            {props.children}
        </cartContext.Provider>
    )
}
export {cartContext,cartProvider}

