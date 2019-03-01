import React from "react";

import "./Portfolio.css";

import BurgerBuilder from "../../assets/porfolio/BurgerBuilder.png";
import NodeShop from "../../assets/porfolio/nodeshop.png";
import WSN from "../../assets/porfolio/wsn.png";
import Footer from "../Layout/Footer/Footer";

const portfolio = () => {
  return (
    <div>
      <div className="Portfolio">
        <div className="container">
          <div style={{ marginTop: "50px", fontWeight: "900" }}>
            <p className="h2 text-center" style={{ fontWeight: "501" }}>
              {" "}
              PROJECTS
            </p>
            <hr
              className="text-center"
              style={{
                height: "1px",
                width: "147px",
                marginTop: "-12px",
                border: "none",
                color: "#333",
                backgroundColor: "#333"
              }}
            />
          </div>

          <div
            className="row justify-content-center align-items-center"
            style={{ marginTop: "80px" }}
          >
            <div className="col imgcontainer">
              <img src={BurgerBuilder} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p>Burger Builder</p>
                  </div>
                  <div>
                    <button className="btn-info">visit the website</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-auto imgcontainer">
              <img src={NodeShop} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p>Burger Builder</p>
                  </div>
                  <div>
                    <button className="btn-info">visit the website</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-auto imgcontainer">
              <img src={WSN} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p>Burger Builder</p>
                  </div>
                  <div>
                    <button className="btn-info">visit the website</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center align-items-center"
            style={{ marginTop: "20px" }}
          >
            <div className="col-md-4 col-auto imgcontainer">
              <img src={WSN} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p>Burger Builder</p>
                  </div>
                  <div>
                    <button className="btn-info">visit the website</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-auto imgcontainer">
              <img src={BurgerBuilder} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p>Burger Builder</p>
                  </div>
                  <div>
                    <button className="btn-info">visit the website</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-auto imgcontainer">
              <img src={NodeShop} className="image" alt="burger builder" />
              <div className="overlay">
                <div className="imgtext">
                  <div>
                    <p>Burger Builder</p>
                  </div>
                  <div>
                    <button className="btn-info">visit the website</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default portfolio;
