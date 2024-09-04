// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;

  constructor() { }

  /**
   * Simula el inicio de sesión
   * @param username Nombre de usuario
   * @param password Contraseña
   * @returns boolean si las credenciales son correctas
   */
  login(username: string, password: string): boolean {
    // Cambia esta lógica por una llamada a una API real
    if (username === 'usuario' && password === 'contraseña123') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
