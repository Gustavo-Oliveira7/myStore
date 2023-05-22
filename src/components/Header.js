import React, { Component } from 'react';
import logo from '../images/logoStore.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  render() {
    return (
      <nav className='navHeader'>
        <div className='logo'>
          <a href='/' >
            <img src={logo} alt='logo' className='logoHeader'></img>
          </a>
        </div>
        <div className='links'>
          <a href='/categories'>
            CATEGORIAS
            </a>
          <a href='/cart'
          className='cartIcon'>
            <FontAwesomeIcon icon={faCartShopping} size='2xl'/>
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;