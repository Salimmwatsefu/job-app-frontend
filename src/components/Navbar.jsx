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
          <img src='https://neojb.brickthemes.com/wp-content/uploads/2018/09/logo.png' className='' />
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


           <NavLink to={""}>
            <li>
              <a
                class="text-black transition hover:text-gray-500/75"
              >
                Browse Jobs
              </a>
            </li>
            </NavLink>

            <NavLink to={""}>
            <li>
              <a
                class="text-black transition hover:text-gray-500/75"
              >
                Post a job
              </a>
            </li>
            </NavLink>

            <NavLink to={"blog"}>
            <li>
              <a
                class="text-black transition hover:text-gray-500/75"
              >
                Blog
              </a>
            </li>
            </NavLink>

            <NavLink to={""}>
            <li>
              <a
                class="text-black transition hover:text-gray-500/75"
              >
                Account
              </a>
            </li>
            </NavLink>

            <NavLink to={"contact"}>
            <li>
              <a
                class="text-black transition hover:text-gray-500/75"
              >
                Contacts
              </a>
            </li>
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