import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/verse-hub/layout.css';
import '../../../css/sidebar.css';
import Sidebar from './Sidebar';


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

const VerseNavbar = ({ variant = 'home', showText, setShowText, showContent, setShowContent, darkMode, setDarkMode }) => {
  const { pageClass, icon, iconAlt } = VARIANTS[variant] ?? VARIANTS.home;
  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false); // ← added dropdown state

  // ← added useEffect to calculate dynamic text shadows based on position
  useEffect(() => {
    const updateShadows = () => {
      if (!navRef.current) return;
      const navWidth = navRef.current.offsetWidth;
      const navLeft = navRef.current.getBoundingClientRect().left;

      console.log('navWidth:', navWidth, 'navLeft:', navLeft);

      linkRefs.current.forEach((link, i) => {
        if (!link) return;
        const linkCenter = link.getBoundingClientRect().left + link.offsetWidth / 2;
        const position = (linkCenter - navLeft) / navWidth;
        const darkness = Math.round((1 - position) * 150); // 50-130 range for shadow darkness
        //console.log(`link ${i} position:`, position, 'darkness:', darkness); // ← add this
        link.style.textShadow = `0.2rem 0.2rem 0.5rem rgba(${darkness}, ${darkness}, ${darkness}, 1)`;
      });
    };

    const timer = setTimeout(updateShadows, 200);
    window.addEventListener('resize', updateShadows);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateShadows);
    };
  }, [showContent, variant]);

  // ← close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.verse-nav-dropdown')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <header className="clearfix">
        <section className="header-box">
          <div className="head-title">
            {/* Sidebar hamburger — sits before the logo link */}
            <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} icon={icon} iconAlt={iconAlt} />
            
            <Link to="/verse-hub"><img className="icon-left" src={icon} alt={iconAlt} /></Link>
            <h1 className="site-blurb-left exo-2">SonicVerse</h1>
          </div>

          <div className="webtext-middle">
            <Link to="/verse-hub"><img className="icon" src={icon} alt={iconAlt} /></Link>
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

      {showContent && (
        <section className="verse-navbar" ref={navRef}>
          <div className="verse-navbar-pic-wrapper">
            <Link to="/verse-hub">
              <img src="/img/icons/modernsonicicon.webp" alt="Home" className="verse-navbar-pic" />
            </Link>
          </div>

          {/* ← added ref={el => linkRefs.current[n] = el} to each link */}
          <Link ref={el => linkRefs.current[0] = el} to="/verse-hub/characters" className="verse-nav-link exo-2">Characters</Link>
          <Link ref={el => linkRefs.current[1] = el} to="" className="verse-nav-link exo-2">Games</Link>
          <Link ref={el => linkRefs.current[2] = el} to="" className="verse-nav-link exo-2">Transformations</Link>

          {/* ← replaced plain Menu link with dropdown */}
          <div className="verse-nav-dropdown" ref={el => linkRefs.current[3] = el}>
            <button
              className="verse-nav-link verse-nav-dropdown-btn exo-2"
              onClick={() => setMenuOpen(prev => !prev)}
            >
              Menu {menuOpen ? '▲' : '▼'} {/* ← up/down arrow toggle */}
            </button>

            {/* ← animated dropdown panel */}
            <div className={`verse-dropdown-panel ${menuOpen ? 'open' : ''}`}>
              <Link to="/verse-hub" className="verse-dropdown-item exo-2">Home</Link>
              <Link to="/verse-hub/characters" className="verse-dropdown-item exo-2">Characters</Link>
              <Link to="" className="verse-dropdown-item exo-2">Games</Link>
              <Link to="" className="verse-dropdown-item exo-2">Transformations</Link>
            </div>
          </div>

        </section>
      )}
    </>
  );
};

export default VerseNavbar;