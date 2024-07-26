import { FaBars , FaTimes } from "react-icons/fa"
import { useRef } from "react";
import{Link} from "react-router-dom";
import "../Constants/Navbar.css";

export default function Navbar() {
  const navRef = useRef()
  const showNavBar = function(){
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <header>
      <Link to="/" className="Link_h1"><h1>hermes</h1></Link>
      <nav ref={navRef} className='navigations'>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>

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
