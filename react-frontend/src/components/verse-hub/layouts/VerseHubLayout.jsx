import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VerseNavbar from '../shared-templates/VerseNavbar';
/*import VerseNavbar from '../shared-templates/VerseNavbar';*/
import Footer from '../shared-templates/Footer';
import ScrolltoTop from '../shared-templates/ScrolltoTop';

const getVariant = (pathname) => {
  if (pathname.includes('/verse-hub/characters')) return 'characters';
  // add more routes here as your project grows:
  // if (pathname.includes('/transformations')) return 'transformations';
  // if (pathname.includes('/games')) return 'games';
  return 'home';
};

const PAGE_CLASSES = {
  home: 'home-page',
  characters: 'characters-page',
  // transformations: 'transformations-page',
  // quiz: 'quiz-page',
};

const VerseHubLayout = ({ showText, setShowText, showContent, setShowContent }) => {
  const { pathname } = useLocation();
  const variant = getVariant(pathname);
  const pageClass = PAGE_CLASSES[variant] ?? 'home-page';

  // darkMode lives here so both Sidebar and the page can react to it
  //const [darkMode, setDarkMode] = useState(false);

  // now reads saved preference from localStorage on first load
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // saves preference to localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={`${pageClass}${darkMode ? ' dark-mode' : ''}`}>
      <div className="rotate-message">
        <p>Please rotate your device to portrait mode.</p>
      </div>
      
      <VerseNavbar
        variant={variant}
        showText={showText}
        setShowText={setShowText}
        showContent={showContent}
        setShowContent={setShowContent}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Outlet context={{ variant }} />
      <Footer variant={variant} showContent={showContent} />
      <ScrolltoTop />
    </div>
  );
};

export default VerseHubLayout;