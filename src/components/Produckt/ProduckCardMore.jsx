import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // Assuming you are using React Router

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL parameter
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    images: null,
    name: "",
    content: "",
    rating: 0,
    price: 0,
    producer: 0,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://orozkg.pythonanywhere.com/api/v1/products/${id}/`
        );
        setProduct(response.data);
        setFormData({
          name: response.data.name,
          content: response.data.content,
          rating: response.data.rating,
          price: response.data.price,
          producer: response.data.producer,
        });
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://orozkg.pythonanywhere.com/api/v1/products/${id}/`
      );
      // Implement the action after successful deletion, e.g., redirect to a different page
      console.log("Product deleted successfully.");
      navigate("/profile");
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `https://orozkg.pythonanywhere.com/api/v1/products/${id}/`,
        formData
      );
      // You may want to display a success message or redirect to a different page after successful update
      console.log("Product updated successfully.");
    } catch (error) {
      console.error("Error updating product:", error.message);
    }
  };
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevValues) => ({
        ...prevValues,
        images: [file],
      }));
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {product ? (
          <div>
            <img
              src={product.images[0] || "/placeholder-image.jpg"}
              alt={product.name}
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <form onSubmit={handleSubmit}>
              <div className="m-4 bg-slate-200">
                <input
                  id="avatarInput"
                  type="file"
                  accept="image/*"
                  className=""
                  onChange={handleAvatarChange}
                />
                
              </div>

              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="content"
                  className="block font-medium text-gray-700"
                >
                  Content:
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="rating"
                  className="block font-medium text-gray-700"
                >
                  Rating:
                </label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="price"
                  className="block font-medium text-gray-700"
                >
                  Price:
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="producer"
                  className="block font-medium text-gray-700"
                >
                  Producer:
                </label>
                <input
                  type="number"
                  name="producer"
                  value={formData.producer}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="flex-grow bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-grow bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
