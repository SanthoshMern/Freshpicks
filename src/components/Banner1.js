import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./../components/Banner1.css";
import offer from "./../assets/images/offer.png";
import { Link } from "react-router-dom";
import List from "./List";

function Banner1() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <div className="slide" text="First slide">
          <div>
            <div className="container-fluid">
              <div className="wide">
                <h3 className="BAN-FONT">EAT HEALTHY</h3>
                <h3 className="BAN-FONT1">EAT ORGANIC</h3>
                <div className="BAN-DES">
                  Reach for a healthier you with organic foods
                </div>
                <Link to="/List">
                  <button className="btn btn-secondary ban-btn">
                    DISCOVER NOW
                  </button>
                </Link>
                <img className="ban-offer" src={offer}></img>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <div className="slide1" text="Second slide">
          <div>
            <div className="container-fluid">
              <div className="wide">
                <h3 className="BAN-FONT">EAT HEALTHY</h3>
                <h3 className="BAN-FONT1">EAT ORGANIC</h3>
                <div className="BAN-DES">
                  Reach for a healthier you with organic foods
                </div>
                <Link to="/List">
                  <button className="btn btn-secondary ban-btn">
                    DISCOVER NOW
                  </button>
                </Link>
                <img className="ban-offer" src={offer}></img>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
export default Banner1;
