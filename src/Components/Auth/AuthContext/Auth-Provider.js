import React, { useContext, useState } from "react";
import AuthContext from "./Auth-context";
import axios from "axios";
import CartContext from "../../StorePage/StoreContext/Cart-Context";

const AuthContextProvider = (props) => {
  const cartCtx = useContext(CartContext);
  const initialEmail = localStorage.getItem("email");
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const logInHandler = async (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);

    try {
      let response = await axios.get(
        `https://crudcrud.com/api/d13898a01db94f8a87a918aa3038d6a1/cart${email}`
      );

      for (let i = 0; i < response.data.length; i++) {
        cartCtx.addItem(response.data[i]);
      }
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      localStorage.clear();
      authcontextValue.logout();
    }, 3600000);
  };


  const logOutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const authcontextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler,
  };

    if (authcontextValue.isLoggedIn === true) {
      window.onload=async()=>{
        try {
          const response = await axios.get(
            `https://crudcrud.com/api/f6ab88c399364788aeaafb92a884a8b9/cart${email}`
          );
    
          for (var i = 0; i < response.data.length; i++) {
            cartCtx.addItem(response.data[i]);
          }
        } catch (err) {
          console.log(err);
        }
        console.log("reload function executed");
      }
    }
  

  console.log(authcontextValue);

  return (
    <AuthContext.Provider value={authcontextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
