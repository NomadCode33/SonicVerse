import "../../../../../css/characters.css";

const Weaknesses = ({ weaknesses }) => {
  if (!weaknesses || weaknesses.length === 0) return null;

  return (
    <section className="description-box weakness-box weakness-toggle group-4">
        <div className="text">
            <h2 className="russo-one">Weaknesses:</h2>

            <ul className="weaknesses-slot desc-text exo-2">
              {weaknesses.map((weakness, index) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
        </div>
    </section>
  )
}

export default Weaknesses

/*

*/

/*
// Old Way
const weaknesses = character?.weaknesses ?? [];
const hasWeaknesses = weaknesses.length > 0;

{hasWeaknesses && (
            <section className="description-box weakness-box weakness-toggle group-4">
              <div className="text">
                <h2 className="uncial">Weaknesses:</h2>

                <ul className="weaknesses-slot desc-text">
                  {weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}
*/

/*
// Older Way
<section className="description-box weakness-box weakness-toggle group-4">
            <div className="text">
              <h2 className="uncial">Weaknesses:</h2>

              <ul className="weaknesses-slot desc-text">
                {character?.weaknesses ? (
                  character.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))
                ) : (
                  <li>No Known Weaknesses</li>
                )}
              </ul>
              {//<span className="desc-text reg-font">{character?.weaknesses}</span>}
            </div>
          </section>
*/