import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './login/services/auth.service';  // Ruta de importación corregida

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Verifica si el usuario está autenticado
    if (this.authService.isLoggedIn()) {
      return true;  // Permite el acceso si está autenticado
    } else {
      // Redirige a la página de login si no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}
