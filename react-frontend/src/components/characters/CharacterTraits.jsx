import "../../css/characters.css"

const CharacterTraits = ({ character }) => {
  if (!character) return null;

  return (
    <section className="char-traits">
          <section className="description-box group-1">
            <div className="text">
              <h2 className="uncial">Description:</h2>
              <span className="desc-text reg-font">
                {character?.description?.[0]?.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </span>
              {/*<span className="desc-text reg-font">{character?.description}</span>*/}
            </div>
          </section>

          <section className="description-box quote-box group-2">
            <div className="text">
              <h2 className="uncial">Quote:</h2>
              <div className="desc-text quote-info">
                <p className="char-quote desc-text reg-font">&quot;{character?.quote?.text || character?.quoteS}&quot;</p>
                <p className="quote-source desc-text reg-font">- {character?.quote?.char}, <span className="quote-from">{character?.quote?.from}</span></p>
              </div>
            </div>
          </section>

          <section className="card-container group-3">
            <div className="card-content preferences">
                <div className="text">
                  <h2 className="uncial">Likes:</h2>

                    {character?.likes && (
                      <ul className="likes-slot desc-text reg-font">
                        {character?.likes?.map((like, index) => (
                          <li key={index}>{like}</li>
                        ))}
                      </ul>
                    )}
                  {/*<span className="desc-text reg-font">{character?.likes}</span>*/}
                  {/*<ul className="likes-slot reg-font">{character?.likes}</ul>*/}
                </div>
            </div>

            <div className="card-content preferences">
                <div className="text">
                  <h2 className="uncial">Dislikes:</h2>

                    {character?.dislikes && (
                      <ul className="dislikes-slot desc-text">
                        {character?.dislikes?.map((dislike, index) => (
                          <li key={index}>{dislike}</li>
                        ))}
                      </ul>
                    )}
                  {/*<span className="desc-text">{character?.dislikes}</span>*/}
                </div>
            </div>
          </section>

          <section className="description-box weakness-box weakness-toggle group-4">
            <div className="text">
              <h2 className="uncial">Weaknesses:</h2>

              <ul className="weaknesses-slot desc-text">
                {character?.weaknesses ? (
                  character.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))
                ) : (
                  <li>No Known Weaknesses</li>
                )}
              </ul>
              {/*<span className="desc-text reg-font">{character?.weaknesses}</span>*/}
            </div>
          </section>

          <section className="card-container group-5">
            <div className="card-content">
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
                  {/*<span className="desc-text reg-font">{character?.nicknames}</span>*/}
                </div>
            </div>

            <div className="card-content transform-toggle">
                <div className="text">
                  <h2 className="uncial">Transformations:</h2>

                  <ul className="transformations-slot desc-text">
                    {character?.transformations?.length > 0 ? (
                      character.transformations.map((transformation) => (
                        <li key={transformation.index}>{transformation.name}</li>
                      ))
                    ) : (
                      <li>No Transformations</li>
                    )}
                  </ul>
                  {/*<ul className="transformations-slot desc-text">{character?.transformations?.name}</ul>*/}
                </div>
            </div>
          </section>

          <section className="card-container skills-toggle group-6">
            <div className="card-content skills-toggle">
                <div className="text">
                  <h2 className="uncial">Skills:</h2>

                  <ul className="skills-slot desc-text">
                    {character?.abilities?.skills ? (
                      character.abilities.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))
                    ) : (
                      <li>No Known Skills</li>
                    )}
                  </ul>
                  {/*<span className="desc-text">{character?.abilities?.skills}</span>*/}
                </div>
            </div>

            <div className="card-content techniques-toggle">
                <div className="text">
                  <h2 className="uncial">Techniques:</h2>

                  <ul className="techniques-slot desc-text">
                    {character?.abilities?.moveTechniques ? (
                      character.abilities.moveTechniques.map((technique) => (
                        <li key={technique.index}>{technique.name}</li>
                      ))
                    ) : (
                      <li>No Known Techniques</li>
                    )}
                  </ul>
                </div>
            </div>

            <div className="card-content ability-type-toggle">
                <div className="text">
                  <h2 className="uncial">Ability Type:</h2>

                  <ul className="ability-type-slot desc-text">
                    {character?.abilities?.abilityType ? (
                      character.abilities.abilityType.map((type) => (
                        <li key={type.index}>{type.name}</li>
                      ))
                    ) : (
                      <li>No Known Ability Type(s)</li>
                    )}
                  </ul>
                </div>
            </div>
          </section>

          <section className="card-container group-7">
            <div className="card-content affiliation-toggle">
                <div className="text">
                  <h2 className="uncial">Affiliation(s):</h2>

                  <ul className="affiliation-slot desc-text">
                    {character?.affiliation ? (
                      character.affiliation.map((association, index) => (
                        <li key={index}>{association}</li>
                      ))
                    ) : (
                      <li>No Known Affiliation(s)</li>
                    )}
                  </ul>
                  {/*<ul className="desc-text">{character?.affiliation}</ul>*/}
                </div>
            </div>

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

            <div className="card-content relatives-toggle">
                <div className="text">
                  <h2 className="uncial">Relatives:</h2>

                  <ul className="relatives-slot desc-text">
                    {character?.relatives ? (
                      character.relatives.map((relative) => (
                        <li key={relative.index}>{relative.name} ({relative.relationship})</li>
                      ))
                    ) : (
                      <li>No Known Relatives</li>
                    )}
                  </ul>
                </div>
            </div>
          </section>

          <section className="card-container group-8">
            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Real World Creators: <span className="description"></span></h2>
                  
                  <div className="creator-toggle">
                    <h3 className="uncial">Creator(s): <span className="creators"></span></h3>
                    <ul className="creator-slot reg-font">{character?.realWorldDesigners?.creators?.name}</ul>
                  </div>

                  <div className="artist-toggle">
                    <h3 className="uncial">Artists(s): <span className="artists"></span></h3>
                    <ul className="artist-slot reg-font">{character?.realWorldDesigners?.artists?.name}</ul>
                  </div>
                  <span className="desc-text"></span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Game Appearances:</h2>

                  <ul className="g-appearance-slot desc-text">
                    {character?.gameAppearances ? (
                      character.gameAppearances.map((game, index) => (
                        <li key={index}>{game}</li>
                      ))
                    ) : (
                      <li>No Known Game Appearances</li>
                    )}

                  </ul>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Appearances in other media:</h2>
                  
                  <ul className="other-media-slot desc-text">
                    {character?.otherMedia ? (
                      character.otherMedia.map((media, index) => (
                        <li key={index}>{media}</li>
                      ))
                    ) : (
                      <li>No Known Appearances in Other Media</li>
                    )}
                  </ul>
                </div>
            </div>
          </section>

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
                            <h3>Show(s):</h3>
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
                            <h3>Movie(s):</h3>
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
                            <h3>Show(s):</h3>
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
                            <h3>Movie(s):</h3>
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

          <section className="card-container nationality-va-toggle group-11">
            <div className="card-content lngame-toggle">
                <div className="text">
                  <h2 className="uncial">Other Language VAs (Games):</h2>

                  <ul className="other-va-game-slot desc-text">
                    {character?.portrayedBy?.otherLanguages?.games?.length > 0 ? (
                      character.portrayedBy.otherLanguages.games.map((va, index) => (
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
                            <h3>Show(s):</h3>
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
                            <h3>Movie(s):</h3>
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

          <section className="description-box learn-box group-12">
            <div className="text">
              <h2 className="uncial">
                Learn More:{" "} 
                <a 
                  href={character?.learnMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="learn-more"
                >
                  {character?.learnMore}
                </a>
              </h2>
              {/*<span className="desc-text"></span>*/}
            </div>
          </section>
	  </section>
  )
}

export default CharacterTraits

/*
<section className="text">
          <h2 className="uncial">Level: <span className="level reg-font"></span></h2>
          <h2 className="uncial">School: <span className="school reg-font"></span></h2>
          <h2 className="uncial">Description: <span className="description reg-font"></span></h2>
          <ul className="descript-slot reg-font"></ul>
          <h2 className="uncial">Higher Level: <span className="high-level reg-font"></span></h2>
          <ul className="high-level-descript-slot reg-font"></ul>
          <h2 className="uncial">Attack Type: <span className="attack-type reg-font"></span></h2>
          <h2 className="uncial">Damage Type: <span className="damage-type reg-font"></span></h2>
          <h2 className="uncial">Damage/Heal at Slot Level: <span className="reg-font"></span></h2>
          <ul className="damage-heal-slot reg-font"></ul>
          <h2 className="uncial">Casting Time: <span className="cast-time reg-font"></span></h2>
          <h2 className="uncial">Range: <span className="range reg-font"></span></h2>
          <h2 className="uncial">Components: <span className="one-comp reg-font"></span></h2>
          <ul className="components reg-font"></ul>
          <h2 className="uncial">Duration: <span className="duration reg-font"></span></h2>
          <h2 className="uncial">Concentration: <span className="concentration reg-font"></span></h2>
          <h2 className="uncial">Ritual: <span className="ritual reg-font"></span></h2>
          <h2 className="uncial">Material: <span className="material reg-font"></span></h2>
          <h2 className="uncial">Class(es): <span className="one-className reg-font"></span></h2>
          <ul className="className-list reg-font"></ul>
          <h2 className="uncial">Subclass(es): <span className="one-subclass reg-font"></span></h2>
          <ul className="subclass-list reg-font"></ul>
        </section>
*/