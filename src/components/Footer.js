import React from "react";
import "./../components/Footer.css";
import logo from "./../assets/images/logo.png";

function Footer() {
  return (
    <>
      <div className="container-fluid foot-top">
        <div className="row ">
          <div className="col">
            <div className="foot-title">
              <h1>
                SUBSCRIBE TO RECEIVE <br></br>WEEKLY UPDATES
              </h1>
              <input
                className="foot-get"
                type="text"
                placeholder="Enter Your Email-Address"
              ></input>
              <button type="button" class="btn btn-success sub">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-sec">
        <div className="row foot-logo">
          <div className="col-lg-3 col-sm-12">
            <a class="navbar-brand" href="#">
              <img src={logo}></img>
            </a>
            <br></br>
            <br></br>
            <h5>Support@example.com</h5>
            <br></br>
            <span>
              Monday – Saturday: 8:00 am – 4:00pm <br></br>Sunday: 9:00 am –
              5:00pm
            </span>
            <br></br>
            <br></br>
          </div>
          <div className="col-sm-12 col-lg-2">
            <ul>
              <li>
                <h5 className="foot-head">INFORMATION</h5>
              </li>
              <li>FAQs</li>
              <li>Custom Service</li>
              <li>Order Tracking</li>
              <li>Delivery Information</li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-2">
            <ul>
              <li>
                <h5 className="foot-head">USEFUL LINKS</h5>
              </li>
              <li>Privacy Policy</li>
              <li>Terms & conditions</li>
              <li>Shipping Methods</li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-2">
            <ul>
              <li>
                <h5 className="foot-head">CATAGORIES</h5>
              </li>
              <li>Vegetables</li>
              <li>Fresh Meat</li>
              <li>Butter & Eggs</li>
              <li>Ocean Foods</li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-2">
            <h5 className="foot-head">STORE LOCATION</h5>
            <span>My Company, 42 Puffin Street 12345 Puffinville France</span>
            <br></br>
            <br></br>
            <div className="container call">
              <span>
                <i className="fa-brands fa-whatsapp"></i>
                <span>(1800)-88-66-999</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
