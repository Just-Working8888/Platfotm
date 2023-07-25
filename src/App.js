import "./App.css";
import "./assets/js/script";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProductList from "./components/Produckt/ProducktList";

function App() {
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token]);
  return (
    <div className="App">
      <Header />

      <Services />
      <Work />
      <WorkProcess />
      <Newsletter />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
