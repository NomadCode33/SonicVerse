import "../../css/characters.css"
import BasicCharacterInfo from "./BasicCharacterInfo";
import CharacterTraits from "./CharacterTraits";

const MainAreaInfo = ({ character }) => {
  return (
    <main id="main-area">
        {/* BasicCharacterInfo & CharacterTraits now receives data */}
        <CharacterTraits character={character}/>
        <BasicCharacterInfo character={character} />
    </main>
  )
}

export default MainAreaInfo