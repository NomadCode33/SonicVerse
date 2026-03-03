import "../../../css/verse-hub/characters.css";
import { useOutletContext } from 'react-router-dom';
import Hero from "../../../components/verse-hub/shared-templates/Hero";
import Disclaimer from "../../../components/verse-hub/shared-templates/Disclaimer";
import SearchBox from "../../../components/verse-hub/shared-templates/SearchBox";
import MainAreaInfo from "../../../components/verse-hub/characters/MainAreaInfo";
import { useState } from "react";

const Characters = ({ showText, showContent }) => {
  const { variant } = useOutletContext();
  
  // Lift state here so both SearchBox and MainAreaInfo can access it
  const [character, setCharacter] = useState(null);

  return (
    <main className={showContent ? "home-main" : "home-main--hidden"}>
      {/* Hidden via CSS so state is preserved inside SearchBox/MainAreaInfo */}
      <div style={{ display: showContent ? "contents" : "none" }}>
        <Hero variant={variant} showText={showText} />
        <Disclaimer variant={variant} />

        {/* Pass setCharacter down so SearchBox can update it */}
        <SearchBox variant={variant} setCharacter={setCharacter} />

        {/* Pass character down so MainAreaInfo can display it */}
        <MainAreaInfo character={character} />
      </div>
    </main>
  )
}

export default Characters