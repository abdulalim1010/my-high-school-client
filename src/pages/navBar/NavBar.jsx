import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logoimage.avif';
import UseAuth from '../../hooks/UseAuth';

const NavBar = () => {
  const { user, logOut } = UseAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logout successful");
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-800 font-bold underline bg-white px-3 py-1 rounded"
      : "text-blue-800 hover:text-white hover:bg-blue-700 px-3 py-1 rounded transition";

  const navItem = (
    <>
      <li><NavLink to="/" className={getLinkClass}>HOME</NavLink></li>
      <li><NavLink to="/about" className={getLinkClass}>ABOUT</NavLink></li>
      <li><NavLink to="/academics" className={getLinkClass}>ACADEMIC</NavLink></li>
      <li><NavLink to="/galary" className={getLinkClass}>GALLERY</NavLink></li>
      <li><NavLink to="/teachers" className={getLinkClass}>TEACHERS</NavLink></li>
      <li><NavLink to="/events" className={getLinkClass}>EVENTS</NavLink></li>
      <li><NavLink to="/timetable" className={getLinkClass}>TIMETABLE</NavLink></li>
      <li><NavLink to="/dashboard" className={getLinkClass}>DASHBOARD</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm px-4">
      {/* Left: Logo */}
      <div className="navbar-start flex items-center gap-2">
        <img className="w-12 h-12 rounded-full" src={logo} alt="Logo" />
        <span className="text-xl font-bold text-blue-800">My High School</span>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 bg-white">
          {navItem}
        </ul>
      </div>

      {/* Right: User & Mobile Menu */}
      <div className="navbar-end flex items-center space-x-2">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-blue-800 rounded-box shadow z-50 mt-3 w-52 right-0"
          >
            {navItem}
          </ul>
        </div>

        {/* User */}
        {user ? (
          <>
            <img
              src={user?.photoURL || "https://i.ibb.co/SsJP1DM/default-user.png"}
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-blue-800"
              title={user.displayName}
            />
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm bg-blue-800 text-white font-semibold hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
