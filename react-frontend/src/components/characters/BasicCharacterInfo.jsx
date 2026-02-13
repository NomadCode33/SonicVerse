import "../../css/characters.css"
import CharacterCarousel from "./char-components/basic-char-info/CharacterCarousel";

const BasicCharacterInfo = ({ character }) => {
  if (!character) return null;

  return (
    <section className="basic-info">
		<section className="text">
            <h2 className="char-name bangers">{character?.name || "Name"}</h2>

			<div className="text info-text">
				{/* or {character?.images?.modern[0]?.img} */}
				{/*<img className="char-pic" src={character?.images?.modern[0]?.img} alt="Character Picture"/> */}
				<CharacterCarousel character={character} />
				{/*Picture captions*/}

				<h2 className="uncial">First Appearance: <span className="first-appearance reg-font">{character?.firstAppearance?.alt?.name || character?.firstAppearance?.name}</span></h2>
				<h2 className="uncial">Age: <span className="age reg-font">{character?.age}</span></h2>
				<h2 className="uncial">Birthplace: <span className="birthplace reg-font">{character?.birthplace}</span></h2>
				<h2 className="uncial">Species: <span className="species reg-font">{character?.species}</span></h2>

				<div className="food-area">
					{/* If only current exists OR both exist */}
					<h2 className="uncial">Favorite Food:{" "} 
						{(character?.favoriteFood?.length === 1) && (
							<span className="favorite-food reg-font">{character?.favoriteFood[0]}</span>
						)}
					</h2>

					{/* Only show toggle section if both current and original exist */}
					{(character?.favoriteFood?.length > 1) && (
						<ul className="fav-food-slot reg-font">
							{character?.favoriteFood.map((food, index) => (
								<li key={index}>{food}</li>
							))}
						</ul>
					)}
				</div>
				{/*<h2 className="uncial">Favorite Food: <span className="favorite-food reg-font">{character?.favoriteFood}</span></h2>*/}
				{/*<ul className="fav-food-slot reg-font">{character?.favoriteFood}</ul>*/}


				<h2 className="uncial">Gender: <span className="gender reg-font">{character?.gender}</span></h2>


				{/* Code that says that if this property exists in the character searched, then show it.
				 Otherwise, if property not found then it doesn't show anything */}
				{character?.fur && (
					<h2 className="uncial fur-toggle">Fur: <span className="fur reg-font">{character?.fur}</span></h2>
				)}

				{/*<h2 className="uncial fur-toggle">Fur: <span className="fur reg-font">{character?.fur || "Unknown"}</span></h2>*/}
				
				{character?.skin && (
					<div className="skin-area">
						{/* If only current exists OR both exist */}
						<h2 className="uncial sk-togg">Skin:{" "} 
							{!character?.skin?.original && (
								<span className="skin reg-font">{character?.skin?.current}</span>
							)}
						</h2>

						{/* Only show toggle section if both current and original exist */}
						{(character?.skin?.current && character?.skin?.original) && (
							<div className="skin-toggle">
								<h4 className="uncial">Current: <span className="skin-current">{character?.skin?.current}</span></h4>
								<h4 className="uncial">Original: <span className="skin-original">{character?.skin?.original}</span></h4>
							</div>
						)}
					</div>
				)}

				<h2 className="uncial">Eye Color: <span className="eyes reg-font">{character?.eyeColor}</span></h2>

				{character?.hair && (
					<h2 className="uncial hair-toggle">Hair: <span className="hair reg-font">{character?.hair}</span></h2>
				)}

				{character?.colorScheme && (
					<h2 className="uncial c-scheme-toggle">Color Scheme: <span className="c-scheme reg-font">{character?.colorScheme}</span></h2>
				)}

				<h2 className="uncial">Height: <span className="height reg-font">{character?.height}</span></h2>
				<h2 className="uncial">Weight: <span className="weight reg-font">{character?.weight}</span></h2>
				<h2 className="uncial">Canon?: <span className="canon reg-font">{character?.canon}</span></h2>

			
				<h2 className="uncial">Alignment:{" "}
					{(character?.alignment?.morality && character?.alignment?.role) && (
						<span className="alignment reg-font">{`${character?.alignment?.morality} (${character?.alignment?.role})`}</span>
					)}
				</h2>
				{/*<h2 className="uncial">Alignment: <span className="canon reg-font">{`${character?.alignment?.role}, ${character?.alignment?.morality}`}</span></h2>*/}

				{character?.fromIDW && (
					<h2 className="uncial idw-toggle">From IDW Comics?: <span className="from-idw reg-font">{character?.fromIDW}</span></h2>
				)}

				<ul className="empty-slot reg-font"></ul>
			</div>
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