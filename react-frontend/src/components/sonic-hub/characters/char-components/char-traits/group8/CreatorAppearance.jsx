import "../../../../../../css/sonic-hub/characters.css";
import RealWorldDesignersSection from "./RealWorldDesignersSection";
import GameAppearancesSection from "./GameAppearancesSection";
import OtherMediaAppearanceSection from "./OtherMediaAppearanceSection";

// Prepares and checks if the character has any creators, game appearances, or other media appearances.
// It either removes the card container if none exists in the character 
const CreatorAppearance = ({ character }) => {
  // Checks if the character has any real world creators or artists.
  const hasRealWorldDesigners =
    (character?.realWorldDesigners?.creators?.length ?? 0) > 0 ||
    (character?.realWorldDesigners?.artists?.length ?? 0) > 0;

  // Checks if the character has any game appearances.
  const hasGameAppearances = (character?.gameAppearances?.length ?? 0) > 0;

  // Checks if the character has any appearances in other media.
  const hasOtherMedia = (character?.otherMedia?.length ?? 0) > 0;

  // Only render container if at least one section has content
  // Determines if the container should render based on any content being present.
  const shouldRenderContainer = hasRealWorldDesigners || hasGameAppearances || hasOtherMedia;

  // Exits early if the character has no designers, game appearances, or other media.
  if (!shouldRenderContainer) return null;

  // Count and assign class
  const cardCount = [hasRealWorldDesigners, hasGameAppearances, hasOtherMedia].filter(Boolean).length;
  const countClass =
    cardCount === 1 ? "one-card" :
    cardCount === 2 ? "two-cards" :
    cardCount === 3 ? "three-cards" : "";
  
  return (
    <section className={`card-container group-8 ${countClass}`}>
        {/* ================= Real World Designers ================= */}
        {/* // Renders a section listing the real-world creators and artists for the character.
        // Pulls data from `character.realWorldDesigners` and handles creators, artists, or both. */}
        <RealWorldDesignersSection designers={character?.realWorldDesigners} />
        
        {/* ================= Game Appearances ================= */}
        {/* // Renders a section listing all video games the character has appeared in.
        // Pulls data from `character.gameAppearances`. */}
        <GameAppearancesSection games={character?.gameAppearances} />

        {/* ================= Other Media ================= */}
        {/* // Renders a section listing appearances of the character in other media (like TV, movies, comics).
        // Pulls data from `character.otherMedia`. */}
        <OtherMediaAppearanceSection media={character?.otherMedia} />
    </section>
  )
}

export default CreatorAppearance

/*
// Old Way
// Only render the whole container if at least one section exists
const shouldRenderContainer =
  (character?.realWorldDesigners?.creators?.length ?? 0) > 0 ||
  (character?.realWorldDesigners?.artists?.length ?? 0) > 0 ||
  (character?.gameAppearances?.length ?? 0) > 0 ||
  (character?.otherMedia?.length ?? 0) > 0;


{shouldRenderContainer && (
            <section className="card-container group-8">
               {// ================= Real World Designers ================= }
              <RealWorldDesignersSection designers={character?.realWorldDesigners} />

              {// ================= Game Appearances ================= }
              <GameAppearancesSection games={character?.gameAppearances} />

              {// ================= Other Media ================= }
              <OtherMediaAppearanceSection media={character?.otherMediaAppearances} />
            </section>
          )}
*/

