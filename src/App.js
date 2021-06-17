import React, { Component } from "react";
//import ListaDeNotas from "./componentes/ListaDeNotas/";
import FormularioCadastro from "./componentes/FormularioCadastro/";
//import ListaDeCategorias from "./componentes/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.users = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarUser={this.users.adicionarUser}
        />
        <main className="conteudo-principal">
          {/* <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            users={this.users}
          /> */}
        </main>
      </section>
    );
  }
}
export default App;
