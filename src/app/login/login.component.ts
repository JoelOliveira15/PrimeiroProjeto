import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser : User;
  email : string;
  password : string;

constructor(private auth : AuthService) { }

  loginUser(){
    if(this.newUser.email === ''&& this.newUser.password === ''){
      alert ('Login e Senha Invalidos')
    }else{
      this.validateUser()
       
    }
  }
  
  validateUser(){
    this.auth.isValid()
  }
  

  ngOnInit() {

  }

 //constructor() { }

  //loginUsuario(){
  //  this.novoUsuario = new User();
   // this.novoUsuario.email = this.email;
   // this.novoUsuario.password = this.password;
 // }
