import { Injectable, inject } from '@angular/core';

import { LoginForm, RegisterForm } from '@core/models';
import { ApiService } from '../api.service';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiService = inject(ApiService);
  
  sendLogin(loginForm: LoginForm): Observable<object> {
    return this.apiService.store('auth/login', loginForm)
      .pipe(
        catchError((error) => throwError(() => error.message))
      );
        
  }
  sendRegister(registerForm: RegisterForm) {
    
    console.log(registerForm);
   }
}
