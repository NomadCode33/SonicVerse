const VARIANTS = {
  home: {
    title: 'SonicVerse',
  },
  characters: {
    title: 'Characters',
  },
  // transformations: {
  //   title: 'Transformations',
  // },
};

const Hero = ({ variant = 'home', showText }) => {
  const { title } = VARIANTS[variant] ?? VARIANTS.home;

  return (
    <section id="nav-select" className="pic-rest">
      {showText && (
        <h1 className="pop-title luckiest-guy">{title}</h1>
      )}
    </section>
  );
};

export default Hero;

/*
id="vnav-select"*/

/*

<section 
      className="pic-rest"
      style={{ 
        marginTop: window.innerWidth <= 480 ? '1.5rem' 
                : window.innerWidth <= 768 ? '2rem' 
                : '5rem' 
      }}
    >
*/
