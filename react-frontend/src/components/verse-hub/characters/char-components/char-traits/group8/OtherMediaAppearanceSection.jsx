import "../../../../../../css/verse-hub/characters.css";

const OtherMediaAppearanceSection = ({ media }) => {
  if (!media || media.length === 0) return null;

  return (
    <div className="card-content">
        <div className="text">
          <h2 className="russo-one">Appearances in other media:</h2>
                      
          <ul className="other-media-slot desc-text exo-2">
            {media.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default OtherMediaAppearanceSection

/*
// Old Way
  const otherMedia = character?.otherMedia ?? [];
  const hasOtherMedia = otherMedia.length > 0;

{// ================= Other Media ================= }
              {hasOtherMedia && (
                <div className="card-content">
                    <div className="text">
                      <h2 className="uncial">Appearances in other media:</h2>
                      
                      <ul className="other-media-slot desc-text">
                        {otherMedia.map((media, index) => (
                          <li key={index}>{media}</li>
                        ))}
                      </ul>
                    </div>
                </div>
              )}
*/

/*
// Older Way
{// Game & Other Media Appearances }
{(character?.appearances?.games?.length > 0 ||
  character?.appearances?.otherMedia?.length > 0) && (
  <div className="card-content appearances-toggle">
    <div className="text">
      <h2 className="uncial">Appearances:</h2>

      {// Games }
      {character?.appearances?.games?.length > 0 && (
        <div className="appearances-area desc-text">
          <h3 className="uncial">Games:</h3>
          <ul className="appearances-slot">
            {character.appearances.games.map((game, index) => (
              <li key={index} className="appearances-entry">
                {game}
              </li>
            ))}
          </ul>
        </div>
      )}

      {// Other Media }
      {character?.appearances?.otherMedia?.length > 0 && (
        <div className="appearances-area desc-text">
          <h3 className="uncial">Other Media:</h3>
          <ul className="appearances-slot">
            {character.appearances.otherMedia.map((media, index) => (
              <li key={index} className="appearances-entry">
                {media}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
)}

*/