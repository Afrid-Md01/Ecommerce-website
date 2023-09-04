import React,{useRef, useState} from 'react';
import NavBar from '../Navbar_and_Generics/Navbar';
import {useParams} from 'react-router-dom';
import Rating from '../../Images/rating.png';
import {Button, Card, Form} from 'react-bootstrap';
import './ProductDetails.css';

const reviews = [
    {
      comment: "love item",
      name: "John",
    },
    {
      comment: "good item",
      name: "Adren",
    },
    {
      comment: "nice quality",
      name: "Lilac",
    },
    {
      comment: "very good product",
      name: "Birdie",
    },
    {
      comment: "super item",
      name: "Blythe",
    },
  ];


function ProductDetails(props) {
  const [rev, setRev] = useState(reviews);
  const [For, showForm] = useState(false);
  const nameRef = useRef();
  const commentRef = useRef();

  const params = useParams();
  const item = props.items.find((item) => item.id === params.productId);
  console.log(item.id);

  const reviewHandler = (e) => {
    e.preventDefault();
    setRev([
      ...rev,
      {
        name: nameRef.current.value,
        comment: commentRef.current.value,
      },
    ]);
    showForm(false);
  };

  const formOpen = () => {
    showForm(true);
  };

  const review = rev.map((review) => (
    <li style={{ marginTop: "20px" }} key={review.name}>
      <span>{review.comment}</span>
      <span style={{ fontWeight: "bolder", fontSize: "30px" }}>
        {review.name}
      </span>
    </li>
  ));
  return (
    <React.Fragment>
      <NavBar />
      <div className="productDetails">
        <h1>Product details</h1>
      </div>

      <div className="main">
        <div className="image">
          <img src={item.imageSrc} alt={item.id} className="imageclass"></img>
        </div>

        <div className="pricing">
          <h2>{item.id}</h2>
          <h3>RS.{item.price}</h3>
          <div className="rating">
            <div className="lg">
              <span>{item.star}</span>
              <span>
                <img src={Rating} alt="rating"></img>
              </span>
            </div>
            <div style={{ marginLeft: "5px" }}>
              {item.rating} ratings and {item.review} reviews
            </div>
          </div>
          <h1 className="review">Ratings & Reviews</h1>
          <div>
            <ul>{review}</ul>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          paddingBottom: "30px",
        }}
      >
        {For && (
          <Card
            style={{ width: "500px" }}
            className="shadow-lg p-3 mb-5 bg-white rounded"
          >
            <Form onSubmit={reviewHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  ref={nameRef}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Comment"
                  ref={commentRef}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <Button onClick={formOpen}>Add review</Button>
      </div>
    </React.Fragment>
  );
}
export default ProductDetails;
