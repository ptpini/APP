import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  loginFailed = false;

  constructor(
    private fb: FormBuilder, 
    private navCtrl: NavController, 
    private authService: AuthService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  async onLogin() {
    const loading = await this.loadingCtrl.create({
      message: 'Iniciando sesión...',
      spinner: 'circles'
    });
    await loading.present();

    const { username, password } = this.loginForm.value;

    if (this.authService.login(username, password)) {
      const role = this.authService.getUserRole();
      loading.dismiss();  // Quitar el loading spinner
      if (role === 'teacher') {
        this.navCtrl.navigateRoot('/teacherhome');
      } else {
        this.navCtrl.navigateRoot('/studenthome');
      }
    } else {
      this.loginFailed = true;
      loading.dismiss();  // Quitar el loading spinner si falla
    }
  }

  resetPassword() {
    console.log('Redirigir a la página de restablecimiento de contraseña');
  }
}
