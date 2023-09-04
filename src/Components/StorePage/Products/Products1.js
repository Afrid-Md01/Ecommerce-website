import React, { useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Products1.css";
import { Link } from "react-router-dom";
import CartContext from "../StoreContext/Cart-Context";
import AuthContext from "../../Auth/AuthContext/Auth-context";
import axios from "axios";

function Products1(props) {
  const cartCtx = useContext(CartContext);

  const authCtx = useContext(AuthContext);
  const email = authCtx.email;

  const item1Handler = async () => {
    try {
      const item1 = {
        id: "colors",
        Album: "Album 1",
        price: 100,
        quantity: 1,
        imageSrc:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      };

      cartCtx.addItem(item1);
      props.showToast();
      let response = await axios.post(
        `https://crudcrud.com/api/f6ab88c399364788aeaafb92a884a8b9/cart${email}`,
        item1
      );

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const item2Handler = async () => {
    try {
      const item2 = {
        id: "blackAndWhite",
        Album: "Album 2",
        price: 50,
        quantity: 1,
        imageSrc:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      };
      cartCtx.addItem(item2);
      props.showToast();
      let response = await axios.post(
        `https://crudcrud.com/api/f6ab88c399364788aeaafb92a884a8b9/cart${email}`,
        item2
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const item3Handler = async () => {
    try {
      const item3 = {
        id: "blackAndYellow",
        Album: "Album 3",
        price: 70,
        quantity: 1,
        imageSrc:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      };
      cartCtx.addItem(item3);
      props.showToast();
      let response = await axios.post(
        `https://crudcrud.com/api/f6ab88c399364788aeaafb92a884a8b9/cart${email}`,
        item3
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const item4Handler = async () => {
    try {
      const item4 = {
        id: "blue",
        Album: "Album 4",
        price: 100,
        quantity: 1,
        imageSrc:
          "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      };
      cartCtx.addItem(item4);
      props.showToast();
      let response = await axios.post(
        `https://crudcrud.com/api/f6ab88c399364788aeaafb92a884a8b9/cart${email}`,
        item4
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center font-monospace">MUSIC</h1>
      <Container className="mt-5">
        <Row style={{ justifyContent: "space-around" }} className="mb-5">
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace mt-3">Album 1</h3>
            <Card className="shadow">
              <Link to="/store/Colors">
                <img
                  src={
                    "https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                  }
                  alt="colors"
                />
              </Link>
              <div className="divs">
                <span className="text">RS.100</span>
                <Button className="m-4" onClick={item1Handler}>
                  Add to cart
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace mt-3">Album 2</h3>
            <Card className="shadow">
              <Link to="/store/Black-And-White">
                <img
                  src={
                    "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                  }
                  alt="black_and_white_colors"
                />
              </Link>
              <div className="divs">
                <span className="text">RS.50</span>
                <Button className="m-4" onClick={item2Handler}>
                  Add to cart
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        <Row style={{ justifyContent: "space-around" }} className="mb-5">
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">Album 3</h3>
            <Card className="shadow">
              <Link to="/store/Black-And-Yellow">
                <img
                  src={
                    "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                  }
                  alt="black_color"
                />
              </Link>
              <div className="divs">
                <span className="text">RS.70</span>
                <Button className="m-4" onClick={item3Handler}>
                  Add to cart
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={3} style={{ textAlign: "center" }}>
            <h3 className="font-monospace">Album 4</h3>
            <Card className="shadow">
              <Link to="/store/Blue">
                <img
                  src={
                    "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
                  }
                  alt="blue_color"
                />
              </Link>
              <div className="divs">
                <span className="text">RS.100</span>
                <Button className="m-4" onClick={item4Handler}>
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
export default Products1;
