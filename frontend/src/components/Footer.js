import React, { Component } from 'react';

import LogoImg from '../img/logo-footer.png';

export default class Footer extends Component {
    render() {
      return(
        <div className='footer'>
          <div className='logo-footer'>
            <img src={LogoImg} alt="Logomarca da footer"/>
          </div>

          <div className='endereco-footer'>
            <h3>Endereço: Rua Antônio Pires, 129 Centro</h3>
            <h3>Telefone: (19) 99451-5615</h3>
            <h3>Email: zequinhaimoveis@gmail.com</h3>
          </div>
        </div>
      )
    }
}