import "../../css/characters.css"
import Quote from "./char-components/char-traits/group1/Quote";
import Description from "./char-components/char-traits/group2/Description";
import Preferences from "./char-components/char-traits/group3/Preferences";
import Weaknesses from "./char-components/char-traits/group4/Weaknesses";
import CharacterIdentity from "./char-components/char-traits/group5/CharacterIdentity";
import CharacterConnections from "./char-components/char-traits/group6/CharacterConnections";
import Abilities from "./char-components/char-traits/group7/Abilities";
import CreatorAppearance from "./char-components/char-traits/group8/CreatorAppearance";
import EnglishVA from "./char-components/char-traits/group9/EnglishVA";
import JapaneseVA from "./char-components/char-traits/group10/JapaneseVA";
import OtherLangVA from "./char-components/char-traits/group11/OtherLangVA";
import LearnMore from "./char-components/char-traits/group12/LearnMore";

const CharacterTraits = ({ character }) => {
  if (!character) return null;

  return (
    <section className="char-traits">
          {/* */}
          <Quote character={character} />
          
          {/* */}
          <Description character={character} />

          {/* */}
          <Preferences character={character} />

          {/* */}
          <Weaknesses weaknesses={character?.weaknesses} />

          {/*  */}
          <CharacterIdentity character={character} />
          
          {/*  */}
          <CharacterConnections character={character} />

          {/* */}
          <Abilities abilities={character?.abilities} />

          {/* // Renders character creators and media appearances. */}
          <CreatorAppearance character={character} />
          
          {/* Render the English VA section if English data exists */}
          <EnglishVA english={character?.portrayedBy?.english} />

          {/* Render the Japanese VA section if any Japanese data exists */}
          <JapaneseVA japanese={character?.portrayedBy?.japanese} />

          {/* Render the Other Language VA section if any Other Language data exists */}
          <OtherLangVA languages={character?.portrayedBy?.otherLanguages} />

          {/* */}
          <LearnMore character={character} />
	  </section>
  )
}

export default CharacterTraits

/*
 // Determine the modifier class
  const cardClass = 
    cardCount === 1 ? "one-card" : 
    cardCount === 2 ? "two-cards" : 
    cardCount === 3 ? "three-cards": ""; // default (no modifier) if 0 or more than 3
*/

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

/*
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
                </div>
            </div>
          </section>

          <WeaknessesSection weaknesses={character?.weaknesses} />

          <CharacterIdentity character={character} />
          
          <CharacterConnections character={character} />

          <Powers abilities={character?.abilities} />

          <CreatorAppearance character={character} />
          
          <EnglishVASection english={character?.portrayedBy?.english} />

          <JapaneseVASection japanese={character?.portrayedBy?.japanese} />

          <OtherLangVASection languages={character?.portrayedBy?.otherLanguages} />

          <LearnMoreSection character={character} />
	  </section>
*/