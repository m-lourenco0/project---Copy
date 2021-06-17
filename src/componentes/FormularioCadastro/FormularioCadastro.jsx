import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.id = "";
    this.name = "";
    this.email = "";
    this.state = {users:[]}
    this._novosUsers = this._novosUsers.bind(this);
  }

  componentDidMount(){
    //this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    //this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novosUsers(users){
    this.setState({...this.state, users});
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaNome(evento) {
    evento.stopPropagation();
    this.name = evento.target.value;
  }

  _handleMudancaEmail(evento) {
    evento.stopPropagation();
    this.email = evento.target.value;
  }

  _criarUser(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarUser(this.id, this.name, this.email);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarUser.bind(this)}>
        <select
          // onChange={this._handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem Categoria</option>

          {/* {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })} */}
        </select>

        <input
          type="text"
          placeholder="Nome"
          className="form-cadastro_input"
          onChange={this._handleMudancaNome.bind(this)}
        />
        <textarea
          rows={1}
          placeholder="Escreva seu email"
          className="form-cadastro_input"
          onChange={this._handleMudancaEmail.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar User
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
