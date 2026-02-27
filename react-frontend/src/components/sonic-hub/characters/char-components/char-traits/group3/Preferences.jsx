import "../../../../../../css/sonic-hub/characters.css";
import LikesSection from "./LikesSection";
import DislikesSection from "./DislikesSection";

const Preferences = ({ character }) => {
  const likes = character?.likes ?? [];
  const hasLikes = likes.length > 0;

  const dislikes = character?.dislikes ?? [];
  const hasDislikes = dislikes.length > 0;

  const shouldRenderContainer = hasLikes || hasDislikes;

  if (!shouldRenderContainer) return null;

  // Count and assign class
  const cardCount = [hasLikes, hasDislikes].filter(Boolean).length;
  const countClass =
    cardCount === 1 ? "one-card" :
    cardCount === 2 ? "two-cards" :
    cardCount === 3 ? "three-cards" : "";

  return (
    <section className={`card-container group-3 ${countClass}`}>
      <LikesSection likes={likes} />

      <DislikesSection dislikes={dislikes} />
    </section>
  )
}

export default Preferences

/*
  const likes = character?.likes ?? [];
  const hasLikes = likes.length > 0;

  const dislikes = character?.dislikes ?? [];
  const hasDislikes = dislikes.length > 0;

  const shouldRenderContainer = hasLikes || hasDislikes;

  if (!shouldRenderContainer) return null;
*/

/*
{shouldRenderContainer && (
            <section className="card-container group-3">
              <LikesSection likes={likes} />

              <DislikesSection dislikes={dislikes} />
            </section>
          )}
*/

/*
// Old Way
{shouldRenderContainer && (
            <section className="card-container group-3">
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
            </section>
          )}
*/

/*
// Older Way
<section className="card-container group-3">
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
          </section>
*/