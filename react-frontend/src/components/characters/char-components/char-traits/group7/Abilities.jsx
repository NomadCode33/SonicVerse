import "../../../../../css/characters.css";
import SkillsSection from "./SkillsSection";
import TechniquesSection from "./TechniquesSection";
import AbilityTypeSection from "./AbilityTypeSection";

const Abilities = ({ abilities }) => {
  const skills = abilities?.skills ?? [];
  const techniques = abilities?.moveTechniques ?? [];
  const abilityTypes = abilities?.abilityType ?? [];

  const hasSkills = skills.length > 0;
  const hasTechniques = techniques.length > 0;
  const hasAbilityTypes = abilityTypes.length > 0;

  // Only render container if at least one section exists
  const shouldRenderContainer = hasSkills || hasTechniques || hasAbilityTypes;

  if (!shouldRenderContainer) return null; // hide entire container if nothing exists

  return (
    <section className="card-container skills-toggle group-7">
        <SkillsSection skills={skills} />

        <TechniquesSection techniques={techniques} />

        <AbilityTypeSection abilityTypes={abilityTypes} />
    </section>
  )
}

export default Abilities

/*
  const skills = character?.abilities?.skills ?? [];
  const techniques = character?.abilities?.moveTechniques ?? [];
  const abilityTypes = character?.abilities?.abilityType ?? [];

  const hasSkills = skills.length > 0;
  const hasTechniques = techniques.length > 0;
  const hasAbilityTypes = abilityTypes.length > 0;

  // Only render container if at least one section exists
  const shouldRenderContainer = hasSkills || hasTechniques || hasAbilityTypes;

  if (!shouldRenderContainer) return null; // hides entire section if all empty
*/


/*
// Old Way
const skills = character?.abilities?.skills ?? [];
const techniques = character?.abilities?.moveTechniques ?? [];
const abilityTypes = character?.abilities?.abilityType ?? [];

const hasSkills = skills.length > 0;
const hasTechniques = techniques.length > 0;
const hasAbilityTypes = abilityTypes.length > 0;

// Only render the whole container if at least one section has content
const shouldRenderContainer = hasSkills || hasTechniques || hasAbilityTypes;


{shouldRenderContainer && (
            <section className="card-container skills-toggle group-7">
              <SkillsSection skills={character?.abilities?.skills} /> (skills)

              <TechniquesSection techniques={character?.abilities?.moveTechniques} /> (techniques)

              <AbilityTypeSection abilityTypes={character?.abilities?.abilityType} /> (ability types)
            </section>
          )}
*/

/*
// Older Way
<section className="card-container skills-toggle group-7">
            <div className="card-content skills-toggle">
                <div className="text">
                  <h2 className="uncial">Skills:</h2>

                  <ul className="skills-slot desc-text">
                    {character?.abilities?.skills ? (
                      character.abilities.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))
                    ) : (
                      <li>No Known Skills</li>
                    )}
                  </ul>
                  {// <span className="desc-text">{character?.abilities?.skills}</span>}
                </div>
            </div>

            <div className="card-content techniques-toggle">
                <div className="text">
                  <h2 className="uncial">Techniques:</h2>

                  <ul className="techniques-slot desc-text">
                    {character?.abilities?.moveTechniques ? (
                      character.abilities.moveTechniques.map((technique) => (
                        <li key={technique.index}>{technique.name}</li>
                      ))
                    ) : (
                      <li>No Known Techniques</li>
                    )}
                  </ul>
                </div>
            </div>

            <div className="card-content ability-type-toggle">
                <div className="text">
                  <h2 className="uncial">Ability Type:</h2>

                  <ul className="ability-type-slot desc-text">
                    {character?.abilities?.abilityType ? (
                      character.abilities.abilityType.map((type) => (
                        <li key={type.index}>{type.name}</li>
                      ))
                    ) : (
                      <li>No Known Ability Type(s)</li>
                    )}
                  </ul>
                </div>
            </div>
          </section>
*/