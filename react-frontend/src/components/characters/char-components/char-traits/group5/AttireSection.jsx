import "../../../../../css/characters.css";

const AttireSection = ({ current = [], original = []}) => {
  const hasAttire = current.length > 0 || original.length > 0;

  return (
    <div className="card-content attire-toggle">
        <div className="text">
            <h2 className="uncial">Attire:</h2>

            {/* If ONLY current exists */}
            {(current.length > 0 && original.length === 0) && (
                <ul className="attire-slot desc-text">
                  {current.map((attireItem, index) => (
                    <li key={index}>{attireItem}</li>
                  ))}
                </ul>
            )}

            {/* If BOTH current and original exist */}
            {(current.length > 0 && original.length > 0) && (
              <div className="attire-area desc-text">
                  <h3 className="uncial">Current:</h3>
                  <ul className="attire-current-slot">
                    {current.map((attireItem, index) => (
                      <li key={index}>{attireItem}</li>
                    ))}
                  </ul>

                  <h3 className="uncial">Original:</h3>
                  <ul className="attire-original-slot">
                    {original.map((attireItem, index) => (
                      <li key={index}>{attireItem}</li>
                    ))}
                  </ul>
              </div>
            )}
        </div>
    </div>
  )
}

export default AttireSection

/*
// Old Way
  const attireCurrent = character?.attire?.current ?? [];
  const attireOriginal = character?.attire?.original ?? [];
  const hasAttire = attireCurrent.length > 0 || attireOriginal.length > 0;

{hasAttire && (
                <div className="card-content attire-toggle">
                    <div className="text">
                      <h2 className="uncial">Attire:</h2>

                      {// If ONLY current exists }
                      {(attireCurrent.length > 0 && attireOriginal.length === 0) && (
                        <ul className="attire-slot desc-text">
                          {attireCurrent.map((attireItem, index) => (
                            <li key={index}>{attireItem}</li>
                          ))}
                          </ul>
                      )}

                      {// If BOTH current and original exist }
                      {(attireCurrent.length > 0 && attireOriginal.length > 0) && (
                        <div className="attire-area desc-text">
                          <h3 className="uncial">Current:</h3>
                          <ul className="attire-current-slot">
                            {attireCurrent.map((attireItem, index) => (
                              <li key={index}>{attireItem}</li>
                            ))}
                          </ul>

                          <h3 className="uncial">Original:</h3>
                          <ul className="attire-original-slot">
                            {attireOriginal.map((attireItem, index) => (
                              <li key={index}>{attireItem}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                </div>
              )}
*/

/*
// Older Way
            <div className="card-content attire-toggle">
                <div className="text">
                  <h2 className="uncial">Attire:</h2>

                  {!character?.attire?.original && (
                    <ul className="attire-slot desc-text">
                      {character?.attire?.current?.map((attireItem, index) => (
                        <li key={index}>{attireItem}</li>
                      ))}
                      </ul>
                  )}

                  {(character?.attire?.current && character?.attire?.original) && (
                    <div className="attire-area desc-text">
                      <h3 className="uncial">Current:</h3>
                      <ul className="attire-current-slot">
                        {character?.attire?.current?.map((attireItem, index) => (
                          <li key={index}>{attireItem}</li>
                        ))}
                      </ul>

                      <h3 className="uncial">Original:</h3>
                      <ul className="attire-original-slot">
                        {character?.attire?.original?.map((attireItem, index) => (
                          <li key={index}>{attireItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
            </div>
*/