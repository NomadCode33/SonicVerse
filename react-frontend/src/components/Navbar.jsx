import "../css/nav.css"

const Navbar = () => {
  return (
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
  );
  
  /*return (
    <nav className="bg-blue-500 p-4 text-white">
        <div>Navbar</div> 
    </nav>
  )*/
}

export default Navbar