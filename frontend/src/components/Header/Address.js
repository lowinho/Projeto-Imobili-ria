import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import { FaWhatsapp } from 'react-icons/fa'

export default class Address extends Component {
    render() {
      return(
        <div className='address'>
          {/* <Link to="/register" className="back-link"> */}
            <FaWhatsapp className='whats' size={20} />
            <p>(19) 99451-5615</p>  
          {/* </Link> */}
        </div>
      )
    }
}