import { useContext, useRef } from "react";
import "./cart.css"
import { CartContext } from "../context/contex";
import useRazorpay from "react-razorpay";

const Cart=()=>{
     const total=useRef(0);
     const {CartData}=useContext(CartContext);
     const razerPay=useRazorpay();
     const razerPayDisplay= async (total)=>{
        
       
        const options={
            
            key: "rzp_test_yIcqnWe95ZysRA", // Enter the Key ID generated from the Dashboard
    amount: parseInt(total.current)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
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
    <section>
        {CartData.map((cartItem,index)=>{
            total.current=total.current+cartItem.price
            return(
                <section key={index}>
                <section className="cart-items" >
                <img src={`http://localhost:1337${cartItem.image.data.attributes.formats.thumbnail.url}`} className="image" alt="game-pic"></img>
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
                <button onClick={()=>{razerPayDisplay(total)}}>Checkout</button>
    </section>
    </>
    )
}
export default Cart;