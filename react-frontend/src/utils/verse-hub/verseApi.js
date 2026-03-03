import { targetCharacterMap as staticCharacterMap } from './maps/characterMap.js';
// import additional static maps here as you add new endpoints
// import { targetTransformationMap as staticTransformationMap } from './maps/transformationMap.js';
// import { targetGameplayFeatureMap as staticGameplayFeatureMap } from './maps/gameplayFeatureMap.js';

// REMOVED: SYNONYMS import — "did you mean?" now searches directly against
// the loaded maps so it works for characters, transformations, and any future endpoint

// STATIC_MAPS holds the pre-generated maps from generateMap.js
// These are baked into the app at build time so no API call is needed on startup
// add new entries here as you add new endpoints
const STATIC_MAPS = {
  "/api/characters/": staticCharacterMap,
  // "/api/transformations/": staticTransformationMap,

  // Subcategory endpoints use /all path to match generateMap.js
  // "/api/gameplay-features/all": staticGameplayFeatureMap,
};

// loadedMaps starts as a copy of STATIC_MAPS
// If a map is missing or empty, initInitialize will fetch and populate it on the fly
const loadedMaps = { ...STATIC_MAPS };

// Normalizes user input to a consistent lowercase string for map lookup
// handles all the following cases:
// - trailing/leading spaces ("sonic   " → "sonic")
// - mixed capitals ("tAIls" → "tails")
// - title case ("Sonic The Hedgehog" → "sonic the hedgehog")
// - extra spaces between words ("sonic  the  hedgehog" → "sonic the hedgehog")
// - punctuation that could interfere ("sonic!" → "sonic")
function normalizeInput(input) {
  return input
    .trim()                          // removes leading and trailing spaces
    .replace(/\s+/g, ' ')            // collapses multiple spaces into one
    // CHANGED: added - to allowed characters so index lookups like
    // "sonic-the-hedgehog" pass through correctly from tile clicks
    .replace(/[^a-zA-Z0-9\s-]/g, '') // removes punctuation/special characters but keeps dashes
    .toLowerCase();                  // ensures case insensitivity
}

// Calculates Levenshtein distance between two strings
// this is the standard algorithm used by spell checkers to measure
// how many single-character edits are needed to change one string into another
// e.g. "sonik" → "sonic" = 1 edit (change 'k' to 'c')
function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Finds the closest matching key in the map using Levenshtein distance
// only returns a suggestion if it's within 1-2 edits (small typos only)
// e.g. "sonik" → suggests "sonic", "knukles" → suggests "knuckles"
// searches the loaded map for the given apiPath so it works
// for characters, transformations, and any future endpoint automatically
function findClosestMatch(input, map) {
  const MAX_DISTANCE = 2; // only catch small typos (1-2 letters off)
  let bestMatch = null;
  let bestDistance = Infinity;

  for (const key of Object.keys(map)) {
    const distance = levenshteinDistance(input, key);
    if (distance < bestDistance && distance <= MAX_DISTANCE) {
      bestDistance = distance;
      bestMatch = key;
    }
  }

  return bestMatch;
}

// initInitialize is a safety net — only runs if static map is missing or empty
// uses relative /api/... path which works locally via Vite proxy and on Render via Express directly
// config.js now handles all response shapes so this works for any endpoint
export async function initInitialize(apiPath = "/api/characters/") {
  if (!loadedMaps[apiPath] || Object.keys(loadedMaps[apiPath]).length === 0) {
    const { targetTypeMap } = await import('./config.js');
    loadedMaps[apiPath] = await targetTypeMap(apiPath);
  }
  return loadedMaps[apiPath];
}

// Now accepts apiPath so it works for any endpoint, not just characters
// Uses relative /api/... path — Vite proxy handles it locally, Express handles it on Render
export async function searchCharacter(choice, apiPath = "/api/characters/") {
  const map = loadedMaps[apiPath] ?? {};

  // Was just choice.toLowerCase(), now uses normalizeInput for smarter search
  const normalized = normalizeInput(choice);

  // REMOVED: separate SYNONYMS check — the loaded map already contains
  // all variants from config.js (original, spaces, firstName) plus NICKNAME_ALIASES
  // so a standard map lookup covers everything
  const mapChoice = map[normalized] ?? normalized;
  const res = await fetch(apiPath + mapChoice);

  // if exact match fails, try fuzzy matching against the loaded map
  // returns a suggestion object instead of throwing so SearchBox can show "did you mean?"
  if (!res.ok) {
    // passes the loaded map for the current apiPath so fuzzy matching
    // works for characters, transformations, and any future endpoint automatically
    const closestKey = findClosestMatch(normalized, map);
    if (closestKey) {
      // return suggestion object — SearchBox.jsx checks for this
      // to show "did you mean?" instead of "not found"
      return {
        __suggestion: true,
        suggestedKey: closestKey,
        suggestedIndex: map[closestKey],
      };
    }
    throw new Error(`Fetch failed with status ${res.status}`);
  }

  const data = await res.json();
  return data;
}

// Pulls another request to the DnD API for asychronous work
async function spellIndexSchool(index, item) {
  const res = await fetch(`https://www.dnd5eapi.co/api/2014/${index}/${item}`);
  const data = await res.json();
  return data;
}

// When characters are less than 2 in search box or if not found by database, 
// it clears up the information in the character bio box
/*function clearCharacterInfo() {
// Spell Name, Level, School
  document.querySelector('.spell-name').innerText = 'Spell';
  document.querySelector('.level').innerText = '';
  document.querySelector('.school').innerText = '';

// Description
  const descriptionList = document.querySelector('.descript-slot');
  const oneDesc = document.querySelector('.description');
  descriptionList.innerHTML = '';
  descriptionList.style.display = 'none';
  oneDesc.innerHTML = ''

// DC


// High-Level
  const highList = document.querySelector('.high-level-descript-slot');
  const oneHighL = document.querySelector('.high-level');
  highList.innerHTML = '';
  highList.style.display = 'none';
  oneHighL.innerHTML = '';

// Attack-Type
  document.querySelector('.attack-type').innerText = '';

// Damage-Type
  document.querySelector('.damage-type').innerText = '';

// Damage or Heal Slot
  const damageHealList = document.querySelector('.damage-heal-slot');
  damageHealList.innerHTML = '';
  damageHealList.style.display = 'none';

// Casting Time
  document.querySelector('.cast-time').innerText = ''; 

// Range
  document.querySelector('.range').innerText = '';

// Componentents
  const componentList = document.querySelector('.components');
  const oneComp = document.querySelector('.one-comp');
  componentList.innerHTML = '';
  componentList.style.display = 'none';
  oneComp.innerHTML = '';

// Duration
  document.querySelector('.duration').innerText = '';

// Concentration
  const concentrate = document.querySelector('.concentration');
  concentrate.innerText = '';

// Ritual
  document.querySelector('.ritual').innerText = '';
  
// Material
  document.querySelector('.material').innerText = '';

// Classes
  const classList = document.querySelector('.class-list'); 
  const oneClass = document.querySelector('.one-class');
  classList.innerHTML = '';
  classList.style.display = 'none';
  oneClass.innerHTML = '';

// Subclasses
  const subclassList = document.querySelector('.subclass-list'); 
  const oneSubclass = document.querySelector('.one-subclass');
  subclassList.innerHTML = '';
  subclassList.style.display = 'none';
  oneSubclass.innerHTML = '';
}
*/