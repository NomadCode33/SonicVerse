import "../../../../../../css/characters.css";

// English VAs
// Prepares and checks if the character has any English voice acting roles.
// It either removes the card container if no English VAs exist in character 
// or card content if games, TV, or movies don't exist
const EnglishVA = ({ english }) => {
  // Returns nothing if no English VAs exist.
  // Exits early if no English VA data exists.
  if (!english) return null;

  // // Gets the character’s English VA roles in games, defaulting to an empty array.
  const englishGames = english?.games ?? [];

  //Gets the character’s English VA roles in TV shows, defaulting to an empty array.
  const englishTV = english?.tvShows ?? [];

  // Gets the character’s English VA roles in movies, defaulting to an empty array.
  const englishMovies = english?.movies ?? [];

  // Checks if there are any English VA roles in games, TV, or movies.
  const hasEnglishGames = englishGames.length > 0;
  const hasEnglishTV = englishTV.length > 0;
  const hasEnglishMovies = englishMovies.length > 0;

  // Determines if the character has any English VA roles at all.
  const hasAnyEnglishVA = hasEnglishGames || hasEnglishTV || hasEnglishMovies;

  // Exits early if the character has no English VA roles.
  if (!hasAnyEnglishVA) return null;

  return (
    <section className="card-container english-va-toggle group-9">
              {hasEnglishGames && (
                <div className="card-content egame-toggle">
                  <div className="text">
                    <h2 className="russo-one">English VAs (Games):</h2>

                    <ul className="va-game-slot desc-text exo-2">
                      {englishGames.map((va, index) => (
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

              {hasEnglishTV && (
                <div className="card-content etv-toggle">
                  <div className="text">
                    <h2 className="russo-one">English VAs (TV Shows):</h2>

                    <ul className="eng-va-tv-slot desc-text">
                      {englishTV.map((va, index) => (
                        <li key={index} className="va-entry">
                          <h3 className="inter">
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
                            <h3 className="inter-500">Show(s):</h3>
                            <ul className="shows-movies-slot exo-2">
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

              {hasEnglishMovies && (
                <div className="card-content emovie-toggle">
                  <div className="text">
                    <h2 className="russo-one">English VAs (Movies):</h2>

                    <ul className="eng-va-movie-slot desc-text">
                      {englishMovies.map((va, index) => (
                        <li key={index}>
                          <h3 className="inter">
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
                            <h3 className="inter-500">Movie(s):</h3>
                            <ul className="shows-movies-slot exo-2">
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

export default EnglishVA

/*
// Old Version
{hasAnyEnglishVA && (
            <section className="card-container english-va-toggle group-9">
              {hasEnglishGames && (
                <div className="card-content egame-toggle">
                  <div className="text">
                    <h2 className="uncial">English VAs (Games):</h2>

                    <ul className="va-game-slot desc-text">
                      {englishGames.map((va, index) => (
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

              {hasEnglishTV && (
                <div className="card-content etv-toggle">
                  <div className="text">
                    <h2 className="uncial">English VAs (TV Shows):</h2>

                    <ul className="eng-va-tv-slot desc-text">
                      {englishTV.map((va, index) => (
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

              {hasEnglishMovies && (
                <div className="card-content emovie-toggle">
                  <div className="text">
                    <h2 className="uncial">English VAs (Movies):</h2>

                    <ul className="eng-va-movie-slot desc-text">
                      {englishMovies.map((va, index) => (
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
          )}
*/

/*
// Older Version
<section className="card-container english-va-toggle group-9">
            <div className="card-content egame-toggle">
                <div className="text">
                  <h2 className="uncial">English VAs (Games):</h2>

                  <ul className="va-game-slot desc-text">
                    {character?.portrayedBy?.english?.games?.length > 0 ? (
                      character.portrayedBy.english.games.map((va, index) => (
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
                      <li>No English Game VAs</li>
                    )}
                  </ul>
                </div>
            </div>

            <div className="card-content etv-toggle">
                <div className="text">
                  <h2 className="uncial">English VAs (TV Shows):</h2>

                  <ul className="eng-va-tv-slot desc-text">
                    {character?.portrayedBy?.english?.tvShows?.length > 0 ? (
                      character.portrayedBy.english?.tvShows.map((va, index) => (
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
                      <li className="no-va-li">No English TV Show VAs</li>
                    )}
                  </ul>
                </div>
            </div>

            <div className="card-content emovie-toggle">
                <div className="text">
                  <h2 className="uncial">English VAs (Movies):</h2>
                  
                  <ul className="eng-va-movie-slot desc-text">
                    {character?.portrayedBy?.english?.movies?.length > 0 ? (
                      character.portrayedBy.english?.movies.map((va, index) => (
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
                      <li className="no-va-li">No English Movie VAs</li>
                    )}
                  </ul>
                </div>
            </div>
          </section>
*/