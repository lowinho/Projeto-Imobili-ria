import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';

import ImgA from '../../img/Images/a.jpg'
import ImgAmin from '../../img/Images/a_min.jpg'

import ImgB from '../../img/Images/b.jpg'
import ImgBmin from '../../img/Images/b_min.jpg'

import ImgC from '../../img/Images/c.jpg'
import ImgCmin from '../../img/Images/c_min.jpg'

import ImgD from '../../img/Images/d.jpeg'
import ImgDmin from '../../img/Images/d_min.jpg'

import ImgE from '../../img/Images/e.jpg'
import ImgEmin from '../../img/Images/e_min.jpg'



export default class Slides extends Component {

  

  
    render() {
      const images = [
        {
          original: ImgA,
          thumbnail: ImgAmin,
        },
        {
          original: ImgB,
          thumbnail: ImgBmin,
        },
        {
          original: ImgC,
          thumbnail: ImgCmin,
        },
        {
          original: ImgD,
          thumbnail: ImgDmin,
        },
        {
          original: ImgE,
          thumbnail: ImgEmin,
        },
      ];

      return <ImageGallery autoPlay='true' items={images} />;
    }
  }
