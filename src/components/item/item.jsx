import { useContext } from "react";
import { CartContext } from "../context/contex.js";

 const Item =({item})=>{
  
  const {UpdateCart}=useContext(CartContext)
    

    return(
        <>
        <section className="card" >
          <img src={item?.image} className="image" alt="game-pic"></img>
          <article className="titel">{item.Titel}</article>
          <article className="description">{item.Description}</article>
          <article className="price">{item.price}</article>
          <button className="add-button" onClick={()=>{UpdateCart(item)}}>Add to cart</button>
        </section>
        </>
    )
 }
 export default Item;