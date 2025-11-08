import React from "react";
import { Outlet } from "react-router";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const MainLayouts = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 
      dark:from-gray-900 dark:via-blue-900 dark:to-blue-700 transition-all duration-700"
    >
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </header>

      {/* Main Content */}
      <main >
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayouts;
