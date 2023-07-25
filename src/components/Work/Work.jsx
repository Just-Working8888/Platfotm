import React, { useState } from "react";
import { works } from "../../constants/data";
import "./Work.css";
import { BsPlusLg } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import ProductList from "../Produckt/ProducktList";

const Work = () => {
  const [imageModal, setImageModal] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const setImageOnModal = (src) => {
    setImageModal(true);
    setImageSource(src);
  };

  return (
    <div className="work section-p bg-grey" id="work">
      <div className={imageModal ? "image-box show-image-box" : "image-box"}>
        <div className="image-box-content">
          <img src={imageSource} alt="" />
          <span
            className="image-box-close-btn"
            onClick={() => setImageModal(false)}
          >
            <ImCancelCircle size={30} />
          </span>
        </div>
      </div>

      <div className="container">
        <div className="work-content">
          <div className="section-title">
            <h3 className="text-brown">
              latest <span className="text-dark">works</span>
            </h3>
            <p className="text">
              I offer the right solutions for your digital business.
            </p>
          </div>

          <div className="work-list ">
            <ProductList />
          </div>
          <h1 className=" text-5xl mt-9 text-teal-600 font-normal cursor-pointer text-center">see all {'->'}</h1>
        </div>
      </div>
    </div>
  );
};

export default Work;
