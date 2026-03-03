import "../../../../../../css/verse-hub/characters.css";

const NicknamesSection = ({ nicknames }) => {
  if (!nicknames || nicknames.length === 0) return null;

  return (
    <div className="card-content nicknames-toggle">
        <div className="text">
            <h2 className="russo-one">Nicknames:</h2>

            <ul className="nicknames-slot desc-text exo-2">
            {nicknames.map((nickname, index) => (
                <li key={index}>{nickname}</li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default NicknamesSection

/*
// Old Way
const nicknames = character?.nicknames ?? [];
const hasNicknames = nicknames.length > 0;

{hasNicknames && (
                <div className="card-content nicknames-toggle">
                    <div className="text">
                      <h2 className="uncial">Nicknames:</h2>

                      <ul className="nicknames-slot desc-text">
                        {nicknames.map((nickname, index) => (
                          <li key={index}>{nickname}</li>
                        ))}
                      </ul>
                    </div>
                </div>
              )}
*/

/*
// Older Way
<div className="card-content nicknames-toggle">
                    <div className="text">
                      <h2 className="uncial">Nicknames:</h2>

                      <ul className="nicknames-slot desc-text">
                        {character?.nicknames ? (
                          character.nicknames.map((nickname, index) => (
                            <li key={index}>{nickname}</li>
                          ))
                        ) : (
                          <li>No Nicknames</li>
                        )}
                      </ul>
                      {//<span className="desc-text reg-font">{character?.nicknames}</span>}
                    </div>
                </div>
*/