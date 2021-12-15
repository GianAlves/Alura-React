import react from 'react';
import ListaDeNotas from './components/ListaDeNotas';

function App() {
  return (
      <section>
          <form>
              <input type="text" placeholder='Título' />
              <textarea placeholder='Escreva aqui a sua nota...'/>
              <input type="button" value="Criar Nota" />
          </form>
          <ListaDeNotas/>
      </section>
  );
}

export default App;
