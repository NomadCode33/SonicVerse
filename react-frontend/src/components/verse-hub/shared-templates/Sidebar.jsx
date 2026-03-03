import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon, 
  HomeIcon, 
  UserGroupIcon, 
  SparklesIcon, 
  QuestionMarkCircleIcon, 
  FilmIcon, 
  MusicalNoteIcon, 
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/outline';

// ─── NAV STRUCTURE ────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  {
    label: 'VerseHub',
    icon: HomeIcon,
    links: [
      { label: 'Home',       to: '/verse-hub' },
      { label: 'Characters', to: '/verse-hub/characters' },
      //{ label: 'Transformations', to: '/verse-hub/transformations' }, // 👈 new page
    ],
  },
  /*{
    label: 'Quiz',
    icon: QuestionMarkCircleIcon,
    links: [
      { label: 'Home', to: '/quiz' },
    ],
  },
  {
    label: 'Media',
    icon: FilmIcon,
    links: [
      { label: 'Comics',   to: '/media/comics' },
      { label: 'TV Shows', to: '/media/shows' },
      { label: 'Movies',   to: '/media/movies' },
    ],
  },
  {
    label: 'Music',
    icon: MusicalNoteIcon,
    links: [
      { label: 'Soundtracks', to: '/music/soundtracks' },
      { label: 'Themes',      to: '/music/themes' },
    ],
  },*/
];

const Sidebar = ({ darkMode, setDarkMode, icon = '/img/icons/Adv3_sonic_idle.webp', iconAlt = 'SonicVerse' }) => {
  const [open, setOpen]         = useState(false);
  const [expanded, setExpanded] = useState({ SonicHub: true });
  const { pathname }            = useLocation();

  const toggle = (label) =>
    setExpanded(prev => ({ ...prev, [label]: !prev[label] }));

  return (
    <>
      {/* Hamburger button */}
      <button
        className="sidebar-hamburger"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Bars3Icon className="sidebar-hamburger-icon" />
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay${open ? ' sidebar-overlay--visible' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside className={`sidebar-drawer${open ? ' sidebar-drawer--open' : ''}${darkMode ? ' sidebar-dark' : ' sidebar-light'}`}>

        {/* Close button */}
        <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <XMarkIcon style={{ width: '2.4rem', height: '2.4rem' }} />
        </button>

        {/* Brand — icon prop comes from Navbar, matching the current page's sprite */}
        {/* To disable per-page sprites, simply stop passing icon/iconAlt from Navbar and remove props from Sidebar.jsx */}
        <div className="sidebar-brand">
          <img src={icon} alt={iconAlt} className="sidebar-brand-icon" />
          <span className="sidebar-brand-name exo-2">SonicVerse</span>
        </div>

        {/*
        <div className="sidebar-brand">
          <img src="/img/icons/Adv3_sonic_idle.webp" alt="SonicVerse" className="sidebar-brand-icon" />
          <span className="sidebar-brand-name exo-2">SonicVerse</span>
        </div>
        */}

        {/* Nav sections */}
        <nav className="sidebar-nav">
          {NAV_SECTIONS.map(({ label, icon: Icon, links }) => (
            <div key={label} className="sidebar-section">

              <button
                className="sidebar-section-header"
                onClick={() => toggle(label)}
                aria-expanded={!!expanded[label]}
              >
                <span className="sidebar-section-left">
                  <Icon className="sidebar-section-icon" />
                  <span className="sidebar-section-label exo-2">{label}</span>
                </span>
                <ChevronDownIcon
                  className={`sidebar-chevron${expanded[label] ? ' sidebar-chevron--open' : ''}`}
                />
              </button>

              <div className={`sidebar-links${expanded[label] ? ' sidebar-links--open' : ''}`}>
                {links.map(({ label: lbl, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`sidebar-link exo-2${pathname === to ? ' sidebar-link--active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {lbl}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom controls */}
        <div className="sidebar-bottom">
          <div className="sidebar-theme-row">
            <span className="sidebar-theme-label exo-2">
              {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </span>
            <button
              className={`sidebar-toggle-pill${darkMode ? ' sidebar-toggle-pill--on' : ''}`}
              onClick={() => setDarkMode(prev => !prev)}
              aria-label="Toggle dark mode"
            >
              <span className="sidebar-toggle-knob" />
            </button>
          </div>

          <button className="sidebar-logout exo-2">
            <ArrowRightOnRectangleIcon style={{ width: '2rem', height: '2rem' }} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;