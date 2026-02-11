import "../css/characters.css"
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Disclaimer from "../components/characters/Disclaimer";
import SearchBox from "../components/characters/SearchBox";
import CharacterNotFound from "../components/characters/CharacterNotFound";
import MainAreaInfo from "../components/characters/MainAreaInfo";
import { useState } from "react";

const Characters = () => {
  // Lift state here so both SearchBox and MainAreaInfo can access it
  const [character, setCharacter] = useState(null);

  return (
    <main className="characters-page">
      <Navbar />
      <Hero />
      <Disclaimer />

      {/* Pass setCharacter down so SearchBox can update it */}
      <SearchBox setCharacter={setCharacter} />

      {/* Pass character down so MainAreaInfo can display it */}
      <MainAreaInfo character={character} />
    </main>
  )
}

export default Characters