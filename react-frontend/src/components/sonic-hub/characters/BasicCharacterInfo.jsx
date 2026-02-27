import "../../../css/sonic-hub/characters.css"
import CharacterCarousel from "./char-components/basic-char-info/CharacterCarousel";

const BasicCharacterInfo = ({ character }) => {
  if (!character) return null;

  return (
    <section className="basic-info">
		<section className="text">
            <h2 className="char-name russo-one">{character?.name || "Name"}</h2>

			<div className="text info-text">
				{/* or {character?.images?.modern[0]?.img} */}
				{/*<img className="char-pic" src={character?.images?.modern[0]?.img} alt="Character Picture"/> */}
				<CharacterCarousel character={character} />
				{/*Picture captions*/}

				<h2 className="russo-one-binfo">First Appearance: <span className="first-appearance exo-2-binfo">{character?.firstAppearance?.alt?.name || character?.firstAppearance?.name}</span></h2>
				<h2 className="russo-one-binfo">Age: <span className="age exo-2-binfo">{character?.age}</span></h2>
				<h2 className="russo-one-binfo">Birthplace: <span className="birthplace exo-2-binfo">{character?.birthplace}</span></h2>
				<h2 className="russo-one-binfo">Species: <span className="species exo-2-binfo">{character?.species}</span></h2>

				<div className="food-area">
					{/* If only current exists OR both exist */}
					<h2 className="russo-one-binfo">Favorite Food:{" "} 
						{(character?.favoriteFood?.length === 1) && (
							<span className="favorite-food exo-2-binfo">{character?.favoriteFood[0]}</span>
						)}
					</h2>

					{/* Only show toggle section if both current and original exist */}
					{(character?.favoriteFood?.length > 1) && (
						<ul className="fav-food-slot exo-2-binfo">
							{character?.favoriteFood.map((food, index) => (
								<li key={index}>{food}</li>
							))}
						</ul>
					)}
				</div>
				{/*<h2 className="uncial">Favorite Food: <span className="favorite-food reg-font">{character?.favoriteFood}</span></h2>*/}
				{/*<ul className="fav-food-slot reg-font">{character?.favoriteFood}</ul>*/}


				<h2 className="russo-one-binfo">Gender: <span className="gender exo-2-binfo">{character?.gender}</span></h2>


				{/* Code that says that if this property exists in the character searched, then show it.
				 Otherwise, if property not found then it doesn't show anything */}
				{character?.fur && (
					<h2 className="fur-toggle russo-one-binfo">Fur: <span className="fur exo-2-binfo">{character?.fur}</span></h2>
				)}

				{/*<h2 className="uncial fur-toggle">Fur: <span className="fur reg-font">{character?.fur || "Unknown"}</span></h2>*/}
				
				{character?.skin && (
					<div className="skin-area">
						{/* If only current exists OR both exist */}
						<h2 className="russo-one-binfo sk-togg">Skin:{" "} 
							{!character?.skin?.original && (
								<span className="skin exo-2-binfo">{character?.skin?.current}</span>
							)}
						</h2>

						{/* Only show toggle section if both current and original exist */}
						{(character?.skin?.current && character?.skin?.original) && (
							<div className="skin-toggle">
								<h4 className="russo-one">Current: <span className="skin-current exo-2-binfo">{character?.skin?.current}</span></h4>
								<h4 className="russo-one">Original: <span className="skin-original exo-2-binfo">{character?.skin?.original}</span></h4>
							</div>
						)}
					</div>
				)}

				<h2 className="russo-one-binfo">Eye Color: <span className="eyes exo-2-binfo">{character?.eyeColor}</span></h2>

				{character?.hair && (
					<h2 className="russo-one-binfo hair-toggle">Hair: <span className="hair exo-2-binfo">{character?.hair}</span></h2>
				)}

				{character?.colorScheme && (
					<h2 className="russo-one-binfo c-scheme-toggle">Color Scheme: <span className="c-scheme exo-2-binfo">{character?.colorScheme}</span></h2>
				)}

				<h2 className="russo-one-binfo">Height: <span className="height exo-2-binfo">{character?.height}</span></h2>
				<h2 className="russo-one-binfo">Weight: <span className="weight exo-2-binfo">{character?.weight}</span></h2>
				<h2 className="russo-one-binfo">Canon?: <span className="canon exo-2-binfo">{character?.canon}</span></h2>

			
				<h2 className="russo-one-binfo">Alignment:{" "}
					{(character?.alignment?.morality && character?.alignment?.role) && (
						<span className="alignment exo-2-binfo">{`${character?.alignment?.morality} (${character?.alignment?.role})`}</span>
					)}
				</h2>
				{/*<h2 className="uncial">Alignment: <span className="canon reg-font">{`${character?.alignment?.role}, ${character?.alignment?.morality}`}</span></h2>*/}

				{character?.fromIDW && (
					<h2 className="russo-one-binfo idw-toggle">From IDW Comics?: <span className="from-idw exo-2-binfo">{character?.fromIDW}</span></h2>
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