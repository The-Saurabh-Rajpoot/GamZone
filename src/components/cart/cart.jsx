import { useContext, useRef } from "react";
import "./cart.css"
import { CartContext } from "../context/contex";
import useRazorpay from "react-razorpay";
import Header from "../header/header";

const Cart = () => {
  let total = useRef(0);
  total.current=0;
  const { CartData,setCartData } = useContext(CartContext);
  const razerPay = useRazorpay();
  const cartItems=[];
  
  const removeItems= (e)=>{
    
    const id=parseInt(e.target.id);
    
    
    
    const RemovedItemsCart=CartData.filter((curelement,index)=>{
      console.log(CartData.indexOf(curelement),id)
      return index !==id;
    })
   
    setCartData(RemovedItemsCart);
  
   
}
  const razerPayDisplay = async (total) => {
  

    const options = {

      key: "rzp_test_yIcqnWe95ZysRA", // Enter the Key ID generated from the Dashboard
      amount: parseInt(total.current) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "GamZone",
      description: "Test Transaction",
      image: "https://res.cloudinary.com/dyaznet0l/image/upload/v1688711380/DALL_E_2023-07-07_11.54.23_-_you_have_written_logo_name_is_Gamzone_but_it_should_be_GammerZone_t54u0z.png",

      prefill: {
        name: "Saurabh rajpoot",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    }
    const rzp1 = new razerPay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  }
  
  return (
    <>
      <Header />
      {
        CartData.length>0 ? <section className="main-cart-container">
        <div className="cart-item-section">
        {CartData.map((cartItem, index) => {
          total.current = total.current + cartItem.price
          
          return (
            <section className="cart-items" key={index}id={`${index}${cartItem.Titel}`}>
              
                <img src={`http://localhost:1337${cartItem.image.data.attributes.formats.thumbnail.url}`} className="cart-image" alt="game-pic"></img>
                <h1 className="cart-titel">{cartItem.Titel}</h1>
                <h2 className="cart-price">INR {cartItem.price}</h2>
                <button className="cart-remove-button" id={`${index}`} onClick={(e)=>{removeItems(e)}}>Remove</button>
            </section>
            )
            })}
        </div>
        
        <div className="cart-total-section">
          <h2>Total Itmes {CartData.length}</h2>
          <div id="total-amount">Total Price={total.current}</div> 
          <button id="checkout-button" onClick={() => { razerPayDisplay(total) }}>Checkout</button>
        </div>
        

      </section> : <div id="empty-cart">Your cart is empty please add some items</div>
      }
      
    </>
  )
}
export default Cart;