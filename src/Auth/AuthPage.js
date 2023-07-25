import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../api/apiAuth";
import { setError } from "../redux/auth/loginSlice";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.login.error);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(formValues, setLoading));
  };

  return (
    <div className="register w-full h-screen flex justify-center items-center bg-gradient-to-r">
      <div className="registerForm p-8 rounded-lg shadow-md max-w-[700px] w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="inputGlass outline-none border rounded-lg px-5 py-5 mt-4 w-full"
            value={formValues.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inputGlass border rounded-lg px-5 py-5 mt-4 w-full"
            value={formValues.password}
            onChange={handleChange}
          />
          <div className="flex">
            <button
              type="submit"
              className="inputGlass bg-blue-500 text-white px-5 py-5 rounded mt-4 w-full"
            >
              {loading === false ? " Login" : "loading..."}
            </button>
            <Link to={"/register"}>
              {" "}
              <button
                type="submit"
                className="inputGlass bg-blue-500 text-white px-[5rem] ml-5 py-5 rounded mt-4 w-full"
              >
                register
              </button>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
