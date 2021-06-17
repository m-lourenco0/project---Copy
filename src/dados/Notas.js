import { CreateUser } from "../Models/Usuarios";

export default class ArrayDeNotas {
  constructor() {
    this.users = [];
    this._inscritos = [];
  }

  adicionarUser(id, name, email) {
    const _novoUser = new User(0, name, email);
    const novoUser = CreateUser(_novoUser);
    console.log(novoUser);
    //this.users.push(_novoUser);
    //this.notificar();
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func){
    this._inscritos = this._inscritos.filter(f => f!== func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.users);
    });
  }
}

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}