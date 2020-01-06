import React from 'react';

//Stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        Navbar
        <span className='badge badge-pill badge-info'>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
