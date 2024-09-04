import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private role: 'teacher' | 'student' = 'student';

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

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserRole(): 'teacher' | 'student' {
    return this.role;
  }

  logout() {
    this.isAuthenticated = false;
  }
}

