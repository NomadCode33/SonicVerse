import "../../../css/characters.css";
import { useOutletContext } from 'react-router-dom';
import Hero from "../../../components/sonic-hub/shared-templates/Hero";
import Disclaimer from "../../../components/sonic-hub/shared-templates/Disclaimer";
import SearchBox from "../../../components/sonic-hub/shared-templates/SearchBox";
import MainAreaInfo from "../../../components/sonic-hub/characters/MainAreaInfo";
import { useState } from "react";

const Characters = ({ showText, showContent }) => {
  const { variant } = useOutletContext();
  
  // Lift state here so both SearchBox and MainAreaInfo can access it
  const [character, setCharacter] = useState(null);

  return (
    <main style={{ minHeight: showContent ? "150vh" : "300vh" }}>
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