import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import DevNotes from './pages/api-home/DevNotes';
import VerseHubLayout from './components/verse-hub/layouts/VerseHubLayout';
import Home from './pages/verse-hub/home/Home';
import Characters from './pages/verse-hub/characters/Characters';

const App = () => {
  const [showText, setShowText] = useState(true);
  const [showContent, setShowContent] = useState(true);

  return (
    <Router>
      <Routes>
        {/* The <Navigate> just automatically redirects anyone hitting / over to /verse-hub */}
        <Route path="/" element={<Navigate to="/verse-hub" replace />} />

        <Route path="/dev-notes" element={<DevNotes />} />

        <Route
          path="/verse-hub"
          element={
            <VerseHubLayout
              showText={showText}
              setShowText={setShowText}
              showContent={showContent}
              setShowContent={setShowContent}
            />
          }
        >
          <Route index element={<Home showText={showText} showContent={showContent} />} />
          <Route path="characters" element={<Characters showText={showText} showContent={showContent} />} />
          {/* Add new verse-hub pages here: */}
          {/* <Route path="quiz" element={<Quiz />} /> */}
          {/* <Route path="transformations" element={<Transformations />} /> */}
        </Route>

        {/* 
          <Route
            path="/verse-hub"
            element={
              <VerseHubLayout
                showText={showText}
                setShowText={setShowText}
                showContent={showContent}
                setShowContent={setShowContent}
              />
            }
          >
            <Route index element={<Home showText={showText} showContent={showContent} />} />
            <Route path="characters" element={<Characters />} />
            {// Add new verse-hub pages here: }
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