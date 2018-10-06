import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  novoUsuario : User;
  nome : string;
  email : string;
  senha : string;

  constructor() { }

  cadastarUsuario(){
    this.novoUsuario = new User();
    this.novoUsuario.nome = this.nome;
    this.novoUsuario.email = this.email;
    this.novoUsuario.senha = this.senha;
  }
//mandar pro service fazer a conexão com o back-end.

  ngOnInit() {
  }

}
