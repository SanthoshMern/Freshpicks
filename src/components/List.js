import fruit1 from "./../assets/Fruits/fruit1.jpeg";
import fruit2 from "./../assets/Fruits/fruit2.jpeg";
import fruit3 from "./../assets/Fruits/fruit3.jpeg";
import fruit4 from "./../assets/Fruits/fruit4.jpeg";
import fruit5 from "./../assets/Fruits/fruit5.jpeg";
import fruit6 from "./../assets/Fruits/fruit6.jpeg";
import fruit7 from "./../assets/Fruits/fruit7.jpeg";
import fruit8 from "./../assets/Fruits/fruit8.jpeg";
import fruit9 from "./../assets/Fruits/fruit9.jpg";
import fruit10 from "./../assets/Fruits/fruit10.jpeg";
import carrot from "./../assets/vegetables/carrot.jpg";
import chickenlegs from "./../assets/meat/chickenlegs.jpg";
import DeliciousMeat from "./../assets/meat/DeliciousMeat.jpg";
import FrenchBeaf from "./../assets/meat/FrenchBeaf.jpg";
import bread from "./../assets/butter/BrownBread.jpg";
import butter from "./../assets/butter/Organicbutter.jpg";
import Cheader from "./Cheader.js";
import { ContextProvide } from "../Context.jsx";
import React, { useContext } from "react";
import Footer from "./Footer.js";
import { RiShoppingBag2Line } from "react-icons/ri";
import "./list.css";

function List() {
  const [items, setItems, cart, setCart, catagory, setCatagory] =
    useContext(ContextProvide);

  const fruits = [
    {
      title: "Fresh Guava",
      rate: "24$",
      image: fruit1,
      id: "n01",
    },
    {
      title: "Fresh Strawberry",
      rate: "14$",
      image: fruit2,
      id: "n02",
    },
    {
      title: "Organic Cabbage ",
      rate: "20$",
      image: fruit3,
      id: "n03",
    },
    {
      title: "Organic Lemon",
      rate: "10$",
      image: fruit4,
      id: "n04",
    },
    {
      title: "Organic potato",
      rate: "25$",
      image: fruit5,
      id: "n05",
    },
    {
      title: "Organic onion",
      rate: "25$",
      image: fruit6,
      id: "n05",
    },
    {
      title: "Orange Juice",
      rate: "25$",
      image: fruit7,
      id: "n05",
    },
    {
      title: "Famous Soda",
      rate: "25$",
      image: fruit8,
      id: "n05",
    },
    {
      title: "Organic Banana",
      rate: "25$",
      image: fruit9,
      id: "n05",
    },
    {
      title: "Organic Avacado",
      rate: "25$",
      image: fruit10,
      id: "n05",
    },
  ];
  const FreshJuice = [
    {
      title: "Orange Juice",
      rate: "25$",
      image: fruit7,
      id: "n05",
    },
    {
      title: "Famous Soda",
      rate: "25$",
      image: fruit8,
      id: "n05",
    },
  ];

  const meat = [
    {
      title: "Chicken legs",
      rate: "26$",
      image: chickenlegs,
      id: "m01",
    },
    {
      title: "Delicious Meat",
      rate: "14$",
      image: DeliciousMeat,
      id: "m02",
    },
    {
      title: "French Beaf",
      rate: "20$",
      image: FrenchBeaf,
      id: "m03",
    },
  ];

  const vegetables = [
    {
      title: "Organic Cabbage ",
      rate: "20$",
      image: fruit3,
      id: "n03",
    },
    {
      title: "Organic Carrot",
      rate: "14$",
      image: carrot,
      id: "m02",
    },
    {
      title: "Organic Potao",
      rate: "20$",
      image: fruit5,
      id: "m03",
    },
    {
      title: "Organic onion",
      rate: "25$",
      image: fruit6,
      id: "n05",
    },
  ];

  const butter1 = [
    {
      title: "Brown Bread ",
      rate: "20$",
      image: bread,
      id: "n03",
    },
    {
      title: "Organic Butter",
      rate: "14$",
      image: butter,
      id: "m02",
    },
  ];

  if (catagory == "FRUITS") {
    var datas = fruits;
  } else if (catagory == "FRESH JUICE") {
    var datas = FreshJuice;
  } else if (catagory == "Fresh Meat") {
    var datas = meat;
  } else if (catagory == "Vegetables") {
    var datas = vegetables;
  } else {
    var datas = butter1;
  }

  const handleCart = (e, data) => {
    setItems([...items, data]);
  };

  return (
    <>
      <Cheader />
      <br></br>
      <div className="container-fluid">
        <div className="row">
          <br></br>
          {datas.map((data) => {
            return (
              <div className="col-sm-3 col-md-4 col-lg-3">
                <div class="card allign newimg1" style={{ width: "18rem;" }}>
                  <img src={data.image} class="card-img-top li-img" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{data.rate}</p>
                    <div>
                      <button
                        className="button-list"
                        onClick={(e) => handleCart(e, data)}
                      >
                        <RiShoppingBag2Line />
                      </button>
                      <button className="button options2">
                        <i class="fa-regular fa-heart"></i>
                      </button>
                      <button className="button options3">
                        <i class="fa-solid fa-chart-simple"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br></br>
      <Footer />
    </>
  );
}

export default List;
