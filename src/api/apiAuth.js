// api.js

import axios from "axios";
import {
  setFetching,
  setUser,
  setError,
  setAuthenticated,
} from "../redux/auth/loginSlice";

export function loginUser(formData,setLoading) {
    setLoading(true)
  const handleRouteChange = () => {
    window.location.href = "/";
  };
  return (dispatch) => {
    dispatch(setFetching(true));
    axios
      .post("https://orozkg.pythonanywhere.com/api/v1/auth/login/", formData)
      .then((response) => {
        // Handle successful login
        console.log("Login successful:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(setUser(response.data));
        dispatch(setError(null)); // Reset the error state to null on successful login
        dispatch(setAuthenticated(true));
        handleRouteChange()
      })
      .catch((error) => {
        // Handle login error
        console.error("Login error:", error);
        dispatch(setError("Login error: " + error.response.data.login)); // Save the error message in the error state
      })
      .finally(() => {
        setLoading(false)
        dispatch(setFetching(false));
      });
  };
}
