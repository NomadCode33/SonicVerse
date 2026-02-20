import "../../../../../css/characters.css";

const SkillsSection = ({ skills }) => {
  if (!skills || skills.length === 0) return null; // hides entire section if no skills

  return (
    <div className="card-content skills-toggle">
        <div className="text">
        <h2 className="uncial">Skills:</h2>

        <ul className="skills-slot desc-text">
            {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default SkillsSection

/*


*/

/*
// Old Way
const skills = character?.abilities?.skills ?? [];
const hasSkills = skills.length > 0;

{hasSkills && (
              <div className="card-content skills-toggle">
                  <div className="text">
                    <h2 className="uncial">Skills:</h2>

                    <ul className="skills-slot desc-text">
                      {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                    {//<span className="desc-text">{character?.abilities?.skills}</span>}
                  </div>
              </div>
            )}
*/

/*
// Older Way
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
                  {//<span className="desc-text">{character?.abilities?.skills}</span>}
                </div>
            </div>
*/