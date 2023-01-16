import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  

  return (
    <div>
     <header aria-label="Site Header" class="bg-white h-16  ">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
    <div class="flex h-16 items-center justify-between ">
      <div class="md:flex md:items-center md:gap-12 ">
        <a class="block text-gray-600  ml-12 text-xl w-48" href="/">
          <span class="sr-only">Home</span>

          <img src='./Image/image2.png' className='' style={{width:"140px"}}/>


        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-14 text-sm font-medium pr-16">
            <NavLink to="/">
            <li className="text-black transition hover:text-gray-500/75">
                Home
            </li>
            </NavLink>


           <NavLink to="/jobs">
            <li
             
                className="text-black transition hover:text-gray-500/75">
             
                Browse Jobs
            
            </li>
            </NavLink>

            <NavLink to={"ehome"}>
            <li className="text-black transition hover:text-gray-500/75" >
                For Employers
             
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
            
            <NavLink href="">
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Account
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/signup">Sign up</a>
    <a className="dropdown-item" href="/Login">Login</a>
    <a className="dropdown-item" href="Login">Logout</a>
  </div>
</div>
          </NavLink>
       

          
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>


    </div>
  )
}

export default Navbar