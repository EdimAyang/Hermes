import { FaBars , FaTimes } from "react-icons/fa"
import { useRef } from "react";
import{HashLink as Link} from "react-router-hash-link"
import "../Constants/Navbar.css";

export default function Navbar() {
  const navRef = useRef()
  const showNavBar = function(){
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <header>
      <Link to="#home" className="Link_h1"><h1>hermes</h1></Link>
      <nav ref={navRef} className='navigations'>
        <Link to="#menu" onClick={showNavBar} smooth>Menu</Link>
        <Link to="#home" onClick={showNavBar} smooth>Profile</Link>
        <Link to="#contact" onClick={showNavBar} smooth>Contact</Link>

        <button className="nav-btn nav-close" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>

        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
    </header>
  )
}
