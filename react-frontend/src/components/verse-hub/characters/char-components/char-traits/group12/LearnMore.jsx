import "../../../../../../css/verse-hub/characters.css";

const LearnMore = ({ character }) => {
  return (
    <section className="description-box learn-box group-12">
        <div className="text">
          <h2 className="russo-one">
            Learn More:{" "} 
            <a 
              href={character?.learnMore}
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more exo-2"
            >
              {character?.learnMore}
            </a>
          </h2>
          {/*<span className="desc-text"></span>*/}
        </div>
    </section>
  )
}

export default LearnMore