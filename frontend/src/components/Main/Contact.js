import React, { useState } from 'react';

import InputMask from 'react-input-mask';

import api from '../../services/api';


export default function Contact()  {

 
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  

  
  async function handleSubmit(e) {
    e.preventDefault();
    
    const data = {
      nome,
      telefone,
      email,
      mensagem
    };
    
  
    try {
      await api.post("/contato", data);
    } catch (err) {
      console.log(err);
      alert("Erro ao enviar, tente novamente");
      }
    }

      return(
        <div className='formulario' id="contact">
          <h1>Fale Conosco</h1>
          <form name='form1' id='form1' class='form1' onSubmit={handleSubmit} action="#" ></form>
              <input type="text" 
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  name='nome' id='nome' 
                  placeholder='nome' />
              
              <InputMask
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)} 
                  type="tel" 
                  name='telefone' 
                  id='telefone' 
                  placeholder='telefone'  
                  mask="(99) 99999-9999" 
                  maskChar=" " />
              
              <input type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  name='email' id='email' 
                  placeholder='email' />
              
              <textarea 
                  name="mensagem" 
                  value={mensagem}
                  onChange={e => setMensagem(e.target.value)}
                  id="mensagem" 
                  placeholder='mensagem' 
                  cols="30" 
                  rows="10">
              </textarea>

              <button type='submit' >Enviar</button>
        </div>
      )
    }