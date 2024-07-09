import React from "react";
import { ContextProvide } from "../Context.jsx";
import{ useContext, } from "react";
import Cheader from "./Cheader.js";
import Footer from "./Footer.js";

function Wishlist() {
  const [items, setItems, cart, setCart] = useContext(ContextProvide);

  
  const handleDelete=(e,data)=>{
    setItems([])
  }

  return (
    <>
      <Cheader />
      <div className="wrapcart">
        <h4 className="cart-head">Your Wishlist</h4>
        <p className="cart-details">Total items {items.length}</p>
        <div className="container">
          <div className="row">
            {items.map((data) => {
              return (
                <div className="col-lg-3 cartalter">
                  <div class="card cart" style={{ width: "18rem;" }}>
                    <img
                      src={`http://localhost:5555/${data.file.path}`}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{data.ItemName}</h5>
                      <p class="card-text">{data.Price}</p>
                      <button class="btn btn-success">
                        Add To Cart
                      </button>
                      <button onClick={handleDelete} style={{marginLeft:"50px"}} className="btn btn-danger"><i  class="fa-solid fa-trash-can-arrow-up"></i></button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;
