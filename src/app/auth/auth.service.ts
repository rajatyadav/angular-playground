import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message = '';
  redirectUrl = ''
  currentUser = null;

  constructor() { }

  get isLoggedin(): boolean {
    return !!this.currentUser
  }

  login(username: string, password: string) {
    if(!username && !password) {
      this.message = 'Please enter username and password';
      return
    }

    if (username === 'doctor') {
      this.currentUser = 'doctor'
      this.message = 'Welcome doctor!'
      return
    }
  }
}
