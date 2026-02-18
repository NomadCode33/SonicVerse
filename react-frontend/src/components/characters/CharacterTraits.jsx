import "../../css/characters.css"
import TransformationsSection from "./char-components/char-traits/group6/TransformationsSection";
import CreatorAppearance from "./char-components/char-traits/group8/CreatorAppearance";
import EnglishVASection from "./char-components/char-traits/group9/EnglishVASection";
import JapaneseVASection from "./char-components/char-traits/group10/JapaneseVASection";
import OtherLangVASection from "./char-components/char-traits/group11/OtherLangVASection";

const CharacterTraits = ({ character }) => {
  if (!character) return null;
  /*
  // Creators, gameappearance, and other media 
  const creators = character?.realWorldDesigners?.creators ?? [];
  const artists = character?.realWorldDesigners?.artists ?? [];

  const hasCreators = creators.length > 0;
  const hasArtists = artists.length > 0;
  const hasRealWorldDesigners = hasCreators || hasArtists;

  const gameAppearances = character?.gameAppearances ?? [];
  const hasGameAppearances = gameAppearances.length > 0;

  const otherMedia = character?.otherMedia ?? [];
  const hasOtherMedia = otherMedia.length > 0;

  // Only render the whole container if at least one section exists
  const shouldRenderContainer = hasRealWorldDesigners || hasGameAppearances || hasOtherMedia;*/

  return (
    <section className="char-traits">
          <section className="description-box quote-box quote-toggle group-1">
            <div className="text">
              <h2 className="uncial">Quote:</h2>
              <div className="desc-text quote-info">
                <p className="char-quote desc-text reg-font"><span className="quote-quip">&quot;{character?.quote?.text}&quot;</span></p>
                <p className="quote-source desc-text reg-font">- {character?.quote?.char}, <span className="quote-from">{character?.quote?.from}</span></p>
              </div>
            </div>
          </section>
          
          <section className="description-box desc-toggle group-2">
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

          <section className="card-container group-3">
            <div className="card-content preferences likes-toggle">
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

            <div className="card-content preferences dislikes-toggle">
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
                  {/*<span className="desc-text reg-font">{character?.nicknames}</span>*/}
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

          <section className="card-container group-6">
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

            {/* Render transformations card only if character has transformations */}
            <TransformationsSection transformations={character?.transformations} />
          </section>

          <section className="card-container skills-toggle group-7">
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

          {/* // Renders character creators and media appearances. */}
          <CreatorAppearance character={character} />
          
          {/* Render the English VA section if English data exists */}
          <EnglishVASection english={character?.portrayedBy?.english} />

          {/* Render the Japanese VA section if any Japanese data exists */}
          <JapaneseVASection japanese={character?.portrayedBy?.japanese} />

          {/* Render the Other Language VA section if any Other Language data exists */}
          <OtherLangVASection languages={character?.portrayedBy?.otherLanguages} />

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