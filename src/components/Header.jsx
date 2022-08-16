import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header__container'>
      <div className='header__container_logo'>Logo</div>
      <div className='header__container_menu'>
        <div className='menu__item'>Search</div>
        <div className='menu__item'>About</div>
        <div className='menu__item'>Blog</div>
      </div>
    </div>
  );
}

export default Header;
