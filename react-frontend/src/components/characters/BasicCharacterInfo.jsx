import "../../css/characters.css"

const BasicCharacterInfo = ({ character }) => {
  if (!character) return null;

  return (
    <section className="basic-info">
		<section className="text">
            <h2 className="char-name bangers">{character?.name || "Name"}</h2>
		    <img className="char-pic" src={character?.images?.modern[0]?.img} alt="Character Picture"/> {/* or {character?.images?.modern[0]?.img} */}
			{/*Picture captions*/}

            <h2 className="uncial">First Appearance: <span className="first-appearance reg-font">{character?.firstAppearance?.alt?.name || character?.firstAppearance?.name}</span></h2>
            <h2 className="uncial">Age: <span className="age reg-font"></span></h2>
            <h2 className="uncial">Birthplace: <span className="birthplace reg-font"></span></h2>
			<h2 className="uncial">Species: <span className="species reg-font"></span></h2>
            <h2 className="uncial">Favorite Food: <span className="favorite-food reg-font"></span></h2>
			<ul className="fav-food-slot reg-font"></ul>
            <h2 className="uncial">Gender: <span className="gender reg-font"></span></h2>
			<h2 className="uncial fur-toggle">Fur: <span className="fur reg-font"></span></h2>
            <h2 className="uncial skin-toggle">Skin: <span className="skin reg-font"></span></h2>
            <h2 className="uncial">Eye Color: <span className="eyes reg-font"></span></h2>
            <h2 className="uncial hair-toggle">Hair: <span className="hair reg-font"></span></h2>
            <h2 className="uncial c-scheme-toggle">Color Scheme: <span className="c-scheme reg-font"></span></h2>
            <h2 className="uncial">Height: <span className="height reg-font"></span></h2>
            <h2 className="uncial">Weight: <span className="weight reg-font"></span></h2>
            <h2 className="uncial">Canon?: <span className="canon reg-font"></span></h2>
			<h2 className="uncial">Role & Morality: <span className="canon reg-font">{`${character?.alignment?.role}, ${character?.alignment?.morality}` || ""}</span></h2>
            <h2 className="uncial idw-toggle">From IDW Comics?: <span className="from-idw reg-font"></span></h2>
            <h2 className="uncial">Attire: <span className="attire reg-font"></span></h2>
            <ul className="attire-slot reg-font"></ul>
		</section>
	</section>
  )
}

export default BasicCharacterInfo

/*
<ul className="descript-slot reg-font"></ul>
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

*/