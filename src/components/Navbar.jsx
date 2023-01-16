import React from 'react'
import { NavLink } from 'react-router-dom';


function Navbar() {
  

  return (
    <div>
     <header aria-label="Site Header" className="bg-white h-16  ">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
    <div className="flex h-16 items-center justify-between ">
      <div className="md:flex md:items-center md:gap-12 ">
        <a className="block text-gray-600  ml-12 text-xl w-48" href="/">
          <span className="sr-only">Home</span>

          <img src='./Image/image4.png' className='' style={{width:"140px", height:""}}/>
        </a>
      </div>

      <div className="hidden md:block text-gray-600">
        <nav aria-label="Site Nav" >
          <ul className="flex items-center gap-14 text-sm font-medium pr-16 ">
            <NavLink to="/">
            <li className="text-black transition hover:text-gray-500/75">Home
            </li>
            </NavLink>


           <NavLink to="/jobs">
            <li
             
                className="text-black transition hover:text-gray-500/75">
             
                Browse Jobs
            
            </li>
            </NavLink>


            <NavLink to={"ehome"}>
            <li className="text-black transition hover:text-gray-500/75">For Employers
            </li>
            </NavLink>

            <NavLink to={"/blog"}>
            <li
                className="text-black transition hover:text-gray-500/75"
              >
                Blog
             
            </li>
            </NavLink>
           
            <NavLink to={"contact"}>
            <li className="text-black transition hover:text-gray-500/75">
              Contacts
             </li>
            </NavLink>
            
      <div className="md:block">
      <select>
        <option value="">Account</option>
        <option value=""> 
          <NavLink to="/signUp">Sign Up</NavLink>
        </option>
        <option value="">
          <NavLink to="/Login">Log in</NavLink>
        </option>
        <option value="">
          <NavLink to="/signup">Log out</NavLink>
        </option>
      </select>
    </div>
      </ul>
    </nav>
  </div>
</div>
</div>
</header>
</div>
)
}

export default Navbar;

