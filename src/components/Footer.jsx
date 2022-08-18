import React, { memo } from 'react';
import '../styles/Footer.css';

export default memo(function Footer() {
  return (
    <div className='footer__container'>
      <div className='footer__container_item'>About the service</div>
      <div className='footer__container_item'>Language</div>
      <div className='footer__container_item'>Social media</div>
    </div>
  );
});
