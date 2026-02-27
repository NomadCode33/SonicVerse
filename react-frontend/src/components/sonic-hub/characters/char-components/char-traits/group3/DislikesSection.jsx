import "../../../../../../css/sonic-hub/characters.css";

const DislikesSection = ({ dislikes }) => {
  if (!dislikes || dislikes.length === 0) return null;

  return (
    <div className="card-content preferences dislikes-toggle">
        <div className="text">
            <h2 className="russo-one">Dislikes:</h2>

            <ul className="dislikes-slot desc-text exo-2">
              {dislikes.map((aversion, index) => (
                <li key={index}>{aversion}</li>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default DislikesSection

/*
// Old Way
  const dislikes = character?.dislikes ?? [];
  const hasDislikes = dislikes.length > 0;

{hasDislikes && (
              <div className="card-content preferences dislikes-toggle">
                  <div className="text">
                    <h2 className="uncial">Dislikes:</h2>

                    <ul className="dislikes-slot desc-text">
                      {dislikes.map((aversion, index) => (
                        <li key={index}>{aversion}</li>
                      ))}
                    </ul>
                  </div>
              </div>
            )}  
*/

/*
// Older Way
<div className="card-content preferences dislikes-toggle">
                <div className="text">
                  <h2 className="uncial">Dislikes:</h2>

                    {character?.dislikes && (
                      <ul className="dislikes-slot desc-text">
                        {character?.dislikes?.map((dislike, index) => (
                          <li key={index}>{dislike}</li>
                        ))}
                      </ul>
                    )}
                  {//<span className="desc-text">{character?.dislikes}</span>}
                </div>
            </div>
*/