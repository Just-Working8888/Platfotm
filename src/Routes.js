// routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import RegistrationForm from "./Auth/RegisterPage";
import AuthForm from "./Auth/AuthPage";
import ProducktPage from "./Auth/ProducktPage";
import Profile from "./Auth/Profile";

import ProductDetails from "./components/Produckt/ProduckCardMore";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/addproduckt" element={<ProducktPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/card/:id" element={<ProductDetails/>} />
        <Route path="*" element={"not found"} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
