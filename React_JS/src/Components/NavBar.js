import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../Assets/Logo1.png";

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="NavBar">
      <div className="leftSide">
        <img src={Logo} />
        <p>SIREMAR</p>
      </div>

      <div className="rightSide">
        <button onClick={() => setShowLinks(!showLinks)}>
          <h2>
          Menu
          </h2> 
          </button>
        {/* <div >
          <a href="http://sxk0021.uta.cloud">
            <p className="rightSideb">BLOG</p>
          </a>
        </div> */}
        <div className="Links" id={showLinks ? "hidden" : ""}>
          <Link to="/Home">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
