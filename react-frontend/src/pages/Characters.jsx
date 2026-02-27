import "../css/characters.css"
import Hero from "../components/sonic-hub/characters/Hero";
import Disclaimer from "../components/sonic-hub/characters/Disclaimer";
import SearchBox from "../components/sonic-hub/characters/SearchBox";
import MainAreaInfo from "../components/sonic-hub/characters/MainAreaInfo";
import { useState } from "react";

const Characters = ({ showText, showContent }) => {
  // Lift state here so both SearchBox and MainAreaInfo can access it
  const [character, setCharacter] = useState(null);

  return (
    <main style={{ minHeight: showContent ? "150vh" : "300vh" }}>
      {/* Hidden via CSS so state is preserved inside SearchBox/MainAreaInfo */}
      <div style={{ display: showContent ? "contents" : "none" }}>
        <Hero showText={showText} />
        <Disclaimer />

        {/* Pass setCharacter down so SearchBox can update it */}
        <SearchBox setCharacter={setCharacter} />

        {/* Pass character down so MainAreaInfo can display it */}
        <MainAreaInfo character={character} />
      </div>
    </main>
  )
}

export default Characters