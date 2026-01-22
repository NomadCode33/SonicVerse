import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
/*import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import Disclaimer from "./components/home/Disclaimer";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";*/
//

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App
/*
Old way of showing my pages on App.jsx
return (
    <>
      <Home />
      <div>App</div>
    </>
  );

*/



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