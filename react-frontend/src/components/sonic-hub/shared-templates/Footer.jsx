import '../../../css/sonic-hub/layout.css';
import '../../../css/sonic-hub/home.css';
import '../../../css/sonic-hub/characters.css';
// import '../../css/transformations.css';  👈 add as you grow
// import '../../css/games.css';

const Footer = ({ showContent }) => {
  if (!showContent) return null;
  return (
    <footer className="footer" />
  );
};

export default Footer;