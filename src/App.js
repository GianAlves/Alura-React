import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/index.js';
import ListaDeNotas from './components/ListaDeNotas/index.js';
import './assets/App.css';
import './assets/index.css';
class App extends Component {

    criarNota(titulo, texto){
        console.log(`Nota criada com titulo ${titulo}, e texto ${texto}.`);
    }

    render() {
        return (
            <section className="conteudo">
                <FormularioCadastro criarNota={this.criarNota} />
                <ListaDeNotas/>
            </section>
        );
    }
}

export default App;
