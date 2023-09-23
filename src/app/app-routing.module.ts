import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { isNotAuthenticatedGuard, isAuthenticatedGuard } from '@core/guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [isNotAuthenticatedGuard],
    loadChildren: () => import('@features/public').then(m => m.PublicModule),
  },
  {
    path: 'dashboard',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('@features/admin').then(m => m.AdminModule),
  },
  {
    path: '404',
    loadComponent: () => import('@shared/pages').then(c => c.NotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
