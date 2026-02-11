import "../../css/characters.css"
import BasicCharacterInfo from "./BasicCharacterInfo";
import CharacterTraits from "./CharacterTraits";

const MainAreaInfo = ({ character }) => {
  return (
    <main id="main-area">
        {/* BasicCharacterInfo now receives data */}
        <BasicCharacterInfo character={character} />
        <CharacterTraits character={character}/>
    </main>
  )
}

export default MainAreaInfo