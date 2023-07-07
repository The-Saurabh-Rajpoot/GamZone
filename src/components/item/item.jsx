

 const Item =({image,description,titel,price})=>{
    return(
        <>
        <section className="card">
          <img src={image} className="image"></img>
          <article className="titel">{titel}</article>
          <article className="description">{description}</article>
          <article className="price">{price}</article>
        </section>
        </>
    )
 }
 export default Item;