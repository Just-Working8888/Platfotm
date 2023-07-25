import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  
  return (
    <div className="header flex flex-col" id="header">
      <Navbar />

      <div className="container flex">
        <div className="header-content">

          {" "}
          <h2 className="  text-uppercase text-white op-07 fw-6 ls-2">
            web design, branding, graphic
          </h2>
          <h1 className="text-white fw-6 header-title">
            Discover Producers
            <span className="text-brown">
          -Compare Prices. Compare Prices.
            </span>{" "}
            Rate Products. Unveil the Marketplace.
          </h1>
          <div className="btn-groups flex">
            <button type="button" className="btn-item bg-brown fw-4 ls-2">
              See produckt
            </button>
            <button type="button" className="btn-item bg-dark fw-4 ls-2">
            Add Produckt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
