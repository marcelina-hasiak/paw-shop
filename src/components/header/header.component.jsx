import React from 'react';
import './header.scss';

import logo from '../../assets/icons/logo.svg'

function Header () {
  return (
    <header className="header">
    <div className="logo-and-contact-button-wrapper">
      <a className="site-logo">
        <img src={ logo } className="site-navigation-icon" alt=""/>
      </a>
      <a className="site-logo">contact with us</a>
    </div>
    <ul className="site-navigation">
      <li>
        <a className="site-navigation-link">
          Sign in
          <img src='' className="site-navigation-icon" alt=""></img>
        </a>
      </li>
      <li>
        <button className="site-navigation-link">
          <img src='' className="site-navigation-icon" alt=""></img>
        </button>
      </li>
    </ul> 
  </header>
  )
}

export default Header