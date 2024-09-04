import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  role!: 'teacher' | 'student';

  constructor(
    private navCtrl: NavController, 
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.role = this.authService.getUserRole();
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Seguro que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Cerrar sesión',
          handler: () => {
            this.authService.logout();
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });
    await alert.present();
  }
}
