import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logged: boolean = false;

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }

  isLogged() {
    return this.logged;
  }
}
