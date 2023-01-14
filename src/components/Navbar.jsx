import React from 'react'
import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';
// import SignUp from '../components/user/Signup';
// import Login from '../components/user/Login';
// import Logout from '../components/user/Logout';

function Navbar({setUser}) {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     //auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

// if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
     <header aria-label="Site Header" className="bg-white h-16  ">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
    <div className="flex h-16 items-center justify-between ">
      <div className="md:flex md:items-center md:gap-12 ">
        <a className="block text-gray-600  ml-12 text-xl w-48" href="/">
          <span className="sr-only">Home</span>
          <img src='https://neojb.brickthemes.com/wp-content/uploads/2018/09/logo.png' alt="" classNameName='' />
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-14 text-sm font-medium pr-16">
            <NavLink to="/">
            <li>
              <a
                className="text-black transition hover:text-gray-500/75"
              >
                Home
              </a>
            </li>
            </NavLink>


           <NavLink to="/jobs">
            <li
             
                className="text-black transition hover:text-gray-500/75">
             
                Browse Jobs
            
            </li>
            </NavLink>

            <NavLink to={""}>
            <li>
              <a
                className="text-black transition hover:text-gray-500/75"
              >
                Post a job
              </a>
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