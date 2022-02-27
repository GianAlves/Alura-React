import React, { Component } from "react";
import './estilo.css';

class FormularioCadastro extends Component {
  render() {
    return (
      <form className='form-cadastro'>
        <input 
            className='form-cadastro_input'
            type="text"
            placeholder="Título" />
        <textarea 
            rows={15}
            placeholder="Escreva aqui a sua nota..." />
        <input 
            className='form-cadastro_input form-cadastro_submit'
            type="button"
            value="Criar Nota" />
      </form>
    );
  }
}

export default FormularioCadastro;
