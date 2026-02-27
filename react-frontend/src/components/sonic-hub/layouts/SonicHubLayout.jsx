import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../shared-templates/Navbar';
import Footer from '../shared-templates/Footer';

const getVariant = (pathname) => {
  if (pathname.includes('/sonic-hub/characters')) return 'characters';
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

const SonicHubLayout = ({ showText, setShowText, showContent, setShowContent }) => {
  const { pathname } = useLocation();
  const variant = getVariant(pathname);
  const pageClass = PAGE_CLASSES[variant] ?? 'home-page';

  // darkMode lives here so both Sidebar and the page can react to it
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${pageClass}${darkMode ? ' dark-mode' : ''}`}>
      <Navbar
        variant={variant}
        showText={showText}
        setShowText={setShowText}
        showContent={showContent}
        setShowContent={setShowContent}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Outlet context={{ variant }} />
      <Footer variant={variant} />
    </div>
  );
};

export default SonicHubLayout;