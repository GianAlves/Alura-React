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
                    categorias={this.categorias.categorias}
                    criarNota={this.notas.adicionarNota}
                 />
                <main className='conteudo-principal'>
                    <ListaDeCategorias adicionarCategoria={this.categorias.adicionarCategoria} categorias={this.categorias.categorias} />
                    <ListaDeNotas apagarNota={this.notas.apagarNota} notas={this.notas.notas}/>
                </main>
            </section>
        );
    }
}

export default App;
