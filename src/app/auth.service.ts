import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users : Array<User> = [
    {nome : 'Joel', email : 'adm@adm', password : '123'}
  ]

  constructor() { }

  isValid(){

  }
}
