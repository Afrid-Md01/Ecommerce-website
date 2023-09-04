import React from 'react';
import NavBar from '../Home/NavBar_And_Generics/NavBar';
import Generics from '../StorePage/Navbar_and_Generics/Generics';
import AboutBody from './AboutBody/AboutBody';
import Footer from '../Home/Footer/Footer';

function AboutPage(){
    return(
        <React.Fragment>
            <NavBar/>
            <Generics/>
            <AboutBody/>
            <Footer/>
        </React.Fragment>
        
    )
}
export default AboutPage;