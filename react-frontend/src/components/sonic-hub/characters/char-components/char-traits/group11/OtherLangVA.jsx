import "../../../../../../css/characters.css";

// Other Language VAs
// Prepares and checks if the character has any other language voice acting roles.
// It either removes the card container if no other language VAs exist in character 
// or card content if games, TV, or movies don't exist
const OtherLangVA = ({ languages }) => {
  // Exits early if no other language VA data exists.
  if (!languages) return null;
  
  // Gets the character’s other language VA roles in games, defaulting to an empty array.
  const otherLangGames = languages?.games ?? [];

  // Gets the character’s other language VA roles in TV shows, defaulting to an empty array.
  const otherLangTV = languages?.tvShows ?? [];

  // Gets the character’s other language VA roles in movies, defaulting to an empty array.
  const otherLangMovies = languages?.movies ?? [];

  // Checks if there are any other language VA roles in games, TV, or movies.
  const hasOtherLangGames = otherLangGames.length > 0;
  const hasOtherLangTV = otherLangTV.length > 0;
  const hasOtherLangMovies = otherLangMovies.length > 0;

  // Determines if the character has any other language VA roles at all.
  const hasAnyOtherLangVA = hasOtherLangGames || hasOtherLangTV || hasOtherLangMovies;

  // Exits early if the character has no other language VA roles.
  if (!hasAnyOtherLangVA) return null;

  return (
    <section className="card-container nationality-va-toggle group-11">
              {hasOtherLangGames && (
                <div className="card-content lngame-toggle">
                  <div className="text">
                    <h2 className="russo-one">Other Language VAs (Games):</h2>

                    <ul className="other-va-game-slot desc-text exo-2">
                      {otherLangGames.map((va, index) => (
                        <li key={index}>
                          {va.name} ({va.nationality}, {va.years})

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

              {hasOtherLangTV && (
                <div className="card-content lntv-toggle">
                  <div className="text">
                    <h2 className="russo-one">Other Language VAs (TV Shows):</h2>

                    <ul className="other-va-tv-slot desc-text">
                      {otherLangTV.map((va, index) => (
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

                          <h3 className="uncial">
                            <span className="inter-500">Nat.:</span>{" "}<span className="exo-2">{va.nationality}</span>
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

              {hasOtherLangMovies && (
                <div className="card-content lnmovie-toggle">
                  <div className="text">
                    <h2 className="russo-one">Other Language VAs (Movies):</h2>

                    <ul className="other-va-movie-slot desc-text">
                      {otherLangMovies.map((va, index) => (
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

                          <h3 className="uncial">
                            <span className="inter-500">Nat.:</span>{" "}<span className="exo-2">{va.nationality}</span>
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

export default OtherLangVA

/*
// Old Way
{hasAnyOtherLangVA && (
    <section className="card-container nationality-va-toggle group-11">
                {hasOtherLangGames && (
                    <div className="card-content lngame-toggle">
                    <div className="text">
                        <h2 className="uncial">Other Language VAs (Games):</h2>

                        <ul className="other-va-game-slot desc-text">
                        {otherLangGames.map((va, index) => (
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

                {hasOtherLangTV && (
                    <div className="card-content lntv-toggle">
                    <div className="text">
                        <h2 className="uncial">Other Language VAs (TV Shows):</h2>

                        <ul className="other-va-tv-slot desc-text">
                        {otherLangTV.map((va, index) => (
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

                            <h3 className="uncial">
                                Nat.:{" "}{va.nationality}
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

                {hasOtherLangMovies && (
                    <div className="card-content lnmovie-toggle">
                    <div className="text">
                        <h2 className="uncial">Other Language VAs (Movies):</h2>

                        <ul className="other-va-movie-slot desc-text">
                        {otherLangMovies.map((va, index) => (
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

                            <h3 className="uncial">
                                Nat.:{" "}{va.nationality}
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
// Older Way
<section className="card-container nationality-va-toggle group-11">
            <div className="card-content lngame-toggle">
                <div className="text">
                  <h2 className="uncial">Other Language VAs (Games):</h2>

                  <ul className="other-va-game-slot desc-text">
                    {character?.portrayedBy?.otherLanguages?.games?.length > 0 ? (
                      character.portrayedBy.otherLanguages.games.map((va, index) => (
                        <li key={index}>{va.name} ({va.nationality}, {va.years})

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
                      <li className="no-va-li">No Other Language Game VAs</li>
                    )}
                  </ul>
                </div>
            </div>

            <div className="card-content lntv-toggle">
                <div className="text">
                  <h2 className="uncial">Other Language VAs (TV Shows):</h2>

                  <ul className="other-va-tv-slot desc-text">
                    {character?.portrayedBy?.otherLanguages?.tvShows?.length > 0 ? (
                      character.portrayedBy.otherLanguages.tvShows.map((va, index) => (
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

                          <h3 className="uncial">
                            Nat.:{" "}{va.nationality}
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
                      <li className="no-va-li">No Other Language TV Show VAs</li>
                    )}
                  </ul>
                </div>
            </div>

            <div className="card-content lnmovie-toggle">
                <div className="text">
                  <h2 className="uncial">Other Language VAs (Movies):</h2>

                  <ul className="other-va-movie-slot desc-text">
                    {character?.portrayedBy?.otherLanguages?.movies?.length > 0 ? (
                      character.portrayedBy.otherLanguages.movies.map((va, index) => (
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

                          <h3 className="uncial">
                            Nat.:{" "}{va.nationality}
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
                      <li className="no-va-li">No Other Language Movie VAs</li>
                    )}
                  </ul>
                </div>
            </div>
          </section>
*/