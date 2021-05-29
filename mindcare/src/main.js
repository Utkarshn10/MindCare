import React from "react";
import "./App.css";
import Footer from "../src/Components/Footer";
import Navbar from "../src/Components/Navbar/Navbar";
import Img from "../src/Components/Img.png";
import background from "../src/Components/images/show_everyone1.jpg";
import Maincard from "../src/MainpageCards/Maincard";

function Main() {
  return (
    <div>
      <div className="forNavbar">
        <Navbar></Navbar>
        <img className="image" src={background} alt="background-image" />
      </div>

      <div>
        <Maincard></Maincard>
        <br></br>
      </div>

      <div className="page-container">
        <Footer />
      </div>
    </div>
  );
}
export default Main;
