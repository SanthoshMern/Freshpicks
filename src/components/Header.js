import logo from "./../assets/images/logo.png";
import Topmenu from "./Topmenu";
import Catagory from "./Catagory";
import Shopmarket from "./Shopmarket";
import Shopmarket1 from "./Shopmarket1";
import Newarrival from "./Newarrival";
import Advertise from "./Advertise";
import Trending from "./Trending";
import Featured from "./Featured";
import Advertise1 from "./Advertise1";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { RiShoppingBag2Line } from "react-icons/ri";
import { ContextProvide } from "../Context.jsx";
import React, { useContext } from "react";
import Login from "./Login/Login.jsx";
import Banner1 from "./Banner1.js";
import Wishlist from "./Wishlist.js";


function Header() {
  const [items, setItems, cart, setCart] = useContext(ContextProvide);

  return (
    <>
      <div className="header-container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid first-nav">
            <Link to="/Header" class="navbar-brand">
              <img src={logo}></img>
            </Link>
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
                      <div class="dropdown-menu">
                        <ul>
                          <li>
                        <Link className="dropdown-item" to="/list">FRESH JUICE</Link></li>
                        <li>
                        <Link className="dropdown-item" to="/list">FRESH MEAT</Link></li>
                        <li>
                        <Link className="dropdown-item" to="/list">FRUITS</Link></li>
                        </ul>
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
                  <Link to="/cart" class="nav-link ">
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
      <Banner1 />
      <Catagory />
      <Shopmarket />
      <Newarrival />
      <Advertise />
      <Trending />
      <Featured />
      <Advertise1 />
      <Footer />
      {/* <Shopmarket1/> */}
    </>
  );
}
export default Header;
