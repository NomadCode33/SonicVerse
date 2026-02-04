import React, { useState, useEffect } from "react";
import "../../css/characters.css";
import { targetTypeMap } from "../../utils/characters/config.js";
import { searchCharacter } from "../../utils/characters/charApi.js";
import BasicCharacterInfo from "./BasicCharacterInfo";


const SearchBox = ({ setCharacter }) => { // <-- receive setCharacter as prop
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState("");

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

  return (
    <>
	   <section id="search-box">
           <div className="text-content">
               <h1 className="uncial title">Spell Directory</h1>
               <p>Type in a spell</p>
               <input 
                 type="text" 
                 id="search-input"
                 className="bar"
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
               <button type="button" className="src-btn" onClick={handleClick}>Get Character</button>
           </div>
       </section>

	   <h3 id="characterNotFound" className={`uncial ${notFound ? "show" : ""}`}>{notFound}</h3>
	</>
  )
}

export default SearchBox


// Old Way
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
