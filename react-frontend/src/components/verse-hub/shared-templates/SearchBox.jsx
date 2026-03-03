import React, { useState, useEffect } from "react";

// No fallback or RENDER_BASE needed here anymore
// relative /api/... path works in both environments:
// - locally: Vite proxy forwards to localhost:8000
// - on Render: Express serves frontend and API on the same port directly

const VARIANTS = {
  characters: {
    // Was hardcoded Render URL, now relative path works everywhere
    apiUrl: "/api/characters/",
    title: "Character Directory",
    placeholder: "Type in a character",
    label: "Character"
  },
  // add new endpoints here as you build them out
  // apiUrl is all that needs to change per variant
  // transformations: {
  //   apiUrl: "/api/transformations/",
  //   title: "Transformation Directory",
  //   placeholder: "Type in a transformation",
  //   label: "Transformation"
  // },
};

const SearchBox = ({ variant = "characters", setCharacter }) => {
  const { apiUrl, title, placeholder, label } = VARIANTS[variant] ?? VARIANTS.characters;

  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState("");
  const [showList, setShowList] = useState(false);
  const [characterList, setCharacterList] = useState([]);
  const [listLoading, setListLoading] = useState(false);
  // holds the "did you mean?" suggestion if fuzzy match finds one
  const [suggestion, setSuggestion] = useState(null);

  // Plain fetch with relative path replaces the old fetchWithFallback
  // warms up the Express server on component mount
  useEffect(() => {
    fetch(apiUrl).catch(() => {});
  }, [apiUrl]);

  // Plain fetch with relative path replaces the old fetchWithFallback
  // fetches the full list when the browse panel is opened for the first time
  useEffect(() => {
    if (showList && characterList.length === 0) {
      setListLoading(true);
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setCharacterList(data.results || []);
          setListLoading(false);
        })
        .catch(() => {
          setListLoading(false);
        });
    }
  }, [showList, apiUrl]);

  // handles the "did you mean?" click
  // fills the search box with the suggestion AND auto searches
  const handleSuggestionClick = async (suggestedKey, suggestedIndex) => {
    setSearch(formatName(suggestedKey));
    // clear suggestion immediately when clicked
    setSuggestion(null);
    setNotFound("");

    try {
      const { searchCharacter } = await import("../../../utils/verse-hub/verseApi.js");
      const charData = await searchCharacter(suggestedIndex, apiUrl);
      setCharacter(charData);
    } catch (err) {
      setCharacter(null);
      setNotFound(`'${suggestedKey}' not found`);
    }
  };

  const handleClick = async () => {
    if (search.length < 2) {
      setNotFound("Please enter at least 2 characters.");
      // clear suggestion on new search attempt
      setSuggestion(null);
      setCharacter(null);
      return;
    }

    // clear previous suggestion on new search
    setSuggestion(null);

    try {
      const { searchCharacter } = await import("../../../utils/verse-hub/verseApi.js");
      // Now passes apiUrl so verseApi knows which endpoint to hit
      const charData = await searchCharacter(search, apiUrl);

      // check if verseApi returned a suggestion instead of real data
      if (charData.__suggestion) {
        setSuggestion(charData);
        setCharacter(null);
        setNotFound("");
        return;
      }

      setCharacter(charData);
      setNotFound("");
    } catch (err) {
      setCharacter(null);
      setSuggestion(null);
      setNotFound(`'${search}' not found`);
    }
  };

  const formatName = (index) =>
    index
      .split("-")
      .map((w) => w === "the" ? w : w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return (
    <>
      <section className="search-section">
        <section id="search-box">
          <div className="text-content">
            <h1 className="russo-one title">{title}</h1>
            <p className="exo-2">{placeholder}</p>
            <div className="search-row">
              <input
                type="text"
                id="search-input"
                className="exo-2 bar"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setNotFound("");
                  // clear suggestion when user starts typing again
                  setSuggestion(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleClick();
                  }
                }}
              />
              <button type="button" className="exo-2 src-btn" onClick={handleClick}>
                Get {variant === "characters" ? "Character" : "Result"}
              </button>
            </div>

            <button
              type="button"
              className="exo-2 src-btn list-toggle-btn"
              onClick={() => setShowList((prev) => !prev)}
            >
              {showList ? `Hide ${label} List` : `Browse ${label} List`}
            </button>
          </div>
        </section>

        {/* // panel stays mounted so CSS transition can animate in and out */}
        {/* showList controls the 'open' class which triggers the CSS slide animation */}
        <div className={`char-list-panel ${showList ? "open" : ""}`}>
          {listLoading ? (
            <p className="exo-2 list-loading">Loading Characters…</p>
          ) : (
            <div className="char-tile-grid">
              {characterList.map((item) => (
                <button
                  key={item.index}
                  type="button"
                  className="exo-2 char-tile"
                  onClick={async () => {
                    setSearch(formatName(item.index));
                    // clear suggestion when user picks from list
                    setSuggestion(null);
                    try {
                      const { searchCharacter } = await import("../../../utils/verse-hub/verseApi.js");
                      // Now passes apiUrl so verseApi knows which endpoint to hit
                      const charData = await searchCharacter(item.index, apiUrl);
                      setCharacter(charData);
                      setNotFound("");
                    } catch (err) {
                      setCharacter(null);
                      setNotFound(`'${item.index}' not found`);
                    }
                  }}
                >
                  {formatName(item.index)}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* shows either "not found" or "did you mean?" depending on the search result */}
      <h3 id="searchFeedback" className={`uncial ${notFound || suggestion ? "show" : ""}`}>
        {notFound && notFound}
        {suggestion && (
          <>
            Did you mean{" "}
            <button
              type="button"
              className="suggestion-btn"
              onClick={() => handleSuggestionClick(suggestion.suggestedKey, suggestion.suggestedIndex)}
            >
              {formatName(suggestion.suggestedKey)}
            </button>
            ?
          </>
        )}
      </h3>
    </>
  );
};

export default SearchBox;

/*
charNotFound & didyoumean
Old Way #1: separate elements with display block toggled by React
      {// "did you mean?" bubble — matches #characterNotFound styling via CSS }
      {// disappears immediately when clicked or when user starts typing }
      <h3 id="didYouMean" className={`uncial ${suggestion ? "show" : ""}`}>
        {suggestion && (
          <>
            Did you mean{" "}
            <button
              type="button"
              className="suggestion-btn"
              onClick={() => handleSuggestionClick(suggestion.suggestedKey, suggestion.suggestedIndex)}
            >
              {formatName(suggestion.suggestedKey)}
            </button>
            ?
          </>
        )}
      </h3>

      <h3 id="characterNotFound" className={`uncial ${notFound ? "show" : ""}`}>{notFound}</h3>
*/



/*
showList Old Way #2: // Allow the tiles to be clickable to search for that character
        {showList && (
          <div className="char-list-panel">
            {listLoading ? (
              <p className="exo-2 list-loading">Loading Characters…</p>
            ) : (
              <div className="char-tile-grid">
                {characterList.map((item) => (
                  <button
                    key={item.index}
                    type="button"
                    className="exo-2 char-tile"
                    onClick={async () => {
                      setSearch(formatName(item.index));
                      // clear suggestion when user picks from list
                      setSuggestion(null);
                      try {
                        const { searchCharacter } = await import("../../../utils/verse-hub/verseApi.js");
                        // Now passes apiUrl so verseApi knows which endpoint to hit
                        const charData = await searchCharacter(item.index, apiUrl);
                        setCharacter(charData);
                        setNotFound("");
                      } catch (err) {
                        setCharacter(null);
                        setNotFound(`'${item.index}' not found`);
                      }
                    }}
                  >
                    {formatName(item.index)}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
*/

/*
showList Old Way #1: // If only want the tiles to not be clickable
        {showList && (
          <div className="char-list-panel">
            {listLoading ? (
              <p className="exo-2 list-loading">Loading Characters…</p>
            ) : (
              <div className="char-tile-grid">
                {characterList.map((item) => (
                  <div key={item.index} className="exo-2 char-tile">
                    {formatName(item.index)}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
*/