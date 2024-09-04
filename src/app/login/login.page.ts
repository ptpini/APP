import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  loginFailed = false;

  constructor(private fb: FormBuilder, private navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;

    if (this.authService.login(username, password)) {
      const role = this.authService.getUserRole();
      if (role === 'teacher') {
        this.navCtrl.navigateRoot('/teacherhome');
      } else {
        this.navCtrl.navigateRoot('/studenthome');
      }
    } else {
      this.loginFailed = true;
    }
  }

  resetPassword() {
    console.log('Redirigir a la página de restablecimiento de contraseña');
  }
}
