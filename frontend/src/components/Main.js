import React, { Component } from 'react';

import Contact from './Main/Contact';
import Information from './Main/Information';
import Map from './Main/Map';
import Slides from './Main/Slides';

export default class Main extends Component {
    render() {
      return(
        <div className='main'>
          <Slides />
          <Information />
          <Map />
          <Contact />
        </div>
      )
    }
}