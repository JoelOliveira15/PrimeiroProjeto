import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  novoUsuario : User;
  email : string;
  senha : string;

  constructor() { }

  loginUsuario(){
    this.novoUsuario = new User();
    this.novoUsuario.email = this.email;
    this.novoUsuario.senha = this.senha;
  }
//mandar pro service fazer a conexão com o back-end.

  ngOnInit() {
  }

}
