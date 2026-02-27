import "../../../../../../css/sonic-hub/characters.css";

const Quote = ({ character }) => {
  return (
    <section className="description-box quote-box quote-toggle group-1">
        <div className="text">
            <h2 className="russo-one">Quote:</h2>
            <div className="desc-text quote-info">
               <p className="char-quote desc-text exo-2"><span className="quote-quip">&quot;{character?.quote?.text}&quot;</span></p>
               <p className="quote-source desc-text exo-2">- {character?.quote?.char}, <span className="quote-from">{character?.quote?.from}</span></p>
            </div>
        </div>
    </section>
  )
}

export default Quote

/*
// Old Way
<section className="description-box quote-box quote-toggle group-1">
            <div className="text">
              <h2 className="uncial">Quote:</h2>
              <div className="desc-text quote-info">
                <p className="char-quote desc-text reg-font"><span className="quote-quip">&quot;{character?.quote?.text}&quot;</span></p>
                <p className="quote-source desc-text reg-font">- {character?.quote?.char}, <span className="quote-from">{character?.quote?.from}</span></p>
              </div>
            </div>
          </section>
*/