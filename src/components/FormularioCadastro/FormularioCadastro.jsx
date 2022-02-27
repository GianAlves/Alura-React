import React, { Component } from "react";
import './estilo.css';

class FormularioCadastro extends Component {

    constructor() {
        // @ts-ignore
        super();
        this.titulo = "";
    }

    handleMudancaTitulo(evento){
        this.titulo = evento.target.value
        console.log(this.titulo);
    }

    render() {
        return (
        <form className='form-cadastro'>
            <input 
                className='form-cadastro_input'
                type="text"
                placeholder="Título"
                onChange={this.handleMudancaTitulo.bind(this)} />
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
