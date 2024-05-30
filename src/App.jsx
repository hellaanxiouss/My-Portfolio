import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="">
      {/* <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      <Header />
      <div className="">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
