import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logoimage.avif';
import UseAuth from '../../hooks/UseAuth';

const NavBar = () => {
  const { user,  logOut } = UseAuth(); // get user and logout function

  const handleLogout = async () => {
    try {
      await  logOut();
      alert("Logout successful");
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-black font-bold underline"
      : "text-white nav-underline";

  const navItem = (
    <>
      <li><NavLink to="/" className={getLinkClass}>HOME</NavLink></li>
      <li><NavLink to="/about" className={getLinkClass}>ABOUT</NavLink></li>
      <li><NavLink to="/academics" className={getLinkClass}>ACADEMIC</NavLink></li>
      <li><NavLink to="/galary" className={getLinkClass}>GALLERY</NavLink></li>
      <li><NavLink to="/teachers" className={getLinkClass}>TEACHERS</NavLink></li>
      <li><NavLink to="/time-table" className={getLinkClass}>TIMETABLE</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-blue-600 shadow-sm">
      <div className="navbar-start p-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-black bg-white menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navItem}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className='w-12 h-12 rounded-full' src={logo} alt="Logo" />
          <span className="text-xl font-bold text-white">My High School</span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {navItem}
        </ul>
      </div>

      <div className="navbar-end space-x-2 pr-4">
        {user ? (
          <>
            {/* User Photo */}
            <img
              src={user?.photoURL || "https://i.ibb.co/SsJP1DM/default-user.png"}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white"
              title={user.displayName}
            />
            <button onClick={handleLogout} className="btn btn-sm bg-red-600 text-white hover:bg-red-700">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-sm bg-white text-blue-600 font-semibold hover:bg-blue-100">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
