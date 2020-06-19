import React, { useState } from 'react';
import api from '../../services/api';

import InputMask from 'react-input-mask';




export default function Contact()  {

 
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

function limpaInput() {
  const inputNome = document.querySelector('#nome');
  const inputTel = document.querySelector('#telefone');
  const inputEmail = document.querySelector('#email');
  const inputMen = document.querySelector('#mensagem');
  
  inputNome.value = '';
  inputTel.value = '';
  inputEmail.value = '';
  inputMen.value = '';
}



  async function handleSubmit(e) {
    e.preventDefault();

    // const inputNome = document.querySelector('#nome')
    // const inputTel = document.querySelector('#telefone');
    // const inputEmail = document.querySelector('#email');
    // const inputMen = document.querySelector('#mensagem');

    // if (inputNome.value.length < 3 || inputNome.value.length > 50) {
    //   alert('O nome precisa ter entre 3 e 50 caracteres')
    // } 
    
    // else if (inputTel.value.length >= 10 && inputTel.value.length <= 14 ) {
    //   alert('O telefone precisa ter entre 10 e 12 caracteres')
    // }
    
    // else if (inputMen.value.length < 3 || inputMen.value.length > 1024) {
    //   alert('A mensagem precisa ter entre 3 e 1024 caracteres')
    // } 
    
    // else {
      const data = {
        nome,
        telefone,
        email,
        mensagem
      };
      
      
      try { 
        await api.post('/contato', data);
        localStorage.setItem('contato', JSON.stringify(data));
        limpaInput();
        alert('Mensagem enviada com sucesso!!! Em breve entraremos em contato')
      } catch (err) {
        console.log(err);
        alert("Erro ao enviar, tente novamente");
        }
      }
    // }
    
   

      return(
        <div className='formulario' id="contact">
          <h1>Fale Conosco</h1>
          <form name='form1' id='form1' class='form1'></form>
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

              <button type='submit' onClick={handleSubmit} >Enviar</button>
        </div>
      )
    }