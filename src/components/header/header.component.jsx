import React from 'react';
import './header.scss';

import logoIcon from '../../assets/icons/logo.svg'
import signInIcon from '../../assets/icons/sign-in.svg'
import cartIcon from '../../assets/icons/cart.svg'
import arrowIcon from '../../assets/icons/arrow.svg'

function Header () {
  return (
    <header className="header">
      <a className="logo-link">
        <img src={ logoIcon } className="logo-icon" alt=""/>
      </a>
      <a className="contact-button">contact with us
        <img src={ arrowIcon } className="arrow-icon" alt=""></img>
      </a>
      <ul className="site-navigation">
        <li>
          <a className="sign-in-link">
            sign in
            <img src={ signInIcon } className="sign-in-icon" alt=""></img>
          </a>
        </li>
        <li>
          <button className="cart-icon-button">
            <img src={ cartIcon } className="cart-icon" alt=""></img>
            <span className="cart-item-counter">26</span>
          </button>
        </li>
      </ul> 
    </header>
  )
}

export default Header