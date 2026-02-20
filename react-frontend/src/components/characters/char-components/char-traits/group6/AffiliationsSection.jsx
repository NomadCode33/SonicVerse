import "../../../../../css/characters.css";

const AffiliationsSection = ({ affiliations }) => {
  if (!affiliations || affiliations.length === 0) return null;

  return (
    <div className="card-content affiliation-toggle">
        <div className="text">
          <h2 className="uncial">Affiliation(s):</h2>

          <ul className="affiliation-slot desc-text">
            {affiliations.map((association, index) => (
              <li key={index}>{association}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default AffiliationsSection

/*
// Old Way
  const affiliations = character?.affiliation ?? [];
  const hasAffiliations = affiliations.length > 0;

{hasAffiliations && (
                <div className="card-content affiliation-toggle">
                    <div className="text">
                      <h2 className="uncial">Affiliation(s):</h2>

                      <ul className="affiliation-slot desc-text">
                        {affiliations.map((association, index) => (
                          <li key={index}>{association}</li>
                        ))}
                      </ul>
                      {// <ul className="desc-text">{character?.affiliation}</ul>}
                    </div>
                </div>
              )}
*/

/*
// Older Way
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
                  {//<ul className="desc-text">{character?.affiliation}</ul>}
                </div>
            </div>
*/