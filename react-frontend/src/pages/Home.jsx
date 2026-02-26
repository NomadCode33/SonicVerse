import "../css/home.css"
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import DemoWrapper from "../components/home/DemoWrapper";
import Footer from "../components/home/Footer";
import { useState } from "react";

const Home = () => {
  const [showText, setShowText] = useState(true);
  const [showContent, setShowContent] = useState(true);

  return (
    <main className="home-page">
      <Navbar
        showText={showText}
        setShowText={setShowText}
        showContent={showContent}
        setShowContent={setShowContent}
      />

      {/* Hidden via CSS so state is preserved */}
      <div style={{ display: showContent ? "contents" : "none" }}>
        <Hero showText={showText} />
        <DemoWrapper />
      </div>

      <Footer />
    </main>
  )
}

export default Home