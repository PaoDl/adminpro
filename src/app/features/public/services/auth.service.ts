import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { ApiService, LocalStorageService } from '@core/services';
import { LoginForm, LoginResponse, RegisterForm, User , AuthStatus} from '../models';

//inyecciones
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //inyecciones
  private apiService = inject(ApiService);
  private localStorageService = inject(LocalStorageService);

  //signal
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>('checking');

  //signal publicas al mundo exterior
  public CurrentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());  

  //Metodos
  login(loginForm: LoginForm): Observable<boolean> {
    return this.apiService
      .store<LoginResponse>('auth/login', loginForm)
      .pipe(
        map( ({reply}) => this.setAuthentication(reply)),
        catchError((error) => throwError(() => error.error.message))
      );
  }

  checkAuthStatus() {
    //TODO:check con el backend
  }
  sendRegister(registerForm: RegisterForm) {
    
    console.log(registerForm);
   }
  //Methodos privados
  logout()  {
    this.localStorageService.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set('noAuthenticated');
  }
  
  private setAuthentication(reply: LoginResponse): boolean {
    this._currentUser.set(reply.user);
    this._authStatus.set('authenticated');
    this.localStorageService.setItem('token', reply.token);
    this.localStorageService.setItem('status', this._authStatus());

    return true;
  }
}