import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from '@core/models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sendLogin(loginForm: LoginForm) {
    console.log(loginForm);
  }
  sendRegister(registerForm: RegisterForm) {
    console.log(registerForm);
   }
}
