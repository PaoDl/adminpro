import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '@features/public';

export const isNotAuthenticatedGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.authStatus() === 'authenticated') {
    router.navigateByUrl('/dashboard');
    return false;
  }   
  
  return true;
};
