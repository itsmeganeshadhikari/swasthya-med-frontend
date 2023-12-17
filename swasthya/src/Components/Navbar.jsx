import {  FaBars,FaTimes } from 'react-icons/fa';
import {useRef} from 'react';
function Navbar() {
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classlist.toggle("responsive_nav");
    }
  return (
    <header>
        <div ref={navRef}>
            <a href="#Home">Home</a>
            <a href="#Contact">Contact</a>
            <a href="#About">About</a>
            <a href="#Services">Services</a>
            <button onClick={showNavbar}>
          <FaBars/>
            </button>
            </div>
        <button onClick={showNavbar}>
            <FaTimes/>
        </button>
        
    </header>
  )
}

export default Navbar;
