import React from "react";
import NavBar from "../Home/NavBar_And_Generics/NavBar";
import ContactForm from "./Form/Form";

function ContactUsPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ContactForm />
      </div>
    </React.Fragment>
  );
}
export default ContactUsPage;
