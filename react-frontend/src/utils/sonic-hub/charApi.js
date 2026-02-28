import { targetCharacterMap as staticMap } from './charMap.js';

const searchURL = `https://sonicverse-y2s6.onrender.com/api/characters/`;

let targetCharacterMap = staticMap;

export async function initInitialize() {
  if (!targetCharacterMap || Object.keys(targetCharacterMap).length === 0) {
    const { targetTypeMap } = await import('./config.js');
    targetCharacterMap = await targetTypeMap(searchURL);
  }
  return targetCharacterMap;
}

export async function searchCharacter(choice) {
  const mapChoice = targetCharacterMap[choice.toLowerCase()] ?? choice.toLowerCase();
  const url = `${searchURL}${mapChoice}`;
  const res = await fetch(url);

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