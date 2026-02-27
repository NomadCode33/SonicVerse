import "../../../../../../css/sonic-hub/characters.css";

const CharThemesSection = ({ themes }) => {
  if (!themes || themes.length === 0) return null;

  return (
    <div className="card-content char-theme-toggle">
        <div className="text">
            <h2 className="russo-one">Character Theme(s):</h2>

            <ul className="char-theme-slot desc-text exo-2">
            {themes.map((theme) => (
                <li key={theme.index}>{theme.song}</li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default CharThemesSection

/*
// Old Way
const characterThemes = character?.characterThemes ?? [];
const hasThemes = characterThemes.length > 0;


{hasThemes && (
                <div className="card-content char-theme-toggle">
                    <div className="text">
                      <h2 className="uncial">Character Theme(s):</h2>

                      <ul className="char-theme-slot desc-text">
                        {characterThemes.map((theme) => (
                          <li key={theme.index}>{theme.song}</li>
                        ))}
                      </ul>
                    </div>
                </div>
              )}
*/

/*
// Older Way
<div className="card-content char-theme-toggle">
                  <div className="text">
                    <h2 className="uncial">Character Theme(s):</h2>

                    <ul className="char-theme-slot desc-text">
                      {character?.characterThemes ? (
                        character.characterThemes.map((theme) => (
                          <li key={theme.index}>{theme.song}</li>
                        ))
                      ) : (
                        <li>No Known Character Themes</li>
                      )}
                    </ul>
                  </div>
              </div>
*/