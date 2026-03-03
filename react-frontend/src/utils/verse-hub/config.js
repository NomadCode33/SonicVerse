// Explicit nickname mappings for characters with unpredictable real names
// key = index, value = array of nickname variants to add to the map
const NICKNAME_ALIASES = {
  "doctor-eggman": ["eggman", 
    "robotnik", 
    "ivo", 
    "doctor robotnik", 
    "dr eggman", 
    "dr. eggman",
    "dr robotnik",
    "dr. robotnik"
  ],
  "miles-tails-prower": ["tails"],
  "amy-rose": ["rose", 
    "rosy the rascal", 
    "princess sally", 
    "sally"
  ],
  "shadow-the-hedgehog": ["ultimate life form", "the ultimate life form"],
  // add more here as needed e.g:
  // "some-character": ["nickname1", "nickname2"],
};

// Helper that adds nickname aliases for a given index to the targetMap
function applyNicknameAliases(rawIndex, targetMap) {
  const aliases = NICKNAME_ALIASES[rawIndex];
  if (!aliases) return; // no nicknames for this character, skip
  aliases.forEach(alias => {
    targetMap[alias] = rawIndex;
  });
}

// Now handles 3 different response shapes instead of just { results: [...] }
export async function targetTypeMap(url) {
  const res = await fetch(url);
  const data = await res.json();

  // Detect the response shape and extract the results accordingly
  let results;

  if (Array.isArray(data)) {
    // Shape 1: plain array []
    results = data;
  } else if (data.results && Array.isArray(data.results)) {
    // Shape 2: { results: [...] } or { count, results: [...] }
    results = data.results;
  } else if (typeof data === 'object' && !Array.isArray(data)) {
    // Shape 3: merged object {} — convert keys to array of { index } objects
    results = Object.keys(data).map(key => ({ index: key }));
  } else {
    throw new Error(`Unrecognized response shape from ${url}`);
  }

  // Have the object here to hold all the search parameters
  const targetMap = {};

  // We need to loop through the data
  // From there, we have to grab the names and indexes of the items we're searching for
  results.forEach((item) => {
    const rawIndex = item.index;
    if (!rawIndex) return; // skip if no index exists

    // Variant 1: first name version (e.g. "sonic")
    const firstName = rawIndex.split('-')[0];
    
    // Variant 2: space version (e.g. "sonic the hedgehog")
    const withSpaces = rawIndex.split('-').join(' ');

    // Variant 3: original (e.g. "sonic-the-hedgehog")
    //const original = rawIndex;

    // Variant 4: no-space version (e.g. "sonicthehedgehog")
    //const noDashSpaces = rawIndex.split('-').join('');

    // Add all variants pointing to the same index
    targetMap[firstName] = rawIndex;
    targetMap[withSpaces] = rawIndex;
    //targetMap[original] = rawIndex;

    // Apply nickname aliases for characters with unpredictable real names
    // e.g. "eggman" → "doctor-eggman", "tails" → "miles-tails-prower"
    applyNicknameAliases(rawIndex, targetMap);
  });

  console.log("export const targetMap =", JSON.stringify(targetMap, null, 2));
  return targetMap;
}

// Example 
/* async function generateTargetNameMap() {
  const res = await fetch("https://www.dnd5eapi.co/api/2014/weapon-properties");
  const data = await res.json();
  const results = data.results;

  const targetNameMap = {};

  results.forEach((item, i) => {
    const index = i + 1;
    const rawIndex = item.index.toLowerCase(); // ensure lowercase

    // Variant 1: original (e.g. "two-handed")
    const original = rawIndex;

    // Variant 2: space version (e.g. "two handed")
    const withSpaces = rawIndex.split('-').join(' ');

    // Variant 3: no dash version (e.g. "twohanded")
    const noDash = rawIndex.split('-').join('');

    // Add all lowercase variants pointing to the same index
    targetNameMap[original] = index;
    targetNameMap[withSpaces] = index;
    targetNameMap[noDash] = index;
  });

  console.log("export const targetNameMap =", JSON.stringify(targetNameMap, null, 2));
}

generateTargetNameMap();
*/

// This is code for if you want the code outside
/*
    // High-level
    //document.querySelector('.high-level').innerText = spell?.higher_level || "No Description Available";
    const higherLevel = spell.higher_level;

    const highList = document.querySelector('.high-level-descript-slot');
    const oneHighL = document.querySelector('.high-level');
        // Clear the list before adding new components
        highList.innerHTML = '';
        oneHighL.innerHTML = '';
        highList.style.display = 'block';
        // Check if there are components BEFORE looping
        if (higherLevel.length > 0) {
          if (higherLevel.length > 1) {
            higherLevel.forEach(element => {
              const li = document.createElement('li');
              li.textContent = element;
              highList.appendChild(li);
            });
          } else if (higherLevel.length === 1) {
            oneHighL.innerHTML = higherLevel[0];
          }
        } else {
          highList.innerHTML = '<li>No Description Available</li>';
        }
*/