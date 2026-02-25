import "../../../../../css/characters.css";

const AbilityTypeSection = ({ abilityTypes }) => {
  if (!abilityTypes || abilityTypes.length === 0) return null; // hide if none

  return (
    <div className="card-content ability-type-toggle">
        <div className="text">
          <h2 className="russo-one">Ability Type:</h2>

          <ul className="ability-type-slot desc-text exo-2">
            {abilityTypes.map((type) => (
              <li key={type.index}>{type.name}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default AbilityTypeSection

/*

*/

/*
// Old Way
  const abilityTypes = character?.abilities?.abilityType ?? [];
  const hasAbilityTypes = abilityTypes.length > 0;

{hasAbilityTypes && (
              <div className="card-content ability-type-toggle">
                  <div className="text">
                    <h2 className="uncial">Ability Type:</h2>

                    <ul className="ability-type-slot desc-text">
                      {abilityTypes.map((type) => (
                        <li key={type.index}>{type.name}</li>
                      ))}
                    </ul>
                  </div>
              </div>
            )}

/*
// Older Way
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
*/