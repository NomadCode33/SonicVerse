import React, { useState, useEffect } from "react";
import "../../../css/characters.css";
import { targetTypeMap } from "../../../utils/characters/config.js";
import { searchCharacter, initInitialize } from "../../../utils/characters/charApi.js";
import BasicCharacterInfo from "./BasicCharacterInfo.jsx";


const SearchBox = ({ setCharacter }) => { // <-- receive setCharacter as prop
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState("");
  const [showList, setShowList] = useState(false);
  const [characterList, setCharacterList] = useState([]);
  const [listLoading, setListLoading] = useState(false);

  // Warm up Render server
  useEffect(() => {
    fetch("https://sonicverse-y2s6.onrender.com/api/characters/")
      .catch(() => {});
  }, []);

  // Fetch the character list when the panel is opened for the first time
  useEffect(() => {
    if (showList && characterList.length === 0) {
      setListLoading(true);
      fetch("https://sonicverse-y2s6.onrender.com/api/characters/")
        .then((res) => res.json())
        .then((data) => {
          setCharacterList(data.results || []);
          setListLoading(false);
        })
        .catch(() => {
          setListLoading(false);
        });
    }
  }, [showList]);


  // Does the logic for errors and fetching character data
  const handleClick = async () => {
    if (search.length < 2) {
       setNotFound("Please enter at least 2 characters.");
       setCharacter(null);
       return;
    }

    try {
       const charData = await searchCharacter(search); // call function in spells.js
       setCharacter(charData); // <-- update lifted state
       setNotFound("");
    } catch (err) {
       setCharacter(null);
       setNotFound(`'${search}' not found`);
    }
  };

  // Pretty-print the index for tile labels
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
                    <h1 className="russo-one title">Character Directory</h1>
                    <p className="exo-2">Type in a character</p>
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
                                handleClick(); // calls your searchCharacter logic
                            }
                          }}
                        />
                        <button type="button" className="exo-2 src-btn" onClick={handleClick}>Get Character</button>
                    </div>

                    {/* 👇 NEW toggle button */}
                    {/* Toggle button lives inside the search box for proximity */}
                    <button
                      type="button"
                      className="exo-2 src-btn list-toggle-btn"
                      onClick={() => setShowList((prev) => !prev)}
                    >
                      {showList ? "« Hide Characters" : "Browse Characters »"}
                    </button>
                </div>
            </section>

            {/* 👇 NEW panel — only renders when showList is true */}
            {showList && (
              <div className="char-list-panel">
                {listLoading ? (
                  <p className="exo-2 list-loading">Loading characters…</p>
                ) : (
                  <div className="char-tile-grid">
                    {characterList.map((item) => (
                      <div
                        key={item.index}
                        className="exo-2 char-tile"
                      >
                        {formatName(item.index)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
      </section>

      <h3 id="characterNotFound" className={`uncial ${notFound ? "show" : ""}`}>{notFound}</h3>
    </>
  )
}

export default SearchBox



// Old Way
/*
<>
	   <section id="search-box">
           <div className="text-content">
               <h1 className="russo-one title">Character Directory</h1>
               <p className="exo-2">Type in a character</p>
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
                      handleClick(); // calls your searchCharacter logic
                   }
                 }}
               />
               <button type="button" className="exo-2 src-btn" onClick={handleClick}>Get Character</button>
           </div>
       </section>

	   <h3 id="characterNotFound" className={`uncial ${notFound ? "show" : ""}`}>{notFound}</h3>
	</>
*/

// Older Way
/*
return (
    <section id="search-box">
		<div className="text-content">
			<h1 className="uncial title">Spell Directory</h1>
			<p>Type in a spell</p>
			<input type="text" className="bar" defaultValue="" />
			<button type="button" className="src-btn">Get Character</button>
		</div>
	</section>
  )
*/
