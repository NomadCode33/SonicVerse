import React, { useState, useEffect } from "react";

// No fallback or RENDER_BASE needed here anymore
// relative /api/... path works in both environments:
// - locally: Vite proxy forwards to localhost:8000
// - on Render: Express serves frontend and API on the same port directly

const VARIANTS = {
  characters: {
    // CHANGED: was hardcoded Render URL, now relative path works everywhere
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

  // CHANGED: plain fetch with relative path replaces the old fetchWithFallback
  // warms up the Express server on component mount
  useEffect(() => {
    fetch(apiUrl).catch(() => {});
  }, [apiUrl]);

  // CHANGED: plain fetch with relative path replaces the old fetchWithFallback
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

  const handleClick = async () => {
    if (search.length < 2) {
      setNotFound("Please enter at least 2 characters.");
      setCharacter(null);
      return;
    }

    try {
      const { searchCharacter } = await import("../../../utils/sonic-hub/charApi.js");
      // CHANGED: now passes apiUrl so charApi knows which endpoint to hit
      const charData = await searchCharacter(search, apiUrl);
      setCharacter(charData);
      setNotFound("");
    } catch (err) {
      setCharacter(null);
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
                      try {
                        const { searchCharacter } = await import("../../../utils/sonic-hub/charApi.js");
                        // CHANGED: now passes apiUrl so charApi knows which endpoint to hit
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
      </section>

      <h3 id="characterNotFound" className={`uncial ${notFound ? "show" : ""}`}>{notFound}</h3>
    </>
  );
};

export default SearchBox;

/*
Old Way: // If only want the tiles to not be clickable
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