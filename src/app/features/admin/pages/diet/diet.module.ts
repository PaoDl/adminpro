import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import { DietComponent } from './diet.component';
import { BtnComponent } from '@shared/components';


@NgModule({
  declarations: [
    DietComponent,
  ],
  imports: [
    CommonModule,
    DietRoutingModule,
    BtnComponent
  ]
})
export class DietModule { }
