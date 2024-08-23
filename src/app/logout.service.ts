import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Aquí podrías hacer una llamada a una API real para autenticar al usuario
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
