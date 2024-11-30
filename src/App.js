import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import OrderCustomization from "./components/OrderCustomisation";
import ShoppingCart from "./components/ShoppingCart";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderCustomization />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
