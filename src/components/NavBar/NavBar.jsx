import React from 'react';
import logo from '../../Assets/images/logo.svg';

import './NavBar.scss';

const NavBar = () => {
  return (
    <>
      <div className='NavBar'>
        <div>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div>
          <button className='Buttons'>Home</button>
          <button className='Buttons'>New</button>
          <button className='Buttons'>Popular</button>
          <button className='Buttons'>Trending</button>
          <button className='Buttons'>Categories</button>
        </div>
      </div>
    </>

  );
};

export default NavBar;