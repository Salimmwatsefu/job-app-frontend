import React from 'react'
import { NavLink, NavNavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AiOutlineDown  } from "react-icons/ai";
function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  }
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };


  return (
    <div>
      <nav className="text-black px-10 sm:mx-20 md:max-w-[1100px] max-w-[410px] z-10 border-b border-gray-400">
      <div className="md:my-6 flex h-10 text-center items-center justify-center  ">
        <div className="sm:ml-0 font-bold uppercase ml-[280px]  mt-3">
          <NavLink to={"/"}>
          <p className="text-center w-40 text-black ">Career Connect</p>
          </NavLink>
        </div>

        <div className="w-[50%] pl-[500px] flex items-center justify-center  ">
          <ul className="hidden md:flex gap-10  mt-3 text-black">
            <NavLink to={"/jobs"}>
              <li className='text-black relative group'>
              <span>Jobs</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#BA4B2F]  transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
            <NavLink to={"/ehome"}>
              <li className='text-black relative group'>
              <span>Employers</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#BA4B2F]  transition-all duration-300 group-hover:w-full"></span>
                </li>
            </NavLink>
            <NavLink to={"/blog"}>
              <li className='text-black relative group'>
              <span>Blog</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#BA4B2F]  transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li className='text-black relative group'>
              <span>Contacts</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#BA4B2F]  transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
          </ul>

          

          <div className="sm:hidden mr-[600px]">
            {isMenuOpen ? (
              <HiX onClick={toggleMenu} className="text-2xl text-black" />
            ) : (
              <HiMenu onClick={toggleMenu} className="text-2xl" />
            )}
          </div>
        </div>

       

        {isMenuOpen && (
          <div className="md:hidden absolute top-11 right-48 w-52 bg-white  z-[900px]   ">
            <ul className="flex flex-col text-left gap-1 z-[900px]  pr-3 pl-5">
            <NavLink to={"/"}>
              <li className='text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white p-1'>Home</li>
            </NavLink>
            <NavLink to={"/jobs"}>
              <li className='text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white p-1'>Jobs</li>
            </NavLink>
            <NavLink to={"/ehome"}>
              <li className='text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white p-1'>Employers</li>
            </NavLink>
            <NavLink to={"/blog"}>
              <li className='text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white p-1'>Blog</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li className='text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white p-1'>Contacts</li>
            </NavLink>

            <li className=" mt-3 group">
      <button
        className="flex items-center justify-between px-4 py-2 text-sm font-medium border-[#BA4B2F] border-2 text-[#BA4B2F] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        id="dropdown-button"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Account
        <span className="ml-2 text-xs mt-1">
          <AiOutlineDown />
        </span>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-[#FCF5EB] rounded-md shadow-lg z-10"
          aria-labelledby="dropdown-button"
          role="menu"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <a
            href="/signup"
            className="block px-4 py-2 text-sm text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white"
            role="menuitem"
          >
            Signup
          </a>
          <a
            href="/login"
            className="block px-4 py-2 text-sm text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white"
            role="menuitem"
          >
            Login
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white"
            role="menuitem"
          >
            Logout
          </a>
        </div>
      )}
    </li>
              
            </ul>

            
          </div>
        )}

         
  
    <div className="sm:ml-52 hidden sm:block  sm:relative -ml-[260px]  group">
      <button
        className="flex items-center justify-between px-4 py-2 text-sm font-medium border-[#BA4B2F] border-2 text-[#BA4B2F] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        id="dropdown-button"
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Account
        <span className="ml-2 text-xs mt-1">
          <AiOutlineDown />
        </span>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-[#FCF5EB] rounded-md shadow-lg z-10"
          aria-labelledby="dropdown-button"
          role="menu"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <a
            href="/signup"
            className="block px-4 py-2 text-sm text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white"
            role="menuitem"
          >
            Signup
          </a>
          <a
            href="/login"
            className="block px-4 py-2 text-sm text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white"
            role="menuitem"
          >
            Login
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-[#BA4B2F] hover:bg-[#BA4B2F] hover:text-white"
            role="menuitem"
          >
            Logout
          </a>
        </div>
      )}
    </div>
        
      </div>
    </nav>
    </div>
     
)
}
export default Navbar;















