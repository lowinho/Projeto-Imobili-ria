import React, { Component } from 'react';


import ImgLogo from '../../img/logo.png';

export default class Logo extends Component {
    render() {
      return(
        <div className='logo'>
          <picture>
            <img src={ImgLogo} alt="Logomarca"/>
          </picture>
        </div>
      )
    }
}