import "../../../../../../css/verse-hub/characters.css";
import CharThemesSection from "./CharThemesSection";
import NicknamesSection from "./NicknamesSection";
import AttireSection from "./AttireSection";

const CharacterIdentity = ({ character }) => {
  const themes = character?.characterThemes ?? [];
  const nicknames = character?.nicknames ?? [];
  const attireCurrent = character?.attire?.current ?? [];
  const attireOriginal = character?.attire?.original ?? [];

  const hasThemes = themes.length > 0;
  const hasNicknames = nicknames.length > 0;
  const hasAttire = attireCurrent.length > 0 || attireOriginal.length > 0;

  const shouldRenderContainer = hasThemes || hasNicknames || hasAttire;      

  if (!shouldRenderContainer) return null;

  // Count and assign class
  const cardCount = [hasThemes, hasNicknames, hasAttire].filter(Boolean).length;
  const countClass =
    cardCount === 1 ? "one-card" :
    cardCount === 2 ? "two-cards" :
    cardCount === 3 ? "three-cards" : "";

  return (
    <section className={`card-container group-5 ${countClass}`}>
      <CharThemesSection themes={themes} />

      <NicknamesSection nicknames={nicknames} />

      <AttireSection current={attireCurrent} original={attireOriginal} />
    </section>
  )
}

export default CharacterIdentity

/*
  const characterThemes = character?.characterThemes ?? [];
  const nicknames = character?.nicknames ?? [];
  const attireCurrent = character?.attire?.current ?? [];
  const attireOriginal = character?.attire?.original ?? [];

  const hasThemes = characterThemes.length > 0;
  const hasNicknames = nicknames.length > 0;
  const hasAttire = attireCurrent.length > 0 || attireOriginal.length > 0;

  // Remove entire container if all are empty
  const shouldRenderContainer = hasThemes || hasNicknames || hasAttire;

  if (!shouldRenderContainer) return null;
*/

/*
{shouldRenderContainer && (
            <section className="card-container group-5">
              <CharThemesSection themes={characterThemes} />

              <NicknamesSection nicknames={nicknames} />

              <AttireSection current={attireCurrent} original={attireOriginal} />
            </section>
          )}
*/

/*
Old Way
{shouldRenderContainer && (
            <section className="card-container group-5">
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

              {hasAttire && (
                <div className="card-content attire-toggle">
                    <div className="text">
                      <h2 className="uncial">Attire:</h2>

                      {// If ONLY current exists }
                      {(attireCurrent.length > 0 && attireOriginal.length === 0) && (
                        <ul className="attire-slot desc-text">
                          {attireCurrent.map((attireItem, index) => (
                            <li key={index}>{attireItem}</li>
                          ))}
                          </ul>
                      )}

                      {// If BOTH current and original exist }
                      {(attireCurrent.length > 0 && attireOriginal.length > 0) && (
                        <div className="attire-area desc-text">
                          <h3 className="uncial">Current:</h3>
                          <ul className="attire-current-slot">
                            {attireCurrent.map((attireItem, index) => (
                              <li key={index}>{attireItem}</li>
                            ))}
                          </ul>

                          <h3 className="uncial">Original:</h3>
                          <ul className="attire-original-slot">
                            {attireOriginal.map((attireItem, index) => (
                              <li key={index}>{attireItem}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                </div>
              )}
            </section>
          )}
*/

/*
// Older Way
<section className="card-container group-5">
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

            <div className="card-content attire-toggle">
                <div className="text">
                  <h2 className="uncial">Attire:</h2>

                  {!character?.attire?.original && (
                    <ul className="attire-slot desc-text">
                      {character?.attire?.current?.map((attireItem, index) => (
                        <li key={index}>{attireItem}</li>
                      ))}
                      </ul>
                  )}

                  {(character?.attire?.current && character?.attire?.original) && (
                    <div className="attire-area desc-text">
                      <h3 className="uncial">Current:</h3>
                      <ul className="attire-current-slot">
                        {character?.attire?.current?.map((attireItem, index) => (
                          <li key={index}>{attireItem}</li>
                        ))}
                      </ul>

                      <h3 className="uncial">Original:</h3>
                      <ul className="attire-original-slot">
                        {character?.attire?.original?.map((attireItem, index) => (
                          <li key={index}>{attireItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
            </div>
          </section>
*/