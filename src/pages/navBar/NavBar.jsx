import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logoimage.avif";
import UseAuth from "../../hooks/UseAuth";
import { motion, AnimatePresence } from "framer-motion";
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
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { path: "/", label: "হোম", icon: <AiFillHome /> },
  { path: "/about", label: "আমাদের সম্পর্কে", icon: <AiOutlineInfoCircle /> },
  { path: "/academics", label: "শিক্ষা কার্যক্রম", icon: <AiFillBook /> },
  { path: "/galary", label: "গ্যালারি", icon: <AiFillPicture /> },
  { path: "/teachers", label: "শিক্ষকবৃন্দ", icon: <AiOutlineTeam /> },
  { path: "/events", label: "ইভেন্ট", icon: <AiFillCalendar /> },
  { path: "/timetable", label: "সময়সূচি", icon: <AiOutlineClockCircle /> },
  { path: "/dashboard", label: "ড্যাশবোর্ড", icon: <AiFillDashboard /> },
];

const NavBar = () => {
  const { user, logOut } = UseAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    `nav-underline ${isActive ? "active text-yellow-300" : "text-white/90 hover:text-white"}`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 14 }}
      className={`transition-all duration-500 ${
        scrolled ? "bg-slate-900/90 backdrop-blur-xl shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/30 shadow-lg">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Amantullah</p>
            <h1 className="text-xl font-extrabold text-white">High School</h1>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ path, label, icon }) => (
            <NavLink key={path} to={path} className={getLinkClass}>
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur">
                <img
                  src={user?.photoURL || "https://i.ibb.co/SsJP1DM/default-user.png"}
                  alt="User"
                  className="w-9 h-9 rounded-full object-cover border border-white/40"
                />
                <span className="text-sm font-semibold text-slate-100 hidden md:block">
                  {user?.displayName || "User"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:opacity-90 transition"
              >
                <span className="flex items-center gap-2"><AiOutlineLogout /> লগআউট</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-white text-slate-900 font-semibold shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              <span className="flex items-center gap-2"><AiOutlineLogin /> লগইন</span>
            </Link>
          )}

          <button
            className="lg:hidden w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center border border-white/20"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="lg:hidden px-4 pb-6"
          >
            <div className="glass-panel p-5 space-y-3">
              {navLinks.map(({ path, label, icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-xl transition ${
                      isActive ? "bg-white/15 text-white" : "text-slate-200 hover:bg-white/5"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-xl">{icon}</span>
                  <span className="font-semibold">{label}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
