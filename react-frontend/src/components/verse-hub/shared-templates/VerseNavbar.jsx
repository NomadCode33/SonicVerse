import { Link } from 'react-router-dom';
import '../../../css/verse-hub/layout.css';

const VerseNavbar = () => {
  return (
    <section className="verse-navbar">
      <div className="verse-navbar-pic-wrapper">
        <Link to="/verse-hub">
          <img src="/img/icons/modernsonicicon.webp" alt="Home" className="verse-navbar-pic" />
        </Link>
      </div>

        <Link to="/verse-hub/characters" className="verse-nav-link exo-2">Characters</Link>

        <Link to="" className="verse-nav-link exo-2">Games</Link>

        <Link to="" className="verse-nav-link exo-2">Transformations</Link>

        {/*<Link to="" className="verse-nav-link exo-2">Abilities</Link>*/}

        <Link to="" className="verse-nav-link exo-2">Menu</Link>
    </section>
  )
}

export default VerseNavbar