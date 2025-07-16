import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';

const MainLayouts = () => {
  return (
    <div>
      <header><NavBar/></header>
      <main><Outlet/></main>
      <footer><Footer/></footer>
    </div>
  );
};

export default MainLayouts;