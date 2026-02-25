import "../../../../../css/characters.css";

const TechniquesSection = ({ techniques }) => {
  if (!techniques || techniques.length === 0) return null; // hides entire section if no techniques

  return (
    <div className="card-content techniques-toggle">
        <div className="text">
          <h2 className="russo-one">Techniques:</h2>

          <ul className="techniques-slot desc-text exo-2">
            {techniques.map((technique) => (
              <li key={technique.index}>{technique.name}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default TechniquesSection

/*

*/

/*
// Old Way
  const techniques = character?.abilities?.moveTechniques ?? [];
  const hasTechniques = techniques.length > 0;

{hasTechniques && (
              <div className="card-content techniques-toggle">
                  <div className="text">
                    <h2 className="uncial">Techniques:</h2>

                    <ul className="techniques-slot desc-text">
                      {techniques.map((technique) => (
                        <li key={technique.index}>{technique.name}</li>
                      ))}
                    </ul>
                  </div>
              </div>
            )}
*/

/*
// Older Way
<div className="card-content techniques-toggle">
                  <div className="text">
                    <h2 className="uncial">Techniques:</h2>

                    <ul className="techniques-slot desc-text">
                      {character?.abilities?.moveTechniques ? (
                        character.abilities.moveTechniques.map((technique) => (
                          <li key={technique.index}>{technique.name}</li>
                        ))
                      ) : (
                        <li>No Known Techniques</li>
                      )}
                    </ul>
                  </div>
              </div>
*/