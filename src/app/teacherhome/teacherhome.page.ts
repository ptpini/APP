import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacherhome.page.html',
  styleUrls: ['./teacherhome.page.scss'],
})
export class TeacherHomePage {
  qrCodeGenerated: boolean = false;
  qrCode: string = '';

  constructor(private authService: AuthService) {}

  generateQR() {
    this.qrCodeGenerated = true;
    this.qrCode = 'ClaseID123456'; // Generación del código QR (puede ser dinámico)
  }

  logout() {
    this.authService.logout();
  }
}
