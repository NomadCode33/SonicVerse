import "../../../css/characters.css"
//import "../css/hero.css"

const Hero = ({ showText }) => {
  return (
    <section className="pic-rest">
      {showText && (
        <h1 className="pop-title luckiest-guy">Characters</h1>
      )}
    </section>

  )
}

export default Hero