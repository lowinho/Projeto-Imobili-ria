import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


export default class Contato extends Component {
  render() {
    return (
        <div className='app'>
          <Header />
          <Main />
          <Footer />
        </div>
    );
  }
}