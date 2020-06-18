import React, { Component } from 'react';

import ButHam from '../../img/hamburger-menu-icon.png'

export default class ButtonMob extends Component {

  constructor() {
    super();
    this.state={
      visNav:'flex'
    }
  }

  clickMe() {

    if (this.state.visNav === 'flex') {
      this.setState({
        visNav:'none'
      })
    } else {
      this.setState({
        visNav:'flex'
      })
    }

    document.querySelector('.nav').style.display=this.state.visNav;
  }

  /* Fará a função de toggle*/
    render() {
      return(
        <div className='buttonMob' onClick={this.clickMe.bind(this)}>
          <img className='button-mob' src={ButHam} alt="menu hamburguer"/>
        </div>
      )
    }
}