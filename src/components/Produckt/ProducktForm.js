import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/AddProdukt/service";
import { setProductData } from "../../redux/AddProdukt/productSlice";

const ProductForm = () => {
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
    <form
      onSubmit={handleSubmit}
      className="max-w-[600px] mx-auto p-4 border rounded shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="images" className="block mb-1">
          Images:
        </label>
        <input
          type="file"
          name="images"
          id="images"
          onChange={handleFileChange}
          className="block w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-1">
          Content:
        </label>
        <input
          type="text"
          name="content"
          id="content"
          value={formData.content}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="block mb-1">
          Rating:
        </label>
        <input
          type="number"
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="is_published" className="block mb-1">
          Published:
        </label>
        <input
          type="checkbox"
          name="is_published"
          id="is_published"
          checked={formData.is_published}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-1">
          Price:
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="producer" className="block mb-1">
          Producer:
        </label>
        <input
          type="number"
          name="producer"
          id="producer"
          value={formData.producer}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
