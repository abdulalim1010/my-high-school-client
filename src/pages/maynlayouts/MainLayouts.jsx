import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';

const MainLayouts = () => {
  return (
    <div className='bg-blue-400 min-h-screen '>
      <header><NavBar/></header>
      <main><Outlet/></main>
      <footer><Footer/></footer>
    </div>
  );
};

export default MainLayouts;