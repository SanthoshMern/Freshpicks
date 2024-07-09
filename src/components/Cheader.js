import logo from "./../assets/images/logo.png";
import Topmenu from "./Topmenu";
import Banner from "./Banner";
import Catagory from "./Catagory";
import Shopmarket from "./Shopmarket";
import Newarrival from "./Newarrival";
import Advertise from "./Advertise";
import Trending from "./Trending";
import Featured from "./Featured";
import Advertise1 from "./Advertise1";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { ContextProvide } from "../Context.jsx";
import React, { useContext } from "react";
import Cbanner from "./Cbanner.js";
import Dropdown from "react-bootstrap/Dropdown";
import Wishlist from "./Wishlist.js";

function Cheader() {
  const [items, setItems, cart, setCart] = useContext(ContextProvide);

  return (
    <>
      <div className="header-container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid first-nav">
            <a class="navbar-brand">
              <img src={logo}></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <span class="nav-link tollfree" aria-current="page">
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>(1800)-88-66-999</span>
                  </span>
                </li>
                <div className="head-wrap">
                  <li class="nav-item">
                    <div class="dropdown">
                      <button class="dropbtn catagory">
                        Select a Catagory
                        <i
                          style={{ marginLeft: "20px" }}
                          class="fa-solid fa-chevron-down"
                        ></i>
                      </button>
                      <div class="dropdown-content">
                        <Link to="/list">FRESH JUICE</Link>
                        <Link to="/list">FRESH MEAT</Link>
                        <Link to="/list">FRUITS</Link>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item searchlist">
                    <input
                      type="search"
                      placeholder="Search Products"
                      className="catagory-search"
                    ></input>
                  </li>
                  <li class="nav-item">
                    <button type="button" class="nav-link search-button">
                      Search
                    </button>
                  </li>
                </div>
              </ul>
              <ul class="navbar-nav icons">
                <li class="nav-item">
                  <Link to="/Login" class="nav-link">
                    <i class="fa-solid fa-user"></i>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Wishlist" class="nav-link">
                    <i class="fa-regular fa-heart"></i>
                    <span>{items.length}</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/cart" class="nav-link">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <span>{items.length}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Topmenu />
    </>
  );
}
export default Cheader;
