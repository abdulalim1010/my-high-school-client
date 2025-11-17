import React from "react";
import { Outlet } from "react-router";
import NavBar from "../navBar/NavBar";


const MainLayouts = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <header className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </header>

      <main className="relative z-10 pt-28 pb-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <Outlet />
        </div>
      </main>

      <footer className="px-4 sm:px-6 lg:px-10 pb-10">
        <div className="max-w-7xl mx-auto">
         
        </div>
      </footer>
    </div>
  );
};

export default MainLayouts;
