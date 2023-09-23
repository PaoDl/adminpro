import { Component, computed, inject } from '@angular/core';

import { AuthService } from '@features/public';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public user = computed(() => this.authService.CurrentUser());
  onLogout():void{
    this.authService.logout();
    this.router.navigateByUrl('/');
    };

}
