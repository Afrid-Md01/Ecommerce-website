import React, { useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products2.css";
import CartContext from "../StoreContext/Cart-Context";
import AuthContext from "../../Auth/AuthContext/Auth-context";
import axios from "axios";

function Products2(props) {
  const cartCtx = useContext(CartContext);
  const authCtx=useContext(AuthContext);

  const email = authCtx.email;

  const item5Handler = async () => {
    try {
      const item5 = {
        id: "t-shirt",
        Album: "T-Shirt",
        price: 300,
        quantity: 1,
        imageSrc:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      };
      cartCtx.addItem(item5);
      props.showToast();
      let response = await axios.post(
        `https://crudcrud.com/api/f6ab88c399364788aeaafb92a884a8b9/cart${email}`,
        item5
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const item6Handler = async () => {
    try {
      const item6 = {
        id: "coffeeCup",
        Album: "Coffee Cup",
        price: 200,
        quantity: 1,
        imageSrc:
          "https://cdn.pixabay.com/photo/2016/11/29/12/46/coffee-1869599_640.jpg",
      };
      cartCtx.addItem(item6);
      props.showToast();
      let response = await axios.post(
        `https://crudcrud.com/api/f6ab88c399364788aeaafb92a884a8b9/cart${email}`,
        item6
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <h1 className="text-center font-monospace">MERCH</h1>
      <Container className="mt-5">
        <Row style={{ justifyContent: "space-around" }} className="mb-5">
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">T-Shirt</h3>
            <Card className="shadow">
              <Link to="/store/T-Shirt">
                <img
                  src={
                    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="t-shirt"
                  style={{
                    height: "300px",
                    maxWidth: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>

              <div className="divs">
                <span className="text">RS.300</span>
                <Button className="m-4" onClick={item5Handler}>
                  Add to cart
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">Coffee Cup</h3>
            <Card className="shadow">
              <Link to="/store/Coffee-Cup">
                <img
                  src={
                    "https://cdn.pixabay.com/photo/2016/11/29/12/46/coffee-1869599_640.jpg"
                  }
                  alt="coffeeCup"
                  style={{
                    height: "300px",
                    maxWidth: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <div className="divs">
                <span className="text">RS.200</span>
                <Button className="m-4" onClick={item6Handler}>
                  Add to cart
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default Products2;
