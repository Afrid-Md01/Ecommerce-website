import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Cart.css";
import CartContext from "../StoreContext/Cart-Context";
import axios from "axios";
import AuthContext from "../../Auth/AuthContext/Auth-context";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const email = authCtx.email;

  let total = 0;
  cartCtx.items.map((item) => {
    return (total = total + item.price * item.quantity);
  });

  const purchaseHandler = async () => {
    cartCtx.purchase();
    try {
      let response = await axios.get(
        `https://crudcrud.com/api/d13898a01db94f8a87a918aa3038d6a1/cart${email}`
      );

      for (let i = 0; i < response.data.length; i++) {
        let Delete = await axios.delete(
          `https://crudcrud.com/api/d13898a01db94f8a87a918aa3038d6a1/cart${email}/${response.data[i]._id}`
        );
        console.log(Delete);
      }
    } catch (err) {
      console.log(err);
    }
    alert("Thanks for the purchase");
  };

  const removeHandler = async (id) => {
    cartCtx.removeItem(id);
    try {
      let response = await axios.get(
        `https://crudcrud.com/api/d13898a01db94f8a87a918aa3038d6a1/cart${email}`
      );

      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].id === id) {
          console.log(response.data[i]._id);

          let Delete = await axios.delete(
            `https://crudcrud.com/api/d13898a01db94f8a87a918aa3038d6a1/cart${email}/${response.data[i]._id}`
          );

          console.log(Delete);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={props.show} onHide={props.onClose} backdrop = "static">
        <Modal.Header
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Modal.Title style={{ fontFamily: "fantasy", fontSize: "35px" }}>
            YOUR CART
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="body">
          <div className="heading">
            <span style={{ marginLeft: "48px" }}>ITEM</span>
            <span style={{ marginLeft: "80px" }}>PRICE</span>
            <span style={{ marginLeft: "50px" }}>QUANTITY</span>
          </div>
         <hr></hr>
          <div>
            {cartCtx.items.map((item) => (
              <div className="items" key={item.id}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={item.imageSrc}
                    alt={item.Album}
                    style={{
                      width: "100px",
                      marginTop: "10px",
                      height: "100px",
                    }}
                  ></img>
                  <br></br>
                  <span>{item.Album}</span>
                </div>
                <div style={{ fontSize: "20px" }}>RS.{item.price}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    justifyItems: "center",
                  }}
                >
                  <input
                    style={{ width: "25px", height: "30px" }}
                    defaultValue={item.quantity}
                  ></input>
                  <Button
                    variant="danger"
                    size="sm"
                    style={{ marginLeft: "10px" }}
                    onClick={function () {
                      removeHandler(item.id);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="amount">
            <span>
              <h2>Total Amount</h2>
            </span>
            <span>
              <h2>RS. {total}</h2>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={purchaseHandler}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
export default Cart;
