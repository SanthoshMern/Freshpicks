import React from "react";
import natural from "./../assets/images/natural.png";
import fruit from "./../assets/images/fruit.png";
import return1 from "./../assets/images/return1.png";
import support from "./../assets/images/support.png";
import "./../components/Catagory.css";

function Catagory() {
  return (
    <div class="container-fluid catagoryview">
      <div class="row">
        <div class="col-md-3 col-sm-2">
          <div class="container">
            <div class="row cat">
              <div class="col-3 ">
                <img className="cat-img" src={natural}></img>
              </div>
              <div class="col-9">
                <h3>100% Natural</h3>
                <p>Eat local,consume local,closure to nature</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-2">
          <div class="container">
            <div class="row cat">
              <div class="col-3 ">
                <img className="cat-img" src={fruit}></img>
              </div>
              <div class="col-9">
                <h4>Free shipping</h4>
                <p>Free shipping on orders over $60</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-2">
          <div class="container">
            <div class="row cat">
              <div class="col-3">
                <img className="cat-img" src={return1}></img>
              </div>
              <div class="col-9">
                <h4>Return product</h4>
                <p>Retail, a product return policy</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-2">
          <div class="container">
            <div class="row cat">
              <div class="col-3">
                <img className="cat-img" src={support}></img>
              </div>
              <div class="col-9">
                <h4>24/7 Support</h4>
                <p>Support options including 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catagory;
