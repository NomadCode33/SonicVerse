import "../../../../css/characters.css";

const EnglishVASection = ({ english }) => {
  // English VAs
  if (!english) return null;

  const englishGames = english?.games ?? [];
  const englishTV = english?.tvShows ?? [];
  const englishMovies = english?.movies ?? [];

  const hasEnglishGames = englishGames.length > 0;
  const hasEnglishTV = englishTV.length > 0;
  const hasEnglishMovies = englishMovies.length > 0;

  const hasAnyEnglishVA = hasEnglishGames || hasEnglishTV || hasEnglishMovies;

  if (!hasAnyEnglishVA) return null;

  return (
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
  )
}

export default EnglishVASection

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