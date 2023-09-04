import React, { useState } from "react";
import NavBar from "./Navbar_and_Generics/Navbar";
import Generics from "./Navbar_and_Generics/Generics";
import Products from "./Products/Products";
import Footer from "../Home/Footer/Footer";
import Cart from "../StorePage/Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function StorePage() {
  const [cart, setCart] = useState(false);
  const cartOpen = () => {
    setCart(true);
  };

  const cartClose = () => {
    setCart(false);
  };

  const showToast = () => {
    toast.success('Item added to cart', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <React.Fragment>
      <ToastContainer/>
      {cart && <Cart show={cartOpen} onClose={cartClose} />}
      <NavBar onOpen={cartOpen} />
      <Generics />
      <Products onOpen={cartOpen} showToast={showToast}/>
      <Footer />
    </React.Fragment>
  );
}
export default StorePage;
