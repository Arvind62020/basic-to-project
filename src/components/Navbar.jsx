import { useState } from 'react';
import Imag from '../assets/icon-img.jpeg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a><img className='w-12 h-12 m-4' src={Imag} alt="Logo" /></a>
        </div>
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex lg:flex xl:flex'>
          <div>
            <ul className="flex flex-row justify-between gap-5 cursor-pointer">
              <li className="hover:text-primary">Home</li>
              <li className="hover:text-primary">Tour Plan</li>
              <li className="hover:text-primary">Contact us</li>
              <li className="hover:text-primary">About Us</li>
              <li>
                <div className="bg-brandGreen border-none rounded-lg p-1 hover:bg-green-600">
                  Request Callback
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center mr-4">
          <button 
            className="flex flex-col justify-center items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Full width below navbar */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-base-100 shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="w-full text-center hover:bg-gray-100 hover:text-black py-2"><a>Home</a></li>
            <li className="w-full text-center hover:bg-gray-100 hover:text-black py-2"><a>Tour Plan</a></li>
            <li className="w-full text-center hover:bg-gray-100 hover:text-black py-2"><a>Contact us</a></li>
            <li className="w-full text-center hover:bg-gray-100 hover:text-black py-2"><a>About Us</a></li>
            <li className="w-full text-center py-2">
              <div className="bg-brandGreen border-none rounded-lg p-1 hover:bg-green-600 mx-auto w-1/2">
                Request Callback
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;