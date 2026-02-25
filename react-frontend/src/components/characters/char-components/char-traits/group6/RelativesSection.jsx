import "../../../../../css/characters.css";

const RelativesSection = ({ relatives }) => {
  if (!relatives || relatives.length === 0) return null;

  return (
    <div className="card-content relatives-toggle">
        <div className="text">
          <h2 className="russo-one">Relatives:</h2>

          <ul className="relatives-slot desc-text exo-2">
            {relatives.map((relative) => (
              <li key={relative.index}>{relative.name} ({relative.relationship})</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default RelativesSection

/*
// Old Way
const relatives = character?.relatives ?? [];
  const hasRelatives = relatives.length > 0;

{hasRelatives && (
                <div className="card-content relatives-toggle">
                    <div className="text">
                      <h2 className="uncial">Relatives:</h2>

                      <ul className="relatives-slot desc-text">
                        {relatives.map((relative) => (
                          <li key={relative.index}>{relative.name} ({relative.relationship})</li>
                        ))}
                      </ul>
                    </div>
                </div>
              )}
*/

/*
// Older Way
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
*/