import { Outlet, useLocation } from 'react-router-dom';
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

  return (
    <div className={pageClass}>
      <Navbar
        variant={variant}
        showText={showText}
        setShowText={setShowText}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      <Outlet context={{ variant }} />
      <Footer variant={variant} />
    </div>
  );
};

export default SonicHubLayout;