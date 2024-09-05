import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacherhome.page.html',
  styleUrls: ['./teacherhome.page.scss'],
})
export class TeacherHomePage {
  qrCodeGenerated: boolean = false;

  constructor() {}

  // Simula la generación del código QR
  generateQR() {
    this.qrCodeGenerated = true;
  }

  logout() {
    // Lógica para cerrar sesión
  }
}
