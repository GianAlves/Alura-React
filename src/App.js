import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index.js';
import ListaDeNotas from './components/ListaDeNotas/index.js';
import './assets/App.css';
import './assets/index.css';
import ListaDeCategorias from './components/ListaDeCategorias/index.js';
import Categoria from './components/dados/Categorias.js';
import ArrayDeNotas from './components/dados/Notas.js';
class App extends Component {

    constructor() {
        // @ts-ignore
        super();
        this.categorias = new Categoria();
        this.notas = new ArrayDeNotas();
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro 
                    categorias={this.categorias}
                    criarNota={this.notas.adicionarNota.bind(this.notas)}
                 />
                <main className='conteudo-principal'>
                    <ListaDeCategorias adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} categorias={this.categorias} />
                    <ListaDeNotas apagarNota={this.notas.apagarNota.bind(this.notas)} notas={this.notas}/>
                </main>
            </section>
        );
    }
}

export default App;
