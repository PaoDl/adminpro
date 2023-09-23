import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicLayoutRoutingModule } from './public-layout-routing.module';
import { PublicLayoutComponent } from './public-layout.component';
import { ToastComponent } from '@shared/components';


@NgModule({
  declarations: [
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    PublicLayoutRoutingModule,
    ToastComponent
  ]
})
export class PublicLayoutModule { }