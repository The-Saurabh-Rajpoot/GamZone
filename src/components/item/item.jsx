

 const Item =({titel,price,description,image})=>{
    return(
        <>
        <section className="card" >
          <img src={image} className="image" alt="game-pic"></img>
          <article className="titel">{titel}</article>
          <article className="description">{description}</article>
          <article className="price">{price}</article>
          <button className="add-button">Add to cart</button>
        </section>
        </>
    )
 }
 export default Item;