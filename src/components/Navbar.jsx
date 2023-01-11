import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUp from '../components/user/Signup';
import Login from '../components/user/Login';
import Logout from '../components/user/Logout';

function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

if (!user) return <SignUp onLogin={setUser} />;

  return (
    <div>
     <header aria-label="Site Header" class="bg-white h-16  ">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
    <div class="flex h-16 items-center justify-between ">
      <div class="md:flex md:items-center md:gap-12 ">
        <a class="block text-gray-600  ml-12 text-xl w-48" href="/">
          <span class="sr-only">Home</span>
          <img src='https://neojb.brickthemes.com/wp-content/uploads/2018/09/logo.png' alt="" className='' />
        </a>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Site Nav">
          <ul class="flex items-center gap-14 text-sm font-medium pr-16">
            <NavLink to="/">
            <li>
              <a
                class="text-black transition hover:text-gray-500/75"
              >
                Home
              </a>
            </li>
            </NavLink>


           <NavLink to={"jobs"}>
            <li
             
                class="text-black transition hover:text-gray-500/75">
             
                Browse Jobs
            
            </li>
            </NavLink>

<NavLink to={"ehome"}>
<li>
<a class="text-black transition hover:text-gray-500/75">
For Employers
</a>
</li>
</NavLink>
<NavLink to={"/blog"}>
        <li
            class="text-black transition hover:text-gray-500/75"
          >
            Blog
         
        </li>
        </NavLink>
       
        <NavLink to={"contact"}>
        <li class="text-black transition hover:text-gray-500/75">
          Contacts
         </li>
        </NavLink>
        
        <NavLink to={""}>
        <li class="text-black transition hover:text-gray-500/75 md:hidden"> 
          Account
        </li>
     </NavLink>

    <div class="md:block">
      <select>
        <option value="">Account</option>
        <option value=""> 
          <NavLink to="/SignUp">Sign Up</NavLink>
        </option>
        <option value="">
          <NavLink to="/Login" exact component = {Login} setUser =  {setUser} >Log in</NavLink>
        </option>
        <option value="">
          <NavLink to="/Logout" exact component= {Logout} setUser ={setUser} >Log out</NavLink>
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

