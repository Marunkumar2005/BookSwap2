import React, { useEffect, useState } from 'react'
import Login from '../Login'

const Navbar = () => {
 
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = (
    <>
      <li className=''><a href='/'>Home</a></li>
      <li><a href='/Course'>Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li ><a>About</a></li>
    </>
  )

  return (
    <>
   
      <div
        className={`  bg-gradient-to-t from-white via-violet-200 to-blue-200
          sticky top-0 z-50
          transition-all duration-300
          ${sticky ? 'bg-lime-100 shadow-md' : 'bg-gray-500 '}
        `}
      >
       
       
        <div className="max-w-screen-2xl mx-auto md:px-20 px-4 mb-0 ">
          <div className="navbar">

            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>

                <ul
                  tabIndex={-1}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-green-300"
                >
                  {navItems}
                </ul>
              </div>

              <a className=" bg-voilet-500 btn btn-ghost text-2xl text-blue-700 hover:rounded-lg ">BookZoneX</a>
            </div>

            <div className=" text-indigo-900 navbar-end space-x-4">
              <div className=" pr-10 pl-10 mr-20 bg-gradient-to-t from-rose-50 via-fuchsia-200 to-violet-100 navbar-center hidden lg:flex rounded-lg ">
                <ul className="menu menu-horizontal px-1 text-lg  ">
                  {navItems}
                </ul>
              </div>

              {/* //darkmode  button */}
 
              <a className="bg-sky-800 text-red-100 px-3 py-2 rounded-md hover:bg-sky-600 duration-300 cursor-pointer "onClick={()=>document.getElementById('my_modal_1').showModal()}>
                Login
              </a>
              <Login/>
            </div>

          </div>
        </div>
      </div>
     
    </>
  )
}


export default Navbar
