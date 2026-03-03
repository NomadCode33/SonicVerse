import "../../../../../../css/verse-hub/characters.css";

const LikesSection = ({ likes }) => {
  if (!likes || likes.length === 0) return null;

  return (
    <div className="card-content preferences likes-toggle">
        <div className="text">
            <h2 className="russo-one">Likes:</h2>

            <ul className="likes-slot desc-text exo-2">
              {likes.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default LikesSection

/*
// Old Way
  const likes = character?.likes ?? [];
  const hasLikes = likes.length > 0;

{hasLikes && (
              <div className="card-content preferences likes-toggle">
                  <div className="text">
                    <h2 className="uncial">Likes:</h2>

                    <ul className="likes-slot desc-text reg-font">
                      {likes.map((interest, index) => (
                        <li key={index}>{interest}</li>
                      ))}
                    </ul>
                  </div>
              </div>
            )}
*/

/*
// Older Way
<div className="card-content preferences likes-toggle">
                <div className="text">
                  <h2 className="uncial">Likes:</h2>

                    {character?.likes && (
                      <ul className="likes-slot desc-text reg-font">
                        {character?.likes?.map((like, index) => (
                          <li key={index}>{like}</li>
                        ))}
                      </ul>
                    )}
                  {//<span className="desc-text reg-font">{character?.likes}</span>}
                  {//<ul className="likes-slot reg-font">{character?.likes}</ul>}
                </div>
            </div>
*/