import "../../../../../../css/characters.css";

const GameAppearancesSection = ({ games }) => {
  if (!games || games.length === 0) return null;

  return (
    <div className="card-content">
        <div className="text">
          <h2 className="russo-one">Game Appearances:</h2>

          <ul className="g-appearance-slot desc-text exo-2">
            {games.map((game, index) => (
              <li key={index}>{game}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default GameAppearancesSection

/*
// Old Way
  const gameAppearances = character?.gameAppearances ?? [];
  const hasGameAppearances = gameAppearances.length > 0;

{hasGameAppearances && (
                <div className="card-content">
                    <div className="text">
                      <h2 className="uncial">Game Appearances:</h2>

                      <ul className="g-appearance-slot desc-text">
                        {gameAppearances.map((game, index) => (
                          <li key={index}>{game}</li>
                        ))}
                      </ul>
                    </div>
                </div>
              )}
*/

/*
// Older Way
{// Game & Other Media Appearances }
{(character?.appearances?.games?.length > 0 ||
  character?.appearances?.otherMedia?.length > 0) && (
  <div className="card-content appearances-toggle">
    <div className="text">
      <h2 className="uncial">Appearances:</h2>

      {// Games }
      {character?.appearances?.games?.length > 0 && (
        <div className="appearances-area desc-text">
          <h3 className="uncial">Games:</h3>
          <ul className="appearances-slot">
            {character.appearances.games.map((game, index) => (
              <li key={index} className="appearances-entry">
                {game}
              </li>
            ))}
          </ul>
        </div>
      )}

      {// Other Media }
      {character?.appearances?.otherMedia?.length > 0 && (
        <div className="appearances-area desc-text">
          <h3 className="uncial">Other Media:</h3>
          <ul className="appearances-slot">
            {character.appearances.otherMedia.map((media, index) => (
              <li key={index} className="appearances-entry">
                {media}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
)}

*/