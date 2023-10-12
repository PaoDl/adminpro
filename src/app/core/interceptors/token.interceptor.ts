import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { LocalStorageService, SpinnerService } from '../services';
import { finalize } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  const spinnerService = inject(SpinnerService);

  spinnerService.show();

  const token = localStorageService.getItem('token');

  if (!token) return next(req).pipe(finalize(() => spinnerService.hide()));

  const request = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(request).pipe(finalize(() => spinnerService.hide()));
};