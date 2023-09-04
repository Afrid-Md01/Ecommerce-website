import { useRef, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

function ContactForm() {
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();

    if (
      nameRef.current.value.trim().length > 0 &&
      emailRef.current.value.trim().includes("@") &&
      phoneRef.current.value.trim().length === 10
    ) {
      const user = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      };

      const response = await fetch(
        "https://e-commerce-website-60ee5-default-rtdb.firebaseio.com/aboutpagedata.json",
        {
          method: "POST",
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      console.log(data);
      setError(false);
      nameRef.current.value = null;
      emailRef.current.value = null;
      phoneRef.current.value = null;
      alert('Thank you! we will contact you shortly.')
    } else {
      setError(true);
    }
  }
  return (
    <Card
      className="shadow-lg p-3 mb-5 bg-white rounded"
      style={{ width: "700px", marginTop: "30px" }}
    >
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label style={{ fontWeight: "bold" }}>NAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your name"
            ref={nameRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold" }}>E-MAIL</Form.Label>
          <Form.Control
            type="email"
            placeholder="email address"
            ref={emailRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>PHONE NUMBER</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter your phone number"
            ref={phoneRef}
          />
          <Form.Text className="text-muted">
            We'll never share your data with anyone else.
          </Form.Text>
        </Form.Group>
        {error && (
          <p style={{ color: "red" }}>please enter valid input field!</p>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default ContactForm;
