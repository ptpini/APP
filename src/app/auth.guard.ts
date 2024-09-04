import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Importa tu servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  // Este método determina si el usuario puede activar la ruta
  canActivate(): boolean {
    // Verifica si el usuario está autenticado
    if (this.authService.isLoggedIn()) {
      return true; // Permite el acceso si está autenticado
    } else {
      // Si no está autenticado, redirige al login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
