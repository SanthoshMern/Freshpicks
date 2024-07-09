import { CiDiscount1 } from "react-icons/ci";
import "./../components/Topmenu.css";
import Dropdown from "react-bootstrap/Dropdown";
import Newarrival from "./Newarrival";
import { Link, Outlet } from "react-router-dom";
import Cart from "./Cart";
import Header from "./Header";
import Home from "./Home";
import Errorpage from "./Errorpage";
import Cheader from "./Cheader";
import Footer from "./Footer";
import Blog from "./Blog";
const Topmenu = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Departments
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a class="dropdown-item" href="#">
                  Hot Deals
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Vegetables
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Fruits& Nut Gifts
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Fresh Meat
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Butter & Eggs
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Ocean Foods
                  <i
                            style={{ marginLeft: "100px", fontSize:"15px" }}
                    class="fa-solid fa-chevron-right"
                  ></i>
                </a>
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Butter & Eggs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Fresh Meat
                      <i
                        style={{ marginLeft: "100px", fontSize:"15px" }}
                        class="fa-solid fa-chevron-right"
                      ></i>
                    </a>
                    <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Fresh Tuna
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Squid
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Milk & Cream
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Fresh Juice
                </a>
              </li>
            </ul>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item bottom-nav">
                <div class="dropdown">
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    data-mdb-dropdown-init
                    class="btn btn dropdown-toggle1"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      fontSize: "17px",
                      fontWeight: "550",
                      fontFamily: "sans-serif",
                      opacity: "70%",
                    }}
                  >
                    Home
                    <i
                      style={{ marginLeft: "10px", fontSize:"15px" }}
                      class="fa-solid fa-chevron-down"
                    ></i>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <Link to="/Header" class="dropdown-item" href="#">
                        Home 1
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Home 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Home 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item bottom-nav">
                <div class="dropdown">
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    data-mdb-dropdown-init
                    class="btn btn dropdown-toggle1"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      fontSize: "17px",
                      fontWeight: "550",
                      fontFamily: "sans-serif",
                      opacity: "70%",
                    }}
                  >
                    Product
                    <i
                      style={{ marginLeft: "10px", fontSize:"15px" }}
                      class="fa-solid fa-chevron-down"
                    ></i>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <Link to="/Product" class="dropdown-item" href="#">
                        Grouped Product
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Variable Product
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        External Product
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item bottom-nav">
                <div class="dropdown">
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    data-mdb-dropdown-init
                    class="btn btn dropdown-toggle1"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      fontSize: "17px",
                      fontWeight: "550",
                      fontFamily: "sans-serif",
                      opacity: "70%",
                    }}
                  >
                    Blog
                    <i
                      style={{ marginLeft: "10px", fontSize:"15px" }}
                      class="fa-solid fa-chevron-down"
                    ></i>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <Link to="/Blog" class="dropdown-item" href="#">
                        Blog 1
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Blog 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Blog 3
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item bottom-nav">
                <div class="dropdown">
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    data-mdb-dropdown-init
                    class="btn btn dropdown-toggle1"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      fontSize: "17px",
                      fontWeight: "550",
                      fontFamily: "sans-serif",
                      opacity: "70%",
                    }}
                  >
                    Pages
                    <i
                     style={{ marginLeft: "10px", fontSize:"15px" }}
                      class="fa-solid fa-chevron-down"
                    ></i>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        About
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Contact
                      </a>
                    </li>
                    <li>
                      <Link to="/Errorpage" class="dropdown-item" href="#">
                        Error
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item discount">
                <span class="nav-link discount-item">
                  <i className="discount-icon">
                    <CiDiscount1 />
                  </i>
                  Discount 25% All Products
                </span>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="homes">
        <Home />
      </div>
      <Outlet />
    </>
  );
};
export default Topmenu;
