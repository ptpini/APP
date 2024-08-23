import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // Importar el servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loginFailed = false;

  constructor(
    private fb: FormBuilder, 
    private navCtrl: NavController, 
    private authService: AuthService  // Inyectar el servicio de autenticación
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const success = this.authService.login(
        this.loginForm.value.username, 
        this.loginForm.value.password
      );
      
      if (success) {
        this.loginFailed = false;
        console.log('Login successful');
        this.navCtrl.navigateForward('/home');
      } else {
        this.loginFailed = true;
        console.log('Login failed');
      }
    } else {
      console.log('Form not valid');
    }
  }
}
