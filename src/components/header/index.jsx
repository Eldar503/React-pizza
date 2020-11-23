import React from 'react';
import logo from '../../assets/Group 1.png';
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row row'>
          <div className='header__logo logo'>
            <img src={logo} alt='logo' />
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
