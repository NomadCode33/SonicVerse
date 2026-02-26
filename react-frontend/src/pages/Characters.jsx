import "../css/characters.css"
import Navbar from "../components/characters/Navbar";
import Hero from "../components/characters/Hero";
import Disclaimer from "../components/characters/Disclaimer";
import SearchBox from "../components/characters/SearchBox";
import CharacterNotFound from "../components/characters/CharacterNotFound";
import MainAreaInfo from "../components/characters/MainAreaInfo";
import Footer from "../components/home/Footer";
import { useState } from "react";

const Characters = () => {
  // Lift state here so both SearchBox and MainAreaInfo can access it
  const [character, setCharacter] = useState(null);
  const [showText, setShowText] = useState(true);
  const [showContent, setShowContent] = useState(true);

  return (
    <main className="characters-page" style={{ minHeight: showContent ? "150vh" : "300vh" }}>
      <Navbar 
        showText={showText}
        setShowText={setShowText}
        showContent={showContent}
        setShowContent={setShowContent}
      />

      {/* Hidden via CSS so state is preserved inside SearchBox/MainAreaInfo */}
      <div style={{ display: showContent ? "contents" : "none" }}>
        <Hero showText={showText} />
        <Disclaimer />

        {/* Pass setCharacter down so SearchBox can update it */}
        <SearchBox setCharacter={setCharacter} />

        {/* Pass character down so MainAreaInfo can display it */}
        <MainAreaInfo character={character} />
      </div>
      <Footer />
    </main>
  )
}

export default Characters