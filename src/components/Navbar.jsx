import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu =() => {
        setMenuOpen(!isMenuOpen)
    };

    const navItems = [
        {link:"Home", path: "home"},
        {link:"Service", path: "service"},
        {link:"About", path: "about"},
        {link:"Product", path: "product"},
        {link:"Testimonial", path: "testify"},
        {link:"FAQ", path: "faq"},
    ];
  return (
    <>
    <nav className="bg-gray-200 md:px-14 p-4 max-w-screen-2xl border-b mx-auto fixed top-0 right-0 left-0">
          {/* For large screens */}
          <div className="text-sm container mx-auto flex justify-between items-center font-medium">
              {/* logo */}
              <div className="">
                  <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-secondary">
                      <img src={logo} alt="" className="w-10 inline-block items-center" />
                      <span>Nexcent</span>
                  </a>
              </div>

              {/* navlink */}
              <div className="">
                  <ul className="hidden md:flex md:space-x-3  lg:space-x-8 cursor-pointer">
                      {navItems.map(({ link, path }) => <Link key={link} activeClass='activeClass' spy={true} smooth={true} offset={-100} to={path} className='block hover:text-primary'>{link}</Link>)}
                  </ul>
              </div>

              {/* buttons */}
              <div className="lg:space-x-7 md:space-x-2 hidden md:flex items-center">
                  <button className="">Login</button>
                  <button className="bg-primary text-white px-4 py-2 rounded-md">Sign up</button>
              </div>

              {/* Menu Button  */}
              <div className="md:hidden">
                  <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                      {isMenuOpen ? (<FaXmark className="w-6 h-6 text-secondary" />) : (<FaBars className="w-6 h-6 text-secondary" />)}
                  </button>
              </div>
          </div>

      </nav>
      
      {/* navitem for smaller screen  */}
      <div className={`space-y-4 px-4 pt-24 pb-5 bg-primary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
              {navItems.map(({ link, path }) => <Link key={link} activeClass="active" spy={true} smooth={true} offset={-80} to={path} className="block text-white hover:text-gray-300" onClick={toggleMenu}>{link}</Link>)}
          </div></>
  )
}

export default Navbar