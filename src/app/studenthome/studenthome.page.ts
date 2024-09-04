import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './studenthome.page.html',
  styleUrls: ['./studenthome.page.scss'],
})
export class StudentHomePage {
  attendanceRecorded: boolean = false;
  currentDate!: string;
  currentTime!: string;

  constructor(private authService: AuthService) {}

  openCamera() {
    // Lógica para abrir la cámara y escanear el código QR
    console.log('Cámara abierta para escanear QR');
    this.attendanceRecorded = true;
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
    this.currentTime = now.toLocaleTimeString();
  }

  logout() {
    this.authService.logout();
  }
}
