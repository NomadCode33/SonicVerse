import '../../../css/sonic-hub/layout.css';
import '../../../css/sonic-hub/home.css';
import '../../../css/sonic-hub/characters.css';
// import '../../css/transformations.css';  👈 add as you grow
// import '../../css/games.css';

const Footer = ({ showContent }) => {
  if (!showContent) return null;
  return (
    <footer className="footer">
      <div className="citation">
        Sonic the Hedgehog and related characters are © SEGA. Content adapted in part from Sonic Wiki Zone 
        and Sonic Retro Wiki under CC BY-SA 3.0.
      </div>
    </footer>
  );
};

export default Footer;

/*
Old Way:
const Footer = ({ showContent }) => {
  if (!showContent) return null;
  return (
    <footer className="footer" />
  );
};
*/