//Example fetch using sonicverse-y2s6.onrender.com
document.querySelector('button').addEventListener('click', searchCharacter)
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchCharacter();
    }
});

// Imported async function mapping all values from index to new search parameters
//import { targetTypeMap } from './config.js';
//const searchURL = `https://www.dnd5eapi.co/api/2014/spells/`;
//const targetCharacterMap = await targetTypeMap(searchURL);

async function searchCharacter() {
  const choice = document.querySelector('input').value;
  console.log(choice);
  //const mapChoice = targetCharacterMap[choice.toLowerCase()] || choice.toLowerCase();
  const url = `http://localhost:8000/api/characters/${choice}`;

  const characterNotFound = document.getElementById('characterNotFound');

  // Block single letter
  if (choice.length < 2) {
    characterNotFound.style.display = 'block';
    characterNotFound.innerText = 'Please enter at least 2 characters.';
    clearCharacterInfo();
    return;
  } 

  try {
    const res = await fetch(url);

    // If response is not ok (not true), then throw the error
    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    // Data
    const data = await res.json();
    const character = data;
    console.log(character);

    const evocSchool = await spellIndexSchool("magic-schools", "evocation");
    console.log(evocSchool);

    // If characters name is undefined
    /*if (character.name === undefined) {
      characterNotFound.style.display = 'block';
      clearCharacterInfo();
      return;
    } */

    // Character not found display info set to none when valid character pops up
    characterNotFound.style.display = 'none';

  // Valid character
  // Spell Name, Level, School
    document.querySelector('.spell-name').innerText = character.age;

    //document.querySelector('.spell-pic').src = character.images[0];
    document.querySelector('.spell-pic').src = character.images.modern[0].img;

   // Description
    const description = character.description;
    const formatDesc = description[0].replace(/\n\n/g, '<br><br>');

    const oneDesc = document.querySelector('.description');
    oneDesc.innerHTML = formatDesc;
    // Photo
    /*
    document.querySelector('.level').innerText = spell.level;
    document.querySelector('.school').innerText = spell.school.name;


  // Description
    const description = spell.desc;

    const descriptionList = document.querySelector('.descript-slot');
    const oneDesc = document.querySelector('.description');
        // Clear the list before adding new components
        descriptionList.innerHTML = '';
        oneDesc.innerHTML = '';

        // Check if there are components BEFORE looping
        if (description.length > 0) {
          if (description.length > 1) {
            descriptionList.style.display = 'block';
            description.forEach(element => {
              const li = document.createElement('li');
              li.textContent = element;
              descriptionList.appendChild(li);
            });
          } else if (description.length === 1) {
            oneDesc.innerHTML = description[0];
          }
        } else {
          descriptionList.style.display = 'block';
          descriptionList.innerHTML = 'No Description Available';
          //oneDesc.innerHTML = 'No Description Available';
        }



  // DC (Dispel-evil-and-good) combine both using template literals
    // DC SUCCESS
    // DC Type
    // DC DESC





    // High-level
    //document.querySelector('.high-level').innerText = spell?.higher_level || "No Description Available";
    const higherLevel = spell.higher_level;

    const highList = document.querySelector('.high-level-descript-slot');
    const oneHighL = document.querySelector('.high-level');
        // Clear the list before adding new components
        highList.innerHTML = '';
        oneHighL.innerHTML = '';

        // Check if there are components BEFORE looping
        if (higherLevel.length > 0) {
          if (higherLevel.length > 1) {
            highList.style.display = 'block';
            higherLevel.forEach(element => {
              const li = document.createElement('li');
              li.textContent = element;
              highList.appendChild(li);
            });
          } else if (higherLevel.length === 1) {
            oneHighL.innerHTML = higherLevel[0];
          }
        } else {
          highList.style.display = 'block';
          highList.innerHTML = '<li>No Description Available</li>';
        }



  // Attack-Type
    document.querySelector('.attack-type').innerText = spell?.attack_type || "None";





  // Damage-Type
    document.querySelector('.damage-type').innerText = spell.damage?.damage_type?.name || "None";
    




  // Damage or Heal Slot
    const damageSlot = spell.damage?.damage_at_slot_level;
    const healSlot = spell.heal_at_slot_level ?? null;

    const damageHealList = document.querySelector('.damage-heal-slot');
        // Clear the list before adding new damage or heal slots
        damageHealList.innerHTML = '';
        // Check if there are slots BEFORE looping

        // does damageSlot exist? (is truthy) — this protects you from runtime errors.
        // damageSlot may have null or undefined
        if (damageSlot && Object.keys(damageSlot).length > 0) {
          damageHealList.style.display = 'block';
          for(const key in damageSlot) {
            const value = damageSlot[key];
            const li = document.createElement('li');
            li.textContent = `${key}: ${value}`;
            damageHealList.appendChild(li);
          }
        } else if (healSlot && Object.keys(healSlot).length > 0) {
          damageHealList.style.display = 'block';
          for(const key in healSlot) {
            const value = healSlot[key];
            const li = document.createElement('li');
            li.textContent = `${key}: ${value}`;
            damageHealList.appendChild(li);
          }
        } else {
          damageHealList.style.display = 'block';
          const li = document.createElement('li');
          li.textContent = 'No Damage or Healing by Slot';
          damageHealList.appendChild(li);
        }




  // Casting Time
    document.querySelector('.cast-time').innerText = spell.casting_time;
  


  // Range
    document.querySelector('.range').innerText = spell.range;




  // Components List
    const components = spell.components;

    const componentList = document.querySelector('.components');
    const oneComp = document.querySelector('.one-comp');
        // Clear the list before adding new components
        componentList.innerHTML = '';
        oneComp.innerHTML = '';

        // Check if there are components BEFORE looping
        if (components.length > 0) {
          if (components.length > 1) {
            componentList.style.display = 'block';
            components.forEach(element => {
              const li = document.createElement('li');
              li.textContent = element;
              componentList.appendChild(li);
            });
          } else if (components.length === 1) {
            oneComp.innerHTML = components[0];
          }
        } else {
          oneComp.innerHTML = 'No Components';
        }
    




  // Duration
    document.querySelector('.duration').innerText = spell.duration;





  // Concentration
    const concentration = spell.concentration;

    const concentrate = document.querySelector('.concentration');
    if (concentration === false) {
      concentrate.innerText = 'No';
    } else {
      concentrate.innerText = 'Yes'
    }





  // Ritual
    const ritual = spell.ritual;

    const rites = document.querySelector('.ritual');
    if (ritual === false) {
      rites.innerText = 'No';
    } else {
      rites.innerText = 'Yes';
    }





  // Material
    document.querySelector('.material').innerText = spell?.material || 'None';
    




  // Class List
    const classes = spell.classes;

    const classList = document.querySelector('.class-list'); // or use '.transform' if you want to be more specific
    const oneClass = document.querySelector('.one-class');
        // Clear the list before adding new classes
        classList.innerHTML = '';
        oneClass.innerHTML = ''

        // Check if there are classes BEFORE looping
        if (classes.length > 0) {
          if (classes.length > 1) {
            classList.style.display = 'block';
            classes.forEach(obj => {
              const li = document.createElement('li');
              li.textContent = obj.name;
              classList.appendChild(li);
            });
          } else if (classes.length === 1) {
            oneClass.innerHTML = classes[0].name;
          }
        } else {
          oneClass.innerHTML = 'No Classes';
        }





  // Subclass List
    const subclasses = spell.subclasses;
    
    const subclassList = document.querySelector('.subclass-list'); 
    const oneSubclass = document.querySelector('.one-subclass');
        // Clear the list before adding new transformations
        subclassList.innerHTML = '';
        oneSubclass.innerHTML = ''

        // Check if there are transformations BEFORE looping
        if (subclasses.length > 0) {
          if (subclasses.length > 1) {
            subclassList.style.display = 'block';
            subclasses.forEach(obj => {
              const li = document.createElement('li');
              li.textContent = obj.name;
              subclassList.appendChild(li);
            });
          } else if (subclasses.length === 1) {
            oneSubclass.innerHTML = subclasses[0].name;
          }
        } else {
          oneSubclass.innerHTML = 'No Subclasses';
        }
  */

  } catch (err) {
    console.error(`Error: ${err.message}`);
    characterNotFound.style.display = 'block';
    characterNotFound.innerText = `'${choice}' not found`;
    clearCharacterInfo();
    return;
  }
}

// Pulls another request to the DnD API for asychronous work
async function spellIndexSchool(index, item) {
  const res = await fetch(`https://www.dnd5eapi.co/api/2014/${index}/${item}`);
  const data = await res.json();
  return data;
}

// When characters are less than 2 in search box or if not found by database, 
// it clears up the information in the character bio box
function clearCharacterInfo() {
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