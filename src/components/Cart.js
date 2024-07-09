import { ContextProvide } from "../Context.jsx";
import React, { useContext, useReducer, useState } from "react";
import Cheader from "./../components/Cheader.js";
import Footer from "./../components/Footer.js";
import "./../components/Cart.css";

function Cart() {
  const [items, setItems, cart, setCart] = useContext(ContextProvide);

  const [data, setData] = useState([]);

  console.log(items);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT_QUANTITY":
        return { ...state, quantity: state.quantity + 1 };
      case "DECREMENT_QUANTITY":
        return {
          ...state,
          quantity: state.quantity - 1 >= 0 ? state.quantity - 1 : 0,
        };
      case "INCREMENT_PRICE":
        return { ...state, price: state.quantity * items.data.Price };

      case "SET_UNIT_PRICE":
        return {
          ...state,
          unitPrice: action.payload,
        };
      default:
        return state;
    }
  };

  const initialState = {
    quantity: 0,
    price: 0,
    unitPrice: items.Price,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Cheader />
      <div className="wrapcart">
        <h4 className="cart-head">Your Cart</h4>
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
                      <a href="#" class="btn btn-success">
                        Buy Now
                      </a>
                    </div>
                    {/* <div>
        <button className="cart-btn" onClick={() => dispatch({ type: 'INCREMENT_QUANTITY' })}>+</button>
        <span>Qty: {state.quantity}</span>
        <button className="cart-btn" onClick={() => dispatch({ type: 'DECREMENT_QUANTITY' })}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT_PRICE' })}>Price</button>
        <span>Price:{state.price}</span>
      </div> */}
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

export default Cart;
