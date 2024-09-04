import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Servicio de autenticación

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  role: 'teacher' | 'student'; // Almacena el rol del usuario

  constructor(private navCtrl: NavController, private authService: AuthService) {}

  ngOnInit() {
    this.role = this.authService.getUserRole(); // Obtener el rol del usuario
  }

  // Navegar a la página para generar el código QR (docente)
  navigateToQR() {
    this.navCtrl.navigateForward('/teacherhome');
  }

  // Navegar a la página para escanear el código QR (estudiante)
  navigateToScanner() {
    this.navCtrl.navigateForward('/studenthome');
  }

  // Cerrar sesión
  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/login');
  }
}
