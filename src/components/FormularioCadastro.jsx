import React, { Component } from "react";

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
