import React, { useState } from 'react';
import { motion } from 'framer-motion';

import logo from '../../Assets/images/logo.svg';
import menuImage from '../../Assets/images/icon-menu.svg';
import closeMenuImage from '../../Assets/images/icon-menu-close.svg';


import './NavBar.scss';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='NavBar'>
        <div>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div>

          <div className='nav-names'>
            <button className='buttons'>Home</button>
            <button className='buttons'>New</button>
            <button className='buttons'>Popular</button>
            <button className='buttons'>Trending</button>
            <button className='last-buttons'>Categories</button>
          </div>

          <div>
            <img className='menu-icon' src={menuImage} alt='menu' onClick={() => { setToggle(true); }} />
            {toggle &&
              <motion.div
                className='side-menu'
                whileInView={{ x: [300, 0] }} /* 300px */
                transition={{ duration: 1, ease: 'easeOut' }}
              >

                <div>
                  <ul style={{ marginTop: "6em", paddingLeft: '0' }}>
                    <button className='side-menu-buttons'>Home</button>
                    <button className='side-menu-buttons'>New</button>
                    <button className='side-menu-buttons'>Popular</button>
                    <button className='side-menu-buttons'>Trending</button>
                    <button className='side-menu-buttons'>Categories</button>
                  </ul>
                </div>

                <div>
                  <img className='menu-icon' src={closeMenuImage} alt='close menu' onClick={() => { setToggle(false); }} />
                </div>

              </motion.div>}
          </div>

        </div>
      </div>
    </>

  );
};

export default NavBar;