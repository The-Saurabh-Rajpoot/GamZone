import { useContext } from "react";
import { CartContext } from "../context/contex.js";
import "./item.css"
 const Item =({item})=>{
  
  const {UpdateCart}=useContext(CartContext)
  

    return(
        <>
        <section className="card-container" >
          <img className="image" src={`http://localhost:1337${item.image.data.attributes.formats.thumbnail.url}`}  alt="game-pic"></img>
          
          <article className="titel"><h1>{item.Titel}</h1></article>
          <article className="description">{item.Description}</article>
          <h2 className="price"> INR {item.price}</h2>
          <button className="add-button" onClick={()=>{UpdateCart(item)}}>Add to cart</button>
          
        </section>
        </>
    )
 }
 export default Item;