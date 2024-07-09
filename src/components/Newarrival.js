import React, { useContext, useState, useEffect } from "react";
import "./../components/Newarrival.css";
import { RiShoppingBag2Line } from "react-icons/ri";
import { ContextProvide } from "../Context.jsx";
import axios from "axios";

function Newarrival() {
  const [items, setItems, cart, setCart] = useContext(ContextProvide);

  const [newArrival, setNewArrival] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/Newarrival");
        setNewArrival(response.data);
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
      <h3 className="arr-head">NEW ARRIVAL</h3>

      <div className="container-fluid arr-sec">
        <div className="row">
          {newArrival.map((data) => {
            return (
              <div className="col-sm-3 col-lg">
                <div class="card newimg">
                  <img
                    src={`http://localhost:5555/${data.file.path}`}
                    className="card-img-top"
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
                      className="button-arr"
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
export default Newarrival;
