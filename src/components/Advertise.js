import "./../components/Advertise.css";
import React from "react";
import List from "./List";
import { Link } from "react-router-dom";

function Advertise() {
  return (
    <div className="container-fluid adv">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="ban-1">
            <h5 className="adv-content">GET EXTRA 50% OFF </h5>
            <h3 className="adv-head">
              FRESH FRUITS & <br></br> VEGETABLES
            </h3>
            <Link to="/List">
              <button className="btn btn-primary adv-btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="ban-2">
            <h5 style={{ color: "white" }} className="adv-content">
              ON ALL WEEKEND SALE{" "}
            </h5>
            <h3 style={{ color: "white" }} className="adv-head">
              ORGANIC & <br></br> COLD BEVERAGE
            </h3>
            <Link to="/List">
              <button className="btn btn-primary adv-btn">SHOP NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advertise;
