import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/AddProdukt/service";
import { setProductData } from "../../redux/AddProdukt/productSlice";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    images: [],
    name: "",
    content: "",
    rating: 0,
    is_published: false,
    price: 0,
    producer: 1,
  });

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const product = await createProduct(formData);
      dispatch(setProductData(product));
    } catch (error) {
      console.error("Error creating product:", error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      images: event.target.files[0],
    });
  };

  return (
    <div className="contact section-p">
      <div className="container">
        <div className="contact-section">
          <div className="section-title">
            <h3 className="text-brown">
              add <span className="text-dark">Produckt</span>
            </h3>
            <p className="text">
              I offer the right solutions for your digital business.
            </p>
          </div>
        </div>

        <form className="contact-form mx-auto" onSubmit={handleSubmit}>
          <div className="form-elem">
            <input
              placeholder="name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-elem">
            <input
              placeholder="rating"
              type="number"
              name="rating"
              id="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-elem">
            <input
              placeholder="is_published"
              type="checkbox"
              name="is_published"
              id="is_published"
              checked={formData.is_published}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-elem">
            <input
              placeholder="price"
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-elem">
            <input
              placeholder="producer"
              type="number"
              name="producer"
              id="producer"
              value={formData.producer}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-elem">
            <input
              placeholder="content"
              type="text"
              name="content"
              id="content"
              value={formData.content}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="bg-brown text-white submit-btn fw-3 fs-22"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
