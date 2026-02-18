import "../../../../../css/characters.css";

// Japanese VAs
// Prepares and checks if the character has any Japanese voice acting roles.
// It either removes the card container if no Japanese VAs exist in character 
// or card content if games, TV, or movies don't exist
const JapaneseVASection = ({ japanese }) => {
  // Exits early if no Japanese VA data exists.
  if (!japanese) return null;
  
  // Gets the character’s Japanese VA roles in games, defaulting to an empty array.
  const japaneseGames = japanese?.games ?? [];

  // Gets the character’s Japanese VA roles in TV shows, defaulting to an empty array.
  const japaneseTV = japanese?.tvShows ?? [];

  // Gets the character’s Japanese VA roles in movies, defaulting to an empty array.
  const japaneseMovies = japanese?.movies ?? [];

  // Checks if there are any Japanese VA roles in games, TV, or movies.
  const hasJapaneseGames = japaneseGames.length > 0;
  const hasJapaneseTV = japaneseTV.length > 0;
  const hasJapaneseMovies = japaneseMovies.length > 0;

  // Determines if the character has any Japanese VA roles at all.
  const hasAnyJapaneseVA = hasJapaneseGames || hasJapaneseTV || hasJapaneseMovies;

  // Exits early if the character has no Japanese VA roles.
  if (!hasAnyJapaneseVA) return null;

  return (
    <section className="card-container japanese-va-toggle group-10">
              {hasJapaneseGames && (
                <div className="card-content jgame-toggle">
                  <div className="text">
                    <h2 className="uncial">Japanese VAs (Games):</h2>

                    <ul className="va-game-slot desc-text">
                      {japaneseGames.map((va, index) => (
                        <li key={index}>
                          {va.name} ({va.years})

                          {Object.values(va.source).map((url, i) => (
                            <sup key={i}>
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-vas"
                              >
                                [{i + 1}]
                              </a>
                            </sup>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {hasJapaneseTV && (
                <div className="card-content jtv-toggle">
                  <div className="text">
                    <h2 className="uncial">Japanese VAs (TV Shows):</h2>

                    <ul className="jap-va-tv-slot desc-text">
                      {japaneseTV.map((va, index) => (
                        <li key={index} className="va-entry">
                          <h3 className="uncial">
                            {va.name}
                            {Object.values(va.source).map((url, i) => (
                              <sup key={i}>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="link-vas"
                                >
                                  [{i + 1}]
                                </a>
                              </sup>
                            ))}
                          </h3>

                          <div className="va-shows-movies desc-text">
                            <h3 className="uncial">Show(s):</h3>
                            <ul className="shows-movies-slot reg-font">
                              {va.shows.map((show, i) => (
                                <li key={i}>
                                  {show.name} ({show.years})
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {hasJapaneseMovies && (
                <div className="card-content jmovie-toggle">
                  <div className="text">
                    <h2 className="uncial">Japanese VAs (Movies):</h2>

                    <ul className="jap-va-movie-slot desc-text">
                      {japaneseMovies.map((va, index) => (
                        <li key={index}>
                          <h3 className="uncial">
                            {va.name}
                            {Object.values(va.source).map((url, i) => (
                              <sup key={i}>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="link-vas"
                                >
                                  [{i + 1}]
                                </a>
                              </sup>
                            ))}
                          </h3>

                          <div className="va-shows-movies desc-text">
                            <h3 className="uncial">Movie(s):</h3>
                            <ul className="shows-movies-slot reg-font">
                              {va.films.map((film, i) => (
                                <li key={i}>
                                  {film.name} ({film.years})
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
    </section>
  )
}

export default JapaneseVASection

/*
// Old Version

*/

/*
// Older Version
<section className="card-container japanese-va-toggle group-10">
            <div className="card-content jgame-toggle">
                <div className="text">
                  <h2 className="uncial">Japanese VAs (Games):</h2>

                  <ul className="va-game-slot desc-text">
                    {character?.portrayedBy?.japanese?.games?.length > 0 ? (
                      character.portrayedBy.japanese.games.map((va, index) => (
                        <li key={index}>{va.name} ({va.years})

                          {Object.values(va.source).map((url, i) => (
                            <sup key={i}>
                              <a 
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-vas"
                              >
                                [{i + 1}]
                              </a>
                            </sup>
                          ))}
                        </li>
                      ))
                    ) : (  
                      <li className="no-va-li">No Japanese Game VAs</li>
                    )}
                  </ul>
                </div>
            </div>

            <div className="card-content jtv-toggle">
                <div className="text">
                  <h2 className="uncial">Japanese VAs (TV Shows):</h2>

                  <ul className="jap-va-tv-slot desc-text">
                    {character?.portrayedBy?.japanese?.tvShows?.length > 0 ? (
                      character.portrayedBy.japanese?.tvShows.map((va, index) => (
                        <div key={index} className="va-entry">
                          <h3 className="uncial">
                            {va.name}
                            {Object.values(va.source).map((url, i) => (
                              <sup key={i}>
                                <a 
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="link-vas"
                                >
                                  [{i + 1}]
                                </a>
                              </sup>
                            ))}
                          </h3>

                          <div className="va-shows-movies desc-text">
                            <h3 className="uncial">Show(s):</h3>
                            <ul className="shows-movies-slot reg-font">
                              {va.shows.map((show, i) => (
                                <li key={i}>
                                  {show.name} ({show.years})
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      ))
                    ) : (
                      <li className="no-va-li">No Japanese TV Show VAs</li>
                    )}
                  </ul>
                </div>
            </div>

            <div className="card-content jmovie-toggle">
                <div className="text">
                  <h2 className="uncial">Japanese VAs (Movies):</h2>

                  <ul className="jap-va-movie-slot desc-text">
                    {character?.portrayedBy?.japanese?.movies?.length > 0 ? (
                      character.portrayedBy.japanese?.movies.map((va, index) => (
                        <div key={index} className="va-entry">
                          <h3 className="uncial">
                            {va.name}
                            {Object.values(va.source).map((url, i) => (
                              <sup key={i}>
                                <a 
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="link-vas"
                                >
                                  [{i + 1}]
                                </a>
                              </sup>
                            ))}
                          </h3>

                          <div className="va-shows-movies desc-text">
                            <h3 className="uncial">Movie(s):</h3>
                            <ul className="shows-movies-slot reg-font">
                              {va.films.map((film, i) => (
                                <li key={i}>
                                  {film.name} ({film.years})
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      ))
                    ) : (
                      <li className="no-va-li">No Japanese Movie VAs</li>
                    )}
                  </ul>
                </div>
            </div>
          </section>
*/