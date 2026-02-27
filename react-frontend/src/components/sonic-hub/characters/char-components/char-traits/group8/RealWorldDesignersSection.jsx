import "../../../../../../css/characters.css";

const RealWorldDesignersSection = ({ designers }) => {
  const creators = designers?.creators ?? [];
  const artists = designers?.artists ?? [];

  const hasCreators = creators.length > 0;
  const hasArtists = artists.length > 0;

  if (!hasCreators && !hasArtists) return null;

  return (
    <div className="card-content designer-toggle">
        <div className="text">
          <h2 className="russo-one">Real World Creators: <span className="description"></span></h2>
                      
          {/* Only creators */}
          {hasCreators && !hasArtists && (
            <div className="creator-art-area desc-text">
              <h3 className="inter">Creator(s):</h3>

              <ul className="creator-art-slot">
                {creators.map((creator, index) => (
                  <li key={index} className="creator-art-entry">
                    <h3 className="inter-600">
                      {creator.name}{" "}
                      {Object.values(creator.source).map((url, i) => (
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

                    <div className="creator-art-roles">
                      <h3 className="inter-500">Job(s):</h3>
                      <ul className="creator-art-role-slot exo-2">
                        {creator.job?.map((role, i) => (
                          <li key={i}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Only artists */}
          {hasArtists && !hasCreators && (
            <div className="creator-art-area desc-text">
              <h3 className="inter">Artist(s):</h3>

              <ul className="creator-art-slot">
                {artists.map((artist, index) => (
                  <li key={index} className="creator-art-entry">
                    <h3 className="inter-600">
                      {artist.name}{" "}
                      {Object.values(artist.source).map((url, i) => (
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

                    <div className="creator-art-roles">
                      <h3 className="inter-500">Job(s):</h3>
                      <ul className="creator-art-role-slot exo-2">
                        {artist.job?.map((role, i) => (
                          <li key={i}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
                      
          {/* Both creators and artists */}
          {hasCreators && hasArtists && (
            <div className="designer-area desc-text">

              {/* Creators */}
              <h3 className="inter">Creator(s):</h3>

              <ul className="creator">
                {creators.map((creator, index) => (
                  <li key={index} className="creator-entry">
                    <h3 className="inter-600">
                      {creator.name}{" "}
                      {Object.values(creator.source).map((url, i) => (
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

                    <div className="creator-roles">
                      <h3 className="inter-500">Job(s):</h3>
                      <ul className="creator-slot exo-2">
                        {creator.job?.map((role, i) => (
                          <li key={i}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Artists */}
              <h3 className="inter">Artist(s):</h3>
                          
              <ul className="artist">
                {artists.map((artist, index) => (
                  <li key={index} className="artist-entry">
                    <h3 className="inter-600">
                      {artist.name}{" "}
                      {Object.values(artist.source).map((url, i) => (
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

                    <div className="artist-roles">
                      <h3 className="inter-500">Job(s):</h3>
                      <ul className="artist-slot exo-2">
                        {artist.job?.map((role, i) => (
                          <li key={i}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
    </div>
  )
}

export default RealWorldDesignersSection

/*
// Old Way
{shouldRenderContainer && (
            <section className="card-container group-8">
               {// ================= Real World Designers ================= }
              {hasRealWorldDesigners && (
                <div className="card-content designer-toggle">
                    <div className="text">
                      <h2 className="uncial">Real World Creators: <span className="description"></span></h2>
                      
                      {// Only creators }
                      {hasCreators && !hasArtists && (
                        <div className="creator-art-area desc-text">
                          <h3 className="uncial">Creator(s):</h3>

                          <ul className="creator-art-slot">
                            {creators.map((creator, index) => (
                              <li key={index} className="creator-art-entry">
                                <h3 className="uncial">
                                  {creator.name}{" "}
                                  {Object.values(creator.source).map((url, i) => (
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

                                <div className="creator-art-roles">
                                  <h3 className="uncial">Job(s):</h3>
                                  <ul className="creator-art-role-slot">
                                    {creator.job?.map((role, i) => (
                                      <li key={i}>• {role}</li>
                                    ))}
                                  </ul>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {// Only artists }
                      {hasArtists && !hasCreators && (
                        <div className="creator-art-area desc-text">
                          <h3 className="uncial">Artist(s):</h3>

                          <ul className="creator-art-slot">
                            {artists.map((artist, index) => (
                              <li key={index} className="creator-art-entry">
                                <h3 className="uncial">
                                  {artist.name}{" "}
                                  {Object.values(artist.source).map((url, i) => (
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

                                <div className="creator-art-roles">
                                  <h3 className="uncial">Job(s):</h3>
                                  <ul className="creator-art-role-slot">
                                    {artist.job?.map((role, i) => (
                                      <li key={i}>• {role}</li>
                                    ))}
                                  </ul>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {// Both creators and artists }
                      {hasCreators && hasArtists && (
                        <div className="designer-area desc-text">

                          {// Creators }
                          <h3 className="uncial">Creator(s):</h3>

                          <ul className="creator-slot">
                            {creators.map((creator, index) => (
                              <li key={index} className="creator-entry">
                                <h3 className="uncial">
                                  {creator.name}{" "}
                                  {Object.values(creator.source).map((url, i) => (
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

                                <div className="creator-roles">
                                  <h3 className="uncial">Job(s):</h3>
                                  <ul className="creator-slot">
                                    {creator.job?.map((role, i) => (
                                      <li key={i}>• {role}</li>
                                    ))}
                                  </ul>
                                </div>
                              </li>
                            ))}
                          </ul>

                          {// Artists }
                          <h3 className="uncial">Artist(s):</h3>
                          
                          <ul className="artist-slot">
                            {artists.map((artist, index) => (
                              <li key={index} className="artist-entry">
                                <h3 className="uncial">
                                  {artist.name}{" "}
                                  {Object.values(artist.source).map((url, i) => (
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

                                <div className="artist-roles">
                                  <h3 className="uncial">Job(s):</h3>
                                  <ul className="artist-slot">
                                    {artist.job?.map((role, i) => (
                                      <li key={i}>• {role}</li>
                                    ))}
                                  </ul>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                </div>
              )}
*/


/*
// Older Way
<section className="card-container group-8">
              <div className="card-content designer-toggle">
                  <div className="text">
                    <h2 className="uncial">Real World Creators: <span className="description"></span></h2>
                    
                    {// Only creators}
                    {character?.realWorldDesigners?.creators?.length && !character?.realWorldDesigners?.artists?.length && (
                      <div className="creator-art-area desc-text">
                        <h3 className="uncial">Creator(s):</h3>

                        <ul className="creator-art-slot">
                          {character.realWorldDesigners.creators.map((creator, index) => (
                            <li key={index} className="creator-art-entry">
                              <h3 className="uncial">
                                {creator.name}{" "}
                                {Object.values(creator.source).map((url, i) => (
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
                              <div className="creator-art-roles">
                                <h3 className="uncial">Job(s):</h3>
                                <ul className="creator-art-role-slot">
                                  {(creator.job)?.map((role, i) => (
                                    <li key={i}>• {role}</li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {// Only artists }
                    {character?.realWorldDesigners?.artists?.length && !character?.realWorldDesigners?.creators?.length && (
                      <div className="creator-art-area desc-text">
                        <h3 className="uncial">Artist(s):</h3>

                        <ul className="creator-art-slot">
                          {character.realWorldDesigners.artists.map((artist, index) => (
                            <li key={index} className="creator-art-entry">
                              <h3 className="uncial">
                                {artist.name}{" "}
                                {Object.values(artist.source).map((url, i) => (
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
                              <div className="creator-art-roles">
                                <h3 className="uncial">Job(s):</h3>
                                <ul className="creator-art-role-slot">
                                  {(artist.job)?.map((role, i) => (
                                    <li key={i}>• {role}</li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {// Both creators and artists }
                    {character?.realWorldDesigners?.creators?.length && character?.realWorldDesigners?.artists?.length && (
                      <div className="designer-area desc-text">

                        {// Creators }
                        <h3 className="uncial">Creator(s):</h3>

                        <ul className="creator-slot">
                          {character.realWorldDesigners.creators.map((creator, index) => (
                            <li key={index} className="creator-entry">
                              <h3 className="uncial">
                                {creator.name}{" "}
                                {Object.values(creator.source).map((url, i) => (
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
                              <div className="creator-roles">
                                <h3 className="uncial">Job(s):</h3>
                                <ul className="creator-slot">
                                  {(creator.job)?.map((role, i) => (
                                    <li key={i}>• {role}</li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>

                        {// Artists }
                        <h3 className="uncial">Artist(s):</h3>
                        
                        <ul className="artist-slot">
                          {character.realWorldDesigners.artists.map((artist, index) => (
                            <li key={index} className="artist-entry">
                              <h3 className="uncial">
                                {artist.name}{" "}
                                {Object.values(artist.source).map((url, i) => (
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
                              <div className="artist-roles">
                                <h3 className="uncial">Job(s):</h3>
                                <ul className="artist-slot">
                                  {(artist.job)?.map((role, i) => (
                                    <li key={i}>• {role}</li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {// Fallback if neither exists }
                    {!character?.realWorldDesigners && (
                      <ul className="creator-art-slot">
                        <li className="no-va-li">No Creators or Artists Found</li>
                      </ul>
                    )}
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
*/