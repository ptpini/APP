// src/app/login/login.page.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Servicio de autenticación

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
    private authService: AuthService // Inyectamos el servicio de autenticación
  ) { }

  ngOnInit() {
    // Inicializamos el formulario de login
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      const success = this.authService.login(username, password); // Llamada al servicio de autenticación
      if (success) {
        this.loginFailed = false;
        this.navCtrl.navigateRoot('/home'); // Navegamos a la página 'home' si el login es exitoso
      } else {
        this.loginFailed = true; // Mostramos un mensaje de error si falla el login
      }
    }
  }
}
