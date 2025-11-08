import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoimage.avif";
import UseAuth from "../../hooks/UseAuth";
import { motion } from "framer-motion";
import {
  AiFillHome,
  AiOutlineInfoCircle,
  AiFillBook,
  AiFillPicture,
  AiOutlineTeam,
  AiFillCalendar,
  AiOutlineClockCircle,
  AiFillDashboard,
  AiOutlineLogout,
  AiOutlineLogin,
} from "react-icons/ai";

const NavBar = () => {
  const { user, logOut } = UseAuth();
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      alert("সফলভাবে লগআউট হয়েছে!");
    } catch (error) {
      alert("লগআউট ব্যর্থ হয়েছে: " + error.message);
    }
  };

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-900 font-semibold underline bg-white/70 px-3 py-1 rounded flex items-center gap-2"
      : "text-white hover:text-yellow-200 px-3 py-1 rounded flex items-center gap-2 transition-all duration-300";

  const navItem = (
    <>
      <li><NavLink to="/" className={getLinkClass}><AiFillHome /> হোম</NavLink></li>
      <li><NavLink to="/about" className={getLinkClass}><AiOutlineInfoCircle /> আমাদের সম্পর্কে</NavLink></li>
      <li><NavLink to="/academics" className={getLinkClass}><AiFillBook /> শিক্ষা কার্যক্রম</NavLink></li>
      <li><NavLink to="/galary" className={getLinkClass}><AiFillPicture /> গ্যালারি</NavLink></li>
      <li><NavLink to="/teachers" className={getLinkClass}><AiOutlineTeam /> শিক্ষকবৃন্দ</NavLink></li>
      <li><NavLink to="/events" className={getLinkClass}><AiFillCalendar /> ইভেন্ট</NavLink></li>
      <li><NavLink to="/timetable" className={getLinkClass}><AiOutlineClockCircle /> সময়সূচি</NavLink></li>
      <li><NavLink to="/dashboard" className={getLinkClass}><AiFillDashboard /> ড্যাশবোর্ড</NavLink></li>
    </>
  );

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className={`w-full shadow-md transition-all duration-500 ${
        scrolled
          ? "bg-blue-800/95 backdrop-blur-md"
          : "bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4 py-3">
        {/* Left: Logo */}
        <div className="navbar-start flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-lg md:text-xl font-bold text-white">আমার বিদ্যালয়</span>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2">{navItem}</ul>
        </div>

        {/* Right: User */}
        <div className="navbar-end flex items-center space-x-2">
          {user ? (
            <>
              <img
                src={user?.photoURL || "https://i.ibb.co/SsJP1DM/default-user.png"}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-red-500 text-white hover:bg-red-600 flex items-center gap-1"
              >
                <AiOutlineLogout /> লগআউট
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm bg-white text-blue-800 font-semibold hover:bg-gray-100 flex items-center gap-1"
            >
              <AiOutlineLogin /> লগইন
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
