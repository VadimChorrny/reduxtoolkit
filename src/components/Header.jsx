import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default memo(function Header() {
  return (
    <div className='header__container'>
      <div className='header__container_logo'>
        <Link to='/' className='link'>
          Logo
        </Link>
      </div>
      <div className='header__container_menu'>
        <div className='menu__item'>
          <Link to='/todo' className='link'>
            Todo
          </Link>
        </div>
        <div className='menu__item'>
          <Link to='todoList' className='link'>
            Tasks
          </Link>
        </div>
        <div className='menu__item'>Blog</div>
      </div>
    </div>
  );
});
