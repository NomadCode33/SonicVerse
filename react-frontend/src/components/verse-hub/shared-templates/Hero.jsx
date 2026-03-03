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
    <section className="pic-rest">
      {showText && (
        <h1 className="pop-title luckiest-guy">{title}</h1>
      )}
    </section>
  );
};

export default Hero;