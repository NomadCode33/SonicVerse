import { targetCharacterMap as staticCharacterMap } from './maps/charMap.js';
// import additional static maps here as you add new endpoints
// import { targetTransformationMap as staticTransformationMap } from './maps/transformationMap.js';
// import { targetGameplayFeatureMap as staticGameplayFeatureMap } from './maps/gameplayFeatureMap.js';

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
  const mapChoice = map[choice.toLowerCase()] ?? choice.toLowerCase();
  // Was hardcoded Render URL, now relative path works everywhere
  const res = await fetch(apiPath + mapChoice);
  if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`);
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