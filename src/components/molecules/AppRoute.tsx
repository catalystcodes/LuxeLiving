import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../organisms/Header";
import Product from "../../pages/Product";
import Articles from "../../pages/Articles";
import AboutUs from "../../pages/AboutUs";
import Footer from "../organisms/Footer";
import Services from "../../pages/Services";
import Home from "../../pages/Home";

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoute;
