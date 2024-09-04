import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Servicio para manejar la autenticación

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  // Simulamos las tarjetas del usuario
  cards = [
    { type: 'Visa', last4: '1234', expiry: '12/24', status: 'Activa' },
    { type: 'MasterCard', last4: '5678', expiry: '08/23', status: 'Bloqueada' },
    { type: 'American Express', last4: '9012', expiry: '03/25', status: 'Activa' }
  ];

  constructor(private navCtrl: NavController, private authService: AuthService) {}

  ngOnInit() {}

  // Función para gestionar la tarjeta (activar, bloquear, etc.)
  manageCard(card: any) {
    console.log('Gestionar tarjeta:', card);
    // Aquí iría la lógica para activar, desactivar o gestionar la tarjeta
  }

  // Función para añadir una nueva tarjeta
  addCard() {
    console.log('Añadir nueva tarjeta');
    // Aquí puedes abrir un formulario para añadir una nueva tarjeta
  }

  // Función para cerrar sesión
  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/login');
  }
}
