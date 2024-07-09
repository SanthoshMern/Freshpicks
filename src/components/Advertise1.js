import React from "react";
import "./../components/Advertise1.css";
import brand1 from "./../assets/images/brand1.png";
import brand2 from "./../assets/images/brand2.png";
import brand3 from "./../assets/images/brand3.png";
import brand4 from "./../assets/images/brand4.png";
import brand5 from "./../assets/images/brand5.png";
import brand6 from "./../assets/images/brand6.png";

function Advertise1() {
  return (
    <>
      <div className="container-fluid adv1main">
        <div className="container-fluid">
          <div className="row adv1">
            <div className="col-lg-2 col-sm-4">
              <img src={brand1}></img>
            </div>
            <div className="col-lg-2 col-sm-4">
              <img src={brand2}></img>
            </div>
            <div className="col-lg-2 col-sm-4">
              <img src={brand3}></img>
            </div>
            <div className="col-lg-2 col-sm-4">
              <img src={brand4}></img>
            </div>
            <div className="col-lg-2 col-sm-4">
              <img src={brand5}></img>
            </div>
            <div className="col-lg-2 col-sm-6">
              <img src={brand6}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertise1;
