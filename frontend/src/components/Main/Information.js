import React, { Component } from 'react';
import InformationItem from './InformationItem';

import { FaAngleRight } from 'react-icons/fa';
import ImgOk from '../../img/Images/ok.jpg'

export default class Information extends Component {
    render() {

      const inf1 = {
        
         alt:'ótima localização',
         title:'Espaço de primeira',
         text:'Ótimo apartamento com estrutura de primeira.',
         value:'800,00'
      }

      return(
        <div>

        <div className='information' >
          <ul>
            <li><FaAngleRight></FaAngleRight> Apartamentos com 2 dormitórios</li>
            <li><FaAngleRight></FaAngleRight> 1 Suíte</li>
            <li><FaAngleRight></FaAngleRight> Banheiro</li>
            <li><FaAngleRight></FaAngleRight> Sala de TV</li>
            <li><FaAngleRight></FaAngleRight> Condomínio com Playground</li>
            <li><FaAngleRight></FaAngleRight> Churrasqueira</li>
            <li><FaAngleRight></FaAngleRight> Piscina Compartilhada</li>
          </ul>
          </div>
          <div className='information-text' id="information">
            <h1>Informações</h1>
            <p>Apartamento com dois quartos com piso em cerâmica, sala ampla, cozinha americana e uma suite.</p>
            <p>Agende hoje mesmo uma visita e venha conhecer esse imóvel.</p>
          </div>

         <InformationItem 
         image={ImgOk}
         {...inf1} />

        </div>
      )
    }
}