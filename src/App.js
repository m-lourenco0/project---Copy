import React, { Component } from "react";
import ListaDeNotas from "./componentes/ListaDeNotas/";
import FormularioCadastro from "./componentes/FormularioCadastro/";
import "./assets/App.css";

class App extends Component {
  criarNota(titulo, texto) {
    console.log("Uma nova nota foi criada " + this.titulo + " " + this.texto);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas />
      </section>
    );
  }
}
export default App;
