const VARIANTS = {
  home: {
    heading: 'Welcome to SonicVerse',
    body: (
      <>
        <p className="exo-2">
          SonicVerse is the one stop shop on learning everything about Sonic. Discover the
          characters, see the transformations, know the games that captured the hearts of many,
          and so much more. Hopefully after all this, you'll be a Sonic expert and a Sonic fan!
        </p>
        <br />
        <p className="exo-2">
          This is a fan-made project and is not affiliated with SEGA in any way. All media used is for
          educational purposes and belongs to their respective owners. Pictures and information are all from
          Fandom SonicWiki. SonicVerse is a tribute to the rich history and vibrant community of Sonic the Hedgehog
          fans around the world. I hope you enjoy exploring the SonicVerse as much as I enjoyed creating it!
        </p>
      </>
    ),
  },
  characters: {
    heading: 'Characters',
    body: (
      <>
        <p className="exo-2">
                Get to know about each character's background, personality, preferences, who voices them, 
                and so much more. By the end of this, you'll know each character by heart, you may even find your favorites
                that you can connect with.
        </p>
        <br></br>
        <p className="exo-2">
            - It may take a little bit to load the character information, so please be patient.
        </p>
        <p className="exo-2">
            - Search the character list to find specific characters and type them exactly as they appear.
        </p>
      </>
    ),
  },
  /* 
    transformations: {
       heading: 'Transformations',
       body: (
        <>
           <p className="exo-2">
             ...
           </p>
        </>
       ),
     }, 
  */
};

const Disclaimer = ({ variant = 'home' }) => {
  const { heading, body } = VARIANTS[variant] ?? VARIANTS.home;

  return (
    <section className="disclaimer">
      <div className="disclaimer-content">
        <div className="d-content">
          <h2 className="russo-one">{heading}</h2>
          {body}
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;