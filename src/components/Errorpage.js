import React from "react";
import Header from "./Header";
import Cheader from "./Cheader";
import Footer from "./Footer";
import "./Error.css";
import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <>
      <Cheader />
      <div className="errorpg">
        <h1 className="err-title">404</h1>
        <p className="err-para">
          Sorry but the page you are looking for does not exist, have been
          removed,<br></br> name changed or is temporarity unavailable.
        </p>
        <Link to="/Header">
          <button className="err-btn">GO TO HOMEPAGE</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Errorpage;
