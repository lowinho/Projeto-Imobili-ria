import React, { Component } from 'react';

export default class Map extends Component {
    render() {
      return(
        <div className='mapsImovel'>
        <iframe id ='map' title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.58362253695!2d-47.50391729815525!3d-23.002333907242736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c61cf6d0bd4e05%3A0xc55ae8412b0f0add!2sBar%20Do%20Jacar%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1592239393250!5m2!1spt-BR!2sbr"  allowfullscreen="" aria-hidden="false" tabindex="0" />
        </div>
        )
      }
    }
