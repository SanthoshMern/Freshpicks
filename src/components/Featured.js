import { React, useState, useEffect } from "react";
import "./../components/Featured.css";
import axios from "axios";

function Featured() {
  const [Featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/Featured");
        setFeatured(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid feature-sec">
      <div>
        <h3 className="feat-head">FEATURED PRODUCTS</h3>
      </div>
      <div className="row">
        {Featured.map((data) => {
          return (
            <div className="col-sm-4 col-md-3 col-lg-3">
              <div class="card mb-3 card-sec">
                <div className="container ">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={`http://localhost:5555/${data.file.path}`}
                        class="img-fluid rounded-start feat-image"
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      {" "}
                      <div class="card-body">
                        <h5 class="card-title feat-title">{data.ItemName.length > 13
                            ? data.ItemName.slice(0, 13)
                            : data.ItemName}</h5>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <p class="card-text">{data.Price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
