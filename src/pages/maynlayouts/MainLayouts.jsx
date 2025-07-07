import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../navBar/NavBar';

const MainLayouts = () => {
  return (
    <div>
      <header><NavBar/></header>
      <main><Outlet/></main>
      <footer></footer>
    </div>
  );
};

export default MainLayouts;