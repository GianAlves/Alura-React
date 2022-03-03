import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index.js';
import ListaDeNotas from './components/ListaDeNotas/index.js';
import './assets/App.css';
import './assets/index.css';
import ListaDeCategorias from './components/ListaDeCategorias/index.js';
class App extends Component {

    constructor() {
        // @ts-ignore
        super();
        this.state = {
            notas: [],
            categorias: ["Games", "Música"],
        };
    }

    criarNota(titulo, texto, categoria){
        const novaNota = {titulo, texto, categoria};
        const novoArrayNotas = [...this.state.notas, novaNota];
        const novoEstado = {
            notas: novoArrayNotas
        }
        this.setState(novoEstado);
    }

    adicionarCategoria(valorCategoria){
        const novoArrayCategoria = [...this.state.categorias, valorCategoria];
        const novoEstado = {...this.state, categorias:novoArrayCategoria};
        this.setState(novoEstado);
    }

    apagarNota(index){
        let arraynotas = this.state.notas;
        arraynotas.splice(index,1);
        this.setState({notas: arraynotas});
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro 
                    categorias={this.state.categorias}
                    criarNota={this.criarNota.bind(this)}
                 />
                <main className='conteudo-principal'>
                    <ListaDeCategorias adicionarCategoria={this.adicionarCategoria.bind(this)} categorias={this.state.categorias} />
                    <ListaDeNotas apagarNota={this.apagarNota.bind(this)} notas={this.state.notas}/>
                </main>
            </section>
        );
    }
}

export default App;
