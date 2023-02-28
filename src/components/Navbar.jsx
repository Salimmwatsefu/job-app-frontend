import React from 'react'
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function Navbar() {



  return (
    <div className=''>
     <header aria-label="Site Header" class=" h-16  ">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
    <div class="flex h-16 items-center justify-between ">
      <div class="md:flex md:items-center md:gap-12 ">
        <a class="block text-gray-600  ml-12 text-xl w-48" href="/">
          <span class="sr-only">Home</span>


          <img src='./Image/image2.png' className='mt-3' style={{width:"140px"}}/>

        
          

        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Site Nav" className=''>
          <ul className="flex items-center gap-14 text-sm font-medium pr-16 my-auto ">
            <NavLink to="/">
            <li className="text-black transition  hover:bg-blue-500 p-2 hover:rounded-3xl active:to-blue-400">
                Home
            </li>
            </NavLink>


           <NavLink to="/jobs">
            <li
             
                className="text-black transition hover:bg-blue-500 p-2 hover:rounded-3xl active:to-blue-400">
             
                Browse Jobs
            
            </li>
            </NavLink>


            <NavLink to="/ehome" >
            <li className="text-black transition hover:bg-blue-500 p-2 hover:rounded-3xl active:to-blue-400" >
                For Employers
             
            </li>
            </NavLink>

            <NavLink to={"/blog"}>
            <li
                className="text-black transition hover:bg-blue-500 p-2 hover:rounded-3xl active:to-blue-400"
              >
                Blog
             
            </li>
            </NavLink>
           
            <NavLink to={"contact"}>
            <li className="text-black transition hover:bg-blue-500 hover:text-white p-2 hover:rounded-3xl active:to-blue-400">
              Contacts
             </li>
            </NavLink>
            

     
    <Dropdown className='bg-blue-500 rounded-md'>
      <Dropdown.Toggle  id="dropdown-basic">
        Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/signup">Signup</Dropdown.Item>
        <Dropdown.Item href="/Login">Login</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


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

