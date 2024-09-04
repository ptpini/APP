// src/app/home/home.page.ts

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  transactions = [
    { description: 'Pago en tienda', date: '2024-09-03', amount: -45.99 },
    { description: 'Transferencia recibida', date: '2024-09-02', amount: 250.00 },
    { description: 'Pago de servicios', date: '2024-09-01', amount: -120.00 },
    { description: 'Retiro ATM', date: '2024-08-31', amount: -100.00 }
  ];

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) { }

  ngOnInit() {}

  // Función para cerrar sesión
  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/login');
  }

  // Funciones para navegación
  navigateToTransfer() {
    console.log('Navegar a Transferencias');
    // Agrega lógica de navegación
  }

  navigateToTransactions() {
    console.log('Navegar a Transacciones');
    // Agrega lógica de navegación
  }

  navigateToPayments() {
    console.log('Navegar a Pagos');
    // Agrega lógica de navegación
  }

  navigateToCards() {
    console.log('Navegar a Tarjetas');
    // Agrega lógica de navegación
  }

}
