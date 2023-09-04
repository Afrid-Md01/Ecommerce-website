import React from "react";
import spotify from '../../Images/spotify.png';
import youtube from '../../Images/youtube.png';
import facebook from '../../Images/facebook.png';
import './Footer.css'

function Footer() {
  return (
    <React.Fragment>
      <div className="footerInApp">
        <h1>The Generics</h1>
        <div className="images">
          <a href="https://open.spotify.com/?">
            <img src={spotify} className="spotify" alt="spotify"></img>
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} className="youtube" alt="youtube"></img>
          </a>
          <a href="https://www.facebook.com/">
            <img src={facebook} className="facebook" alt="facebook"></img>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
