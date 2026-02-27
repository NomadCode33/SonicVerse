import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import SonicHubLayout from './components/sonic-hub/layouts/SonicHubLayout';
import Home from './pages/sonic-hub/home/Home';
import Characters from './pages/sonic-hub/characters/Characters';

const App = () => {
  const [showText, setShowText] = useState(true);
  const [showContent, setShowContent] = useState(true);

  return (
    <Router>
      <Routes>
        {/* The <Navigate> just automatically redirects anyone hitting / over to /sonic-hub */}
        <Route path="/" element={<Navigate to="/sonic-hub" replace />} />

        <Route
          path="/sonic-hub"
          element={
            <SonicHubLayout
              showText={showText}
              setShowText={setShowText}
              showContent={showContent}
              setShowContent={setShowContent}
            />
          }
        >
          <Route index element={<Home showText={showText} showContent={showContent} />} />
          <Route path="characters" element={<Characters showText={showText} showContent={showContent} />} />
          {/* Add new sonic-hub pages here: */}
          {/* <Route path="quiz" element={<Quiz />} /> */}
          {/* <Route path="transformations" element={<Transformations />} /> */}
        </Route>

        {/* 
          <Route
            path="/sonic-hub"
            element={
              <SonicHubLayout
                showText={showText}
                setShowText={setShowText}
                showContent={showContent}
                setShowContent={setShowContent}
              />
            }
          >
            <Route index element={<Home showText={showText} showContent={showContent} />} />
            <Route path="characters" element={<Characters />} />
            {// Add new sonic-hub pages here: }
            {// <Route path="quiz" element={<Quiz />} /> }
            {// <Route path="transformations" element={<Transformations />} />} 
          </Route> 
        */}
      </Routes>
    </Router>
  );
};

export default App;
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