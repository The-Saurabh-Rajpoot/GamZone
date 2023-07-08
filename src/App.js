import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/mainApp/main";
import Cart from "./components/cart/cart";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
           
        
      </Routes>
    </BrowserRouter>
    
   
  );
}

export default App;
