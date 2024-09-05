import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private role: 'teacher' | 'student' = 'student';  // Ejemplo para roles

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

  // Retorna si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Retorna el rol del usuario
  getUserRole(): 'teacher' | 'student' {
    return this.role;
  }

  // Cierra sesión
  logout() {
    this.isAuthenticated = false;
  }
}


