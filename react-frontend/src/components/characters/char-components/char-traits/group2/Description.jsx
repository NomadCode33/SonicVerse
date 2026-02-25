import "../../../../../css/characters.css";

const Description = ({ character }) => {
  return (
    <section className="description-box desc-toggle group-2">
        <div className="text">
            <h2 className="russo-one">Description:</h2>
            <span className="desc-text exo-2">
              {character?.description?.[0]?.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </span>
        </div>
    </section>
  )
}

export default Description

/*
// Old Way

*/

/*
// Older Way
<section className="description-box desc-toggle group-2">
            <div className="text">
              <h2 className="uncial">Description:</h2>
              <span className="desc-text reg-font">
                {character?.description?.[0]?.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </span>
              {//<span className="desc-text reg-font">{character?.description}</span>}
            </div>
          </section>
*/