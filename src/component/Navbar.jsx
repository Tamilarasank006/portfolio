

function Navbar() {
  return (
    <header className ="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <h1 className ="text-2xl font-bold">TA</h1>
        <nav >
          <ul className=" hidden md:flex gap-5 p-2">
              <li className="text-gray-400 hover:text-white transition">Home</li>
              <li className="text-gray-400 hover:text-white transition">Skills</li>
              <li className="text-gray-400 hover:text-white transition">Projects</li>
              <li className="text-gray-400 hover:text-white transition">Contact</li>
           </ul>
         </nav>
    </header>
  )
}

export default Navbar