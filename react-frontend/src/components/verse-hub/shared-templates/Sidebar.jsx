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
  ArrowRightOnRectangleIcon,
  DocumentTextIcon,  // ← added for Dev Notes standalone icon
} from '@heroicons/react/24/outline';

// ─── NAV STRUCTURE ────────────────────────────────────────────────────────────
//
// Each entry in NAV_SECTIONS can be one of two shapes:
//
// 1) DROPDOWN SECTION — has an icon, a label, and an array of child links.
//    Optionally add `to` on the section itself to make the label text a
//    clickable link (Q3), while the chevron area still toggles the dropdown.
//
//    {
//      label: 'VerseHub',
//      icon: HomeIcon,
//      to: '/verse-hub',          ← optional: makes the label itself a link
//      routePrefix: '/verse-hub', ← used for auto-expand: opens when URL starts with this
//      links: [
//        { label: 'Home',       to: '/verse-hub' },
//        { label: 'Characters', to: '/verse-hub/characters' },
//      ],
//    }
//
// 2) STANDALONE LINK — has an icon, a label, and a `to` but NO `links` array.
//    Renders as a single full-width clickable row with no dropdown at all.
//
//    {
//      label: 'Dev Notes',
//      icon: DocumentTextIcon,
//      to: '/dev-notes',          ← required for standalone
//      standalone: true,          ← signals that this is a standalone link
//    }

const NAV_SECTIONS = [
  {
    label: 'VerseHub',
    icon: HomeIcon,
    to: '/verse-hub',          // ← Q3: makes "VerseHub" text a link to the hub home
    routePrefix: '/verse-hub', // ← auto-expand: dropdown opens for /verse-hub and all sub-routes
    links: [
      { label: 'Home',       to: '/verse-hub' },
      { label: 'Characters', to: '/verse-hub/characters' },
      //{ label: 'Transformations', to: '/verse-hub/transformations' },
    ],
  },

  // ← Q2: standalone link — no `links` array, just a direct route
  /*{
    label: 'Dev Notes',
    icon: DocumentTextIcon,
    to: '/dev-notes',
    standalone: true,
  },*/

  /*{
    label: 'Quiz',
    icon: QuestionMarkCircleIcon,
    to: '/quiz',
    routePrefix: '/quiz',
    links: [
      { label: 'Home', to: '/quiz' },
    ],
  },
  {
    label: 'Media',
    icon: FilmIcon,
    routePrefix: '/media',
    links: [
      { label: 'Comics',   to: '/media/comics' },
      { label: 'TV Shows', to: '/media/shows' },
      { label: 'Movies',   to: '/media/movies' },
    ],
  },
  {
    label: 'Music',
    icon: MusicalNoteIcon,
    routePrefix: '/music',
    links: [
      { label: 'Soundtracks', to: '/music/soundtracks' },
      { label: 'Themes',      to: '/music/themes' },
    ],
  },*/
];

const Sidebar = ({ darkMode, setDarkMode, icon = '/img/icons/Adv3_sonic_idle.webp', iconAlt = 'SonicVerse' }) => {
  const [open, setOpen] = useState(false);
  const { pathname }    = useLocation();

  // ── AUTO-EXPAND based on current route ──────────────────────────────────────
  // For each dropdown section, check if the current URL starts with its
  // `routePrefix`. If yes, that section starts expanded. This means:
  //   - visiting /verse-hub or /verse-hub/characters → VerseHub opens
  //   - visiting /dev-notes → VerseHub stays closed (different prefix)
  // Users can still manually toggle sections open/closed after this initial state.
  const buildInitialExpanded = () => {
    const state = {};
    NAV_SECTIONS.forEach((section) => {
      if (section.routePrefix) {
        state[section.label] = pathname.startsWith(section.routePrefix);
      }
    });
    return state;
  };

  // useState with a function argument runs the initialiser once on mount only,
  // so navigating between tabs doesn't reset manually-toggled sections.
  const [expanded, setExpanded] = useState(buildInitialExpanded);

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

        {/* Brand */}
        <div className="sidebar-brand">
          <img src={icon} alt={iconAlt} className="sidebar-brand-icon" />
          <span className="sidebar-brand-name exo-2">SonicVerse</span>
        </div>

        {/* Nav sections */}
        <nav className="sidebar-nav">
          {NAV_SECTIONS.map((section) => {
            const Icon = section.icon;

            // ── Q2: STANDALONE LINK ──────────────────────────────────────────
            // If `standalone: true`, render a single full-width Link row.
            // No chevron, no dropdown — just an icon + label that navigates.
            // sidebar-section--standalone ensures the wrapper is display:block
            // with full width, giving the <a> tag a real width context so
            // display:flex on .sidebar-standalone-link works correctly.
            if (section.standalone) {
              return (
                <div key={section.label} className="sidebar-section--standalone">
                  <Link
                    to={section.to}
                    className={`sidebar-standalone-link${pathname === section.to ? ' sidebar-standalone-link--active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="sidebar-section-icon" />
                    <span className="sidebar-section-label exo-2">{section.label}</span>
                  </Link>
                </div>
              );
            }

            // ── DROPDOWN SECTION ─────────────────────────────────────────────
            return (
              <div key={section.label} className="sidebar-section">

                {/*
                  Q3: The header row is now split into two interactive zones:
                  - Left zone: the icon + label text. If `section.to` exists,
                    the label becomes a <Link>; hovering shows an underline.
                    Clicking it navigates without toggling the dropdown.
                  - Right zone: the chevron button. Clicking this toggles the
                    dropdown open/closed without navigating anywhere.
                  Both zones share the same row styling via .sidebar-section-header.
                */}
                <div
                  className="sidebar-section-header"
                  aria-expanded={!!expanded[section.label]}
                >
                  {/* Left: icon + label (optionally a link) */}
                  <span className="sidebar-section-left">
                    <Icon className="sidebar-section-icon" />
                    {section.to ? (
                      // Q3: label text is a Link — underlines on hover, navigates on click
                      <Link
                        to={section.to}
                        className="sidebar-section-label-link exo-2"
                        onClick={() => setOpen(false)}
                      >
                        {section.label}
                      </Link>
                    ) : (
                      // No `to` on the section — plain text label, not a link
                      <span className="sidebar-section-label exo-2">{section.label}</span>
                    )}
                  </span>

                  {/* Right: chevron toggles dropdown */}
                  <button
                    className="sidebar-chevron-btn"
                    onClick={() => toggle(section.label)}
                    aria-label={`Toggle ${section.label}`}
                  >
                    <ChevronDownIcon
                      className={`sidebar-chevron${expanded[section.label] ? ' sidebar-chevron--open' : ''}`}
                    />
                  </button>
                </div>

                <div className={`sidebar-links${expanded[section.label] ? ' sidebar-links--open' : ''}`}>
                  {section.links.map(({ label: lbl, to }) => (
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
            );
          })}
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
