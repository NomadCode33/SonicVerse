import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Disclaimer from "./components/Disclaimer";
/*import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";*/
import "./css/home.css"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Disclaimer />
      <div>App</div>
    </>
  );
}

export default App

/*
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";

const App = () => {
  return (
    <Router>
      //<Navbar /> { shows on all pages }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
};

export default App;

*/