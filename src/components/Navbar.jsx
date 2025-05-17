import { Link  } from "react-router-dom"

function Navbar() {
  return (
    <header className ="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <h1 className ="text-2xl font-bold">TA</h1>
        <nav>
          <ul className="flex gap-5 p-2">
              <li className="text-gray-400 hover:text-white transition"><Link to="/">Home</Link></li>
              <li className="text-gray-400 hover:text-white transition"><Link to="Skills">Skills</Link></li>
              <li className="text-gray-400 hover:text-white transition"><Link to="Projects">Projects</Link></li>
              <li className="text-gray-400 hover:text-white transition"><Link to="Contact">Contact</Link></li>
           </ul>
         </nav>
    </header>
  )
}

export default Navbar