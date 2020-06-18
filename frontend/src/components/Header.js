import React, { Component } from 'react';

import Nav from './Header/Nav';
import ButtonMob from './Header/ButtonMob';
import Logo from './Header/Logo';
import Address from './Header/Address';

export default class Header extends Component {
    render() {
      return(
        <div className='header'>
          <Nav />
          <ButtonMob />
          <Logo />
          <Address />
        </div>
      )
    }
}