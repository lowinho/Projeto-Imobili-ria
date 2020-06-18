import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends Component {
    render() {
      return(
        <div className='nav'>
        <Link to='/'>Home</Link>
        <AnchorLink href='#map'>Mapa</AnchorLink>
        <AnchorLink href='#information'>Informações</AnchorLink>
        <AnchorLink href='#contact'>Contato</AnchorLink>
        </div>
      )
    }
}