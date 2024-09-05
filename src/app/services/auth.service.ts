import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private role: 'teacher' | 'student' = 'student';  // Simulación de roles

  // Simulación de autenticación
  login(username: string, password: string): boolean {
    if (username === 'docente' && password === '12345') {
      this.isAuthenticated = true;
      this.role = 'teacher';
      return true;
    } else if (username === 'estudiante' && password === '12345') {
      this.isAuthenticated = true;
      this.role = 'student';
      return true;
    }
    return false;
  }

  // Retorna el estado de autenticación
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Retorna el rol del usuario autenticado
  getUserRole(): 'teacher' | 'student' {
    return this.role;
  }

  // Método para cerrar sesión
  logout() {
    this.isAuthenticated = false;
  }
}
