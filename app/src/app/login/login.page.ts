import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // Aquí podrías agregar la lógica de autenticación
    // Por ahora, simplemente redirigimos al tab principal
    this.router.navigate(['/tabs']);
  }
}
