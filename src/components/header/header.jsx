import { Link } from "react-router-dom";
import "./header.css"
import { useContext } from "react";
import { CartContext } from "../context/contex";
const Header=()=>{
    
    const {CartData}=useContext(CartContext);
    
    return (
        <>
        <nav className="navBar">
            <section className="logo">
               <img  id="logo" src="https://res.cloudinary.com/dyaznet0l/image/upload/v1688711380/DALL_E_2023-07-07_11.54.23_-_you_have_written_logo_name_is_Gamzone_but_it_should_be_GammerZone_t54u0z.png" alt="image"></img>
            </section>
            <section>
                <span style={{fontSize:"50px",color:"black"}}>{CartData.length}</span>
            <Link to="/cart"><i id="cart-icon" className="fa fa-shopping-cart" style={{fontSize:"50px",color:"black"}}></i></Link>
            </section>
        </nav>
        </>
    )
}
export default Header;