import { Link } from 'react-router-dom';
import "../../css/home.css"

const Navbar = ({ showText, setShowText, showContent, setShowContent }) => {
  return (
    <header className="clearfix">
			<section className="header-box">
				<div className="head-title">
					  <Link to="/"><img className="icon" src="/img/icons/Adv3_sonic_idle.webp" alt="SAdv3 Sonic Idle"/></Link>
            <h1 className="site-blurb exo-2">SonicVerse</h1>
				</div>
				
				<div className="nav-bar">
					<nav>
						<ul className="nav-box">
							{/*<li><Link className="nav-button exo-2" to="/characters">Characters</Link></li>
							<li><Link className="nav-button exo-2" to="">Songs</Link></li>
							<li><Link className="nav-button exo-2" to="">Menu</Link></li>*/}
              <li>
                <button className="nav-button exo-2" onClick={() => setShowText(prev => !prev)}>
                  {showText ? "Hide Text" : "Show Text"}
                </button>
              </li>
              <li>
                <button className="nav-button exo-2" onClick={() => setShowContent(prev => !prev)}>
                  {showContent ? "Hide All" : "Show All"}
                </button>
              </li>
						</ul>
					</nav>
				</div>
			</section>
		</header>
  );
}

export default Navbar

/*
  <nav className="bg-blue-600 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-white">
        Sonic App
      </h1>

      <ul className="flex gap-6 text-white">
        <li className="bar hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Characters</li>
        <li className="hover:underline cursor-pointer">About</li>
      </ul>
  </nav>
  */

  /*return (
    <nav className="bg-blue-500 p-4 text-white">
        <div>Navbar</div> 
    </nav>
  )*/