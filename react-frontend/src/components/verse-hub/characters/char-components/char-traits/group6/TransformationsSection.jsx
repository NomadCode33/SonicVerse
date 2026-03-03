import "../../../../../../css/verse-hub/characters.css";

// Prepares and checks if the character has any transformations.
// It either removes the card content if there are no transformations to display
const TransformationsSection = ({ transformations }) => {
  // Don't render anything if there are no transformations
  // !transformation: if no transformations property exists at all, return undefined or null
  if (!transformations || transformations.length === 0) return null;

  return (
    <div className="card-content transform-toggle">
        <div className="text">
            <h2 className="russo-one">Transformations:</h2>
            <ul className="transformations-slot desc-text exo-2">
                {transformations.map((transformation) => (
                <li key={transformation.index}>{transformation.name}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TransformationsSection

/*
// Old Way
const transformations = character?.transformations;
const hasTransformations = transformations && transformations.length > 0;

{hasTransformations && (
    <div className="card-content transform-toggle">
    <div className="text">
        <h2 className="uncial">Transformations:</h2>
        <ul className="transformations-slot desc-text">
        {transformations.map((transformation) => (
            <li key={transformation.index}>{transformation.name}</li>
        ))}
        </ul>
    </div>
    </div>
)}
*/

/*
// Older Way
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
        {//<ul className="transformations-slot desc-text">{character?.transformations?.name}</ul>}
    </div>
</div>
*/