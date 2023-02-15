/*
Student 1 : Sai Manasa Manthena, 1001959039
*/
import React from "react";
import { Link } from "react-router-dom";
import BgImage from "../Assets/Home.jpeg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../Styles/Home.css";
import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <div
        className="home"
        style={{ backgroundImage: `url(${BgImage})`, backgroundSize: "cover" }}
      >
        <div className="headerContainer">
          <h1>Welcome to Siremar</h1>
          <br></br>
          <br></br>
          <Link to="/Login">
            <br></br>
            <br></br>
            <button> Login to Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
