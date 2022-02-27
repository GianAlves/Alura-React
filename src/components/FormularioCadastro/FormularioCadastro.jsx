import React, { Component } from "react";
import './estilo.css';

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva aqui a sua nota..." />
        <input type="button" value="Criar Nota" />
      </form>
    );
  }
}

export default FormularioCadastro;
