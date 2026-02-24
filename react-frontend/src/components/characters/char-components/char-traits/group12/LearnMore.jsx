import "../../../../../css/characters.css";

const LearnMore = ({ character }) => {
  return (
    <section className="description-box learn-box group-12">
        <div className="text">
          <h2 className="uncial">
            Learn More:{" "} 
            <a 
              href={character?.learnMore}
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more"
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