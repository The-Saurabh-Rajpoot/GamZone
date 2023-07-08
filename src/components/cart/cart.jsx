import { useContext, useRef } from "react";
import "./cart.css"
import { CartContext } from "../context/contex";

const Cart=()=>{
     const total=useRef(0);
     const {CartData}=useContext(CartContext);
     console.log(CartData);
    return (
    <>
    <section>
        {CartData.map((cartItem,index)=>{
            total.current=total.current+cartItem.price
            return(
                <section key={index}>
                <section className="cart-items" >
                      <img src={cartItem.Image} alt="Image"></img>
                      <article>{cartItem.Titel}</article><span>{cartItem.price}</span>
                      <article>{cartItem.Price}</article>
                      <button>Remove</button>
                </section>
                
                </section>
                
            )
            
        })}
                <section>
                    <span>Total Price={total.current}</span>
                </section>
                <button>Checkout</button>
    </section>
    </>
    )
}
export default Cart;