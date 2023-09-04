import React from "react";
import NavBar from "./NavBar_And_Generics/NavBar";
import Generics from "./NavBar_And_Generics/Generics";
import HomeBody from "./HomeBody/HomeBody";
import Footer from './Footer/Footer'

function HomePage() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <Generics />
      <HomeBody/>
      <Footer/>
    </React.Fragment>
  );
}
export default HomePage;
