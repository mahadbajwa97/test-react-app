import React from 'react'
import {FaUserCircle, FaRegBell} from 'react-icons/fa';

function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
<nav className="relative flex flex-wrap items-center justify-between px-6 py-3  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            < div
              className=" font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black text-2xl"
            >
              Logo
            </ div>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-black"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-20  ">
              <li className="nav-item">
                < div
                  className="px-3 rounded-full ml-2 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black hover:bg-black hover:text-white "
                 >
                  <span className="">Explore</span>
                </ div>
              </li>
              <li className="nav-item">
                < div
                  className="px-3 ml-2 rounded-full py-2 flex items-center text-sm uppercase font-bold leading-snug text-black  hover:bg-black hover:text-white"
                >
                  <span className="">Classrooms</span>
                </ div>
              </li>
              <li className="nav-item">
                < div
                  className="px-3 rounded-full ml-2 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black  hover:bg-black hover:text-white"
                >
                  <span className="">Create</span>
                </ div>
              </li>
            </ul>
            
          </div>
          <div className="relative lg:self-end">
            <input type="search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-100 rounded-full  " placeholder="Search" required />
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-400 rounded-l-lg rounded-full focus:ring-1 focus:outline-none "><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
       
        </div>
        <div className="text-2xl center ml-5 mt-2"><FaRegBell/></div>
        <div className="text-2xl center ml-5 mt-2"><FaUserCircle/></div>

        </div>
      </nav>  )
}

export default Navbar;