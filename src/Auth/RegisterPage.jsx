import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../api/api";
import { setError } from "../redux/register/RegisterSlice";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    avatar: null,
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.auth.errors);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormValues((prevValues) => ({
        ...prevValues,
        avatar: file,
      }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(formValues, setLoading));
  };

  return (
    <div className="register w-full h-screen flex justify-center items-center bg-gradient-to-r ">
      <div className="registerForm p-8 rounded-lg shadow-md max-w-[700px] w-full">
        <div className="flex justify-center">
          <label htmlFor="avatarInput" className="cursor-pointer">
            <div className="w-[100px] h-[100px] rounded-full border-white border overflow-hidden mb-4">
              {formValues.avatar ? (
                <img
                  src={URL.createObjectURL(formValues.avatar)}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src="https://example.com/your-avatar-placeholder.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </label>
          <input
            id="avatarInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="inputGlass outline-none border rounded-lg px-5 py-5 mt-4 w-full"
            value={formValues.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-500 mt-2">{errors.username}</p>
          )}

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="inputGlass border rounded-lg px-5 py-5 mt-4 w-full"
            value={formValues.first_name}
            onChange={handleChange}
          />
          {errors.first_name && (
            <p className="text-red-500 mt-2">{errors.first_name}</p>
          )}

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="inputGlass border rounded-lg px-5 py-5 mt-4 w-full"
            value={formValues.last_name}
            onChange={handleChange}
          />
          {errors.last_name && (
            <p className="text-red-500 mt-2">{errors.last_name}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="inputGlass border rounded-lg px-5 py-5 mt-4 w-full"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="inputGlass border rounded-lg px-5 py-5 mt-4 w-full"
            value={formValues.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 mt-2">{errors.phone}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inputGlass border rounded-lg px-5 py-5 mt-4 w-full"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 mt-2">{errors.password}</p>
          )}
          <div className="flex ">
            <button
              type="submit"
              className="inputGlass bg-blue-500 text-white px-5 py-5 rounded mt-4 w-full"
            >
              {loading === false ? "Register" : "loading...."}
            </button>
            <Link to={"/auth"}>
              {" "}
              <button className="inputGlass  bg-blue-500 text-white px-[5rem] ml-5 py-5 rounded mt-4 w-full">
                auth
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
