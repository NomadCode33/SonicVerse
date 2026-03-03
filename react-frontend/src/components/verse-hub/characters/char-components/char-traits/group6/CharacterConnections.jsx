import "../../../../../../css/verse-hub/characters.css";
import AffiliationsSection from "./AffiliationsSection";
import RelativesSection from "./RelativesSection";
import TransformationsSection from "./TransformationsSection";

const CharacterConnections = ({ character }) => {
  const affiliations = character?.affiliations ?? [];
  const relatives = character?.relatives ?? [];
  const transformations = character?.transformations ?? [];

  // Add these — derive booleans from the arrays
  const hasAffiliations = affiliations.length > 0;
  const hasRelatives = relatives.length > 0;
  const hasTransformations = transformations.length > 0;

  const shouldRenderContainer = hasAffiliations || hasRelatives || hasTransformations;

  if (!shouldRenderContainer) return null;

  // Count and assign class
  const cardCount = [hasAffiliations, hasRelatives, hasTransformations].filter(Boolean).length;
  const countClass =
    cardCount === 1 ? "one-card" :
    cardCount === 2 ? "two-cards" :
    cardCount === 3 ? "three-cards" : "";

  return (
    <section className={`card-container group-6 ${countClass}`}>
      <AffiliationsSection affiliations={affiliations} />

      <RelativesSection relatives={relatives} />

      {/* Render transformations card only if character has transformations */}
      <TransformationsSection transformations={transformations} />
    </section>
  )
}

export default CharacterConnections

/*
const affiliations = character?.affiliation ?? [];
  const hasAffiliations = affiliations.length > 0;

  const relatives = character?.relatives ?? [];
  const hasRelatives = relatives.length > 0;

  const transformations = character?.transformations ?? [];
  const hasTransformations = transformations.length > 0;

  // Only render container if at least one section has content
  const shouldRenderContainer = hasAffiliations || hasRelatives || hasTransformations;

  if (!shouldRenderContainer) return null;
*/

/*
// Old Way
const affiliations = character?.affiliations ?? [];
const relatives = character?.relatives ?? [];
const transformations = character?.transformations ?? [];

const shouldRenderContainer =
  affiliations.length > 0 ||
  relatives.length > 0 ||
  transformations.length > 0;


{shouldRenderContainer && (
            <section className="card-container group-6">
              <AffiliationsSection affiliations={character?.affiliation} />

              <RelativesSection relatives={character?.relatives} />

              {// Render transformations card only if character has transformations}
              <TransformationsSection transformations={character?.transformations} />
            </section>
          )}
*/

/*
// Older Way
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
                  {// <ul className="desc-text">{character?.affiliation}</ul>}
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

            {// Render transformations card only if character has transformations }
            <TransformationsSection transformations={character?.transformations} />
          </section>
*/
