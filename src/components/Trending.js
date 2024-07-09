import "./../components/Trending.css";
import { RiShoppingBag2Line } from "react-icons/ri";
import { ContextProvide } from "../Context.jsx";
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

function Trending() {
  const [items, setItems, cart, setCart] = useContext(ContextProvide);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/Trendingnow");
        setTrending(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCart = (e, data) => {
    setItems([...items, data]);
  };
  const handleWishlist = (e, data) => {
    setItems([...items, data]);
  };

  return (
    <>
      <h3 className="trend-head">TRENDING TODAY</h3>
      <div className="container-fluid trend-sec">
        <div className="row">
          {trending.map((data) => {
            return (
              <div className="col-sm-12 col-lg">
                <div class="card newimg">
                  <img
                    src={`http://localhost:5555/${data.file.path}`}
                    class="card-img-top"
                    style={{ width: "100%", height: "160px" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{data.ItemName}</h5>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <p class="card-text">{data.Price}</p>
                    <button
                      className="button-tre"
                      onClick={(e) => handleCart(e, data)}
                    >
                      <RiShoppingBag2Line />
                    </button>
                    <button
                      onClick={(e) => handleWishlist(e, data)}
                      className="button options"
                    >
                      <i class="fa-regular fa-heart"></i>
                    </button>
                    <button className="button options1">
                      <i class="fa-solid fa-chart-simple"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Trending;
