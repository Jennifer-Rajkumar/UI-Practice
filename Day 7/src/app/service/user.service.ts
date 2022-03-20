import { Injectable } from '@angular/core';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  createUser(user: User) {
    console.log('Primary Email: ' + user.email);
  }
  
}
