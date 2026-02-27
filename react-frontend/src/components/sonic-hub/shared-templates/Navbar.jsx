import { Link } from 'react-router-dom';
import '../../../css/sonic-hub/home.css';
import '../../../css/sonic-hub/characters.css';
import '../../../css/sidebar.css';
import Sidebar from './Sidebar';
// import '../../css/transformations.css';  👈 add as you grow
// import '../../css/games.css';

const VARIANTS = {
  home: {
    pageClass: 'home-page',
    icon: '/img/icons/Adv3_sonic_idle.webp',
    iconAlt: 'SAdv3 Sonic Idle',
  },
  characters: {
    pageClass: 'characters-page',
    icon: '/img/icons/Adv3_sonic_run.webp', // 👈 swap this out
    iconAlt: 'Characters icon',
  },
  // transformations: {
  //   pageClass: 'transformations-page',
  //   icon: '/img/icons/your_transformations_icon.webp',
  //   iconAlt: 'Transformations icon',
  // },
};

const Navbar = ({ variant = 'home', showText, setShowText, showContent, setShowContent, darkMode, setDarkMode }) => {
  const { pageClass, icon, iconAlt } = VARIANTS[variant] ?? VARIANTS.home;

  return (
    <header className="clearfix">
      <section className="header-box">
        <div className="head-title">
          {/* Sidebar hamburger — sits before the logo link */}
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <Link to="/sonic-hub"><img className="icon" src={icon} alt={iconAlt} /></Link>
          {/*<h1 className="site-blurb exo-2">SonicVerse</h1>*/}
        </div>

        <div className="small-webtext-title">
          <h1 className="site-blurb exo-2">SonicVerse</h1>
        </div>

        <div className="nav-bar">
          <nav>
            <ul className="nav-box">
              <li>
                <button className="nav-button exo-2" onClick={() => setShowText(prev => !prev)}>
                  {showText ? 'Hide Text' : 'Show Text'}
                </button>
              </li>
              <li>
                <button className="nav-button exo-2" onClick={() => setShowContent(prev => !prev)}>
                  {showContent ? 'Hide All' : 'Show All'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Navbar;