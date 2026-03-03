import { Link } from 'react-router-dom';

const LINKS = {
  sonicWiki: "https://sonic.fandom.com/wiki/Sonic_Wiki_Zone",
  sonicRetro: "https://sonicretro.org/"
};

const VARIANTS = {
  home: {
    heading: 'Welcome to SonicVerse',
    body: (
      <>
        <p className="exo-2">
          SonicVerse is your one-stop shop for learning everything about Sonic. Discover the characters, 
          explore their transformations, and dive into the games that have captured the hearts of so many — 
          and so much more. By the end of it all, you might just become a true Sonic expert… and an even bigger Sonic fan.
        </p>
        <br />
        <p className="exo-2">
          SonicVerse is a tribute to the rich history and vibrant community surrounding Sonic the Hedgehog fans 
          around the world. I hope you enjoy exploring the SonicVerse as much as I enjoyed creating it!
        </p>
        <br />
        <p className="exo-2">
          This is a fan-made project and is not affiliated with SEGA in any way. All media is used for educational 
          purposes and belongs to its respective owners. Images and information are sourced 
          from <a href={LINKS.sonicWiki} target="_blank" rel="noopener noreferrer" className="disc-link-hover">Sonic Wiki Zone</a> and <a href={LINKS.sonicRetro} target="_blank" rel="noopener noreferrer" className="disc-link-hover">Sonic Retro Wiki</a> under
          the Creative Commons Attribution-ShareAlike 3.0 License (CC BY-SA 3.0).
        </p>
      </>
    ),
  },
  characters: {
    heading: 'Characters',
    body: (
      <>
        <p className="exo-2">
          Explore the colorful cast of heroes and villains across the Sonic universe. Get to know 
          each character’s background, personality, preferences, who voices them, and so much more. 
          By the end, you’ll know these characters by heart — and you might even discover a few 
          favorites you truly connect with.
        </p>
        <br></br>
        <ul className="search-directions exo-2">
          <li>
            Use the character list to view all characters available in the database, or type them in yourself
          </li>
        </ul>
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