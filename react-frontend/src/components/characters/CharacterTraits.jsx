import "../../css/characters.css"

const CharacterTraits = ({ character }) => {
  if (!character) return null;

  return (
    <section className="char-traits">
          <section className="description-box">
            <div className="text">
              <h2 className="uncial">Description: <span className="description"></span></h2>
              <span className="desc-text">{character?.description}</span>
            </div>
          </section>

          <section className="description-box quote-box">
            <div className="text">
              <h2 className="uncial">Quote: <span className="quote"></span></h2>
              <span className="desc-text">{character?.quote}</span>
            </div>
          </section>

          <section className="card-container">
            <div className="card-content preferences">
                <div className="text">
                  <h2 className="uncial">Likes: <span className="likes"></span></h2>
                  <span className="desc-text">{character?.likes}</span>
                  {/*<ul className="likes-slot reg-font">{character?.likes}</ul>*/}
                </div>
            </div>

            <div className="card-content preferences">
                <div className="text">
                  <h2 className="uncial">Dislikes: <span className="dislikes"></span></h2>
                  <span className="desc-text">{character?.dislikes}</span>
                </div>
            </div>

          
          </section>

          <section className="description-box weakness-box">
            <div className="text">
              <h2 className="uncial">Weaknesses: <span className="weaknesses"></span></h2>
              <span className="desc-text">{character?.weaknesses}</span>
            </div>
          </section>

          <section className="card-container">
            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Attire: <span className="attire"></span></h2>
                  <span className="desc-text">{character?.attire?.current}</span>
                  <ul className="attire-slot reg-font"></ul>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Nicknames: <span className="nicknames"></span></h2>
                  <span className="desc-text">{character?.nicknames}</span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Transformations: <span className="transformations"></span></h2>
                  <span className="desc-text">{character?.transformations?.name}</span>
                </div>
            </div>
          </section>

          <section className="card-container">
            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Skills: <span className="skills"></span></h2>
                  <span className="desc-text">{character?.abilities?.skills}</span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Techniques: <span className="techniques"></span></h2>
                  <span className="desc-text">{character?.abilities?.techniques?.name}</span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Ability Type: <span className="ability-type"></span></h2>
                  <span className="desc-text">{character?.abilities?.abilityType?.name}</span>
                </div>
            </div>
          </section>

          <section className="card-container">
            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Affiliation: <span className="affiliation"></span></h2>
                  <span className="desc-text">{character?.affiliation}</span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Character Theme(s): <span className="char-themes"></span></h2>
                  <span className="desc-text">{character?.characterThemes?.song}</span>
                </div>
            </div>

            <div className="card-content relatives-toggle">
                <div className="text">
                  <h2 className="uncial">Relatives: <span className="relatives"></span></h2>
                  <span className="desc-text">{character?.relatives?.name || "No Relatives"}</span>
                </div>
            </div>
          </section>

          <section className="card-container">
            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Real World Creators: <span className="description"></span></h2>
                  <h3 className="uncial creator-toggle">Creator(s): <span className="creators"></span></h3>
                  <ul className="creator-slot creator-toggle reg-font">{character?.realWorldDesigners?.creators?.name}</ul>
                  <h3 className="uncial artist-toggle">Artists(s): <span className="artists"></span></h3>
                  <ul className="artist-slot artist-toggle reg-font">{character?.realWorldDesigners?.artists?.name}</ul>
                  <span className="desc-text"></span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Game Appearances: <span className="description"></span></h2>
                  <span className="desc-text">{character?.gameAppearances}</span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Appearances in other media: <span className="description"></span></h2>
                  <span className="desc-text">{character?.otherMedia}</span>
                </div>
            </div>
          </section>

          <section className="card-container">
            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Description: <span className="description"></span></h2>
                  <span className="desc-text"></span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Description: <span className="description"></span></h2>
                  <span className="desc-text"></span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Description: <span className="description"></span></h2>
                  <span className="desc-text"></span>
                </div>
            </div>
          </section>

          <section className="card-container">
            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Description: <span className="description"></span></h2>
                  <span className="desc-text"></span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Description: <span className="description"></span></h2>
                  <span className="desc-text"></span>
                </div>
            </div>

            <div className="card-content">
                <div className="text">
                  <h2 className="uncial">Description: <span className="description"></span></h2>
                  <span className="desc-text"></span>
                </div>
            </div>
          </section>

          <section className="description-box learn-box">
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
              <span className="desc-text"></span>
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