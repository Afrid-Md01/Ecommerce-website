import CartContext from "./Cart-Context";
import React from "react";
import { useReducer } from "react";


const defaultCart={
  items:[],
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

    const existingItem = state.items[existingCartItemIndex];

  
    let updatedItems;
    if (existingItem) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
    };
  }

  if(action.type==='PURCHASE'){
    return defaultCart;
  }
  return defaultCart;
};

function CartProvider(props) {

  const[cart, dispatchCart]=useReducer(cartReducer, defaultCart)

  const addItemToCartHandler=(item)=>{
      dispatchCart({type:'ADD', item:item})
  }

  const removeItemFromCartHandler=(id)=>{
    dispatchCart({type:'REMOVE', id:id})
  }

  const purchaseHandler=()=>{
    dispatchCart({type:'PURCHASE'})
  }

  const cartContext = {
    items: cart.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    purchase:purchaseHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;